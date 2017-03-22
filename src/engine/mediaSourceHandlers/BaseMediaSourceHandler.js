//@flow
import LoggerFactory from '../../util/loggerFactory';
import PlayerError from "../../util/PlayerError";

/**
 * Base of media source handlers
 * @classdesc
 */
export default class BaseMediaSourceHandler {
  /**
   * The supported mime types by the media source handler
   * @member {Array} _mimeTypes
   * @static
   * @private
   */
  static _mimeTypes: Array<string>;
  /**
   * The logger of the media source handler
   * @member {ILogger} _logger
   * @static
   * @private
   */
  static _logger: ILogger;
  /**
   * The name of the media source handler
   * @member {string} _name
   * @static
   * @private
   */
  static _name: string;
  /**
   * The player wrapper of the media source handler
   * @member {any} _msPlayer
   * @private
   */
  _msPlayer: any;

  /**
   * Checks if the media source handler is supported
   * @function isSupported
   * @returns {boolean}
   * @static
   */
  static isSupported(): boolean {
    return true;
  }

  /**
   * Checks if the media source handler can play a given mime type
   * @function canPlayType
   * @param {string} mimeType
   * @returns {boolean}
   * @static
   */
  static canPlayType(mimeType: string): boolean {
    return !!(this._mimeTypes && this._mimeTypes.includes(mimeType));
  }

  /**
   * Factory method to create media source handler
   * @function createHandler
   * @param {HTMLVideoElement} videoElement - The video element which bind to the media source handler
   * @param {Object} config - The media source handler configuration
   * @returns {BaseMediaSourceHandler}
   * @static
   */
  static createHandler(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler {
    return new this(videoElement, config);
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
   * Destroying the _msPlayer
   * @function destroy
   * @static
   */
  static destroy() {
    // should do nothing. implemented by the inheritor if necessary.
  }

  /**
   * @constructor
   * @param {string} name - The name of the media source handler
   */
  constructor(name: string) {
    this._logger = LoggerFactory.getLogger(name);
  }

  /**
   * Load the video source
   * @function load
   * @param {string} source - The source to load
   * @abstract
   */
  load(source: string) {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'load').getError();
  }
}
