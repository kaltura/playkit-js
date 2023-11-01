// @flow
declare type PKSourcesConfigObject = {
  hls: Array<PKMediaSourceObject>,
  dash: Array<PKMediaSourceObject>,
  progressive: Array<PKMediaSourceObject>,
  image: Array<PKMediaSourceObject>,
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
  vr: ?Object,
  imageSourceOptions?: ImageSourceOptions,
  seekFrom?: number,
  clipTo?: number
};
