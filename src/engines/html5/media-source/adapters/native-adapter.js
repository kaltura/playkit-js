//@flow
import {CustomEventType, Html5EventType} from '../../../../event/event-type';
import Track from '../../../../track/track';
import VideoTrack from '../../../../track/video-track';
import AudioTrack from '../../../../track/audio-track';
import PKTextTrack from '../../../../track/text-track';
import {RequestType} from '../../../../enums/request-type';
import BaseMediaSourceAdapter from '../base-media-source-adapter';
import {getSuitableSourceForResolution} from '../../../../utils/resolution';
import * as Utils from '../../../../utils/util';
import FairPlay from '../../../../drm/fairplay';
import Env from '../../../../utils/env';
import Error from '../../../../error/error';
import defaultConfig from './native-adapter-default-config';
import type {FairPlayDrmConfigType} from './fairplay-drm-handler';
import {FairPlayDrmHandler} from './fairplay-drm-handler';
import {EXTERNAL_TRACK_ID} from '../../../../track/external-captions-handler';

const BACK_TO_FOCUS_TIMEOUT: number = 1000;
const MAX_MEDIA_RECOVERY_ATTEMPTS: number = 3;
const NUDGE_SEEK_AFTER_FOCUS: number = 0.1;

/**
 * An illustration of media source extension for progressive download
 * @classdesc
 * @implements {IMediaSourceAdapter}
 */
export default class NativeAdapter extends BaseMediaSourceAdapter {
  /**
   * The id of the Adapter
   * @member {string} id
   * @static
   * @public
   */
  static id: string = 'NativeAdapter';

  /**
   * The adapter logger
   * @member {any} _logger
   * @private
   * @static
   */
  static _logger = BaseMediaSourceAdapter.getLogger(NativeAdapter.id);
  /**
   * static video element for canPlayType testing
   * @member {} TEST_VIDEO
   * @type {HTMLVideoElement}
   * @static
   */
  static TEST_VIDEO: HTMLVideoElement = Utils.Dom.createElement('video');
  /**
   * The DRM protocols implementations for native adapter.
   * @type {Array<Function>}
   * @private
   * @static
   */
  static _drmProtocols: Array<Function> = [FairPlay];
  /**
   * The DRM protocol for the current playback.
   * @type {?Function}
   * @private
   * @static
   */
  static _drmProtocol: ?Function = null;
  /**
   * The supported progressive mime types by the native adapter.
   * @member {Array<string>} _progressiveMimeTypes
   * @static
   * @private
   */
  static _progressiveMimeTypes: Array<string> = ['video/mp4', 'audio/mp3'];
  /**
   * The DRM handler playback.
   * @type {?FairPlayDrmHandler}
   * @private
   */
  _drmHandler: ?FairPlayDrmHandler;
  /**
   * The original progressive sources
   * @member {Array<PKMediaSourceObject>} - _progressiveSources
   * @private
   */
  _progressiveSources: Array<PKMediaSourceObject>;
  /**
   * The player tracks.
   * @member {Array<Track>} - _playerTracks
   * @private
   */
  _playerTracks: Array<Track>;
  /**
   * The id of _liveDurationChangeInterval
   * @member {?number} - _liveDurationChangeInterval
   * @private
   */
  _liveDurationChangeInterval: ?IntervalID;
  /**
   * The live edge value
   * @member {number} - _liveEdge
   * @private
   */
  _liveEdge: number;
  /**
   * Id for interval that starts upon waiting/stalling event and check if we are offline
   * @member {?TimeoutID} - _heartbeatTimeoutId
   * @private
   */
  _heartbeatTimeoutId: ?TimeoutID;
  /**
   * video dimensions for native check if video track change and which video dimensions is the selected track
   * @member {?PKVideoDimensionsObject} - video dimensions
   * @private
   */
  _videoDimensions: ?PKVideoDimensionsObject;

  _loadPromiseReject: ?Function;

  _lastTimeUpdate: number = 0;

  _waitingEventTriggered: ?boolean = false;

  /**
   * A counter to track the number of attempts to recover from media error
   * @type {number}
   * @private
   */
  _mediaErrorRecoveryAttempts: number = 0;

  /**
   * The last time detach occurred
   * @type {number}
   * @private
   */
  _lastTimeDetach: number = NaN;

  /**
   * The start time after attach
   * @type {number}
   * @private
   */
  _startTimeAttach: number = NaN;
  _nativeTextTracksMap = [];

  /**
   * Checks if NativeAdapter can play a given mime type.
   * @function canPlayType
   * @param {string} mimeType - The mime type to check
   * @returns {boolean} - Whether the native adapter can play a specific mime type
   * @static
   */
  static canPlayType(mimeType: string): boolean {
    let canPlayType = false;
    if (typeof mimeType === 'string') {
      canPlayType = !!NativeAdapter.TEST_VIDEO.canPlayType(mimeType.toLowerCase());
    }
    NativeAdapter._logger.debug('canPlayType result for mimeType:' + mimeType + ' is ' + canPlayType.toString());
    return canPlayType;
  }

