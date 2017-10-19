// @flow
/* eslint-disable no-unused-vars */
import {LoggerFactory, PlayerError} from '../utils/index'
import DrmSupport from './drm-support'
import {DrmScheme} from './drm-scheme'

export default class BaseDrmProtocol implements IDrmProtocol {
  static getLogger: any = LoggerFactory.getLogger;
  static DrmSupport: (typeof DrmSupport) = DrmSupport;
  static DrmScheme: { [scheme: string]: string } = DrmScheme;

  static canPlayDrm(drmData: Array<DrmData>): boolean {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'static canPlayDrm').getError();
  }

  static setDrmPlayback(...args): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'static setDrmPlayback').getError();
  }

  static destroy(): void {
  }
}
