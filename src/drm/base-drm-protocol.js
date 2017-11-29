// @flow
/* eslint-disable no-unused-vars */
import getLogger from '../utils/logger'
import Error, {Category, Code, Severity} from '../utils/player-error'
import DrmSupport from './drm-support'
import {DrmScheme} from './drm-scheme'

export default class BaseDrmProtocol implements IDrmProtocol {
  static getLogger = getLogger;
  static DrmSupport = DrmSupport;
  static DrmScheme = DrmScheme;

  static canPlayDrm(drmData: Array<Object>): boolean {
    throw new Error(Severity.CRITICAL, Category.PLAYER, Code.RUNTIME_ERROR, {info: 'static canPlayDrm'});
  }

  static setDrmPlayback(...args): void {
    throw new Error(Severity.CRITICAL, Category.PLAYER, Code.RUNTIME_ERROR, {info: 'static setDrmPlayback'});
  }

  static destroy(): void {
  }
}
