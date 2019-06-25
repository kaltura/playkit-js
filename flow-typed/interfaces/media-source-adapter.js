//@flow
import VideoTrack from '../../src/track/video-track';
import AudioTrack from '../../src/track/audio-track';
import TextTrack from '../../src/track/text-track';

declare interface IMediaSourceAdapter {
  src: string;
  currentTime: number;
  +duration: number;
  +capabilities: PKMediaSourceCapabilities;
  load(startTime: ?number): Promise<Object>;
  handleMediaError(error: ?MediaError): boolean;
  destroy(): Promise<*>;
  selectVideoTrack(videoTrack: VideoTrack): void;
  selectAudioTrack(audioTrack: AudioTrack): void;
  selectTextTrack(textTrack: TextTrack): void;
  hideTextTrack(): void;
  enableAdaptiveBitrate(): void;
  isAdaptiveBitrateEnabled(): boolean;
  seekToLiveEdge(): void;
  isLive(): boolean;
  getStartTimeOfDvrWindow(): number;
  setMaxBitrate(bitrate: number): void;
  +targetBuffer: number;
  static +id: string;
  static isSupported(): boolean;
  static canPlayType(mimeType: string): boolean;
  static canPlayDrm(drmData: Array<Object>, drmConfig: PKDrmConfigObject): boolean;
  static createAdapter(videoElement: HTMLVideoElement, source: PKMediaSourceObject, config: Object): IMediaSourceAdapter;
}
