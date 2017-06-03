//@flow
import LoggerFactory from '../../../../utils/logger'

/**
 * An illustration of media source extension for progressive download
 * @classdesc
 * @implements {IMediaSourceAdapter}
 */
export default class NativeAdapter implements IMediaSourceAdapter {
  /**
   * The name of the Adapter
   * @member {string} _name
   * @static
   * @private
   */
  static _name = "NativeAdapter";
  /**
   * Getter for the adapter name
   * @returns {string} - The adapter name
   */
  static get name(): string {
    return NativeAdapter._name;
  }

  /**
   * The adapter logger
   * @member {any} _logger
   * @private
   * @static
   */
  static _logger = LoggerFactory.getLogger(NativeAdapter._name);
  /**
   * The adapter config
   * @member {Object} _config
   * @private
   */
  _config: Object;
  /**
   * The dom video element
   * @member {HTMLVideoElement} _videoElement
   * @private
   */
  _videoElement: HTMLVideoElement;

  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to NativeAdapter
   * @param {Source} source - The source URL
   * @param {Object} config - The media source adapter configuration
   */
  constructor(videoElement: HTMLVideoElement, source: ?Source, config: Object) {
    this._config = config;
    this._videoElement = videoElement;
    if (source != null) {
      this._videoElement.src = source.url;
    }
  }

  /**
   * Checks if NativeAdapter can play a given mime type
   * @function canPlayType
   * @param {string} mimeType - The mime type to check
   * @returns {boolean} - Whether the native adapter can play a specific mime type
   * @static
   */
  static canPlayType(mimeType: string): boolean {
    let canPlayType = !!(document.createElement("video").canPlayType(mimeType));
    NativeAdapter._logger.debug('canPlayType result for mimeType:' + mimeType + ' is ' + canPlayType.toString());
    return canPlayType;
  }

  /**
   * Checks if the media source adapter is supported
   * @function isSupported
   * @returns {boolean} - Whether the media source adapter is supported. Default implementation is true
   * @static
   */
  static isSupported(): boolean {
    NativeAdapter._logger.debug('isSupported:true');
    return true;
  }

  /**
   * Factory method to create media source adapter
   * @function createAdapter
   * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with
   * @param {Object} source - The source Object
   * @param {Object} config - The media source adapter configuration
   * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter
   * @static
   */
  static createAdapter(videoElement: HTMLVideoElement, source: Source, config: Object): IMediaSourceAdapter {
    NativeAdapter._logger.debug('Creating adapter');
    return new this(videoElement, source, config);
  }

  /**
   * Load the video source
   * @function load
   * @returns {void}
   */
  load(): void {
    NativeAdapter._logger.debug('load');
    this._videoElement.load();
  }

  /**
   * Clearing the video source
   * @function destroy
   * @returns {void}
   */
  destroy(): void {
    NativeAdapter._logger.debug('destroy');
    this._videoElement.src = "";
  }
}
