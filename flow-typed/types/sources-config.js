// @flow
declare type PKSourcesConfigObject = {
  hls: Array<PKMediaSourceObject>,
  dash: Array<PKMediaSourceObject>,
  progressive: Array<PKMediaSourceObject>,
  options: PKMediaSourceOptionsObject,
  type: string,
  dvr: boolean,
  metadata: PKMetadataConfigObject,
  id?: string,
  poster?: string,
  duration?: number,
  startTime?: number
};
