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
  static _mediaSourceAdapters: Array<typeof BaseMediaSourceAdapter> = [NativeAdapter];

  /**
   * Add a media source adapter to the registry
   * @function register
   * @param {BaseMediaSourceAdapter} adapter
   * @static
   */
  static register(adapter: typeof BaseMediaSourceAdapter): void {
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
  static unregister(adapter: typeof BaseMediaSourceAdapter): void {
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
   * @param {engine} engine - The video engine which requires adapter for a given mimeType
   * @param {Object} source - The video source
   * @param {Object} config - The player configuration
   * @returns {BaseMediaSourceAdapter|null}
   * @static
   */
  static getMediaSourceAdapter(engine: IEngine, source: Object, config: Object): ?BaseMediaSourceAdapter {
    if (engine && source && config) {
      let adapters = MediaSourceAdapterManager._mediaSourceAdapters;
      for (let i = 0; i < adapters.length; i++) {
        if (adapters[i].canPlayType(source.mimetype))
          return adapters[i].createAdapter(engine, source, config.engines);
      }
    }
    return null;
  }
}

const registerAdapter = MediaSourceAdapterManager.register;
export {registerAdapter};

