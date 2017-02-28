// @flow
import shaka from "shaka-player/dist/shaka-player.compiled";
import BaseMediaSourceHandler from './BaseMediaSourceHandler'
import MSHProvider from './mediaSourceHandlerProvider'

export default class Shaka extends BaseMediaSourceHandler{

  static _mimeTypes = ['dash'];

  static isSupported(): boolean{
    if (!window.Promise) {
      shaka.polyfill.installAll();
    }
    return shaka.Player.isBrowserSupported();
  }

  constructor(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler{
    super();
    this._msPlayer = new shaka.Player(videoElement);
    // this._msPlayer.configure(config.shaka);
  }

  load(source: string){
    this._msPlayer.load(source);
  }
}
