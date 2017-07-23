//@flow
import EventManager from './event/event-manager'
import FakeEvent from './event/fake-event'
import FakeEventTarget from './event/fake-event-target'
import {PLAYER_EVENTS as PlayerEvents, HTML5_EVENTS as Html5Events, CUSTOM_EVENTS as CustomEvents} from './event/events'
import PlayerStates from './state/state-types'
import * as Utils from './utils/util'
import LoggerFactory from './utils/logger'
import Html5 from './engines/html5/html5'
import PluginManager from './plugin/plugin-manager'
import StateManager from './state/state-manager'
import TrackTypes from './track/track-types'
import Track from './track/track'
import VideoTrack from './track/video-track'
import AudioTrack from './track/audio-track'
import TextTrack from './track/text-track'
import PlaybackMiddleware from './middleware/playback-middleware'
import DefaultPlayerConfig from './player-config.json'
import UAParser from 'ua-parser-js'
import './assets/style.css'

/**
 * The player container class name.
 * @type {string}
 * @const
 */
const CONTAINER_CLASS_NAME: string = 'playkit-container';

/**
 * The HTML5 player class.
 * @classdesc
 */
export default class Player extends FakeEventTarget {
  /**
   * The player class logger.
   * @type {any}
   * @static
   * @private
   */
  static _logger: any = LoggerFactory.getLogger('Player');
  /**
   * The available engines of the player.
   * @type {Array<typeof IEngine>}
   * @private
   * @static
   */
  static _engines: Array<typeof IEngine> = [Html5];
  /**
   * The plugin manager of the player.
   * @type {PluginManager}
   * @private
   */
  _pluginManager: PluginManager;
  /**
   * The event manager of the player.
   * @type {EventManager}
   * @private
   */
  _eventManager: EventManager;
  /**
   * The runtime configuration of the player.
   * @type {Object}
   * @private
   */
  _config: Object;
  /**
   * The playback engine.
   * @type {IEngine}
   * @private
   */
  _engine: IEngine;
  /**
   * The state manager of the player.
   * @type {StateManager}
   * @private
   */
  _stateManager: StateManager;
  /**
   * The tracks of the player.
   * @type {Array<Track>}
   * @private
   */
  _tracks: Array<Track>;
  /**
   * The player ready promise
   * @type {Promise<*>}
   * @private
   */
  _readyPromise: ?Promise<*>;
  /**
   * Whether the play is the first or not
   * @type {boolean}
   * @private
   */
  _firstPlay: boolean;
  /**
   * The player DOM element container.
   * @type {HTMLDivElement}
   * @private
   */
  _el: HTMLDivElement;
  /**
   * The playback middleware of the player.
   * @type {PlaybackMiddleware}
   * @private
   */
  _playbackMiddleware: PlaybackMiddleware;
  /**
   * The environment(os,device,browser) object of the player.
   * @type {Object}
   * @private
   */
  _env: Object;

  /**
   * @param {string} targetId - The target div id to append the player.
   * @param {Object} config - The configuration for the player instance.
   * @constructor
   */
  constructor(targetId: string, config: Object) {
    super();
    this._tracks = [];
    this._config = {};
    this._firstPlay = true;
    this._stateManager = new StateManager(this);
    this._pluginManager = new PluginManager();
    this._eventManager = new EventManager();
    this._playbackMiddleware = new PlaybackMiddleware();
    this._env = new UAParser().getResult();
    this._createReadyPromise();
    this._appendPlayerContainer(targetId);
    this.configure(config);
  }

  /**
   * Configures the player according to a given configuration.
   * @param {Object} config - The configuration for the player instance.
   * @returns {void}
   */
  configure(config: Object): void {
    let engine = this._engine;
    this._maybeResetPlayer(config);
    this._config = Utils.Object.mergeDeep(Utils.Object.isEmptyObject(this._config) ? Player._defaultConfig : this._config, config);
    if (this._selectEngine()) {
      this._appendEngineEl();
      this._attachMedia();
      this._maybeLoadPlugins(engine);
      this._handlePlaybackConfig();
    }
  }

  /**
   * Resets the player in case of new sources with existing engine.
   * @param {Object} config - The player configuration.
   * @private
   * @returns {void}
   */
  _maybeResetPlayer(config: Object): void {
    if (this._engine && config.sources) {
      Player._logger.debug('New sources on existing engine: reset engine to change media');
      this._reset();
    }
  }

