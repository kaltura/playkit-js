//@flow

/**
 * The possible player states.
 * @const
 * @type {{IDLE: string, LOADING: string, PLAYING: string, PAUSED: string, BUFFERING: string}}
 */
const PLAYER_STATE: { [state: string]: string } = {
  IDLE: "idle",
  LOADING: "loading",
  PLAYING: "playing",
  PAUSED: "paused",
  BUFFERING: "buffering"
};

export default PLAYER_STATE;
