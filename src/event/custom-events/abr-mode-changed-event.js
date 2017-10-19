// @flow
import FakeEvent from '../fake-event'

export default class AbrModeChangedEvent extends FakeEvent {
  payload: AbrModeChangedEventPayload;

  constructor(mode: string) {
    super(FakeEvent.Type.ABR_MODE_CHANGED);
    this.payload = {
      mode: mode
    };
  }
}
