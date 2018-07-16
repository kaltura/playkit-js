// @flow
import * as Utils from '../../../utils/util';

export default class Html5IsSupportedCapability implements ICapability {
  static _vid: HTMLVideoElement = Utils.Dom.createElement('video');
  static _result: boolean;

  /***
   * Runs the test for isSupported capability.
   * @public
   * @static
   * @returns {void}
   */
  static runCapability(): void {
    try {
      Html5IsSupportedCapability._vid.volume = 0.5;
      Html5IsSupportedCapability._result = !!Html5IsSupportedCapability._vid.canPlayType;
    } catch (e) {
      Html5IsSupportedCapability._result = false;
    }
  }

  /**
   * Gets the test result for isSupported capability.
   * @returns {Promise<CapabilityResult>} - The result object for isSupported capability.
   * @static
   * @public
   */
  static getCapability(): Promise<CapabilityResult> {
    return Promise.resolve({isSupported: Html5IsSupportedCapability._result});
  }
}
