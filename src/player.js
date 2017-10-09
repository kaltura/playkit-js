//@flow
import Env from './utils/env'
import EventManager from './event/event-manager'
import PosterManager from './utils/poster-manager'
import FakeEvent from './event/fake-event'
import FakeEventTarget from './event/fake-event-target'
import {PLAYER_EVENTS as PlayerEvents, HTML5_EVENTS as Html5Events, CUSTOM_EVENTS as CustomEvents} from './event/events'
import PlayerStates from './state/state-types'
import * as Utils from './utils/util'
import Locale from './utils/locale'
import LoggerFactory from './utils/logger'
import Html5 from './engines/html5/html5'
import PluginManager from './plugin/plugin-manager'
import BasePlugin from './plugin/base-plugin'
import StateManager from './state/state-manager'
import TrackTypes from './track/track-types'
import Track from './track/track'
import VideoTrack from './track/video-track'
import AudioTrack from './track/audio-track'
import TextTrack from './track/text-track'
import TextStyle from './track/text-style'
import {Cue} from './track/vtt-cue'
import {processCues} from './track/text-track-display'
import PlaybackMiddleware from './middleware/playback-middleware'
import DefaultPlayerConfig from './player-config.json'
import './assets/style.css'

/**
 * The player container class name.
 * @type {string}
 * @const
 */
const CONTAINER_CLASS_NAME: string = 'playkit-container';

/**
 /**
 * The player poster class name.
 * @type {string}
 * @const
 */
const POSTER_CLASS_NAME: string = 'playkit-poster';

/**
 * The engine class name.
 * @type {string}
 * @const
 */
const ENGINE_CLASS_NAME: string = 'playkit-engine';

/**
 * The text style id.
 * @type {string}
 * @const
 */
const SUBTITLES_STYLE_ID_NAME: string = 'playkit-subtitles-style';

/**
 * The subtitles class name.
 * @type {string}
 * @const
 */
const SUBTITLES_CLASS_NAME: string = 'playkit-subtitles';

/**
 * The live string.
 * @type {string}
 * @const
 */
