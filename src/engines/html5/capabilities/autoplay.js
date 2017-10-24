// @flow
import * as Utils from '../../../utils/util'
import * as EncodingSources from '../../../assets/encoding-sources.json'

export default class Html5AutoPlayCapability implements ICapability {
  static _promise: Promise<*>;
  static _vid: HTMLVideoElement = Utils.Dom.createElement('video');

  static runCapability(): void {
    try {
      Html5AutoPlayCapability._vid.src = EncodingSources.Base64Mp4Source;
      Html5AutoPlayCapability._promise = Html5AutoPlayCapability._vid.play() || Promise.resolve();
    } catch (e) {
      Html5AutoPlayCapability._promise = Promise.reject();
    }
  }

  static getCapability(): Promise<CapabilityResult> {
    return Html5AutoPlayCapability._promise
      .then(() => ({autoplay: true}))
      .catch(() => ({autoplay: false}));
  }
}
