import Error from '../../../../error/error';
import getLogger from '../../../../utils/logger';
import * as Utils from '../../../../utils/util';
import {RequestType} from '../../../../enums/request-type';
import {DrmScheme} from '../../../../drm/drm-scheme';
import { EventManager, ListenerType} from '../../../../event/event-manager';
import {PKDrmDataObject, PKRequestObject, PKResponseObject} from '../../../../types';

type WebkitEventsType = {[name: string]: string};

const KeySystem: string = 'com.apple.fps.1_0';
const WebkitEvents: WebkitEventsType = {
  NEED_KEY: 'webkitneedkey',
  KEY_MESSAGE: 'webkitkeymessage',
  KEY_ADDED: 'webkitkeyadded',
  KEY_ERROR: 'webkitkeyerror'
};

type FairPlayDrmConfigType = {licenseUrl: string, certificate?: string, network: {requestFilter?: (...args: any[]) => any, responseFilter: (...args: any[]) => any}};

class FairPlayDrmHandler {
  public static WebkitEvents: WebkitEventsType = WebkitEvents;

  private _logger = getLogger('FairPlayDrmHandler');
  private _eventManager: EventManager;
  private _keySession: any;
  private _config: FairPlayDrmConfigType;
  private _onWebkitNeedKeyHandler: ListenerType;
  private _errorCallback: (...args: any[]) => any;
  private _drmResponseCallback: (...args: any[]) => any;
  private _videoElement: HTMLVideoElement;
  private _retryLicenseRequest: number = 4;
  private _licenseRequestTime: number | undefined;
  private _defaultConfig: FairPlayDrmConfigType = {
    licenseUrl: '',
    certificate: '',
    network: {
      responseFilter: (type, response) => {
        let responseObj: any = {};
        try {
          const dataView = new DataView(response.data);
          const decoder = new TextDecoder();
          const keyText = decoder.decode(dataView).trim();
          responseObj = JSON.parse(keyText);
        } catch (error) {
          this._onError(Error.Code.BAD_FAIRPLAY_RESPONSE, {
            error,
            responseText: response.data
          });
          return;
        }
        const isValidResponse = FairPlayDrmHandler._validateResponse(responseObj);
        if (isValidResponse.valid) {
          response.data = FairPlayDrmHandler._base64DecodeUint8Array(responseObj.ckc);
        } else {
          this._onError(Error.Code.BAD_FAIRPLAY_RESPONSE, isValidResponse);
        }
      }
    }
  };

  /**
   * Fairplay DRM handler
   * @param {HTMLVideoElement} videoElement - the video element
   * @param {FairPlayDrmConfigType} config - config object
   * @param {Function} errorCallback - error callback function
   * @param {Function} drmResponseCallback - drm license response callback function
   */
  constructor(videoElement: HTMLVideoElement, config: FairPlayDrmConfigType, errorCallback: (...args: any[]) => any, drmResponseCallback: (...args: any[]) => any) {
    this._config = Utils.Object.mergeDeep({}, this._defaultConfig, config);
    this._errorCallback = errorCallback;
    this._drmResponseCallback = drmResponseCallback;
    this._videoElement = videoElement;
    this._onWebkitNeedKeyHandler = (e: Event): void => this._onWebkitNeedKey(e);
    this._eventManager = new EventManager();
    this._eventManager.listen(this._videoElement, WebkitEvents.NEED_KEY, this._onWebkitNeedKeyHandler);
  }

  private _onWebkitNeedKey(event: any): void {
    this._logger.debug('Webkit need key triggered');
    const videoElement = event.target;
    let initData = event.initData;

    const contentId = FairPlayDrmHandler._extractContentId(initData);
    const fpsCertificate = FairPlayDrmHandler._base64DecodeUint8Array(this._config.certificate);

    initData = FairPlayDrmHandler._concatInitDataIdAndCertificate(initData, contentId, fpsCertificate);

    if (!videoElement.webkitKeys) {
      const keySystem = this._selectKeySystem();
      this._logger.debug('Sets media keys');
      videoElement.webkitSetMediaKeys(new WebKitMediaKeys(keySystem!));
    }
    if (!videoElement.webkitKeys) {
      this._onError(Error.Code.COULD_NOT_CREATE_MEDIA_KEYS);
    }
    this._logger.debug('Creates session');
    this._keySession = videoElement.webkitKeys.createSession('video/mp4', initData);
    if (!this._keySession) {
      this._onError(Error.Code.COULD_NOT_CREATE_KEY_SESSION);
    }
    this._keySession.contentId = contentId;
    this._eventManager.listen(this._keySession, WebkitEvents.KEY_MESSAGE, (e: Event) => this._onWebkitKeyMessage(e));
    this._eventManager.listen(this._keySession, WebkitEvents.KEY_ADDED, () => this._onWebkitKeyAdded());
    this._eventManager.listen(this._keySession, WebkitEvents.KEY_ERROR, (e: Event) => this._onWebkitKeyError(e));
  }

  public getDrmInfo(): PKDrmDataObject {
    const {certificate, licenseUrl} = this._config;
    return {certificate, licenseUrl, scheme: DrmScheme.FAIRPLAY};
  }

  public destroy(): void {
    this._eventManager.destroy();
    this._keySession.close();
    this._keySession = null;
  }

