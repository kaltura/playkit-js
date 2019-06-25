//@flow
import NativeAdapter from './adapters/native-adapter';
import getLogger from '../../../utils/logger';

/**
 * Media source provider
 * @classdesc
 */
export default class MediaSourceProvider {
  /**
   * The logger of the media source provider.
   * @member {any} _logger
   * @static
   * @private
   */
  static _logger: any = getLogger('MediaSourceProvider');
  /**
   * The media source adapter registry.
   * @member {Array<IMediaSourceAdapter>} _mediaSourceAdapters
   * @static
   * @private
   */
  static _mediaSourceAdapters: Array<typeof IMediaSourceAdapter> = [NativeAdapter];
  /**
   * The selected adapter for playback.
   * @type {null|IMediaSourceAdapter}
   * @static
   * @private
   */
  static _selectedAdapter: ?typeof IMediaSourceAdapter = null;

  /**
   * Add a media source adapter to the registry.
   * @function register
   * @param {IMediaSourceAdapter} mediaSourceAdapter - The media source adapter to register.
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
   * Remove a media source adapter from the registry.
   * @function unRegister
   * @param {IMediaSourceAdapter} mediaSourceAdapter - The media source adapter to unRegister.
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
   * Checks if the a media source adapter can play a given source.
   * @param {PKMediaSourceObject} source - The source object to check.
   * @param {boolean} [preferNative=true] - prefer native flag.
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @returns {boolean} - Whether a media source adapter can play the source.
   * @public
   * @static
   */
  static canPlaySource(source: PKMediaSourceObject, preferNative: boolean = true, drmConfig: PKDrmConfigObject): boolean {
    MediaSourceProvider._orderMediaSourceAdapters(preferNative);
    let mediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters;
    if (source && source.mimetype) {
      for (let i = 0; i < mediaSourceAdapters.length; i++) {
        if (
          mediaSourceAdapters[i].canPlayType(source.mimetype) &&
          (!source.drmData || mediaSourceAdapters[i].canPlayDrm(source.drmData, drmConfig))
        ) {
          MediaSourceProvider._selectedAdapter = mediaSourceAdapters[i];
          MediaSourceProvider._logger.debug(`Selected adapter is <${MediaSourceProvider._selectedAdapter.id}>`);
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Orders the media source adapters array according to the preferNative value.
   * @param {boolean} preferNative - Whether to prefer native playback.
   * @private
   * @returns {void}
   */
  static _orderMediaSourceAdapters(preferNative: boolean): void {
    MediaSourceProvider._mediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters.filter(mse => mse.id !== 'NativeAdapter');
    if (preferNative) {
      MediaSourceProvider._mediaSourceAdapters.unshift(NativeAdapter);
    } else {
      MediaSourceProvider._mediaSourceAdapters.push(NativeAdapter);
    }
  }

  /**
   * Get the appropriate media source adapter to the video source.
   * @function getMediaSourceAdapter
   * @param {HTMLVideoElement} videoElement - The video element which requires adapter for a given mimeType.
   * @param {PKMediaSourceObject} source - The selected source object.
   * @param {Object} config - The player configuration.
   * @returns {IMediaSourceAdapter|null} - The selected media source adapter, or null if such doesn't exists.
   * @static
   */
  static getMediaSourceAdapter(videoElement: HTMLVideoElement, source: PKMediaSourceObject, config: Object): ?IMediaSourceAdapter {
    if (videoElement && source && config) {
      if (!MediaSourceProvider._selectedAdapter) {
        MediaSourceProvider.canPlaySource(source, true, config.drm);
      }
      return MediaSourceProvider._selectedAdapter ? MediaSourceProvider._selectedAdapter.createAdapter(videoElement, source, config) : null;
    }
    return null;
  }

  /**
   * Destroys the media source adapter provider necessary props.
   * @static
   * @returns {void}
   */
  static destroy(): void {
    MediaSourceProvider._selectedAdapter = null;
  }
}

const registerMediaSourceAdapter = MediaSourceProvider.register;
export {registerMediaSourceAdapter};
