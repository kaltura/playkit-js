//@flow
import NativeAdapter from './adapters/native-adapter'
import LoggerFactory from '../../../utils/logger'

/**
 * Media source provider
 * @classdesc
 */
export default class MediaSourceProvider {
  /**
   * The logger of the media source provider
   * @member {any} _logger
   * @static
   * @private
   */
  static _logger: any = LoggerFactory.getLogger('MediaSourceProvider');
  /**
   * The media source adapter registry
   * @member {Array<IMediaSourceAdapter>} _mediaSourceAdapters
   * @static
   * @private
   */
  static _mediaSourceAdapters: Array<typeof IMediaSourceAdapter> = [NativeAdapter];
  /**
   * The selected adapter for playback
   * @type {null|IMediaSourceAdapter}
   * @static
   * @private
   */
  static _selectedAdapter: ?(typeof IMediaSourceAdapter) = null;

  /**
   * Add a media source adapter to the registry
   * @function register
   * @param {IMediaSourceAdapter} mediaSourceAdapter - The media source adapter to register
   * @static
   * @returns {void}
   */
  static register(mediaSourceAdapter: typeof IMediaSourceAdapter): void {
    if (mediaSourceAdapter) {
      if (!MediaSourceProvider._mediaSourceAdapters.includes(mediaSourceAdapter)) {
        MediaSourceProvider._logger.debug(`Adapter <${mediaSourceAdapter.id}> has been registered successfully`);
        MediaSourceProvider._mediaSourceAdapters.push(mediaSourceAdapter);
      } else {
        MediaSourceProvider._logger.debug(`Adapter <${mediaSourceAdapter.id}> is already registered, do not register again`);
      }
    }
  }

  /**
   * Remove a media source adapter from the registry
   * @function unRegister
   * @param {IMediaSourceAdapter} mediaSourceAdapter - The media source adapter to unRegister
   * @static
   * @returns {void}
   */
  static unRegister(mediaSourceAdapter: typeof IMediaSourceAdapter): void {
    let index = MediaSourceProvider._mediaSourceAdapters.indexOf(mediaSourceAdapter);
    if (index > -1) {
      MediaSourceProvider._logger.debug(`Unregistered <${mediaSourceAdapter.id}> adapter`);
      MediaSourceProvider._mediaSourceAdapters.splice(index, 1);
    }
  }

  /**
   * Checks if one of the registered media source adapters can play a given mime type
   * @function canPlayType
   * @param {string} mimeType - The mime type to check
   * @static
   * @returns {boolean} - If one of the adapters can play the specific mime type
   */
  static canPlayType(mimeType: string): boolean {
    let mediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters;
    for (let i = 0; i < mediaSourceAdapters.length; i++) {
      if (mediaSourceAdapters[i].canPlayType(mimeType)) {
        MediaSourceProvider._selectedAdapter = mediaSourceAdapters[i];
        MediaSourceProvider._logger.debug(`Selected adapter is <${MediaSourceProvider._selectedAdapter.id}>`);
        return true;
      }
    }
    return false;
  }

  /**
   * Get the appropriate media source adapter to the video source
   * @function getMediaSourceAdapter
   * @param {HTMLVideoElement} videoElement - The video element which requires adapter for a given mimeType
   * @param {Source} source - The selected source object
   * @param {Object} config - The player configuration
   * @returns {IMediaSourceAdapter|null} - The selected media source adapter, or null if such doesn't exists
   * @static
   */
  static getMediaSourceAdapter(videoElement: HTMLVideoElement, source: Source, config: Object): ?IMediaSourceAdapter {
    if (videoElement && source && config) {
      if (!MediaSourceProvider._selectedAdapter) {
        MediaSourceProvider.canPlayType(source.mimetype);
      }
      return MediaSourceProvider._selectedAdapter ? MediaSourceProvider._selectedAdapter.createAdapter(videoElement, source, config.engines) : null;
    }
    return null;
  }
}

const registerMediaSourceAdapter = MediaSourceProvider.register;
export {registerMediaSourceAdapter};