  private _onWebkitKeyMessage(event: any): void {
    this._logger.debug('Webkit key message triggered');
    const message = event.message;
    const request = new XMLHttpRequest();
    request.responseType = 'arraybuffer';
    this._eventManager.listenOnce(request, 'load', (e: Event) => this._licenseRequestLoaded(e));
    const pkRequest: PKRequestObject = {
      url: this._config.licenseUrl,
      body: FairPlayDrmHandler._base64EncodeUint8Array(message),
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
        if (typeof updatedRequest.withCredentials === 'boolean') {
          request.withCredentials = updatedRequest.withCredentials;
        }
        setContentType && request.setRequestHeader('Content-type', 'application/json');
        this._logger.debug('Ready for license request');
        request.onerror = (): void => {
          this._onError(Error.Code.LICENSE_REQUEST_FAILED, {
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
            Error.Severity.CRITICAL,
            Error.Category.NETWORK,
            Error.Code.REQUEST_FILTER_ERROR,
            error
          )
        );
        this.destroy();
      });
  }

  private _onWebkitKeyAdded(): void {
    this._logger.debug('Decryption key was added to session');
  }

  private _onWebkitKeyError(e: any): void {
    this._logger.error('A decryption key error was encountered', e);
    if (this._retryLicenseRequest <= 0) {
      this._onError(Error.Code.LICENSE_REQUEST_FAILED, e.target.error);
    }
    this._retryLicenseRequest--;
  }

  private _licenseRequestLoaded(event: any): void {
    this._logger.debug('License request loaded');
    const request = event.target;
    if (request.status > 299) {
      this._onError(Error.Code.LICENSE_REQUEST_FAILED, {
        status: request.status,
        error: request.responseText
      });
      return;
    }
    if (this._drmResponseCallback) {
      const licenseTime = Date.now() - this._licenseRequestTime!;
      this._drmResponseCallback({licenseTime: licenseTime / 1000, scheme: DrmScheme.FAIRPLAY});
    }
    const {responseURL: url, response: data} = request;
    const originalUrl = this._config.licenseUrl;
    const headers = Utils.Http.convertHeadersToDictionary(request.getAllResponseHeaders());

    const pkResponse: PKResponseObject = {url, originalUrl, data, headers};
    this._logger.debug('Apply response filter');
    let responseFilterPromise;
    try {
      responseFilterPromise = this._config.network.responseFilter(RequestType.LICENSE, pkResponse);
    } catch (error) {
      responseFilterPromise = Promise.reject(error);
    }
    responseFilterPromise = responseFilterPromise || Promise.resolve(pkResponse);
    responseFilterPromise
      .then(updatedResponse => {
        this._keySession.update(updatedResponse.data);
      })
      .catch(error => {
        this._errorCallback(
          new Error(
            Error.Severity.CRITICAL,
            Error.Category.NETWORK,
            Error.Code.RESPONSE_FILTER_ERROR,
            error
          )
        );
        this.destroy();
      });
  }

  private _onError(code: number, data?: any): void {
    this._errorCallback(new Error(Error.Severity.CRITICAL, Error.Category.DRM, code, data));
  }

  public static _validateResponse(responseObj: any): any {
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

  private _selectKeySystem(): string | null {
    let keySystem: string | null = null;
    if (WebKitMediaKeys.isTypeSupported(KeySystem, 'video/mp4')) {
      keySystem = KeySystem;
    } else {
      this._logger.warn('Key System not supported');
    }
    return keySystem;
  }

  public static _extractContentId(initData: Uint8Array): string {
    const link = document.createElement('a');
    link.href = FairPlayDrmHandler._arrayToString(initData);
    return link.hostname;
  }

  public static _arrayToString(array: Uint8Array): string {
    return String.fromCharCode.apply(null, new Uint16Array(array.buffer));
  }

  public static _base64DecodeUint8Array(input?: string): Uint8Array {
    const raw = window.atob(input!);
    const rawLength = raw.length;
    const array = new Uint8Array(new ArrayBuffer(rawLength));
    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }

  public static _concatInitDataIdAndCertificate(initData: Uint8Array, id: string | Uint16Array, cert: Uint8Array): Uint8Array {
    if (typeof id === 'string') {
      id = FairPlayDrmHandler._stringToArray(id);
    }
    let offset = 0;
    const buffer = new ArrayBuffer(initData.byteLength + 4 + id.byteLength + 4 + cert.byteLength);
    const dataView = new DataView(buffer);

    const initDataArray = new Uint8Array(buffer, offset, initData.byteLength);
    initDataArray.set(initData);
    offset += initData.byteLength;

    dataView.setUint32(offset, id.byteLength, true);
    offset += 4;

    const idArray = new Uint8Array(buffer, offset, id.byteLength);
    idArray.set(id);
    offset += idArray.byteLength;

    dataView.setUint32(offset, cert.byteLength, true);
    offset += 4;

    const certArray = new Uint8Array(buffer, offset, cert.byteLength);
    certArray.set(cert);

    return new Uint8Array(buffer, 0, buffer.byteLength);
  }

  public static _stringToArray(string: string): Uint16Array {
    const buffer = new ArrayBuffer(string.length * 2);
    const array = new Uint16Array(buffer);
    for (let i = 0, strLen = string.length; i < strLen; i++) {
      array[i] = string.charCodeAt(i);
    }
    return array;
  }

  public static _base64EncodeUint8Array(input: Uint8Array): string {
    const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
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

FairPlayDrmHandler.WebkitEvents = WebkitEvents;

export {FairPlayDrmHandler};
export type {FairPlayDrmConfigType};