  /**
   * Checks if NativeAdapter can play a given drm data.
   * @function canPlayDrm
   * @param {Array<Object>} drmData - The drm data to check.
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @returns {boolean} - Whether the native adapter can play a specific drm data.
   * @static
   */
  static canPlayDrm(drmData: Array<Object>, drmConfig: PKDrmConfigObject): boolean {
    NativeAdapter._drmProtocol = null;
    for (let drmProtocol of NativeAdapter._drmProtocols) {
      if (drmProtocol.isConfigured(drmData, drmConfig)) {
        NativeAdapter._drmProtocol = drmProtocol;
        break;
      }
    }
    if (!NativeAdapter._drmProtocol) {
      for (let drmProtocol of NativeAdapter._drmProtocols) {
        if (drmProtocol.canPlayDrm(drmData)) {
          NativeAdapter._drmProtocol = drmProtocol;
        }
      }
    }
    return !!NativeAdapter._drmProtocol;
  }

  /**
   * Factory method to create media source adapter.
   * @function createAdapter
   * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with.
   * @param {PKMediaSourceObject} source - The source Object.
   * @param {Object} config - The player configuration.
   * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter.
   * @static
   */
  static createAdapter(videoElement: HTMLVideoElement, source: PKMediaSourceObject, config: Object): IMediaSourceAdapter {
    const adapterConfig: Object = {
      displayTextTrack: false,
      progressiveSources: []
    };
    if (Utils.Object.hasPropertyPath(config, 'text.useNativeTextTrack')) {
      adapterConfig.displayTextTrack = Utils.Object.getPropertyPath(config, 'text.useNativeTextTrack');
    }
    if (Utils.Object.hasPropertyPath(config, 'sources.progressive')) {
      adapterConfig.progressiveSources = Utils.Object.getPropertyPath(config, 'sources.progressive');
    }
    if (Utils.Object.hasPropertyPath(config, 'text')) {
      adapterConfig.enableCEA708Captions = config.text.enableCEA708Captions;
      adapterConfig.captionsTextTrack1Label = config.text.captionsTextTrack1Label;
      adapterConfig.captionsTextTrack1LanguageCode = config.text.captionsTextTrack1LanguageCode;
      adapterConfig.captionsTextTrack2Label = config.text.captionsTextTrack2Label;
      adapterConfig.captionsTextTrack2LanguageCode = config.text.captionsTextTrack2LanguageCode;
    }
    if (Utils.Object.hasPropertyPath(config, 'playback')) {
      if (Utils.Object.hasPropertyPath(config.playback, 'options.html5.native')) {
        Utils.Object.mergeDeep(adapterConfig, config.playback.options.html5.native);
      }
    }
    adapterConfig.network = config.network;
    return new this(videoElement, source, adapterConfig);
  }

  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to NativeAdapter
   * @param {PKMediaSourceObject} source - The source object
   * @param {Object} config - The player configuration
   */
  constructor(videoElement: HTMLVideoElement, source: PKMediaSourceObject, config: Object) {
    NativeAdapter._logger.debug('Creating adapter');
    super(videoElement, source, config);
    this._config = Utils.Object.mergeDeep({}, defaultConfig, this._config);
    this._progressiveSources = config.progressiveSources;
    this._liveEdge = 0;
  }

  /**
   * dispatches an error (is given to a class the cannot dispatch, like static fair play class)
   * @private
   * @param {Error} error - the error to dispatch
   * @returns {void}
   */
  _dispatchErrorCallback(error: Error): void {
    this._trigger(Html5EventType.ERROR, error);
  }

  /**
   * dispatches the license response time after received
   * @private
   * @param {number} data - an object containing data regarding the license load
   * @returns {void}
   */
  _dispatchDRMLicenseLoaded(data: any): void {
    this._trigger(CustomEventType.DRM_LICENSE_LOADED, data);
  }
  /**
   * Sets the DRM playback in case such needed.
   * @private
   * @returns {void}
   */
  _maybeSetDrmPlayback(): void {
    if (NativeAdapter._drmProtocol && this._sourceObj && this._sourceObj.drmData) {
      const drmConfig: FairPlayDrmConfigType = {
        licenseUrl: '',
        certificate: '',
        network: this._config.network
      };
      NativeAdapter._drmProtocol.setDrmPlayback(drmConfig, this._sourceObj.drmData);
      this._drmHandler = new FairPlayDrmHandler(
        this._videoElement,
        drmConfig,
        error => this._dispatchErrorCallback(error),
        data => this._dispatchDRMLicenseLoaded(data)
      );
    }
  }

