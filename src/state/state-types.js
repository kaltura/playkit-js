//@flow

/**
 * The possible player state types.
 * @const
 */
const PLAYER_STATE_TYPES: { [state: string]: string } = {
  IDLE: "idle",
  LOADING: "loading",
  PLAYING: "playing",
  PAUSED: "paused",
  BUFFERING: "buffering"
};

export default PLAYER_STATE_TYPES;
