// @flow
import EventManager from './events/eventManager';
import FakeEventTarget from './events/FakeEventTarget';
import FakeEvent from './events/FakeEvent';
import PlayerEvents from './events/events';
import { isNumber, isFloat } from './util/util';
import { capitlize } from './util/stringUtils';
import LoggerFactory from './util/loggerFactory';
import Html5 from './engine/Html5';

type ListenerType = (event: FakeEvent) => any;
let logger = LoggerFactory.getLogger('Player');

class Player extends FakeEventTarget {
  eventManager_: EventManager;
  config_: any;
  engine_: IEngine;
  engineEventHandlers_: Map<string, ListenerType>;

  constructor() {
    super();
    this.eventManager_ = new EventManager();
    this.engineEventHandlers_ = new Map();
    PlayerEvents.forEach((event) => {
      this.engineEventHandlers_.set(`onEngine${capitlize(event)}_`, (event) => {
        return this.dispatchEvent(event);
      });
    });
    this.config_ = Player.defaultConfig_();
    this.selectEngine(this.config_);
    this.attachMedia();
    logger.info('player is ready!');
  }

  destroy() {
    this.engine_.destroy();
    this.eventManager_.destroy();
    // this.engine_ = null;
    // this.eventManager_ = null;
    this.config_ = null;
  }

  static defaultConfig_() {
    return {};
  }

  selectEngine() {
    this.loadEngine();
  }

  loadEngine() {
    this.engine_ = new Html5();
  }

  attachMedia() {
    // Listen to all HTML5-defined events and trigger them on the player

    PlayerEvents.forEach((event) => {
      const handler = this.engineEventHandlers_.get(`onEngine${capitlize(event)}_`);
      if (handler) {
        this.eventManager_.listen(this.engine_, event, handler);
      }
    });
  }

  //  <editor-fold desc="playback interface">
  /**
   * Start/resume playback
   * @returns {Player}
   */
  play() {
    return this.engine_.play();
  }

  /**
   * Pause playback
   * @returns {Player}
   */
  pause() {
    return this.engine_.pause();
  }

  /**
   * Set the current time in seconds
   * @param to {Number}
   */
  set currentTime(to: number) {
    if (isNumber(to)) {
      let boundedTo = to;
      if (to < 0) {
        boundedTo = 0;
      }
      if (boundedTo > this.engine_.duration) {
        boundedTo = this.engine_.duration;
      }
      this.engine_.currentTime = boundedTo;
    }
  }

  /**
   * Get the current time in seconds
   * @returns {Number}
   */
  get currentTime(): number {
    return this.engine_.currentTime;
  }

  /**
   * /**
   * Get the duration in seconds
   * @returns {Number}
   */
  get duration(): number {
    return this.engine_.duration;
  }

  /**
   * Set playback volume
   * @param vol {Number}
   */
  set volume(vol: number) {
    if (isFloat(vol)) {
      let boundedVol = vol;
      if (boundedVol < 0) {
        boundedVol = 0;
      }
      if (boundedVol > 1) {
        boundedVol = 1;
      }
      this.engine_.volume = boundedVol;
    }
  }

  /**
   * Get playback volume
   * @returns {Number}
   */
  get volume(): number {
    return this.engine_.volume;
  }

  // </editor-fold>

  // <editor-fold desc="State">
  ready() {
  }

  /**
   * Get paused state
   * @returns {boolean}
   */
  get paused(): boolean {
    return this.engine_.paused;
  }

  /**
   *
   * @returns {boolean}
   */
  get seeking(): boolean {
    return this.engine_.seeking;
  }

  buffered() {
  }

  /**
   * Set player muted state
   * @param mute {boolean}
   */
  set muted(mute: boolean) {
    this.engine_.muted = mute;
  }

  /**
   * Get player muted state
   * @returns {boolean}
   */
  get muted(): boolean {
    return this.engine_.muted;
  }

  // </editor-fold>
}

export default Player;