  /**
   * Set the suitable progressive source according the current resolution
   * @function _setProgressiveSource
   * @returns {void}
   * @private
   */
  _setProgressiveSource(): void {
    let suitableTrack = getSuitableSourceForResolution(this._progressiveSources, this._videoElement.offsetWidth, this._videoElement.offsetHeight);
    if (suitableTrack) {
      this._sourceObj = suitableTrack;
    }
  }

  /**
   * Checks if the playback source is progressive
   * @function _isProgressivePlayback
   * @returns {boolean} - is progressive source
   * @private
   */
  _isProgressivePlayback(): boolean {
    return this._sourceObj ? NativeAdapter._progressiveMimeTypes.includes(this._sourceObj.mimetype.toLowerCase()) : false;
  }

  /**
   * Load the video source
   * @param {number} startTime - Optional time to start the video from.
   * @function load
   * @returns {Promise<Object>} - The loaded data
   */
  load(startTime: ?number): Promise<Object> {
    this._maybeSetDrmPlayback();
    if (!this._loadPromise) {
      this._loadPromise = new Promise((resolve, reject) => {
        this._lastTimeUpdate = startTime || 0;
        const playbackStartTime = this._startTimeAttach || startTime || 0;
        this._loadPromiseReject = reject;
        this._eventManager.listenOnce(this._videoElement, Html5EventType.LOADED_DATA, () => this._onLoadedData(resolve, playbackStartTime));
        this._eventManager.listen(this._videoElement, Html5EventType.TIME_UPDATE, () => this._onTimeUpdate());
        this._eventManager.listen(this._videoElement, Html5EventType.PLAY, () => this._resetHeartbeatTimeout());
        this._eventManager.listen(this._videoElement, Html5EventType.PAUSE, () => this._clearHeartbeatTimeout());
        this._eventManager.listen(this._videoElement, Html5EventType.ENDED, () => this._clearHeartbeatTimeout());
        this._eventManager.listen(this._videoElement, Html5EventType.ABORT, () => this._clearHeartbeatTimeout());
        this._eventManager.listen(this._videoElement, Html5EventType.SEEKED, () => this._syncCurrentTime());
        this._eventManager.listen(this._videoElement, Html5EventType.WAITING, () => (this._waitingEventTriggered = true));
        this._eventManager.listen(this._videoElement, Html5EventType.PLAYING, () => (this._waitingEventTriggered = false));
        // Sometimes when playing live in safari and switching between tabs the currentTime goes back with no seek events
        this._eventManager.listen(window, 'focus', () => {
          setTimeout(() => {
            if (Env.isIOS) {
              // In IOS HLS, sometimes when coming back from lock screen/Idle mode, the stream will get stuck, and only a small seek nudge will fix it.
              this._videoElement.currentTime =
                this._videoElement.currentTime > NUDGE_SEEK_AFTER_FOCUS ? this._videoElement.currentTime - NUDGE_SEEK_AFTER_FOCUS : 0;
            }
            this._syncCurrentTime();
          }, BACK_TO_FOCUS_TIMEOUT);
        });
        if (this._isProgressivePlayback()) {
          this._setProgressiveSource();
        }
        if (this._sourceObj && this._sourceObj.url) {
          this._setSrc().then(() => {
            this._trigger(CustomEventType.ABR_MODE_CHANGED, {mode: this._isProgressivePlayback() ? 'manual' : 'auto'});
            this._videoElement.load();
          });
        } else {
          this._videoElement.load();
        }
      });
    }
    return this._loadPromise;
  }

  /**
   * handle decode error - reload the video and seek to last currentTime
   * @param {?MediaError}error - the error object to be printed to log
   * @private
   * @returns {void}
   */
  _handleDecodeError(error: MediaError): void {
    NativeAdapter._logger.debug('handleDecodeError', error);
    const prevCurrTime = this._videoElement.currentTime;
    const prevActiveAudioTrack = this._getActivePKAudioTrack();
    const prevActiveTextTrack = this._getActivePKTextTrack();
    this._videoElement.load();
    this._eventManager.listenOnce(this._videoElement, Html5EventType.PLAYING, () => {
      this._mediaErrorRecoveryAttempts = 0;
    });

    this._eventManager.listenOnce(this._videoElement, Html5EventType.CAN_PLAY, () => {
      this._videoElement.currentTime = prevCurrTime;
      this._videoElement.play();
      this._videoElement.pause();
      if (prevActiveAudioTrack) {
        this.selectAudioTrack(prevActiveAudioTrack);
      }
      if (prevActiveTextTrack) {
        this.selectTextTrack(prevActiveTextTrack);
      } else {
        this._disableTextTracks();
      }
    });
  }

  handleMediaError(error: ?MediaError): boolean {
    if (this._loadPromiseReject) {
      this._loadPromiseReject(new Error(Error.Severity.CRITICAL, Error.Category.MEDIA, Error.Code.NATIVE_ADAPTER_LOAD_FAILED, error));
      return true;
    } else if (error && error.code === window.MediaError.MEDIA_ERR_DECODE) {
      this._mediaErrorRecoveryAttempts++;
      if (this._mediaErrorRecoveryAttempts <= MAX_MEDIA_RECOVERY_ATTEMPTS) {
        this._handleDecodeError(error);
        return true;
      }
    }
    return false;
  }

