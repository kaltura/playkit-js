// @flow
/* eslint-disable no-unused-vars */
import getLogger from '../utils/logger'
import PlayerError from '../utils/player-error'
import DrmSupport from './drm-support'
import {DrmScheme} from './drm-scheme'

export default class BaseDrmProtocol implements IDrmProtocol {
  static getLogger = getLogger;
  static DrmSupport = DrmSupport;
  static DrmScheme = DrmScheme;

  static canPlayDrm(drmData: Array<Object>): boolean {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'static canPlayDrm').getError();
  }

  static setDrmPlayback(...args): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'static setDrmPlayback').getError();
  }

  static destroy(): void {
  }
}
