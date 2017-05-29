//@flow
import Track from '../../src/track/track'

declare interface IEngine {
  destroy(): void;
  attach(): void;
  detach(): void;
  play(): void;
  pause(): void;
  load(): Promise<Object>;
  ready(): void;
  selectTrack(track: Track): boolean;
  getVideoElement(): HTMLVideoElement;
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
}
