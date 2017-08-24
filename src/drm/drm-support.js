// @flow
import Env from '../utils/env'
import LoggerFactory from '../utils/logger'
import {DrmScheme} from './drm-scheme'

const BROWSER: string = Env.browser.name;
const DEVICE: ?string = Env.device.type;
const OS: string = Env.os.name;
const OS_VERSION: string = Env.os.version;
const NOT_SUPPORTED: string = 'not_supported_drm_playback';

export default class DrmSupport {
  static _logger = LoggerFactory.getLogger('DrmSupport');
  static _Browsers: Object = {
    Safari: () => {
      if (!DEVICE && OS === 'Mac OS') {
        return DrmScheme.FAIRPLAY;
      }
      return NOT_SUPPORTED;
    },
    Chrome: () => {
      if (!DEVICE || (DEVICE === 'mobile' && OS === 'Android')) {
        return DrmScheme.WIDEVINE;
      }
      return NOT_SUPPORTED;
    },
    Firefox: () => {
      if (!DEVICE) {
        return DrmScheme.WIDEVINE
      }
      return NOT_SUPPORTED;
    },
    Edge: () => {
      if (!DEVICE) {
        return DrmScheme.PLAYREADY;
      }
      return NOT_SUPPORTED;
    },
    IE: () => {
      if (!DEVICE && OS === 'Windows' && Number.parseFloat(OS_VERSION) >= 8.1) {
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
    if (typeof DrmSupport._Browsers[BROWSER] === 'function') {
      let drmScheme = DrmSupport._Browsers[BROWSER]();
      DrmSupport._logger.debug("Supported DRM scheme for current environment is: " + drmScheme);
      return (drmScheme === scheme && !!(drmData.find((drmEntry) => drmEntry.scheme === scheme)));
    }
    return false;
  }
}
