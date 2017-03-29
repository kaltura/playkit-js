// @flow
import BaseMediaSourceAdapter from './BaseMediaSourceAdapter'

/**
 * An illustration of media source extension for progressive download
 * @classdesc
 * @extends BaseMediaSourceAdapter
 */
export default class nativeAdapter extends BaseMediaSourceAdapter {
  /**
   * The name of Adapter
   * @member {string} _name
   * @static
   * @private
   */
  static _name = 'nativeAdapter';

  /**
   * Checks if nativeAdapter can play a given mime type
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
   * @param {HTMLVideoElement} videoElement - The video element which bind to nativeAdapter
   * @param {string} source - The source URL
   */
  constructor(videoElement: HTMLVideoElement, source: string) {
    super(nativeAdapter._name);
    this._msPlayer = videoElement;
    this._source = source;
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
