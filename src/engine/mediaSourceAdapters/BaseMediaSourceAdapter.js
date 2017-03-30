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
  static _name: string = 'BaseMediaSourceAdapter';
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
    LoggerFactory.getLogger(this._name).debug('isSupported() - true');
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
    let result = !!(this._mimeTypes && this._mimeTypes.includes(mimeType));
    LoggerFactory.getLogger(this._name).debug(`canPlayType(${mimeType}) - ${result}`);
    return result;
  }

  /**
   * Error handler
   * @function onError
   * @param {Object} error
   * @static
   */
  static onError(error: Object) {
    LoggerFactory.getLogger(this._name).error(error);
    throw error;
  }

  /**
   * Get the _logger
   * @returns {ILogger}
   * @static
   * @protected
   */
  static get logger(): ILogger {
    if (!this._logger) {
      this._logger = LoggerFactory.getLogger(this._name);
    }
    return this._logger;
  }

  /**
   * @constructor
   * @param {string} source - The source URL
   */
  constructor(source: string) {
    LoggerFactory.getLogger(this.constructor._name).info(`constructing for ${source}`);
    this._source = source;
  }

  /**
   * Load the video source
   * @function load
   * @abstract
   */
  load(): void {
    let error = new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'load').getError();
    LoggerFactory.getLogger(this.constructor._name).error(error.message);
    throw error;
  }

  /**
   * Destroying the _msPlayer
   * @function destroy
   */
  destroy() {
    LoggerFactory.getLogger(this.constructor._name).debug('destroy');
    this._source = "";
  }
}
