//@flow
import BaseMediaSourceAdapter from './base-adapter'
import NativeAdapter from './native-adapter'

/**
 * Media source adapter manager
 * @classdesc
 */
export default class MediaSourceAdapterManager {
  /**
   * The media source adapter registry
   * @member {Array<BaseMediaSourceAdapter>} _mediaSourceAdapters
   * @static
   * @private
   */
  static _mediaSourceAdapters: Array<BaseMediaSourceAdapter> = [NativeAdapter];

  /**
   * Add a media source adapter to the registry
   * @function register
   * @param {BaseMediaSourceAdapter} adapter
   * @static
   */
  static register(adapter: BaseMediaSourceAdapter): void {
    if (adapter && !MediaSourceAdapterManager._mediaSourceAdapters.includes(adapter)) {
      MediaSourceAdapterManager._mediaSourceAdapters.push(adapter);
    }
  }

  /**
   * Remove a media source adapter from the registry
   * @function unregister
   * @param {BaseMediaSourceAdapter} adapter
   * @static
   */
  static unregister(adapter: BaseMediaSourceAdapter): void {
    let index = MediaSourceAdapterManager._mediaSourceAdapters.indexOf(adapter);
    if (index > -1) {
      MediaSourceAdapterManager._mediaSourceAdapters.splice(index, 1);
    }
  }

  /**
   * Checks if one of the registered media source adapters can play a given mime type
   * @function canPlayType
   * @param {string} mimeType - The mime type to check
   * @returns {boolean}
   * @static
   */
  static canPlayType(mimeType: string): boolean {
    let adapters = MediaSourceAdapterManager._mediaSourceAdapters;
    for (let i = 0; i < adapters.length; i++) {
      if (adapters[i].canPlayType(mimeType)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Get the appropriate media source adapter to the video source
   * @function getMediaSourceAdapter
   * @param {HTMLVideoElement} videoElement - The video element which will bind to the media source adapter
   * @param {Object} source - The video source
   * @param {Object} config - The player configuration
   * @returns {BaseMediaSourceAdapter|null}
   * @static
   */
  static getMediaSourceAdapter(videoElement: HTMLVideoElement, source: Object, config: Object): BaseMediaSourceAdapter
    | null {
    if (videoElement && source && config) {
      let adapters = MediaSourceAdapterManager._mediaSourceAdapters;
      for (let i = 0; i < adapters.length; i++) {
        if (adapters[i].canPlayType(source.mimetype))
          return adapters[i].createAdapter(videoElement, source.src, config.engines);
      }
    }
    return null;
  }
}

const registerAdapter = MediaSourceAdapterManager.register;
export {registerAdapter};

