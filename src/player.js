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
import getLogger, {LogLevel, getLogLevel, setLogLevel} from './utils/logger'
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
 * The player playback rates.
 * @type {Array<number>}
 * @const
 */
const PLAYBACK_RATES = [0.5, 1, 2, 4];

/**
 * The player default playback rate.
 * @type {number}
 * @const
 */
const DEFAULT_PLAYBACK_RATE = 1;

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
const LIVE: string = 'Live';

/**
 *  The auto string, for captions
 *  @type {string}
 *  @const
 */
const AUTO: string = 'auto';

/**
 *  The off string, for captions
 *  @type {string}
 *  @const
 */
const OFF: string = 'off';

/**
 *  The duration offset, for seeking to duration safety.
 *  @type {number}
 *  @const
 */
const DURATION_OFFSET: number = 0.1;

/**
 * The toggle fullscreen rendering timeout value
 * @type {number}
 * @const
 */
const REPOSITION_CUES_TIMEOUT: number = 1000;

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
  static _logger: any = getLogger('Player');
  /**
   * The available engines of the player.
   * @type {Array<typeof IEngine>}
   * @private
   * @static
   */
  static _engines: Array<typeof IEngine> = [Html5];
  /**
   * The player capabilities result object.
   * @type {Object}
   * @private
   * @static
   */
  static _playerCapabilities: Object;

  /**
   * Runs the engines capabilities tests.
   * @returns {void}
   * @public
   * @static
   */
  static runCapabilities(): void {
    Player._logger.debug("Running player capabilities");
    Player._engines.forEach(Engine => Engine.runCapabilities());
  }

  /**
   * Gets the engines capabilities.
   * @param {?string} engineType - The engine type.
   * @return {Promise<Object>} - The engines capabilities object.
   * @public
   * @static
   */
  static getCapabilities(engineType: ?string): Promise<Object> {
    Player._logger.debug("Get player capabilities", engineType);
    if (Player._playerCapabilities) {
      return (engineType ? Promise.resolve(Player._playerCapabilities[engineType]) : Promise.resolve(Player._playerCapabilities));
    }
    let promises = [];
    Player._engines.forEach(Engine => promises.push(Engine.getCapabilities()));
    return Promise.all(promises)
      .then((arrayOfResults) => {
        Player._playerCapabilities = {};
        arrayOfResults.forEach(res => Object.assign(Player._playerCapabilities, res));
        return (engineType ? Promise.resolve(Player._playerCapabilities[engineType]) : Promise.resolve(Player._playerCapabilities));
      });
  }

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
   * Flag to indicate whether is the first play in the current session.
   * @type {boolean}
   * @private
   */
  _firstPlayInCurrentSession: boolean;
  /**
   * The current playback attributes state
   * @type {Object}
   * @private
   */
  _playbackAttributesState: { [attribute: string]: any } = {
    muted: undefined,
    volume: undefined,
    rate: undefined,
    audioLanguage: "",
    textLanguage: ""
  };
  /**
   * Fullscreen indicator flag
   * @private
   */
  _fullscreen: boolean;
  /**
   * holds false or an id for the timeout the reposition the text cues after togelling full screen
   * @type {any}
   * @private
   */
  _repositionCuesTimeout: any;

  /**
   * @param {Object} config - The configuration for the player instance.
   * @constructor
   */
  constructor(config: Object = {}) {
    super();
    this._env = Env;
    this._tracks = [];
    this._firstPlay = true;
    this._fullscreen = false;
    this._firstPlayInCurrentSession = true;
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
    this._repositionCuesTimeout = false;
  }

  // <editor-fold desc="Public API">

  // <editor-fold desc="Playback API">

  /**
   * Configures the player according to a given configuration.
   * @param {Object} config - The configuration for the player instance.
   * @returns {void}
   */
  configure(config: Object): void {
    if (config.logLevel && LogLevel[config.logLevel]) {
      setLogLevel(LogLevel[config.logLevel]);
    }
    Utils.Object.mergeDeep(this._config, config);
    this._configureOrLoadPlugins(config.plugins);
    if (!Utils.Object.isEmptyObject(config.sources)) {
      const receivedSourcesWhenHasEngine: boolean = !!this._engine;
      if (receivedSourcesWhenHasEngine) {
        this._reset();
        Player._logger.debug('Change source started');
        this.dispatchEvent(new FakeEvent(CustomEvents.CHANGE_SOURCE_STARTED));
      }
      if (this._selectEngineByPriority()) {
        this._appendEngineEl();
        this._attachMedia();
        this._handlePlaybackOptions();
        this._posterManager.setSrc(this._config.metadata.poster);
        this._handleAutoPlay();
        if (receivedSourcesWhenHasEngine) {
          Player._logger.debug('Change source ended');
          this.dispatchEvent(new FakeEvent(CustomEvents.CHANGE_SOURCE_ENDED));
        }
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
    let loadCommand = function() {
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
    }.bind(this);

    if (this._engine){
      this._playbackMiddleware.load( loadCommand.bind(this) );
    }
  }

  /**
   * Start/resume playback.
   * @returns {void}
   * @public
   */
  play(): void {
    let playCommand = function () {
      if ( this._engine ) {
        this._playbackMiddleware.play( this._play.bind( this ) );
      }
    }.bind(this);

    if ( this.muted || !this._firstPlayInCurrentSession || !this._firstPlay ) {
      playCommand();
    } else {
      const allowMutedAutoPlay = this._config.playback.allowMutedAutoPlay;
      Player.getCapabilities( this.engineType )
        .then( ( capabilities ) => {
          if ( capabilities.autoplay ) {
            Player._logger.debug( "Start playing" );
            playCommand();
          } else {
            if ( allowMutedAutoPlay ) {
              Player._logger.debug( "Fallback to muted playback" );
              this.muted = true;
              playCommand();
              this.dispatchEvent( new FakeEvent( CustomEvents.FALLBACK_TO_MUTED_AUTOPLAY ) );
            } else {
              Player._logger.warn( "Play failed, pause player" );
              this._posterManager.show();
              this.load();
              this.ready().then( () => this.pause() );
              this.dispatchEvent( new FakeEvent( CustomEvents.AUTOPLAY_FAILED ) );
            }
          }
        } );
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
    this.dispatchEvent(new FakeEvent(CustomEvents.PLAYER_DESTROY));
    if (this._engine) {
      this._engine.destroy();
    }
    this._posterManager.destroy();
    this._eventManager.destroy();
    this._pluginManager.destroy();
    this._stateManager.destroy();
    this._activeTextCues = [];
    this._textDisplaySettings = {};
    this._config = {};
    this._tracks = [];
    this._engineType = '';
    this._streamType = '';
    this._readyPromise = null;
    this._firstPlay = true;
    this._playbackAttributesState = {};
    if (this._el) {
      Utils.Dom.removeChild(this._el.parentNode, this._el);
    }
  }

  /**
   * Get the first buffered range of the engine.
   * @returns {TimeRanges} - First buffered range of the engine in seconds.
   * @public
   */
  get buffered(): ?TimeRanges {
    if (this._engine) {
      return this._engine.buffered;
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
        if (boundedTo > this._engine.duration - DURATION_OFFSET) {
          boundedTo = this._engine.duration - DURATION_OFFSET;
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
   * Gets the possible playback speeds of the video.
   * @returns {Array<number>} - The possible playback speeds speed of the video.
   */
  get playbackRates(): Array<number> {
    return PLAYBACK_RATES;
  }

  /**
   * Gets the default playback speed of the video.
   * @returns {number} - The default playback speed of the video.
   */
  get defaultPlaybackRate(): number {
    return DEFAULT_PLAYBACK_RATE;
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
   * @param {?Track} track - the track to select
   * @returns {void}
   * @public
   */
  selectTrack(track: ?Track): void {
    if (this._engine) {
      if (track instanceof VideoTrack) {
        this._engine.selectVideoTrack(track);
      } else if (track instanceof AudioTrack) {
        this._engine.selectAudioTrack(track);
      } else if (track instanceof TextTrack) {
        if (track.language === OFF) {
          this.hideTextTrack();
          this._playbackAttributesState.textLanguage = OFF;
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
      const textTrack = textTracks.find(track => track.language === OFF);
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
      this.dispatchEvent(new FakeEvent(CustomEvents.TEXT_STYLE_CHANGED));
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

  // <editor-fold desc="Fullscreen API">

  /**
   * @returns {boolean} - Whether the player is in fullscreen mode.
   * @public
   */
  isFullscreen(): boolean {
    return this._fullscreen;
  }

  /**
   * Notify the player that the ui application entered to fullscreen.
   * @public
   * @returns {void}
   */
  notifyEnterFullscreen(): void {
    if (!this._fullscreen) {
      this._fullscreen = true;
      this.dispatchEvent(new FakeEvent(CustomEvents.ENTER_FULLSCREEN));
    }
  }

  /**
   * Notify the player that the ui application exited from fullscreen.
   * @public
   * @returns {void}
   */
  notifyExitFullscreen(): void {
    if (this._fullscreen) {
      this._fullscreen = false;
      this.dispatchEvent(new FakeEvent(CustomEvents.EXIT_FULLSCREEN));
    }
  }

  /**
   * Request the player to enter fullscreen.
   * @public
   * @returns {void}
   */
  enterFullscreen(): void {
    if (!this._fullscreen) {
      this.dispatchEvent(new FakeEvent(CustomEvents.REQUESTED_ENTER_FULLSCREEN));
    }
  }

  /**
   * Request the player to exit fullscreen.
   * @public
   * @returns {void}
   */
  exitFullscreen(): void {
    if (this._fullscreen) {
      this.dispatchEvent(new FakeEvent(CustomEvents.REQUESTED_EXIT_FULLSCREEN));
    }
  }

  // </editor-fold>

  // <editor-fold desc="Logger API">

  /**
   * get the log level
   * @param {?string} name - the logger name
   * @returns {Object} - the log level
   */
  getLogLevel(name?: string): Object {
    return getLogLevel(name);
  }

  /**
   * sets the logger level
   * @param {Object} level - the log level
   * @param {?string} name - the logger name
   * @returns {void}
   */
  setLogLevel(level: Object, name?: string) {
    setLogLevel(level, name);
  }

  // </editor-fold>

  // </editor-fold>

  // <editor-fold desc="Private Methods">

  // <editor-fold desc="Playback">

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
    if (plugins) {
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
  }

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
      const Engine = Player._engines.find((Engine) => Engine.id === engineId);
      if (Engine) {
        const formatSources = sources[format];
        if (formatSources && formatSources.length > 0) {
          const source = formatSources[0];
          if (Engine.canPlaySource(source, preferNative[format])) {
            Player._logger.debug('Source selected: ', formatSources);
            this._loadEngine(Engine, source);
            this._engineType = engineId;
            this._streamType = format;
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
   * @param {IEngine} Engine - The selected engine.
   * @param {Source} source - The selected source object.
   * @private
   * @returns {void}
   */
  _loadEngine(Engine: typeof IEngine, source: Source) {
    if (this._engine) {
      if (this._engine.id === Engine.id) {
        this._engine.restore(source, this._config);
      } else {
        this._engine.destroy();
        this._engine = Engine.createEngine(source, this._config);
      }
    } else {
      this._engine = Engine.createEngine(source, this._config);
    }
  }

  /**
   * Listen to all HTML5 defined events and trigger them on the player
   * @private
   * @returns {void}
   */
  _attachMedia(): void {
    if (this._engine) {
      Object.keys(Html5Events).forEach((html5Event) => {
        this._eventManager.listen(this._engine, Html5Events[html5Event], (event: FakeEvent) => {
          return this.dispatchEvent(event);
        });
      });
      this._eventManager.listen(this._engine, Html5Events.SEEKED, () => {
        const browser = this._env.browser.name;
        if (browser === 'Edge' || browser === 'IE') {
          this._removeTextCuePatch();
        }
      });
      this._eventManager.listen(this._engine, CustomEvents.VIDEO_TRACK_CHANGED, (event: FakeEvent) => {
        this._markActiveTrack(event.payload.selectedVideoTrack);
        return this.dispatchEvent(event);
      });
      this._eventManager.listen(this._engine, CustomEvents.AUDIO_TRACK_CHANGED, (event: FakeEvent) => {
        this._playbackAttributesState.audioLanguage = event.payload.selectedAudioTrack.language;
        this._markActiveTrack(event.payload.selectedAudioTrack);
        return this.dispatchEvent(event);
      });
      this._eventManager.listen(this._engine, CustomEvents.TEXT_TRACK_CHANGED, (event: FakeEvent) => {
        this._playbackAttributesState.textLanguage = event.payload.selectedTextTrack.language;
        this._markActiveTrack(event.payload.selectedTextTrack);
        return this.dispatchEvent(event);
      });
      this._eventManager.listen(this._engine, CustomEvents.TEXT_CUE_CHANGED, (event: FakeEvent) => this._onCueChange(event));
      this._eventManager.listen(this._engine, CustomEvents.ABR_MODE_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._engine, CustomEvents.AUTOPLAY_FAILED, (event: FakeEvent) => {
        this.pause();
        this.dispatchEvent(event)
      });
      this._eventManager.listen(this, Html5Events.PLAY, this._onPlay.bind(this));
      this._eventManager.listen(this, Html5Events.ENDED, this._onEnded.bind(this));
      this._eventManager.listen(this, CustomEvents.MUTE_CHANGE, () => {
        this._playbackAttributesState.muted = this.muted;
      });
      this._eventManager.listen(this, Html5Events.VOLUME_CHANGE, () => {
        this._playbackAttributesState.volume = this.volume;
      });
      this._eventManager.listen(this, Html5Events.RATE_CHANGE, () => {
        this._playbackAttributesState.rate = this.playbackRate;
      });
      this._eventManager.listen(this, CustomEvents.ENTER_FULLSCREEN, () => {
        this._resetTextCuesAndReposition();
      });
      this._eventManager.listen(this, CustomEvents.EXIT_FULLSCREEN, () => {
        this._resetTextCuesAndReposition();
      });
    }
  }

  /**
   * Reset the active cues hasBeenReset = true and then reposition it, timeout here is for the screen to
   * finish render the fullscreen
   * @returns {void}
   * @private
   */
  _resetTextCuesAndReposition(): void {
    this._updateTextDisplay([]);
    for (let i = 0; i < this._activeTextCues.length; i++) {
      this._activeTextCues[i].hasBeenReset = true;
    }
    // handling only the last reposition
    if (this._repositionCuesTimeout) {
      clearTimeout(this._repositionCuesTimeout);
    }
    this._repositionCuesTimeout = setTimeout(() => {
      processCues(window, this._activeTextCues, this._textDisplayEl);
      this._repositionCuesTimeout = false;
    }, REPOSITION_CUES_TIMEOUT);
  }

  /**
   * Handles the cue text removal issue, when seeking to a time without captions in IE \ edge the previous captions
   * are not removed
   * @returns {void}
   * @private
   */
  _removeTextCuePatch(): void {
    let filteredActiveTextCues = this._activeTextCues.filter((textCue) => {
      const cueEndTime = textCue._endTime;
      const cueStartTime = textCue._startTime;
      const currTime = this.currentTime;
      if (currTime < cueEndTime && currTime > cueStartTime) {
        return textCue;
      }
    });
    this._updateTextDisplay(filteredActiveTextCues);
  }

  /**
   * Handles the playback options, from current state or config.
   * @returns {void}
   * @private
   */
  _handlePlaybackOptions(): void {
    this._config.playback = this._config.playback || {};
    if (typeof this._playbackAttributesState.muted === 'boolean') {
      this.muted = this._playbackAttributesState.muted;
    } else if (typeof this._config.playback.muted === 'boolean') {
      this.muted = this._config.playback.muted;
    }
    if (typeof this._playbackAttributesState.volume === 'number') {
      this.volume = this._playbackAttributesState.volume;
    } else if (typeof this._config.playback.volume === 'number') {
      this.volume = this._config.playback.volume;
    }
    if (typeof this._config.playback.playsinline === 'boolean') {
      this.playsinline = this._config.playback.playsinline;
    }
    if (this._canPreload()) {
      this.load();
    }
  }

  /**
   * If ads plugin enabled it's his responsibility to preload the content player.
   * So to avoid loading the player twice which can cause errors on MSEs we are not
   * calling load from the player.
   * TODO: Change it to check the ads configuration when we will develop the ads manager.
   * @returns {boolean} - Whether the player should perform preload.
   * @private
   */
  _canPreload(): boolean {
    return (!this._config.playback.autoplay && this._config.playback.preload === "auto" && !this._config.plugins.ima);
  }

  /**
   * Handles auto play.
   * @returns {void}
   * @private
   */
  _handleAutoPlay(): void {
    if (this._config.playback.autoplay === true) {
      this.play();
    } else {
      this._posterManager.show();
    }
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
      if (typeof this._playbackAttributesState.rate === 'number') {
        this.playbackRate = this._playbackAttributesState.rate;
      }
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
   * Resets the necessary components before change media.
   * @private
   * @returns {void}
   */
  _reset(): void {
    this.pause();
    this._posterManager.reset();
    this._stateManager.reset();
    this._pluginManager.reset();
    this._eventManager.removeAll();
    this._activeTextCues = [];
    this._updateTextDisplay([]);
    this._tracks = [];
    this._firstPlay = true;
    this._firstPlayInCurrentSession = false;
    this._engineType = '';
    this._streamType = '';
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
        language: OFF
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
    const playbackConfig = this.config.playback;
    const offTextTrack: ?Track = this._getTracksByType(TrackTypes.TEXT).find(track => TextTrack.langComparer(OFF, track.language));

    this.hideTextTrack();

    let currentOrConfiguredTextLang = this._playbackAttributesState.textLanguage || this._getLanguage(playbackConfig.textLanguage, activeTracks.text, TrackTypes.TEXT);
    let currentOrConfiguredAudioLang = this._playbackAttributesState.audioLanguage || playbackConfig.audioLanguage;
    this._setDefaultTrack(TrackTypes.TEXT, currentOrConfiguredTextLang, offTextTrack);
    this._setDefaultTrack(TrackTypes.AUDIO, currentOrConfiguredAudioLang, activeTracks.audio);
  }

  /**
   * Gets the track language that should be set by default.
   * @param {string} configuredLanguage - The configured language (can be also "auto").
   * @param {Track} defaultTrack - The default track.
   * @param {string} type - The track type.
   * @private
   * @returns {string} - The track language to set by default.
   */
  _getLanguage(configuredLanguage: string, defaultTrack: ?Track, type: string): string {
    let language = configuredLanguage;
    if (language === AUTO) {
      const tracks = this._getTracksByType(type);
      const localeTrack: ?Track = tracks.find(track => Track.langComparer(Locale.language, track.language));
      if (localeTrack) {
        language = localeTrack.language;
      } else if (defaultTrack && defaultTrack.language !== OFF) {
        language = defaultTrack.language;
      } else if (tracks && tracks.length > 0) {
        language = tracks[0].language;
      }
    }
    return language;
  }

  /**
   * Sets a specific default track.
   * @param {string} type - The track type.
   * @param {string} language - The track language.
   * @param {?Track} defaultTrack - The default track to set in case there is no language configured.
   * @returns {void}
   * @private
   */
  _setDefaultTrack(type: string, language: string, defaultTrack: ?Track): void {
    const track: ?Track = this._getTracksByType(type).find(track => Track.langComparer(language, track.language));
    if (track) {
      this.selectTrack(track);
    } else {
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
   * Get the player TextStyle.
   * @returns {TextStyle} - The TextStyle class
   * @public
   */
  get TextStyle(): typeof TextStyle {
    return TextStyle;
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

  /**
   * Get the player log level.
   * @returns {Object} - The log levels of the player.
   * @public
   */
  get LogLevel(): { [level: string]: Object } {
    return LogLevel;
  }

  // </editor-fold>
}
