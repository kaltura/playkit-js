//@flow
import VideoTrack from '../../src/track/video-track';
import AudioTrack from '../../src/track/audio-track';
import TextTrack from '../../src/track/text-track';
import FakeEventTarget from '../../src/event/fake-event-target';

declare interface IEngineStatic {
  id: string;
  createEngine(source: PKMediaSourceObject, config: Object, playerId: string): IEngine;
  canPlaySource(source: PKMediaSourceObject, preferNative: boolean, drmConfig: PKDrmConfigObject): boolean;
  runCapabilities(disableAutoplayCapabilityTest: ?boolean): void;
  getCapabilities(): Promise<Object>;
  setCapabilities(capabilities: {[name: string]: any}): void;
  prepareVideoElement(playerId: string): void;
  isSupported(): boolean;
}

declare interface IEngine extends FakeEventTarget {
  restore(source: PKMediaSourceObject, config: Object): void;
  destroy(): void;
  attach(): void;
  detach(): void;
  play(): ?Promise<*>;
  pause(): void;
  load(startTime: ?number): Promise<Object>;
  reset(): void;
  selectVideoTrack(videoTrack: VideoTrack): void;
  selectAudioTrack(audioTrack: AudioTrack): void;
  selectTextTrack(textTrack: TextTrack): void;
  isPictureInPictureSupported(): boolean;
  enterPictureInPicture(): void;
  exitPictureInPicture(): void;
  hideTextTrack(): void;
  enableAdaptiveBitrate(): void;
  isAdaptiveBitrateEnabled(): boolean;
  seekToLiveEdge(): void;
  getStartTimeOfDvrWindow(): number;
  isLive(): boolean;
  getVideoElement(): HTMLVideoElement;
  resetAllCues(): void;
  attachMediaSource(): void;
  detachMediaSource(): void;
  +id: string;
  currentTime: number;
  +duration: number;
  volume: number;
  +paused: boolean;
  +seeking: boolean;
  +played: TimeRanges;
  +buffered: TimeRanges;
  muted: boolean;
  +defaultMuted: boolean;
  src: string;
  poster: string;
  preload: string;
  autoplay: boolean;
  controls: boolean;
  loop: boolean;
  +error: ?MediaError;
  +seekable: TimeRanges;
  +ended: boolean;
  playbackRate: number;
  +playbackRates: Array<number>;
  defaultPlaybackRate: number;
  +isInPictureInPicture: boolean;
  +networkState: number;
  +readyState: number;
  +videoWidth: number;
  +videoHeight: number;
  playsinline: boolean;
  crossOrigin: ?string;
  +targetBuffer: number;
  +availableBuffer: number;
}
