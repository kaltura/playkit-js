//@flow
import LoggerFactory from '../../../../utils/logger'
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
   * The owning engine
   * @member {IEngine} _engine
   * @private
   */
  _engine: IEngine;
  /**
   * The dom video element
   * @member {HTMLVideoElement} _videoElement
   * @private
   */
  _videoElement: HTMLVideoElement;
  /**
   * The source url
   * @member {string} _source
   * @private
   */
  _source: string;

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
   * @param {IEngine} engine - The video engine that the media source adapter work with
   * @param {Object} source - The source Object
   * @param {Object} config - The media source adapter configuration
   * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter
   * @static
   */
  static createAdapter(engine: IEngine, source: Object, config: Object): IMediaSourceAdapter {
    NativeAdapter._logger.debug('Creating adapter');
    return new this(engine, source, config);
  }

  /**
   * @constructor
   * @param {IEngine} engine - The video element which bind to NativeAdapter
   * @param {string} source - The source URL
   * @param {Object} config - The media source adapter configuration
   */
  constructor(engine: IEngine, source: Object, config: Object) {
    this._engine = engine;
    this._config = config;
    this._videoElement = engine.getVideoElement();
    this._source = source.url;
  }

  /**
   * Load the video source
   * @function load
   * @returns {Promise<Object>} - The loaded data
   */
  load(): Promise<Object> {
    return new Promise((resolve, reject) => {
      let onLoadedData = () => {
        this._videoElement.removeEventListener('loadeddata', onLoadedData);
        let data = {tracks: this._parsedTracks};
        resolve(data);
        NativeAdapter._logger.debug('load');
      };
      let onError = (error) => {
        this._videoElement.removeEventListener('error', onError);
        NativeAdapter._logger.error(error);
        reject(error);
      };
      this._videoElement.addEventListener('loadeddata', onLoadedData);
      this._videoElement.addEventListener('error', onError);
      this._videoElement.src = this._source;
    });
  }

  /**
   * Clear the video source
   * @function destroy
   * @returns {void}
   */
  destroy(): void {
    NativeAdapter._logger.debug('destroy');
  }

  /**
   * Get the parsed tracks
   * @function _parsedTracks
   * @returns {Array<Track>} - The parsed tracks
   * @private
   */
  get _parsedTracks(): Array<Track> {
    return this._parsedVideoTracks.concat(this._parsedAudioTracks).concat(this._parsedTextTracks);
  }

  /**
   * Get the parsed video tracks
   * @returns {Array<VideoTrack>} - The parsed video tracks
   * @private
   */
  get _parsedVideoTracks(): Array<VideoTrack> {
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
   * @returns {Array<AudioTrack>} - The parsed audio tracks
   * @private
   */
  get _parsedAudioTracks(): Array<AudioTrack> {
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
   * @returns {Array<TextTrack>} - The parsed text tracks
   * @private
   */
  get _parsedTextTracks(): Array<TextTrack> {
    let textTracks = this._videoElement.textTracks;
    let parsedTracks = [];
    if (textTracks) {
      for (let i = 0; i < textTracks.length; i++) {
        let settings = {
          kind: textTracks[i].kind,
          id: textTracks[i].id,
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
   * Select a track
   * @function selectTrack
   * @param {Track} track - the track to select
   * @returns {boolean} - success
   * @public
   */
  selectTrack(track: Track): boolean {
    if (track) {
      if (track instanceof VideoTrack) {
        return this._selectVideoTrack(track);
      } else if (track instanceof AudioTrack) {
        return this._selectAudioTrack(track);
      } else if (track instanceof TextTrack) {
        return this._selectTextTrack(track);
      }
    }
    return false;
  }

  /**
   * Select a video track
   * @function _selectVideoTrack
   * @param {VideoTrack} track - the track to select
   * @returns {boolean} - success
   * @private
   */
  _selectVideoTrack(track: VideoTrack): boolean {
    let videoTracks = this._videoElement.videoTracks;
    if ((track instanceof VideoTrack) && videoTracks && videoTracks[track.index]) {
      for (let i = 0; i < VideoTrack.length; i++) {
        VideoTrack[i].selected = track.index === i;
      }
      return true;
    }
    return false;
  }

  /**
   * Select an audio track
   * @function _selectAudioTrack
   * @param {AudioTrack} track - the  audio track to select
   * @returns {boolean} - success
   * @private
   */
  _selectAudioTrack(track: AudioTrack): boolean {
    let audioTracks = this._videoElement.audioTracks;
    if ((track instanceof AudioTrack) && audioTracks && audioTracks[track.index]) {
      for (let i = 0; i < audioTracks.length; i++) {
        audioTracks[i].enabled = track.index === i;
      }
      return true;
    }
    return false;
  }

  /**
   * Select a text track
   * @function _selectTextTrack
   * @param {TextTrack} track - the track to select
   * @returns {boolean} - success
   * @private
   */
  _selectTextTrack(track: TextTrack): boolean {
    let textTracks = this._videoElement.textTracks;
    if ((track instanceof TextTrack) && (track.kind === 'subtitles' || track.kind === 'captions') && textTracks && textTracks[track.index]) {
      for (let i = 0; i < textTracks.length; i++) {
        textTracks[i].mode = track.index === i ? 'showing' : 'disabled'
      }
      return true;
    }
    return false;
  }
}
