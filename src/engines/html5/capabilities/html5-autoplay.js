// @flow
import * as Utils from '../../../utils/util'
import * as EncodingSources from '../../../assets/encoding-sources.json'
import {HTML5_EVENTS as Html5Events} from '../../../event/events'

/**
 * The time (miliseconds) we wait that the playing event will be fired before determining autoplay is not supported
 * @const
 */
const PLAY_TIMEOUT_BUFFER: number = 1500;

export default class Html5AutoPlayCapabilities implements ICapability {
  static _vid: HTMLVideoElement = Utils.Dom.createElement('video');
  static _mutedVid: HTMLVideoElement = Utils.Dom.createElement('video');
  static _autoPlayPromise: Promise<*>;
  static _mutedAutoPlayPromise: Promise<*>;

  /***
   * Runs tests for autoplay & mutedAutoplay capability.
   * @public
   * @static
   * @returns {void}
   */
  static runCapability(): void {
    Html5AutoPlayCapabilities._runAutoplayCapabilty();
    Html5AutoPlayCapabilities._runMutedAutoplayCapability();
  }

  /***
   * Runs test for autoplay capability.
   * @static
   * @returns {void}
   */
  static _runAutoplayCapabilty(): void {
    try {
      Html5AutoPlayCapabilities._vid.src = EncodingSources.Base64Mp4Source;
      Html5AutoPlayCapabilities._autoPlayPromise = Html5AutoPlayCapabilities._vid.play() || Html5AutoPlayCapabilities._oldBrowsersCapability(Html5AutoPlayCapabilities._vid);
    } catch (e) {
      Html5AutoPlayCapabilities._autoPlayPromise = Promise.reject();
    }
  }

  /***
   * Runs test for muted autoplay capability.
   * @static
   * @returns {void}
   */
  static _runMutedAutoplayCapability(): void {
    try {
      Html5AutoPlayCapabilities._mutedVid.src = EncodingSources.Base64Mp4Source;
      Html5AutoPlayCapabilities._mutedVid.muted = true;
      Html5AutoPlayCapabilities._mutedAutoPlayPromise = Html5AutoPlayCapabilities._mutedVid.play() || Html5AutoPlayCapabilities._oldBrowsersCapability(Html5AutoPlayCapabilities._mutedVid);
    } catch (e) {
      Html5AutoPlayCapabilities._mutedAutoPlayPromise = Promise.reject();
    }
  }

  /***
   * Runs the test for autoplay capability in older browsers, where play() does not return a promise
   * @static
   * @param {HTMLVideoElement} element - video element to test
   * @returns {Promise<*>} - return a resolve/reject upon the success of playing
   */
  static _oldBrowsersCapability(element: HTMLVideoElement): Promise<*> {
    return new Promise((resolve, reject) => {
      let supported = setTimeout(() => {
        reject();
      }, PLAY_TIMEOUT_BUFFER);
      element.addEventListener(Html5Events.PLAYING, () => {
        clearTimeout(supported);
        resolve();
      });
      element.addEventListener(Html5Events.ERROR, () => {
        clearTimeout(supported);
        reject();
      });
    })
  }

  /***
   * act as a proxy to the promises. Promise.all is rejected if one of the promises is rejected, and the other promises
   * data is lost, so here, we always resolve the promise, with status false.
   * @param {Promise<*>} promise - one of the capabilities result.
   * @returns {Promise<*>} - promise after manipulation.
   * @static
   * @public
   */
  static _reflectPromiseResult(promise: Promise<*>): Promise<*> {
    return promise
      .then(data => ({data: data, status: true}))
      .catch(error => ({error: error, status: false}))
  }

  /**
   * Gets test result for autoplay & muted autoplay capabilities.
   * @returns {Promise<CapabilityResult>} - The result object for autoplay capability.
   * @static
   * @public
   */
  static getCapability(): Promise<CapabilityResult> {
    return Html5AutoPlayCapabilities._reflectPromiseResult(Html5AutoPlayCapabilities._autoPlayPromise).then(value => {
      if (value.status) {
        return Promise.resolve ({
          autoplay: true
        })
      } else {
        return Html5AutoPlayCapabilities._reflectPromiseResult(Html5AutoPlayCapabilities._mutedAutoPlayPromise);
      }
    }).then(value => {
      if (value.autoplay === true){
        return {
          autoplay: true,
          mutedAutoplay: true
        }
      } else {
        return {
          autoplay: false,
          mutedAutoplay: value.status
        }
      }
    })
  }
}
