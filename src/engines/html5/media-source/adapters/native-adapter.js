//@flow
import LoggerFactory from '../../../../utils/logger'
import Track from '../../../../track/track'
import TrackTypes from '../../../../track/track-types'
import AudioTrack from '../../../../track/audio-track'
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
    this._videoElement.addEventListener('loadeddata', this._parseTracks.bind(this));
  }

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
      switch (track.type) {
        case TrackTypes.VIDEO: {
          break;
        }
        case TrackTypes.AUDIO: {
          this._selectAudioTrack(track);
          break;
        }
        case TrackTypes.TEXT: {
          break;
        }
      }
    }
  }

  /**
   * Parse the tracks
   * @function _parseTracks
   * @returns {void}
   * @private
   */
  _parseTracks() {
    this._engine.player.tracks = this._parsedVideoTracks.concat(this._parsedAudioTracks).concat(this._parsedTextTracks);
  }

  /**
   * Mark the selected track as active
   * @function _markActiveTrack
   * @param {Track} track - the track to mark
   * @returns {void}
   * @private
   */
  _markActiveTrack(track: Track) {
    let tracks = this._engine.player.getTracks(track.type);
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].active = tracks[i].id === track.id;
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
    if (track && track.type === TrackTypes.AUDIO && this._videoElement.audioTracks && this._videoElement.audioTracks.length) {
      let selectedTrack = this._videoElement.audioTracks.getTrackById(track.id);
      if (selectedTrack) {
        selectedTrack.enabled = true;
        this._markActiveTrack(track);
      }
    }
  }

  get _parsedVideoTracks() {
    return [];
  }

  /**
   * Get the parsed audio tracks
   * @returns {Array<AudioTrack>}
   * @private
   */
  get _parsedAudioTracks(): Array<AudioTrack> {
    let audioTracks = this._videoElement.audioTracks;
    if (audioTracks) {
      let parsedTracks = [];
      for (let i = 0; i < audioTracks.length; i++) {
        parsedTracks.push(new AudioTrack(audioTracks[i].id, audioTracks[i].enabled, audioTracks[i].language));
      }
      return parsedTracks;
    }
  }

  get _parsedTextTracks() {
    return [];
  }
}
