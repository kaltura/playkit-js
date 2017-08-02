//@flow
import NativeAdapter from './adapters/native-adapter'
import LoggerFactory from '../../../utils/logger'

/**
 * @namespace MediaSourceProvider
 * @memberof Classes
 */
export default class MediaSourceProvider {
  static _logger: any = LoggerFactory.getLogger('MediaSourceProvider');
  static _mediaSourceAdapters: Array<typeof IMediaSourceAdapter> = [NativeAdapter];
  static _selectedAdapter: ?(typeof IMediaSourceAdapter) = null;

  /**
   * @param {IMediaSourceAdapter} mediaSourceAdapter
   * @static
   * @public
   * @memberof Classes.MediaSourceProvider
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
   * @param {IMediaSourceAdapter} mediaSourceAdapter
   * @static
   * @public
   * @memberof Classes.MediaSourceProvider
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
   * @param {string} mimeType
   * @static
   * @public
   * @memberof Classes.MediaSourceProvider
   * @returns {boolean}
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
   * @param {HTMLVideoElement} videoElement
   * @param {Source} source
   * @param {Object} config
   * @returns {IMediaSourceAdapter | null}
   * @static
   * @public
   * @memberof Classes.MediaSourceProvider
   */
  static getMediaSourceAdapter(videoElement: HTMLVideoElement, source: Source, config: Object): ?IMediaSourceAdapter {
    if (videoElement && source && config) {
      if (!MediaSourceProvider._selectedAdapter) {
        MediaSourceProvider.canPlayType(source.mimetype);
      }
      return MediaSourceProvider._selectedAdapter ? MediaSourceProvider._selectedAdapter.createAdapter(videoElement, source, config) : null;
    }
    return null;
  }

  /**
   * @static
   * @returns {void}
   * @public
   * @memberof Classes.MediaSourceProvider
   */
  static destroy(): void {
    MediaSourceProvider._selectedAdapter = null;
  }
}

const registerMediaSourceAdapter = MediaSourceProvider.register;
export {registerMediaSourceAdapter};

