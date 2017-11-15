// @flow
import FakeEvent from '../fake-event'

export default class PlayerStateChangedEvent extends FakeEvent {
  payload: PlayerStateChangedEventPayload;

  constructor(oldState: State, newState: State) {
    super(FakeEvent.Type.PLAYER_STATE_CHANGED);
    this.payload = {
      oldState: oldState,
      newState: newState
    };
  }
}
