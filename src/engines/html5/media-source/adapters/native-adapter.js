//@flow
import LoggerFactory from '../../../../utils/logger'
import Track from '../../../../../flow-typed/classes/track/track'
import TrackTypes from '../../../../../flow-typed/classes/track/track-types'
import VideoTrack from '../../../../../flow-typed/classes/track/video-track'
import AudioTrack from '../../../../../flow-typed/classes/track/audio-track'
import TextTrack from '../../../../../flow-typed/classes/track/text-track'
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
  _tracks: Array<Track>;

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
    if (source) {
      this._videoElement.src = source.url;
    }
    this._parseTracks().then();
  }

  /**
   * Load the video source
   * @function load
   * @returns {void}
   */
  load(): void {
    NativeAdapter._logger.debug('load');
    this._videoElement.load();
  }

  /**
   * Clear the video source
   * @function destroy
   * @returns {void}
   */
  destroy(): void {
    NativeAdapter._logger.debug('destroy');
    this._videoElement.src = "";
    this._tracks = null;
  }

  /**
   * Parse the tracks
   * @function _parseTracks
   * @returns {Promise}
   * @private
   */
  _parseTracks(): Promise {
    return new Promise((resolve) => {
      if (this._tracks) {
        resolve();
      } else {
        this._videoElement.addEventListener('loadeddata', () => {
          this._tracks = this._tracks || this._parsedVideoTracks.concat(this._parsedAudioTracks).concat(this._parsedTextTracks);
          resolve();
        });
      }
    });
  }

  /**
   * Get the parsed video tracks
   * @returns {Array<VideoTrack>}
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
          label: videoTracks[i].label || videoTracks[i].language,
          index: i
        };
        parsedTracks.push(new VideoTrack(settings));
      }
    }
    return parsedTracks;
  }

  /**
   * Get the parsed audio tracks
   * @returns {Array<AudioTrack>}
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
          label: audioTracks[i].label || audioTracks[i].language,
          index: i
        };
        parsedTracks.push(new AudioTrack(settings));
      }
    }
    return parsedTracks;
  }

  /**
   * Get the parsed text tracks
   * @returns {Array<TextTrack>}
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
          label: textTracks[i].label || textTracks[i].language,
          index: i
        };
        parsedTracks.push(new TextTrack(settings));
      }
    }
    return parsedTracks;
  }

  getTracks(type?: string): Promise {
    return this._parseTracks().then(() => {
      return this._getTracksByType(type);
    });
  }

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
   * Select a track
   * @function selectTrack
   * @param {Track} track - the track to select
   * @returns {void}
   * @public
   */
  selectTrack(track: Track) {
    if (track) {
      if (track instanceof VideoTrack) {
        this._selectVideoTrack(track);
      } else if (track instanceof AudioTrack) {
        this._selectAudioTrack(track);
      } else if (track instanceof TextTrack) {
        this._selectTextTrack(track);
      }
    }
  }

  _selectVideoTrack(track: VideoTrack) {
    if ((track instanceof VideoTrack) && this._videoElement.videoTracks) {
      let selectedTrack = this._videoElement.videoTracks[track.index];
      if (selectedTrack) {
        selectedTrack.selected = true;
        this._markActiveTrack(track);
      }
    }

  }

  /**
   * Select an audio track
   * @function _selectAudioTrack
   * @param {Track} track - the  audio track to select
   * @returns {void}
   * @private
   */
  _selectAudioTrack(track: AudioTrack) {
    if ((track instanceof AudioTrack) && this._videoElement.audioTracks) {
      let selectedTrack = this._videoElement.audioTracks[track.index];
      if (selectedTrack) {
        selectedTrack.enabled = true;
        this._markActiveTrack(track);
      }
    }
  }

  _selectTextTrack(track: TextTrack) {
    if ((track instanceof TextTrack) && (track.kind === 'subtitles' || track.kind === 'caption') && this._videoElement.textTracks) {
      let selectedTrack = this._videoElement.textTracks[track.index];
      if (selectedTrack) {
        selectedTrack.mode = 'showing';
        this._markActiveTrack(track);
      }
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
      type = 'video';
    } else if (track instanceof AudioTrack) {
      type = 'audio';
    } else if (track instanceof TextTrack) {
      type = 'text';
    }
    if (type) {
      let tracks = this.getTracks(type);
      for (let i = 0; i < tracks.length; i++) {
        tracks[i].active = track.index === i;
      }
    }
  }
}
