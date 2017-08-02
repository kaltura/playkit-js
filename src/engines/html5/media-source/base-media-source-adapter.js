//@flow
/* eslint-disable no-unused-vars */
import FakeEvent from '../../../event/fake-event'
import FakeEventTarget from '../../../event/fake-event-target'
import PlayerError from '../../../utils/player-error'
import {EventType} from '../../../event/event-type'
import LoggerFactory from '../../../utils/logger'
import Track from '../../../track/track'
import VideoTrack from '../../../track/video-track'
import AudioTrack from '../../../track/audio-track'
import TextTrack from '../../../track/text-track'

/**
 * @namespace BaseMediaSourceAdapter
 * @memberof Classes
 * @extends FakeEventTarget
 * @implements IMediaSourceAdapter
 */
export default class BaseMediaSourceAdapter extends FakeEventTarget implements IMediaSourceAdapter {
  static EventType: Object = EventType;
  static getLogger: Function = LoggerFactory.getLogger;
  _config: ?Object;
  _sourceObj: ?Source;
  _videoElement: HTMLVideoElement;

  /**
   * By default returns true.
   * @function isSupported
   * @returns {boolean}
   * @static
   * @virtual isSupported
   * @public
   * @memberof Classes.BaseMediaSourceAdapter
   */
  static isSupported(): boolean {
    return true;
  }

  /**
   * Must be implemented by derived adapter.
   * @param {string} mimeType
   * @static
   * @abstract
   * @public
   * @memberof Classes.BaseMediaSourceAdapter
   * @returns {boolean}
   */
  static canPlayType(mimeType: string): boolean {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'static canPlayType').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @public
   * @abstract
   * @memberof Classes.BaseMediaSourceAdapter
   * @returns {Promise<Object>}
   * @instance
   */
  load(): Promise<Object> {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'load').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @param {VideoTrack} videoTrack
   * @public
   * @abstract
   * @memberof Classes.BaseMediaSourceAdapter
   * @returns {void}
   * @instance
   */
  selectVideoTrack(videoTrack: VideoTrack): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'selectVideoTrack').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @param {AudioTrack} audioTrack
   * @public
   * @abstract
   * @memberof Classes.BaseMediaSourceAdapter
   * @returns {void}
   * @instance
   */
  selectAudioTrack(audioTrack: AudioTrack): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'selectAudioTrack').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @param {TextTrack} textTrack
   * @public
   * @abstract
   * @memberof Classes.BaseMediaSourceAdapter
   * @returns {void}
   * @instance
   */
  selectTextTrack(textTrack: TextTrack): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'selectTextTrack').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @public
   * @abstract
   * @memberof Classes.BaseMediaSourceAdapter
   * @returns {void}
   * @instance
   */
  hideTextTrack(): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'hideTextTrack').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @public
   * @abstract
   * @memberof Classes.BaseMediaSourceAdapter
   * @returns {void}
   * @instance
   */
  enableAdaptiveBitrate(): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'enableAdaptiveBitrate').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @public
   * @abstract
   * @memberof Classes.BaseMediaSourceAdapter
   * @returns {boolean}
   * @instance
   */
  isAdaptiveBitrateEnabled(): boolean {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'isAdaptiveBitrateEnabled').getError();
  }

  /**
   * Must be implemented by derived adapter.
   * @public
   * @abstract
   * @memberof Classes.BaseMediaSourceAdapter
   * @instance
   */
  get src(): string {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'get src').getError();
  }

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
   * @virtual
   * @memberof Classes.BaseMediaSourceAdapter
   * @instance
   */
  destroy(): void {
    this._sourceObj = null;
    this._config = null;
  }

  _onTrackChanged(track: Track): void {
    if (track instanceof VideoTrack) {
      this._trigger(BaseMediaSourceAdapter.EventType.Player.VIDEO_TRACK_CHANGED, {selectedVideoTrack: track});
    } else if (track instanceof AudioTrack) {
      this._trigger(BaseMediaSourceAdapter.EventType.Player.AUDIO_TRACK_CHANGED, {selectedAudioTrack: track});
    } else if (track instanceof TextTrack) {
      this._trigger(BaseMediaSourceAdapter.EventType.Player.TEXT_TRACK_CHANGED, {selectedTextTrack: track});
    }
  }

  _trigger(name: string, payload: Object): void {
    this.dispatchEvent(new FakeEvent(name, payload));
  }
}
