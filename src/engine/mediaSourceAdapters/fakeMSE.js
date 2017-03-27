// @flow
import BaseMediaSourceAdapter from './BaseMediaSourceAdapter'
import MSAManager from './mediaSourceAdapterManager'

/**
 * An illustration of media source extension for progressive download
 *@classdesc
 *@extends BaseMediaSourceAdapter
 */
export default class FakeMSE extends BaseMediaSourceAdapter {
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
  constructor(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceAdapter {
    super(FakeMSE._name);
    this._msPlayer = videoElement;
  }

  /**
   * Load the video source
   * @function load
   * @param {Object} source - The source to load
   * @override
   */
  load(source: Object): void {
    if (source) {
      this._msPlayer.src = source.src;
    }
  }
}
// Register FakeMSE to the media source adapter manager
if (FakeMSE.isSupported()) {
  MSAManager.registerAdapter(FakeMSE);
}
