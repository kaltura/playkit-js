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
   * @example player.destroy();
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
   * @example var playerView = player.getView();
   */
  getView(): HTMLElement {
    return this._el;
  }

  /**
   * @param {string | null} type
   * @returns {Array<Track>}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var tracks = player.getTracks();
   * var audioTracks = player.getTracks(player.Track.AUDIO);
   * var textTracks = player.getTracks(player.Track.TEXT);
   * var videoTracks = player.getTracks(player.Track.VIDEO);
   */
  getTracks(type: ?string): Array<Track> {
    return this._getTracksByType(type);
  }

  /**
   * @return {Object}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var activeTracks = player.getActiveTracks();
   * var activeVideoTrack = activeTracks.video;
   * var activeTextTrack = activeTracks.audio;
   * var activeAudioTrack = activeTracks.text;
   */
  getActiveTracks(): Object {
    return {
      video: this._getTracksByType(TrackType.VIDEO).find(track => track.active),
      audio: this._getTracksByType(TrackType.AUDIO).find(track => track.active),
      text: this._getTracksByType(TrackType.TEXT).find(track => track.active),
    };
  }

  /**
   * @param {Track} track
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var audioTracks = player.getTracks(player.Track.AUDIO);
   * var textTracks = player.getTracks(player.Track.TEXT);
   * var videoTracks = player.getTracks(player.Track.VIDEO);
   * player.selectTrack(videoTracks[1]);
   * player.selectTrack(audioTracks[0]);
   * player.selectTrack(videoTracks[3]);
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
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var activeTracks = player.getActiveTracks();
   * if (activeTracks.text) {
   *    player.hideTextTrack();
   * }
   */
  hideTextTrack(): void {
    if (this._engine) {
      this._engine.hideTextTrack();
      this._getTracksByType(TrackType.TEXT).map(track => track.active = false);
    }
  }

  /**
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * player.enableAdaptiveBitrate();
   */
  enableAdaptiveBitrate(): void {
    if (this._engine) {
      this._engine.enableAdaptiveBitrate();
    }
  }

  /**
   * @returns {boolean}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * if (!player.isAdaptiveBitrateEnabled()) {
   *    player.enableAdaptiveBitrate();
   * }
   */
  isAdaptiveBitrateEnabled(): boolean {
    if (this._engine) {
      return this._engine.isAdaptiveBitrateEnabled();
    }
    return false;
  }

  /**
   * @returns {HTMLVideoElement}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var videoElement = player.getVideoElement();
   */
  getVideoElement(): ?HTMLVideoElement {
    if (this._engine) {
      return this._engine.getVideoElement();
    }
  }

  /**
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * player.addEventListener(player.Event.Ads.AD_STARTED, function(event) {
   *    player.skipAd();
   * }
   */
  skipAd(): void {
    let adsPlugin: ?BasePlugin = this._pluginManager.get('ima');
    if (adsPlugin && typeof adsPlugin.skipAd === 'function') {
      adsPlugin.skipAd();
    }
  }

  /**
   * @param {string} adTagUrl
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * // WIP
   * var adTagUrl = '...';
   * player.playAdNow(adTagUrl);
   */
  playAdNow(adTagUrl: string): void {
    let adsPlugin: ?BasePlugin = this._pluginManager.get('ima');
    if (adsPlugin && typeof adsPlugin.playAdNow === 'function') {
      adsPlugin.playAdNow(adTagUrl);
    }
  }

  /**
   * @description getter
   * @readonly
   * @returns {Object}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var playerEnv = player.env;
   * console.log(playerEnv.os);
   * console.log(playerEnv.device);
   * console.log(playerEnv.browser);
   */
  get env(): Object {
    return this._env;
  }

  /**
   * @description getter
   * @returns {Object}
   * @readonly
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var playerConfig = player.config;
   * if (player.config.playback && player.config.playback.autoplay) {
   *    // Write your logic...
   * }
   */
  get config(): Object {
    return Utils.Object.mergeDeep({}, this._config);
  }

  /**
   * @description setter
   * @param {string} sessionId
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * player.sessionId = '...';
   */
  set sessionId(sessionId: string): void {
    this._config.session = this._config.session || {};
    this._config.session.id = sessionId;
  }

  //  <editor-fold desc="Playback Interface">
  /**
   * @returns {Promise<*>}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * player.ready().then(function() {
   *    var tracks = player.getTracks();
   * });
   */
  ready(): Promise<*> {
    return this._readyPromise ? this._readyPromise : Promise.resolve();
  }

  /**
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * if (player.config.playback.preload === 'none') {
   *    player.load();
   * }
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
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var player = loadPlayer('target-id', {...});
   * player.play();
   */
  play(): void {
    if (this._engine) {
      this._playbackMiddleware.play(this._play.bind(this));
    }
  }

  /**
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * if (!player.paused) {
   *    player.pause();
   * }
   */
  pause(): void {
    if (this._engine) {
      this._playbackMiddleware.pause(this._pause.bind(this));
    }
  }

  /**
   * @description setter
   * @param {number} to
   * @memberof Classes.Player
   * @public
   * @instance
   * @example player.currentTime = 10;
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
   * @description getter
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var ct = player.currentTime;
   */
  get currentTime(): ?number {
    if (this._engine) {
      return this._engine.currentTime;
    }
  }

  /**
   * @description getter
   * @readonly
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var duration = player.duration;
   */
  get duration(): ?number {
    if (this._engine) {
      return this._engine.duration;
    }
  }

  /**
   * @description setter
   * @param {number} vol
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * player.volume = 0.5;
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
   * @description getter
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var vol = player.volume;
   */
  get volume(): ?number {
    if (this._engine) {
      return this._engine.volume;
    }
  }

  /**
   * @description setter
   * @param {number} rate
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * player.playbackRate = 2;
   */
  set playbackRate(rate: number): void {
    if (this._engine) {
      this._engine.playbackRate = rate;
    }
  }

  /**
   * @description getter
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var pr = player.playbackRate;
   */
  get playbackRate(): ?number {
    if (this._engine) {
      return this._engine.playbackRate;
    }
  }

  /**
   * @description getter
   * @readonly
   * @returns {TimeRanges | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var seekable = player.seekable;
   */
  get seekable(): ?TimeRanges {
    if (this._engine) {
      return this._engine.seekable;
    }
  }

  /**
   * @description getter
   * @readonly
   * @returns {TimeRanges | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var buffered = player.buffered;
   */
  get buffered(): ?TimeRanges {
    if (this._engine) {
      return this._engine.buffered;
    }
  }

  /**
   * @description getter
   * @readonly
   * @returns {boolean | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var dm = player.defaultMuted;
   */
  get defaultMuted(): ?boolean {
    if (this._engine) {
      return this._engine.defaultMuted;
    }
  }

  /**
   * @description getter
   * @readonly
   * @returns {MediaError | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var error = player.error;
   */
  get error(): ?MediaError {
    if (this._engine) {
      return this._engine.error;
    }
  }

  /**
   * @description getter
   * @readonly
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var videoHeight = player.videoHeight;
   */
  get videoHeight(): ?number {
    if (this._engine) {
      return this._engine.videoHeight;
    }
  }

  /**
   * @description getter
   * @readonly
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var videoWidth = player.videoWidth;
   */
  get videoWidth(): ?number {
    if (this._engine) {
      return this._engine.videoWidth;
    }
  }

  /**
   * @description setter
   * @returns {void}
   * @param {boolean} playsinline
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * player.playsinline = true;
   */
  set playsinline(playsinline: boolean): void {
    if (this._engine) {
      this._engine.playsinline = playsinline;
    }
  }

  /**
   * @description getter
   * @returns {boolean | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var playsinline = player.playsinline;
   */
  get playsinline(): ?boolean {
    if (this._engine) {
      return this._engine.playsinline;
    }
  }

  // </editor-fold>

  // <editor-fold desc="State">
  /**
   * @description getter
   * @readonly
   * @returns {boolean | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var paused = player.paused;
   */
  get paused(): ?boolean {
    if (this._engine) {
      return this._engine.paused;
    }
  }

  /**
   * @description getter
   * @readonly
   * @returns {boolean | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var ended = player.ended;
   */
  get ended(): ?boolean {
    if (this._engine) {
      return this._engine.ended;
    }
  }

  /**
   * @description getter
   * @readonly
   * @returns {TimeRanges | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var played = player.played;
   */
  get played(): ?TimeRanges {
    if (this._engine) {
      return this._engine.played;
    }
  }

  /**
   * @description getter
   * @readonly
   * @returns {boolean | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var seeking = player.seeking;
   */
  get seeking(): ?boolean {
    if (this._engine) {
      return this._engine.seeking;
    }
  }

  /**
   * @description getter
   * @readonly
   * @returns {number | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var networkState = player.networkState;
   */
  get networkState(): ?number {
    if (this._engine) {
      return this._engine.networkState;
    }
  }

  /**
   * @description getter
   * @readonly
   * @returns {number | null} - The current ready state of the audio/video.
   * 0 = HAVE_NOTHING - no information whether or not the audio/video is ready.
   * 1 = HAVE_METADATA - metadata for the audio/video is ready.
   * 2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond.
   * 3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available.
   * 4 = HAVE_ENOUGH_DATA - enough data available to start playing.
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var readyState = player.readyState;
   */
  get readyState(): ?number {
    if (this._engine) {
      return this._engine.readyState;
    }
  }

  /**
   * @description setter
   * @param {boolean} mute
   * @returns {void}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * player.muted = true;
   */
  set muted(mute: boolean): void {
    if (this._engine) {
      this._engine.muted = mute;
    }
  }

  /**
   * @description getter
   * @returns {boolean | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var muted = player.muted;
   */
  get muted(): ?boolean {
    if (this._engine) {
      return this._engine.muted;
    }
  }

// </editor-fold>

  /**
   * @description getter
   * @readonly
   * @returns {string | null}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * var src = player.src;
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
   * @example
   * player.Event.Html5.PLAYING;
   * player.Event.Ads.AD_LOADED;
   * player.Event.Player.ABR_MODE_CHANGED;
   */
  get Event(): Object {
    return Utils.Object.copyDeep(EventType);
  }

  /**
   * @returns {Object}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * player.State.PLAYING
   */
  get State(): Object {
    return Utils.Object.copyDeep(StateType);
  }

  /**
   * @returns {Object}
   * @memberof Classes.Player
   * @public
   * @instance
   * @example
   * player.Track.AUDIO;
   */
  get Track(): Object {
    return Utils.Object.copyDeep(TrackType);
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
