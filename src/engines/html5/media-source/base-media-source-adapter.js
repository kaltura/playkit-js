//@flow
/* eslint-disable no-unused-vars */
import FakeEvent from '../../../event/fake-event'
import FakeEventTarget from '../../../event/fake-event-target'
import PlayerError from '../../../utils/player-error'
import {CUSTOM_EVENTS} from '../../../event/events'
import LoggerFactory from '../../../utils/logger'
import Track from '../../../track/track'
import VideoTrack from '../../../track/video-track'
import AudioTrack from '../../../track/audio-track'
import TextTrack from '../../../track/text-track'

/**
 * @namespace BaseMediaSourceAdapter
 * @memberof PlayKitJS.MediaSource
 * @abstract
 */
export default class BaseMediaSourceAdapter extends FakeEventTarget implements IMediaSourceAdapter {
  static CustomEvents: { [event: string]: string } = CUSTOM_EVENTS;
  static getLogger: Function = LoggerFactory.getLogger;
  _config: ?Object;
  _sourceObj: ?Source;
  _videoElement: HTMLVideoElement;

  /**
   * By default returns true.
   * @function isSupported
   * @returns {boolean}
   * @static
   * @public
   * @memberof PlayKitJS.MediaSource.BaseMediaSourceAdapter
   */
  static isSupported(): boolean {
    return true;
  }

  /**
   * Must be implemented by derived adapter.
   * @param {string} mimeType
   * @static
   * @public
   * @memberof PlayKitJS.MediaSource.BaseMediaSourceAdapter
   */
  static canPlayType(mimeType: string): boolean {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'static canPlayType').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @public
   * @memberof PlayKitJS.MediaSource.BaseMediaSourceAdapter
   * @returns {Promise<Object>}
   * @instance
   */
  load(): Promise<Object> {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'load').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @public
   * @memberof PlayKitJS.MediaSource.BaseMediaSourceAdapter
   * @returns {void}
   * @instance
   */
  selectVideoTrack(videoTrack: VideoTrack): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'selectVideoTrack').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @public
   * @memberof PlayKitJS.MediaSource.BaseMediaSourceAdapter
   * @returns {void}
   * @instance
   */
  selectAudioTrack(audioTrack: AudioTrack): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'selectAudioTrack').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @public
   * @memberof PlayKitJS.MediaSource.BaseMediaSourceAdapter
   * @returns {void}
   * @instance
   */
  selectTextTrack(textTrack: TextTrack): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'selectTextTrack').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @public
   * @memberof PlayKitJS.MediaSource.BaseMediaSourceAdapter
   * @returns {void}
   * @instance
   */
  hideTextTrack(): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'hideTextTrack').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @public
   * @memberof PlayKitJS.MediaSource.BaseMediaSourceAdapter
   * @returns {void}
   * @instance
   */
  enableAdaptiveBitrate(): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'enableAdaptiveBitrate').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @public
   * @memberof PlayKitJS.MediaSource.BaseMediaSourceAdapter
   * @returns {boolean}
   * @instance
   */
  isAdaptiveBitrateEnabled(): boolean {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'isAdaptiveBitrateEnabled').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @public
   * @memberof PlayKitJS.MediaSource.BaseMediaSourceAdapter
   * @instance
   */
  get src(): string {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'get src').getError();
  }

  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement
   * @param {Source} source
   * @param {Object} config
   */
  constructor(videoElement: HTMLVideoElement, source: Source, config: Object = {}) {
    super();
    this._videoElement = videoElement;
    this._sourceObj = source;
    this._config = config;
  }

  /**
   * Must be implemented by derived adapter.
   * @function destroy
   * @returns {void}
   * @public
   * @memberof PlayKitJS.MediaSource.BaseMediaSourceAdapter
   * @instance
   */
  destroy(): void {
    this._sourceObj = null;
    this._config = null;
  }

  _onTrackChanged(track: Track): void {
    if (track instanceof VideoTrack) {
      this._trigger(BaseMediaSourceAdapter.CustomEvents.VIDEO_TRACK_CHANGED, {selectedVideoTrack: track});
    } else if (track instanceof AudioTrack) {
      this._trigger(BaseMediaSourceAdapter.CustomEvents.AUDIO_TRACK_CHANGED, {selectedAudioTrack: track});
    } else if (track instanceof TextTrack) {
      this._trigger(BaseMediaSourceAdapter.CustomEvents.TEXT_TRACK_CHANGED, {selectedTextTrack: track});
    }
  }

  _trigger(name: string, payload: Object): void {
    this.dispatchEvent(new FakeEvent(name, payload));
  }
}
