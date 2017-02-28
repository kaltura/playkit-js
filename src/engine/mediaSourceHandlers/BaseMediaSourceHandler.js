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

  static mimeTypesSupported(mimeTypes: Array<string>): boolean {
    for (let i = 0; i < mimeTypes.length; i++) {
      if (this._mimeTypes.includes(mimeTypes[i])) {
        return true;
      }
    }
    return false;
  }

  init(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler {
  }

  load(source: string){
  }
}
