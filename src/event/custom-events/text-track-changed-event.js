// @flow
import FakeEvent from '../fake-event'
import TextTrack from '../../track/text-track'

export default class TextTrackChangedEvent extends FakeEvent {
  payload: TextTrackChangedEventPayload;

  constructor(textTrack: TextTrack) {
    super(FakeEvent.Type.TEXT_TRACK_CHANGED);
    this.payload = {
      selectedTextTrack: textTrack
    };
  }
}
