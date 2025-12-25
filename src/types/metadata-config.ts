export type PKMetadataConfigObject = {
  name?: string,
  description?: string,
  mediaType?: string,
  metas?: Object,
  tags?: Object,
  epgId?: string,
  recordingId?: string
  audioFlavors?: Array<any>,
  multiLingualName?: string | Array<any>;
  multiLingualDescription?: string | Array<any>;
};
