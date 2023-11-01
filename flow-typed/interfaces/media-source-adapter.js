//@flow
import VideoTrack from '../../src/track/video-track';
import AudioTrack from '../../src/track/audio-track';
import TextTrack from '../../src/track/text-track';
import {FakeEventTarget, ImageTrack} from '../../src/playkit';

declare interface IMediaSourceAdapterStatic {
  +id: string;
  isSupported(): boolean;
  isMSESupported(): boolean;
  canPlayType(mimeType: string): boolean;
  canPlayDrm(drmData: Array<Object>, drmConfig: PKDrmConfigObject): boolean;
  createAdapter(videoElement: HTMLVideoElement, source: PKMediaSourceObject, config: Object): IMediaSourceAdapter;
}

declare interface IMediaSourceAdapter extends FakeEventTarget {
  src: string;
  +liveDuration: number;
  +capabilities: PKMediaSourceCapabilities;
  +targetBuffer: number;
  load(startTime: ?number): Promise<Object>;
  handleMediaError(error: ?MediaError): boolean;
  destroy(): Promise<*>;
  selectVideoTrack(videoTrack: VideoTrack): void;
  selectAudioTrack(audioTrack: AudioTrack): void;
  selectTextTrack(textTrack: TextTrack): void;
  selectImageTrack(imageTrack: ImageTrack): void;
  hideTextTrack(): void;
  enableAdaptiveBitrate(): void;
  isAdaptiveBitrateEnabled(): boolean;
  seekToLiveEdge(): void;
  isLive(): boolean;
  isOnLiveEdge(): boolean;
  getStartTimeOfDvrWindow(): number;
  setMaxBitrate(bitrate: number): void;
  attachMediaSource(): void;
  detachMediaSource(): void;
  getSegmentDuration(): number;
  disableNativeTextTracks(): void;
  getDrmInfo(): ?PKDrmDataObject;
}
