// @flow
import AudioTrack from '../../src/track/audio-track'
import VideoTrack from '../../src/track/video-track'
import TextTrack from '../../src/track/text-track'

/**
 * @typedef {Object} PKActiveTracksObject
 * @property {VideoTrack} video
 * @property {AudioTrack} audio
 * @property {?TextTrack} text
 */
type _PKActiveTracksObject = {
  video: VideoTrack,
  audio: AudioTrack,
  text: ?TextTrack,
};

declare type PKActiveTracksObject = _PKActiveTracksObject;
