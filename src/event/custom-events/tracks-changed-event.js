// @flow
import FakeEvent from '../fake-event'
import Track from '../../track/track'

export default class TracksChangedEvent extends FakeEvent {
  payload: TracksChangedEventPayload;

  constructor(tracks: Array<Track>) {
    super(FakeEvent.Type.TRACKS_CHANGED);
    this.payload = {
      tracks: tracks
    };
  }
}
