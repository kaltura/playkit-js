//@flow
import BaseMediaSourceAdapter from './base-adapter'

/**
 * An illustration of media source extension for progressive download
 * @classdesc
 * @extends BaseMediaSourceAdapter
 */
export default class NativeAdapter extends BaseMediaSourceAdapter {
  /**
   * The name of Adapter
   * @member {string} _name
   * @static
   * @private
   */
  static _name = 'NativeAdapter';

  /**
   * Checks if NativeAdapter can play a given mime type
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
   * @param {IEngine} engine - The video element which bind to NativeAdapter
   * @param {string} source - The source URL
   * @param {Object} config - The media source adapter configuration
   */
  constructor(engine: IEngine, source: Object, config: Object) {
    super(engine, source, config);
    this._msPlayer = engine.getVideoElement();
    this._source = source.url;
    if (source) {
      this._msPlayer.src = source.url;
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
