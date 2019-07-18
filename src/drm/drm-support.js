// @flow
import Env from '../utils/env';
import getLogger from '../utils/logger';
import {DrmScheme} from './drm-scheme';

const NOT_SUPPORTED: string = 'not_supported_drm_playback';

export default class DrmSupport {
  static _logger = getLogger('DrmSupport');
  static _Browsers: Object = {
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
    },
    'Mobile Safari': () => {
      const majorVersion = Env.browser.major;
      if (majorVersion >= 11) {
        return DrmScheme.FAIRPLAY;
      }
      return NOT_SUPPORTED;
    }
  };

  static BrowserSupportEME(): boolean {
    return (
      !!window.MediaKeys &&
      !!window.navigator &&
      !!window.navigator.requestMediaKeySystemAccess &&
      !!window.MediaKeySystemAccess &&
      !!window.MediaKeySystemAccess.prototype.getConfiguration
    );
  }

  /**
   * Checks if a certain DRM scheme is supported in the current environment.
   * @param {string} scheme - The drm scheme.
   * @param {Array<Object>} drmData - The drm data to check.
   * @return {boolean} - Whether scheme can be play on the current environment.
   */
  static isProtocolSupported(scheme: string, drmData: Array<Object>): Promise<*> {
    return new Promise((resolve, reject) => {
      let basicVideoCapabilities = [{contentType: 'video/mp4; codecs="avc1.42E01E"'}, {contentType: 'video/webm; codecs="vp8"'}];

      let basicConfig = {
        videoCapabilities: basicVideoCapabilities
      };
      let offlineConfig = {
        videoCapabilities: basicVideoCapabilities,
        persistentState: 'required',
        sessionTypes: ['persistent-license']
      };
      // Try the offline config first, then fall back to the basic config.
      let configs = [offlineConfig, basicConfig];
      if (DrmSupport.BrowserSupportEME() && !!window.Promise) {
        navigator
          .requestMediaKeySystemAccess(scheme, configs)
          .then(() => {
            if (drmData.find(drmEntry => drmEntry.scheme === scheme)) {
              resolve();
            } else {
              reject();
            }
          })
          // A catch function is required, but we do nothing here, because we're only testing for support.
          .catch(function fail() {
            reject();
          });
      }
    });
  }
}
