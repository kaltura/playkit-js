// @flow
import hls from "hls.js/dist/hls.min";
import BaseMediaSourceHandler from './BaseMediaSourceHandler'
import MSHProvider from './mediaSourceHandlerProvider'

export default class Hls extends BaseMediaSourceHandler{

  static _mimeTypes = ['hls'];
  static _name = 'Hls';

  static isSupported(): boolean{
    return hls.isSupported();
  }

  constructor(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler{
    super(Hls._name);
    this._msPlayer = new hls(config.hls);
    this._msPlayer.attachMedia(videoElement);
  }

  load(source: string){
    this._msPlayer.loadSource(source);
  }
}

if( Hls.isSupported() ){
  MSHProvider.addHandler(Hls);
}
