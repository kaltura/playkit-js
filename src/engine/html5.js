//@flow
import FakeEventTarget from '../events/fakeEventTarget';
import FakeEvent from '../events/fakeEvent';
import EventManager from '../events/eventManager';
import PlayerEvents from '../events/events';

export default class Html5 extends FakeEventTarget implements IEngine{
  el_: HTMLVideoElement;
  eventManager_: EventManager;

  static EngineName: string = "html5";

  constructor() {
    super();
    this.createVideoElement();
    this.eventManager_ = new EventManager();
    this.attach();
    this.src = "/assets/mov_bbb.mp4";
  }

  destroy() {
    this.deattach();
    if (this.el_) {
      this.pause();
      this.el_.removeAttribute('src');
      if (this.el_.parentNode) {
        this.el_.parentNode.removeChild(this.el_);
      }
    }
  }

  attach() {
    PlayerEvents.forEach((event) => {
      this.eventManager_.listen(this.el_, event, () => {
        this.dispatchEvent(new FakeEvent(event));
      });
    });
  }

  deattach() {
    PlayerEvents.forEach((event) => {
      this.eventManager_.unlisten(this.el_, event);
    });
  }

  createVideoElement() {
    this.el_ = document.createElement("video");
    //Set attributes
    this.el_.style.width = "640px";
    this.el_.style.height = "360px";
    this.el_.style.backgroundColor = "black";
    this.el_.controls = true;
    if (document && document.body) {
      document.body.appendChild(this.el_);
    }
  }

  set src(source: string): void{
    //Set source
    this.el_.src = source;
  }

  get src(): string{
    return this.el_.src;
  }

  //playback interface
  /**
   * Start/resume playback
   */
  play(): void {
    return this.el_.play();
  }

  /**
   * Pause playback
   */
  pause() {
    return this.el_.pause();
  }

  load(): void{
    this.el_.load();
  }

  /**
   * Get the current time in seconds
   * @returns {Number}
   */
  get currentTime(): number {
    return this.el_.currentTime;
  }

  /**
   * Set the current time in seconds
   * @param to {Number}
   */
  set currentTime(to: number) {
    this.el_.currentTime = to;
  }

  /**
   * Get the duration in seconds
   * @returns {Number}
   */
  get duration(): number {
    return this.el_.duration;
  }

  /**
   * Set playback volume
   * @param vol {Number}
   */
  set volume(vol: number) {
    this.el_.volume = vol;
  }

  /**
   * Get playback volume
   * @returns {Number}
   */
  get volume(): number {
    return this.el_.volume;
  }

  //state
  ready() {
  }

  /**
   * Get paused state
   * @returns {boolean}
   */
  get paused(): boolean {
    return this.el_.paused;
  }

  /**
   * Get seeking state
   * @returns {boolean}
   */
  get seeking(): boolean {
    return this.el_.seeking;
  }

  get seekable(): TimeRanges{
    return this.el_.seekable;
  }

  get played(): TimeRanges {
    return this.el_.played;
  }

  get buffered(): TimeRanges {
    return this.el_.buffered;
  }

  /**
   * Set player muted state
   * @param mute {boolean}
   */
  set muted(mute: boolean) {
    this.el_.muted = mute;
  }

  /**
   * Get player muted state
   * @returns {boolean}
   */
  get muted(): boolean {
    return this.el_.muted;
  }

  get defaultMuted(): boolean{
    return this.el_.defaultMuted;
  }

  set poster(poster: string){
    this.el_.poster = poster;
  }

  get poster(): string{
    return this.el_.poster;
  }

  set preload(preload: string){
    this.el_.preload = preload;
  }

  get preload(): string{
    return this.el_.preload;
  }

  set autoplay(autoplay: boolean){
    this.el_.autoplay = autoplay;
  }

  get autoplay(): boolean{
    return this.el_.autoplay;
  }

  set loop(loop: boolean){
    this.el_.loop = loop;
  }

  get loop(): boolean{
    return this.el_.loop;
  }

  set controls(controls: boolean){
    this.el_.controls = controls;
  }

  get controls(): boolean{
    return this.el_.controls;
  }

  set playbackRate(playbackRate: number){
    this.el_.playbackRate = playbackRate;
  }

  get playbackRate(): number{
    return this.el_.playbackRate;
  }

  set defaultPlaybackRate(defaultPlaybackRate: number){
    this.el_.defaultPlaybackRate = defaultPlaybackRate;
  }

  get defaultPlaybackRate(): number{
    return this.el_.defaultPlaybackRate;
  }

  get ended(): boolean{
    return this.el_.ended;
  }

  get error(): ?MediaError{
    return this.el_.error;
  }

  get networkState(): number{
    return this.el_.networkState;
  }

  get readyState(): number{
    return this.el_.readyState;
  }

  get videoHeight(): number{
    return this.el_.videoHeight;
  }

  get videoWidth(): number{
    return this.el_.videoWidth;
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
