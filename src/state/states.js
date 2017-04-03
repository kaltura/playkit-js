//@flow
const PLAYER_STATE: { [state: string]: string } = {
  IDLE: "idle",
  LOADING: "loading",
  PLAYING: "playing",
  PAUSED: "paused",
  BUFFERING: "buffering"
};

export default PLAYER_STATE;
