//@flow
import FakeEventTarget from '../../event/fake-event-target'
import FakeEvent from '../../event/fake-event'
import EventManager from '../../event/event-manager'
import {HTML5_EVENTS as Html5Events, CUSTOM_EVENTS as CustomEvents} from '../../event/events'
import MediaSourceProvider from './media-source/media-source-provider'
import VideoTrack from '../../track/video-track'
import AudioTrack from '../../track/audio-track'
import TextTrack from '../../track/text-track'

export default class Html5 extends FakeEventTarget implements IEngine {
  /**
   * The video element.
   * @type {HTMLVideoElement}
   * @private
   */
  _el: HTMLVideoElement;
  /**
   * The event manager of the engine.
   * @type {EventManager}
   * @private
   */
  _eventManager: EventManager;
  /**
   * The selected media source adapter of the engine.
   * @type {IMediaSourceAdapter}
   * @private
   */
  _mediaSourceAdapter: ?IMediaSourceAdapter;

  /**
   * @type {string} - The engine id.
   */
  static id: string = "html5";

  /**
   * Factory method to create an engine.
   * @param {Source} source - The selected source object.
   * @param {Object} config - The player configuration.
   * @returns {IEngine} - New instance of the run time engine.
   * @public
   * @static
   */
  static createEngine(source: Source, config: Object): IEngine {
    return new this(source, config);
  }

  /**
   * Checks if the engine can play a given mime type.
   * @param {string} mimeType - The mime type to check.
   * @returns {boolean} - Whether the engine can play the mime type.
   * @public
   * @static
   */
  static canPlayType(mimeType): boolean {
    return MediaSourceProvider.canPlayType(mimeType);
  }

  /**
   * @constructor
   * @param {Source} source - The selected source object.
   * @param {Object} config - The player configuration.
   */
  constructor(source: Source, config: Object) {
    super();
    this._eventManager = new EventManager();
    this._createVideoElement();
    this._loadMediaSourceAdapter(source, config);
    this.attach();
  }

