// @flow
import * as Utils from '../../../utils/util'

export default class Html5IsSupportedCapability implements ICapability {
  static _result: boolean;
  static _vid: HTMLVideoElement = Utils.Dom.createElement('video');

  static runCapability(): void {
    try {
      Html5IsSupportedCapability._vid.volume = 0.5;
    } catch (e) {
      Html5IsSupportedCapability._result = false;
    }
    Html5IsSupportedCapability._result = !!Html5IsSupportedCapability._vid.canPlayType;
  }

  static getCapability(): Promise<CapabilityResult> {
    return Promise.resolve({isSupported: Html5IsSupportedCapability._result});
  }
}
