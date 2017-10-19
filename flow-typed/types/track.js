// @flow
import VideoTrack from '../../src/track/video-track'
import AudioTrack from '../../src/track/audio-track'
import TextTrack from '../../src/track/text-track'

declare type TrackSettings = {
  active: boolean,
  index: number,
  id: ?string,
  label: ?string,
  language: ?string
};

declare type VideoTrackSettings = TrackSettings & {
  bandwidth: ?number,
  height: ?number,
  width: ?number
};

declare type TextTrackSettings = TrackSettings & {
  kind: ?string
};

declare type ActiveTracks = {
  video: VideoTrack,
  audio: AudioTrack,
  text: ?TextTrack
};
