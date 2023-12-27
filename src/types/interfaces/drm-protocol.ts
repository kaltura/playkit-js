import {PKDrmConfigObject} from '../drm-config';
import {PKDrmDataObject} from '../drm-data';

export interface IDrmProtocol {
  isConfigured(drmData: Array<PKDrmDataObject>, drmConfig: PKDrmConfigObject): boolean;
  canPlayDrm(drmData: Array<PKDrmDataObject>): boolean;
  setDrmPlayback(...any): void;
}
