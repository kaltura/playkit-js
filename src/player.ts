import Env from './utils/env';
import { EventManager } from './event/event-manager';
import PosterManager from './utils/poster-manager';
import { FakeEvent } from './event/fake-event';
import { FakeEventTarget }  from './event/fake-event-target';
import { IEngine, IEngineStatic, LoggerLevels } from './types';
import {CustomEventType, EventType, Html5EventType} from './event/event-type';
import * as Utils from './utils/util';
import Locale from './utils/locale';
import getLogger, {getLogLevel, LogLevel, LogLevelType, setLogHandler, setLogLevel} from './utils/logger';
import StateManager from './state/state-manager';
import Track from './track/track';
import VideoTrack from './track/video-track';
import AudioTrack from './track/audio-track';
import {PKTextTrack} from './track/text-track';
import TextStyle from './track/text-style';
import {processCues} from './track/text-track-display';
import {StateType} from './state/state-type';
import {TrackType,  TrackTypes} from './track/track-type';
import {StreamType} from './engines/stream-type';
import {EngineType} from './engines/engine-type';
import {MediaType} from './enums/media-type';
import {AbrMode} from './track/abr-mode-type';
import {CorsType} from './engines/html5/cors-types';
import PlaybackMiddleware from './middleware/playback-middleware';
import {DefaultConfig, DefaultSources} from './player-config.js';
import './assets/style.css';
import PKError from './error/error';
import {EngineProvider} from './engines/engine-provider';
import {ExternalCaptionsHandler} from './track/external-captions-handler';
import {AdBreakType} from './ads/ad-break-type';
import {AdTagType} from './ads/ad-tag-type';
import {ResizeWatcher, getSubtitleStyleSheet, resetSubtitleStyleSheet} from './utils';
import {FullscreenController} from './fullscreen/fullscreen-controller';
import {EngineDecorator, EngineDecoratorType} from './engines/engine-decorator';
import {LabelOptions} from './track/label-options';
import {AutoPlayType} from './enums/auto-play-type';
import ImageTrack from './track/image-track';
import {ThumbnailInfo} from './thumbnail/thumbnail-info';
import {EngineDecoratorManager} from './engines/engine-decorator-manager';
import {filterTracksByRestriction} from './utils/restrictions';
import {ExternalThumbnailsHandler} from './thumbnail/external-thumbnails-handler';
import {
  IEngineDecoratorProvider, PKDimensionsConfig, PKDrmDataObject,
  PKEventTypes, PKMediaSourceObject,
  PKMetadataConfigObject, PKPlayerDimensions, PKPlayOptionsObject,
  PKSourcesConfigObject, PKStatsObject,
  PKTextTrackDisplaySettingObject
} from './types';
import {ILogger, ILogLevel} from 'js-logger';
import {IEnv} from './types/ua-parser';

/**
 * The black cover class name.
 * @type {string}
 * @const
 */
const BLACK_COVER_CLASS_NAME: string = 'playkit-black-cover';
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
 * The subtitles class name.
 * @type {string}
 * @const
 */
const SUBTITLES_CLASS_NAME: string = 'playkit-subtitles';

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
 * The threshold in seconds from duration that we still consider it as live edge
 * @type {number}
 * @const
 */
