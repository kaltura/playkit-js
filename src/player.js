//@flow
import EventManager from './event/event-manager'
import FakeEvent from './event/fake-event'
import FakeEventTarget from './event/fake-event-target'
import {EventType} from './event/event-type'
import {StateType} from './state/state-type'
import * as Utils from './utils/util'
import LoggerFactory from './utils/logger'
import Html5 from './engines/html5/html5'
import PluginManager from './plugin/plugin-manager'
import BasePlugin from './plugin/base-plugin'
import StateManager from './state/state-manager'
import {TrackType} from './track/track-type'
import Track from './track/track'
import VideoTrack from './track/video-track'
import AudioTrack from './track/audio-track'
import TextTrack from './track/text-track'
import PlaybackMiddleware from './middleware/playback-middleware'
import DefaultPlayerConfig from './player-config.json'
import UAParser from 'ua-parser-js'
import './assets/style.css'

/**
 * @namespace Player
 * @class Player
 * @memberof Classes
 */
export default class Player extends FakeEventTarget {
  static CONTAINER_CLASS_NAME: string = 'playkit-container';
  static _logger: any = LoggerFactory.getLogger('Player');
  static _engines: Array<typeof IEngine> = [Html5];
  _pluginManager: PluginManager;
  _eventManager: EventManager;
  _config: Object;
  _engine: IEngine;
  _stateManager: StateManager;
  _tracks: Array<Track>;
  _readyPromise: ?Promise<*>;
  _firstPlay: boolean;
  _el: HTMLDivElement;
  _playbackMiddleware: PlaybackMiddleware;
  _env: Object;

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
   * @param {Object} config
   * @returns {void}
   * @memberof Classes.Player
   * @instance
   * @public
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
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
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
   * @return {HTMLElement}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  getView(): HTMLElement {
    return this._el;
  }

  /**
   * @function getTracks
   * @param {string | null} type
   * @returns {Array<Track>}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  getTracks(type: ?string): Array<Track> {
    return this._getTracksByType(type);
  }

  /**
   * @function getActiveTracks
   * @return {Object}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  getActiveTracks(): Object {
    return {
      video: this._getTracksByType(TrackType.VIDEO).find(track => track.active),
      audio: this._getTracksByType(TrackType.AUDIO).find(track => track.active),
      text: this._getTracksByType(TrackType.TEXT).find(track => track.active),
    };
  }

  /**
   * @function selectTrack
   * @param {Track} track
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
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
   * @function hideTextTrack
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  hideTextTrack(): void {
    if (this._engine) {
      this._engine.hideTextTrack();
      this._getTracksByType(TrackType.TEXT).map(track => track.active = false);
    }
  }

  /**
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  enableAdaptiveBitrate(): void {
    if (this._engine) {
      this._engine.enableAdaptiveBitrate();
    }
  }

  /**
   * @function isAdaptiveBitrateEnabled
   * @returns {boolean}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  isAdaptiveBitrateEnabled(): boolean {
    if (this._engine) {
      return this._engine.isAdaptiveBitrateEnabled();
    }
    return false;
  }

  /**
   * @function getVideoElement
   * @returns {HTMLVideoElement}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  getVideoElement(): ?HTMLVideoElement {
    if (this._engine) {
      return this._engine.getVideoElement();
    }
  }

  /**
   * @function skipAd
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  skipAd(): void {
    let adsPlugin: ?BasePlugin = this._pluginManager.get('ima');
    if (adsPlugin && typeof adsPlugin.skipAd === 'function') {
      adsPlugin.skipAd();
    }
  }

  /**
   * @function playAdNow
   * @param {string} adTagUrl
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  playAdNow(adTagUrl: string): void {
    let adsPlugin: ?BasePlugin = this._pluginManager.get('ima');
    if (adsPlugin && typeof adsPlugin.playAdNow === 'function') {
      adsPlugin.playAdNow(adTagUrl);
    }
  }

  /**
   * @returns {Object}
   * @public
   * @readonly
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get env(): Object {
    return this._env;
  }

  /**
   * @returns {Object}
   * @readonly
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get config(): Object {
    return Utils.Object.mergeDeep({}, this._config);
  }

  /**
   * @param {string} sessionId
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  set sessionId(sessionId: string): void {
    this._config.session = this._config.session || {};
    this._config.session.id = sessionId;
  }

  //  <editor-fold desc="Playback Interface">
  /**
   * @returns {Promise<*>}
   * @function ready
   * @memberof Classes.Player
   * @public
   * @instance
   */
  ready(): Promise<*> {
    return this._readyPromise ? this._readyPromise : Promise.resolve();
  }