  /**
   * Destroys the engine.
   * @public
   * @returns {void}
   */
  destroy(): void {
    this.detach();
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
   * Listen to the video element events and triggers them from the engine.
   * @public
   * @returns {void}
   */
  attach(): void {
    for (let playerEvent in Html5Events) {
      this._eventManager.listen(this._el, Html5Events[playerEvent], () => {
        this.dispatchEvent(new FakeEvent(Html5Events[playerEvent]));
      });
    }
    if (this._mediaSourceAdapter) {
      this._eventManager.listen(this._mediaSourceAdapter, CustomEvents.VIDEO_TRACK_CHANGED, (event: FakeEvent) => {
        this.dispatchEvent(event);
      });
      this._eventManager.listen(this._mediaSourceAdapter, CustomEvents.AUDIO_TRACK_CHANGED, (event: FakeEvent) => {
        return this.dispatchEvent(event);
      });
      this._eventManager.listen(this._mediaSourceAdapter, CustomEvents.TEXT_TRACK_CHANGED, (event: FakeEvent) => {
        return this.dispatchEvent(event);
      });
    }
  }

  /**
   * Remove the listeners of the video element events.
   * @public
   * @returns {void}
   */
  detach(): void {
    for (let playerEvent in Html5Events) {
      this._eventManager.unlisten(this._el, Html5Events[playerEvent]);
    }
    if (this._mediaSourceAdapter) { // unlisten to adaptive bitrate changed
      this._eventManager.unlisten(this._mediaSourceAdapter, CustomEvents.VIDEO_TRACK_CHANGED);
      this._eventManager.unlisten(this._mediaSourceAdapter, CustomEvents.AUDIO_TRACK_CHANGED);
      this._eventManager.unlisten(this._mediaSourceAdapter, CustomEvents.TEXT_TRACK_CHANGED);
    }
  }

  /**
   * @returns {HTMLVideoElement} - The video element.
   * @public
   */
  getVideoElement(): HTMLVideoElement {
    return this._el;
  }

  /**
   * Creates a video element dom object.
   * @private
   * @returns {void}
   */
  _createVideoElement(): void {
    this._el = document.createElement("video");
    //Set attributes
    this._el.style.width = "640px";
    this._el.style.height = "360px";
    this._el.style.backgroundColor = "black";
    this._el.controls = true;
    if (document && document.body) {
      document.body.appendChild(this._el);
    }
  }

  /**
   * Loads the appropriate media source extension adapter.
   * @param {Source} source - The selected source object.
   * @param {Object} config - The media source extension configuration.
   * @private
   * @returns {void}
   */
  _loadMediaSourceAdapter(source: Source, config: Object): void {
    this._mediaSourceAdapter = MediaSourceProvider.getMediaSourceAdapter(this.getVideoElement(), source, config);
  }

  /**
   * Select a new video track.
   * @param {VideoTrack} videoTrack - The video track object to set.
   * @returns {void}
   */
  selectVideoTrack(videoTrack: VideoTrack): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.selectVideoTrack(videoTrack);
    }
  }

  /**
   * Select a new audio track.
   * @param {AudioTrack} audioTrack - The video track object to set.
   * @returns {void}
   */
  selectAudioTrack(audioTrack: AudioTrack): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.selectAudioTrack(audioTrack);
    }
  }

  /**
   * Select a new text track.
   * @param {TextTrack} textTrack - The text track object to set.
   * @returns {void}
   */
  selectTextTrack(textTrack: TextTrack): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.selectTextTrack(textTrack);
    }
  }

  /**
   * Hide the text track
   * @function hideTextTrack
   * @returns {void}
   * @public
   */
  hideTextTrack(): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.hideTextTrack();
    }
  }

  /**
   * Enables adaptive bitrate switching according to the media source extension logic.
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @public
   */
  enableAdaptiveBitrate(): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.enableAdaptiveBitrate();
    }
  }

  /**
   * Set a source.
   * @param {string} source - Source to set.
   * @public
   * @returns {void}
   */
  set src(source: string): void {
    this._el.src = source;
  }

  /**
   * Get the source url.
   * @returns {string} - The source url.
   * @public
   */
  get src(): string {
    if (this._mediaSourceAdapter) {
      return this._mediaSourceAdapter.src;
    }
    return "";
  }

  //playback interface
  /**
   * Start/resume playback.
   * @public
   * @returns {void}
   */
  play(): void {
    return this._el.play();
  }

  /**
   * Pause playback.
   * @public
   * @returns {void}
   */
  pause(): void {
    return this._el.pause();
  }

  /**
   * Load media.
   * @public
   * @returns {Promise<Object>} - The loaded data
   */
  load(): Promise<Object> {
    return this._mediaSourceAdapter ? this._mediaSourceAdapter.load() : Promise.resolve({});
  }

  /**
   * Get the current time in seconds.
   * @returns {Number} - The current playback time.
   * @public
   */
  get currentTime(): number {
    return this._el.currentTime;
  }

  /**
   * Set the current time in seconds.
   * @param {Number} to - The number to set in seconds.
   * @public
   * @returns {void}
   */
  set currentTime(to: number): void {
    this._el.currentTime = to;
  }

  /**
   * Get the duration in seconds.
   * @returns {Number} - The playback duration.
   * @public
   */
  get duration(): number {
    return this._el.duration;
  }

  /**
   * Set playback volume.
   * @param {Number} vol - The volume to set.
   * @public
   * @returns {void}
   */
  set volume(vol: number): void {
    this._el.volume = vol;
  }

  /**
   * Get playback volume.
   * @returns {Number} - The volume value of the video element.
   * @public
   */
  get volume(): number {
    return this._el.volume;
  }

  ready() {
  }

  /**
   * Get paused state.
   * @returns {boolean} - The paused value of the video element.
   * @public
   */
  get paused(): boolean {
    return this._el.paused;
  }

  /**
   * Get seeking state.
   * @returns {boolean} - The seeking value of the video element.
   * @public
   */
  get seeking(): boolean {
    return this._el.seeking;
  }

  /**
   * Get the first seekable range (part) of the video in seconds.
   * @returns {TimeRanges} - First seekable range (part) of the video in seconds.
   * @public
   */
  get seekable(): TimeRanges {
    return this._el.seekable;
  }

  /**
   * Get the first played range (part) of the video in seconds.
   * @returns {TimeRanges} - First played range (part) of the video in seconds.
   * @public
   */
  get played(): TimeRanges {
    return this._el.played;
  }

  /**
   * Get the first buffered range (part) of the video in seconds.
   * @returns {TimeRanges} - First buffered range (part) of the video in seconds.
   * @public
   */
  get buffered(): TimeRanges {
    return this._el.buffered;
  }

  /**
   * Set player muted state.
   * @param {boolean} mute - The new mute value.
   * @public
   * @returns {void}
   */
  set muted(mute: boolean): void {
    this._el.muted = mute;
  }

  /**
   * Get player muted state.
   * @returns {boolean} - The muted value of the video element.
   * @public
   */
  get muted(): boolean {
    return this._el.muted;
  }

  /**
   * Get the default mute value.
   * @returns {boolean} - The defaultMuted of the video element.
   * @public
   */
  get defaultMuted(): boolean {
    return this._el.defaultMuted;
  }

  /**
   * Sets an image to be shown while the video is downloading, or until the user hits the play button.
   * @param {string} poster - The image url to be shown.
   * @returns {void}
   * @public
   */
  set poster(poster: string): void {
    this._el.poster = poster;
  }

  /**
   * Gets an image to be shown while the video is downloading, or until the user hits the play button.
   * @returns {poster} - The image url.
   * @public
   */
  get poster(): string {
    return this._el.poster;
  }

  /**
   * Specifies if and how the author thinks that the video should be loaded when the page loads.
   * @param {string} preload - The preload value.
   * @public
   * @returns {void}
   */
  set preload(preload: string): void {
    this._el.preload = preload;
  }

  /**
   * Gets the preload value of the video element.
   * @returns {string} - The preload value.
   * @public
   */
  get preload(): string {
    return this._el.preload;
  }

  /**
   * Set if the video will automatically start playing as soon as it can do so without stopping.
   * @param {boolean} autoplay - The autoplay value.
   * @public
   * @returns {void}
   */
  set autoplay(autoplay: boolean): void {
    this._el.autoplay = autoplay;
  }

  /**
   * Gets the autoplay value of the video element.
   * @returns {boolean} - The autoplay value.
   * @public
   */
  get autoplay(): boolean {
    return this._el.autoplay;
  }

  /**
   * Set to specifies that the video will start over again, every time it is finished.
   * @param {boolean} loop - the loop value.
   * @public
   * @returns {void}
   */
  set loop(loop: boolean) {
    this._el.loop = loop;
  }

  /**
   * Gets the loop value of the video element.
   * @returns {boolean} - The loop value.
   * @public
   */
  get loop(): boolean {
    return this._el.loop;
  }

  /**
   * Set to specifies that video controls should be displayed.
   * @param {boolean} controls - the controls value.
   * @public
   * @returns {void}
   */
  set controls(controls: boolean): void {
    this._el.controls = controls;
  }

  /**
   * Gets the controls value of the video element.
   * @returns {boolean} - The controls value.
   * @public
   */
  get controls(): boolean {
    return this._el.controls;
  }

  /**
   * Sets the current playback speed of the audio/video.
   * @param {Number} playbackRate - The playback speed value.
   * @public
   * @returns {void}
   */
  set playbackRate(playbackRate: number): void {
    this._el.playbackRate = playbackRate;
  }

  /**
   * Gets the current playback speed of the audio/video.
   * @returns {Number} - The current playback speed value.
   * @public
   */
  get playbackRate(): number {
    return this._el.playbackRate;
  }

  /**
   * Sets the default playback speed of the audio/video.
   * @param {Number} defaultPlaybackRate - The default playback speed value.
   * @public
   * @returns {void}
   */
  set defaultPlaybackRate(defaultPlaybackRate: number) {
    this._el.defaultPlaybackRate = defaultPlaybackRate;
  }

  /**
   * Gets the default playback speed of the audio/video.
   * @returns {Number} - The default playback speed value.
   * @public
   */
  get defaultPlaybackRate(): number {
    return this._el.defaultPlaybackRate;
  }

  /**
   * The ended property returns whether the playback of the audio/video has ended.
   * @returns {boolean} - The ended value.
   * @public
   */
  get ended(): boolean {
    return this._el.ended;
  }

  /**
   * The error property returns a MediaError object.
   * @returns {MediaError} - The MediaError object has a code property containing the error state of the audio/video.
   * @public
   */
  get error(): ?MediaError {
    return this._el.error;
  }

  /**
   * @returns {Number} - The current network state (activity) of the audio/video.
   * @public
   */
  get networkState(): number {
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
  get readyState(): number {
    return this._el.readyState;
  }

  /**
   * @returns {Number} - The height of the video player, in pixels.
   * @public
   */
  get videoHeight(): number {
    return this._el.videoHeight;
  }

  /**
   * @returns {Number} - The width of the video player, in pixels.
   * @public
   */
  get videoWidth(): number {
    return this._el.videoWidth;
  }

  /**
   * Test video element to check if html5 engine is supported.
   */
  static TEST_VID: HTMLVideoElement;

  /**
   * Checks if the html5 engine is supported.
   * @returns {boolean} - The isSupported result.
   * @static
   * @public
   */
  static isSupported() {
    try {
      Html5.TEST_VID = document.createElement('video');
      Html5.TEST_VID.volume = 0.5;
    } catch (e) {
      return false;
    }
    return !!Html5.TEST_VID.canPlayType;
  }
}
