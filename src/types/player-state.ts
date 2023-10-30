import State from '../state/state';

export type Transition = {
  [state: string]: {
    [event: string]: Function
  }
};

export type MaybeState = State | null;

export type StateChanged = {
  oldState: MaybeState,
  newState: MaybeState
};
