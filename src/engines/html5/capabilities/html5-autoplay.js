// @flow
import * as Utils from '../../../utils/util';
import {Html5EventType} from '../../../event/event-type';
import getLogger from '../../../utils/logger';
import * as blobSource from '../../../assets/blob-source.json';

const WAIT_TIME: number = 500;

/**
 * @type {Blob}
 */
const VIDEO = new Blob([new Uint8Array(blobSource.uInt8Array)], {type: 'video/mp4'});

const testVideoElement: HTMLVideoElement = Utils.Dom.createElement('video');
testVideoElement.src = URL.createObjectURL(VIDEO);
// For iOS devices needs to turn the playsinline attribute on
testVideoElement.setAttribute('playsinline', '');

export default class Html5AutoPlayCapability implements ICapability {
  /**
   * The html5 class logger.
   * @type {any}
   * @static
   * @private
   */
  static _logger: any = getLogger('Html5AutoPlayCapability');

  static _playPromiseResult: Promise<*>;

  /**
   * Runs the test for autoplay capability.
   * @public
   * @static
   * @returns {void}
   */
  static runCapability(): void {
    Html5AutoPlayCapability._playPromiseResult = new Promise(resolve => {
      Html5AutoPlayCapability._getPlayPromise(false).then(result => {
        if (result) {
          return resolve({autoplay: true, mutedAutoPlay: true});
        } else {
          Html5AutoPlayCapability._getPlayPromise(true).then(mutedResult => {
            if (mutedResult) {
              return resolve({autoplay: false, mutedAutoPlay: true});
            } else {
              return resolve({autoplay: false, mutedAutoPlay: false});
            }
          });
        }
      });
    });
  }

  /**
   * Gets the test result for autoplay capability.
   * @returns {Promise<CapabilityResult>} - The result object for autoplay capability.
   * @static
   * @public
   */
  static getCapability(): Promise<CapabilityResult> {
    return Html5AutoPlayCapability._playPromiseResult.then(res => {
      // If autoplay is not allowed - try again and return the updated result
      if (!res.autoplay) {
        Html5AutoPlayCapability.runCapability();
        return Html5AutoPlayCapability._playPromiseResult;
      }
      return res;
    });
  }

  /**
   * Gets the play promise.
   * @param {boolean} muted - if the element should be muted or not.
   * @return {Promise<*>} - Play promise which resolved or rejected.
   * @private
   */
  static _getPlayPromise(muted: boolean): Promise<*> {
    return new Promise(resolve => {
      const sendOutput = result => {
        clearTimeout(timeoutId);
        resolve(result);
      };
      Html5AutoPlayCapability._setMuted(muted);
      testVideoElement.addEventListener(Html5EventType.error, error => {
        Html5AutoPlayCapability._logger.debug(`Play promise caused an error when trying to play the blob`, error);
        return resolve(false);
      });
      const playResult = testVideoElement.play();
      const timeoutId = setTimeout(() => {
        Html5AutoPlayCapability._logger.debug(`Timeout ${WAIT_TIME} ms has been reached`);
        sendOutput(false);
      }, WAIT_TIME);
      if (playResult) {
        playResult.then(() => sendOutput(true)).catch(() => sendOutput(false));
      } else {
        Html5AutoPlayCapability._logger.debug(`Play Promise returned undefined`);
        if (testVideoElement.paused === true) {
          sendOutput(false);
        } else {
          sendOutput(true);
        }
      }
    });
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
}
