//@flow
/* eslint-disable no-unused-vars */
import FakeEvent from '../../../event/fake-event'
import FakeEventTarget from '../../../event/fake-event-target'
import PlayerError from '../../../utils/player-error'
import {CUSTOM_EVENTS as CustomEvents} from '../../../event/events'
import LoggerFactory from '../../../utils/logger'

export default class BaseMediaSourceAdapter extends FakeEventTarget implements IMediaSourceAdapter {

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
  _sourceObj: ?Source;

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
   * @param {Object} config - The media source adapter configuration.
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
  constructor(videoElement: HTMLVideoElement, source: Source, config: Object) {
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
    this._sourceObj = null;
    this._config = null;
  }

  /**
   * Triggers a 'videotrackchanged' event.
   * @function selectVideoTrack
   * @param {VideoTrack} videoTrack - The track to select.
   * @returns {void}
   * @public
   */
  selectVideoTrack(videoTrack: VideoTrack): void {
    if (videoTrack) {
      this._trigger(CustomEvents.VIDEO_TRACK_CHANGED, {selectedVideoTrack: videoTrack});
    }
  }

  /**
   * Triggers a 'audiotrackchanged' event.
   * @function selectAudioTrack
   * @param {VideoTrack} audioTrack - The track to select.
   * @returns {void}
   * @public
   */
  selectAudioTrack(audioTrack: AudioTrack): void {
    if (audioTrack) {
      this._trigger(CustomEvents.AUDIO_TRACK_CHANGED, {selectedAudioTrack: audioTrack});
    }
  }

  /**
   * Triggers a 'texttrackchanged' event.
   * @function selectTextTrack
   * @param {VideoTrack} textTrack - The track to select.
   * @returns {void}
   * @public
   */
  selectTextTrack(textTrack: TextTrack): void {
    if (textTrack) {
      this._trigger(CustomEvents.TEXT_TRACK_CHANGED, {selectedTextTrack: textTrack});
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

  get src(): string {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'get src').getError();
  }
}
