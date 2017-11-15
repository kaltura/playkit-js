//@flow

/**
 * The possible player state types.
 * @const
 */
const PlayerStateType: { [state: string]: string } = {
  IDLE: "idle",
  LOADING: "loading",
  PLAYING: "playing",
  PAUSED: "paused",
  BUFFERING: "buffering"
};

export default PlayerStateType;
