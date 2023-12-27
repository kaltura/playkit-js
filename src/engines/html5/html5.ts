import { FakeEventTarget } from '../../event/fake-event-target';
import { FakeEvent } from '../../event/fake-event';
import { EventManager } from '../../event/event-manager';
import {CustomEventType, Html5EventType} from '../../event/event-type';
import MediaSourceProvider from './media-source/media-source-provider';
import VideoTrack from '../../track/video-track';
import AudioTrack from '../../track/audio-track';
import {PKTextTrack, getActiveCues}  from '../../track/text-track';
import ImageTrack from '../../track/image-track';
import {createTimedMetadata} from '../../track/timed-metadata';
import * as Utils from '../../utils/util';
import Html5AutoPlayCapability from './capabilities/html5-autoplay';
import Error from '../../error/error';
import getLogger from '../../utils/logger';
import {DroppedFramesWatcher} from '../dropped-frames-watcher';
import {ThumbnailInfo} from '../../thumbnail/thumbnail-info';
import {IMediaSourceAdapter} from '../../types';
import {CapabilityResult, ICapability} from '../../types';
import {PKABRRestrictionObject, PKDrmConfigObject, PKDrmDataObject, PKMediaSourceObject, PKVideoElementStore} from '../../types';
import {IEngine} from '../../types';
import Track from '../../track/track';

const SHORT_BUFFERING_TIMEOUT: number = 200;

/**
 * Html5 engine for playback.
 * @classdesc
 */
export default class Html5 extends FakeEventTarget implements IEngine {
  /**
   * The video element.
   * @type {HTMLVideoElement}
   * @private
   */
  private _el!: HTMLVideoElement;
  /**
   * The event manager of the engine.
   * @type {EventManager}
   * @private
   */
  private _eventManager: EventManager;
  /**
   * The selected media source adapter of the engine.
   * @type {?IMediaSourceAdapter}
   * @private
   */
  private _mediaSourceAdapter!: IMediaSourceAdapter | null;
  /**
   * The player config object.
   * @type {Object}
   * @private
   */
  private _config: any;
  /**
   * Promise to indicate when a media source adapter can be loaded.
   * @type {Promise<*>}
   * @private
   */
  private _canLoadMediaSourceAdapterPromise: Promise<void>;
  private _droppedFramesWatcher: DroppedFramesWatcher | undefined;
  private _reset: boolean = false;
  /**
   * The html5 class logger.
   * @type {any}
   * @static
   * @private
   */
  private static _logger: any = getLogger('Html5');

  /**
   * The html5 capabilities handlers.
   * @private
   * @static
   */
  private static _capabilities: Array<ICapability> = [Html5AutoPlayCapability];

  /**
   * @type {string} - The engine id.
   * @public
   * @static
   */
  public static id: string = 'html5';

  /**
   * @type {PKVideoElementStore} - Store object which maps between playerId to its video element.
   */
  public static videoElementStore: PKVideoElementStore = {};

  /**
   * Checks if html5 is supported.
   * @returns {boolean} - Whether the html5 is supported.
   */
  public static isSupported(): boolean {
    try {
      const el = Utils.Dom.createElement('video');
      el.volume = 0.5;
      return !!el.canPlayType;
    } catch (e) {
      return false;
    }
  }

  /**
   * Factory method to create an engine.
   * @param {PKMediaSourceObject} source - The selected source object.
   * @param {Object} config - The player configuration.
   * @param {string} playerId - The player id.
   * @returns {IEngine} - New instance of the run time engine.
   * @public
   * @static
   */
  public static createEngine(source: PKMediaSourceObject, config: any, playerId: string): IEngine {
    return new this(source, config, playerId);
  }

  /**
   * Checks if the engine can play a given source.
   * @param {PKMediaSourceObject} source - The source object to check.
   * @param {boolean} preferNative - prefer native flag.
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @returns {boolean} - Whether the engine can play the source.
   * @public
   * @static
   */
  public static canPlaySource(source: PKMediaSourceObject, preferNative: boolean, drmConfig: PKDrmConfigObject): boolean {
    return MediaSourceProvider.canPlaySource(source, preferNative, drmConfig);
  }

  /**
   * Runs the html5 capabilities tests.
   * @returns {void}
   * @public
   * @static
   */
  public static runCapabilities(): void {
    Html5._capabilities.forEach(capability => capability.runCapability());
  }

  /**
   * Gets the html5 capabilities.
   * @return {Promise<Object>} - The html5 capabilities object.
   * @public
   * @static
   */
  public static getCapabilities():  Promise<any> {
    const promises: CapabilityResult[] = [];
    Html5._capabilities.forEach(capability => promises.push(capability.getCapability()));
    return Promise.all(promises).then(arrayOfResults => {
      const mergedResults: CapabilityResult = {};
      arrayOfResults.forEach(res => Object.assign(mergedResults, res));
      return {[Html5.id]: mergedResults};
    });
  }

