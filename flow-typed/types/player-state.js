// @flow
import State from "../../src/state/state";

/**
 * Define a transition object.
 */
declare type Transition = {
  [state: string]: {
    [event: string]: Function
  }
}

declare type MaybeState = State | null;

/**
 * Define a StateChanged object.
 */
declare type StateChanged = {
  oldState: MaybeState,
  newState: MaybeState
}
