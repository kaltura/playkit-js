import { FakeEvent } from '../../../event/fake-event';
import { FakeEventTarget } from '../../../event/fake-event-target';
import Error from '../../../error/error';
import { CustomEventType, Html5EventType } from '../../../event/event-type';
import getLogger from '../../../utils/logger';
import Track from '../../../track/track';
import TextStyle from '../../../track/text-style';
import VideoTrack from '../../../track/video-track';
import AudioTrack from '../../../track/audio-track';
import PKTextTrack from '../../../track/text-track';
import { EventManager } from '../../../event/event-manager';
import ImageTrack from '../../../track/image-track';
import { ThumbnailInfo } from '../../../thumbnail/thumbnail-info';
import { IMediaSourceAdapter } from '../../../types';
import { PKABRRestrictionObject, PKDrmDataObject, PKMediaSourceCapabilities, PKMediaSourceObject } from '../../../types';
import { ILogger } from 'js-logger';

const CURRENT_OR_NEXT_SEGMENT_COUNT: number = 2;

export default class BaseMediaSourceAdapter extends FakeEventTarget implements IMediaSourceAdapter {
  /**
   * The id of the adapter.
   * @member {string} id
   * @static
   * @private
   */
  public static id: string = 'BaseAdapter';
  /**
   * Passing the getLogger function to the actual media source adapter.
   * @type {Function}
   * @static
   */
  public static getLogger: (name?: string) => ILogger = getLogger;

  protected static _logger = BaseMediaSourceAdapter.getLogger(BaseMediaSourceAdapter.id);

  /**
   * The adapter config.
   * @member {Object} _config
   * @private
   */
  protected _config: any;

  /**
   * The source object.
   * @member {PKMediaSourceObject} _sourceObj
   * @private
   */
  protected _sourceObj?: PKMediaSourceObject;

  /**
   * The dom video element.
   * @member {HTMLVideoElement} _videoElement
   * @private
   */
  protected _videoElement: HTMLVideoElement;

  /**
   * The adapter capabilities
   * @private
   */
  protected _capabilities: PKMediaSourceCapabilities = { fpsControl: false };

  /**
   * The event manager of the adapter.
   * @type {EventManager}
   * @private
   */
  protected _eventManager: EventManager;

  /**
   * The load promise
   * @member {Promise<{tracks: Array<Track>}>} - _loadPromise
   * @type {Promise<{tracks: Array<Track>}>}
   * @private
   */
  protected _loadPromise: Promise<{ tracks: Array<Track> }> | undefined;

  /**
   * The duration change handler.
   * @type {Function}
   * @private
   */
  private _onDurationChanged: (...args: any) => any;

  /**
   * Checks if the media source adapter is supported.
   * @function isSupported
   * @returns {boolean} - Whether the media source adapter is supported.
   * @static
   */
  public static isSupported(): boolean {
    return true;
  }

  /**
   * check for media source supported on browser
   * @static
   * @returns {boolean} - Whether the media source is supported.
   */
  public static isMSESupported(): boolean {
    // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mediaSource = MediaSource || window.WebKitMediaSource;
    // isTypeSupported isn't exist or not a function for old MSE implementation
    return !!mediaSource && typeof mediaSource.isTypeSupported === 'function';
  }

  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to media source adapter.
   * @param {PKMediaSourceObject} source - The source object.
   * @param {Object} config - The media source adapter configuration.
   */
  constructor(videoElement: HTMLVideoElement, source: PKMediaSourceObject, config: any = {}) {
    super();
    this._videoElement = videoElement;
    this._sourceObj = source;
    this._config = config;
    this._onDurationChanged = (): void => {
      if (this.isLive() && this._videoElement.paused) {
        this._trigger(Html5EventType.TIME_UPDATE);
      }
    };
    this._eventManager = new EventManager();
    this._handleLiveTimeUpdate();
  }

  /**
   * Destroys the media source adapter.
   * @function destroy
   * @returns {void}
   */
  public destroy(): Promise<void> {
    this._sourceObj = undefined;
    this._config = {};
    this.disableNativeTextTracks();
    this._videoElement.removeEventListener(Html5EventType.DURATION_CHANGE as keyof HTMLVideoElementEventMap, this._onDurationChanged);
    this._eventManager.destroy();
    return Promise.resolve();
  }

  /**
   * Triggers the appropriate track changed event.
   * @param {Track} track - The selected track.
   * @private
   * @returns {void}
   */
  protected _onTrackChanged(track: VideoTrack | AudioTrack | PKTextTrack | ImageTrack): void {
    if (track instanceof VideoTrack) {
      BaseMediaSourceAdapter._logger.debug('Video track changed', track);
      this._trigger(CustomEventType.VIDEO_TRACK_CHANGED, { selectedVideoTrack: track });
    } else if (track instanceof AudioTrack) {
      BaseMediaSourceAdapter._logger.debug('Audio track changed', track);
      this._trigger(CustomEventType.AUDIO_TRACK_CHANGED, { selectedAudioTrack: track });
    } else if (track instanceof PKTextTrack) {
      BaseMediaSourceAdapter._logger.debug('Text track changed', track);
      this._trigger(CustomEventType.TEXT_TRACK_CHANGED, { selectedTextTrack: track });
    } else if (track instanceof ImageTrack) {
      BaseMediaSourceAdapter._logger.debug('Image track changed', track);
      this._trigger(CustomEventType.IMAGE_TRACK_CHANGED, { selectedImageTrack: track });
    }
  }

  /**
   * Dispatch an adapter event forward.
   * @param {string} name - The name of the event.
   * @param {?Object} payload - The event payload.
   * @returns {void}
   */
  protected _trigger(name: string, payload?: any): void {
    this.dispatchEvent(new FakeEvent(name, payload));
  }

