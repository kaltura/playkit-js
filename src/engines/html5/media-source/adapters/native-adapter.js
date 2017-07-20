//@flow
import EventManager from '../../../../event/event-manager'
import {HTML5_EVENTS as Html5Events} from '../../../../event/events'
import Track from '../../../../track/track'
import VideoTrack from '../../../../track/video-track'
import AudioTrack from '../../../../track/audio-track'
import TextTrack from '../../../../track/text-track'
import BaseMediaSourceAdapter from '../base-media-source-adapter'
import {getSuitableSourceForResolution} from '../../../../utils/resolution'
import * as Utils from '../../../../utils/util'

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
   * The event manager of the class.
   * @member {EventManager} - _eventManager
   * @type {EventManager}
   * @private
   */
  _eventManager: EventManager;
  /**
   * The load promise
   * @member {Promise<Object>} - _loadPromise
   * @type {Promise<Object>}
   * @private
   */
  _loadPromise: ?Promise<Object>;
  /**
   * The original progressive sources
   * @member {Array<Object>} - _progressiveSources
   * @private
   */
  _progressiveSources: Array<Object>;

  /**
   * Checks if NativeAdapter can play a given mime type.
   * @function canPlayType
   * @param {string} mimeType - The mime type to check
   * @returns {boolean} - Whether the native adapter can play a specific mime type
   * @static
   */
  static canPlayType(mimeType: string): boolean {
    let canPlayType = (typeof mimeType === 'string') ? !!(Utils.Dom.createElement("video").canPlayType(mimeType.toLowerCase())) : false;
    NativeAdapter._logger.debug('canPlayType result for mimeType:' + mimeType + ' is ' + canPlayType.toString());
    return canPlayType;
  }

  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to NativeAdapter
   * @param {Source} source - The source object
   * @param {Object} config - The player configuration
   */
  constructor(videoElement: HTMLVideoElement, source: Source, config: Object) {
    NativeAdapter._logger.debug('Creating adapter');
    super(videoElement, source);
    this._eventManager = new EventManager();
    this._progressiveSources = config.sources.progressive;
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
    return this._sourceObj.mimetype === 'video/mp4';
  }

  /**
   * Load the video source
   * @function load
   * @returns {Promise<Object>} - The loaded data
   */
  load(): Promise<Object> {
    if (!this._loadPromise) {
      this._loadPromise = new Promise((resolve, reject) => {
        // We're using 'loadeddata' event for native hls (on 'loadedmetadata' native hls doesn't have tracks yet).
        this._eventManager.listen(this._videoElement, Html5Events.LOADED_DATA, () => {
          this._eventManager.unlisten(this._videoElement, Html5Events.LOADED_DATA);
          let data = {tracks: this._getParsedTracks()};
          NativeAdapter._logger.debug('The source has been loaded successfully');
          resolve(data);
        });
        this._eventManager.listen(this._videoElement, Html5Events.ERROR, (error) => {
          this._eventManager.unlisten(this._videoElement, Html5Events.ERROR);
          NativeAdapter._logger.error(error);
          reject(error);
        });
        if (this._isProgressivePlayback()) {
          this._setProgressiveSource();
        }
        if (this._sourceObj && this._sourceObj.url) {
          this._videoElement.src = this._sourceObj.url;
        }
      });
    }
    return this._loadPromise;
  }

  /**
   * Destroys the native adapter.
   * @function destroy
   * @returns {void}
   */
  destroy(): void {
    NativeAdapter._logger.debug('destroy');
    super.destroy();
    this._eventManager.destroy();
    this._loadPromise = null;
    this._progressiveSources = [];
  }

  /**
   * Get the parsed tracks
   * @function _getParsedTracks
   * @returns {Array<Track>} - The parsed tracks
   * @private
   */
  _getParsedTracks(): Array<Track> {
    let videoTracks = this._getParsedVideoTracks();
    let audioTracks = this._getParsedAudioTracks();
    let textTracks = this._getParsedTextTracks();
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
    let videoTracks = this._progressiveSources;
    let parsedTracks = [];
    if (videoTracks) {
      for (let i = 0; i < videoTracks.length; i++) {
        let settings = {
          id: videoTracks[i].id,
          bandwidth: videoTracks[i].bandwidth,
          width: videoTracks[i].width,
          height: videoTracks[i].height,
          active: videoTracks[i].id === this._sourceObj.id,
          label: videoTracks[i].label,
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
    let videoTracks = this._videoElement.videoTracks;
    let parsedTracks = [];
    if (videoTracks) {
      for (let i = 0; i < videoTracks.length; i++) {
        let settings = {
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
   * @returns {Array<Track>} - The parsed audio tracks
   * @private
   */
  _getParsedAudioTracks(): Array<Track> {
    let audioTracks = this._videoElement.audioTracks;
    let parsedTracks = [];
    if (audioTracks) {
      for (let i = 0; i < audioTracks.length; i++) {
        let settings = {
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
   * @returns {Array<Track>} - The parsed text tracks
   * @private
   */
  _getParsedTextTracks(): Array<Track> {
    let textTracks = this._videoElement.textTracks;
    let parsedTracks = [];
    if (textTracks) {
      for (let i = 0; i < textTracks.length; i++) {
        let settings = {
          kind: textTracks[i].kind,
          active: textTracks[i].mode === 'showing',
          label: textTracks[i].label,
          language: textTracks[i].language,
          index: i
        };
        parsedTracks.push(new TextTrack(settings));
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
    if ((videoTrack instanceof VideoTrack) && videoTracks && videoTracks[videoTrack.index]) {
      let currentTime = this._videoElement.currentTime;
      let paused = this._videoElement.paused;
      this._sourceObj = videoTracks[videoTrack.index];
      this._eventManager.listen(this._videoElement, Html5Events.LOADED_DATA, () => {
        this._eventManager.unlisten(this._videoElement, Html5Events.LOADED_DATA);
        this._eventManager.listen(this._videoElement, Html5Events.SEEKED, () => {
          this._eventManager.unlisten(this._videoElement, Html5Events.SEEKED);
          this._onTrackChanged(videoTrack);
        });
        this._videoElement.currentTime = currentTime;
      });
      this._videoElement.src = this._sourceObj.url;
      paused ? this._videoElement.load() : this._videoElement.play();
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
    let videoTracks = this._videoElement.videoTracks;
    if ((videoTrack instanceof VideoTrack) && videoTracks && videoTracks[videoTrack.index]) {
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
    let audioTracks = this._videoElement.audioTracks;
    if ((audioTrack instanceof AudioTrack) && audioTracks && audioTracks[audioTrack.index]) {
      this._disableAudioTracks();
      audioTracks[audioTrack.index].enabled = true;
      this._onTrackChanged(audioTrack);
    }
  }

  /**
   * Select a text track
   * @function selectTextTrack
   * @param {TextTrack} textTrack - the track to select
   * @returns {void}
   * @public
   */
  selectTextTrack(textTrack: TextTrack): void {
    let textTracks = this._videoElement.textTracks;
    if ((textTrack instanceof TextTrack) && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions') && textTracks && textTracks[textTrack.index]) {
      this._disableTextTracks();
      textTracks[textTrack.index].mode = 'showing';
      this._onTrackChanged(textTrack);
    }
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
    NativeAdapter._logger.debug('Enabling adaptive bitrate not supported');
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
        textTracks[i].mode = 'disabled';
      }
    }
  }

  /**
   * Getter for the src that the adapter plays on the video element.
   * @public
   * @returns {string} - The src url.
   */
  get src(): string {
    return this._videoElement.src;
  }
}
