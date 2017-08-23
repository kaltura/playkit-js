// @flow
import Env from '../../../../utils/env'
import LoggerFactory from '../../../../utils/logger'

const DEVICE: ?string = Env.device.type;
const OS: string = Env.os.name;
const BROWSER: string = Env.browser.name;

export default class FairPlayDrm {
  static WebkitEvents = {
    NEED_KEY: 'webkitneedkey',
    KEY_MESSAGE: 'webkitkeymessage',
    KEY_ADDED: 'webkitkeyadded',
    KEY_ERROR: 'webkitkeyerror'
  };

  static DrmSchemes: Object = {
    FAIRPLAY: 'com.apple.fairplay'
  };

  static DrmSupport: Object = {
    Safari: () => {
      if (!DEVICE && OS === 'Mac OS') {
        return FairPlayDrm.DrmSchemes.FAIRPLAY;
      }
    }
  };

  static _logger = LoggerFactory.getLogger('FairPlayDrm');
  static _keySession: any;

  static canPlayDrm(drmData: Array<Object>): boolean {
    if (typeof FairPlayDrm.DrmSupport[BROWSER] === 'function') {
      let drmScheme = FairPlayDrm.DrmSupport[BROWSER]();
      let fpEntry = (drmData.find((drmEntry) => drmEntry.scheme === drmScheme));
      let canPlayDrm = !!fpEntry;
      if (canPlayDrm) {
        FairPlayDrm._logger.debug(`Can play ${FairPlayDrm.DrmSchemes.FAIRPLAY} drm since running env is ${BROWSER}/${OS}`, fpEntry);
      } else {
        FairPlayDrm._logger.debug(`Cannot play ${FairPlayDrm.DrmSchemes.FAIRPLAY} drm since running env is ${BROWSER}/${OS}`);
      }
      return canPlayDrm;
    }
    return false;
  }

  static onWebkitNeedKey(drmData: Array<Object>, event: any): void {
    FairPlayDrm._logger.debug("Webkit need key triggered");
    let fpDrmData = drmData.find((drmEntry) => drmEntry.scheme === FairPlayDrm.DrmSchemes.FAIRPLAY);
    if (!fpDrmData || FairPlayDrm._keySession) {
      return;
    }

    let fpCertificate = fpDrmData.certificate;
    let videoElement = event.target;
    let initData = event.initData;
    let contentId = FairPlayDrm._extractContentId(initData);
    let aCertificate = FairPlayDrm._base64DecodeUint8Array(fpCertificate);

    initData = FairPlayDrm._concatInitDataIdAndCertificate(initData, contentId, aCertificate);

    if (!videoElement.webkitKeys) {
      let keySystem = FairPlayDrm._selectKeySystem();
      FairPlayDrm._logger.debug("Sets media keys");
      videoElement.webkitSetMediaKeys(new window.WebKitMediaKeys(keySystem));
    }
    if (!videoElement.webkitKeys) {
      throw new Error("Could not create MediaKeys");
    }
    FairPlayDrm._logger.debug("Creates session");
    FairPlayDrm._keySession = videoElement.webkitKeys.createSession('video/mp4', initData);
    if (!FairPlayDrm._keySession) {
      throw new Error("Could not create key session");
    }
    FairPlayDrm._keySession.contentId = contentId;
    FairPlayDrm._keySession.addEventListener(FairPlayDrm.WebkitEvents.KEY_MESSAGE, FairPlayDrm.onWebkitKeyMessage.bind(null, fpDrmData), false);
    FairPlayDrm._keySession.addEventListener(FairPlayDrm.WebkitEvents.KEY_ADDED, FairPlayDrm.onWebkitKeyAdded, false);
    FairPlayDrm._keySession.addEventListener(FairPlayDrm.WebkitEvents.KEY_ERROR, FairPlayDrm.onWebkitKeyError, false);
  }

