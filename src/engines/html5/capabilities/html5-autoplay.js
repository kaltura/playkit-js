// @flow
import * as Utils from '../../../utils/util';
import {Html5EventType} from '../../../event/event-type';
import getLogger from '../../../utils/logger';
import * as EncodingSources from '../../../assets/encoding-sources.json';

const WAIT_TIME: number = 500;

export default class Html5AutoPlayCapability implements ICapability {
  static _vid: HTMLVideoElement;
  static _playPromiseResult: Promise<*>;
  static _logger: any = getLogger('Html5AutoPlayCapability');

  /**
   * Runs the test for autoplay capability.
   * @public
   * @param {?boolean} playsinline - content playsinline
   * @static
   * @returns {void}
   */
  static runCapability(playsinline: ?boolean): void {
    if (!Html5AutoPlayCapability._vid) {
      Html5AutoPlayCapability._vid = Utils.Dom.createElement('video');
      Html5AutoPlayCapability._vid.src = EncodingSources.Base64Mp4Source;
    }
    Html5AutoPlayCapability._setPlaysinline(playsinline);
    Html5AutoPlayCapability._playPromiseResult = new Promise(resolve => {
      Html5AutoPlayCapability._setMuted(false);
      Html5AutoPlayCapability._getPlayPromise()
        .then(() => resolve({autoplay: true, mutedAutoPlay: true}))
        .catch(() => {
          Html5AutoPlayCapability._setMuted(true);
          Html5AutoPlayCapability._getPlayPromise()
            .then(() => resolve({autoplay: false, mutedAutoPlay: true}))
            .catch(() => resolve({autoplay: false, mutedAutoPlay: false}));
        });
    });
  }

  /**
   * Gets the test result for autoplay capability.
   * @returns {Promise<CapabilityResult>} - The result object for autoplay capability.
   * @param {?boolean} playsinline - content playsinline
   * @static
   * @public
   */
  static getCapability(playsinline: ?boolean): Promise<CapabilityResult> {
    return Html5AutoPlayCapability._playPromiseResult.then(res => {
      // If autoplay is not allowed - try again and return the updated result
      if (!res.autoplay) {
        Html5AutoPlayCapability.runCapability(playsinline);
        return Html5AutoPlayCapability._playPromiseResult;
      }
      return res;
    });
  }

  /**
   * Gets the play promise.
   * @return {Promise<*>} - Play promise which resolved or rejected.
   * @private
   */
  static _getPlayPromise(): Promise<*> {
    return Html5AutoPlayCapability._vid.play() || Html5AutoPlayCapability._forcePromiseReturnValue();
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
      Html5AutoPlayCapability._vid.muted = true;
      Html5AutoPlayCapability._vid.setAttribute('muted', '');
    } else {
      Html5AutoPlayCapability._vid.muted = false;
      Html5AutoPlayCapability._vid.removeAttribute('muted');
    }
  }

  /**
   * Sets the test video element playsinline value.
   * @param {?boolean} playsinline - The playsinline value.
   * @private
   * @returns {void}
   * @static
   */
  static _setPlaysinline(playsinline: ?boolean): void {
    if (playsinline) {
      Html5AutoPlayCapability._vid.setAttribute('playsinline', '');
    } else {
      Html5AutoPlayCapability._vid.removeAttribute('playsinline');
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
      Html5AutoPlayCapability._vid.addEventListener(Html5EventType.ERROR, () => {
        reject();
      });
      const supported = setTimeout(() => {
        Html5AutoPlayCapability._logger.debug(`Timeout ${WAIT_TIME} ms has been reached`);
        reject();
      }, WAIT_TIME);
      if (Html5AutoPlayCapability._vid.paused === true) {
        clearTimeout(supported);
        reject();
      } else {
        clearTimeout(supported);
        resolve();
      }
    });
  }
}
