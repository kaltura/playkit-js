//@flow
declare interface IDrmProtocol {
  static canPlayDrm(drmData: Array<Object>): Promise<*>;
  static setDrmPlayback(...any): void;
}
