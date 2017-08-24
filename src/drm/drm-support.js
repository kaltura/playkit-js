// @flow
import Env from '../utils/env'
import {DrmScheme} from './drm-scheme'

const DEVICE: ?string = Env.device.type;
const OS: string = Env.os.name;
const OS_VERSION: string = Env.os.version;
const NOT_SUPPORTED: string = 'not_supported_drm_playback';

export const DrmSupport = {
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
