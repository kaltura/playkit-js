// @flow
declare type MediaSourceObject = {
  mimetype: string,
  url: string,
  id?: string,
  bandwidth?: number,
  width?: number,
  height?: number,
  drmData?: Array<DrmDataObject>
};
