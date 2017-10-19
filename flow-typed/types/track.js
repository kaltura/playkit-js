// @flow
import VideoTrack from '../../src/track/video-track'
import AudioTrack from '../../src/track/audio-track'
import TextTrack from '../../src/track/text-track'

declare type TrackSettings = {
  active: boolean,
  index: number,
  id?: ?string,
  label?: ?string,
  language?: ?string,
  kind?: ?string,
  bandwidth?: ?number,
  width?: ?number,
  height?: ?number
};

declare type ActiveTracks = {
  video: VideoTrack,
  audio: AudioTrack,
  text: ?TextTrack
};
