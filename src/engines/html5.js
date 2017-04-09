//@flow
import FakeEventTarget from '../event/fake-event-target'
import FakeEvent from '../event/fake-event'
import EventManager from '../event/event-manager'
import PlayerEvents from '../event/events'
import MSAManager from './adapters/adapter-manager'
import BaseMediaSourceAdapter from './adapters/base-adapter'

export default class Html5 extends FakeEventTarget implements IEngine {
  _el: HTMLVideoElement;
  _eventManager: EventManager;
  _mediaSourceAdapter: BaseMediaSourceAdapter;

  static EngineName: string = "html5";

  static canPlayType(mimeType) {
    return MSAManager.canPlayType(mimeType);
  }

  constructor(source: Object, config: Object) {
    super();
    this.createVideoElement();
    this._eventManager = new EventManager();
    this.setSource(source, config);
    this.attach();
  }

  destroy() {
    this.detach();
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.destroy();
    }
    if (this._el) {
      this.pause();
      this._el.removeAttribute('src');
      if (this._el.parentNode) {
        this._el.parentNode.removeChild(this._el);
      }
    }
  }

  attach() {
    for (let playerEvent in PlayerEvents) {
      if (PlayerEvents.hasOwnProperty(playerEvent)) {
        this._eventManager.listen(this._el, PlayerEvents[playerEvent], () => {
          this.dispatchEvent(new FakeEvent(PlayerEvents[playerEvent]));
        });
      }
    }
  }

  detach() {
    for (let playerEvent in PlayerEvents) {
      if (PlayerEvents.hasOwnProperty(playerEvent)) {
        this._eventManager.unlisten(this._el, PlayerEvents[playerEvent]);
      }
    }
  }

  createVideoElement() {
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

  setSource(source, config) {
    this.loadMediaSourceAdapter(source, config);
  }

  loadMediaSourceAdapter(source, config) {
    this._mediaSourceAdapter = MSAManager.getMediaSourceAdapter(this._el, source, config);
  }

  set src(source: string): void {
    //Set source
    this._el.src = source;
  }

  get src(): string {
    return this._el.src;
  }

  //playback interface
  /**
   * Start/resume playback
   */
  play(): void {
    return this._el.play();
  }

  /**
   * Pause playback
   */
  pause() {
    return this._el.pause();
  }

  /**
   * Load media
   */
  load(): void {
    if (this._mediaSourceAdapter) {
      this._mediaSourceAdapter.load();
    }
  }

  /**
   * Get the current time in seconds
   * @returns {Number}
   */
  get currentTime(): number {
    return this._el.currentTime;
  }

  /**
   * Set the current time in seconds
   * @param to {Number}
   */
  set currentTime(to: number) {
    this._el.currentTime = to;
  }

  /**
   * Get the duration in seconds
   * @returns {Number}
   */
  get duration(): number {
    return this._el.duration;
  }

  /**
   * Set playback volume
   * @param vol {Number}
   */
  set volume(vol: number) {
    this._el.volume = vol;
  }

  /**
   * Get playback volume
   * @returns {Number}
   */
  get volume(): number {
    return this._el.volume;
  }

  //state
  ready() {
  }

  /**
   * Get paused state
   * @returns {boolean}
   */
  get paused(): boolean {
    return this._el.paused;
  }

  /**
   * Get seeking state
   * @returns {boolean}
   */
  get seeking(): boolean {
    return this._el.seeking;
  }

  get seekable(): TimeRanges {
    return this._el.seekable;
  }

  get played(): TimeRanges {
    return this._el.played;
  }

  get buffered(): TimeRanges {
    return this._el.buffered;
  }

  /**
   * Set player muted state
   * @param mute {boolean}
   */
  set muted(mute: boolean) {
    this._el.muted = mute;
  }

  /**
   * Get player muted state
   * @returns {boolean}
   */
  get muted(): boolean {
    return this._el.muted;
  }

  get defaultMuted(): boolean {
    return this._el.defaultMuted;
  }

  set poster(poster: string) {
    this._el.poster = poster;
  }

  get poster(): string {
    return this._el.poster;
  }

  set preload(preload: string) {
    this._el.preload = preload;
  }

  get preload(): string {
    return this._el.preload;
  }

  set autoplay(autoplay: boolean) {
    this._el.autoplay = autoplay;
  }

  get autoplay(): boolean {
    return this._el.autoplay;
  }

  set loop(loop: boolean) {
    this._el.loop = loop;
  }

  get loop(): boolean {
    return this._el.loop;
  }

  set controls(controls: boolean) {
    this._el.controls = controls;
  }

  get controls(): boolean {
    return this._el.controls;
  }

  set playbackRate(playbackRate: number) {
    this._el.playbackRate = playbackRate;
  }

  get playbackRate(): number {
    return this._el.playbackRate;
  }

  set defaultPlaybackRate(defaultPlaybackRate: number) {
    this._el.defaultPlaybackRate = defaultPlaybackRate;
  }

  get defaultPlaybackRate(): number {
    return this._el.defaultPlaybackRate;
  }

  get ended(): boolean {
    return this._el.ended;
  }

  get error(): ?MediaError {
    return this._el.error;
  }

  get networkState(): number {
    return this._el.networkState;
  }

  get readyState(): number {
    return this._el.readyState;
  }

  get videoHeight(): number {
    return this._el.videoHeight;
  }

  get videoWidth(): number {
    return this._el.videoWidth;
  }

  static TEST_VID: HTMLVideoElement;

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

//Engine.register("html5", Html5);
