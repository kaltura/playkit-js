//@flow
import LoggerFactory from '../../util/loggerFactory';
import PlayerError from "../../util/PlayerError";

/**
 * @classdesc
 * Base of media source handlers
 */
export default class BaseMediaSourceHandler {
  /**
   * The supported mime types by the media source handler
   * @type {Array}
   * @private
   * @member
   * @static
   */
  static _mimeTypes: Array<string> = [];
  /**
   * The logger of the media source handler
   * @type {ILogger}
   * @private
   * @member
   * @static
   */
  static _logger: ILogger;
  /**
   * The name of the media source handler
   * @type {string}
   * @private
   * @member
   * @static
   */
  static _name: string;
  /**
   * The player wrapper of the media source handler
   * @type {any}
   * @private
   * @member
   */
  _msPlayer: any;
  /**
   * Checks if the media source handler is supported
   * @returns {boolean}
   * @function
   * @static
   */
  static isSupported(): boolean {
    return true;
  }
  /**
   * Checks if the media source handler can play a given mime type
   * @param {string} mimeType
   * @returns {boolean}
   * @function
   * @static
   */
  static canPlayType(mimeType: string): boolean {
    return !!(this._mimeTypes && this._mimeTypes.includes(mimeType));
  }
  /**
   * Factory method to create media source handler
   * @param {HTMLVideoElement} videoElement - The video element which bind to the media source handler
   * @param {Object} config - The media source handler configuration
   * @returns {BaseMediaSourceHandler}
   * @function
   * @static
   */
  static createHandler(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler {
    return new this(videoElement, config);
  }
  /**
   * Error handler
   * @param {Object} error
   * @function
   * @static
   */
  static onError(error: Object){
    this._logger.error(error);
  }
  /**
   * Base constructor
   * @param {string} name - The name of the media source handler
   * @class
   */
  constructor(name: string){
    this._logger = LoggerFactory.getLogger(name);
  }
  /**
   * Load the video source
   * @param source
   * @function
   * @abstract
   */
  load(source: string) {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'load()').getError();
  }
}
