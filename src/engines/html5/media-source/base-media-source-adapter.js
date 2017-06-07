//@flow
import FakeEvent from '../../../event/fake-event'
import FakeEventTarget from '../../../event/fake-event-target'
import PlayerError from '../../../utils/player-error'
import {CUSTOM_EVENTS} from '../../../event/events'

export default class BaseMediaSourceAdapter extends FakeEventTarget implements IMediaSourceAdapter {

  static CustomEvents: { [event: string]: string } = CUSTOM_EVENTS;
  
  static getLogger: Function = LoggerFactory.getLogger; 
  
  static get name(): string {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'get name').getError();
  }

  static set name(name: string): void {
    // Do nothing. Just a workaround for flow issue with static getter in an inheritor. See: https://github.com/facebook/flow/issues/3008.
  }

  static isSupported(): boolean {
    return true;
  }

  static canPlayType(/* mimeType: string */): boolean {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'static canPlayType').getError();
  }

  static createAdapter(videoElement: HTMLVideoElement, source: Source, config: Object): IMediaSourceAdapter {
    return new this(videoElement, source, config);
  }

  constructor() {
    super();
  }

  load(): Promise<Object> {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'load').getError();
  }

  destroy(): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'destroy').getError();
  }

  selectVideoTrack(/* videoTrack: VideoTrack */): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'selectVideoTrack').getError();
  }

  selectAudioTrack(/* audioTrack: AudioTrack */): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'selectAudioTrack').getError();
  }

  selectTextTrack(/* textTrack: TextTrack */): void {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'selectTextTrack').getError();
  }

  get src(): string {
    throw new PlayerError(PlayerError.TYPE.NOT_IMPLEMENTED_METHOD, 'get src').getError();
  }

  /**
   * Dispatch an adapter event forward.
   * @param {string} name - The name of the event.
   * @param {Object} payload - The event payload.
   * @returns {void}
   */
  trigger(name: string, payload: Object): void {
    this.dispatchEvent(new FakeEvent(name, payload));
  }
}