  /**
   * attach media - return the media source to handle the video tag
   * @public
   * @returns {void}
   */
  attachMediaSource(): void {
    this._startTimeAttach = this._lastTimeDetach;
    this._lastTimeDetach = NaN;
  }
  /**
   * detach media - will remove the media source from handling the video
   * @public
   * @returns {void}
   */
  detachMediaSource(): void {
    this._lastTimeDetach = this.currentTime;
    if (this._videoElement && this._videoElement.src) {
      Utils.Dom.setAttribute(this._videoElement, 'src', '');
      Utils.Dom.removeAttribute(this._videoElement, 'src');
    }
    this._loadPromise = null;
  }

  _setSrc(): Promise<*> {
    const pkRequest: PKRequestObject = {url: this._sourceObj ? this._sourceObj.url : '', body: null, headers: {}};
    let requestFilterPromise;
    if (typeof Utils.Object.getPropertyPath(this._config, 'network.requestFilter') === 'function') {
      try {
        NativeAdapter._logger.debug('Apply request filter');
        requestFilterPromise = this._config.network.requestFilter(RequestType.MANIFEST, pkRequest);
      } catch (error) {
        requestFilterPromise = Promise.reject(error);
      }
    }
    requestFilterPromise = requestFilterPromise || Promise.resolve(pkRequest);
    requestFilterPromise
      .then(updatedRequest => {
        this._videoElement.src = updatedRequest.url;
      })
      .catch(error => {
        this._trigger(Html5EventType.ERROR, new Error(Error.Severity.CRITICAL, Error.Category.NETWORK, Error.Code.REQUEST_FILTER_ERROR, error));
      });
    return requestFilterPromise;
  }

  /**
   * Loaded data event handler.
   * @param {Function} resolve - The resolve promise function.
   * @param {number} startTime - Optional time to start the video from.
   * @private
   * @returns {void}
   */
  _onLoadedData(resolve: Function, startTime: ?number): void {
    const parseTracksAndResolve = () => {
      this._playerTracks = this._getParsedTracks();
      this._addNativeAudioTrackChangeListener();
      this._addNativeTextTrackChangeListener();
      this._addNativeTextTrackAddedListener();
      NativeAdapter._logger.debug('The source has been loaded successfully');
      this._loadPromiseReject = null;
      resolve({tracks: this._playerTracks});
      if (this.isLive()) {
        this._handleLiveDurationChange();
      }
    };
    if (startTime && startTime > -1) {
      this._videoElement.currentTime = startTime;
    }
    if (this._videoElement.textTracks.length > 0) {
      parseTracksAndResolve();
    } else {
      this._eventManager.listenOnce(this._videoElement, Html5EventType.CAN_PLAY, parseTracksAndResolve.bind(this));
    }
    this._startTimeAttach = NaN;
  }

  _onTimeUpdate(): void {
    if (!this._videoElement.paused) {
      if (this._videoElement.currentTime > this._lastTimeUpdate) {
        if (this._waitingEventTriggered) {
          this._waitingEventTriggered = false;
          this._trigger(Html5EventType.PLAYING);
        }
        this._resetHeartbeatTimeout();
      } else if (this._videoElement.currentTime < this._lastTimeUpdate) {
        this._syncCurrentTime();
      } else {
        this._waitingEventTriggered = true;
        this._trigger(Html5EventType.WAITING);
      }
    }
    this._handleVideoTracksChange();
  }

  _syncCurrentTime(): void {
    this._lastTimeUpdate = this._videoElement.currentTime;
  }

  _resetHeartbeatTimeout(): void {
    this._lastTimeUpdate = this._videoElement.currentTime;
    this._clearHeartbeatTimeout();
    const onTimeout = () => {
      this._clearHeartbeatTimeout();
      this._trigger(
        Html5EventType.ERROR,
        new Error(
          Error.Severity.CRITICAL,
          Error.Category.NETWORK,
          Error.Code.TIMEOUT,
          `The player exceeded max buffer time of ${this._config.heartbeatTimeout} ms. No progress has been done during this time.`
        )
      );
    };
    this._heartbeatTimeoutId = setTimeout(onTimeout, this._config.heartbeatTimeout);
  }

  _clearHeartbeatTimeout(): void {
    if (this._heartbeatTimeoutId) {
      clearTimeout(this._heartbeatTimeoutId);
      this._heartbeatTimeoutId = null;
    }
  }

