// @flow
import VideoTrack from '../../src/track/video-track'
import AudioTrack from '../../src/track/audio-track'
import TextTrack from '../../src/track/text-track'

declare type TrackSettings = {
  id: ?string,
  active: boolean,
  label: ?string,
  language: ?string,
  index: number
};

declare type TextTrackSettings = TrackSettings & {
  kind: string
};

declare type VideoTrackSettings = TrackSettings & {
  bandwidth: number,
  width: number,
  height: number
};

declare type ActiveTracks = {
  video: VideoTrack,
  audio: AudioTrack,
  text: ?TextTrack
};
