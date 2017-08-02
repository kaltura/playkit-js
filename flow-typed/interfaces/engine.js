//@flow
import VideoTrack from '../../src/track/video-track'
import AudioTrack from '../../src/track/audio-track'
import TextTrack from '../../src/track/text-track'

/**
 * @memberof Interfaces
 * @interface IEngine
 */
export interface IEngine {
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
  static id: string;
  static createEngine(source: Source, config: Object): IEngine;
  static canPlayType(mimeType: string): boolean;
  destroy(): void;
  play(): void;
  pause(): void;
  load(startTime: ?number): Promise<Object>;
  selectVideoTrack(videoTrack: VideoTrack): void;
  selectAudioTrack(audioTrack: AudioTrack): void;
  selectTextTrack(textTrack: TextTrack): void;
  hideTextTrack(): void;
  enableAdaptiveBitrate(): void;
  isAdaptiveBitrateEnabled(): boolean;
  getVideoElement(): HTMLVideoElement;
}
