import {PKDrmConfigObject} from '../drm-config';

export interface IDrmProtocol {
  isConfigured(drmData: Array<Object>, drmConfig: PKDrmConfigObject): boolean;
  canPlayDrm(drmData: Array<Object>): boolean;
  setDrmPlayback(...any): void;
}
