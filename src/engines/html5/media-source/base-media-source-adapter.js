//@flow
/* eslint-disable no-unused-vars */
import FakeEvent from '../../../event/fake-event'
import FakeEventTarget from '../../../event/fake-event-target'
import PlayerError from '../../../utils/player-error'
import {CUSTOM_EVENTS} from '../../../event/events'
import LoggerFactory from '../../../utils/logger'

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
  _config: Object;

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

  destroy(): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'destroy').getError();
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

  get src(): string {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'get src').getError();
  }
}
