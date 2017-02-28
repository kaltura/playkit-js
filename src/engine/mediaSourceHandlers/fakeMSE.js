// @flow
import BaseMediaSourceHandler from './BaseMediaSourceHandler'

export default class FakeMSE extends BaseMediaSourceHandler{

  static _mimeTypes = ['mp4'];

  constructor(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler{
    super();
    this._msPlayer = videoElement;
  }

  load(source: string){
    this._msPlayer.src = source;
  }
}
