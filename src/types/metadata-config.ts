export type PKMetadataConfigObject = {
  name?: string,
  description?: string,
  mediaType?: string,
  metas?: Object,
  tags?: string,
  epgId?: string,
  recordingId?: string
  audioFlavors?: Array<any>,
  createdAt?: number;
  updatedAt?: number;
  endDate?: number;
};
