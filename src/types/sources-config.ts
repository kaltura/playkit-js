import {PKMediaSourceObject} from './media-source';
import {PKExternalCaptionObject} from './external-caption-object';
import {PKExternalThumbnailsConfig} from './exteranl-thumbnails-object';
import {PKMediaSourceOptionsObject} from './media-source-options';
import {PKMetadataConfigObject} from './metadata-config';
import {ImageSourceOptions} from './image-player-options';
import {PKMediaTypes} from "./media-types";

export type PKSourcesConfigObject = {
  hls: Array<PKMediaSourceObject>,
  dash: Array<PKMediaSourceObject>,
  progressive: Array<PKMediaSourceObject>,
  image: Array<PKMediaSourceObject>,
  document: Array<PKMediaSourceObject>,
  captions?: Array<PKExternalCaptionObject>,
  thumbnails?: PKExternalThumbnailsConfig,
  options: PKMediaSourceOptionsObject,
  type: string,
  dvr: boolean,
  metadata: PKMetadataConfigObject,
  id?: string,
  poster?: string,
  duration?: number,
  startTime?: number,
  vr?: any,
  imageSourceOptions?: ImageSourceOptions,
  seekFrom?: number,
  clipTo?: number,
  mediaEntryType?: PKMediaTypes
};
