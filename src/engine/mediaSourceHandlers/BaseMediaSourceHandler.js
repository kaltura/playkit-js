//@flow

export default class BaseMediaSourceHandler {

  static _mimeTypes: Array<string>;
  _msPlayer: any;

  static isSupported(): boolean {
    return true;
  }

  static createHandler(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler {
    return new this(videoElement, config);
  }

  static canPlayType(mimeType: string): boolean {
    return this._mimeTypes.includes(mimeType);
  }

  init(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler {
  }

  load(source: string) {
  }
}
