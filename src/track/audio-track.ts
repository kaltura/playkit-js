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
   * The flavor ID of the track.
   * @member
   * @type {string | undefined}
   * @private
   */
  private _flavorId: string | undefined;

  /**
   * Getter for the kind value of the track.
   * @public
   * @returns {AudioTrackKind} - The kind value of the track.
   */
  public get kind(): AudioTrackKind {
    return this._kind;
  }

  /**
   * Getter for the flavor ID of the track.
   * @public
   * @returns {string | undefined} - The flavor ID of the track.
   */
  public get flavorId(): string | undefined {
    return this._flavorId;
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
   * Setter for the flavor ID of the track.
   * @public
   * @param {string | undefined} value - The flavor ID of the track.
   */
  public set flavorId(value: string | undefined) {
    this._flavorId = value;
  }

  /**
   * @constructor
   * @param {Object} settings - The track settings object.
   */
  constructor(settings: any = {}) {
    super(settings);
    this._kind = settings.kind || AudioTrackKind.MAIN;
    this._flavorId = settings.flavorId;
  }
}

export function audioDescriptionTrackHandler(tracks: Track[], audioFlavors: Array<any> = []): void {
  function findMatchingFlavor(track: AudioTrack, audioFlavors: Array<any>): any {
    if (audioFlavors.length === 0) return null;
    let matchingFlavor: any = null;
    if (track.label) {
      matchingFlavor = audioFlavors.find((flavor) => flavor.label === track.label);
    }
    // if no match found by label, try matching by flavorId
    if (!matchingFlavor && track.flavorId) {
      matchingFlavor = audioFlavors.find((flavor) => flavor.id === track.flavorId);
    }
    return matchingFlavor;
  }

  if (tracks?.length) {
    // iterate over the audio tracks and set the isAudioDescription flag based on the audioFlavors tags
    tracks.forEach((track) => {
      if (track instanceof AudioTrack) {
        const matchingFlavor: any = findMatchingFlavor(track, audioFlavors);

        const isAudioDescription = (matchingFlavor && matchingFlavor.tags?.includes(FlavorAssetTags.AUDIO_DESCRIPTION)) || track.kind.includes(AudioTrackKind.DESCRIPTION);
        if (isAudioDescription) {
          // set the language to ad-<language> for audio description tracks
          track.language = `ad-${track.language}`;
          if (track.label && !track.label.includes('- Audio Description')) {
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
