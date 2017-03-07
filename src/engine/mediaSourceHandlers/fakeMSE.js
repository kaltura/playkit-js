// @flow
import BaseMediaSourceHandler from './BaseMediaSourceHandler'
import MSHProvider from './mediaSourceHandlerProvider'

export default class FakeMSE extends BaseMediaSourceHandler{

  static _mimeTypes = ['mp4'];
  static _name = 'FakeMSE';

  constructor(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler{
    super(FakeMSE._name);
    this._msPlayer = videoElement;
  }

  load(source: string){
    this._msPlayer.src = source;
  }
}

if( FakeMSE.isSupported() ){
  MSHProvider.addHandler(FakeMSE);
}