  _handleVideoTracksChange(): void {
    const {videoHeight, videoWidth} = this._videoElement;
    if (!this._videoDimensions || videoHeight !== this._videoDimensions.videoHeight || videoWidth !== this._videoDimensions.videoWidth) {
      this._videoDimensions = {videoHeight, videoWidth};
      const setting = {
        language: '',
        height: videoHeight,
        width: videoWidth,
        active: true
      };
      this._onTrackChanged(new VideoTrack(setting));
      NativeAdapter._logger.debug('Video track change', new VideoTrack(setting));
    }
  }

  /**
   * Destroys the native adapter.
   * @function destroy
   * @returns {Promise<*>} - The destroy promise.
   */
  destroy(): Promise<*> {
    NativeAdapter._logger.debug('destroy');
    return new Promise((resolve, reject) => {
      super.destroy().then(
        () => {
          this._drmHandler && this._drmHandler.destroy();
          this._waitingEventTriggered = false;
          this._progressiveSources = [];
          this._loadPromise = null;
          this._nativeTextTracksMap = [];
          this._loadPromiseReject = null;
          this._liveEdge = 0;
          this._lastTimeUpdate = 0;
          this._lastTimeDetach = NaN;
          this._startTimeAttach = NaN;
          this._videoDimensions = null;
          this._clearHeartbeatTimeout();
          if (this._liveDurationChangeInterval) {
            clearInterval(this._liveDurationChangeInterval);
            this._liveDurationChangeInterval = null;
          }
          resolve();
        },
        () => reject
      );
    });
  }

  /**
   * Get the parsed tracks
   * @function _getParsedTracks
   * @returns {Array<Track>} - The parsed tracks
   * @private
   */
  _getParsedTracks(): Array<Track> {
    const videoTracks = this._getParsedVideoTracks();
    const audioTracks = this._getParsedAudioTracks();
    const textTracks = this._getParsedTextTracks();
    return videoTracks.concat(audioTracks).concat(textTracks);
  }

  /**
   * Get the parsed video tracks
   * @function _getParsedVideoTracks
   * @returns {Array<Track>} - The parsed video tracks
   * @private
   */
  _getParsedVideoTracks(): Array<Track> {
    if (this._isProgressivePlayback()) {
      return this._getParsedProgressiveVideoTracks();
    } else {
      return this._getParsedAdaptiveVideoTracks();
    }
  }

  /**
   * Get the parsed progressive video tracks
   * @function _getParsedProgressiveVideoTracks
   * @returns {Array<Track>} - The parsed progressive video tracks
   * @private
   */
  _getParsedProgressiveVideoTracks(): Array<Track> {
    const videoTracks = this._progressiveSources;
    const parsedTracks = [];
    if (videoTracks) {
      for (let i = 0; i < videoTracks.length; i++) {
        const settings = {
          id: videoTracks[i].id,
          bandwidth: videoTracks[i].bandwidth,
          width: videoTracks[i].width,
          height: videoTracks[i].height,
          active: this._sourceObj ? videoTracks[i].id === this._sourceObj.id : false,
          index: i
        };
        parsedTracks.push(new VideoTrack(settings));
      }
    }
    return parsedTracks;
  }

  /**
   * Get the parsed adaptive video tracks
   * @function _getParsedAdaptiveVideoTracks
   * @returns {Array<Track>} - The parsed adaptive video tracks
   * @private
   */
  _getParsedAdaptiveVideoTracks(): Array<Track> {
    //TODO check adaptation in safari hls
    const videoTracks = this._videoElement.videoTracks;
    const parsedTracks = [];
    if (videoTracks) {
      for (let i = 0; i < videoTracks.length; i++) {
        const settings = {
          //TODO calculate width/height/bandwidth
          id: videoTracks[i].id,
          active: videoTracks[i].selected,
          label: videoTracks[i].label,
          language: videoTracks[i].language,
          index: i
        };
        parsedTracks.push(new VideoTrack(settings));
      }
    }
    return parsedTracks;
  }

  /**
   * Get the parsed audio tracks
   * @function _getParsedAudioTracks
   * @returns {Array<AudioTrack>} - The parsed audio tracks
   * @private
   */
  _getParsedAudioTracks(): Array<AudioTrack> {
    const audioTracks = this._videoElement.audioTracks;
    const parsedTracks = [];
    if (audioTracks) {
      for (let i = 0; i < audioTracks.length; i++) {
        const settings = {
          id: audioTracks[i].id,
          active: audioTracks[i].enabled,
          label: audioTracks[i].label,
          language: audioTracks[i].language,
          index: i
        };
        parsedTracks.push(new AudioTrack(settings));
      }
    }
    return parsedTracks;
  }

