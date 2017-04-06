import State from '../../../src/state/state'
import PlayerStates from '../../../src/state/state-types'

describe("State", () => {
  it("should create idle state", () => {
    let idleState = new State(PlayerStates.IDLE);
    idleState.type.should.equal(PlayerStates.IDLE);
    idleState._duration.should.equal(0);
    idleState._timestamp.should.be.number;
  });

  it("should create loading state", () => {
    let idleState = new State(PlayerStates.LOADING);
    idleState.type.should.equal(PlayerStates.LOADING);
    idleState._duration.should.equal(0);
    idleState._timestamp.should.be.number;
  });

  it("should create buffering state", () => {
    let idleState = new State(PlayerStates.BUFFERING);
    idleState.type.should.equal(PlayerStates.BUFFERING);
    idleState._duration.should.equal(0);
    idleState._timestamp.should.be.number;
  });

  it("should create playing state", () => {
    let idleState = new State(PlayerStates.PLAYING);
    idleState.type.should.equal(PlayerStates.PLAYING);
    idleState._duration.should.equal(0);
    idleState._timestamp.should.be.number;
  });

  it("should create paused state", () => {
    let idleState = new State(PlayerStates.PAUSED);
    idleState.type.should.equal(PlayerStates.PAUSED);
    idleState._duration.should.equal(0);
    idleState._timestamp.should.be.number;
  });
});
