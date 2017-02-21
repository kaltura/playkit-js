//@flow
import FakeEventTarget from '../util/FakeEventTarget';
import FakeEvent from '../util/FakeEvent';
import EventManager from '../util/eventManager';
import PlayerEvents from '../events';
import type {Engine} from './engine';


export default class Html5 extends FakeEventTarget implements Engine {
  el_: HTMLVideoElement;
  eventManager_: EventManager;

  static EngineName: string = "html5";

  constructor() {
    super();
    this.createVideoElement();
    this.eventManager_ = new EventManager();
    this.attach();
    this.setSrc();
  }

  destroy() {
    this.deattach();
    if (this.el_) {
      this.pause();
      this.el_.removeAttribute('src');
      if (this.el_.parentNode) {
        this.el_.parentNode.removeChild(this.el_);
      }
    }
  }

  attach() {
    PlayerEvents.forEach((event) => {
      this.eventManager_.listen(this.el_, event, () => {
        this.dispatchEvent(new FakeEvent(event));
      });
    });
  }

  deattach() {
    PlayerEvents.forEach((event) => {
      this.eventManager_.unlisten(this.el_, event);
    });
  }

  createVideoElement() {
    this.el_ = document.createElement("video");
    //Set attributes
    this.el_.style.width = "640px";
    this.el_.style.height = "360px";
    this.el_.style.backgroundColor = "black";
    this.el_.controls = true;
    if (document && document.body) {
      document.body.appendChild(this.el_);
    }
  }

  setSrc() {
    //Set source
    this.el_.src = "http://localhost:8080/assets/mov_bbb.mp4";
  }

  //playback interface
  /**
   * Start/resume playback
   */
  play(): void {
    return this.el_.play();
  }

  /**
   * Pause playback
   */
  pause() {
    return this.el_.pause();
  }

  /**
   * Get the current time in seconds
   * @returns {Number}
   */
  get currentTime(): number {
    return this.el_.currentTime;
  }

  /**
   * Set the current time in seconds
   * @param to {Number}
   */
  set currentTime(to: number) {
    this.el_.currentTime = to;
  }

  /**
   * Get the duration in seconds
   * @returns {Number}
   */
  get duration(): number {
    return this.el_.duration;
  }

  /**
   * Set playback volume
   * @param vol {Number}
   */
  set volume(vol: number) {
    this.el_.volume = vol;
  }

  /**
   * Get playback volume
   * @returns {Number}
   */
  get volume(): number {
    return this.el_.volume;
  }

  //state
  ready() {
  }

  /**
   * Get paused state
   * @returns {boolean}
   */
  get paused(): boolean {
    return this.el_.paused;
  }

  /**
   * Get seeking state
   * @returns {boolean}
   */
  get seeking(): boolean {
    return this.el_.seeking;
  }

  played() {
  }

  buffered() {
  }

  /**
   * Set player muted state
   * @param mute {boolean}
   */
  set muted(mute: boolean) {
    this.el_.muted = mute;
  }

  /**
   * Get player muted state
   * @returns {boolean}
   */
  get muted(): boolean {
    return this.el_.muted;
  }

  static TEST_VID: HTMLVideoElement;

  static isSupported() {
    try {
      Html5.TEST_VID = document.createElement('video');
      Html5.TEST_VID.volume = 0.5;
    } catch (e) {
      return false;
    }

    return !!Html5.TEST_VID.canPlayType;
  }
}

//Engine.register("html5", Html5);