  /**
   * Get the parsed text tracks
   * @function _getParsedTextTracks
   * @returns {Array<PKTextTrack>} - The parsed text tracks
   * @private
   */
  _getParsedTextTracks(): Array<PKTextTrack> {
    const captionsTextTrackLabels = [this._config.captionsTextTrack1Label, this._config.captionsTextTrack2Label];
    const captionsTextTrackLanguageCodes = [this._config.captionsTextTrack1LanguageCode, this._config.captionsTextTrack2LanguageCode];
    const textTracks = this._videoElement.textTracks;
    const parsedTracks = [];
    if (textTracks) {
      for (let i = 0; i < textTracks.length; i++) {
        if (textTracks[i].language !== EXTERNAL_TRACK_ID || textTracks[i].label !== EXTERNAL_TRACK_ID) {
          const settings = {
            kind: textTracks[i].kind,
            active: textTracks[i].mode === 'showing',
            label: textTracks[i].label,
            language: textTracks[i].language,
            index: i
          };
          if (settings.kind === 'subtitles') {
            parsedTracks.push(new PKTextTrack(settings));
            this._nativeTextTracksMap[settings.index] = textTracks[i];
          } else if (settings.kind === 'captions' && this._config.enableCEA708Captions) {
            settings.label = settings.label || captionsTextTrackLabels.shift();
            settings.language = settings.language || captionsTextTrackLanguageCodes.shift();
            parsedTracks.push(new PKTextTrack(settings));
            this._nativeTextTracksMap[settings.index] = textTracks[i];
          }
        }
      }
    }
    return parsedTracks;
  }

  /**
   * Select a video track
   * @function selectVideoTrack
   * @param {VideoTrack} videoTrack - the track to select
   * @returns {void}
   * @public
   */
  selectVideoTrack(videoTrack: VideoTrack): void {
    if (this._isProgressivePlayback()) {
      this._selectProgressiveVideoTrack(videoTrack);
    } else {
      this.selectAdaptiveVideoTrack(videoTrack);
    }
  }

  /**
   * Select a progressive video track
   * @function _selectProgressiveVideoTrack
   * @param {VideoTrack} videoTrack - the track to select
   * @returns {void}
   * @public
   */
  _selectProgressiveVideoTrack(videoTrack: VideoTrack): void {
    let videoTracks = this._progressiveSources;
    if (videoTrack instanceof VideoTrack && videoTracks && videoTracks[videoTrack.index]) {
      let currentTime = this._videoElement.currentTime;
      let paused = this._videoElement.paused;
      this._sourceObj = videoTracks[videoTrack.index];
      this._eventManager.listenOnce(this._videoElement, Html5EventType.LOADED_DATA, () => {
        if (Env.browser.name === 'Android Browser') {
          // In android browser we have to seek only after some playback.
          this._eventManager.listenOnce(this._videoElement, Html5EventType.DURATION_CHANGE, () => {
            this._videoElement.currentTime = currentTime;
          });
          this._eventManager.listenOnce(this._videoElement, Html5EventType.SEEKED, () => {
            this._onTrackChanged(videoTrack);
            if (paused) {
              this._videoElement.pause();
            }
          });
          this._videoElement.play();
        } else {
          this._eventManager.listenOnce(this._videoElement, Html5EventType.SEEKED, () => {
            this._onTrackChanged(videoTrack);
          });
          this._videoElement.currentTime = currentTime;
          if (!paused) {
            this._videoElement.play();
          }
        }
      });
      this._setSrc();
    }
  }

  /**
   * Select a native video track
   * @function selectAdaptiveVideoTrack
   * @param {VideoTrack} videoTrack - the track to select
   * @returns {void}
   * @public
   */
  selectAdaptiveVideoTrack(videoTrack: VideoTrack): void {
    const videoTracks = this._videoElement.videoTracks;
    if (videoTrack instanceof VideoTrack && videoTracks && videoTracks[videoTrack.index]) {
      this._disableVideoTracks();
      videoTracks[videoTrack.index].selected = true;
      this._onTrackChanged(videoTrack);
    }
  }

  /**
   * Select an audio track
   * @function selectAudioTrack
   * @param {AudioTrack} audioTrack - the  audio track to select
   * @returns {void}
   * @public
   */
  selectAudioTrack(audioTrack: AudioTrack): void {
    const audioTracks = this._videoElement.audioTracks;
    if (audioTrack instanceof AudioTrack && audioTracks && audioTracks[audioTrack.index]) {
      this._removeNativeAudioTrackChangeListener();
      this._disableAudioTracks();
      audioTracks[audioTrack.index].enabled = true;
      this._onTrackChanged(audioTrack);
      this._addNativeAudioTrackChangeListener();
    }
  }

  /**
   * Remove the onchange listenr of the video element AudioTrackList.
   * @private
   * @returns {void}
   */
  _removeNativeAudioTrackChangeListener(): void {
    if (this._videoElement.audioTracks) {
      this._eventManager.unlisten(this._videoElement.audioTracks, 'change');
    }
  }

  /**
   * Add the onchange listenr of the video element AudioTrackList.
   * @private
   * @returns {void}
   */
  _addNativeAudioTrackChangeListener(): void {
    if (this._videoElement.audioTracks) {
      this._eventManager.listen(this._videoElement.audioTracks, 'change', () => this._onNativeAudioTrackChange());
    }
  }

