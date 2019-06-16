// @flow
import VideoTrack from '../track/video-track';
import AudioTrack from '../track/audio-track';
import TextTrack from '../track/text-track';
import FakeEventTarget from '../event/fake-event-target';
import {EventType} from '../event/event-type';
import EventManager from '../event/event-manager';

class BaseEngineDecorator extends FakeEventTarget implements IEngine {
  _engine: Object;
  _eventManager: EventManager;

  constructor(engine: Object) {
    super();
    this._engine = engine;
    this._eventManager = new EventManager();
    const events: Array<string> = (Object.values(EventType): any);
    events.forEach(event => this._eventManager.listen(this._engine, event, e => this.dispatchEvent(e)));
  }

  restore(source: PKMediaSourceObject, config: Object): void {
    this._engine.restore(source, config);
  }

  attach(): void {
    this._engine.attach();
  }

  detach(): void {
    this._engine.detach();
  }

  load(startTime: ?number): Promise<Object> {
    return this._engine.load(startTime);
  }

  play(): void {
    this._engine.play();
  }

  pause(): void {
    this._engine.pause();
  }

  getVideoElement(): HTMLVideoElement {
    return this._engine.getVideoElement();
  }

  reset(): void {
    this._engine.reset();
  }

  destroy(): void {
    this._eventManager.destroy();
  }

  isLive(): boolean {
    return this._engine.isLive();
  }

  isDvr(): boolean {
    return this._engine.isDvr();
  }

  seekToLiveEdge(): void {
    this._engine.seekToLiveEdge();
  }

  getStartTimeOfDvrWindow(): number {
    return this._engine.getStartTimeOfDvrWindow();
  }

  selectVideoTrack(videoTrack: VideoTrack): void {
    this._engine.selectVideoTrack(videoTrack);
  }

  selectAudioTrack(audioTrack: AudioTrack): void {
    this._engine.selectAudioTrack(audioTrack);
  }

  selectTextTrack(textTrack: TextTrack): void {
    this._engine.selectTextTrack(textTrack);
  }

  hideTextTrack(): void {
    this._engine.hideTextTrack();
  }

  resetAllCues(): void {
    this._engine.resetAllCues();
  }

  enableAdaptiveBitrate(): void {
    this._engine.enableAdaptiveBitrate();
  }

  isAdaptiveBitrateEnabled(): boolean {
    return this._engine.isAdaptiveBitrateEnabled();
  }

  enterPictureInPicture(): void {
    this._engine.enterPictureInPicture();
  }

  exitPictureInPicture(): void {
    this._engine.exitPictureInPicture();
  }

  isPictureInPictureSupported(): boolean {
    return this._engine.isPictureInPictureSupported();
  }

  get isInPictureInPicture(): boolean {
    return this._engine.isInPictureInPicture;
  }

  get id(): string {
    return this._engine.id;
  }

  get buffered(): TimeRanges {
    return this._engine.buffered;
  }

  set currentTime(to: number): void {
    this._engine.currentTime = to;
  }

  get currentTime(): number {
    return this._engine.currentTime;
  }

  get duration(): number {
    return this._engine.duration;
  }

  set volume(vol: number): void {
    this._engine.volume = vol;
  }

  get volume(): number {
    return this._engine.volume;
  }

  get paused(): boolean {
    return this._engine.paused;
  }

  get seeking(): boolean {
    return this._engine.seeking;
  }

  set playsinline(playsinline: boolean): void {
    this._engine.playsinline = playsinline;
  }

  get playsinline(): boolean {
    return this._engine.playsinline;
  }

  set muted(mute: boolean): void {
    this._engine.muted = mute;
  }

  get muted(): boolean {
    return this._engine.muted;
  }

  set src(source: string): void {
    this._engine.src = source;
  }

  get src(): string {
    return this._engine.src;
  }

  set autoplay(autoplay: boolean): void {
    this._engine.autoplay = autoplay;
  }

  get autoplay(): boolean {
    return this._engine.autoplay;
  }

  set controls(controls: boolean): void {
    this._engine.controls = controls;
  }

  get controls(): boolean {
    return this._engine.controls;
  }

  get defaultMuted(): boolean {
    return this._engine.defaultMuted;
  }

  get error(): ?MediaError {
    return this._engine.error;
  }

  set loop(loop: boolean) {
    this._engine.loop = loop;
  }

  get loop(): boolean {
    return this._engine.loop;
  }

  get networkState(): number {
    return this._engine.networkState;
  }

  get played(): TimeRanges {
    return this._engine.played;
  }

  set poster(poster: string): void {
    this._engine.poster = poster;
  }

  get poster(): string {
    return this._engine.poster;
  }

  set preload(preload: string): void {
    this._engine.preload = preload;
  }

  get preload(): string {
    return this._engine.preload;
  }

  get readyState(): number {
    return this._engine.readyState;
  }

  get seekable(): TimeRanges {
    return this._engine.seekable;
  }

  get videoHeight(): number {
    return this._engine.videoHeight;
  }

  get videoWidth(): number {
    return this._engine.videoWidth;
  }

  set playbackRate(rate: number): void {
    this._engine.playbackRate = rate;
  }

  get playbackRate(): number {
    return this._engine.playbackRate;
  }

  get playbackRates(): Array<number> {
    return this._engine.playbackRates;
  }

  set defaultPlaybackRate(defaultPlaybackRate: number) {
    this._engine.defaultPlaybackRate = defaultPlaybackRate;
  }

  get defaultPlaybackRate(): number {
    return this._engine.defaultPlaybackRate;
  }

  get ended(): boolean {
    return this._engine.ended;
  }

  set crossOrigin(crossOrigin: ?string): void {
    this._engine.crossOrigin = crossOrigin;
  }

  get crossOrigin(): ?string {
    return this._engine.crossOrigin;
  }

  get targetBuffer(): number {
    return this._engine.targetBuffer;
  }

  get availableBuffer(): number {
    return this._engine.availableBuffer;
  }
}

export {BaseEngineDecorator};
