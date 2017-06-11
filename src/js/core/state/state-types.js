//@flow

/**
 * The possible player state types.
 * @const
 * @type {{IDLE: string, LOADING: string, PLAYING: string, PAUSED: string, BUFFERING: string}}
 */
const PLAYER_STATE_TYPES: { [state: string]: string } = {
  IDLE: "idle",
  LOADING: "loading",
  PLAYING: "playing",
  PAUSED: "paused",
  BUFFERING: "buffering"
};

export default PLAYER_STATE_TYPES;
