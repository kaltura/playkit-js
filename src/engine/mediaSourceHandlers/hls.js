// @flow
import hls from "hls.js/dist/hls.min";
import BaseMediaSourceHandler from './BaseMediaSourceHandler'

export default class Hls extends BaseMediaSourceHandler{

  static _mimeTypes = ['hls'];

  static isSupported(): boolean{
    return hls.isSupported();
  }

  constructor(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler{
    super();
    this._msPlayer = new hls(config.hls);
    this._msPlayer.attachMedia(videoElement);
  }

  load(source: string){
    this._msPlayer.loadSource(source);
  }
}