const LIVE_EDGE_THRESHOLD: number = 1;

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
  public static _logger: ILogger = getLogger('Player');

  /**
   * Runs the engines capabilities tests.
   * @returns {void}
   * @public
   * @static
   */
  public static runCapabilities(): void {
    Player._logger.debug('Running player capabilities');
    EngineProvider.getEngines().forEach(Engine => Engine.runCapabilities());
  }

  /**
   * Gets the engines capabilities.
   * @param {?string} engineType - The engine type.
   * @return {Promise<Object>} - The engines capabilities object.
   * @public
   * @static
   */
  public static getCapabilities(engineType?: string): Promise<{[name: string]: any}> {
    Player._logger.debug('Get player capabilities', engineType);
    const promises: {[name: string]: any}[] = [];
    EngineProvider.getEngines().forEach(Engine => promises.push(Engine.getCapabilities()));
    return Promise.all(promises).then(arrayOfResults => {
      const playerCapabilities = {};
      arrayOfResults.forEach(res => Object.assign(playerCapabilities, res));
      return engineType ? playerCapabilities[engineType] : playerCapabilities;
    });
  }

  /**
   * Sets an engine capabilities.
   * @param {string} engineType - The engine type.
   * @param {Object} capabilities - The engine capabilities.
   * @returns {void}
   * @public
   * @static
   */
  public static setCapabilities(engineType: string, capabilities: {[name: string]: any}): void {
    Player._logger.debug('Set player capabilities', engineType, capabilities);
    const selectedEngine = EngineProvider.getEngines().find(Engine => Engine.id === engineType);
    if (selectedEngine) {
      selectedEngine.setCapabilities(capabilities);
    }
  }

  /**
   * The event manager of the player.
   * @type {EventManager}
   * @private
   */
  private _eventManager!: EventManager;

  /**
   * The poster manager of the player.
   * @type {PosterManager}
   * @private
   */
  private _posterManager!: PosterManager;
  /**
   * The runtime configuration of the player.
   * @type {Object}
   * @private
   */
  private _config: any;
  /**
   * The current sources object.
   * @type {PKSourcesConfigObject}
   * @private
   */
  private _sources: PKSourcesConfigObject = {} as PKSourcesConfigObject;
  /**
   * The playback engine.
   * @type {IEngine}
   * @private
   */
  private _engine!: IEngine;
  /**
   * The state manager of the player.
   * @type {StateManager}
   * @private
   */
  private _stateManager!: StateManager;
  /**
   * The tracks of the player.
   * @type {Array<Track | TextTrack | AudioTrack | VideoTrack>}
   * @private
   */
  private _tracks: Array<Track | PKTextTrack | AudioTrack | VideoTrack>;
  /**
   * The player ready promise
   * @type {Promise<*>}
   * @private
   */
  private _readyPromise?: Promise<void>;
  /**
   * Whether the play is the first or not
   * @type {boolean}
   * @private
   */
  private _firstPlay!: boolean;
  /**
   * Whether the playing is the first or not
   * @type {boolean}
   * @private
   */
  private _firstPlaying!: boolean;
  /**
   * Whether the playback already start
   * @type {boolean}
   * @private
   */
  private _playbackStart!: boolean;
  /**
   * If quality has changed after playback ended - pend the change
   * @type {boolean}
   * @private
   */
  private _pendingSelectedVideoTrack: VideoTrack | undefined;
  /**
   * The available playback rates for the player.
   * @type {Array<number>}
   * @private
   */
  private _playbackRates!: Array<number>;
  /**
   * The player DOM element container.
   * @type {HTMLDivElement}
   * @private
   */
  private _el!: HTMLDivElement;
  /**
   * The player text DOM element container.
   * @type {HTMLDivElement}
   * @private
   */
  private _textDisplayEl!: HTMLDivElement;
  /**
   * The player black cover div.
   * @type {HTMLDivElement}
   * @private
   */
  private _blackCoverEl!: HTMLDivElement;
  /**
   * The player DOM id.
   * @type {string}
   * @private
   */
  private _playerId!: string;
  /**
   * The player last updated text cues list
   * @type {Array<any>}
   * @private
   */
  private _activeTextCues: VTTCue[] = [];
  /**
   * The player text disaply settings
   * @type {PKTextTrackDisplaySettingObject}
   * @private
   */
  private _textDisplaySettings: PKTextTrackDisplaySettingObject = {} as PKTextTrackDisplaySettingObject;
  /**
   * The player text style settings
   * @type {TextStyle}
   * @private
   */
  private _textStyle!: TextStyle;
  /**
   * The playback middleware of the player.
   * @type {PlaybackMiddleware}
   * @private
   */
  private _playbackMiddleware!: PlaybackMiddleware;
  /**
   * The environment(os,device,browser) object of the player.
   * @type {Object}
   * @private
   */
  private _env!: IEnv;
  /**
   * The currently selected engine type
   * @type {string}
   * @private
   */
  private _engineType!: string;
  /**
   * The currently selected stream type
   * @type {string}
   * @private
   */
  private _streamType!: string;
  /**
   * The current playback attributes state
   * @type {Object}
   * @private
   */
  private _playbackAttributesState: {[attribute: string]: any} = {
    muted: undefined,
    volume: undefined,
    rate: undefined,
    videoTrack: undefined,
    audioLanguage: '',
    textLanguage: '',
    captionsDisplay: undefined
  };
  /**
   * Whether a load media request has sent, the player should wait to media.
   * @type {boolean}
   * @private
   */
  private _loadingMedia!: boolean;
  /**
   * Whether the player is loading a source.
   * @type {boolean}
   * @private
   */
  private _loading!: boolean;
  /**
   * Reset indicator state.
   * @type {boolean}
   * @private
   */
  private _reset!: boolean;
  /**
   * Destroyed indicator state.
   * @type {boolean}
   * @private
   */
  private _destroyed!: boolean;
  /**
   * Fallback to muted auto play mode indicator.
   * @type {boolean}
   * @private
   */
  private _fallbackToMutedAutoPlay!: boolean;
  /**
   * holds the external tracks handler controller
   * @type {ExternalCaptionsHandler}
   * @private
   */
  private _externalCaptionsHandler!: ExternalCaptionsHandler;
  /**
   * holds the external tracks handler controller
   * @type {ExternalCaptionsHandler}
   * @private
   */
  private _externalThumbnailsHandler!: ExternalThumbnailsHandler;
  /**
   * holds the full screen controller
   * @type {FullscreenController}
   * @private
   */
  private _fullscreenController!: FullscreenController;
  /**
   * holds the resize observer. Incharge of notifying on resize changes.
   * @type {?AdsController}
   * @private
   */
  private _resizeWatcher!: ResizeWatcher;
  /**
   * Whether the user interacted with the player
   * @type {boolean}
   * @private
   */
  private _hasUserInteracted: boolean = false;
  /**
   * Whether the video is seeked to live edge
   * @type {boolean}
   * @private
   */
  private _isOnLiveEdge: boolean = false;
  /**
   * Whether should load after attach media used
   * @type {boolean}
   * @private
   */
  private _shouldLoadAfterAttach: boolean = false;
  /**
   * The aspect ratio of the player.
   * @type {?string}
   * @private
   */
  private _aspectRatio!: string | null;
  /**
   * The engine decorator manager.
   * @type {?EngineDecoratorManager}
   * @private
   */
  private _engineDecoratorManager!: EngineDecoratorManager;

  /**
   * @param {Object} config - The configuration for the player instance.
   * @constructor
   */
  constructor(config: any = {}) {
    super();
    this._setConfigLogLevel(config);
    this._playerId = Utils.Generator.uniqueId(5);
    this._prepareVideoElement();
    Player.runCapabilities();
    this._env = Env;
    this._tracks = [];
    this._firstPlay = true;
    this._loadingMedia = false;
    this._loading = false;
    this._playbackStart = false;
    this._firstPlaying = false;
    this._reset = true;
    this._destroyed = false;
    this._fallbackToMutedAutoPlay = false;
    this._config = Player._defaultConfig;
    this._sources = Utils.Object.copyDeep(DefaultSources);
    this._eventManager = new EventManager();
    this._posterManager = new PosterManager();
    this._stateManager = new StateManager(this);
    this._resizeWatcher = new ResizeWatcher();
    this._playbackMiddleware = new PlaybackMiddleware();
    this._textStyle = new TextStyle();
    this._createReadyPromise();
    this._createPlayerContainer();
    this._appendDomElements();
    this._externalCaptionsHandler = new ExternalCaptionsHandler(this);
    this._externalThumbnailsHandler = new ExternalThumbnailsHandler();
    this._fullscreenController = new FullscreenController(this);
    this.configure(config);
  }

  // <editor-fold desc="Public API">

  // <editor-fold desc="Playback API">

  /**
   * Configures the player according to a given configuration.
   * @param {Object} config - The configuration for the player instance.
   * @returns {void}
   */
  public configure(config: any = {}): void {
    this._setConfigLogLevel(config);
    Utils.Object.mergeDeep(this._config, config);
    this._applyTextTrackConfig();
    this._applyABRRestriction(config);
  }

  /**
   * Configures the player metadata according to a given configuration.
   * @param {PKMetadataConfigObject} sourcesMetadata - The sources metadata for the player instance.
   * @returns {void}
   */
  public setSourcesMetadata(sourcesMetadata: PKMetadataConfigObject): void {
    if (this._sources) {
      if (!this._sources.metadata) {
        this._sources.metadata = {};
      }
      Utils.Object.mergeDeep(this._sources.metadata, sourcesMetadata);
    }
  }

  /**
   * Configures the player according to a given configuration.
   * @param {PKSourcesConfigObject} sources - The sources for the player instance.
   * @returns {void}
   */
  public setSources(sources: PKSourcesConfigObject): void {
    if (this._hasSources(sources)) {
      this.reset();
      Utils.Object.mergeDeep(this._sources, sources);
      this._resizeWatcher.init(Utils.Dom.getElementById(this._playerId));
      Player._logger.debug('Change source started');
      this.dispatchEvent(new FakeEvent(CustomEventType.CHANGE_SOURCE_STARTED));
      this._reset = false;
      if (this._selectEngineByPriority()) {
        this.dispatchEvent(new FakeEvent(CustomEventType.SOURCE_SELECTED, {selectedSource: this._sources[this._streamType]}));
        this._attachMedia();
        this._handlePlaybackOptions();
        this._posterManager.setSrc(this._sources.poster);
        this._handleDimensions();
        this._handlePreload();
        this._handleAutoPlay();
        Player._logger.debug('Change source ended');
        this.dispatchEvent(new FakeEvent(CustomEventType.CHANGE_SOURCE_ENDED));
      } else {
        Player._logger.warn('No playable engines was found to play the given sources');
        this.dispatchEvent(
          new FakeEvent(
            Html5EventType.ERROR,
            new PKError(
              PKError.Severity.CRITICAL,
              PKError.Category.PLAYER,
              PKError.Code.NO_ENGINE_FOUND_TO_PLAY_THE_SOURCE,
              'No Engine Found To Play The Source'
            )
          )
        );
      }
    } else {
      Utils.Object.mergeDeep(this._sources, sources);
    }
  }

  /**
   * The player readiness
   * @public
   * @returns {Promise<*>} - The ready promise
   */
  public ready(): Promise<void> {
    return this._readyPromise ? this._readyPromise : Promise.resolve();
  }

  /**
   * Load media
   * @public
   * @returns {void}
   */
  public load(): void {
    const loadPlayer = (): void => {
      if (this._engine) {
        this._load();
      } else {
        this._eventManager.listenOnce(this, CustomEventType.SOURCE_SELECTED, () => this._load());
      }
    };
    if (!this.src) {
      this._playbackMiddleware.load(() => loadPlayer());
    } else {
      Player._logger.debug('The source has already been loaded. load request ignored');
    }
  }

  /**
   * Start/resume playback.
   * @param {PKPlayOptionsObject} playOptions - additional options to control the play.
   * @param {boolean} playOptions.programmatic - if true, the play call was not initiated by a user gesture and should be handled like auto play.
   * @returns {void}
   * @public
   */
  public play(playOptions?: PKPlayOptionsObject): void {
    if (playOptions && playOptions.programmatic) {
      this._autoPlay();
      return;
    }

    if (!this._playbackStart) {
      this._playbackStart = true;
      this.dispatchEvent(new FakeEvent(CustomEventType.PLAYBACK_START));
      if (!this.src) {
        this._prepareVideoElement();
      }
      this.load();
    }
    if (this._engine) {
      this._playbackMiddleware.play(() => this._play());
    } else if (this._loadingMedia) {
      // load media requested but the response is delayed
      this._playbackMiddleware.play(() => this._playAfterAsyncMiddleware());
    } else {
      this.dispatchEvent(
        new FakeEvent(
          Html5EventType.ERROR,
          new PKError(PKError.Severity.CRITICAL, PKError.Category.PLAYER, PKError.Code.NO_SOURCE_PROVIDED, 'No Source Provided')
        )
      );
    }
  }

  /**
   * Pause playback.
   * @returns {void}
   * @public
   */
  public pause(): void {
    if (this._engine) {
      this._playbackMiddleware.pause(this._pause.bind(this));
    }
  }

  /**
   * Gets the view of the player (i.e the dom container object).
   * @return {HTMLElement} - The dom container.
   * @public
   */
  public getView(): HTMLElement {
    return this._el;
  }

  /**
   * @returns {HTMLVideoElement} - The video element.
   * @public
   */
  public getVideoElement(): HTMLVideoElement | undefined {
    if (this._engine) {
      return this._engine.getVideoElement();
    }
  }

  /**
   * Get video height.
   * @returns {?number} - The intrinsic height of the video.
   * @public
   */
  public get videoHeight(): number | null {
    if (this._engine) {
      return this._engine.videoHeight;
    }
    return null;
  }

  /**
   * Get video width.
   * @returns {?number} - The intrinsic width of the video.
   * @public
   */
  public get videoWidth(): number | null {
    if (this._engine) {
      return this._engine.videoWidth;
    }
    return null;
  }

  /**
   * Resets the necessary components before change media.
   * @public
   * @param {boolean} isChangeMedia - Whether or not this reset triggered due to change media
   * @returns {void}
   */
  public reset(isChangeMedia: boolean = false): void {
    if (this._reset) return;
    this.pause();
    //make sure all services are reset before engine and engine attributes are reset
    this._externalCaptionsHandler.reset();
    this._externalThumbnailsHandler.reset();
    this._posterManager.reset();
    this._stateManager.reset();
    this._sources = Utils.Object.copyDeep(DefaultSources);
    this._activeTextCues = [];
    this._updateTextDisplay([]);
    this._tracks = [];
    PKTextTrack.reset();
    this._resetStateFlags();
    this._engineType = '';
    this._streamType = '';
    this._pendingSelectedVideoTrack = undefined;
    if (this._engine) {
      this._engine.reset();
    }
    this.showBlackCover();
    this._reset = true;
    this.dispatchEvent(new FakeEvent(CustomEventType.PLAYER_RESET, {isChangeMedia}));
    this._eventManager.removeAll();
    this._resizeWatcher.init(Utils.Dom.getElementById(this._playerId));
    this._createReadyPromise();
    this._isOnLiveEdge = false;
    this._shouldLoadAfterAttach = false;
  }

  /**
   * Destroys the player.
   * @returns {void}
   * @public
   */
  public destroy(): void {
    if (this._destroyed) return;
    //make sure all services are destroyed before engine and engine attributes are destroyed
    this._externalCaptionsHandler.destroy();
    this._posterManager.destroy();
    this._stateManager.destroy();
    this._fullscreenController.destroy();
    this._activeTextCues = [];
    this._textDisplaySettings = {} as PKTextTrackDisplaySettingObject;
    this._config = {};
    this._tracks = [];
    this._engineType = '';
    this._streamType = '';
    this._readyPromise = undefined;
    this._pendingSelectedVideoTrack = undefined;
    this._resetStateFlags();
    this._playbackAttributesState = {};
    if (this._engine) {
      this._engine.destroy();
    }
    if (this._engineDecoratorManager) {
      this._engineDecoratorManager.destroy();
    }
    this._resizeWatcher.destroy();
    if (this._el) {
      Utils.Dom.removeChild(this._el.parentNode, this._el);
    }
    this._destroyed = true;
    this.dispatchEvent(new FakeEvent(CustomEventType.PLAYER_DESTROY));
    this._eventManager.destroy();
  }

  /**
   * Hides the black cover div.
   * @public
   * @returns {void}
   */
  public hideBlackCover(): void {
    if (this._blackCoverEl) {
      this._blackCoverEl.style.visibility = 'hidden';
    }
  }

  /**
   * Shows the black cover div.
   * @public
   * @returns {void}
   */
  public showBlackCover(): void {
    if (this._blackCoverEl) {
      this._blackCoverEl.style.visibility = 'visible';
    }
  }

  /**
   * Attach the engine's media source
   * @public
   * @returns {void}
   */
  public attachMediaSource(): void {
    if (this._engine) {
      this._shouldLoadAfterAttach = true;
      this._engine.attachMediaSource();
      this._eventManager.listenOnce(this, Html5EventType.CAN_PLAY, () => {
        if (typeof this._playbackAttributesState.rate === 'number') {
          this.playbackRate = this._playbackAttributesState.rate;
        }
      });
    }
  }

  /**
   * detach the engine's media source
   * @public
   * @returns {void}
   */
  public detachMediaSource(): void {
    if (this._engine) {
      this.pause();
      this.hideTextTrack();
      this._shouldLoadAfterAttach = false;
      this._createReadyPromise();
      this._engine.detachMediaSource();
    }
  }

  /**
   * detach the engine's media source
   * @public
   * @returns {void}
   * @param {IEngineDecoratorProvider} engineDecoratorProvider - function to create the decorator
   */
  public registerEngineDecoratorProvider(engineDecoratorProvider: IEngineDecoratorProvider): void {
    if (!this._engineDecoratorManager) {
      this._engineDecoratorManager = new EngineDecoratorManager();
    }
    if (engineDecoratorProvider) {
      this._engineDecoratorManager.register(engineDecoratorProvider);
    }
  }

  /**
   * Get the first buffered range of the engine.
   * @returns {TimeRanges} - First buffered range of the engine in seconds.
   * @public
   */
  public get buffered(): TimeRanges | null {
    if (this._engine) {
      return this._engine.buffered;
    }
    return null;
  }

  public get stats(): PKStatsObject {
    const statsObject: PKStatsObject = {
      targetBuffer: NaN,
      availableBuffer: NaN
    };
    if (this._engine) {
      statsObject.targetBuffer = this._engine.targetBuffer;
      statsObject.availableBuffer = this._engine.availableBuffer;
    }

    return statsObject;
  }

  /**
   * Set the current time in seconds.
   * @param {Number} to - The number to set in seconds.
   * @public
   */
  public set currentTime(to: number) {
    this._playbackMiddleware.setCurrentTime(to, this._setCurrentTime.bind(this));
  }

  /**
   * Get the current time in seconds.
   * @returns {?Number} - The playback current time.
   * @public
   */
  public get currentTime(): number | null {
    if (this._engine) {
      return this._engine.currentTime;
    }
    return null;
  }

  /**
   * Get the duration in seconds.
   * @returns {?Number} - The playback duration.
   * @public
   */
  public get duration(): number | null {
    if (this._engine) {
      return this._engine.duration;
    }
    return null;
  }

  /**
   * Get the live duration in seconds.
   * @returns {?Number} - The live duration.
   * @public
   */
  public get liveDuration(): number | null {
    if (this._engine) {
      return this._engine.liveDuration;
    }
    return null;
  }

  /**
   * Set playback volume.
   * @param {Number} vol - The volume to set.
   * @returns {void}
   * @public
   */
  public set volume(vol: number) {
    if (this._engine) {
      if (Utils.Number.isFloat(vol) || vol === 0 || vol === 1) {
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
  public get volume(): number | null {
    if (this._engine) {
      return this._engine.volume;
    }
    return null;
  }

  /**
   * Get paused state.
   * @returns {?boolean} - Whether the video is paused or not.
   * @public
   */
  public get paused(): boolean | null {
    if (this._engine) {
      return this._engine.paused;
    }
    return null;
  }

  /**
   * Get seeking state.
   * @returns {?boolean} - Whether the video is seeking or not.
   * @public
   */
  public get seeking(): boolean | null {
    if (this._engine) {
      return this._engine.seeking;
    }
    return null;
  }

  /**
   * Set playsinline attribute.
   * Relevant for iOS 10 and up:
   * Elements will now be allowed to play inline, and will not automatically enter fullscreen mode when playback begins.
   * @param {boolean} playsinline - Whether the video should plays in line.
   */
  public set playsinline(playsinline: boolean) {
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
  public get playsinline(): boolean | null {
    if (this._engine) {
      return this._engine.playsinline;
    }
    return null;
  }

  /**
   * Set player muted state.
   * @param {boolean} mute - The mute value.
   * @returns {void}
   * @public
   */
  public set muted(mute: boolean) {
    if (this._engine) {
      this._engine.muted = mute;
      this.dispatchEvent(new FakeEvent(CustomEventType.MUTE_CHANGE, {mute: mute}));
      if (mute === false) {
        this._fallbackToMutedAutoPlay = mute;
      }
    }
  }

  /**
   * Get player muted state.
   * @returns {?boolean} - Whether the video is muted or not.
   * @public
   */
  public get muted(): boolean | null {
    if (this._engine) {
      return this._engine.muted;
    }
    return null;
  }

  /**
   * Get the player source.
   * @returns {?string} - The current source of the player.
   * @public
   */
  public get src(): string | null {
    if (this._engine) {
      return this._engine.src;
    }
    return null;
  }

  /**
   * Sets the dimensions of the player.
   * @param {PKDimensionsConfig} dimensions - the player dimensions config.
   * @returns {void}
   * @public
   */
  public set dimensions(dimensions: PKDimensionsConfig) {
    const targetElement = this._getTargetElement();
    if (!dimensions || Utils.Object.isEmptyObject(dimensions)) {
      this._aspectRatio = null;
      // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
      // @ts-ignore
      targetElement.style.width = null;
      // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
      // @ts-ignore
      targetElement.style.height = null;
    } else {
      const {height, width} = Utils.Object.mergeDeep(this.dimensions, dimensions);
      targetElement.style.width = typeof width === 'number' ? `${width}px` : width;
      targetElement.style.height = typeof height === 'number' ? `${height}px` : height;
      this._calcRatio(targetElement, dimensions);
    }
  }

  private _getTargetElement(): HTMLDivElement {
    return Utils.Dom.getElementById(this._config.targetId);
  }

  /**
   * Get the dimensions of the player.
   * @returns {PKPlayerDimensions} - The dimensions of the player.
   * @public
   */
  public get dimensions(): PKPlayerDimensions {
    return {
      width: this._el.clientWidth,
      height: this._el.clientHeight
    };
  }

  /**
   * Get the poster source URL
   * @returns {string} - the poster image URL
   */
  public get poster(): string {
    return this._posterManager.src;
  }

  /**
   * Sets the playbackRate property.
   * @param {number} rate - The playback speed of the video.
   */
  public set playbackRate(rate: number) {
    if (this._engine) {
      this._engine.playbackRate = rate;
    }
  }

  /**
   * Gets the current playback speed of the video.
   * @returns {number} - The current playback speed of the video.
   */
  public get playbackRate(): number | null {
    if (this._engine) {
      return this._engine.playbackRate;
    }
    return null;
  }

  /**
   * Gets the possible playback speeds of the video.
   * @returns {Array<number>} - The possible playback speeds speed of the video.
   */
  public get playbackRates(): Array<number> {
    if (this._playbackRates) {
      return this._playbackRates;
    } else if (this._engine) {
      return this._engine.playbackRates;
    }
    return [];
  }

  /**
   * Gets the default playback speed of the video.
   * @returns {number} - The default playback speed of the video.
   */
  public get defaultPlaybackRate(): number {
    if (this._engine) {
      return this._engine.defaultPlaybackRate;
    }
    return 1;
  }

  /**
   * get the engine type
   * @returns {string} - html5
   */
  public get engineType(): string {
    return this._engineType;
  }

  /**
   * get the stream type
   * @returns {string} - hls|dash|progressive
   */
  public get streamType(): string {
    return this._streamType;
  }

  /**
   * Getter for the environment of the player instance.
   * @return {Object} - The current environment object.
   * @public
   */
  public get env(): IEnv {
    return this._env;
  }

  /**
   * Get the player config.
   * @returns {Object} - A copy of the player configuration.
   * @public
   */
  public get config(): any {
    return Utils.Object.mergeDeep({}, this._config);
  }

  /**
   * Get the current player sources object.
   * @returns {Object} - A copy of the player configuration.
   * @public
   */
  public get sources(): PKSourcesConfigObject {
    return Utils.Object.mergeDeep({}, this._sources);
  }

  /**
   * Get whether the user already interacted with the player
   * @returns {boolean} - Whether the user interacted with the player
   * @public
   */
  public get hasUserInteracted(): boolean {
    return this._hasUserInteracted;
  }

  /**
   * Set the _loadingMedia flag to inform the player that a load media request has sent.
   * @param {boolean} loading - Whether a load media request has sent.
   * @returns {void}
   * @public
   */
  public set loadingMedia(loading: boolean) {
    this._loadingMedia = loading;
  }

  /**
   * Set crossOrigin attribute.
   * @param {?string} crossOrigin - 'anonymous' or 'use-credentials'
   * anonymous: CORS requests for this element will not have the credentials flag set.
   * use-credentials: CORS requests for this element will have the credentials flag set; this means the request will provide credentials.
   */
  public set crossOrigin(crossOrigin: string) {
    if (this._engine) {
      this._engine.crossOrigin = crossOrigin;
    }
  }

  /**
   * Get crossOrigin attribute.
   * @returns {?string} - 'anonymous' or 'use-credentials'
   **/
  public get crossOrigin(): string | null {
    if (this._engine) {
      return this._engine.crossOrigin;
    }
    return null;
  }

  /**
   * Get ended attribute state.
   * @returns {?boolean} - Whether the media has been ended.
   **/
  public get ended(): boolean | null {
    if (this._engine) {
      return this._engine.ended;
    }
    return null;
  }

  /**
   * Get the playback middleware.
   * @returns {PlaybackMiddleware} - The playback middleware.
   */
  public get playbackMiddleware(): PlaybackMiddleware {
    return this._playbackMiddleware;
  }

  /**
   * Get the poster manager.
   * @returns {PlaybackMiddleware} - The poster manager.
   */
  public get posterManager(): PosterManager {
    return this._posterManager;
  }

  /**
   * Checking if the current playback is live.
   * @function isLive
   * @returns {boolean} - Whether playback is live.
   * @public
   */
  public isLive(): boolean {
    return !!(this._sources.type !== MediaType.VOD && (this._sources.type === MediaType.LIVE || (this._engine && this._engine.isLive())));
  }

  /**
   * Checking if the current playback is audio only.
   * @function isAudio
   * @returns {boolean} - Whether playback is audio.
   * @private
   */
  public isAudio(): boolean {
    return this._sources.type === MediaType.AUDIO;
  }

  /**
   * Get whether the video is seeked to live edge in dvr
   * @returns {boolean} - Whether the video is seeked to live edge in dvr
   * @public
   */
  public isOnLiveEdge(): boolean {
    if (this._engine && typeof this._engine.isOnLiveEdge === 'function') {
      return this._engine.isOnLiveEdge();
    }
    return this._isOnLiveEdge;
  }

  /**
   * Checking if the current live playback has DVR window.
   * @function isDvr
   * @returns {boolean} - Whether live playback has DVR window.
   * @public
   */
  public isDvr(): boolean {
    return this.isLive() && this._sources.dvr;
  }

  /**
   * Seeking to live edge.
   * @function seekToLiveEdge
   * @returns {void}
   * @public
   */
  public seekToLiveEdge(): void {
    if (this._engine && this.isLive()) {
      this._engine.seekToLiveEdge();
      this._isOnLiveEdge = true;
    }
  }

  /**
   * Get the start time of DVR window in live playback in seconds.
   * @returns {Number} - start time of DVR window.
   * @public
   */
  public getStartTimeOfDvrWindow(): number {
    return this._engine ? this._engine.getStartTimeOfDvrWindow() : 0;
  }

  // </editor-fold>

  // <editor-fold desc="Tracks API">

  /**
   * Returns the tracks according to the filter. if no filter given returns the all tracks.
   * @function getTracks
   * @template {Track | AudioTrack | TextTrack | VideoTrack} T
   * @param {string} [type] - a tracks filter, should be 'video', 'audio' or 'text'.
   * @returns {Array<T>} - The parsed tracks.
   * @public
   */
  public getTracks<T extends Track | AudioTrack | PKTextTrack | VideoTrack | ImageTrack>(type?: TrackTypes): T[] {
    switch (type) {
    case TrackType.VIDEO:
      return Utils.Object.copyDeep(this._getVideoTracks());
    case TrackType.AUDIO:
      return Utils.Object.copyDeep(this._getAudioTracks());
    case TrackType.TEXT:
      return Utils.Object.copyDeep(this._getTextTracks());
    case TrackType.IMAGE:
      return Utils.Object.copyDeep(this._getImageTracks());
    default:
      return Utils.Object.copyDeep(this._tracks);
    }
  }

  /**
   * Get an object includes the active video/audio/text tracks
   * @return {{video: VideoTrack, audio: AudioTrack, text: TextTrack}} - The active tracks object
   */
  public getActiveTracks(): {video: VideoTrack, audio: AudioTrack, text: PKTextTrack} {
    return Utils.Object.copyDeep({
      video: this._getVideoTracks().find(track => track.active),
      audio: this._getAudioTracks().find(track => track.active),
      text: this._getTextTracks().find(track => track.active)
    });
  }

  /**
   * Select a track
   * @function selectTrack
   * @param {?Track} track - the track to select
   * @returns {void}
   * @public
   */
  public selectTrack(track?: Track): void {
    if (this._engine) {
      if (track instanceof VideoTrack) {
        this._playbackAttributesState.videoTrack = track;
        if (this._stateManager.currentState.type === StateType.IDLE) {
          this._pendingSelectedVideoTrack = track;
        } else {
          this._engine.selectVideoTrack(track);
        }
      } else if (track instanceof AudioTrack) {
        this._engine.selectAudioTrack(track);
      } else if (track instanceof PKTextTrack) {
        this._resetTextDisplay();
        if (track.language === OFF) {
          this.hideTextTrack();
          this._externalCaptionsHandler.hideTextTrack();
          this._playbackAttributesState.captionsDisplay = false;
        } else if (track.external) {
          this._engine.hideTextTrack();
          this._externalCaptionsHandler.selectTextTrack(track);
        } else {
          this._externalCaptionsHandler.hideTextTrack();
          this._engine.selectTextTrack(track);
        }
      } else if (track instanceof ImageTrack) {
        this._engine.selectImageTrack(track);
      }
    }
  }

  /**
   * Hide the text track
   * @function hideTextTrack
   * @returns {void}
   * @public
   */
  public hideTextTrack(): void {
    if (this._engine) {
      this._engine.hideTextTrack();
      this._resetTextDisplay();
      const textTracks = this._getTextTracks();
      const activeTextTrack = textTracks.find(track => track.active === true);
      if (activeTextTrack && activeTextTrack.external) {
        this._externalCaptionsHandler.hideTextTrack();
      }
      textTracks.map(track => (track.active = false));
      const textTrack = textTracks.find(track => track.language === OFF);
      if (textTrack) {
        textTrack.active = true;
        this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_TRACK_CHANGED, {selectedTextTrack: textTrack}));
      }
      this._playbackAttributesState.captionsDisplay = false;
    }
  }

  /**
   * Show the text track.
   * @returns {void}
   * @public
   */
  public showTextTrack(): void {
    const textTracks = this._getTextTracks();
    const userPreference = this._playbackAttributesState.textLanguage;
    const prevOrAutoTextLang =
      userPreference ||
      this._getLanguage<PKTextTrack>(
        textTracks,
        AUTO,
        textTracks.find(textTrack => textTrack.default)
      );
    this._setDefaultTrack<PKTextTrack>(textTracks, prevOrAutoTextLang);
  }

  /**
   * Add text track
   * @function addTextTrack
   * @param {string} kind - Specifies the kind of text track.
   * @param {?string} label - A string specifying the label for the text track.
   * @param {?string} language - A two-letter language code that specifies the language of the text track.
   * @returns {?TextTrack} - A TextTrack Object, which represents the new text track.
   * @public
   */
  public addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack | undefined {
    if (this._engine && typeof this._engine.addTextTrack === 'function') {
      return this._engine.addTextTrack(kind, label, language);
    }
  }

  /**
   * get the native text tracks
   * @function getNativeTextTracks
   * @returns {Array<TextTrack>} - The native TextTracks array.
   * @public
   */
  public getNativeTextTracks(): Array<TextTrack> {
    if (this._engine && typeof this._engine.getNativeTextTracks === 'function') {
      return this._engine.getNativeTextTracks();
    }
    return [];
  }

  /**
   * Enables adaptive bitrate switching.
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @public
   */
  public enableAdaptiveBitrate(): void {
    if (this._engine) {
      this._engine.enableAdaptiveBitrate();
    }
    this._playbackAttributesState.videoTrack = undefined;
  }

  /**
   * Checking if adaptive bitrate switching is enabled.
   * @function isAdaptiveBitrateEnabled
   * @returns {boolean} - Whether adaptive bitrate is enabled.
   * @public
   */
  public isAdaptiveBitrateEnabled(): boolean {
    if (this._engine) {
      return this._engine.isAdaptiveBitrateEnabled();
    }
    return false;
  }

  /**
   * update the ABR restriction config
   * @function _applyABRRestriction
   * @returns {void}
   * @param {Object} config - new config which configure for checking if it relevant config has changed
   * @private
   */
  private _applyABRRestriction(config: any): void {
    if (Utils.Object.hasPropertyPath(config, 'abr.restrictions') && this._engine && this._tracks.length) {
      const {restrictions} = this._config.abr;
      const videoTracks: VideoTrack[] = <VideoTrack[]>this._tracks.filter(track => track instanceof VideoTrack);
      const newVideoTracks = filterTracksByRestriction(videoTracks, restrictions);
      if (newVideoTracks.length) {
        const currentVideoTracks = this._tracks.filter(track => track instanceof VideoTrack && track.available);
        const tracksHasChanged = !(
          currentVideoTracks.length === newVideoTracks.length &&
          currentVideoTracks.every((element: VideoTrack, index: number) => {
            return element.bandwidth === newVideoTracks[index].bandwidth;
          })
        );
        if (tracksHasChanged) {
          this._engine.applyABRRestriction(restrictions);
          this._tracks.forEach(track => {
            if (newVideoTracks.includes(<VideoTrack>track) || !(track instanceof VideoTrack)) {
              track.available = true;
            } else {
              track.available = false;
              track.active = false;
            }
          });
          if (!this.getActiveTracks().video) {
            newVideoTracks[0].active = true;
          }
          this.dispatchEvent(new FakeEvent(CustomEventType.TRACKS_CHANGED, {tracks: this._tracks.filter(track => track.available)}));
        }
      } else {
        Player._logger.warn('Invalid restriction, Nothing has changed values do not meet the restriction');
      }
    }
  }
  /**
   * update the text track config from current config
   * @function _applyTextTrackConfig
   * @returns {void}
   * @param {Object} config - new config which configure for checking if it relevant config has changed
   * @private
   */
  private _applyTextTrackConfig(): void {
    const textTrackDisplaySetting = Utils.Object.getPropertyPath(this._config, 'text.textTrackDisplaySetting');
    const textStyle = Utils.Object.getPropertyPath(this._config, 'text.textStyle');
    if (textTrackDisplaySetting) {
      const textDisplaySettings: any = Utils.Object.mergeDeep({}, textTrackDisplaySetting, {
        // align - backward compatibility || new caption alignment API || default value
        align: textTrackDisplaySetting?.align || textStyle?.textAlign || 'center'
      });
      // backward compatibility for `text.forceCenter`
      if (Utils.Object.getPropertyPath(this._config, 'text.forceCenter')) {
        textDisplaySettings.position = 'auto';
        textDisplaySettings.align = 'center';
        textDisplaySettings.size = '100';
      }
      this.setTextDisplaySettings(textDisplaySettings);
    }
    try {
      if (textStyle) {
        this.textStyle = TextStyle.fromJson(textStyle);
      }
    } catch (e) {
      Player._logger.warn(e);
    }
  }

  /**
   *  Returns in-stream thumbnail for a chosen time.
   * @param {number} time - playback time.
   * @public
   * @return {?ThumbnailInfo} - Thumbnail info
   */
  public getThumbnail(time: number): ThumbnailInfo | null {
    if (this._externalThumbnailsHandler.isUsingVttThumbnails()) {
      return this._externalThumbnailsHandler.getThumbnail(time);
    } else if (this._engine) {
      return this._engine.getThumbnail(time);
    }
    return null;
  }

  /**
   * update the text display settings
   * @param {PKTextTrackDisplaySettingObject} settings - text cue display settings
   * @public
   * @returns {void}
   */
  public setTextDisplaySettings(settings: PKTextTrackDisplaySettingObject): void {
    this._textDisplaySettings = Utils.Object.mergeDeep(this._textDisplaySettings, settings);
    this._updateCueDisplaySettings();
    for (let i = 0; i < this._activeTextCues.length; i++) {
      // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this._activeTextCues[i].hasBeenReset = true;
    }
    this._updateTextDisplay(this._activeTextCues);
  }

  public get textDisplaySetting(): any {
    return Utils.Object.copyDeep(this._textDisplaySettings);
  }

  /**
   * Sets style attributes for text tracks.
   * @param {TextStyle} style - text styling settings
   * @returns {void}
   */
  public set textStyle(style: TextStyle) {
    if (!(style instanceof TextStyle)) {
      throw new Error('Style must be instance of TextStyle');
    }

    resetSubtitleStyleSheet(this._playerId);

    try {
      this._textStyle = style;
      if (this._config.text.useNativeTextTrack) {
        this._applyCustomSubtitleStyles();
      } else if (this._engine) {
        this._engine.resetAllCues();
        this._externalCaptionsHandler.resetAllCues();
        this._updateTextDisplay(this._activeTextCues);
      }
      this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_STYLE_CHANGED));
    } catch (e) {
      Player._logger.error(e.message);
    }
  }

  /**
   * Gets style attributes for text tracks.
   * @returns {?TextStyle} - the current style attribute
   */
  public get textStyle(): TextStyle {
    return this._textStyle.clone();
  }

  // </editor-fold>

  // <editor-fold desc="Fullscreen API">
  /**
   * @returns {boolean} - Whether the player is in fullscreen mode.
   * @public
   */
  public isFullscreen(): boolean {
    return this._fullscreenController.isFullscreen();
  }

  /**
   * Notify the player that the ui application entered to fullscreen.
   * @public
   * @returns {void}
   */
  public notifyEnterFullscreen(): void {
    if (this.isFullscreen()) {
      this.dispatchEvent(new FakeEvent(CustomEventType.ENTER_FULLSCREEN));
    }
  }

  /**
   * Notify the player that the ui application exited from fullscreen.
   * @public
   * @returns {void}
   */
  public notifyExitFullscreen(): void {
    if (!this.isFullscreen()) {
      this.dispatchEvent(new FakeEvent(CustomEventType.EXIT_FULLSCREEN));
    }
  }

  /**
   * Request the player to enter fullscreen.
   * @public
   * @param {string} elementId - element id to full screen
   * @returns {void}
   */
  public enterFullscreen(elementId?: string): void {
    this._fullscreenController.enterFullscreen(elementId);
  }

  /**
   * Request the player to exit fullscreen.
   * @public
   * @returns {void}
   */
  public exitFullscreen(): void {
    this._fullscreenController.exitFullscreen();
  }

  // </editor-fold>

  // <editor-fold desc="Picture In Picture API">

  /**
   * Request the player to enter picture in picture mode
   * @public
   * @returns {void}
   */
  public enterPictureInPicture(): void {
    if (this.isFullscreen()) {
      this.exitFullscreen();
    }
    if (this._engine && !this._engine.isInPictureInPicture) {
      this._engine.enterPictureInPicture();
    }
  }

  /**
   * Request the player to exit picture in picture mode
   * @public
   * @returns {void}
   */
  public exitPictureInPicture(): void {
    if (this._engine && this._engine.isInPictureInPicture) {
      this._engine.exitPictureInPicture();
    }
  }

  /**
   * Check if the player is in picture in picture mode
   * @public
   * @return {boolean} if the player is in picture in picture mode or not
   */
  public isInPictureInPicture(): boolean {
    if (this._engine) {
      return this._engine.isInPictureInPicture;
    }
    return false;
  }

  /**
   * Check if picture in picture supported in this environment
   * @public
   * @return {boolean} if the picture in picture feature is supported in this environment
   */
  public isPictureInPictureSupported(): boolean {
    return !!this._config.playback.pictureInPicture && this._engine.isPictureInPictureSupported();
  }

  // </editor-fold>

  // <editor-fold desc="VR API">

  /**
   * Checking if the selected source is VR.
   * @returns {boolean} - Whether is VR.
   * @public
   */
  public isVr(): boolean {
    return !!this._sources.vr;
  }

  /**
   * get the log level
   * @param {?string} name - the logger name
   * @returns {Object} - the log level
   */
  public getLogLevel(name?: string): ILogLevel {
    return getLogLevel(name);
  }

  /**
   * sets the logger level
   * @param {Object} level - the log level
   * @param {?string} name - the logger name
   * @returns {void}
   */
  public setLogLevel(level: ILogLevel, name?: string): void {
    setLogLevel(level, name);
  }

  public getDrmInfo(): PKDrmDataObject | null {
    return this._engine.getDrmInfo();
  }

  private _applyCustomSubtitleStyles(): void {
    try {
      const containerId = this._el?.parentElement?.id || this._playerId;
      if (this._config.text.useNativeTextTrack && !this._config.text.useShakaTextTrackDisplay) {
        const sheet = getSubtitleStyleSheet(this._playerId);
        ExternalCaptionsHandler.applyNativeTextTrackStyles(sheet, this._textStyle, containerId, ENGINE_CLASS_NAME);
      } else if (this._config.text.useShakaTextTrackDisplay) {
        resetSubtitleStyleSheet(this._playerId);
        const sheet = getSubtitleStyleSheet(this._playerId);
        this._engine.mediaSourceAdapter?.applyTextTrackStyles?.(sheet, this._textStyle, containerId);
      }
    } catch (e) {
      Player._logger.error(`Failed to add custom text style: ${e.message}`);
    }
  }

  /**
   * Remove the current text track from the player view.
   * @returns {void}
   * @private
   */
  private _resetTextDisplay(): void {
    this._activeTextCues = [];
    this._updateTextDisplay([]);
  }

  /**
   * For browsers which block auto play, use the user gesture to open the video element and enable playing via API.
   * @returns {void}
   * @private
   */
  private _prepareVideoElement(): void {
    EngineProvider.getEngines().forEach((Engine: IEngineStatic) => {
      Engine.prepareVideoElement(this._playerId);
    });
  }

  /**
   * Set the config level of the player
   * @returns {void}
   * @param {Object} config - object containing the log level.
   * @private
   */
  private _setConfigLogLevel(config: any): void {
    if (config.log && config.log.level && LogLevel[config.log.level]) {
      setLogLevel(LogLevel[config.log.level]);
    }
    if (config.log && typeof config.log.handler === 'function') {
      setLogHandler(config.log.handler);
    }
  }

  /**
   * Check if sources has been received.
   * @param {PKSourcesConfigObject} sources - sources config.
   * @returns {boolean} - Whether sources has been received to the player.
   * @private
   */
  private _hasSources(sources: PKSourcesConfigObject): boolean {
    if (sources) {
      return !!Object.values(StreamType).find(type => sources[type] && sources[type].length > 0);
    }
    return false;
  }

  /**
   * Creates the player container.
   * @private
   * @returns {void}
   */
  private _createPlayerContainer(): void {
    const el = (this._el = Utils.Dom.createElement('div'));
    Utils.Dom.addClassName(el, CONTAINER_CLASS_NAME);
    Utils.Dom.setAttribute(el, 'id', this._playerId);
    Utils.Dom.setAttribute(el, 'tabindex', '-1');
  }

  /**
   * Appends the engine's video element to the player's div container.
   * @private
   * @returns {void}
   */
  private _appendEngineEl(): void {
    if (this._el) {
      const engineEl = this._engine.getVideoElement();
      const className = `${ENGINE_CLASS_NAME}`;
      Utils.Dom.addClassName(engineEl, className);
      const classNameWithId = `${ENGINE_CLASS_NAME}-${this._engine.id}`;
      Utils.Dom.addClassName(engineEl, classNameWithId);
      Utils.Dom.prependTo(engineEl, this._el);
      if (this._engine.id === 'youtube') {
        this._el.style.zIndex = '1';
      } else if (this._el.style.zIndex) {
        // in case the engine is not yt, need to remove the z-index value if exists
        this._el.style.zIndex = '';
      }
    }
  }

  /**
   * Appends DOM elements by the following priority:
   * 1. poster (strongest)
   * 2. black screen
   * 3. subtitles (weakest)
   * @private
   * @returns {void}
   */
  private _appendDomElements(): void {
    // Append playkit-black-cover
    this._blackCoverEl = Utils.Dom.createElement('div');
    Utils.Dom.addClassName(this._blackCoverEl, BLACK_COVER_CLASS_NAME);
    Utils.Dom.appendChild(this._el, this._blackCoverEl);
    // Append playkit-poster
    const el = this._posterManager.getElement();
    Utils.Dom.addClassName(el, POSTER_CLASS_NAME);
    Utils.Dom.appendChild(this._el, el);
    // Append playkit-subtitles
    this._textDisplayEl = Utils.Dom.createElement('div');
    Utils.Dom.addClassName(this._textDisplayEl, SUBTITLES_CLASS_NAME);
    Utils.Dom.appendChild(this._el, this._textDisplayEl);
  }

  /**
   * Creates the ready promise.
   * @private
   * @returns {void}
   */
  private _createReadyPromise(): void {
    this._readyPromise = new Promise<void>((resolve, reject) => {
      this._eventManager.listenOnce(this, CustomEventType.TRACKS_CHANGED, () => {
        this.dispatchEvent(new FakeEvent(CustomEventType.MEDIA_LOADED));
        // handle playback rate after media loaded, to avoid race condition, so it won't be overwritten
        this._handlePlaybackRate();
        resolve();
      });
      this._eventManager.listen(this, Html5EventType.ERROR, (event: FakeEvent) => {
        if (event.payload.severity === PKError.Severity.CRITICAL) {
          reject();
        }
      });
    }).catch(() => {
      // silence the promise rejection, error is handled by the error event
    });
  }

  /**
   * Handles the playback rate.
   * @private
   * @returns {void}
   */
  private _handlePlaybackRate(): void {
    if (typeof this._playbackAttributesState.rate === 'number') {
      this.playbackRate = this._playbackAttributesState.rate;
    } else if (typeof this._config.playback.playbackRate === 'number') {
      this.playbackRate = this._config.playback.playbackRate;
    }
  }

  /**
   * Selects an engine to play a source according to a given stream priority.
   * @return {boolean} - Whether a proper engine was found to play the given sources
   * according to the priority.
   * @private
   */
  private _selectEngineByPriority(): boolean {
    const streamPriority = this._config.playback.streamPriority;
    const preferNative = this._config.playback.preferNative;
    const sources = this._sources;
    for (const priority of streamPriority) {
      const engineId = typeof priority.engine === 'string' ? priority.engine.toLowerCase() : '';
      const format = typeof priority.format === 'string' ? priority.format.toLowerCase() : '';
      const Engine = EngineProvider.getEngines().find(Engine => Engine.id === engineId);
      if (Engine) {
        const formatSources = sources[format];
        if (formatSources && formatSources.length > 0) {
          const source = formatSources[0];
          if (Engine.canPlaySource(source, preferNative[format], this._config.drm)) {
            Player._logger.debug('Source selected: ', formatSources);
            this._loadEngine(Engine, source);
            this._engineType = engineId;
            this._streamType = format;
            return true;
          }
        }
      }
    }
    return false;
  }

  /**
   * Loads the selected engine.
   * @param {IEngineStatic} Engine - The selected engine.
   * @param {PKMediaSourceObject} source - The selected source object.
   * @private
   * @returns {void}
   */
  private _loadEngine(Engine: IEngineStatic, source: PKMediaSourceObject): void {
    if (!this._engine) {
      this._createEngine(Engine, source);
      this._appendEngineEl();
    } else {
      if (this._engine.id === Engine.id) {
        this._engine.restore(source, {...this._config, sources: this._sources});
      } else {
        this._engine.destroy();
        this._createEngine(Engine, source);
        this._appendEngineEl();
      }
    }
  }

  /**
   * Creates an engine or an engine decorator.
   * @param {IEngine} Engine - The selected engine.
   * @param {PKMediaSourceObject} source - The selected source object.
   * @returns {void}
   * @private
   */
  private _createEngine(Engine: IEngineStatic, source: PKMediaSourceObject): void {
    const engine = Engine.createEngine(source, {...this._config, sources: this._sources}, this._playerId);
    this._engine = this._engineDecoratorManager ? new EngineDecorator(engine, this._engineDecoratorManager) as EngineDecoratorType : engine;
  }

  /**
   * Listen to all HTML5 defined events and trigger them on the player
   * @private
   * @returns {void}
   */
  private _attachMedia(): void {
    if (this._engine) {
      Object.keys(Html5EventType).forEach(html5Event => {
        this._eventManager.listen(this._engine, Html5EventType[html5Event], (event: FakeEvent) => {
          return this.dispatchEvent(event);
        });
      });
      this._eventManager.listen(this._engine, Html5EventType.SEEKING, () => {
        if (this.isLive()) {
          this._isOnLiveEdge = this.duration && this.currentTime ? this.currentTime >= this.duration - LIVE_EDGE_THRESHOLD && !this.paused : false;
        }
      });
      this._eventManager.listen(this._engine, CustomEventType.MEDIA_RECOVERED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._engine, CustomEventType.IMAGE_TRACK_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._engine, CustomEventType.TEXT_TRACK_ADDED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._engine, CustomEventType.VIDEO_TRACK_CHANGED, (event: FakeEvent) => {
        this._markActiveTrack(event.payload.selectedVideoTrack);
        return this.dispatchEvent(event);
      });
      this._eventManager.listen(this._engine, CustomEventType.AUDIO_TRACK_CHANGED, (event: FakeEvent) => {
        this.ready().then(() => (this._playbackAttributesState.audioLanguage = event.payload.selectedAudioTrack.language));
        this._markActiveTrack(event.payload.selectedAudioTrack);
        this.dispatchEvent(event);
      });
      this._eventManager.listen(this._engine, CustomEventType.TEXT_TRACK_CHANGED, (event: FakeEvent) => this._onTextTrackChanged(event));
      this._eventManager.listen(this._engine, CustomEventType.TRACKS_CHANGED, (event: FakeEvent) => this._onTracksChanged(event));
      this._eventManager.listen(this._engine, CustomEventType.TEXT_CUE_CHANGED, (event: FakeEvent) => this._onCueChange(event));
      this._eventManager.listen(this._engine, CustomEventType.ABR_MODE_CHANGED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._engine, CustomEventType.TIMED_METADATA, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._engine, CustomEventType.TIMED_METADATA_CHANGE, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._engine, CustomEventType.TIMED_METADATA_ADDED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._engine, CustomEventType.PLAY_FAILED, (event: FakeEvent) => {
        this._onPlayFailed(event);
        this.dispatchEvent(event);
      });
      this._eventManager.listen(this._engine, CustomEventType.FPS_DROP, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._engine, CustomEventType.FRAG_LOADED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._engine, CustomEventType.DRM_LICENSE_LOADED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._engine, CustomEventType.MANIFEST_LOADED, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._engine, CustomEventType.MEDIA_RECOVERED, () => this._handleRecovered());
      this._eventManager.listen(this, Html5EventType.PLAY, this._onPlay.bind(this));
      this._eventManager.listen(this, Html5EventType.PAUSE, this._onPause.bind(this));
      this._eventManager.listen(this, Html5EventType.PLAYING, this._onPlaying.bind(this));
      this._eventManager.listen(this, Html5EventType.ENDED, this._onEnded.bind(this));
      this._eventManager.listen(this, CustomEventType.MUTE_CHANGE, (event: FakeEvent) => {
        this._playbackAttributesState.muted = event.payload?.mute || this.muted;
      });
      this._eventManager.listen(this, Html5EventType.VOLUME_CHANGE, () => {
        this._playbackAttributesState.volume = this.volume;
      });
      this._eventManager.listen(this, Html5EventType.RATE_CHANGE, () => {
        this._playbackAttributesState.rate = this.playbackRate;
      });
      this._eventManager.listen(this, CustomEventType.ENTER_FULLSCREEN, () => this._resetTextCuesAndReposition());
      this._eventManager.listen(this, CustomEventType.EXIT_FULLSCREEN, () => this._resetTextCuesAndReposition());
      this._eventManager.listen(this._resizeWatcher, CustomEventType.RESIZE, (event: FakeEvent) => {
        this._resetTextCuesAndReposition();
        this.dispatchEvent(event);
      });
      this._eventManager.listen(this._externalCaptionsHandler, CustomEventType.TEXT_CUE_CHANGED, (event: FakeEvent) => this._onCueChange(event));
      this._eventManager.listen(this._externalCaptionsHandler, CustomEventType.TEXT_TRACK_CHANGED, (event: FakeEvent) =>
        this._onTextTrackChanged(event)
      );
      this._eventManager.listen(this._externalCaptionsHandler, Html5EventType.ERROR, (event: FakeEvent) => this.dispatchEvent(event));
      this._eventManager.listen(this._externalThumbnailsHandler, Html5EventType.ERROR, (event: FakeEvent) => this.dispatchEvent(event));
      const rootElement = Utils.Dom.getElementBySelector(`#${this.config.targetId}`);
      if (rootElement) {
        this._eventManager.listen(
          rootElement,
          'click',
          () => {
            this._hasUserInteracted = true;
            this.dispatchEvent(new FakeEvent(CustomEventType.USER_GESTURE));
          },
          {capture: true}
        );
      }
    }
  }

  /**
   * if the media was recovered (after a media failure) then initiate play again (if that was the state before)
   * @returns {void}
   * @private
   */
  private _handleRecovered(): void {
    if (this._stateManager.currentState.type === StateType.PLAYING) {
      this.play();
    }
  }

  /**
   * The text track changed event object
   * @param {FakeEvent} event - payload with text track
   * @returns {void}
   * @private
   */
  private _onTextTrackChanged(event: FakeEvent): void {
    this.ready().then(() => (this._playbackAttributesState.textLanguage = event.payload.selectedTextTrack.language));
    this._markActiveTrack(event.payload.selectedTextTrack);
    this.dispatchEvent(event);
  }

  /**
   * Reset the active cues hasBeenReset = true and then reposition it, timeout here is for the screen to
   * finish render the fullscreen
   * @returns {void}
   * @private
   */
  private _resetTextCuesAndReposition(): void {
    this._engine.resetAllCues();
    this._externalCaptionsHandler.resetAllCues();
    this._updateTextDisplay([]);
    for (let i = 0; i < this._activeTextCues.length; i++) {
      // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this._activeTextCues[i].hasBeenReset = true;
    }
    this._updateTextDisplay(this._activeTextCues);
  }

  /**
   * Handles the playback options, from current state or config.
   * @returns {void}
   * @private
   */
  private _handlePlaybackOptions(): void {
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
    if (typeof this._config.playback.crossOrigin === 'string') {
      this.crossOrigin = this._config.playback.crossOrigin;
    }
    if (Array.isArray(this._config.playback.playbackRates)) {
      const validPlaybackRates = this._config.playback.playbackRates
        .filter((number, index, self) => number > 0 && number <= 16 && self.indexOf(number) === index)
        .sort((a, b) => a - b);
      if (validPlaybackRates) {
        this._playbackRates = validPlaybackRates;
      }
    }
  }

  /**
   * Handles preload.
   * @returns {void}
   * @private
   */
  private _handlePreload(): void {
    if (this._config.playback.preload === 'auto' && !this._config.playback.autoplay) {
      this.load();
    }
  }

  private _autoPlay(): void {
    const allowMutedAutoPlay = this._config.playback.allowMutedAutoPlay;
    Player.getCapabilities(this.engineType).then(capabilities => {
      if (capabilities.autoplay) {
        onAutoPlay();
      } else {
        if (capabilities.mutedAutoPlay) {
          if (isMuted() && !this._fallbackToMutedAutoPlay) {
            onMutedAutoPlay();
          } else if (allowMutedAutoPlay) {
            onFallbackToMutedAutoPlay();
          } else {
            onAutoPlayFailed();
          }
        } else {
          onAutoPlayFailed();
        }
      }
    });

    const isMuted = (): boolean | null => {
      Player._logger.debug('Checking muted value');
      // at this point it is possible that the engine hasn't loaded yet (like youtube), so this.muted is not reflecting the actual state.
      // first, check if someone set a value in muted; if not, then check the config; lastly, check the engine.
      const muted =
        (typeof this._playbackAttributesState.muted === 'boolean' && this._playbackAttributesState.muted) ||
        (typeof this._config.playback.muted === 'boolean' && this._config.playback.muted) ||
        this.muted;
      Player._logger.debug('Muted value is:', muted);
      return muted;
    };

    const onAutoPlay = (): void => {
      Player._logger.debug('Start autoplay');
      // If the previous state was fallback to muted autoplay:
      // unmute the player and clear the fallback state
      if (this._fallbackToMutedAutoPlay) {
        this._fallbackToMutedAutoPlay = false;
        this.muted = false;
      }
      this.play();
    };

    const onMutedAutoPlay = (): void => {
      Player._logger.debug('Start muted autoplay');
      this.play();
    };

    const onFallbackToMutedAutoPlay = (): void => {
      Player._logger.debug('Fallback to muted autoplay');
      this._fallbackToMutedAutoPlay = true;
      this.muted = true;
      this.dispatchEvent(new FakeEvent(CustomEventType.FALLBACK_TO_MUTED_AUTOPLAY));
      this.play();
    };

    const onAutoPlayFailed = (): void => {
      Player._logger.warn('Autoplay failed, pause player');
      this._posterManager.show();
      this.load();
      this.dispatchEvent(new FakeEvent(CustomEventType.AUTOPLAY_FAILED));
    };
  }

  /**
   }
   * Checks auto play configuration and handles initialization accordingly.
   * @returns {void}
   * @private
   */
  private _handleAutoPlay(): void {
    if (this.isAudio() || this._config.playback.autoplay !== AutoPlayType.TRUE) {
      this._posterManager.show();
    }
    if (this._config.playback.autoplay === AutoPlayType.TRUE) {
      this._autoPlay();
    }
  }

  /**
   * Play after async ads
   * @private
   * @returns {void}
   */
  private _playAfterAsyncMiddleware(): void {
    if (this._engine) {
      this._play();
    } else {
      this._eventManager.listenOnce(this, CustomEventType.SOURCE_SELECTED, () => this._play());
    }
  }

  private _load(): void {
    const resetFlags = (): void => {
      this._loading = false;
      this._reset = false;
    };
    if (this._engine && !this.src && !this._loading) {
      this._loading = true;
      const startTime = this._sources.startTime;
      this._engine
        .load(startTime)
        .then(data => {
          if (this.isLive() && (startTime === -1 || Number(startTime) >= Number(this.duration))) {
            this._isOnLiveEdge = true;
          }
          this._updateTracks(data.tracks);
          this.dispatchEvent(new FakeEvent(CustomEventType.TRACKS_CHANGED, {tracks: this._tracks}));
          if(this.sources.thumbnails) this._externalThumbnailsHandler.load(this.sources.thumbnails);
        })
        .finally(() => {
          resetFlags();
        });
    }
  }

  /**
   * Handles and sets the initial dimensions configuration if such exists.
   * @private
   * @returns {void}
   */
  private _handleDimensions(): void {
    const {dimensions} = this.config;
    if (Utils.Object.isObject(dimensions) && !Utils.Object.isEmptyObject(dimensions)) {
      this.dimensions = dimensions;
    }
  }

  /**
   * Start/resume the engine playback.
   * @private
   * @returns {void}
   */
  private _play(): void {
    if (this._shouldLoadAfterAttach) {
      this._load();
      this._shouldLoadAfterAttach = false;
    }
    this.ready().then(() => {
      if (this._shouldPlayerSeekToLiveEdge()) {
        this.seekToLiveEdge();
      }
      this._engine.play();
    });
  }

  /**
   * Checking if player should seek to live edge.
   * @returns {boolean} - Whether player should seek to live edge.
   * @private
   */
  private _shouldPlayerSeekToLiveEdge(): boolean {
    if (this.isLive()) {
      const outOfDvr = !this.isDvr() || (typeof this.currentTime === 'number' && this.currentTime < 0);
      if (!this._firstPlay) {
        return outOfDvr;
      } else {
        return !!this.src && !this.isOnLiveEdge()
            // Live video can be set with explicit start time,(e.g. startOver)
            // in that case we don't want to move to the liveEdge
            && this._sources.startTime === undefined;
      }
    }
    return false;
  }

  /**
   * Starts the engine pause.
   * @private
   * @returns {void}
   */
  private _pause(): void {
    this._engine.pause();
  }

  /**
   * Set the current time in seconds.
   * @param {Number} to - The number to set in seconds.
   * @private
   * @returns {void}
   */
  private _setCurrentTime(to: number): void {
    if (this._engine) {
      if (Utils.Number.isNumber(to)) {
        let boundedTo = to;
        if (to < 0) {
          boundedTo = 0;
        }
        const safeDuration = this.isLive() ? this._engine.duration : this._engine.duration - DURATION_OFFSET;

        if (boundedTo > safeDuration) {
          boundedTo = safeDuration;
        }
        this._engine.currentTime = boundedTo;
      }
    }
  }

  /**
   * @function _onPause
   * @return {void}
   * @private
   */
  private _onPause(): void {
    this._isOnLiveEdge = false;
  }

  /**
   * @function _onPlay
   * @return {void}
   * @private
   */
  private _onPlay(): void {
    if (this._firstPlay) {
      this._firstPlay = false;
      this.dispatchEvent(new FakeEvent(CustomEventType.FIRST_PLAY));
      this.hideBlackCover();
      if (typeof this._playbackAttributesState.rate === 'number') {
        this.playbackRate = this._playbackAttributesState.rate;
      }
    }
  }

  /**
   * @function _onPlaying
   * @return {void}
   * @private
   */
  private _onPlaying(): void {
    if (!this._firstPlaying) {
      this._firstPlaying = true;
      if (!this.isAudio()) {
        this._posterManager.hide();
      }
      this.dispatchEvent(new FakeEvent(CustomEventType.FIRST_PLAYING));
    }
    if (this._engine && this._pendingSelectedVideoTrack) {
      this._engine.selectVideoTrack(this._pendingSelectedVideoTrack);
      this._pendingSelectedVideoTrack = undefined;
    }
  }

  /**
   * @function _onPlayFailed
   * @param {FakeEvent} event - the play failed event
   * @return {void}
   * @private
   */
  private _onPlayFailed(event: FakeEvent): void {
    if (this._firstPlay && this._config.playback.autoplay) {
      this._posterManager.show();
      this.dispatchEvent(new FakeEvent(CustomEventType.AUTOPLAY_FAILED, event.payload));
    }
  }

  /**
   * @function _onEnded
   * @return {void}
   * @private
   */
  private _onEnded(): void {
    if (!this.paused) {
      this._pause();
    }
  }

  /**
   * Resets the state flags of the player.
   * @returns {void}
   * @private
   */
  private _resetStateFlags(): void {
    this._loading = false;
    this._firstPlay = true;
    this._loadingMedia = false;
    this._playbackStart = false;
    this._firstPlaying = false;
  }

  /**
   * Calculates the aspect ratio of the player.
   * @param {HTMLDivElement} targetElement - the player root element.
   * @param {PKDimensionsConfig} dimensions - the player dimensions input.
   * @returns {void}
   * @public
   */
  private _calcRatio(targetElement: HTMLDivElement, dimensions: PKDimensionsConfig): void {
    if (typeof dimensions.ratio !== 'undefined') {
      this._aspectRatio = dimensions.ratio;
    }
    if (this._aspectRatio) {
      const [ratioWidth, ratioHeight] = this._aspectRatio.split(':').map(r => Number(r));
      if (dimensions.width || (!dimensions.width && !dimensions.height)) {
        const height = (ratioHeight / ratioWidth) * targetElement.clientWidth;
        targetElement.style.height = `${height}px`;
      } else if (dimensions.height && !dimensions.width) {
        const width = (ratioWidth / ratioHeight) * targetElement.clientHeight;
        targetElement.style.width = `${width}px`;
      }
    }
  }

  /**
   * @returns {Object} - The default configuration of the player.
   * @private
   * @static
   */
  public static get _defaultConfig(): any {
    return Utils.Object.copyDeep(DefaultConfig);
  }

  // </editor-fold>

  // <editor-fold desc="Tracks">

  /**
   * handle tracks change
   * @param {FakeEvent} event - the tracks change event payload
   * @private
   * @returns {void}
   */
  public _onTracksChanged(event: FakeEvent): void {
    this._updateTracks(event.payload.tracks);
    this.dispatchEvent(event);
  }

  /**
   * update the player tracks
   * @param {Array<Track>} tracks - the player tracks
   * @private
   * @returns {void}
   */
  public _updateTracks(tracks: Array<Track>): void {
    Player._logger.debug('Tracks changed', tracks);
    this._tracks = tracks?.concat(this._externalCaptionsHandler.getExternalTracks(tracks));
    this._applyABRRestriction(this._config);
    this._addTextTrackOffOption();
    this._maybeSetTracksLabels();
    this._setDefaultTracks();
  }

  /**
   * Returns the tracks according to a type.
   * @function _getTextTracks
   * @template {TextTrack | AudioTrack | VideoTrack} T
   * @param {T} [type] - a tracks type filter.
   * @returns {Array<T>} - The parsed tracks.
   * @private
   */
  private _getTracksByType<T extends PKTextTrack | AudioTrack | VideoTrack | ImageTrack>(type: { new(...args: any[]): T }): T[] {
    return this._tracks.reduce((arr: T[], track) => {
      if (track instanceof type && track.available) {
        arr.push(track);
      }
      return arr;
    }, [] as T[]);
  }

  /**
   * Returns the image tracks.
   * @function _getImageTracks
   * @returns {Array<ImageTrack>} - The image tracks.
   * @private
   */
  private _getImageTracks(): Array<ImageTrack> {
    return this._getTracksByType<ImageTrack>(ImageTrack);
  }

  /**
   * Returns the text tracks.
   * @function _getTextTracks
   * @returns {Array<TextTrack>} - The text tracks.
   * @private
   */
  public _getTextTracks(): Array<PKTextTrack> {
    return this._getTracksByType<PKTextTrack>(PKTextTrack);
  }

  /**
   * Returns the video tracks.
   * @function _getVideoTracks
   * @returns {Array<VideoTrack>} - The video tracks.
   * @private
   */
  private _getVideoTracks(): Array<VideoTrack> {
    return this._getTracksByType<VideoTrack>(VideoTrack);
  }

  /**
   * Returns the audio tracks.
   * @function _getAudioTracks
   * @returns {Array<AudioTrack>} - The audio tracks.
   * @private
   */
  private _getAudioTracks(): Array<AudioTrack> {
    return this._getTracksByType<AudioTrack>(AudioTrack);
  }

  /**
   * Mark the selected track as active
   * @function _markActiveTrack
   * @param {Track} track - the track to mark
   * @returns {void}
   * @private
   */
  private _markActiveTrack(track: Track): void {
    let tracks;
    if (track instanceof VideoTrack) {
      tracks = this._getVideoTracks();
    } else if (track instanceof AudioTrack) {
      tracks = this._getAudioTracks();
    } else if (track instanceof PKTextTrack) {
      tracks = this._getTextTracks();
    }
    if (tracks) {
      for (let i = 0; i < tracks.length; i++) {
        tracks[i].active = track.index === tracks[i].index;
      }
    }
  }

  /**
   * handle text cue change
   * @param {FakeEvent} event - the cue change event payload
   * @private
   * @returns {void}
   */
  private _onCueChange(event: FakeEvent): void {
    Player._logger.debug('Text cue changed', event.payload.cues);
    //TODO: remove filter once FEC-11048 fix is done
    try {
      this._activeTextCues = event.payload.cues.filter((cue, index, cues) => {
        const prevCue = cues[index - 1];
        if (!prevCue) {
          return true;
        }
        return !(cue.startTime === prevCue.startTime && cue.endTime === prevCue.endTime && cue.text.trim() === prevCue.text.trim());
      });
    } catch (e) {
      this._activeTextCues = event.payload.cues;
    }
    this._updateCueDisplaySettings();
    this._updateTextDisplay(this._activeTextCues);
    this.dispatchEvent(event);
  }

  /**
   * update the text cue display settings
   * @private
   * @returns {void}
   */
  private _updateCueDisplaySettings(): void {
    const activeCues = this._activeTextCues;
    const settings = this._textDisplaySettings;
    for (let i = 0; i < activeCues.length; i++) {
      const cue = activeCues[i];
      for (const name in settings) {
        if (settings[name]) {
          cue[name] = settings[name];
        }
      }
    }
  }

  /**
   * update the text display
   * @param {Array<Cue>} cues - list of cues
   * @private
   * @returns {void}
   */
  private _updateTextDisplay(cues: Array<VTTCue>): void {
    if (this._config.text.useShakaTextTrackDisplay) {
      this._applyCustomSubtitleStyles();
    }
    if (!this._config.text.useNativeTextTrack && !this._config.text.useShakaTextTrackDisplay) {
      processCues(window, cues, this._textDisplayEl, this._textStyle);
    }
  }

  /**
   * Add off text track if there are actual text tracks associated with media
   * setting this track is the same as calling Player's hideTextTrack
   * @private
   * @returns {void}
   */
  private _addTextTrackOffOption(): void {
    const textTracks = this._getTextTracks();
    if (textTracks && textTracks.length) {
      this._tracks.push(
        new PKTextTrack({
          active: false,
          kind: PKTextTrack.KIND.SUBTITLES,
          label: 'Off',
          language: OFF
        })
      );
    }
  }

  /**
   * Sets the default tracks defined in the player config.
   * @returns {void}
   * @private
   */
  private _setDefaultTracks(): void {
    const activeTracks = this.getActiveTracks();
    const defaultStreamTrack = this._getTextTracks().find(track => track.default);
    const playbackConfig = this.config.playback;
    const offTextTrack: Track = this._getTextTracks().find(track => PKTextTrack.langComparer(OFF, track.language))! ;
    const defaultLanguage = this._getLanguage<PKTextTrack>(this._getTextTracks(), playbackConfig.textLanguage, defaultStreamTrack);
    const currentOrConfiguredTextLang =
      !this._playbackAttributesState.textLanguage || this.config.disableUserCache ? defaultLanguage : this._playbackAttributesState.textLanguage;
    const currentOrConfiguredAudioLang =
      this._playbackAttributesState.audioLanguage ||
      this._getLanguage<AudioTrack>(this._getAudioTracks(), playbackConfig.audioLanguage, activeTracks.audio);
    if (!playbackConfig.captionsDisplay) {
      this._playbackAttributesState.textLanguage = defaultLanguage;
      this._setDefaultTrack<PKTextTrack>(this._getTextTracks(), OFF, offTextTrack);
    } else {
      if (currentOrConfiguredTextLang === playbackConfig.textLanguage) {
        this._setDefaultTrack<PKTextTrack>(this._getTextTracks(), currentOrConfiguredTextLang, offTextTrack, playbackConfig.additionalTextLanguage);
      } else {
        this._setDefaultTrack<PKTextTrack>(this._getTextTracks(), currentOrConfiguredTextLang, offTextTrack);
      }
    }
    if (currentOrConfiguredAudioLang === playbackConfig.audioLanguage) {
      this._setDefaultTrack<AudioTrack>(
        this._getAudioTracks(),
        currentOrConfiguredAudioLang,
        activeTracks.audio,
        playbackConfig.additionalAudioLanguage
      );
    } else {
      this._setDefaultTrack<AudioTrack>(this._getAudioTracks(), currentOrConfiguredAudioLang, activeTracks.audio);
    }
    this._setDefaultVideoTrack();
  }

  /**
   * Gets the track language that should be set by default.
   * @param {Array<T>} tracks - the audio or text tracks.
   * @param {string} configuredLanguage - The configured language (can be also "auto").
   * @param {?T} defaultTrack - The default track.
   * @private
   * @returns {string} - The track language to set by default.
   */
  private _getLanguage<T extends PKTextTrack | AudioTrack>(tracks: T[], configuredLanguage: string, defaultTrack?: T): string {
    let language = configuredLanguage;
    if (language === AUTO) {
      const localeTrack: T | undefined = tracks.find(track => Track.langComparer(Locale.language, track.language));
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
   * @template {TextTrack | AudioTrack} T
   * @param {Array<T>} tracks - the audio or text tracks.
   * @param {string} language - The track language.
   * @param {Track} defaultTrack - The default track to set in case there is no language configured.
   * @param {string} additionalLanguage - additional track language.
   * @returns {void}
   * @private
   */
  private _setDefaultTrack<T extends PKTextTrack | AudioTrack>(
    tracks: T[],
    language: string,
    defaultTrack?: Track | null,
    additionalLanguage?: string | string []
  ): void {
    const updateTrack = (track: T): void => {
      this.selectTrack(track);
      this._markActiveTrack(track);
    };
    const sameTrack: T | undefined = tracks.find(track => Track.langComparer(language, track.language, additionalLanguage, true));
    if (sameTrack) {
      updateTrack(sameTrack);
    } else {
      const track: T | undefined = tracks.find(track => Track.langComparer(language, track.language, additionalLanguage, false));
      if (track) {
        updateTrack(track);
      } else if (defaultTrack && !defaultTrack.active) {
        this.selectTrack(defaultTrack);
      }
    }
  }

  /**
   * Sets the video track selected by the user.
   * @returns {void}
   * @private
   */
  private _setDefaultVideoTrack(): void {
    const sortedVideoTracks = this._getVideoTracks().sort((track1: VideoTrack, track2: VideoTrack) => track2.bandwidth - track1.bandwidth);
    let selectedVideoTrack = sortedVideoTracks.find(
      (track: VideoTrack) => track.label && track.label === this._playbackAttributesState.videoTrack?.label
    );
    if (!selectedVideoTrack) {
      selectedVideoTrack = sortedVideoTracks.find(
        (track: VideoTrack) => track.height && track.height === this._playbackAttributesState.videoTrack?.height
      );
    }
    if (selectedVideoTrack) {
      this.selectTrack(selectedVideoTrack);
    }
  }

  /**
   * Checks for callbacks that should change the tracks, and call them on the
   * respective track group (audio/text/video)
   * @private
   * @returns {void}
   */
  private _maybeSetTracksLabels(): void {
    const customLabels = this._config.customLabels;
    if (customLabels) {
      for (const callbackType in customLabels) {
        if (!Object.prototype.hasOwnProperty.call(customLabels, callbackType)) {
          return;
        }
        switch (callbackType) {
        case LabelOptions.QUALITIES:
          this._setTracksCustomLabels(this._getVideoTracks(), customLabels[callbackType]);
          break;
        case LabelOptions.AUDIO:
          this._setTracksCustomLabels(this._getAudioTracks(), customLabels[callbackType]);
          break;
        case LabelOptions.CAPTIONS:
          this._setTracksCustomLabels(this._getTextTracks(), customLabels[callbackType]);
          break;
        }
      }
    }
  }

  /**
   *
   * @template {AudioTrack | TextTrack | VideoTrack} T
   * @param {Array<T>} tracks - tracks
   * @param {Function} callback - application label callback, returns a string
   * @private
   * @returns {void}
   */
  private _setTracksCustomLabels<T extends AudioTrack | PKTextTrack | VideoTrack>(tracks: T[], callback: (track: T) => string): void {
    tracks.forEach(track => {
      const result = callback(Utils.Object.copyDeep(track));
      if (result) {
        track.label = result;
      }
    });
  }

  /**
   * Gets the player event types.
   * @returns {PKEventTypes} - The event types of the player.
   * @public
   */
  public get Event(): PKEventTypes {
    return EventType;
  }

  /**
   * Gets the player TextStyle.
   * @returns {TextStyle} - The TextStyle class
   * @public
   */
  public get TextStyle(): typeof TextStyle {
    return TextStyle;
  }

  /**
   * Gets the player state types.
   * @returns {PKStateTypes} - The state types of the player.
   * @public
   */
  public get State(): typeof StateType {
    return StateType;
  }

  /**
   * Gets the player tracks types.
   * @returns {TrackType} - The tracks types of the player.
   * @public
   */
  public get Track(): typeof TrackType {
    return TrackType;
  }

  /**
   * Gets the player log level types.
   * @returns {PKLogLevelTypes} - The log level types of the player.
   * @public
   */
  public get LogLevelType(): Record<keyof LoggerLevels, keyof LoggerLevels> {
    return LogLevelType;
  }

  /**
   * Gets the player log level objects.
   * @returns {PKLogLevels} - The log levels objects of the player.
   * @public
   */
  public get LogLevel(): LoggerLevels {
    return LogLevel;
  }

  /**
   * Gets the player abr modes.
   * @returns {PKAbrModes} - The abr modes of the player.
   * @public
   */
  public get AbrMode(): typeof AbrMode {
    return AbrMode;
  }

  /**
   * Gets the player media types.
   * @returns {PKMediaTypes} - The media types of the player.
   * @public
   */
  public get MediaType(): typeof MediaType {
    return MediaType;
  }

  /**
   * Gets the player stream types.
   * @returns {PKStreamTypes} - The stream types of the player.
   * @public
   */
  public get StreamType(): typeof StreamType {
    return StreamType;
  }

  /**
   * Gets the player engine types.
   * @returns {PKEngineTypes} - The engine types of the player.
   * @public
   */
  public get EngineType(): typeof EngineType {
    return EngineType;
  }

  /**
   * Gets the player cors types.
   * @returns {PKCorsTypes} - The player cors types.
   * @public
   */
  public get CorsType(): typeof CorsType {
    return CorsType;
  }

  /**
   * Gets the ad break types.
   * @returns {PKAdBreakTypes} - The ad break types of the player.
   * @public
   */
  public get AdBreakType(): typeof AdBreakType {
    return AdBreakType;
  }

  /**
   * Gets the ad break tag types.
   * @returns {PKAdTagTypes} - The ad tag types of the player.
   * @public
   */
  public get AdTagType(): typeof AdTagType{
    return AdTagType;
  }

  /**
   * Gets the player static error class.
   * @returns {PKError} - The player static error class.
   * @public
   */
  public get Error(): typeof PKError {
    return PKError;
  }
}
