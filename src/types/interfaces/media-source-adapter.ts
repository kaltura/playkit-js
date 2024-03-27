
import VideoTrack from '../../track/video-track';
import AudioTrack from '../../track/audio-track';
import { PKTextTrack} from '../../track/text-track';
import {PKDrmConfigObject} from '../drm-config';
import {PKMediaSourceCapabilities} from '../media-source-capabilities';
import {PKMediaSourceObject} from '../media-source';
import ImageTrack from '../../track/image-track';
import {PKDrmDataObject} from '../drm-data';
import { FakeEventTarget } from '../../event/fake-event-target';
import {ThumbnailInfo} from '../../thumbnail/thumbnail-info';
import Track from '../../track/track';
import {PKABRRestrictionObject} from '../restrictions-types';

export interface IMediaSourceAdapterStatic {
  id: string;
  isSupported(): boolean;
  isMSESupported(): boolean;
  canPlayType(mimeType: string): boolean;
  canPlayDrm(drmData: Array<Object>, drmConfig: PKDrmConfigObject): boolean;
  createAdapter(videoElement: HTMLVideoElement, source: PKMediaSourceObject, config: Object): IMediaSourceAdapter;
}

export interface IMediaSourceAdapter extends FakeEventTarget {
  src: string;
  liveDuration: number;
  capabilities: PKMediaSourceCapabilities;
  targetBuffer: number;
  load(startTime?: number): Promise<{tracks: Track[]}>;
  handleMediaError(error?: MediaError): boolean;
  destroy(): Promise<any>;
  selectVideoTrack(videoTrack: VideoTrack): void;
  selectAudioTrack(audioTrack: AudioTrack): void;
  selectTextTrack(textTrack: PKTextTrack): void;
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
  getThumbnail(time: number): ThumbnailInfo | null
  getDrmInfo(): PKDrmDataObject | null;
  applyABRRestriction(restriction: PKABRRestrictionObject): void;
}