  /**
   * Loads the plugins in case engine created for the first time.
   * @param {?IEngine} engine - The engine before the enter to configure method.
   * @private
   * @returns {void}
   */
  _maybeLoadPlugins(engine: ?IEngine) {
    if (this._engine && !engine) {
      Player._logger.debug('Engine created for the first time: load plugins');
      this._loadPlugins();
    }
  }

  /**
   * Reset the necessary components before change media.
   * @private
   * @returns {void}
   */
  _reset(): void {
    if (this._engine) {
      this._engine.destroy();
    }
    this._tracks = [];
    this._firstPlay = true;
    this._eventManager.removeAll();
    this._createReadyPromise();
  }

  /**
   * Creates the ready promise.
   * @private
   * @returns {void}
   */
  _createReadyPromise(): void {
    this._readyPromise = new Promise((resolve, reject) => {
      this._eventManager.listen(this, CustomEvents.TRACKS_CHANGED, () => {
        resolve();
      });
      this._eventManager.listen(this, Html5Events.ERROR, reject);
    });
  }

  /**
   * Destroys the player.
   * @returns {void}
   * @public
   */
  destroy(): void {
    if (this._engine) {
      this._engine.destroy();
    }
    this._eventManager.destroy();
    this._pluginManager.destroy();
    this._stateManager.destroy();
    this._config = {};
    this._tracks = [];
    this._readyPromise = null;
    this._firstPlay = true;
  }

  /**
   * @returns {Object} - The default configuration of the player.
   * @private
   * @static
   */
  static get _defaultConfig(): Object {
    return Utils.Object.copyDeep(DefaultPlayerConfig);
  }

  /**
   * Loads the configured plugins.
   * @private
   * @returns {void}
   */
  _loadPlugins(): void {
    let plugins = this._config.plugins;
    for (let name in plugins) {
      this._pluginManager.load(name, this, plugins[name]);
      let plugin = this._pluginManager.get(name);
      if (plugin && typeof plugin.getMiddlewareImpl === "function") {
        this._playbackMiddleware.use(plugin.getMiddlewareImpl());
      }
    }
  }

  /**
   * Selects the engine to create based on a given configuration.
   * @private
   * @returns {boolean} - Whether a proper engine was found.
   */
  _selectEngine(): boolean {
    if (this._config.sources && this._config.playback && this._config.playback.streamPriority) {
      return this._selectEngineByPriority();
    }
    return false;
  }

  /**
   * Selects an engine to play a source according to a given stream priority.
   * @return {boolean} - Whether a proper engine was found to play the given sources
   * according to the priority.
   * @private
   */
  _selectEngineByPriority(): boolean {
    let streamPriority = this._config.playback.streamPriority;
    let sources = this._config.sources;
    for (let priority of streamPriority) {
      let engineId = (typeof priority.engine === 'string') ? priority.engine.toLowerCase() : '';
      let format = (typeof priority.format === 'string') ? priority.format.toLowerCase() : '';
      let engine = Player._engines.find((engine) => engine.id === engineId);
      if (engine) {
        let formatSources = sources[format];
        if (formatSources && formatSources.length > 0) {
          let source = formatSources[0];
          if (engine.canPlayType(source.mimetype)) {
            this._loadEngine(engine, source);
            return true;
          }
        }
      }
    }
    Player._logger.warn("No playable engines was found to play the given sources");
    return false;
  }

  /**
   * Loads the selected engine.
   * @param {IEngine} engine - The selected engine.
   * @param {Source} source - The selected source object.
   * @private
   * @returns {void}
   */
  _loadEngine(engine: typeof IEngine, source: Source): void {
    this.dispatchEvent(new FakeEvent(CustomEvents.SOURCE_SELECTED, {selectedSource: source}));
    this._engine = engine.createEngine(source, this._config);
  }

