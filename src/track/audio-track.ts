import Track from './track';

enum FlavorAssetTags {
  AUDIO_ONLY = 'audio_only',
  AUDIO_DESCRIPTION = 'audio_description'
}

export enum AudioTrackKind {
  MAIN = 'main',
  DESCRIPTION = 'description'
}

/**
 * Audio track representation of the player.
 * @classdesc
 */
class AudioTrack extends Track {
  /**
   * The kind of the track. i.e. description, main.
   * @member
   * @type {AudioTrackKind}
   * @private
   */
  private _kind: AudioTrackKind;

  /**
   * Getter for the kind value of the track.
   * @public
   * @returns {AudioTrackKind} - The kind value of the track.
   */
  public get kind(): AudioTrackKind {
    return this._kind;
  }

  /**
   * Setter for the kind value of the track.
   * @public
   * @param {AudioTrackKind} value - The kind of the track.
   */
  public set kind(value: AudioTrackKind) {
    this._kind = value;
  }

  /**
   * @constructor
   * @param {Object} settings - The track settings object.
   */
  constructor(settings: any = {}) {
    super(settings);
    this._kind = settings.kind || AudioTrackKind.MAIN;
  }
}

export function audioDescriptionTrackHandler(tracks: Track[], audioFlavors?: Array<any>): void {
  if (tracks?.length) {
    let audioTracksIndex = 0;
    // iterate over the audio tracks and set the isAudioDescription flag based on the audioFlavors tags
    tracks.forEach((track) => {
      if (track instanceof AudioTrack) {
        const isAudioDescription = (audioFlavors?.length && audioFlavors[audioTracksIndex]?.tags?.includes(FlavorAssetTags.AUDIO_DESCRIPTION)) || track.kind.includes(AudioTrackKind.DESCRIPTION);
        if (isAudioDescription) {
          // add "Audio Description" to the label if custom label is not provided
          track.label = `${audioFlavors?.[audioTracksIndex]?.label || `${track.label || track.language} - Audio Description`}`;
          // set the language to ad-<language> for audio description tracks
          track.language = `ad-${track.language}`;
        }
        audioTracksIndex++;
      }
    });
  }
}

export default AudioTrack;