  _getPKAudioTracks(): Array<AudioTrack> {
    const audioTracks = this._playerTracks.filter(track => track instanceof AudioTrack);
    return ((audioTracks: Array<any>): Array<AudioTrack>);
  }

  _getActivePKAudioTrack(): ?AudioTrack {
    const pkAudioTracks = this._getPKAudioTracks();
    return pkAudioTracks.find(track => track.active === true);
  }

  /**
   * Handler of the video element AudioTrackList onchange event.
   * @private
   * @returns {void}
   */
  _onNativeAudioTrackChange(): void {
    const getActiveVidAudioTrackIndex = () => {
      for (let i = 0; i < this._videoElement.audioTracks.length; i++) {
        const audioTrack = this._videoElement.audioTracks[i];
        if (audioTrack.enabled) {
          return i;
        }
      }
      return -1;
    };
    NativeAdapter._logger.debug('Video element audio track change');
    const vidIndex = getActiveVidAudioTrackIndex();
    const activeAudioTrack = this._getActivePKAudioTrack();
    const pkIndex = activeAudioTrack ? activeAudioTrack.index : -1;
    if (vidIndex !== pkIndex) {
      const audioTracks = this._getPKAudioTracks();
      const pkAudioTrack = audioTracks.find(track => track.index === vidIndex);
      if (pkAudioTrack) {
        NativeAdapter._logger.debug('Native selection of track, update the player audio track (' + pkIndex + ' -> ' + vidIndex + ')');
        this._onTrackChanged(pkAudioTrack);
      }
    }
  }

  /**
   * Select a text track
   * @function selectTextTrack
   * @param {PKTextTrack} textTrack - The playkit text track
   * @returns {void}
   * @public
   */
  selectTextTrack(textTrack: PKTextTrack): void {
    if (textTrack instanceof PKTextTrack && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions')) {
      this._removeNativeTextTrackChangeListener();
      const selectedTrack = this._nativeTextTracksMap[textTrack.index];
      if (selectedTrack) {
        this._disableTextTracks();
        selectedTrack.mode = this._getDisplayTextTrackModeString();
        NativeAdapter._logger.debug('Text track changed', selectedTrack);
        this._onTrackChanged(textTrack);
        this._addNativeTextTrackChangeListener();
      }
    }
  }

  /**
   * Remove the onchange listenr of the video element TextTrackList.
   * @private
   * @returns {void}
   */
  _removeNativeTextTrackChangeListener(): void {
    if (this._videoElement.textTracks) {
      this._eventManager.unlisten(this._videoElement.textTracks, 'change');
    }
  }

  /**
   * Add the onchange listenr of the video element TextTrackList.
   * @private
   * @returns {void}
   */
  _addNativeTextTrackChangeListener(): void {
    if (this._videoElement.textTracks) {
      this._eventManager.listen(this._videoElement.textTracks, 'change', () => this._onNativeTextTrackChange());
    }
  }

  _getPKTextTracks(): Array<TextTrack> {
    return this._playerTracks.filter(track => track instanceof PKTextTrack);
  }

  _getActivePKTextTrack(): ?TextTrack {
    const pkTextTracks = this._getPKTextTracks();
    return pkTextTracks.find(track => track.active === true);
  }

  /**
   * Handler of the video element TextTrackList onchange event.
   * @private
   * @returns {void}
   */
  _onNativeTextTrackChange(): void {
    const pkTextTracks = this._getPKTextTracks();
    const pkOffTrack = pkTextTracks.find(track => track.language === 'off');
    const getActiveVidTextTrackIndex = () => {
      return this._nativeTextTracksMap.findIndex(textTrack => textTrack && this._getDisplayTextTrackModeString() === textTrack.mode);
    };
    NativeAdapter._logger.debug('Video element text track change');
    const vidIndex = getActiveVidTextTrackIndex();
    const activePKtextTrack = this._getActivePKTextTrack();
    const pkIndex = activePKtextTrack ? activePKtextTrack.index : -1;
    if (vidIndex !== pkIndex) {
      // In case no text track with 'showing' mode
      // we need to set the off track
      if (vidIndex == -1) {
        if (pkOffTrack) {
          NativeAdapter._logger.debug('Native selection of track, update the player text track (' + pkIndex + ' -> off)');
          this._onTrackChanged(pkOffTrack);
        }
      } else {
        // In case the text track on the video element is
        // different then the text track of the player
        // we need to set the correct one
        const pkTextTrack = pkTextTracks.find(track => track.index === vidIndex);
        if (pkTextTrack) {
          NativeAdapter._logger.debug('Native selection of track, update the player text track (' + pkIndex + ' -> ' + vidIndex + ')');
          this._onTrackChanged(pkTextTrack);
        }
      }
    }
  }