const LIVE = 'Live';

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
   * The poster manager of the player.
   * @type {PosterManager}
   * @private
   */
  _posterManager: PosterManager;
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
   * The player text DOM element container.
   * @type {HTMLDivElement}
   * @private
   */
  _textDisplayEl: HTMLDivElement;
  /**
   * The player DOM id.
   * @type {string}
   * @private
   */
  _playerId: string;
  /**
   * The player last updated text cues list
   * @type {Array<any>}
   * @private
   */
  _activeTextCues: Array<any> = [];
  /**
   * The player text disaply settings
   * @type {Object}
   * @private
   */
  _textDisplaySettings: Object = {};
  /**
   * The player text style settings
   * @type {TextStyle}
   * @private
   */
  _textStyle: TextStyle;
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
   * The currently selected engine type
   * @type {string}
   * @private
   */
  _engineType: string;
  /**
   * The currently selected stream type
   * @type {string}
   * @private
   */
  _streamType: string;

  /**
   * @param {Object} config - The configuration for the player instance.
   * @constructor
   */
  constructor(config: Object = {}) {
    super();
    this._env = Env;
    this._tracks = [];
    this._firstPlay = true;
    this._config = Player._defaultConfig;
    this._eventManager = new EventManager();
    this._posterManager = new PosterManager();
    this._stateManager = new StateManager(this);
    this._pluginManager = new PluginManager();
    this._playbackMiddleware = new PlaybackMiddleware();
    this._textStyle = new TextStyle();
    this._createReadyPromise();
    this._createPlayerContainer();
    this._appendPosterEl();
    this.configure(config);
  }

  // <editor-fold desc="Public API">

  // <editor-fold desc="Playback API">

  /**
   * Configures the player according to a given configuration.
   * @param {Object} config - The configuration for the player instance.
   * @returns {void}
   */
  configure(config: Object): void {
    Utils.Object.mergeDeep(this._config, config);
    this._configureOrLoadPlugins(config.plugins);
    if (config.sources) {
      this._maybeResetPlayer();
      if (this._selectEngineByPriority()) {
        this._appendEngineEl();
        this._posterManager.setSrc(this._config.metadata.poster);
        this._posterManager.show();
        this._attachMedia();
        this._handlePlaybackConfig();
      }
    }
  }

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
        this._addTextTrackOffOption();
        this._setDefaultTracks();
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
   * Gets the view of the player (i.e the dom container object).
   * @return {HTMLElement} - The dom container.
   * @public
   */
  getView(): HTMLElement {
    return this._el;
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
    this._textDisplaySettings = {};
    this._config = {};
    this._tracks = [];
    this._readyPromise = null;
    this._firstPlay = true;
  }

  buffered(): void {
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
      if (Utils.Number.isFloat(vol) || (vol === 0) || (vol === 1)) {
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
      this.dispatchEvent(new FakeEvent(CustomEvents.MUTE_CHANGE, {mute: mute}));
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
   * Get the dimensions of the player.
   * @returns {{width: number, height: number}} - The dimensions of the player.
   * @public
   */
  get dimensions(): Object {
    return {
      width: this._el.clientWidth,
      height: this._el.clientHeight
    };
  }

  /**
   * Get the poster source URL
   * @returns {string} - the poster image URL
   */
  get poster(): string {
    return this._posterManager.src;
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

  /**
   * get the engine type
   * @returns {string} - html5
   */
  get engineType(): ?string {
    return this._engineType;
  }

  /**
   * get the stream type
   * @returns {string} - hls|dash|progressive
   */
  get streamType(): ?string {
    return this._streamType;
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
   * @returns {Object} - A copy of the player configuration.
   * @public
   */
  get config(): Object {
    return Utils.Object.mergeDeep({}, this._config);
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


  // </editor-fold>

  // <editor-fold desc="Live API">

  /**
   * Checking if the current playback is live.
   * @function isLive
   * @returns {boolean} - Whether playback is live.
   * @public
   */
  isLive(): boolean {
    return !!(this._config.type === LIVE || (this._engine && this._engine.isLive()));
  }

  /**
   * Checking if the current live playback has DVR window.
   * @function isDvr
   * @returns {boolean} - Whether live playback has DVR window.
   * @public
   */
  isDvr(): boolean {
    return this.isLive() && this._config.dvr;
  }

  /**
   * Seeking to live edge.
   * @function seekToLiveEdge
   * @returns {void}
   * @public
   */
  seekToLiveEdge(): void {
    if (this._engine && this.isLive()) {
      this._engine.seekToLiveEdge();
    }
  }

  // </editor-fold>

  // <editor-fold desc="Tracks API">

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
        if (track.language === "off") {
          this.hideTextTrack();
        } else {
          this._engine.selectTextTrack(track);
        }
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
      this._updateTextDisplay([]);
      const textTracks = this._getTracksByType(TrackTypes.TEXT);
      textTracks.map(track => track.active = false);
      const textTrack = textTracks.find(track => track.language === "off");
      if (textTrack) {
        textTrack.active = true;
        this.dispatchEvent(new FakeEvent(CustomEvents.TEXT_TRACK_CHANGED, {selectedTextTrack: textTrack}))
      }
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
   * Checking if adaptive bitrate switching is enabled.
   * @function isAdaptiveBitrateEnabled
   * @returns {boolean} - Whether adaptive bitrate is enabled.
   * @public
   */
  isAdaptiveBitrateEnabled(): boolean {
    if (this._engine) {
      return this._engine.isAdaptiveBitrateEnabled();
    }
    return false;
  }

  /**
   * update the text display settings
   * @param {Object} settings - text cue display settings
   * @public
   * @returns {void}
   */
  setTextDisplaySettings(settings: Object): void {
    this._textDisplaySettings = settings;
    this._updateCueDisplaySettings();
    for (let i = 0; i < this._activeTextCues.length; i++) {
      this._activeTextCues[i].hasBeenReset = true;
    }
    this._updateTextDisplay(this._activeTextCues);
  }

  /**
   * Sets style attributes for text tracks.
   * @param {TextStyle} style - text styling settings
   * @returns {void}
   */
  set textStyle(style: TextStyle): void {
    if (!(style instanceof TextStyle)) {
      throw new Error("Style must be instance of TextStyle");
    }
    let element = Utils.Dom.getElementById(SUBTITLES_STYLE_ID_NAME);
    if (!element) {
      element = Utils.Dom.createElement('style');
      Utils.Dom.setAttribute(element, 'id', SUBTITLES_STYLE_ID_NAME);
      Utils.Dom.appendChild(document.head, element);
    }
    let sheet = element.sheet;

    while (sheet.cssRules.length) {
      sheet.deleteRule(0);
    }

    try {
      if (this._config.playback.useNativeTextTrack) {
        sheet.insertRule(`video.${ENGINE_CLASS_NAME}::cue { ${style.toCSS()} }`, 0);
      } else {
        sheet.insertRule(`#${this._playerId} .${SUBTITLES_CLASS_NAME} > div > div > div { ${style.toCSS()} }`, 0);
      }
      this._textStyle = style;
    } catch (e) {
      Player._logger.error(e.message);
    }
  }

  /**
   * Gets style attributes for text tracks.
   * @returns {?TextStyle} - the current style attribute
   */
  get textStyle(): ?TextStyle {
    return this._textStyle.clone();
  }

  // </editor-fold>

  // <editor-fold desc="Ads API">

  /**
   * Skip on an ad.
   * @public
   * @returns {void}
   */
  skipAd(): void {
    let adsPlugin: ?BasePlugin = this._pluginManager.get('ima');
    if (adsPlugin && typeof adsPlugin.skipAd === 'function') {
      adsPlugin.skipAd();
    }
  }

  /**
   * Start to play ad on demand.
   * @param {string} adTagUrl - The ad tag url to play.
   * @public
   * @returns {void}
   */
  playAdNow(adTagUrl: string): void {
    let adsPlugin: ?BasePlugin = this._pluginManager.get('ima');
    if (adsPlugin && typeof adsPlugin.playAdNow === 'function') {
      adsPlugin.playAdNow(adTagUrl);
    }
  }

  // </editor-fold>

  // </editor-fold>

  // <editor-fold desc="Private Methods">

  // <editor-fold desc="Playback">

  /**
   * Creates the ready promise.
   * @private
   * @returns {void}
   */
  _createReadyPromise(): void {
    this._readyPromise = new Promise((resolve, reject) => {
      this._eventManager.listen(this, CustomEvents.TRACKS_CHANGED, resolve);
      this._eventManager.listen(this, Html5Events.ERROR, reject);
    });
  }

  /**
   * Creates the player container.
   * @private
   * @returns {void}
   */
  _createPlayerContainer(): void {
    const el = this._el = Utils.Dom.createElement("div");
    Utils.Dom.addClassName(el, CONTAINER_CLASS_NAME);
    this._playerId = Utils.Generator.uniqueId(5);
    Utils.Dom.setAttribute(el, "id", this._playerId);
    Utils.Dom.setAttribute(el, "tabindex", '-1');
  }

  /**
   * Appends the poster element to the player's div container.
   * @private
   * @returns {void}
   */
  _appendPosterEl(): void {
    if (this._el) {
      let el: HTMLDivElement = this._posterManager.getElement();
      Utils.Dom.addClassName(el, POSTER_CLASS_NAME);
      Utils.Dom.appendChild(this._el, el);
    }
  }

  /**
   * Appends the engine's video element to the player's div container.
   * @private
   * @returns {void}
   */
  _appendEngineEl(): void {
    if (this._el && this._engine) {
      let engineEl = this._engine.getVideoElement();
      const classname = `${ENGINE_CLASS_NAME}`;
      Utils.Dom.addClassName(engineEl, classname);
      const classnameWithId = `${ENGINE_CLASS_NAME}-${this._engine.id}`;
      Utils.Dom.addClassName(engineEl, classnameWithId);
      Utils.Dom.prependTo(engineEl, this._el);
    }
  }

  /**
   * Configures or load the plugins defined in the configuration.
   * @param {Object} plugins - The new received plugins configuration.
   * @private
   * @returns {void}
   */
  _configureOrLoadPlugins(plugins: Object = {}): void {
    Object.keys(plugins).forEach((name) => {
      // If the plugin is already exists in the registry we are updating his config
      const plugin = this._pluginManager.get(name);
      if (plugin) {
        plugin.updateConfig(plugins[name]);
        this._config.plugins[name] = plugin.getConfig();
      } else {
        // We allow to load plugins as long as the player has no engine
        if (!this._engine) {
          this._pluginManager.load(name, this, plugins[name]);
          let plugin = this._pluginManager.get(name);
          if (plugin) {
            this._config.plugins[name] = plugin.getConfig();
            if (typeof plugin.getMiddlewareImpl === "function") {
              this._playbackMiddleware.use(plugin.getMiddlewareImpl());
            }
          }
        } else {
          delete this._config.plugins[name];
        }
      }
    });
  }

  /**
   * Resets the player in case of new sources with existing engine.
   * @private
   * @returns {void}
   */
  _maybeResetPlayer(): void {
    if (this._engine) {
      Player._logger.debug('New sources on existing engine: reset engine to change media');
      this._reset();
    }
  }

  /**
   * Selects an engine to play a source according to a given stream priority.
   * @return {boolean} - Whether a proper engine was found to play the given sources
   * according to the priority.
   * @private
   */
  _selectEngineByPriority(): boolean {
    const streamPriority = this._config.playback.streamPriority;
    const preferNative = this._config.playback.preferNative;
    const sources = this._config.sources;
    for (let priority of streamPriority) {
      const engineId = (typeof priority.engine === 'string') ? priority.engine.toLowerCase() : '';
      const format = (typeof priority.format === 'string') ? priority.format.toLowerCase() : '';
      const engine = Player._engines.find((engine) => engine.id === engineId);
      if (engine) {
        const formatSources = sources[format];
        if (formatSources && formatSources.length > 0) {
          const source = formatSources[0];
          if (engine.canPlaySource(source, preferNative[format])) {
            Player._logger.debug('Source selected: ', formatSources);
            this._engineType = engineId;
            this._streamType = format;
            this._loadEngine(engine, source);
            this.dispatchEvent(new FakeEvent(CustomEvents.SOURCE_SELECTED, {selectedSource: formatSources}));
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
      this._eventManager.listen(this._engine, CustomEvents.TEXT_CUE_CHANGED, (event: FakeEvent) => this._onCueChange(event));
      this._eventManager.listen(this._engine, CustomEvents.ABR_MODE_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this, Html5Events.PLAY, this._onPlay.bind(this));
      this._eventManager.listen(this, Html5Events.ENDED, this._onEnded.bind(this));
    }
  }

  /**
   * Handles the playback config.
   * @returns {void}
   * @private
   */
  _handlePlaybackConfig(): void {
    if (this._config.playback) {
      if (typeof this._config.playback.volume === 'number') {
        this.volume = this._config.playback.volume;
      }
      if (typeof this._config.playback.muted === 'boolean') {
        this.muted = this._config.playback.muted;
      }
      if (typeof this._config.playback.playsinline === 'boolean') {
        this.playsinline = this._config.playback.playsinline;
      }
      if (this._config.playback.preload === "auto") {
        /**
         * If ads plugin enabled it's his responsibility to preload the content player.
         * So to avoid loading the player twice which can cause errors on MSEs we are not
         * calling load from the player.
         * TODO: Change it to check the ads configuration when we will develop the ads manager.
         */
        if (!this._config.plugins.ima) {
          this.load();
        }
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
    if (device) {
      return (os === 'iOS') ? this.muted && this.playsinline : this.muted;
    }
    return true;
  }

  /**
   * Start/resume the engine playback.
   * @private
   * @returns {void}
   */
  _play(): void {
    if (this._engine.src) {
      if (this.isLive() && !this.isDvr()) {
        this.seekToLiveEdge();
      }
      this._engine.play();
    } else {
      this.load();
      this.ready().then(() => {
        this._engine.play();
      });
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
   * @function _onPlay
   * @return {void}
   * @private
   */
  _onPlay(): void {
    if (this._firstPlay) {
      this._firstPlay = false;
      this.dispatchEvent(new FakeEvent(CustomEvents.FIRST_PLAY));
      this._posterManager.hide();
    }
  }

  /**
   * @function _onEnded
   * @return {void}
   * @private
   */
  _onEnded(): void {
    if (!this.paused) {
      this._pause();
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
    this._textDisplaySettings = {};
    this._activeTextCues = [];
    this._firstPlay = true;
    this._eventManager.removeAll();
    this._createReadyPromise();
  }

  /**
   * @returns {Object} - The default configuration of the player.
   * @private
   * @static
   */
  static get _defaultConfig(): Object {
    return Utils.Object.copyDeep(DefaultPlayerConfig);
  }

  // </editor-fold>

  // <editor-fold desc="Tracks">

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
   * Mark the selected track as active
   * @function _markActiveTrack
   * @param {Track} track - the track to mark
   * @returns {void}
   * @private
   */
  _markActiveTrack(track: Track): void {
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
   * handle text cue change
   * @param {FakeEvent} event - the cue change event payload
   * @private
   * @returns {void}
   */
  _onCueChange(event: FakeEvent): void {
    Player._logger.debug('Text cue changed', event.payload.cues);
    this._activeTextCues = event.payload.cues;
    this._updateCueDisplaySettings();
    this._updateTextDisplay(this._activeTextCues)
  }

  /**
   * update the text cue display settings
   * @private
   * @returns {void}
   */
  _updateCueDisplaySettings(): void {
    const activeCues = this._activeTextCues;
    const settings = this._textDisplaySettings;
    for (let i = 0; i < activeCues.length; i++) {
      let cue = activeCues[i];
      for (let name in settings) {
        cue[name] = settings[name];
      }
    }
  }

  /**
   * update the text display
   * @param {Array<Cue>} cues - list of cues
   * @private
   * @returns {void}
   */
  _updateTextDisplay(cues: Array<Cue>): void {
    if (this._textDisplayEl === undefined) {
      this._textDisplayEl = Utils.Dom.createElement("div");
      Utils.Dom.addClassName(this._textDisplayEl, SUBTITLES_CLASS_NAME);
      Utils.Dom.appendChild(this._el, this._textDisplayEl);
    }
    processCues(window, cues, this._textDisplayEl);
  }

  /**
   * Add off text track if there are actual text tracks associated with media
   * setting this track is the same as calling Player's hideTextTrack
   * @private
   * @returns {void}
   */
  _addTextTrackOffOption(): void {
    const textTracks = this.getTracks(TrackTypes.TEXT);
    if (textTracks && textTracks.length) {
      this._tracks.push(new TextTrack({
        active: false,
        index: textTracks.length,
        kind: "subtitles",
        label: "Off",
        language: "off"
      }));
    }
  }

  /**
   * Sets the default tracks defined in the player config.
   * @returns {void}
   * @private
   */
  _setDefaultTracks(): void {
    const activeTracks = this.getActiveTracks();
    const playbackConfig = this._config.playback;

    this.hideTextTrack();

    const textLanguage = (playbackConfig.textLanguage === "auto") ? Locale.language : playbackConfig.textLanguage;
    this._setDefaultTrack(TrackTypes.TEXT, textLanguage, activeTracks.text);
    this._setDefaultTrack(TrackTypes.AUDIO, playbackConfig.audioLanguage, activeTracks.audio);
  }

  /**
   * Sets a specific default track.
   * @param {string} type - The track type.
   * @param {string} language - The track language.
   * @param {Track} defaultTrack - The default track to set in case there in case no language configured.
   * @returns {void}
   * @private
   */
  _setDefaultTrack(type: string, language: string, defaultTrack: Track): void {
    if (language) {
      const track: ?Track = this._getTracksByType(type).find(track => track.language === language);
      if (track) {
        this.selectTrack(track);
      }
    } else if (defaultTrack) {
      this.selectTrack(defaultTrack);
    }
  }

  // </editor-fold>

  // </editor-fold>

  // <editor-fold desc="Enums">

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
