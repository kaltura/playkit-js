import PlayerStates from '../../../src/state/state-types'

describe("States", () => {
  it("should equal possible player states", () => {
    PlayerStates.should.deep.equal({
      IDLE: "idle",
      LOADING: "loading",
      PLAYING: "playing",
      PAUSED: "paused",
      BUFFERING: "buffering"
    });
  });
});