  /**
   * Sets an engine capabilities.
   * @param {Object} capabilities - The engine capabilities.
   * @returns {void}
   * @public
   * @static
   */
  public static setCapabilities(capabilities: {[name: string]: any}): void {
    Html5._capabilities.forEach(capability => capability.setCapabilities(capabilities));
  }

  /**
   * For browsers which block auto play, use the user gesture to open the video element and enable playing via API.
   * @returns {void}
   * @param {string} playerId - the id to be set as the key of the video element
   * @private
   * @public
   */
  public static prepareVideoElement(playerId: string): void {
    if (!Html5.videoElementStore[playerId]) {
      Html5._logger.debug(`Create the video element for playing ${playerId}`);
      const videoElement = Utils.Dom.createElement('video');
      Html5.videoElementStore[playerId] = videoElement;
    }
    Html5._logger.debug(`Prepare the video element for playing ${playerId}`);
    Html5.videoElementStore[playerId].load();
  }

  /**
   * The player playback rates.
   * @type {Array<number>}
   */
  public static PLAYBACK_RATES: Array<number> = [0.5, 1, 1.5, 2];

  /**
   * @constructor
   * @param {PKMediaSourceObject} source - The selected source object.
   * @param {Object} config - The player configuration.
   * @param {string} playerId - The player id.
   */
  constructor(source: PKMediaSourceObject, config: any, playerId: string) {
    super();
    this._eventManager = new EventManager();
    this._canLoadMediaSourceAdapterPromise = Promise.resolve();
    this._createVideoElement(playerId);
    this._init(source, config);
  }

  /**
   * Restores the engine.
   * @param {PKMediaSourceObject} source - The selected source object.
   * @param {Object} config - The player configuration.
   * @returns {void}
   */
  public restore(source: PKMediaSourceObject, config: any): void {
    this.reset();
    this._init(source, config);
  }

  /**
   * Resets the engine.
   * @returns {void}
   */
  public reset(): void {
    if (this._reset) return;
    this._reset = true;
    this._eventManager.removeAll();
    if (this._droppedFramesWatcher) {
      this._droppedFramesWatcher.destroy();
      this._droppedFramesWatcher = undefined;
    }
    this._canLoadMediaSourceAdapterPromise = new Promise((resolve, reject) => {
      const mediaSourceAdapterDestroyed = this._mediaSourceAdapter ? this._mediaSourceAdapter.destroy() : Promise.resolve();
      if (this._el && this._el.src) {
        mediaSourceAdapterDestroyed.then(() => {
          Utils.Dom.setAttribute(this._el, 'src', '');
          Utils.Dom.removeAttribute(this._el, 'src');
          resolve();
        }, reject);
      } else {
        mediaSourceAdapterDestroyed.then(resolve, reject);
      }
    });
    this._mediaSourceAdapter = null;
  }

