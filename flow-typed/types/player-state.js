// @flow
import State from "../../src/state/state";

declare type Transition = {
  [state: string]: {
    [event: string]: Function
  }
}

declare type MaybeState = State | null;

declare type StateChanged = {
  oldState: MaybeState,
  newState: MaybeState
}
