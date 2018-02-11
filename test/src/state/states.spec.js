import {StateType} from '../../../src/state/state-type'

describe("States", () => {
  it("should equal possible player states", () => {
    StateType.should.deep.equal({
      IDLE: "idle",
      LOADING: "loading",
      PLAYING: "playing",
      PAUSED: "paused",
      BUFFERING: "buffering"
    });
  });
});
