//@flow
import BaseMediaSourceHandler from './BaseMediaSourceHandler'

export default class MediaSourceHandlerProvider {

  static _mediaSourceHandlers: Array<BaseMediaSourceHandler> = [];

  static addHandler(handler: BaseMediaSourceHandler): void {
    let index = this._mediaSourceHandlers.indexOf(handler);
    if (index === -1) {
      this._mediaSourceHandlers.push(handler);
    }
  }

  static removeHandler(handler: BaseMediaSourceHandler): void {
    let index = this._mediaSourceHandlers.indexOf(handler);
    if (index > -1) {
      this._mediaSourceHandlers.splice(index, 1);
    }
  }

  static getMediaSourceHandler(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler | null {
    let handlers = this._mediaSourceHandlers;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i].canPlayType(config.mimeType))
        return handlers[i].createHandler(videoElement, config);
    }
    return null;
  }
}

