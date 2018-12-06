// @flow
import BaseDrmProtocol from './base-drm-protocol';
import type {FairplayDrmConfigType} from '../engines/html5/media-source/adapters/fairplay-drm-handler';

export default class FairPlay extends BaseDrmProtocol {
  static _logger = BaseDrmProtocol.getLogger('FairPlay');
  static _keySession: any;
  static _onWebkitNeedKeyHandler: Function;
  static _KeySystem: string = 'com.apple.fps.1_0';
  static _WebkitEvents = {
    NEED_KEY: 'webkitneedkey',
    KEY_MESSAGE: 'webkitkeymessage',
    KEY_ADDED: 'webkitkeyadded',
    KEY_ERROR: 'webkitkeyerror'
  };
  static _errorCallback: Function;

  /**
   * FairPlay playback supports in case 2 conditions are met:
   * 1. The environment supports FairPlay playback.
   * 2. The drm data of the source object contains entry with FairPlay scheme.
   * @param {Array<Object>} drmData - The drm data to check.
   * @return {boolean} - Whether FairPlay can be play on the current environment.
   */
  static canPlayDrm(drmData: Array<Object>): boolean {
    FairPlay._logger.debug('Can play DRM scheme of: ' + BaseDrmProtocol.DrmScheme.FAIRPLAY);
    return BaseDrmProtocol.DrmSupport.isProtocolSupported(BaseDrmProtocol.DrmScheme.FAIRPLAY, drmData);
  }

  /**
   * Sets the FairPlay playback.
   * @param {FairplayDrmConfigType} config - The config to manipulate.
   * @param {Array<Object>} drmData - The drm data.
   * @returns {void}
   */
  static setDrmPlayback(config: FairplayDrmConfigType, drmData: Array<Object>): void {
    FairPlay._logger.debug('Sets drm playback');
    let drmEntry = drmData.find(drmEntry => drmEntry.scheme === BaseDrmProtocol.DrmScheme.FAIRPLAY);
    if (drmEntry) {
      config.licenseUrl = drmEntry.licenseUrl;
      config.certificate = drmEntry.certificate;
    }
  }
}
