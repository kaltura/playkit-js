//@flow
import VideoTrack from '../../src/track/video-track'
import AudioTrack from '../../src/track/audio-track'
import TextTrack from '../../src/track/text-track'

declare interface IEngine {
  static id: string;
  static createEngine(source: PKMediaSourceObject, config: Object): IEngine;
  static canPlaySource(source: PKMediaSourceObject, preferNative: boolean): boolean;
  static runCapabilities(): void;
  static getCapabilities(): Promise<Object>;
  static prepareVideoElement(): void;
  restore(source: PKMediaSourceObject, config: Object): void;
  destroy(): void;
  attach(): void;
  detach(): void;
  play(): void;
  pause(): void;
  load(startTime: ?number): Promise<Object>;
  ready(): void;
  selectVideoTrack(videoTrack: VideoTrack): void;
  selectAudioTrack(audioTrack: AudioTrack): void;
  selectTextTrack(textTrack: TextTrack): void;
  hideTextTrack(): void;
  enableAdaptiveBitrate(): void;
  isAdaptiveBitrateEnabled(): boolean;
  seekToLiveEdge(): void;
  getStartTimeOfDvrWindow(): number;
  isLive(): boolean;
  getVideoElement(): HTMLVideoElement;
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
  defaultPlaybackRate: number;
  +networkState: number;
  +readyState: number;
  +videoWidth: number;
  +videoHeight: number;
  playsinline: boolean;
}