  /**
   * @function load
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  load(): void {
    if (this._engine) {
      let startTime = this._config.playback.startTime;
      this._engine.load(startTime).then((data) => {
        this._tracks = data.tracks;
        this.dispatchEvent(new FakeEvent(EventType.Player.TRACKS_CHANGED, {tracks: this._tracks}));
      }).catch((error) => {
        this.dispatchEvent(new FakeEvent(EventType.Html5.ERROR, error));
      });
    }
  }

  /**
   * @function play
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  play(): void {
    if (this._engine) {
      this._playbackMiddleware.play(this._play.bind(this));
    }
  }

  /**
   * @function pause
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  pause(): void {
    if (this._engine) {
      this._playbackMiddleware.pause(this._pause.bind(this));
    }
  }

  /**
   * @param {number} to
   * @memberof Classes.Player
   * @public
   * @instance
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
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get currentTime(): ?number {
    if (this._engine) {
      return this._engine.currentTime;
    }
  }

  /**
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get duration(): ?number {
    if (this._engine) {
      return this._engine.duration;
    }
  }

  /**
   * @param {number} vol
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
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
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get volume(): ?number {
    if (this._engine) {
      return this._engine.volume;
    }
  }

  /**
   * @param {number} rate
   * @memberof Classes.Player
   * @public
   * @instance
   */
  set playbackRate(rate: number): void {
    if (this._engine) {
      this._engine.playbackRate = rate;
    }
  }

  /**
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get playbackRate(): ?number {
    if (this._engine) {
      return this._engine.playbackRate;
    }
  }

  /**
   * @returns {TimeRanges | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get seekable(): ?TimeRanges {
    if (this._engine) {
      return this._engine.seekable;
    }
  }

  /**
   * @returns {TimeRanges | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get buffered(): ?TimeRanges {
    if (this._engine) {
      return this._engine.buffered;
    }
  }

  /**
   * @returns {boolean | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get defaultMuted(): ?boolean {
    if (this._engine) {
      return this._engine.defaultMuted;
    }
  }

  /**
   * @param {string} poster
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  set poster(poster: string): void {
    if (this._engine) {
      this._engine.poster = poster;
    }
  }

  /**
   * @returns {poster | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get poster(): ?string {
    if (this._engine) {
      return this._engine.poster;
    }
  }

  /**
   * @param {boolean} loop
   * @memberof Classes.Player
   * @public
   * @instance
   * @returns {void}
   */
  set loop(loop: boolean) {
    if (this._engine) {
      this._engine.loop = loop;
    }
  }

  /**
   * @returns {boolean | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get loop(): ?boolean {
    if (this._engine) {
      return this._engine.loop;
    }
  }

  /**
   * @param {boolean} controls
   * @memberof Classes.Player
   * @public
   * @instance
   * @returns {void}
   */
  set controls(controls: boolean): void {
    if (this._engine) {
      this._engine.controls = controls;
    }
  }

  /**
   * @returns {boolean | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get controls(): ?boolean {
    if (this._engine) {
      return this._engine.controls;
    }
  }

  /**
   * @param {number} defaultPlaybackRate
   * @memberof Classes.Player
   * @public
   * @instance
   * @returns {void}
   */
  set defaultPlaybackRate(defaultPlaybackRate: number) {
    if (this._engine) {
      this._engine.defaultPlaybackRate = defaultPlaybackRate;
    }
  }

  /**
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get defaultPlaybackRate(): ?number {
    if (this._engine) {
      return this._engine.defaultPlaybackRate;
    }
  }

  /**
   * @returns {MediaError | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get error(): ?MediaError {
    if (this._engine) {
      return this._engine.error;
    }
  }

  /**
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get videoHeight(): ?number {
    if (this._engine) {
      return this._engine.videoHeight;
    }
  }

  /**
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get videoWidth(): ?number {
    if (this._engine) {
      return this._engine.videoWidth;
    }
  }

  /**
   * @returns {void}
   * @param {boolean} playsinline
   * @memberof Classes.Player
   * @public
   * @instance
   */
  set playsinline(playsinline: boolean): void {
    if (this._engine) {
      this._engine.playsinline = playsinline;
    }
  }

  /**
   * @returns {boolean | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get playsinline(): ?boolean {
    if (this._engine) {
      return this._engine.playsinline;
    }
  }

  // </editor-fold>

  // <editor-fold desc="State">
  /**
   * @returns {boolean | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get paused(): ?boolean {
    if (this._engine) {
      return this._engine.paused;
    }
  }

  /**
   * @returns {boolean | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get ended(): ?boolean {
    if (this._engine) {
      return this._engine.ended;
    }
  }

  /**
   * @returns {TimeRanges | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get played(): ?TimeRanges {
    if (this._engine) {
      return this._engine.played;
    }
  }

  /**
   * @returns {boolean | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get seeking(): ?boolean {
    if (this._engine) {
      return this._engine.seeking;
    }
  }

  /**
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get networkState(): ?number {
    if (this._engine) {
      return this._engine.networkState;
    }
  }

  /**
   * @returns {number | null} - The current ready state of the audio/video.
   * 0 = HAVE_NOTHING - no information whether or not the audio/video is ready.
   * 1 = HAVE_METADATA - metadata for the audio/video is ready.
   * 2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond.
   * 3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available.
   * 4 = HAVE_ENOUGH_DATA - enough data available to start playing.
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get readyState(): ?number {
    if (this._engine) {
      return this._engine.readyState;
    }
  }

  /**
   * @param {boolean} mute
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  set muted(mute: boolean): void {
    if (this._engine) {
      this._engine.muted = mute;
    }
  }

  /**
   * @returns {boolean | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get muted(): ?boolean {
    if (this._engine) {
      return this._engine.muted;
    }
  }

// </editor-fold>

  /**
   * @returns {string | null}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get src(): ?string {
    if (this._engine) {
      return this._engine.src;
    }
  }

  /**
   * @returns {Object}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get Event(): Object {
    return EventType;
  }

  /**
   * @returns {Object}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get State(): Object {
    return StateType;
  }

  /**
   * @returns {Object}
   * @memberof Classes.Player
   * @public
   * @instance
   */
  get Track(): Object {
    return TrackType;
  }

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

