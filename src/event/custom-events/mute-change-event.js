// @flow
import FakeEvent from '../fake-event'

export default class MuteChangeEvent extends FakeEvent {
  payload: MuteChangeEventPayload;

  constructor(mute: boolean) {
    super(FakeEvent.Type.MUTE_CHANGE);
    this.payload = {
      mute: mute
    };
  }
}
