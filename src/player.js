//@flow
import EventManager from './event/event-manager'
import FakeEventTarget from './event/fake-event-target'
import FakeEvent from './event/fake-event'
import PlayerEvents from './event/events'
import {isNumber, isFloat} from './utils/util'
import {capitlize} from './utils/string-util'
import LoggerFactory from './utils/logger'
import Html5 from './engines/html5'
import PluginManager from './plugin/plugin-manager'
import StateManager from './state/state-manager'

let logger = LoggerFactory.getLogger('Player');
type ListenerType = (event: FakeEvent) => any;

class Player extends FakeEventTarget {
  _pluginManager: PluginManager;
  _eventManager: EventManager;
  _config: any;
  _engine: IEngine;
  _engineEventHandlers: Map<string, ListenerType>;
  _stateManager: StateManager;

  constructor(config: Object) {
    super();
    this._stateManager = new StateManager(this);
    this._pluginManager = new PluginManager();
    this._eventManager = new EventManager();
    this._engineEventHandlers = new Map();
    for (let playerEvent in PlayerEvents) {
      if (PlayerEvents.hasOwnProperty(playerEvent)) {
        this._engineEventHandlers.set(`onEngine${capitlize(PlayerEvents[playerEvent])}_`, (event) => {
          return this.dispatchEvent(event);
        });
      }
    }
    this._config = config || Player.defaultConfig_();
    this.loadPlugins(this._config);
    this.selectEngine(this._config);
    this.attachMedia();
    logger.info('player is ready!');
  }

  destroy() {
    this._engine.destroy();
    this._eventManager.destroy();
    this._pluginManager.destroy();
    this._stateManager.destroy();
    // this.engine_ = null;
    // this.eventManager_ = null;
    this._config = null;
  }

  static defaultConfig_() {
    return {};
  }

  loadPlugins(config: Object): void {
    let plugins = config.plugins;
    for (let name in plugins) {
      if (plugins.hasOwnProperty(name)) {
        this._pluginManager.load(name, this, plugins[name]);
      }
    }
  }

  selectEngine(config: Object) {
    if (config && config.sources) {
      let sources = config.sources;
      for (let i = 0; i < sources.length; i++) {
        if (Html5.canPlayType(sources[i].mimetype)) {
          this.loadEngine(sources[i], config);
          break;
        }
      }
    }
  }

  loadEngine(source: Object, config: Object) {
    this._engine = new Html5(source, config);
    if (config.preload === "auto") {
      this.load();
    }
  }

  attachMedia() {
    // Listen to all HTML5-defined events and trigger them on the player
    for (let playerEvent in PlayerEvents) {
      if (PlayerEvents.hasOwnProperty(playerEvent)) {
        const handler = this._engineEventHandlers.get(`onEngine${capitlize(PlayerEvents[playerEvent])}_`);
        if (handler) {
          this._eventManager.listen(this._engine, PlayerEvents[playerEvent], handler);
        }
      }
    }
  }

  /**
   * Get the player config
   * @returns {Object}
   */
  get config(): Object {
    return this._config;
  }

  //  <editor-fold desc="Playback Interface">
  /**
   * Start/resume playback
   * @returns {Player}
   */
  play() {
    return this._engine.play();
  }

  /**
   * Pause playback
   * @returns {Player}
   */
  pause() {
    return this._engine.pause();
  }

  /**
   * Load media
   */
  load(): void {
    this._engine.load();
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
      if (boundedTo > this._engine.duration) {
        boundedTo = this._engine.duration;
      }
      this._engine.currentTime = boundedTo;
    }
  }

  /**
   * Get the current time in seconds
   * @returns {Number}
   */
  get currentTime(): number {
    return this._engine.currentTime;
  }

  /**
   * /**
   * Get the duration in seconds
   * @returns {Number}
   */
  get duration(): number {
    return this._engine.duration;
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
      this._engine.volume = boundedVol;
    }
  }

  /**
   * Get playback volume
   * @returns {Number}
   */
  get volume(): number {
    return this._engine.volume;
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
    return this._engine.paused;
  }

  /**
   *
   * @returns {boolean}
   */
  get seeking(): boolean {
    return this._engine.seeking;
  }

  buffered() {
  }

  /**
   * Set player muted state
   * @param mute {boolean}
   */
  set muted(mute: boolean) {
    this._engine.muted = mute;
  }

  /**
   * Get player muted state
   * @returns {boolean}
   */
  get muted(): boolean {
    return this._engine.muted;
  }

// </editor-fold>
}

export default Player;
