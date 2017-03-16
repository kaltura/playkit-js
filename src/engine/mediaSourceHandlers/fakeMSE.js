// @flow
import BaseMediaSourceHandler from './BaseMediaSourceHandler'
import MSHProvider from './mediaSourceHandlerProvider'

/**
 * An illustration of media source extension for progressive download
 *@classdesc
 *@extends BaseMediaSourceHandler
 */
export default class FakeMSE extends BaseMediaSourceHandler{
  /**
   * The supported mime types by FakeMSE
   * @member {Array} _mimeTypes
   * @static
   * @private
   */
  static _mimeTypes = ['mp4'];
  /**
   * The name of FakeMSE
   * @member {string} _name
   * @static
   * @private
   */
  static _name = 'FakeMSE';
  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to FakeMSE
   * @param {Object} config - The FakeMSE configuration
   */
  constructor(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler{
    super(FakeMSE._name);
    this._msPlayer = videoElement;
  }
  /**
   * Load the video source
   * @function load
   * @param {string} source - The source to load
   * @override
   */
  load(source: string){
    this._msPlayer.src = source;
  }
}
// Register FakeMSE to the media source handler provider
if( FakeMSE.isSupported() ){
  MSHProvider.registerHandler(FakeMSE);
}
