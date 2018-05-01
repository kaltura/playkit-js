// @flow
declare type PKSourcesConfigObject = {
  hls: Array<PKMediaSourceObject>,
  dash: Array<PKMediaSourceObject>,
  progressive: Array<PKMediaSourceObject>,
  options: PKMediaSourceOptionsObject,
  poster: string,
  metadata?: PKMetadataConfigObject,
  id?: string,
  type?: string,
  dvr?: boolean,
  duration?: number
};
