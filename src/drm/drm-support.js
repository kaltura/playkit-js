// @flow
import Env from '../utils/env'
import LoggerFactory from '../utils/logger'
import {DrmScheme} from './drm-scheme'

const NOT_SUPPORTED: string = 'not_supported_drm_playback';

export default class DrmSupport {
  static _logger = LoggerFactory.getLogger('DrmSupport');
  static _Browsers: Object = {
    Safari: () => {
      let device = Env.device.type;
      let os = Env.os.name;
      if (!device && os === 'Mac OS') {
        return DrmScheme.FAIRPLAY;
      }
      return NOT_SUPPORTED;
    },
    Chrome: () => {
      let device = Env.device.type;
      let os = Env.os.name;
      if (!device || os === 'Android') {
        return DrmScheme.WIDEVINE;
      }
      return NOT_SUPPORTED;
    },
    Firefox: () => {
      let device = Env.device.type;
      if (!device) {
        return DrmScheme.WIDEVINE;
      }
      return NOT_SUPPORTED;
    },
    Edge: () => {
      let device = Env.device.type;
      if (!device) {
        return DrmScheme.PLAYREADY;
      }
      return NOT_SUPPORTED;
    },
    IE: () => {
      let device = Env.device.type;
      let os = Env.os.name;
      let osVersion = Env.os.version;
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
  static isProtocolSupported(scheme: string, drmData: Array<Object>): boolean {
    let browser = Env.browser.name;
    if (typeof DrmSupport._Browsers[browser] === 'function') {
      let drmScheme = DrmSupport._Browsers[browser]();
      DrmSupport._logger.debug("Supported DRM scheme for current environment is: " + drmScheme);
      return (drmScheme === scheme && !!(drmData.find((drmEntry) => drmEntry.scheme === scheme)));
    }
    return false;
  }
}
