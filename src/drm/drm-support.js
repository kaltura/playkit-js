// @flow
import {LoggerFactory, Env} from '../utils/index'
import {DrmScheme} from './drm-scheme'

const NOT_SUPPORTED: string = 'not_supported_drm_playback';

export default class DrmSupport {
  static _logger: any = LoggerFactory.getLogger('DrmSupport');
  static _Browsers: BrowserHandlers = {
    Safari: () => {
      const device = Env.device.type;
      const os = Env.os.name;
      if (!device && os === 'Mac OS') {
        return DrmScheme.FAIRPLAY;
      }
      return NOT_SUPPORTED;
    },
    Chrome: () => {
      const device = Env.device.type;
      const os = Env.os.name;
      if (!device || os === 'Android') {
        return DrmScheme.WIDEVINE;
      }
      return NOT_SUPPORTED;
    },
    Firefox: () => {
      const device = Env.device.type;
      if (!device) {
        return DrmScheme.WIDEVINE;
      }
      return NOT_SUPPORTED;
    },
    Edge: () => {
      const device = Env.device.type;
      if (!device) {
        return DrmScheme.PLAYREADY;
      }
      return NOT_SUPPORTED;
    },
    IE: () => {
      const device = Env.device.type;
      const os = Env.os.name;
      const osVersion = Env.os.version;
      if (!device && os === 'Windows' && Number.parseFloat(osVersion) >= 8.1) {
        return DrmScheme.PLAYREADY;
      }
      return NOT_SUPPORTED;
    }
  };

  /**
   * Checks if a certain DRM scheme is supported in the current environment.
   * @param {string} scheme - The drm scheme.
   * @param {Array<Object>} drmData - The drm data to check.
   * @return {boolean} - Whether scheme can be play on the current environment.
   */
  static isProtocolSupported(scheme: string, drmData: Array<DrmData>): boolean {
    const browser = Env.browser.name;
    if (typeof DrmSupport._Browsers[browser] === 'function') {
      const drmScheme = DrmSupport._Browsers[browser]();
      DrmSupport._logger.debug("Supported DRM scheme for current environment is: " + drmScheme);
      return (drmScheme === scheme && !!(drmData.find((drmEntry) => drmEntry.scheme === scheme)));
    }
    return false;
  }
}
