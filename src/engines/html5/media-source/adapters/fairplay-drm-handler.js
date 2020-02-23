// @flow
import Error from '../../../../error/error';
import getLogger from '../../../../utils/logger';
import * as Utils from '../../../../utils/util';
import {RequestType} from '../../../../request-type';
import type {CodeType} from '../../../../error/code';
import type {SeverityType} from '../../../../error/severity';
import type {CategoryType} from '../../../../error/category';
import {DrmScheme} from '../../../../drm/drm-scheme';

const KeySystem: string = 'com.apple.fps.1_0';
type WebkitEventsType = {[name: string]: string};
const WebkitEvents: WebkitEventsType = {
  NEED_KEY: 'webkitneedkey',
  KEY_MESSAGE: 'webkitkeymessage',
  KEY_ADDED: 'webkitkeyadded',
  KEY_ERROR: 'webkitkeyerror'
};

type FairplayDrmConfigType = {licenseUrl: string, certificate: string, network: {requestFilter?: Function, responseFilter: Function}};

class FairplayDrmHandler {
  static WebkitEvents: WebkitEventsType = WebkitEvents;
  _logger = getLogger('FairPlayDrmHandler');
  _keySession: any;
  _config: FairplayDrmConfigType;
  _onWebkitNeedKeyHandler: Function;
  _errorCallback: Function;
  _drmResponseCallback: Function;
  _videoElement: HTMLVideoElement;
  _retryLicenseRequest: number = 4;
  _licenseRequestTime: number;
  _defaultConfig: FairplayDrmConfigType = {
    licenseUrl: '',
    certificate: '',
    network: {
      responseFilter: (type, response) => {
        let responseObj = {};
        try {
          const dataView = new DataView(response.data);
          const decoder = new TextDecoder();
          const keyText = decoder.decode(dataView).trim();
          responseObj = JSON.parse(keyText);
        } catch (error) {
          this._onError((Error.Code: CodeType).BAD_FAIRPLAY_RESPONSE, {
            error,
            responseText: response.data
          });
          return;
        }
        let isValidResponse = FairplayDrmHandler._validateResponse(responseObj);
        if (isValidResponse.valid) {
          response.data = FairplayDrmHandler._base64DecodeUint8Array(responseObj.ckc);
        } else {
          this._onError((Error.Code: CodeType).BAD_FAIRPLAY_RESPONSE, isValidResponse);
        }
      }
    }
  };

  /**
   * Fairplay DRM handler
   * @param {HTMLVideoElement} videoElement - the video element
   * @param {FairplayDrmConfigType} config - config object
   * @param {Function} errorCallback - error callback function
   * @param {Function} drmResponseCallback - drm license response callback function
   */
  constructor(videoElement: HTMLVideoElement, config: FairplayDrmConfigType, errorCallback: Function, drmResponseCallback: Function): void {
    this._config = Utils.Object.mergeDeep({}, this._defaultConfig, config);
    this._errorCallback = errorCallback;
    this._drmResponseCallback = drmResponseCallback;
    this._videoElement = videoElement;
    this._onWebkitNeedKeyHandler = e => this._onWebkitNeedKey(e);
    this._videoElement.addEventListener(WebkitEvents.NEED_KEY, this._onWebkitNeedKeyHandler, false);
  }

  _onWebkitNeedKey(event: any): void {
    this._logger.debug('Webkit need key triggered');
    let videoElement = event.target;
    let initData = event.initData;

    let contentId = FairplayDrmHandler._extractContentId(initData);
    let fpsCertificate = FairplayDrmHandler._base64DecodeUint8Array(this._config.certificate);

    initData = FairplayDrmHandler._concatInitDataIdAndCertificate(initData, contentId, fpsCertificate);

    if (!videoElement.webkitKeys) {
      let keySystem = this._selectKeySystem();
      this._logger.debug('Sets media keys');
      videoElement.webkitSetMediaKeys(new window.WebKitMediaKeys(keySystem));
    }
    if (!videoElement.webkitKeys) {
      this._onError((Error.Code: CodeType).COULD_NOT_CREATE_MEDIA_KEYS);
    }
    this._logger.debug('Creates session');
    this._keySession = videoElement.webkitKeys.createSession('video/mp4', initData);
    if (!this._keySession) {
      this._onError((Error.Code: CodeType).COULD_NOT_CREATE_KEY_SESSION);
    }
    this._keySession.contentId = contentId;
    this._keySession.addEventListener(WebkitEvents.KEY_MESSAGE, e => this._onWebkitKeyMessage(e), false);
    this._keySession.addEventListener(WebkitEvents.KEY_ADDED, () => this._onWebkitKeyAdded(), false);
    this._keySession.addEventListener(WebkitEvents.KEY_ERROR, e => this._onWebkitKeyError(e), false);
  }

  destroy(): void {
    this._videoElement.removeEventListener(WebkitEvents.NEED_KEY, this._onWebkitNeedKeyHandler);
    this._keySession.close();
    this._keySession = null;
  }

