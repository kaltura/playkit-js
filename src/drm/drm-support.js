// @flow
import getLogger from '../utils/logger';

export default class DrmSupport {
  static _logger = getLogger('DrmSupport');
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
   * @param {Array<PKDrmDataObject>} drmData - The drm data to check.
   * @param {string} keySystem - The drm keySystem - keySystem and drm scheme could be different.
   * @return {boolean} - Whether scheme can be play on the current environment.
   */
  static isProtocolSupported(scheme: string, drmData: Array<PKDrmDataObject>, keySystem: string = scheme): Promise<*> {
    return new Promise((resolve, reject) => {
      let basicVideoCapabilities = [{contentType: 'video/mp4; codecs="avc1.42E01E"'}, {contentType: 'video/webm; codecs="vp8"'}];
      let configs = [
        {
          videoCapabilities: basicVideoCapabilities
        }
      ];
      if (DrmSupport.BrowserSupportEME() && !!window.Promise && typeof navigator.requestMediaKeySystemAccess === 'function') {
        navigator
          .requestMediaKeySystemAccess(keySystem, configs)
          .then(() => {
            if (drmData.find(drmEntry => drmEntry.scheme === scheme)) {
              resolve();
            } else {
              reject();
            }
          })
          // A catch function is required, but we do nothing here, because we're only testing for support.
          .catch(() => {
            reject();
          });
      }
    });
  }
}