  /**
   * Listen to all HTML5 defined events and trigger them on the player
   * @private
   * @returns {void}
   */
  _attachMedia(): void {
    if (this._engine) {
      for (let playerEvent in Html5Events) {
        this._eventManager.listen(this._engine, Html5Events[playerEvent], (event: FakeEvent) => {
          return this.dispatchEvent(event);
        });
      }
      this._eventManager.listen(this._engine, CustomEvents.VIDEO_TRACK_CHANGED, (event: FakeEvent) => {
        this._markActiveTrack(event.payload.selectedVideoTrack);
        return this.dispatchEvent(event);
      });
      this._eventManager.listen(this._engine, CustomEvents.AUDIO_TRACK_CHANGED, (event: FakeEvent) => {
        this._markActiveTrack(event.payload.selectedAudioTrack);
        return this.dispatchEvent(event);
      });
      this._eventManager.listen(this._engine, CustomEvents.TEXT_TRACK_CHANGED, (event: FakeEvent) => {
        this._markActiveTrack(event.payload.selectedTextTrack);
        return this.dispatchEvent(event);
      });
      this._eventManager.listen(this, Html5Events.PLAY, this._onPlay.bind(this));
    }
  }

  _handlePlaybackConfig(): void {
    if (this._config.playback) {
      if (this._config.playback.muted) {
        this.muted = true;
      }
      if (this._config.playback.playsinline) {
        this.playsinline = true;
      }
      if (this._config.playback.preload === "auto") {
        this.load();
      }
      if (this._canAutoPlay()) {
        this.play();
      }
    }
  }

  /**
   * Determine whether we can auto playing or not.
   * @returns {boolean} - Whether an auto play can be done.
   * @private
   */
  _canAutoPlay(): ?boolean {
    if (!this._config.playback.autoplay) {
      return false;
    }
    let device = this._env.device.type;
    let os = this._env.os.name;
    if (device === 'mobile' || device === 'tablet') {
      return (os === 'iOS') ? this.muted && this.playsinline : this.muted;
    }
    return true;
  }

  /**
   * Creates the player container
   * @param {string} targetId - The target div id to append the player.
   * @private
   * @returns {void}
   */
  _appendPlayerContainer(targetId: string): void {
    if (targetId) {
      if (this._el === undefined) {
        this._createPlayerContainer();
        let parentNode = Utils.Dom.getElementById(targetId);
        Utils.Dom.appendChild(parentNode, this._el);
      }
    } else {
      throw new Error("targetId is not found, it must be pass on initialization");
    }
  }

  /**
   * Creates the player container.
   * @private
   * @returns {void}
   */
  _createPlayerContainer(): void {
    this._el = Utils.Dom.createElement("div");
    this._el.id = Utils.Generator.uniqueId(5);
    this._el.className = CONTAINER_CLASS_NAME;
    this._el.setAttribute('tabindex', '-1');
  }

  /**
   * Appends the engine's video element to the player's div container.
   * @private
   * @returns {void}
   */
  _appendEngineEl(): void {
    if ((this._el != null) && (this._engine != null)) {
      Utils.Dom.appendChild(this._el, this._engine.getVideoElement());
    }
  }

  /**
   * Gets the view of the player (i.e the dom container object).
   * @return {HTMLElement} - The dom container.
   * @public
   */
  getView(): HTMLElement {
    return this._el;
  }

  /**
   * Returns the tracks according to the filter. if no filter given returns the all tracks.
   * @function getTracks
   * @param {string} [type] - a tracks filter, should be 'video', 'audio' or 'text'.
   * @returns {Array<Track>} - The parsed tracks.
   * @public
   */
  getTracks(type?: string): Array<Track> {
    return this._getTracksByType(type);
  }

  /**
   * Returns the tracks according to the filter. if no filter given returns the all tracks.
   * @function _getTracksByType
   * @param {string} [type] - a tracks filter, should be 'video', 'audio' or 'text'.
   * @returns {Array<Track>} - The parsed tracks.
   * @private
   */
  _getTracksByType(type?: string): Array<Track> {
    return !type ? this._tracks : this._tracks.filter((track: Track) => {
      if (type === TrackTypes.VIDEO) {
        return track instanceof VideoTrack;
      } else if (type === TrackTypes.AUDIO) {
        return track instanceof AudioTrack;
      } else if (type === TrackTypes.TEXT) {
        return track instanceof TextTrack;
      } else {
        return true;
      }
    });
  }

