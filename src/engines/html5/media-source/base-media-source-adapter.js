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

export default class BaseMediaSourceAdapter extends FakeEventTarget implements IMediaSourceAdapter {
  /**
   * Passing the custom events to the actual media source adapter.
   * @static
   */
  static CustomEvents: { [event: string]: string } = CUSTOM_EVENTS;

  /**
   * Passing the getLogger function to the actual media source adapter.
   * @type {Function}
   * @static
   */
  static getLogger: Function = LoggerFactory.getLogger;

  /**
   * The adapter config.
   * @member {Object} _config
   * @private
   */
  _config: ?Object;

  /**
   * The source object.
   * @member {Source} _sourceObj
   * @private
   */
  _sourceObj: Source | Object;

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
   * Factory method to create media source adapter.
   * @function createAdapter
   * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with.
   * @param {Object} source - The source Object.
   * @param {Object} config - The player configuration.
   * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter.
   * @static
   */
  static createAdapter(videoElement: HTMLVideoElement, source: Source, config: Object): IMediaSourceAdapter {
    return new this(videoElement, source, config);
  }

  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to media source adapter.
   * @param {Source} source - The source object.
   * @param {Object} config - The media source adapter configuration.
   */
  constructor(videoElement: HTMLVideoElement, source: Source, config: Object = {}) {
    super();
    this._videoElement = videoElement;
    this._sourceObj = source;
    this._config = config;
  }

  /**
   * Destroys the media source adapter.
   * @function destroy
   * @returns {void}
   */
  destroy(): void {
    this._sourceObj = {};
    this._config = null;
  }

  /**
   * Triggers the appropriate track changed event.
   * @param {Track} track - The selected track.
   * @private
   * @returns {void}
   */
  _onTrackChanged(track: Track): void {
    if (track instanceof VideoTrack) {
      this._trigger(BaseMediaSourceAdapter.CustomEvents.VIDEO_TRACK_CHANGED, {selectedVideoTrack: track});
    } else if (track instanceof AudioTrack) {
      this._trigger(BaseMediaSourceAdapter.CustomEvents.AUDIO_TRACK_CHANGED, {selectedAudioTrack: track});
    } else if (track instanceof TextTrack) {
      this._trigger(BaseMediaSourceAdapter.CustomEvents.TEXT_TRACK_CHANGED, {selectedTextTrack: track});
    }
  }

  /**
   * Dispatch an adapter event forward.
   * @param {string} name - The name of the event.
   * @param {Object} payload - The event payload.
   * @returns {void}
   */
  _trigger(name: string, payload: Object): void {
    this.dispatchEvent(new FakeEvent(name, payload));
  }

  /** Must implemented methods by the derived media source adapter **/

  static canPlayType(mimeType: string): boolean {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'static canPlayType').getError();
  }

  load(): Promise<Object> {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'load').getError();
  }

  selectVideoTrack(videoTrack: VideoTrack): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'selectVideoTrack').getError();
  }

  selectAudioTrack(audioTrack: AudioTrack): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'selectAudioTrack').getError();
  }

  selectTextTrack(textTrack: TextTrack): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'selectTextTrack').getError();
  }

  hideTextTrack(): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'hideTextTrack').getError();
  }

  enableAdaptiveBitrate(): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'enableAdaptiveBitrate').getError();
  }

  get src(): string {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'get src').getError();
  }
}
