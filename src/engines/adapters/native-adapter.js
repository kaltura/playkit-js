//@flow
import BaseMediaSourceAdapter from './base-adapter'
import AudioTrack from '../../track/audio-track'
import TrackTypes from '../../track/track-types'

/**
 * An illustration of media source extension for progressive download
 * @classdesc
 * @extends BaseMediaSourceAdapter
 */
export default class NativeAdapter extends BaseMediaSourceAdapter {
  /**
   * The name of Adapter
   * @member {string} _name
   * @static
   * @private
   */
  static _name = 'NativeAdapter';

  /**
   * Checks if NativeAdapter can play a given mime type
   * @function canPlayType
   * @param {string} mimeType - The mime type to check
   * @returns {boolean} - Whether the native adapter can play a specific mime type
   * @static
   * @override
   */
  static canPlayType(mimeType: string): boolean {
    return !!(document.createElement("video").canPlayType(mimeType));
  }

  /**
   * @constructor
   * @param {IEngine} engine - The video element which bind to NativeAdapter
   * @param {string} source - The source URL
   * @param {Object} config - The media source adapter configuration
   */
  constructor(engine: IEngine, source: Object, config: Object) {
    super(engine, source, config);
    this._msPlayer = engine.getVideoElement();
    this._source = source.url;
    if (source) {
      this._msPlayer.src = source.url;
    }
    this._msPlayer.addEventListener('loadeddata', this._parseTracks.bind(this));
  }

  /**
   * Load the video source
   * @function load
   * @override
   */
  load(): void {
    this._msPlayer.load();
  }

  _selectAudioTrack(track: AudioTrack): boolean {
    if (track && track.type === TrackTypes.AUDIO && this._msPlayer.audioTracks && this._msPlayer.audioTracks.length) {
      let selectedTrack = this._msPlayer.audioTracks.getTrackById(track.id);
      if (selectedTrack) {
        selectedTrack.enabled = true;
        return true;
      }
    }
    return false;
  }

  _getParsedVideoTracks() {
    return [];
  }

  _getParsedAudioTracks(): Array<AudioTrack> {
    let audioTracks = this._msPlayer.audioTracks;
    if (audioTracks) {
      let parsedTracks = [];
      for (let i = 0; i < audioTracks.length; i++) {
        parsedTracks.push(new AudioTrack(audioTracks[i].id, audioTracks[i].enabled, audioTracks[i].language));
      }
      return parsedTracks;
    }
  }

  _getParsedTextTracks() {
    return [];
  }
}
