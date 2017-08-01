//@flow
import FakeEventTarget from '../../event/fake-event-target'
import FakeEvent from '../../event/fake-event'
import EventManager from '../../event/event-manager'
import {EventType} from '../../event/event-type'
import MediaSourceProvider from './media-source/media-source-provider'
import VideoTrack from '../../track/video-track'
import AudioTrack from '../../track/audio-track'
import TextTrack from '../../track/text-track'
import * as Utils from '../../utils/util'

/**
 * @namespace Html5
 * @memberof Classes.Engines
 * @class Html5
 * @extends {FakeEventTarget}
 * @implements {IEngine}
 */
export default class Html5 extends FakeEventTarget implements IEngine {
  static VIDEO_ELEMENT_CLASS_NAME: string = 'playkit-engine-html5';
  static TEST_VID: HTMLVideoElement;
  _el: HTMLVideoElement;
  _eventManager: EventManager;
  _mediaSourceAdapter: ?IMediaSourceAdapter;

  /**
   * @type {string}
   * @memberof Classes.Engines.Html5
   * @public
   * @static
   */
  static id: string = "html5";

  /**
   * @param {Source} source
   * @param {Object} config
   * @returns {IEngine}
   * @memberof Classes.Engines.Html5
   * @public
   * @static
   */
  static createEngine(source: Source, config: Object): IEngine {
    return new this(source, config);
  }

  /**
   * @param {string} mimeType
   * @returns {boolean}
   * @memberof Classes.Engines.Html5
   * @public
   * @static
   */
  static canPlayType(mimeType: string): boolean {
    return MediaSourceProvider.canPlayType(mimeType);
  }

  /**
   * @returns {boolean}
   * @static
   * @memberof Classes.Engines.Html5
   * @public
   */
  static isSupported() {
    try {
      Html5.TEST_VID = Utils.Dom.createElement('video');
      Html5.TEST_VID.volume = 0.5;
    } catch (e) {
      return false;
    }
    return !!Html5.TEST_VID.canPlayType;
  }

  constructor(source: Source, config: Object) {
    super();
    this._eventManager = new EventManager();
    this._createVideoElement();
    this._loadMediaSourceAdapter(source, config);
    this._attach();
  }

