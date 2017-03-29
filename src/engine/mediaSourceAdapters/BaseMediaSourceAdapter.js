//@flow
import LoggerFactory from '../../util/loggerFactory';
import PlayerError from "../../util/PlayerError";

/**
 * Base of media source adapters
 * @classdesc
 */
export default class BaseMediaSourceAdapter {
  /**
   * The supported mime types by the media source adapter
   * @member {Array} _mimeTypes
   * @static
   * @private
   */
  static _mimeTypes: Array<string>;
  /**
   * The logger of the media source adapter
   * @member {ILogger} _logger
   * @static
   * @private
   */
  static _logger: ILogger;
  /**
   * The name of the media source adapter
   * @member {string} _name
   * @static
   * @private
   */
  static _name: string;
  /**
   * The player wrapper of the media source adapter
   * @member {any} _msPlayer
   * @private
   */
  _msPlayer: any;
  /**
   * The source URL
   * @member {string} _source
   * @private
   */
  _source: string;

  /**
   * Checks if the media source adapter is supported
   * @function isSupported
   * @returns {boolean}
   * @static
   */
  static isSupported(): boolean {
    return true;
  }

  /**
   * Checks if the media source adapter can play a given mime type
   * @function canPlayType
   * @param {string} mimeType
   * @returns {boolean}
   * @static
   */
  static canPlayType(mimeType: string): boolean {
    return !!(this._mimeTypes && this._mimeTypes.includes(mimeType));
  }

  /**
   * Factory method to create media source adapter
   * @function createAdapter
   * @param {HTMLVideoElement} videoElement - The video element which bind to the media source adapter
   * @param {string} source - The source URL
   * @param {Object} config - The media source adapter configuration
   * @returns {BaseMediaSourceAdapter}
   * @static
   */
  static createAdapter(videoElement: HTMLVideoElement, source: string, config: Object): BaseMediaSourceAdapter {
    return new this(videoElement, source, config);
  }

  /**
   * Error handler
   * @function onError
   * @param {Object} error
   * @static
   */
  static onError(error: Object) {
    this._logger.error(error);
  }

  /**
   * @constructor
   * @param {string} name - The name of the media source adapter
   */
  constructor(name: string) {
    this._logger = LoggerFactory.getLogger(name);
  }

  /**
   * Load the video source
   * @function load
   * @abstract
   */
  load(): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'load').getError();
  }

  /**
   * Destroying the _msPlayer
   * @function destroy
   */
  destroy() {
    // should do nothing. implemented by the inheritor if necessary.
  }
}