  /**
   * Destroys the engine.
   * @public
   * @returns {void}
   */
  public destroy(): void {
    this.detach();
    if (this._el) {
      this.pause();
      Utils.Dom.removeAttribute(this._el, 'src');
      Utils.Dom.removeChild(this._el.parentNode, this._el);
    }
    this._eventManager.destroy();
    MediaSourceProvider.destroy();
    if (this._droppedFramesWatcher) {
      this._droppedFramesWatcher.destroy();
      this._droppedFramesWatcher = undefined;
    }
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.destroy();
      this._mediaSourceAdapter = null;
    }
  }

  /**
   * Get the engine's id
   * @public
   * @returns {string} the engine's id
   */
  public get id(): string {
    return Html5.id;
  }

  /**
   * attach media - return the media source to handle the video tag
   * @public
   * @returns {void}
   */
  public attachMediaSource(): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.attachMediaSource();
    }
  }

  /**
   * detach media - will remove the media source from handling the video
   * @public
   * @returns {void}
   */
  public detachMediaSource(): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.detachMediaSource();
    }
  }

  /**
   * Listen to the video element events and triggers them from the engine.
   * @public
   * @returns {void}
   */
  public attach(): void {
    Object.keys(Html5EventType).forEach(html5Event => {
      if (![Html5EventType.ERROR, Html5EventType.WAITING].includes(Html5EventType[html5Event])) {
        this._eventManager.listen(this._el, Html5EventType[html5Event], () => {
          return this.dispatchEvent(new FakeEvent(Html5EventType[html5Event]));
        });
      }
    });
    this._eventManager.listen(this._el, Html5EventType.ERROR, () => this._handleVideoError());
    this._eventManager.listen(this._el, Html5EventType.WAITING, () => this._handleWaiting());
    this._handleMetadataTrackEvents();
    this._eventManager.listen(this._el.textTracks, 'addtrack', (event: any) => {
      if (PKTextTrack.isNativeTextTrack(event.track)) {
        this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_TRACK_ADDED, {track: event.track}));
      }
    });
    const mediaSourceAdapter = this._mediaSourceAdapter;
    if (mediaSourceAdapter) {
      this._eventManager.listen(mediaSourceAdapter, CustomEventType.VIDEO_TRACK_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, CustomEventType.AUDIO_TRACK_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, CustomEventType.TEXT_TRACK_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, CustomEventType.IMAGE_TRACK_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, CustomEventType.ABR_MODE_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, CustomEventType.TEXT_CUE_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, CustomEventType.TRACKS_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, CustomEventType.FRAG_LOADED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, CustomEventType.DRM_LICENSE_LOADED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, CustomEventType.MANIFEST_LOADED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, Html5EventType.ERROR, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, Html5EventType.TIME_UPDATE, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, Html5EventType.PLAYING, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, Html5EventType.WAITING, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, CustomEventType.MEDIA_RECOVERED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, CustomEventType.TIMED_METADATA_ADDED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(mediaSourceAdapter, 'hlsFragParsingMetadata', (event: FakeEvent) => this.dispatchEvent(event));
      if (this._droppedFramesWatcher) {
        this._eventManager.listen(this._droppedFramesWatcher, CustomEventType.FPS_DROP, (event: FakeEvent) => this.dispatchEvent(event));
      }
    }
  }

  /**
   * Remove the listeners of the video element events.
   * @public
   * @returns {void}
   */
  public detach(): void {
    Object.keys(Html5EventType).forEach(html5Event => {
      this._eventManager.unlisten(this._el, Html5EventType[html5Event]);
    });
    if (this._mediaSourceAdapter) {
      this._eventManager.unlisten(this._mediaSourceAdapter, CustomEventType.VIDEO_TRACK_CHANGED);
      this._eventManager.unlisten(this._mediaSourceAdapter, CustomEventType.AUDIO_TRACK_CHANGED);
      this._eventManager.unlisten(this._mediaSourceAdapter, CustomEventType.TEXT_TRACK_CHANGED);
      this._eventManager.unlisten(this._mediaSourceAdapter, CustomEventType.TEXT_CUE_CHANGED);
    }
  }

  /**
   * @returns {HTMLVideoElement} - The video element.
   * @public
   */
  public getVideoElement(): HTMLVideoElement {
    return this._el;
  }

  /**
   * Select a new video track.
   * @param {VideoTrack} videoTrack - The video track object to set.
   * @returns {void}
   */
  public selectVideoTrack(videoTrack: VideoTrack): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.selectVideoTrack(videoTrack);
    }
  }

  /**
   * Select a new audio track.
   * @param {AudioTrack} audioTrack - The video track object to set.
   * @returns {void}
   */
  public selectAudioTrack(audioTrack: AudioTrack): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.selectAudioTrack(audioTrack);
    }
  }

  /**
   * Select a new text track.
   * @param {PKTextTrack} textTrack - The playkit text track object to set.
   * @returns {void}
   */
  public selectTextTrack(textTrack: PKTextTrack): void {
    this._removeCueChangeListeners();
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.selectTextTrack(textTrack);
    }
    this.resetAllCues();
    this._addCueChangeListener();
  }

  /**
   * Select a new image track.
   * @param {ImageTrack} imageTrack - The image track object to set.
   * @returns {void}
   */
  public selectImageTrack(imageTrack: ImageTrack): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.selectImageTrack(imageTrack);
    }
  }

  /**
   * Hide the text track
   * @function hideTextTrack
   * @returns {void}
   * @public
   */
  public hideTextTrack(): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.hideTextTrack();
    }
    this._removeCueChangeListeners();
  }

  /**
   * Enables adaptive bitrate switching according to the media source extension logic.
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @public
   */
  public enableAdaptiveBitrate(): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.enableAdaptiveBitrate();
    }
  }

  /**
   * Checking if adaptive bitrate switching is enabled.
   * @function isAdaptiveBitrateEnabled
   * @returns {boolean} - Whether adaptive bitrate is enabled.
   * @public
   */
  public isAdaptiveBitrateEnabled(): boolean {
    if (this._mediaSourceAdapter) {
      return this._mediaSourceAdapter.isAdaptiveBitrateEnabled();
    }
    return false;
  }

  /**
   * Apply ABR restriction
   * @function applyABRRestriction
   * @param {PKABRRestrictionObject} restriction - abr restriction config
   * @returns {void}
   * @public
   */
  public applyABRRestriction(restriction: PKABRRestrictionObject): void {
    if (this._mediaSourceAdapter) {
      return this._mediaSourceAdapter.applyABRRestriction(restriction);
    }
  }

  /**
   * Seeking to live edge.
   * @function seekToLiveEdge
   * @returns {void}
   * @public
   */
  public seekToLiveEdge(): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.seekToLiveEdge();
    }
  }

  public isOnLiveEdge(): boolean {
    if (this._mediaSourceAdapter) {
      return this._mediaSourceAdapter.isOnLiveEdge();
    }
    return false;
  }

  /**
   * Get the start time of DVR window in live playback in seconds.
   * @returns {Number} - start time of DVR window.
   * @public
   */
  public getStartTimeOfDvrWindow(): number {
    return this._mediaSourceAdapter ? this._mediaSourceAdapter.getStartTimeOfDvrWindow() : 0;
  }

  /**
   * Checking if the current playback is live.
   * @function isLive
   * @returns {boolean} - Whether playback is live.
   * @public
   */
  public isLive(): boolean {
    return this._mediaSourceAdapter ? this._mediaSourceAdapter.isLive() : false;
  }

  /**
   * Start/resume playback.
   * @public
   * @returns {?Promise<*>} - play promise
   */
  public play(): Promise<void> {
    const playPromise = this._el.play();
    if (playPromise) {
      playPromise.catch(err => this.dispatchEvent(new FakeEvent(CustomEventType.PLAY_FAILED, {error: err})));
    }
    return playPromise;
  }

  /**
   * Pause playback.
   * @public
   * @returns {void}
   */
  public pause(): void {
    return this._el.pause();
  }

  /**
   * Load media.
   * @param {number} startTime - Optional time to start the video from.
   * @public
   * @returns {Promise<Object>} - The loaded data
   */
  public load(startTime?: number): Promise<{tracks: Track[]}> {
    this._el.load();
    return this._canLoadMediaSourceAdapterPromise
      .then(() => {
        return this._mediaSourceAdapter ? this._mediaSourceAdapter.load(startTime) : Promise.resolve({} as {tracks: Track[]});
      })
      .catch(error => {
        this.dispatchEvent(new FakeEvent(Html5EventType.ERROR, error));
        return Promise.reject(error);
      });
  }

  /**
   * Request the engine to enter picture in picture mode
   * @public
   * @returns {void}
   */
  public enterPictureInPicture(): void {
    try {
      // Currently it's supported in chrome and in safari. So if we consider checking support before,
      // we can use this flag to distinguish between the two. In the future we might need a different method.
      // Second condition is because flow does not support this API yet
      if (document.pictureInPictureEnabled && typeof this._el.requestPictureInPicture === 'function') {
        this._el.requestPictureInPicture().catch(error => {
          this.dispatchEvent(
            new FakeEvent(
              Html5EventType.ERROR,
              new Error(Error.Severity.RECOVERABLE, Error.Category.PLAYER, Error.Code.ENTER_PICTURE_IN_PICTURE_FAILED, error)
            )
          );
        });
        // @ts-expect-error -  Property 'webkitSetPresentationMode' does not exist on type 'HTMLVideoElement'
      } else if (typeof this._el.webkitSetPresentationMode === 'function') {
        // @ts-expect-error -  Property 'webkitSetPresentationMode' does not exist on type 'HTMLVideoElement'
        this._el.webkitSetPresentationMode('picture-in-picture');
        // Safari does not fire this event but Chrome does, normalizing the behaviour
        setTimeout(() => this.dispatchEvent(new FakeEvent(Html5EventType.ENTER_PICTURE_IN_PICTURE)), 0);
      }
    } catch (error) {
      this.dispatchEvent(
        new FakeEvent(
          Html5EventType.ERROR,
          new Error(Error.Severity.RECOVERABLE, Error.Category.PLAYER, Error.Code.ENTER_PICTURE_IN_PICTURE_FAILED, error)
        )
      );
    }
  }

  /**
   * Request the engine to exit picture in picture mode
   * @public
   * @returns {void}
   */
  public exitPictureInPicture(): void {
    try {
      // Currently it's supported in chrome and in safari. So if we consider checking support before,
      // we can use this flag to distinguish between the two. In the future we might need a different method.
      // Second condition is because flow does not support this API yet
      if (document.pictureInPictureEnabled && typeof document.exitPictureInPicture === 'function' && this._el === document.pictureInPictureElement) {
        document.exitPictureInPicture().catch(error => {
          this.dispatchEvent(
            new FakeEvent(
              Html5EventType.ERROR,
              new Error(Error.Severity.RECOVERABLE, Error.Category.PLAYER, Error.Code.EXIT_PICTURE_IN_PICTURE_FAILED, error)
            )
          );
        });
      } else if (typeof this._el['webkitSetPresentationMode'] === 'function') {
        //@ts-expect-error - Property 'webkitSetPresentationMode' does not exist on type 'HTMLVideoElement'.
        this._el.webkitSetPresentationMode('inline');
      }
    } catch (error) {
      this.dispatchEvent(
        new FakeEvent(
          Html5EventType.ERROR,
          new Error(Error.Severity.RECOVERABLE, Error.Category.PLAYER, Error.Code.EXIT_PICTURE_IN_PICTURE_FAILED, error)
        )
      );
    }
  }

  /**
   * Check if the engine is in picture in picture mode
   * @public
   * @return {boolean} if the engine is in picture in picture mode or not
   */
  public isPictureInPictureSupported(): boolean {
    // due to a bug in shaka pip_webkit which sets pictureInPictureEnabled to true in unsupported devices like iphones we will
    // first rely on the response of webkitSupportsPresentationMode (if exists) and only if not on the pictureInPictureEnabled property
    //@ts-expect-error - Property 'webkitSupportsPresentationMode' does not exist on type 'HTMLVideoElement'.
    if (typeof this._el.webkitSupportsPresentationMode === 'function') {
      //@ts-expect-error - Property 'webkitSupportsPresentationMode' does not exist on type 'HTMLVideoElement'.
      return this._el.webkitSupportsPresentationMode('picture-in-picture');
    } else {
      return !!document.pictureInPictureEnabled;
    }
  }

  /**
   *  Returns in-stream thumbnail for a chosen time.
   * @param {number} time - playback time.
   * @public
   * @return {?ThumbnailInfo} - Thumbnail info
   */
  public getThumbnail(time: number): ThumbnailInfo | null {
    if (this._mediaSourceAdapter) {
      return this._mediaSourceAdapter.getThumbnail(time);
    }
    return null;
  }

  /**
   * Set a source.
   * @param {string} source - Source to set.
   * @public
   * @returns {void}
   */
  public set src(source: string) {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.src = source;
    }
  }

  /**
   * Get the source url.
   * @returns {string} - The source url.
   * @public
   */
  public get src(): string {
    if (this._mediaSourceAdapter) {
      return this._mediaSourceAdapter.src;
    }
    return '';
  }

  /**
   * Get the current time in seconds.
   * @returns {Number} - The current playback time.
   * @public
   */
  public get currentTime(): number {
    return this._el ? this._el.currentTime : 0;
  }

  /**
   * Set the current time in seconds.
   * @param {Number} to - The number to set in seconds.
   * @public
   * @returns {void}
   */
  public set currentTime(to: number) {
    if (this._el) {
      this._el.currentTime = to;
    }
  }

  /**
   * Get the duration in seconds.
   * @returns {Number} - The playback duration.
   * @public
   */
  public get duration(): number {
    return this._el.duration;
  }

  public get liveDuration(): number {
    return this._mediaSourceAdapter ? this._mediaSourceAdapter.liveDuration : -1;
  }

  /**
   * Set playback volume.
   * @param {Number} vol - The volume to set.
   * @public
   * @returns {void}
   */
  public set volume(vol: number) {
    this._el.volume = vol;
  }

  /**
   * Get playback volume.
   * @returns {Number} - The volume value of the video element.
   * @public
   */
  public get volume(): number {
    return this._el.volume;
  }

  /**
   * Get paused state.
   * @returns {boolean} - The paused value of the video element.
   * @public
   */
  public get paused(): boolean {
    return this._el.paused;
  }

  /**
   * Get seeking state.
   * @returns {boolean} - The seeking value of the video element.
   * @public
   */
  public get seeking(): boolean {
    return this._el.seeking;
  }

  /**
   * Get the first seekable range (part) of the video in seconds.
   * @returns {TimeRanges} - First seekable range (part) of the video in seconds.
   * @public
   */
  public get seekable(): TimeRanges {
    return this._el.seekable;
  }

  /**
   * Get the first played range (part) of the video in seconds.
   * @returns {TimeRanges} - First played range (part) of the video in seconds.
   * @public
   */
  public get played(): TimeRanges {
    return this._el.played;
  }

  /**
   * Get the first buffered range (part) of the video in seconds.
   * @returns {TimeRanges} - First buffered range (part) of the video in seconds.
   * @public
   */
  public get buffered(): TimeRanges {
    return this._el.buffered;
  }

  /**
   * Set player muted state.
   * @param {boolean} mute - The new mute value.
   * @public
   * @returns {void}
   */
  public set muted(mute: boolean) {
    this._el.muted = mute;
  }

  /**
   * Get player muted state.
   * @returns {boolean} - The muted value of the video element.
   * @public
   */
  public get muted(): boolean {
    return this._el.muted;
  }

  /**
   * Get the default mute value.
   * @returns {boolean} - The defaultMuted of the video element.
   * @public
   */
  public get defaultMuted(): boolean {
    return this._el.defaultMuted;
  }

  /**
   * Sets an image to be shown while the video is downloading, or until the user hits the play button.
   * @param {string} poster - The image url to be shown.
   * @returns {void}
   * @public
   */
  public set poster(poster: string) {
    this._el.poster = poster;
  }

  /**
   * Gets an image to be shown while the video is downloading, or until the user hits the play button.
   * @returns {poster} - The image url.
   * @public
   */
  public get poster(): string {
    return this._el.poster;
  }

  /**
   * Specifies if and how the author thinks that the video should be loaded when the page loads.
   * @param {string} preload - The preload value.
   * @public
   * @returns {void}
   */
  public set preload(preload:  'none' | 'metadata' | 'auto' | '') {
    this._el.preload = preload;
  }

  /**
   * Gets the preload value of the video element.
   * @returns {string} - The preload value.
   * @public
   */
  public get preload():  'none' | 'metadata' | 'auto' | '' {
    return this._el.preload;
  }

  /**
   * Set if the video will automatically start playing as soon as it can do so without stopping.
   * @param {boolean} autoplay - The autoplay value.
   * @public
   * @returns {void}
   */
  public set autoplay(autoplay: boolean) {
    this._el.autoplay = autoplay;
  }

  /**
   * Gets the autoplay value of the video element.
   * @returns {boolean} - The autoplay value.
   * @public
   */
  public get autoplay(): boolean {
    return this._el.autoplay;
  }

  /**
   * Set to specifies that the video will start over again, every time it is finished.
   * @param {boolean} loop - the loop value.
   * @public
   * @returns {void}
   */
  public set loop(loop: boolean) {
    this._el.loop = loop;
  }

  /**
   * Gets the loop value of the video element.
   * @returns {boolean} - The loop value.
   * @public
   */
  public get loop(): boolean {
    return this._el.loop;
  }

  /**
   * Set to specifies that video controls should be displayed.
   * @param {boolean} controls - the controls value.
   * @public
   * @returns {void}
   */
  public set controls(controls: boolean) {
    this._el.controls = controls;
  }

  /**
   * Gets the controls value of the video element.
   * @returns {boolean} - The controls value.
   * @public
   */
  public get controls(): boolean {
    return this._el.controls;
  }

  /**
   * Sets the current playback speed of the audio/video.
   * @param {Number} playbackRate - The playback speed value.
   * @public
   * @returns {void}
   */
  public set playbackRate(playbackRate: number) {
    this._el.playbackRate = playbackRate;
  }

  /**
   * Gets the current playback speed of the audio/video.
   * @returns {Number} - The current playback speed value.
   * @public
   */
  public get playbackRate(): number {
    return this._el.playbackRate;
  }

  /**
   * Sets the default playback speed of the audio/video.
   * @param {Number} defaultPlaybackRate - The default playback speed value.
   * @public
   * @returns {void}
   */
  public set defaultPlaybackRate(defaultPlaybackRate: number) {
    this._el.defaultPlaybackRate = defaultPlaybackRate;
  }

  /**
   * Gets the default playback speed of the audio/video.
   * @returns {Number} - The default playback speed value.
   * @public
   */
  public get defaultPlaybackRate(): number {
    return this._el.defaultPlaybackRate;
  }

  /**
   * The ended property returns whether the playback of the audio/video has ended.
   * @returns {boolean} - The ended value.
   * @public
   */
  public get ended(): boolean {
    return this._el.ended;
  }

  /**
   * The error property returns a MediaError object.
   * @returns {MediaError} - The MediaError object has a code property containing the error state of the audio/video.
   * @public
   */
  public get error(): MediaError | null {
    return this._el.error;
  }

  /**
   * @returns {Number} - The current network state (activity) of the audio/video.
   * @public
   */
  public get networkState(): number {
    return this._el.networkState;
  }

  /**
   * Indicates if the audio/video is ready to play or not.
   * @returns {Number} - The current ready state of the audio/video.
   * 0 = HAVE_NOTHING - no information whether or not the audio/video is ready.
   * 1 = HAVE_METADATA - metadata for the audio/video is ready.
   * 2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond.
   * 3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available.
   * 4 = HAVE_ENOUGH_DATA - enough data available to start playing.
   */
  public get readyState(): number {
    return this._el.readyState;
  }

  /**
   * @returns {Number} - The height of the video player, in pixels.
   * @public
   */
  public get videoHeight(): number {
    return this._el.videoHeight;
  }

  /**
   * @returns {Number} - The width of the video player, in pixels.
   * @public
   */
  public get videoWidth(): number {
    return this._el.videoWidth;
  }

  /**
   * @param {boolean} playsinline - Whether to set on the video tag the playsinline attribute.
   */
  public set playsinline(playsinline: boolean) {
    if (playsinline) {
      this._el.setAttribute('playsinline', '');
    } else {
      this._el.removeAttribute('playsinline');
    }
  }

  /**
   * @returns {boolean} - Whether the video tag has an attribute of playsinline.
   */
  public get playsinline(): boolean {
    return this._el.getAttribute('playsinline') === '';
  }

  /**
   * Set crossOrigin attribute.
   * @param {?string} crossOrigin - 'anonymous' or 'use-credentials'
   */
  public set crossOrigin(crossOrigin: string) {
    if (typeof crossOrigin === 'string') {
      this._el.setAttribute('crossorigin', crossOrigin);
    } else {
      this._el.removeAttribute('crossorigin');
    }
  }

  /**
   * Get crossOrigin attribute.
   * @returns {?string} - 'anonymous' or 'use-credentials'
   */
  public get crossOrigin(): string | null {
    return this._el.getAttribute('crossorigin');
  }

  /**
   * get the playback rates
   * @return {number[]} - playback rates
   */
  public get playbackRates(): Array<number> {
    return Html5.PLAYBACK_RATES;
  }

  /**
   * get if the engine's video element is the one in the PIP
   * @return {boolean} boolean - is in PIP
   */
  public get isInPictureInPicture(): boolean {
    // Check if the engine's video element is the one in the PIP
    return (
      (!!document.pictureInPictureElement && document.pictureInPictureElement !== null && this._el === document.pictureInPictureElement) ||
      // @ts-expect-error - Property 'webkitPresentationMode' does not exist on type 'HTMLVideoElement'
      (!!this._el.webkitPresentationMode && this._el.webkitPresentationMode === 'picture-in-picture')
    );
  }

  /**
   * Initializes the engine.
   * @param {PKMediaSourceObject} source - The selected source object.
   * @param {Object} config - The player configuration.
   * @private
   * @returns {void}
   */
  private _init(source: PKMediaSourceObject, config: any): void {
    this._config = config;
    this._reset = false;
    this._loadMediaSourceAdapter(source);
    this.attach();
  }

  /**
   * Creates a video element dom object.
   * @param {string} playerId - the id to be set as the key of the video element
   * @private
   * @returns {void}
   */
  private _createVideoElement(playerId: string): void {
    this._el = Html5.videoElementStore[playerId] || Utils.Dom.createElement('video');
    this._el.id = Utils.Generator.uniqueId(5);
    this._el.controls = false;
  }

  /**
   * Loads the appropriate media source extension adapter.
   * @param {PKMediaSourceObject} source - The selected source object.
   * @private
   * @returns {void}
   */
  private _loadMediaSourceAdapter(source: PKMediaSourceObject): void {
    this._mediaSourceAdapter = MediaSourceProvider.getMediaSourceAdapter(this.getVideoElement(), source, this._config);
    if (this._mediaSourceAdapter) {
      this._droppedFramesWatcher = new DroppedFramesWatcher(this._mediaSourceAdapter, this._config.abr, this._el);
    }
  }

  /**
   * Add cuechange listener to active textTrack.
   * @returns {void}
   * @private
   */
  private _addCueChangeListener(): void {
    const textTrackEl = Array.from(this._el.textTracks).find(track => PKTextTrack.isNativeTextTrack(track) && track.mode !== PKTextTrack.MODE.DISABLED);
    if (textTrackEl) {
      this._eventManager.listen(textTrackEl, 'cuechange', (e: FakeEvent) => this._onCueChange(e));
    }
  }

  /**
   * Remove cuechange listeners from textTracks
   * @returns {void}
   * @private
   */
  private _removeCueChangeListeners(): void {
    Array.from(this._el.textTracks)
      .filter(track => !PKTextTrack.isMetaDataTrack(track))
      .forEach(track => {
        this._eventManager.unlisten(track, 'cuechange');
      });
  }

  /**
   * oncuechange event handler.
   * @param {FakeEvent} e - The event arg.
   * @returns {void}
   * @private
   */
  private _onCueChange(e: FakeEvent): void {
    const activeCues: TextTrackCueList = e.currentTarget.activeCues;
    const normalizedActiveCues = getActiveCues(activeCues);
    this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_CUE_CHANGED, {cues: normalizedActiveCues}));
  }

  /**
   * set hasBeenReset to true for all the cues. (use case: when cues should be recalculated for display)
   * @returns {void}
   */
  public resetAllCues(): void {
    const activeTextTrack = Array.from(this._el.textTracks).find(
      track => PKTextTrack.isNativeTextTrack(track) && track.mode !== PKTextTrack.MODE.DISABLED
    );
    if (activeTextTrack) {
      for (let i = 0; i < activeTextTrack.cues!.length; i++) {
        // @ts-expect-error - Property 'hasBeenReset' does not exist on type 'TextTrackCue'
        activeTextTrack.cues![i].hasBeenReset = true;
      }
    }
  }

  /**
   * Handles errors from the video element
   * @returns {void}
   * @private
   */
  private _handleVideoError(): void {
    if (!this._el.error) return;
    const code = this._el.error.code;
    if (code === MediaError.MEDIA_ERR_ABORTED) {
      // Ignore this error code.js, which should only occur when navigating away or
      // deliberately stopping playback of HTTP content.
      return;
    }

    // Extra error information from MS Edge and IE11:
    const extended = this._getMsExtendedError();

    // Extra error information from Chrome:
    // $FlowFixMe
    const message = this._el.error.message;
    if (this._mediaSourceAdapter && !this._mediaSourceAdapter.handleMediaError(this._el.error)) {
      const error = new Error(Error.Severity.CRITICAL, Error.Category.MEDIA, Error.Code.VIDEO_ERROR, {
        code: code,
        extended: extended,
        message: message
      });
      this.dispatchEvent(new FakeEvent(Html5EventType.ERROR, error));
    }
  }

  private _handleWaiting(): void {
    let playing = false;
    this._eventManager.listenOnce(this._el, Html5EventType.PLAYING, () => (playing = true));
    setTimeout(() => {
      // prevent sending waiting event for too short buffering
      if (!playing) {
        this.dispatchEvent(new FakeEvent(Html5EventType.WAITING));
      }
    }, SHORT_BUFFERING_TIMEOUT);
  }

  /**
   * more info about the error
   * @returns {string} info about the video element error
   * @private
   */
  private _getMsExtendedError(): string {
    //@ts-expect-error - Property 'msExtendedCode' does not exist on type 'MediaError'
    let extended = this._el.error.msExtendedCode;
    if (extended) {
      // Convert to unsigned:
      if (extended < 0) {
        extended += Math.pow(2, 32);
      }
      // Format as hex:
      extended = extended.toString(16);
    }
    return extended;
  }

  private _handleMetadataTrackEvents(): void {
    const listenToCueChange = (metadataTrack: any): void => {
      metadataTrack.mode = PKTextTrack.MODE.HIDDEN;
      this._eventManager.listen(metadataTrack, 'cuechange', () => {
        let activeCues: VTTCue[] = [];
        Array.from(this._el.textTracks).forEach((track: TextTrack) => {
          if (PKTextTrack.isMetaDataTrack(track)) {
            activeCues = activeCues.concat(getActiveCues(track.activeCues!));
          }
        });
        activeCues = activeCues.sort((a: VTTCue, b: VTTCue) => {
          return a.startTime - b.startTime;
        });
        this.dispatchEvent(new FakeEvent(CustomEventType.TIMED_METADATA, {cues: activeCues}));
        this.dispatchEvent(
          new FakeEvent(CustomEventType.TIMED_METADATA_CHANGE, {
            cues: activeCues.map(cue => createTimedMetadata(cue))
          })
        );
      });
    };

    Array.from(this._el.textTracks).forEach((track: TextTrack) => {
      if (PKTextTrack.isMetaDataTrack(track)) {
        listenToCueChange(track);
      }
    });

    this._eventManager.listen(this._el.textTracks, 'addtrack', (event: any) => {
      if (PKTextTrack.isMetaDataTrack(event.track)) {
        listenToCueChange(event.track);
      }
    });

    this._eventManager.listen(this._el.textTracks, 'change', () => {
      Array.from(this._el.textTracks).forEach((track: TextTrack) => {
        if (PKTextTrack.isMetaDataTrack(track) && track.mode !== PKTextTrack.MODE.HIDDEN) {
          track.mode = PKTextTrack.MODE.HIDDEN;
        }
      });
    });
  }

  public get targetBuffer(): number {
    if (this._mediaSourceAdapter) {
      return this._mediaSourceAdapter.targetBuffer;
    }
    return NaN;
  }

  public get availableBuffer(): number {
    let retVal = 0;
    if (this.buffered) {
      for (let i = 0; i < this.buffered.length; i++) {
        // find the relevant buffer time range containing the current time
        if (this.buffered.start(i) <= this._el.currentTime && this._el.currentTime <= this.buffered.end(i)) {
          retVal = this.buffered.end(i) - this._el.currentTime;
        }
      }
    }
    return retVal;
  }

  public addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack | undefined {
    return this._el.addTextTrack(kind, label, language);
  }

  /**
   * get the native text tracks
   * @function getNativeTextTracks
   * @returns {Array<TextTrack>} - The native TextTracks array.
   * @public
   */
  public getNativeTextTracks(): TextTrack[] {
    return Array.from(this._el.textTracks);
  }

  public getDrmInfo(): PKDrmDataObject | null {
    return this._mediaSourceAdapter ? this._mediaSourceAdapter.getDrmInfo() : null;
  }
}