  _onWebkitKeyMessage(event: any): void {
    this._logger.debug('Webkit key message triggered');
    let message = event.message;
    let request = new XMLHttpRequest();
    request.responseType = 'arraybuffer';
    request.addEventListener('load', (e: Event) => this._licenseRequestLoaded(e), false);
    const pkRequest: PKRequestObject = {
      url: this._config.licenseUrl,
      body: FairplayDrmHandler._base64EncodeUint8Array(message),
      headers: {}
    };
    let requestFilterPromise;
    const requestFilter = this._config.network.requestFilter;
    if (requestFilter) {
      this._logger.debug('Apply request filter');
      try {
        requestFilterPromise = requestFilter(RequestType.LICENSE, pkRequest);
      } catch (error) {
        requestFilterPromise = Promise.reject(error);
      }
    }
    requestFilterPromise = requestFilterPromise || Promise.resolve(pkRequest);
    requestFilterPromise
      .then(updatedRequest => {
        request.open('POST', updatedRequest.url, true);
        let setContentType = true;
        if (updatedRequest.headers) {
          Object.entries(updatedRequest.headers).forEach(([header, value]) => {
            typeof value === 'string' && request.setRequestHeader(header, value);
            setContentType && (setContentType = header.toLowerCase() !== 'content-type');
          });
        }
        setContentType && request.setRequestHeader('Content-type', 'application/json');
        this._logger.debug('Ready for license request');
        request.onerror = () => {
          this._onError((Error.Code: CodeType).LICENSE_REQUEST_FAILED, {
            status: request.status,
            responseText: request.responseText
          });
        };
        this._licenseRequestTime = Date.now();
        request.send(updatedRequest.body);
      })
      .catch(error => {
        this._errorCallback(
          new Error(
            (Error.Severity: SeverityType).CRITICAL,
            (Error.Category: CategoryType).NETWORK,
            (Error.Code: CodeType).REQUEST_FILTER_ERROR,
            error
          )
        );
        this.destroy();
      });
  }

  _onWebkitKeyAdded(): void {
    this._logger.debug('Decryption key was added to session');
  }

  _onWebkitKeyError(e: any): void {
    this._logger.error('A decryption key error was encountered', e);
    if (this._retryLicenseRequest <= 0) {
      this._onError((Error.Code: CodeType).LICENSE_REQUEST_FAILED, e.target.error);
    }
    this._retryLicenseRequest--;
  }

  _licenseRequestLoaded(event: any): void {
    this._logger.debug('License request loaded');
    let request = event.target;
    if (request.status > 299) {
      this._onError((Error.Code: CodeType).LICENSE_REQUEST_FAILED, {
        status: request.status,
        error: request.responseText
      });
      return;
    }
    if (this._drmResponseCallback) {
      const licenseTime = Date.now() - this._licenseRequestTime;
      this._drmResponseCallback({licenseTime: licenseTime / 1000, scheme: DrmScheme.FAIRPLAY});
    }

    const response = {data: request.response};
    this._logger.debug('Apply response filter');
    let responseFilterPromise;
    try {
      responseFilterPromise = this._config.network.responseFilter(RequestType.LICENSE, response);
    } catch (error) {
      responseFilterPromise = Promise.reject(error);
    }
    responseFilterPromise = responseFilterPromise || Promise.resolve(response);
    responseFilterPromise
      .then(updatedResponse => {
        this._keySession.update(updatedResponse.data);
      })
      .catch(error => {
        this._errorCallback(
          new Error(
            (Error.Severity: SeverityType).CRITICAL,
            (Error.Category: CategoryType).NETWORK,
            (Error.Code: CodeType).RESPONSE_FILTER_ERROR,
            error
          )
        );
        this.destroy();
      });
  }

  _onError(code: number, data?: Object): void {
    this._errorCallback(new Error((Error.Severity: SeverityType).CRITICAL, (Error.Category: CategoryType).DRM, code, data));
  }

  static _validateResponse(responseObj: Object): Object {
    if ((responseObj.message && responseObj.message.indexOf('error') > 0) || responseObj.reference === null || responseObj.status_code === 500) {
      return {
        //todo: create & edit an error object
        valid: false,
        details: 'internal server error' // would be ERROR.INTERNAL or something like that
      };
    } else if (responseObj.ckc === '') {
      return {
        valid: false,
        details: 'ckc is missing' // would be ERROR.MISSING_CKC or something like that
      };
    } else {
      return {
        valid: true
      };
    }
  }

  _selectKeySystem(): ?string {
    let keySystem = null;
    if (window.WebKitMediaKeys.isTypeSupported(KeySystem, 'video/mp4')) {
      keySystem = KeySystem;
    } else {
      this._logger.warn('Key System not supported');
    }
    return keySystem;
  }

  static _extractContentId(initData: Uint8Array): string {
    let link = document.createElement('a');
    link.href = FairplayDrmHandler._arrayToString(initData);
    return link.hostname;
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
    if (typeof id === 'string') {
      id = FairplayDrmHandler._stringToArray(id);
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
    let keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let output = '';
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
      output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }
    return output;
  }
}

FairplayDrmHandler.WebkitEvents = WebkitEvents;

export {FairplayDrmHandler};
export type {FairplayDrmConfigType};
