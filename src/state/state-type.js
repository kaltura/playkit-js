//@flow
declare type StateTypes = { [state: string]: string };

const StateType: StateTypes = {
  IDLE: "idle",
  LOADING: "loading",
  PLAYING: "playing",
  PAUSED: "paused",
  BUFFERING: "buffering"
};

export {StateType};