  /**
   * Get an object includes the active video/audio/text tracks
   * @return {{video: VideoTrack, audio: AudioTrack, text: TextTrack}} - The active tracks object
   */
  getActiveTracks(): Object {
    return {
      video: this._getTracksByType(TrackTypes.VIDEO).find(track => track.active),
      audio: this._getTracksByType(TrackTypes.AUDIO).find(track => track.active),
      text: this._getTracksByType(TrackTypes.TEXT).find(track => track.active),
    };
  }

  /**
   * Select a track
   * @function selectTrack
   * @param {Track} track - the track to select
   * @returns {void}
   * @public
   */
  selectTrack(track: Track): void {
    if (this._engine) {
      if (track instanceof VideoTrack) {
        this._engine.selectVideoTrack(track);
      } else if (track instanceof AudioTrack) {
        this._engine.selectAudioTrack(track);
      } else if (track instanceof TextTrack) {
        this._engine.selectTextTrack(track);
      }
    }
  }

  /**
   * Hide the text track
   * @function hideTextTrack
   * @returns {void}
   * @public
   */
  hideTextTrack(): void {
    if (this._engine) {
      this._engine.hideTextTrack();
      this._getTracksByType(TrackTypes.TEXT).map(track => track.active = false);
    }
  }

  /**
   * Enables adaptive bitrate switching.
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @public
   */
  enableAdaptiveBitrate(): void {
    if (this._engine) {
      this._engine.enableAdaptiveBitrate();
    }
  }

  /**
   * Mark the selected track as active
   * @function _markActiveTrack
   * @param {Track} track - the track to mark
   * @returns {void}
   * @private
   */
  _markActiveTrack(track: Track) {
    let type;
    if (track instanceof VideoTrack) {
      type = TrackTypes.VIDEO;
    } else if (track instanceof AudioTrack) {
      type = TrackTypes.AUDIO;
    } else if (track instanceof TextTrack) {
      type = TrackTypes.TEXT;
    }
    if (type) {
      let tracks = this.getTracks(type);
      for (let i = 0; i < tracks.length; i++) {
        tracks[i].active = track.index === i;
      }
    }
  }

  /**
   * @function _onPlay
   * @return {void}
   * @private
   */
  _onPlay(): void {
    if (this._firstPlay) {
      this._firstPlay = false;
      this.dispatchEvent(new FakeEvent(CustomEvents.FIRST_PLAY));
    }
  }

  /**
   * Getter for the environment of the player instance.
   * @return {Object} - The current environment object.
   * @public
   */
  get env(): Object {
    return this._env;
  }

  /**
   * Get the player config.
   * @returns {Object} - The player configuration.
   * @public
   */
  get config(): Object {
    return this._config;
  }

  /**
   * Set player session id
   * @param {string} sessionId - the player session id to set
   * @returns {void}
   * @public
   */
  set sessionId(sessionId: string): void {
    this._config.session = this._config.session || {};
    this._config.session.id = sessionId;
  }

  //  <editor-fold desc="Playback Interface">
  /**
   * The player readiness
   * @public
   * @returns {Promise<*>} - The ready promise
   */
  ready(): Promise<*> {
    return this._readyPromise ? this._readyPromise : Promise.resolve();
  }

  /**
   * Load media
   * @public
   * @returns {void}
   */
  load(): void {
    if (this._engine) {
      let startTime = this._config.playback.startTime;
      this._engine.load(startTime).then((data) => {
        this._tracks = data.tracks;
        this.dispatchEvent(new FakeEvent(CustomEvents.TRACKS_CHANGED, {tracks: this._tracks}));
      }).catch((error) => {
        this.dispatchEvent(new FakeEvent(Html5Events.ERROR, error));
      });
    }
  }

  /**
   * Start/resume playback.
   * @returns {void}
   * @public
   */
  play(): void {
    if (this._engine) {
      this._playbackMiddleware.play(this._play.bind(this));
    }
  }

  /**
   * Start/resume the engine playback.
   * @private
   * @returns {void}
   */
  _play(): void {
    if (this._engine.src) {
      this._engine.play();
    } else {
      this.load();
      this.ready().then(() => {
        this._engine.play();
      });
    }
  }

  /**
   * Pause playback.
   * @returns {void}
   * @public
   */
  pause(): void {
    if (this._engine) {
      this._playbackMiddleware.pause(this._pause.bind(this));
    }
  }

  /**
   * Starts the engine pause.
   * @private
   * @returns {void}
   */
  _pause(): void {
    this._engine.pause();
  }

