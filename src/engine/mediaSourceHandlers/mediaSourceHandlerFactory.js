// @flow

import MSHProvider from './mediaSourceHandlerProvider'
import BaseMediaSourceHandler from './BaseMediaSourceHandler'
import Shaka from './shaka'
import Hls from "./hls";
import FakeMSE from "./fakeMSE";

export default class mediaSourceHandlerFactory {
  static _handlers: Array<BaseMediaSourceHandler> = [Shaka, Hls, FakeMSE];

  static getMediaSourceHandler(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler{
    this._handlers.forEach((handler) => {
      this._addHandler(handler);
    });
    return MSHProvider.selectMediaSourceHandler(videoElement,config);
  }

  static _addHandler(handler: BaseMediaSourceHandler): void{
    if(handler.isSupported()){
      MSHProvider.addHandler(handler);
    }
  }
}
