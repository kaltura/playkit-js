// @flow
import * as Utils from '../../../utils/util'
import * as EncodingSources from '../../../assets/encoding-sources.json'
import {HTML5_EVENTS as Html5Events} from '../../../event/events'

/**
 * The time (miliseconds) we wait that the playing event will be fired
 * @const
 */
const playTimeoutBuffer = 1500;

export default class Html5MutedAutoPlayCapability implements ICapability {
  static _vid: HTMLVideoElement = Utils.Dom.createElement('video');
  static _promise: Promise<*>;

  /***
   * Runs the test for muted autoplay capability.
   * @public
   * @static
   * @returns {void}
   */
  static runCapability(): void {
    try {
      Html5MutedAutoPlayCapability._vid.src = EncodingSources.Base64Mp4Source;
      Html5MutedAutoPlayCapability._vid.muted = true;
      Html5MutedAutoPlayCapability._promise = Html5MutedAutoPlayCapability._vid.play() || Html5MutedAutoPlayCapability._oldBrowsersCapability();
    } catch (e) {
      Html5MutedAutoPlayCapability._promise = Promise.reject();
    }
  }

  /***
   * Runs the test for muted autoplay capability in older browsers, where play() does not return a promise
   * @static
   * @returns {Promise<*>} - return a resolve/reject upon the success of playing
   */
  static _oldBrowsersCapability(): Promise<*> {
    return new Promise((resolve, reject) => {
      let supported = setTimeout(() => {
        reject();
      }, playTimeoutBuffer);
      Html5MutedAutoPlayCapability._vid.addEventListener(Html5Events.PLAYING, () => {
        clearTimeout(supported);
        resolve();
      });
      Html5MutedAutoPlayCapability._vid.addEventListener(Html5Events.ERROR, () => {
        clearTimeout(supported);
        reject();
      });
    })
  }

  /**
   * Gets the test result for autoplay capability.
   * @returns {Promise<CapabilityResult>} - The result object for autoplay capability.
   * @static
   * @public
   */
  static getCapability(): Promise<CapabilityResult> {
    return Html5MutedAutoPlayCapability._promise
      .then(() => ({mutedAutoplay: true}))
      .catch(() => ({mutedAutoplay: false}));
  }
}
