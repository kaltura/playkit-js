//@flow
import LoggerFactory from '../../../../utils/logger'
import EventManager from '../../../../event/event-manager'
import PlayerEvents from '../../../../event/events'
import Track from '../../../../track/track'
import VideoTrack from '../../../../track/video-track'
import AudioTrack from '../../../../track/audio-track'
import TextTrack from '../../../../track/text-track'
/**
 * An illustration of media source extension for progressive download
 * @classdesc
 * @implements {IMediaSourceAdapter}
 */
export default class NativeAdapter implements IMediaSourceAdapter {
  /**
   * The name of the Adapter
   * @member {string} _name
   * @static
   * @private
   */
  static _name = "NativeAdapter";
  /**
   * Getter for the adapter name
   * @returns {string} - The adapter name
   */
  static get name(): string {
    return NativeAdapter._name;
  }

  /**
   * The adapter logger
   * @member {any} _logger
   * @private
   * @static
   */
  static _logger = LoggerFactory.getLogger(NativeAdapter._name);
  /**
   * The adapter config
   * @member {Object} _config
   * @private
   */
  _config: Object;
  /**
   * The source url
   * @member {string} _source
   * @private
   */
  _source: string;
  /**
   * The dom video element
   * @member {HTMLVideoElement} _videoElement
   * @private
   */
  _videoElement: HTMLVideoElement;
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
  _loadPromise: Promise<Object> | null;

  /**
   * Checks if NativeAdapter can play a given mime type
   * @function canPlayType
   * @param {string} mimeType - The mime type to check
   * @returns {boolean} - Whether the native adapter can play a specific mime type
   * @static
   */
  static canPlayType(mimeType: string): boolean {
    let canPlayType = !!(document.createElement("video").canPlayType(mimeType));
    NativeAdapter._logger.debug('canPlayType result for mimeType:' + mimeType + ' is ' + canPlayType.toString());
    return canPlayType;
  }

  /**
   * Checks if the media source adapter is supported
   * @function isSupported
   * @returns {boolean} - Whether the media source adapter is supported. Default implementation is true
   * @static
   */
  static isSupported(): boolean {
    NativeAdapter._logger.debug('isSupported:true');
    return true;
  }

  /**
   * Factory method to create media source adapter
   * @function createAdapter
   * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with
   * @param {Object} source - The source Object
   * @param {Object} config - The media source adapter configuration
   * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter
   * @static
   */
  static createAdapter(videoElement: HTMLVideoElement, source: Source, config: Object): IMediaSourceAdapter {
    NativeAdapter._logger.debug('Creating adapter');
    return new this(videoElement, source, config);
  }

  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to NativeAdapter
   * @param {Source} source - The source object
   * @param {Object} config - The media source adapter configuration
   */
  constructor(videoElement: HTMLVideoElement, source: ?Source, config: Object) {
    this._config = config;
    this._videoElement = videoElement;
    this._eventManager = new EventManager();
    if (source != null) {
      this._source = source.url;
    }
  }

  /**
   * Load the video source
   * @function load
   * @returns {Promise<Object>} - The loaded data
   */
  load(): Promise<Object> {
    if (!this._loadPromise) {
      this._loadPromise = new Promise((resolve, reject) => {
        this._eventManager.listen(this._videoElement, PlayerEvents.LOADED_METADATA, () => {
          this._eventManager.unlisten(this._videoElement, PlayerEvents.LOADED_METADATA);
          let data = {tracks: this._getParsedTracks()};
          NativeAdapter._logger.debug('The source has been loaded successfully');
          resolve(data);
        });
        this._eventManager.listen(this._videoElement, PlayerEvents.ERROR, (error) => {
          this._eventManager.unlisten(this._videoElement, PlayerEvents.ERROR);
          NativeAdapter._logger.error(error);
          reject(error);
        });
        this._videoElement.src = this._source;
      });
    }
    return this._loadPromise;
  }

  /**
   * Clear the video source
   * @function destroy
   * @returns {void}
   */
  destroy(): void {
    NativeAdapter._logger.debug('destroy');
    this._eventManager.destroy();
    this._loadPromise = null;
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
    let videoTracks = this._videoElement.videoTracks;
    let parsedTracks = [];
    if (videoTracks) {
      for (let i = 0; i < videoTracks.length; i++) {
        let settings = {
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
   * @returns {boolean} - success
   * @public
   */
  selectVideoTrack(videoTrack: VideoTrack): boolean {
    let videoTracks = this._videoElement.videoTracks;
    if ((videoTrack instanceof VideoTrack) && videoTracks && videoTracks[videoTrack.index]) {
      this._disableVideoTracks();
      videoTracks[videoTrack.index].selected = true;
      return true;
    }
    return false;
  }

  /**
   * Select an audio track
   * @function selectAudioTrack
   * @param {AudioTrack} audioTrack - the  audio track to select
   * @returns {boolean} - success
   * @public
   */
  selectAudioTrack(audioTrack: AudioTrack): boolean {
    let audioTracks = this._videoElement.audioTracks;
    if ((audioTrack instanceof AudioTrack) && audioTracks && audioTracks[audioTrack.index]) {
      this._disableAudioTracks();
      audioTracks[audioTrack.index].enabled = true;
      return true;
    }
    return false;
  }

  /**
   * Select a text track
   * @function selectTextTrack
   * @param {TextTrack} textTrack - the track to select
   * @returns {boolean} - success
   * @public
   */
  selectTextTrack(textTrack: TextTrack): boolean {
    let textTracks = this._videoElement.textTracks;
    if ((textTrack instanceof TextTrack) && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions') && textTracks && textTracks[textTrack.index]) {
      this._disableTextTracks();
      textTracks[textTrack.index].mode = 'showing';
      return true;
    }
    return false;
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
