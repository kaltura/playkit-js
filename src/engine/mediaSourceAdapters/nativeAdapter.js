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
    let result = !!(document.createElement("video").canPlayType(mimeType));
    nativeAdapter.logger.debug(`canPlayType(${mimeType}) - ${result}`);
    return result;
  }

  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to nativeAdapter
   * @param {string} source - The source URL
   */
  constructor(videoElement: HTMLVideoElement, source: string) {
    super(source);
    this._msPlayer = videoElement;
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
    nativeAdapter.logger.debug('load');
    this._msPlayer.load();
  }
}