  /**
   * Returns the mode (hidden / showing) of the native text track should have according to the displayTextTrack config.
   * Both 'showing' and 'hidden' indicates the the text track is active and trigger cue events but 'hidden' hides it
   * from the UI.
   * @returns {string} the mode string
   * @private
   */
  _getDisplayTextTrackModeString(): string {
    return this._config.displayTextTrack ? 'showing' : 'hidden';
  }

  /**
   * Add the onaddtrack listenr of the video element TextTrackList.
   * @private
   * @returns {void}
   */
  _addNativeTextTrackAddedListener(): void {
    if (!this._config.displayTextTrack && this._videoElement.textTracks) {
      this._eventManager.listen(this._videoElement.textTracks, 'addtrack', () => this._onNativeTextTrackAdded());
    }
  }

  /**
   * Handler of the video element TextTrackList onaddtrack event.
   * @private
   * @returns {void}
   */
  _onNativeTextTrackAdded(): void {
    this._playerTracks = this._getParsedTracks();
    this._trigger(CustomEventType.TRACKS_CHANGED, {tracks: this._playerTracks});
  }

  /**
   * Hide the text track
   * @function hideTextTrack
   * @returns {void}
   * @public
   */
  hideTextTrack(): void {
    this._disableTextTracks();
  }

  /**
   * Enables adaptive bitrate
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @public
   */
  enableAdaptiveBitrate(): void {
    NativeAdapter._logger.warn('Enabling adaptive bitrate is not supported for native playback');
  }

  /**
   * Checking if adaptive bitrate switching is enabled.
   * For progressive playback will always returns false.
   * For adaptive playback will always returns true.
   * @function isAdaptiveBitrateEnabled
   * @returns {boolean} - Whether adaptive bitrate is enabled.
   * @public
   */
  isAdaptiveBitrateEnabled(): boolean {
    return !this._isProgressivePlayback();
  }

  /**
   * Disables all the existing video tracks.
   * @private
   * @returns {void}
   */
  _disableVideoTracks(): void {
    let videoTracks = this._videoElement.videoTracks;
    if (videoTracks) {
      for (let i = 0; i < videoTracks.length; i++) {
        videoTracks[i].selected = false;
      }
    }
  }

  /**
   * Disables all the existing audio tracks.
   * @private
   * @returns {void}
   */
  _disableAudioTracks(): void {
    let audioTracks = this._videoElement.audioTracks;
    if (audioTracks) {
      for (let i = 0; i < audioTracks.length; i++) {
        audioTracks[i].enabled = false;
      }
    }
  }

  /**
   * Disables all the existing text tracks.
   * @private
   * @returns {void}
   */
  _disableTextTracks(): void {
    let textTracks = this._videoElement.textTracks;
    if (textTracks) {
      for (let i = 0; i < textTracks.length; i++) {
        (textTracks[i].kind === 'subtitles' || textTracks[i].kind === 'captions') &&
          (textTracks[i].language !== EXTERNAL_TRACK_ID || textTracks[i].label !== EXTERNAL_TRACK_ID) &&
          (textTracks[i].mode = 'disabled');
      }
    }
  }

  /**
   * Returns the live edge
   * @returns {number} - live edge
   * @private
   */
  _getLiveEdge(): number {
    if (this._videoElement.seekable.length) {
      return this._videoElement.seekable.end(this._videoElement.seekable.length - 1);
    } else if (this._videoElement.buffered.length) {
      return this._videoElement.buffered.end(this._videoElement.buffered.length - 1);
    } else {
      return this._videoElement.duration;
    }
  }

  /**
   * Seeking to live edge.
   * @function seekToLiveEdge
   * @returns {void}
   * @public
   */
  seekToLiveEdge(): void {
    try {
      this._videoElement.currentTime = this._getLiveEdge();
    } catch (e) {
      return;
    }
  }

  /**
   * Checking if the current playback is live.
   * @function isLive
   * @returns {boolean} - Whether playback is live.
   * @public
   */
  isLive(): boolean {
    return this._videoElement.duration === Infinity;
  }

  /**
   * Handling live duration change (as safari doesn't trigger durationchange event on live playback)
   * @function _handleLiveDurationChange
   * @returns {void}
   * @private
   */
  _handleLiveDurationChange(): void {
    this._liveDurationChangeInterval = setInterval(() => {
      const liveEdge = this._getLiveEdge();
      if (this._liveEdge !== liveEdge) {
        this._liveEdge = liveEdge;
        this._videoElement.dispatchEvent(new window.Event(Html5EventType.DURATION_CHANGE));
      }
    }, 2000);
  }

  /**
   * Get the start time of DVR window in live playback in seconds.
   * @returns {Number} - start time of DVR window.
   * @public
   */
  getStartTimeOfDvrWindow(): number {
    if (this.isLive() && this._videoElement.seekable.length) {
      return this._videoElement.seekable.start(0);
    } else {
      return 0;
    }
  }
}