  static onWebkitKeyMessage(drmData: Object, event: any): void {
    FairPlayDrm._logger.debug("Webkit key message triggered");
    let message = event.message;
    let request = new XMLHttpRequest();
    request.responseType = "text";
    request.addEventListener("load", FairPlayDrm._licenseRequestLoaded, false);
    request.addEventListener("error", FairPlayDrm._licenseRequestFailed, false);
    let params = FairPlayDrm._base64EncodeUint8Array(message);
    request.open('POST', drmData.licenseUrl, true);
    request.setRequestHeader("Content-type", "application/json");
    FairPlayDrm._logger.debug("Ready for license request");
    request.send(params);
  }

  static onWebkitKeyAdded(): void {
    FairPlayDrm._logger.debug("Decryption key was added to session");
  }

  static onWebkitKeyError(): void {
    FairPlayDrm._logger.error("A decryption key error was encountered");
  }

  static destroy(): void {
    FairPlayDrm._keySession = null;
  }

  static _licenseRequestLoaded(event: any): void {
    FairPlayDrm._logger.debug("License request loaded");
    let request = event.target;
    let keyText = request.responseText.trim();
    let responseObj = JSON.parse(keyText);
    let key = FairPlayDrm._base64DecodeUint8Array(responseObj.ckc);
    FairPlayDrm._keySession.update(key);
  }

  static _licenseRequestFailed(): void {
    throw new Error("License request failed");
  }

  static _extractContentId(initData: Uint8Array): string {
    let link = document.createElement('a');
    link.href = FairPlayDrm._arrayToString(initData);
    return link.hostname;
  }

  static _selectKeySystem(): ?string {
    let keySystem = null;
    if (window.WebKitMediaKeys.isTypeSupported("com.apple.fps.1_0", "video/mp4")) {
      keySystem = "com.apple.fps.1_0";
    } else {
      FairPlayDrm._logger.warn("Key System not supported");
    }
    return keySystem;
  }

  static _arrayToString(array: Uint8Array): string {
    return String.fromCharCode.apply(null, new Uint16Array(array.buffer));
  }

  static _base64DecodeUint8Array(input: string): Uint8Array {
    let raw = window.atob(input);
    let rawLength = raw.length;
    let array = new Uint8Array(new ArrayBuffer(rawLength));
    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }

  static _concatInitDataIdAndCertificate(initData: Uint8Array, id: string | Uint16Array, cert: Uint8Array): Uint8Array {
    if (typeof id === "string") {
      id = FairPlayDrm._stringToArray(id);
    }
    let offset = 0;
    let buffer = new ArrayBuffer(initData.byteLength + 4 + id.byteLength + 4 + cert.byteLength);
    let dataView = new DataView(buffer);

    let initDataArray = new Uint8Array(buffer, offset, initData.byteLength);
    initDataArray.set(initData);
    offset += initData.byteLength;

    dataView.setUint32(offset, id.byteLength, true);
    offset += 4;

    let idArray = new Uint8Array(buffer, offset, id.byteLength);
    idArray.set(id);
    offset += idArray.byteLength;

    dataView.setUint32(offset, cert.byteLength, true);
    offset += 4;

    let certArray = new Uint8Array(buffer, offset, cert.byteLength);
    certArray.set(cert);

    return new Uint8Array(buffer, 0, buffer.byteLength);
  }

  static _stringToArray(string: string): Uint16Array {
    let buffer = new ArrayBuffer(string.length * 2);
    let array = new Uint16Array(buffer);
    for (let i = 0, strLen = string.length; i < strLen; i++) {
      array[i] = string.charCodeAt(i);
    }
    return array;
  }

  static _base64EncodeUint8Array(input: Uint8Array): string {
    let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let output = "";
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;
    while (i < input.length) {
      chr1 = input[i++];
      chr2 = i < input.length ? input[i++] : Number.NaN;
      chr3 = i < input.length ? input[i++] : Number.NaN;

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
        keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }
    return output;
  }
}
