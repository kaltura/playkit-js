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
   * @param {string} source - The source URL
   * @param {Object} config - The FakeMSE configuration
   */
  constructor(videoElement: HTMLVideoElement, source: string, config: Object): BaseMediaSourceAdapter {
    super(FakeMSE._name);
    this._msPlayer = videoElement;
    this.src = source;
  }

  /**
   * src setter
   * @param {string} source
   * @override
   */
  set src(source: string): void {
    super.src = source;
    if (source) {
      this._msPlayer.src = source;
    }
  }

  /**
   * Load the video source
   * @function load
   * @override
   */
  load(): void {
    this._msPlayer.load();
  }
}
// Register FakeMSE to the media source adapter manager
if (FakeMSE.isSupported()) {
  MSAManager.register(FakeMSE);
}
