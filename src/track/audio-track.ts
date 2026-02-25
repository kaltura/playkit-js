import { audioLanguageMapping } from '../utils/audio-language-mapping';
import Track from './track';

enum FlavorAssetTags {
  AUDIO_ONLY = 'audio_only',
  AUDIO_DESCRIPTION = 'audio_description'
}

export enum AudioTrackKind {
  MAIN = 'main',
  DESCRIPTION = 'description'
}

const UNKNOWN_LANGUAGE_CODE = 'un';

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

export function audioDescriptionTrackHandler(tracks: Track[], audioFlavors: Array<any> = []): void {
  audioFlavors = audioFlavors.filter((f) => f.label);

  if (tracks?.length) {
    const hasAudioFlavors = audioFlavors && audioFlavors.length > 0;
    // iterate over the audio tracks and set the isAudioDescription flag based on the audioFlavors tags
    tracks.forEach((track) => {
      if (track instanceof AudioTrack) {
        let matchingFlavor: any = null;
        if (hasAudioFlavors) {
          matchingFlavor = audioFlavors.find((flavor) => {
            return track.label === flavor.label;
          });
        }

        const isAudioDescription = (matchingFlavor && matchingFlavor.tags?.includes(FlavorAssetTags.AUDIO_DESCRIPTION)) || track.kind.includes(AudioTrackKind.DESCRIPTION);
        if (isAudioDescription) {
          // set the language to ad-<language> for audio description tracks
          track.language = `ad-${track.language}`;
          if (matchingFlavor) {
            // add "Audio Description" to the label if custom label is not provided
            track.label = `${track.label} - Audio Description`;
          }
        }
      }
    });
  }
}

export function updateUnknownAudioLanguageTracks(tracks: Track[]): void {
  tracks.forEach((track) => {
    if (track instanceof AudioTrack) {
      if (track.label && track.language?.toLowerCase() === UNKNOWN_LANGUAGE_CODE) {
        track.language = audioLanguageMapping[track.label];
      }
    }
  });
}

export default AudioTrack;
