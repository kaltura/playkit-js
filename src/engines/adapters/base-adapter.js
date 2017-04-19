//@flow
import PlayerError from "../../utils/player-error"

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
   * The name of the media source adapter
   * @member {string} _name
   * @static
   * @private
   */
  static _name: string;

  /**
   * The adapter config
   * @member {Object} _config
   * @private
   */
  _config: Object;

  /**
   * The owning engine
   * @member {IEngine} _engine
   * @private
   */
  _engine: IEngine;

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
   * @returns {boolean} - Whether the media source adapter is supported. Default implementation is true
   * @static
   */
  static isSupported(): boolean {
    return true;
  }

  /**
   * Checks if the media source adapter can play a given mime type
   * @function canPlayType
   * @param {string} mimeType - The mime type to check
   * @returns {boolean} - Whether the media source adapter can play the specific mime type. Default implementation is to check if the mime type include in the media source mime types array
   * @static
   */
  static canPlayType(mimeType: string): boolean {
    return !!(this._mimeTypes && this._mimeTypes.includes(mimeType));
  }

  /**
   * Factory method to create media source adapter
   * @function createAdapter
   * @param {IEngine} engine - The video engine that the media source adapter work with
   * @param {Object} source - The source Object
   * @param {Object} config - The media source adapter configuration
   * @returns {BaseMediaSourceAdapter} - New instance of the run time media source adapter
   * @static
   */
  static createAdapter(engine: IEngine, source: Object, config: Object): BaseMediaSourceAdapter {
    return new this(engine, source, config);
  }

  /**
   * @constructor
   * @param {IEngine} engine - The video engine that the media source adapter work with
   * @param {Object} source - The source object
   * @param {Object} config - The media source adapter configuration
   */
  constructor(engine: IEngine, source: Object, config: Object) {
    this._engine = engine;
    this._config = config;
  }

  /**
   * Load the video source
   * @function load
   * @abstract
   * @returns {void}
   */
  load(): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'load').getError();
  }

  /**
   * Destroying the _msPlayer
   * @function destroy
   * @returns {void}
   */
  destroy() {
    // should do nothing. implemented by the inheritor if necessary.
  }
}
