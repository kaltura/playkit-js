// @flow
import * as Utils from '../../../utils/util'
import * as EncodingSources from '../../../assets/encoding-sources.json'
import {Html5EventType} from '../../../event/event-type'

const WAIT_TIME: number = 500;

const testVideoElement: HTMLVideoElement = Utils.Dom.createElement('video');
testVideoElement.src = EncodingSources.Base64Mp4Source;
// For iOS devices needs to turn the playsinline attribute on
testVideoElement.setAttribute('playsinline', '');

export default class Html5AutoPlayCapability implements ICapability {
  static _playPromiseResult: Promise<*>;

  /**
   * Runs the test for autoplay capability.
   * @public
   * @static
   * @returns {void}
   */
  static runCapability(): void {
    Html5AutoPlayCapability._playPromiseResult = new Promise((resolve) => {
      Html5AutoPlayCapability._setMuted(false);
      if (Html5AutoPlayCapability._isDataSaverMode()) {
        resolve({autoplay: false, mutedAutoPlay: false});
      } else {
        Html5AutoPlayCapability._getPlayPromise()
          .then(() => resolve({autoplay: true, mutedAutoPlay: true}))
          .catch(() => {
            Html5AutoPlayCapability._setMuted(true);
            Html5AutoPlayCapability._getPlayPromise()
              .then(() => resolve({autoplay: false, mutedAutoPlay: true}))
              .catch(() => resolve({autoplay: false, mutedAutoPlay: false}));
          });
      }
    });
  }

  /**
   * Gets the test result for autoplay capability.
   * @returns {Promise<CapabilityResult>} - The result object for autoplay capability.
   * @static
   * @public
   */
  static getCapability(): Promise<CapabilityResult> {
    return Html5AutoPlayCapability._playPromiseResult
      .then(res => {
        // If autoplay is not allowed - try again and return the updated result
        if (!res.autoplay) {
          Html5AutoPlayCapability.runCapability();
          return Html5AutoPlayCapability._playPromiseResult;
        }
        return res;
      });
  }

  /**
   * Checks if the device is in data saver mode.
   * @returns {boolean} - If the device is in data saver mode.
   * @private
   */
  static _isDataSaverMode(): boolean {
    if ("connection" in navigator) { // $FlowFixMe
      return (navigator.connection.saveData === true);
    }
    return false;
  }

  /**
   * Gets the play promise.
   * @return {Promise<*>} - Play promise which resolved or rejected.
   * @private
   */
  static _getPlayPromise(): Promise<*> {
    return testVideoElement.play() || Html5AutoPlayCapability._forcePromiseReturnValue();
  }

  /**
   * Sets the test video element muted value.
   * @param {boolean} muted - The muted value.
   * @private
   * @returns {void}
   * @static
   */
  static _setMuted(muted: boolean): void {
    if (muted) {
      testVideoElement.muted = true;
      testVideoElement.setAttribute('muted', '');
    } else {
      testVideoElement.muted = false;
      testVideoElement.removeAttribute('muted');
    }
  }

  /**
   * For browsers which are not supported promise return value from play()
   * request we are simulate the same behaviour.
   * @return {Promise<*>} - Play promise which resolved or rejected.
   * @private
   * @static
   */
  static _forcePromiseReturnValue(): Promise<*> {
    return new Promise((resolve, reject) => {
      const supported = setTimeout(() => {
        reject();
      }, WAIT_TIME);
      testVideoElement.addEventListener(Html5EventType.PLAYING, () => {
        clearTimeout(supported);
        resolve();
      });
      testVideoElement.addEventListener(Html5EventType.ERROR, () => {
        clearTimeout(supported);
        reject();
      });
    });
  }
}
