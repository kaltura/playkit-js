//@flow
declare interface IDrmProtocol {
  scheme: string;
  isConfigured(drmData: Array<Object>, drmConfig: PKDrmConfigObject): boolean;
  canPlayDrm(drmData: Array<Object>): boolean;
  setDrmPlayback(...any): void;
}
