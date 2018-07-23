//@flow
/* eslint-disable no-unused-vars */
import FakeEvent from '../../../event/fake-event';
import FakeEventTarget from '../../../event/fake-event-target';
import Error from '../../../error/error';
import {CustomEventType, Html5EventType} from '../../../event/event-type';
import getLogger from '../../../utils/logger';
import Track from '../../../track/track';
import VideoTrack from '../../../track/video-track';
import AudioTrack from '../../../track/audio-track';
import TextTrack from '../../../track/text-track';

export default class BaseMediaSourceAdapter extends FakeEventTarget implements IMediaSourceAdapter {
  /**
   * Passing the getLogger function to the actual media source adapter.
   * @type {Function}
   * @static
   */
  static getLogger: Function = getLogger;

  /**
   * The adapter config.
   * @member {Object} _config
   * @private
   */
  _config: Object;

  /**
   * The source object.
   * @member {PKMediaSourceObject} _sourceObj
   * @private
   */
  _sourceObj: ?PKMediaSourceObject;

  /**
   * The dom video element.
   * @member {HTMLVideoElement} _videoElement
   * @private
   */
  _videoElement: HTMLVideoElement;

  /**
   * Checks if the media source adapter is supported.
   * @function isSupported
   * @returns {boolean} - Whether the media source adapter is supported.
   * @static
   */
  static isSupported(): boolean {
    return true;
  }

  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to media source adapter.
   * @param {PKMediaSourceObject} source - The source object.
   * @param {Object} config - The media source adapter configuration.
   */
  constructor(videoElement: HTMLVideoElement, source: PKMediaSourceObject, config: Object = {}) {
    super();
    this._videoElement = videoElement;
    this._sourceObj = source;
    this._config = config;
    this._handleLiveTimeUpdate();
  }

  /**
   * Destroys the media source adapter.
   * @function destroy
   * @returns {void}
   */
  destroy(): Promise<*> {
    this._sourceObj = null;
    this._config = {};
    return Promise.resolve();
  }

  /**
   * Triggers the appropriate track changed event.
   * @param {Track} track - The selected track.
   * @private
   * @returns {void}
   */
  _onTrackChanged(track: Track): void {
    if (track instanceof VideoTrack) {
      this._trigger(CustomEventType.VIDEO_TRACK_CHANGED, {selectedVideoTrack: track});
    } else if (track instanceof AudioTrack) {
      this._trigger(CustomEventType.AUDIO_TRACK_CHANGED, {selectedAudioTrack: track});
    } else if (track instanceof TextTrack) {
      this._trigger(CustomEventType.TEXT_TRACK_CHANGED, {selectedTextTrack: track});
    }
  }

  /**
   * Dispatch an adapter event forward.
   * @param {string} name - The name of the event.
   * @param {?Object} payload - The event payload.
   * @returns {void}
   */
  _trigger(name: string, payload?: Object): void {
    this.dispatchEvent(new FakeEvent(name, payload));
  }

  /** Must implemented methods by the derived media source adapter **/

  static canPlayType(mimeType: string, preferNative: boolean): boolean {
    return BaseMediaSourceAdapter._throwNotImplementedError('static canPlayType');
  }

  load(): Promise<Object> {
    return BaseMediaSourceAdapter._throwNotImplementedError('load');
  }

  selectVideoTrack(videoTrack: VideoTrack): void {
    return BaseMediaSourceAdapter._throwNotImplementedError('selectVideoTrack');
  }

  selectAudioTrack(audioTrack: AudioTrack): void {
    BaseMediaSourceAdapter._throwNotImplementedError('selectAudioTrack');
  }

  selectTextTrack(textTrack: TextTrack): void {
    BaseMediaSourceAdapter._throwNotImplementedError('selectTextTrack');
  }

  hideTextTrack(): void {
    BaseMediaSourceAdapter._throwNotImplementedError('hideTextTrack');
  }

  enableAdaptiveBitrate(): void {
    BaseMediaSourceAdapter._throwNotImplementedError('enableAdaptiveBitrate');
  }

  isAdaptiveBitrateEnabled(): boolean {
    return BaseMediaSourceAdapter._throwNotImplementedError('isAdaptiveBitrateEnabled');
  }

  _getLiveEdge(): number {
    return BaseMediaSourceAdapter._throwNotImplementedError('_getLiveEdge');
  }

  seekToLiveEdge(): void {
    BaseMediaSourceAdapter._throwNotImplementedError('seekToLiveEdge');
  }

  isLive(): boolean {
    return BaseMediaSourceAdapter._throwNotImplementedError('isLive');
  }

  /**
   * Handling live time update (as is not triggered when video is paused, but the current time changed)
   * @function _handleLiveTimeUpdate
   * @returns {void}
   * @private
   */
  _handleLiveTimeUpdate(): void {
    this._videoElement.addEventListener(Html5EventType.DURATION_CHANGE, () => {
      if (this.isLive() && this._videoElement.paused) {
        this._trigger(Html5EventType.TIME_UPDATE);
      }
    });
  }

  getStartTimeOfDvrWindow(): number {
    return BaseMediaSourceAdapter._throwNotImplementedError('getStartTimeOfDvrWindow');
  }

  /**
   * throw a run time error
   * @param {string} name of the unimplemented function
   * @returns {any} void/string/boolean
   */
  static _throwNotImplementedError(name: string): any {
    throw new Error(Error.Severity.CRITICAL, Error.Category.PLAYER, Error.Code.RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED, name);
  }

  /**
   * Get the current time in seconds.
   * @returns {Number} - The current playback time.
   * @public
   */
  get currentTime(): number {
    if (this.isLive()) {
      return this._videoElement.currentTime - this.getStartTimeOfDvrWindow();
    } else {
      return this._videoElement.currentTime;
    }
  }

  /**
   * Set the current time in seconds.
   * @param {Number} to - The number to set in seconds.
   * @public
   * @returns {void}
   */
  set currentTime(to: number): void {
    if (this.isLive()) {
      to += this.getStartTimeOfDvrWindow();
    }
    this._videoElement.currentTime = to;
  }

  /**
   * Get the duration in seconds.
   * @returns {Number} - The playback duration.
   * @public
   */
  get duration(): number {
    if (this.isLive()) {
      return this._getLiveEdge() - this.getStartTimeOfDvrWindow();
    } else {
      return this._videoElement.duration;
    }
  }

  /**
   * Getter for the src that the adapter plays on the video element.
   * In case the adapter preformed a load it will return the manifest url.
   * @public
   * @returns {string} - The src url.
   */
  get src(): string {
    if (this._loadPromise && this._sourceObj) {
      return this._sourceObj.url;
    }
    return '';
  }
}