  /**
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   * @returns {void}
   */
  destroy(): void {
    this._detach();
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.destroy();
      MediaSourceProvider.destroy();
    }
    if (this._el) {
      this.pause();
      this._el.removeAttribute('src');
      if (this._el.parentNode) {
        this._el.parentNode.removeChild(this._el);
      }
    }
    this._eventManager.destroy();
  }

  /**
   * @returns {HTMLVideoElement}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  getVideoElement(): HTMLVideoElement {
    return this._el;
  }

  /**
   * @param {VideoTrack} videoTrack
   * @returns {void}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  selectVideoTrack(videoTrack: VideoTrack): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.selectVideoTrack(videoTrack);
    }
  }

  /**
   * @param {AudioTrack} audioTrack
   * @returns {void}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  selectAudioTrack(audioTrack: AudioTrack): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.selectAudioTrack(audioTrack);
    }
  }

  /**
   * @param {TextTrack} textTrack
   * @returns {void}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  selectTextTrack(textTrack: TextTrack): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.selectTextTrack(textTrack);
    }
  }

  /**
   * @returns {void}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  hideTextTrack(): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.hideTextTrack();
    }
  }

  /**
   * @returns {void}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  enableAdaptiveBitrate(): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.enableAdaptiveBitrate();
    }
  }

  /**
   * @returns {boolean}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  isAdaptiveBitrateEnabled(): boolean {
    if (this._mediaSourceAdapter) {
      return this._mediaSourceAdapter.isAdaptiveBitrateEnabled();
    }
    return false;
  }

  /**
   * @returns {void}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  play(): void {
    return this._el.play();
  }

  /**
   * @returns {void}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  pause(): void {
    return this._el.pause();
  }

  /**
   * @param {number} startTime
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   * @returns {Promise<Object>}
   */
  load(startTime: ?number): Promise<Object> {
    return this._mediaSourceAdapter ? this._mediaSourceAdapter.load(startTime) : Promise.resolve({});
  }

  /**
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   * @returns {string}
   */
  get id(): string {
    return Html5.id;
  }

  /**
   * @param {string} source
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   * @returns {void}
   */
  set src(source: string): void {
    this._el.src = source;
  }

  /**
   * @returns {string}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get src(): string {
    if (this._mediaSourceAdapter) {
      return this._mediaSourceAdapter.src;
    }
    return "";
  }

  /**
   * @returns {number}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get currentTime(): number {
    return this._el.currentTime;
  }

  /**
   * @param {number} to
   * @returns {void}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  set currentTime(to: number): void {
    this._el.currentTime = to;
  }

  /**
   * @returns {number}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get duration(): number {
    return this._el.duration;
  }

  /**
   * @param {number} vol
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   * @returns {void}
   */
  set volume(vol: number): void {
    this._el.volume = vol;
  }

  /**
   * @returns {number}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get volume(): number {
    return this._el.volume;
  }

  /**
   * @returns {boolean}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get paused(): boolean {
    return this._el.paused;
  }

  /**
   * @returns {boolean}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get seeking(): boolean {
    return this._el.seeking;
  }

  /**
   * @returns {TimeRanges}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get seekable(): TimeRanges {
    return this._el.seekable;
  }

  /**
   * @returns {TimeRanges}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get played(): TimeRanges {
    return this._el.played;
  }

  /**
   * @returns {TimeRanges}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get buffered(): TimeRanges {
    return this._el.buffered;
  }

  /**
   * @param {boolean} mute
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   * @returns {void}
   */
  set muted(mute: boolean): void {
    this._el.muted = mute;
  }

  /**
   * @returns {boolean}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get muted(): boolean {
    return this._el.muted;
  }

  /**
   * @returns {boolean}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get defaultMuted(): boolean {
    return this._el.defaultMuted;
  }

  /**
   * @param {string} poster
   * @returns {void}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  set poster(poster: string): void {
    this._el.poster = poster;
  }

  /**
   * @returns {poster}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get poster(): string {
    return this._el.poster;
  }

  /**
   * @param {string} preload
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   * @returns {void}
   */
  set preload(preload: string): void {
    this._el.preload = preload;
  }

  /**
   * @returns {string}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get preload(): string {
    return this._el.preload;
  }

  /**
   * @param {boolean} autoplay
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   * @returns {void}
   */
  set autoplay(autoplay: boolean): void {
    this._el.autoplay = autoplay;
  }

  /**
   * @returns {boolean}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get autoplay(): boolean {
    return this._el.autoplay;
  }

  /**
   * @param {boolean} loop
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   * @returns {void}
   */
  set loop(loop: boolean) {
    this._el.loop = loop;
  }

  /**
   * @returns {boolean}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get loop(): boolean {
    return this._el.loop;
  }

  /**
   * @param {boolean} controls
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   * @returns {void}
   */
  set controls(controls: boolean): void {
    this._el.controls = controls;
  }

  /**
   * @returns {boolean}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get controls(): boolean {
    return this._el.controls;
  }

  /**
   * @param {number} playbackRate
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   * @returns {void}
   */
  set playbackRate(playbackRate: number): void {
    this._el.playbackRate = playbackRate;
  }

  /**
   * @returns {number}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get playbackRate(): number {
    return this._el.playbackRate;
  }

  /**
   * @param {number} defaultPlaybackRate
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   * @returns {void}
   */
  set defaultPlaybackRate(defaultPlaybackRate: number) {
    this._el.defaultPlaybackRate = defaultPlaybackRate;
  }

  /**
   * @returns {number}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get defaultPlaybackRate(): number {
    return this._el.defaultPlaybackRate;
  }

  /**
   * @returns {boolean}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get ended(): boolean {
    return this._el.ended;
  }

  /**
   * @returns {MediaError | null}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get error(): ?MediaError {
    return this._el.error;
  }

  /**
   * @returns {number}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get networkState(): number {
    return this._el.networkState;
  }

  /**
   * @returns {number} - The current ready state of the audio/video.
   * 0 = HAVE_NOTHING - no information whether or not the audio/video is ready.
   * 1 = HAVE_METADATA - metadata for the audio/video is ready.
   * 2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond.
   * 3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available.
   * 4 = HAVE_ENOUGH_DATA - enough data available to start playing.
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get readyState(): number {
    return this._el.readyState;
  }

  /**
   * @returns {number}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get videoHeight(): number {
    return this._el.videoHeight;
  }

  /**
   * @returns {number}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get videoWidth(): number {
    return this._el.videoWidth;
  }

  /**
   * @param {boolean} playsinline
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   * @returns {void}
   */
  set playsinline(playsinline: boolean): void {
    if (playsinline) {
      this._el.setAttribute('playsinline', '');
    } else {
      this._el.removeAttribute('playsinline');
    }
  }

  /**
   * @returns {boolean}
   * @memberof Classes.Engines.Html5
   * @public
   * @instance
   */
  get playsinline(): boolean {
    return this._el.getAttribute('playsinline') === '';
  }

  _attach(): void {
    for (let html5Event in EventType.Html5) {
      this._eventManager.listen(this._el, EventType.Html5[html5Event], () => {
        this.dispatchEvent(new FakeEvent(EventType.Html5[html5Event]));
      });
    }
    if (this._mediaSourceAdapter) {
      this._eventManager.listen(this._mediaSourceAdapter, EventType.Player.VIDEO_TRACK_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._mediaSourceAdapter, EventType.Player.AUDIO_TRACK_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._mediaSourceAdapter, EventType.Player.TEXT_TRACK_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._mediaSourceAdapter, EventType.Player.ABR_MODE_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
    }
  }

  _detach(): void {
    for (let html5Event in EventType.Html5) {
      this._eventManager.unlisten(this._el, EventType.Html5[html5Event]);
    }
    if (this._mediaSourceAdapter) {
      this._eventManager.unlisten(this._mediaSourceAdapter, EventType.Player.VIDEO_TRACK_CHANGED);
      this._eventManager.unlisten(this._mediaSourceAdapter, EventType.Player.AUDIO_TRACK_CHANGED);
      this._eventManager.unlisten(this._mediaSourceAdapter, EventType.Player.TEXT_TRACK_CHANGED);
    }
  }

  _createVideoElement(): void {
    this._el = Utils.Dom.createElement("video");
    this._el.id = Utils.Generator.uniqueId(5);
    this._el.className = Html5.VIDEO_ELEMENT_CLASS_NAME;
    this._el.controls = false;
  }

  _loadMediaSourceAdapter(source: Source, config: Object): void {
    this._mediaSourceAdapter = MediaSourceProvider.getMediaSourceAdapter(this.getVideoElement(), source, config);
  }

}
