//@flow
declare interface IDrmProtocol {
  canPlayDrm(drmData: Array<Object>): boolean;
  setDrmPlayback(...any): void;
}