  /** Must implemented methods by the derived media source adapter **/
  // eslint-disable-next-line
  public static canPlayType(mimeType: string, preferNative: boolean): boolean {
    return BaseMediaSourceAdapter._throwNotImplementedError('static canPlayType');
  }

  // eslint-disable-next-line
  public applyTextTrackStyles(sheet: CSSStyleSheet, styles: TextStyle, containerId: string, engineClassName?: string): void {
    return BaseMediaSourceAdapter._throwNotImplementedError('applyTextTrackStyles');
  }

  public load(): Promise<{ tracks: Track[] }> {
    return BaseMediaSourceAdapter._throwNotImplementedError('load');
  }
  // eslint-disable-next-line
  public selectVideoTrack(videoTrack: VideoTrack): void {
    return BaseMediaSourceAdapter._throwNotImplementedError('selectVideoTrack');
  }
  // eslint-disable-next-line
  public selectAudioTrack(audioTrack: AudioTrack): void {
    BaseMediaSourceAdapter._throwNotImplementedError('selectAudioTrack');
  }
  // eslint-disable-next-line
  public selectTextTrack(textTrack: PKTextTrack): void {
    BaseMediaSourceAdapter._throwNotImplementedError('selectTextTrack');
  }
  // eslint-disable-next-line
  public selectImageTrack(imageTrack: ImageTrack): void {}

  public hideTextTrack(): void {
    BaseMediaSourceAdapter._throwNotImplementedError('hideTextTrack');
  }

  public enableAdaptiveBitrate(): void {
    BaseMediaSourceAdapter._throwNotImplementedError('enableAdaptiveBitrate');
  }

  public isAdaptiveBitrateEnabled(): boolean {
    return BaseMediaSourceAdapter._throwNotImplementedError('isAdaptiveBitrateEnabled');
  }
  // eslint-disable-next-line
  public applyABRRestriction(restrictions: PKABRRestrictionObject): void {
    return BaseMediaSourceAdapter._throwNotImplementedError('applyABRRestriction');
  }

  protected _getLiveEdge(): number {
    return BaseMediaSourceAdapter._throwNotImplementedError('_getLiveEdge');
  }

  public seekToLiveEdge(): void {
    BaseMediaSourceAdapter._throwNotImplementedError('seekToLiveEdge');
  }

  public isLive(): boolean {
    return BaseMediaSourceAdapter._throwNotImplementedError('isLive');
  }

  public isOnLiveEdge(): boolean {
    if(this.getSegmentDuration()===0){
      //If no segment duration, we cannot estimate live edge
      return true;
    }
    return this.liveDuration - this._videoElement.currentTime <= this.getSegmentDuration() * CURRENT_OR_NEXT_SEGMENT_COUNT;
  }
  // eslint-disable-next-line
  public setMaxBitrate(bitrate: number): void {
    return;
  }

  public attachMediaSource(): void {}

  public detachMediaSource(): void {}

  /**
   * Handling live time update (as is not triggered when video is paused, but the current time changed)
   * @function _handleLiveTimeUpdate
   * @returns {void}
   * @private
   */
  private _handleLiveTimeUpdate(): void {
    this._videoElement.addEventListener(Html5EventType.DURATION_CHANGE, this._onDurationChanged);
  }

  /**
   * Disables all the existing text tracks.
   * @public
   * @returns {void}
   */
  public disableNativeTextTracks(): void {
    Array.from(this._videoElement.textTracks).forEach((track) => {
      if (PKTextTrack.isNativeTextTrack(track) && !PKTextTrack.isExternalTrack(track)) {
        track.mode = PKTextTrack.MODE.DISABLED;
      }
    });
  }

  /**
   * Checks if the adapter can recover from an error triggered by the video element error
   * @param {Event} event - the html5 video element error
   * @returns {boolean} - if it can recover or not
   * @public
   */
  // eslint-disable-next-line
  public handleMediaError(event?: MediaError): boolean {
    return false;
  }

  public getStartTimeOfDvrWindow(): number {
    return BaseMediaSourceAdapter._throwNotImplementedError('getStartTimeOfDvrWindow');
  }
  // eslint-disable-next-line
  public getThumbnail(time: number): ThumbnailInfo | null {
    return null;
  }

  public getSegmentDuration(): number {
    return BaseMediaSourceAdapter._throwNotImplementedError('getSegmentDuration');
  }

  public get liveDuration(): number {
    return BaseMediaSourceAdapter._throwNotImplementedError('liveDuration');
  }

  /**
   * throw a run time error
   * @param {string} name of the unimplemented function
   * @returns {any} void/string/boolean
   */
  private static _throwNotImplementedError(name: string): any {
    throw new Error(Error.Severity.CRITICAL, Error.Category.PLAYER, Error.Code.RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED, name);
  }

  /**
   * Getter for the src that the adapter plays on the video element.
   * In case the adapter preformed a load it will return the manifest url.
   * @public
   * @returns {string} - The src url.
   */
  public get src(): string {
    if (this._loadPromise && this._sourceObj) {
      return this._sourceObj.url;
    }
    return '';
  }

  /**
   * Setter for the src that the adapter plays on the video element.
   * @param {string} source - The src url.
   * @public
   * @returns {void}
   */
  public set src(source: string) {
    if (!this._loadPromise && this._sourceObj) {
      this._sourceObj.url = source;
    }
  }

  /**
   * @public
   * @return {PKMediaSourceCapabilities} - The adapter capabilities.
   */
  public get capabilities(): PKMediaSourceCapabilities {
    return this._capabilities;
  }

  public get targetBuffer(): number {
    return NaN;
  }

  public getDrmInfo(): PKDrmDataObject | null {
    return null;
  }
}
