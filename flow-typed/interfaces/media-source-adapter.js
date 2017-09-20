//@flow
import VideoTrack from '../../src/track/video-track'
import AudioTrack from '../../src/track/audio-track'
import TextTrack from '../../src/track/text-track'

declare interface IMediaSourceAdapter {
  +src: string;
  currentTime: number;
  +duration: number;
  load(startTime: ?number): Promise<Object>;
  destroy(): void;
  selectVideoTrack(videoTrack: VideoTrack): void;
  selectAudioTrack(audioTrack: AudioTrack): void;
  selectTextTrack(textTrack: TextTrack): void;
  hideTextTrack(): void;
  enableAdaptiveBitrate(): void;
  isAdaptiveBitrateEnabled(): boolean;
  seekToLiveEdge(): void;
  isLive(): boolean;
  static +id: string;
  static isSupported(): boolean;
  static canPlayType(mimeType: string, preferNative: boolean): boolean;
  static canPlayDrm(drmData: Array<Object>): boolean;
  static createAdapter(videoElement: HTMLVideoElement, source: Source, config: Object): IMediaSourceAdapter;
}
