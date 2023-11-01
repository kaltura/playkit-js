// @flow
import type {FairPlayDrmConfigType} from '../engines/html5/media-source/adapters/fairplay-drm-handler';
import getLogger from '../utils/logger';
import {DrmScheme} from './drm-scheme';

const _logger = getLogger('FairPlay');

const FairPlay: IDrmProtocol = class FairPlay {
  /**
   * FairPlay is the configure key system.
   * @param {Array<PKDrmDataObject>} drmData - The drm data.
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @return {boolean} - Whether FairPlay is the configure key system.
   */
  static isConfigured(drmData: Array<PKDrmDataObject>, drmConfig: PKDrmConfigObject): boolean {
    return DrmScheme.FAIRPLAY === drmConfig.keySystem && !!drmData.find(drmEntry => drmEntry.scheme === drmConfig.keySystem);
  }

  /**
   * FairPlay playback supports in case 2 conditions are met:
   * 1. The environment supports FairPlay playback.
   * 2. The drm data of the source object contains entry with FairPlay scheme.
   * @param {Array<PKDrmDataObject>} drmData - The drm data to check.
   * @return {boolean} - Whether FairPlay can be play on the current environment.
   */
  static canPlayDrm(drmData: Array<PKDrmDataObject>): boolean {
    const result = drmData.some(drmEntry => drmEntry.scheme === DrmScheme.FAIRPLAY) && !!window.WebKitMediaKeys;
    _logger.debug(`Can play DRM scheme of: ${DrmScheme.FAIRPLAY} is ${result.toString()}`);
    return result;
  }

  /**
   * Sets the FairPlay playback.
   * @param {FairPlayDrmConfigType} config - The config to manipulate.
   * @param {Array<PKDrmDataObject>} drmData - The drm data.
   * @returns {void}
   */
  static setDrmPlayback(config: FairPlayDrmConfigType, drmData: Array<PKDrmDataObject>): void {
    _logger.debug('Sets drm playback');
    let drmEntry = drmData.find(drmEntry => drmEntry.scheme === DrmScheme.FAIRPLAY);
    if (drmEntry) {
      config.licenseUrl = drmEntry.licenseUrl;
      config.certificate = drmEntry.certificate;
    }
  }
};

export default FairPlay;
