// @flow
import BaseDrmProtocol from './base-drm-protocol'

export default class FairPlay extends BaseDrmProtocol {
  static _logger = BaseDrmProtocol.getLogger('FairPlay');
  static _keySession: any;
  static _KeySystem: string = "com.apple.fps.1_0";
  static _WebkitEvents = {
    NEED_KEY: 'webkitneedkey',
    KEY_MESSAGE: 'webkitkeymessage',
    KEY_ADDED: 'webkitkeyadded',
    KEY_ERROR: 'webkitkeyerror'
  };

  /**
   * FairPlay playback supports in case 2 conditions are met:
   * 1. The environment supports FairPlay playback.
   * 2. The drm data of the source object contains entry with FairPlay scheme.
   * @param {Array<Object>} drmData - The drm data to check.
   * @return {boolean} - Whether FairPlay can be play on the current environment.
   */
  static canPlayDrm(drmData: Array<Object>): boolean {
    FairPlay._logger.debug("Can play DRM scheme of: " + BaseDrmProtocol.DrmScheme.FAIRPLAY);
    return BaseDrmProtocol.DrmSupport.isProtocolSupported(BaseDrmProtocol.DrmScheme.FAIRPLAY, drmData);
  }

  /**
   * Sets the FairPlay playback.
   * @param {HTMLVideoElement} videoElement - The video element to manipulate.
   * @param {Array<Object>} drmData - The drm data.
   * @returns {void}
   */
  static setDrmPlayback(videoElement: HTMLVideoElement, drmData: Array<Object> = []): void {
    FairPlay._logger.debug("Sets DRM playback");
    videoElement.addEventListener(FairPlay._WebkitEvents.NEED_KEY, FairPlay._onWebkitNeedKey.bind(null, drmData), false);
  }

  static _onWebkitNeedKey(drmData: Array<Object>, event: any): void {
    FairPlay._logger.debug("Webkit need key triggered");
    let fpDrmData = drmData.find((drmEntry) => drmEntry.scheme === BaseDrmProtocol.DrmScheme.FAIRPLAY);
    if (!fpDrmData || FairPlay._keySession) {
      return;
    }

    let fpCertificate = fpDrmData.certificate;
    let videoElement = event.target;
    let initData = event.initData;
    let contentId = FairPlay._extractContentId(initData);
    let aCertificate = FairPlay._base64DecodeUint8Array(fpCertificate);

    initData = FairPlay._concatInitDataIdAndCertificate(initData, contentId, aCertificate);

    if (!videoElement.webkitKeys) {
      let keySystem = FairPlay._selectKeySystem();
      FairPlay._logger.debug("Sets media keys");
      videoElement.webkitSetMediaKeys(new window.WebKitMediaKeys(keySystem));
    }
    if (!videoElement.webkitKeys) {
      throw new Error("Could not create MediaKeys");
    }
    FairPlay._logger.debug("Creates session");
    FairPlay._keySession = videoElement.webkitKeys.createSession('video/mp4', initData);
    if (!FairPlay._keySession) {
      throw new Error("Could not create key session");
    }
    FairPlay._keySession.contentId = contentId;
    FairPlay._keySession.addEventListener(FairPlay._WebkitEvents.KEY_MESSAGE, FairPlay._onWebkitKeyMessage.bind(null, fpDrmData), false);
    FairPlay._keySession.addEventListener(FairPlay._WebkitEvents.KEY_ADDED, FairPlay._onWebkitKeyAdded, false);
    FairPlay._keySession.addEventListener(FairPlay._WebkitEvents.KEY_ERROR, FairPlay._onWebkitKeyError, false);
  }

  static destroy(): void {
    FairPlay._keySession = null;
  }

  static _onWebkitKeyMessage(drmData: Object, event: any): void {
    FairPlay._logger.debug("Webkit key message triggered");
    let message = event.message;
    let request = new XMLHttpRequest();
    request.responseType = "text";
    request.addEventListener("load", FairPlay._licenseRequestLoaded, false);
    request.addEventListener("error", FairPlay._licenseRequestFailed, false);
    let params = FairPlay._base64EncodeUint8Array(message);
    request.open('POST', drmData.licenseUrl, true);
    request.setRequestHeader("Content-type", "application/json");
    FairPlay._logger.debug("Ready for license request");
    request.send(params);
  }

  static _onWebkitKeyAdded(): void {
    FairPlay._logger.debug("Decryption key was added to session");
  }

  static _onWebkitKeyError(): void {
    FairPlay._logger.error("A decryption key error was encountered");
  }

  static _licenseRequestLoaded(event: any): void {
    FairPlay._logger.debug("License request loaded");
    let request = event.target;
    let keyText = request.responseText.trim();
    let responseObj = {};
    try {
      responseObj = JSON.parse(keyText);
    } catch (error) {
      this._licenseRequestFailed();
    }
    let isValidResponse = this._validateResponse(responseObj);
    if (isValidResponse.valid) {
      let key = FairPlay._base64DecodeUint8Array(responseObj.ckc);
      FairPlay._keySession.update(key);
    } else {
      this._licenseRequestFailed(isValidResponse);
    }
  }

  static _validateResponse(responseObj: Object): Object {
    if ((responseObj.message && responseObj.message.indexOf("error") > 0)
      || responseObj.reference === null
      || responseObj.status_code === 500) {
      return { //todo: create & edit an error object
        valid: false,
        details: "internal server error" // would be ERROR.INTERNAL or something like that
      };
    } else if (responseObj.ckc === "") {
      return {
        valid: false,
        details: "ckc is missing" // would be ERROR.MISSING_CKC or something like that
      };
    } else {
      return {
        valid: true
      };
    }
  }

  static _licenseRequestFailed(): void {
    throw new Error("License request failed");
  }

  static _extractContentId(initData: Uint8Array): string {
    let link = document.createElement('a');
    link.href = FairPlay._arrayToString(initData);
    return link.hostname;
  }

  static _selectKeySystem(): ?string {
    let keySystem = null;
    if (window.WebKitMediaKeys.isTypeSupported(FairPlay._KeySystem, "video/mp4")) {
      keySystem = FairPlay._KeySystem;
    } else {
      FairPlay._logger.warn("Key System not supported");
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
      id = FairPlay._stringToArray(id);
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
