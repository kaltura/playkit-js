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

type MaybeState = State | null;

declare type StateChanged = {
  oldState: MaybeState,
  newState: MaybeState
}

export type {Transition, StateChanged}
