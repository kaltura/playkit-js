// @flow
import BaseMediaSourceHandler from './BaseMediaSourceHandler'
import MSHProvider from './mediaSourceHandlerProvider'

/**
 * An illustration of media source extension for progressive download
 *@classdesc
 *@extends BaseMediaSourceHandler
 */
export default class FakeMSE extends BaseMediaSourceHandler {
  /**
   * The name of FakeMSE
   * @member {string} _name
   * @static
   * @private
   */
  static _name = 'FakeMSE';

  /**
   * Checks if FakeMSE can play a given mime type
   * @function canPlayType
   * @param {string} mimeType
   * @returns {boolean}
   * @static
   * @override
   */
  static canPlayType(mimeType: string): boolean {
    return !!(document.createElement("video").canPlayType(mimeType));
  }

  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to FakeMSE
   * @param {Object} config - The FakeMSE configuration
   */
  constructor(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler {
    super(FakeMSE._name);
    this._msPlayer = videoElement;
  }

  /**
   * Load the video source
   * @function load
   * @param {string} source - The source to load
   * @override
   */
  load(source: string) {
    this._msPlayer.src = source;
  }
}
// Register FakeMSE to the media source handler provider
if (FakeMSE.isSupported()) {
  MSHProvider.registerHandler(FakeMSE);
}
