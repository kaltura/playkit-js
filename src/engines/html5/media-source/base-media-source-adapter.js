//@flow
/* eslint-disable no-unused-vars */
import FakeEventTarget from '../../../event/fake-event-target'
import Track from '../../../track/track'
import VideoTrack from '../../../track/video-track'
import AudioTrack from '../../../track/audio-track'
import TextTrack from '../../../track/text-track'
import {PlayerError} from '../../../utils/index'
import VideoTrackChangedEvent from "../../../event/custom-events/video-track-changed-event";
import AudioTrackChangedEvent from "../../../event/custom-events/audio-track-changed-event";
import TextTrackChangedEvent from "../../../event/custom-events/text-track-changed-event";

export default class BaseMediaSourceAdapter extends FakeEventTarget implements IMediaSourceAdapter {
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
  destroy(): Promise<*> {
    this._sourceObj = null;
    this._config = null;
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
      this.dispatchEvent(new VideoTrackChangedEvent(track));
    } else if (track instanceof AudioTrack) {
      this.dispatchEvent(new AudioTrackChangedEvent(track));
    } else if (track instanceof TextTrack) {
      this.dispatchEvent(new TextTrackChangedEvent(track));
    }
  }

  /** Must implemented methods by the derived media source adapter **/

  static canPlayType(mimeType: string, preferNative: boolean): boolean {
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

  isAdaptiveBitrateEnabled(): boolean {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'isAdaptiveBitrateEnabled').getError();
  }

  seekToLiveEdge(): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'seekToLiveEdge').getError();
  }

  isLive(): boolean {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'isLive').getError();
  }

  get src(): string {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'get src').getError();
  }

  /**
   * Get the current time in seconds.
   * @returns {Number} - The current playback time.
   * @public
   */
  get currentTime(): number {
    return this._videoElement.currentTime;
  }

  /**
   * Set the current time in seconds.
   * @param {Number} to - The number to set in seconds.
   * @public
   * @returns {void}
   */
  set currentTime(to: number): void {
    this._videoElement.currentTime = to;
  }

  /**
   * Get the duration in seconds.
   * @returns {Number} - The playback duration.
   * @public
   */
  get duration(): number {
    return this._videoElement.duration;
  }
}
