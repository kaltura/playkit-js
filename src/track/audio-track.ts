import Track from './track';

enum FlavorAssetTags {
  AUDIO_ONLY = 'audio_only',
  AUDIO_DESCRIPTION = 'audio_description'
}

/**
 * Audio track representation of the player.
 * @classdesc
 */
class AudioTrack extends Track {}

export function audioDescriptionTrackHandler(tracks: AudioTrack[], audioFlavors?: Array<any>): void {
  if (tracks?.length && audioFlavors?.length) {
    let audioTracksIndex = 0;
    // iterate over the audio tracks and set the isAudioDescription flag based on the audioFlavors tags
    tracks.forEach((track) => {
      if (track instanceof AudioTrack) {
        const isAudioDescription = audioFlavors[audioTracksIndex]?.tags?.includes(FlavorAssetTags.AUDIO_DESCRIPTION);
        if (isAudioDescription) {
          // set the language to ad-<language> for audio description tracks
          track.language = `ad-${track.language}`;
          if (!audioFlavors?.[audioTracksIndex]?.label) {
            // add "Audio Description" to the label if custom label is not provided
            track.label = `${track.label} - Audio Description`;
          }
        }
        audioTracksIndex++;
      }
    });
  }
}

export default AudioTrack;
