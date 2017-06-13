//@flow
import VideoTrack from '../../src/track/video-track'
import AudioTrack from '../../src/track/audio-track'
import TextTrack from '../../src/track/text-track'

declare interface IMediaSourceAdapter {
  +src: string;
  load(): Promise<Object>;
  destroy(): void;
  selectVideoTrack(videoTrack: VideoTrack): void;
  selectAudioTrack(audioTrack: AudioTrack): void;
  selectTextTrack(textTrack: TextTrack): void;
  enableAdaptiveBitrate(): void;
  static +id: string;
  static isSupported(): boolean;
  static canPlayType(mimeType: string): boolean;
  static createAdapter(videoElement: HTMLVideoElement, source: Source, config: Object): IMediaSourceAdapter;
}
