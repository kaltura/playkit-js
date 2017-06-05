//@flow
import VideoTrack from '../../src/track/video-track'
import AudioTrack from '../../src/track/audio-track'
import TextTrack from '../../src/track/text-track'

declare interface IMediaSourceAdapter {
  +src: string;
  load(): Promise<Object>;
  destroy(): void;
  selectVideoTrack(videoTrack: VideoTrack): boolean;
  selectAudioTrack(audioTrack: AudioTrack): boolean;
  selectTextTrack(textTrack: TextTrack): boolean;
  static name: string;
  static isSupported(): boolean;
  static canPlayType(mimeType: string): boolean;
  static createAdapter(videoElement: HTMLVideoElement, source: Source, config: Object): IMediaSourceAdapter;
}