  _pause(): void {
    this._engine.pause();
  }

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

  _selectEngine(): boolean {
    if (this._config.sources && this._config.playback && this._config.playback.streamPriority) {
      return this._selectEngineByPriority();
    }
    return false;
  }

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
            Player._logger.debug('Source selected: ', formatSources);
            this._loadEngine(engine, source);
            this.dispatchEvent(new FakeEvent(EventType.Player.SOURCE_SELECTED, {selectedSource: formatSources}));
            return true;
          }
        }
      }
    }
    Player._logger.warn("No playable engines was found to play the given sources");
    return false;
  }

  _loadEngine(engine: typeof IEngine, source: Source): void {
    this._engine = engine.createEngine(source, this._config);
  }

  _attachMedia(): void {
    if (this._engine) {
      for (let html5Event in EventType.Html5) {
        this._eventManager.listen(this._engine, EventType.Html5[html5Event], (event: FakeEvent) => {
          return this.dispatchEvent(event);
        });
      }
      this._eventManager.listen(this._engine, EventType.Player.VIDEO_TRACK_CHANGED, (event: FakeEvent) => {
        this._markActiveTrack(event.payload.selectedVideoTrack);
        return this.dispatchEvent(event);
      });
      this._eventManager.listen(this._engine, EventType.Player.AUDIO_TRACK_CHANGED, (event: FakeEvent) => {
        this._markActiveTrack(event.payload.selectedAudioTrack);
        return this.dispatchEvent(event);
      });
      this._eventManager.listen(this._engine, EventType.Player.TEXT_TRACK_CHANGED, (event: FakeEvent) => {
        this._markActiveTrack(event.payload.selectedTextTrack);
        return this.dispatchEvent(event);
      });
      this._eventManager.listen(this._engine, EventType.Player.ABR_MODE_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this, EventType.Html5.PLAY, this._onPlay.bind(this));
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

  _createPlayerContainer(): void {
    this._el = Utils.Dom.createElement("div");
    this._el.id = Utils.Generator.uniqueId(5);
    this._el.className = Player.CONTAINER_CLASS_NAME;
    this._el.setAttribute('tabindex', '-1');
  }

  _appendEngineEl(): void {
    if ((this._el != null) && (this._engine != null)) {
      Utils.Dom.appendChild(this._el, this._engine.getVideoElement());
    }
  }

  _getTracksByType(type: ?string): Array<Track> {
    return !type ? this._tracks : this._tracks.filter((track: Track) => {
      if (type === TrackType.VIDEO) {
        return track instanceof VideoTrack;
      } else if (type === TrackType.AUDIO) {
        return track instanceof AudioTrack;
      } else if (type === TrackType.TEXT) {
        return track instanceof TextTrack;
      } else {
        return true;
      }
    });
  }

  _markActiveTrack(track: Track) {
    let type;
    if (track instanceof VideoTrack) {
      type = TrackType.VIDEO;
    } else if (track instanceof AudioTrack) {
      type = TrackType.AUDIO;
    } else if (track instanceof TextTrack) {
      type = TrackType.TEXT;
    }
    if (type) {
      let tracks = this.getTracks(type);
      for (let i = 0; i < tracks.length; i++) {
        tracks[i].active = track.index === i;
      }
    }
  }

  _onPlay(): void {
    if (this._firstPlay) {
      this._firstPlay = false;
      this.dispatchEvent(new FakeEvent(EventType.Player.FIRST_PLAY));
    }
  }

  _maybeResetPlayer(config: Object): void {
    if (this._engine && config.sources) {
      Player._logger.debug('New sources on existing engine: reset engine to change media');
      this._reset();
    }
  }

  _maybeLoadPlugins(engine: ?IEngine) {
    if (this._engine && !engine) {
      Player._logger.debug('Engine created for the first time: load plugins');
      this._loadPlugins();
    }
  }

  _reset(): void {
    if (this._engine) {
      this._engine.destroy();
    }
    this._tracks = [];
    this._firstPlay = true;
    this._eventManager.removeAll();
    this._createReadyPromise();
  }

  _createReadyPromise(): void {
    this._readyPromise = new Promise((resolve, reject) => {
      this._eventManager.listen(this, EventType.Player.TRACKS_CHANGED, () => {
        resolve();
      });
      this._eventManager.listen(this, EventType.Html5.ERROR, reject);
    });
  }

  static get _defaultConfig(): Object {
    return Utils.Object.copyDeep(DefaultPlayerConfig);
  }
}
