// @flow
import FakeEvent from '../../src/event/fake-event'
import Track from '../../src/track/track'
import AudioTrack from '../../src/track/audio-track'
import TextTrack from '../../src/track/text-track'
import VideoTrack from '../../src/track/video-track'
import {Cue} from '../../src/track/vtt-cue'

declare function ListenerType(event: FakeEvent): (boolean | void);

declare type TextCueChangedEventPayload = {
  cues: Array<Cue>
};

declare type AbrModeChangedEventPayload = {
  mode: string
};

declare type MuteChangeEventPayload = {
  mute: boolean
};

declare type PlayerStateChangedEventPayload = {
  oldState: MaybeState,
  newState: State
};

declare type SourceSelectedEventPayload = {
  selectedSource: Array<Source>
};

declare type TracksChangedEventPayload = {
  tracks: Array<Track>
};

declare type AudioTrackChangedEventPayload = {
  selectedAudioTrack: AudioTrack
};

declare type TextTrackChangedEventPayload = {
  selectedTextTrack: TextTrack
};

declare type VideoTrackChangedEventPayload = {
  selectedVideoTrack: VideoTrack
};


