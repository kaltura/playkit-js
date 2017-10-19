// @flow
import FakeEvent from '../fake-event'
import AudioTrack from '../../track/audio-track'

export default class AudioTrackChangedEvent extends FakeEvent {
  payload: AudioTrackChangedEventPayload;

  constructor(audioTrack: AudioTrack) {
    super(FakeEvent.Type.AUDIO_TRACK_CHANGED);
    this.payload = {
      selectedAudioTrack: audioTrack
    };
  }
}
