//@flow
import Track from '../classes/track/track'

declare interface IEngine {
  destroy(): void;
  attach(): void;
  detach(): void;
  play(): void;
  pause(): void;
  load(): void;
  ready(): void;
  getTracks(type?: string): Array<Track>;
  selectTrack(track: Track): void;
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
