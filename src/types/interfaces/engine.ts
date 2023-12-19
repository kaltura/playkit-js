
import VideoTrack from '../../track/video-track';
import AudioTrack from '../../track/audio-track';
import { FakeEventTarget } from '../../event/fake-event-target';
import {ThumbnailInfo} from '../../thumbnail/thumbnail-info';
import ImageTrack from '../../track/image-track';
import {PKMediaSourceObject} from '../media-source';
import {PKDrmConfigObject} from '../drm-config';
import {PKDrmDataObject} from '../drm-data';
import {PKABRRestrictionObject} from '../restrictions-types';
import Track from '../../track/track';
import {PKTextTrack} from '../../track/text-track';

export interface IEngineStatic {
  id: string;
  createEngine(source: PKMediaSourceObject, config: Object, playerId: string): IEngine;
  canPlaySource(source: PKMediaSourceObject, preferNative: boolean, drmConfig: PKDrmConfigObject): boolean;
  runCapabilities(): void;
  getCapabilities(): Promise<any>;
  setCapabilities(capabilities: {[name: string]: any}): void;
  prepareVideoElement(playerId: string): void;
  isSupported(): boolean;
}

export interface IEngine extends FakeEventTarget {
  restore(source: PKMediaSourceObject, config: Object): void;
  destroy(): void;
  attach(): void;
  detach(): void;
  play(): Promise<any> | undefined;
  pause(): void;
  load(startTime?: number): Promise<{tracks: Track[]}>;
  reset(): void;
  selectVideoTrack(videoTrack: VideoTrack): void;
  selectAudioTrack(audioTrack: AudioTrack): void;
  selectTextTrack(textTrack: PKTextTrack): void;
  selectImageTrack(imageTrack: ImageTrack): void;
  isPictureInPictureSupported(): boolean;
  enterPictureInPicture(): void;
  exitPictureInPicture(): void;
  hideTextTrack(): void;
  enableAdaptiveBitrate(): void;
  isAdaptiveBitrateEnabled(): boolean;
  applyABRRestriction(restrictions: PKABRRestrictionObject): void;
  seekToLiveEdge(): void;
  getStartTimeOfDvrWindow(): number;
  isLive(): boolean;
  getVideoElement(): HTMLVideoElement;
  resetAllCues(): void;
  attachMediaSource(): void;
  detachMediaSource(): void;
  getThumbnail(time: number): ThumbnailInfo | null
  isOnLiveEdge(): boolean;
  addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack | undefined ;
  getNativeTextTracks(): TextTrack[];
  getDrmInfo(): PKDrmDataObject | null;
  id: string;
  currentTime: number;
  duration: number;
  liveDuration: number;
  volume: number;
  paused: boolean;
  seeking: boolean;
  played: TimeRanges;
  buffered: TimeRanges;
  videoHeight: number;
  videoWidth: number;
  muted: boolean;
  defaultMuted: boolean;
  src: string;
  poster: string;
  preload:  "none" | "metadata" | "auto" | "";
  autoplay: boolean;
  controls: boolean;
  loop: boolean;
  error: MediaError | null;
  seekable: TimeRanges;
  ended: boolean;
  playbackRate: number;
  playbackRates: Array<number>;
  defaultPlaybackRate: number;
  isInPictureInPicture: boolean;
  networkState: number;
  readyState: number;
  playsinline: boolean;
  crossOrigin: string | null
  targetBuffer: number;
  availableBuffer: number;
}
