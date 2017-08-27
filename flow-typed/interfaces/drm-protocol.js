//@flow
declare interface IDrmProtocol {
  static canPlayDrm(drmData: Array<Object>): boolean;
  static setDrmPlayback(...any): void;
  static destroy(): void;
}
