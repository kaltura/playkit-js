import {PKDrmDataObject} from './drm-data';

export type PKMediaSourceObject = {
  mimetype: string,
  url: string,
  id?: string,
  bandwidth: number,
  width: number,
  height: number,
  drmData?: Array<PKDrmDataObject>
};