  /**
   * @returns {HTMLVideoElement} - The video element.
   * @public
   */
  getVideoElement(): ?HTMLVideoElement {
    if (this._engine) {
      return this._engine.getVideoElement();
    }
  }

  /**
   * Set the current time in seconds.
   * @param {Number} to - The number to set in seconds.
   * @public
   */
  set currentTime(to: number): void {
    if (this._engine) {
      if (Utils.Number.isNumber(to)) {
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
  }

  /**
   * Get the current time in seconds.
   * @returns {?Number} - The playback current time.
   * @public
   */
  get currentTime(): ?number {
    if (this._engine) {
      return this._engine.currentTime;
    }
  }

  /**
   * Get the duration in seconds.
   * @returns {?Number} - The playback duration.
   * @public
   */
  get duration(): ?number {
    if (this._engine) {
      return this._engine.duration;
    }
  }

  /**
   * Set playback volume.
   * @param {Number} vol - The volume to set.
   * @returns {void}
   * @public
   */
  set volume(vol: number): void {
    if (this._engine) {
      if (Utils.Number.isFloat(vol)) {
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
  }

  /**
   * Get playback volume.
   * @returns {?Number} - The playback volume.
   * @public
   */
  get volume(): ?number {
    if (this._engine) {
      return this._engine.volume;
    }
  }

  /**
   * Sets the playbackRate property.
   * @param {number} rate - The playback speed of the video.
   */
  set playbackRate(rate: number): void {
    if (this._engine) {
      this._engine.playbackRate = rate;
    }
  }

  /**
   * Gets the current playback speed of the video.
   * @returns {number} - The current playback speed of the video.
   */
  get playbackRate(): ?number {
    if (this._engine) {
      return this._engine.playbackRate;
    }
  }

  // </editor-fold>

  // <editor-fold desc="State">
  /**
   * Get paused state.
   * @returns {?boolean} - Whether the video is paused or not.
   * @public
   */
  get paused(): ?boolean {
    if (this._engine) {
      return this._engine.paused;
    }
  }

  /**
   * Get seeking state.
   * @returns {?boolean} - Whether the video is seeking or not.
   * @public
   */
  get seeking(): ?boolean {
    if (this._engine) {
      return this._engine.seeking;
    }
  }

  buffered() {
  }

  /**
   * Set playsinline attribute.
   * Relevant for iOS 10 and up:
   * Elements will now be allowed to play inline, and will not automatically enter fullscreen mode when playback begins.
   * @param {boolean} playsinline - Whether the video should plays in line.
   */
  set playsinline(playsinline: boolean): void {
    if (this._engine) {
      this._engine.playsinline = playsinline;
    }
  }

  /**
   * Get playsinline attribute.
   * Relevant for iOS 10 and up:
   * Elements will now be allowed to play inline, and will not automatically enter fullscreen mode when playback begins.
   * @returns {boolean} - Whether the video plays in line.
   */
  get playsinline(): ?boolean {
    if (this._engine) {
      return this._engine.playsinline;
    }
  }

  /**
   * Set player muted state.
   * @param {boolean} mute - The mute value.
   * @returns {void}
   * @public
   */
  set muted(mute: boolean): void {
    if (this._engine) {
      this._engine.muted = mute;
    }
  }

  /**
   * Get player muted state.
   * @returns {?boolean} - Whether the video is muted or not.
   * @public
   */
  get muted(): ?boolean {
    if (this._engine) {
      return this._engine.muted;
    }
  }

  /**
   * Get the player source.
   * @returns {?string} - The current source of the player.
   * @public
   */
  get src(): ?string {
    if (this._engine) {
      return this._engine.src;
    }
  }

  /**
   * Get the player events.
   * @returns {Object} - The events of the player.
   * @public
   */
  get Event(): { [event: string]: string } {
    return PlayerEvents;
  }

  /**
   * Get the player states.
   * @returns {Object} - The states of the player.
   * @public
   */
  get State(): { [state: string]: string } {
    return PlayerStates;
  }

  /**
   * Get the player tracks types.
   * @returns {Object} - The tracks types of the player.
   * @public
   */
  get Track(): { [track: string]: string } {
    return TrackTypes;
  }

// </editor-fold>
}
