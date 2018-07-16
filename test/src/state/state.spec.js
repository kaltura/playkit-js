import State from '../../../src/state/state';
import {StateType} from '../../../src/state/state-type';

describe('State', () => {
  it('should create idle state', () => {
    let idleState = new State(StateType.IDLE);
    idleState.type.should.equal(StateType.IDLE);
    idleState._duration.should.equal(0);
    idleState._timestamp.should.be.number;
  });

  it('should create loading state', () => {
    let idleState = new State(StateType.LOADING);
    idleState.type.should.equal(StateType.LOADING);
    idleState._duration.should.equal(0);
    idleState._timestamp.should.be.number;
  });

  it('should create buffering state', () => {
    let idleState = new State(StateType.BUFFERING);
    idleState.type.should.equal(StateType.BUFFERING);
    idleState._duration.should.equal(0);
    idleState._timestamp.should.be.number;
  });

  it('should create playing state', () => {
    let idleState = new State(StateType.PLAYING);
    idleState.type.should.equal(StateType.PLAYING);
    idleState._duration.should.equal(0);
    idleState._timestamp.should.be.number;
  });

  it('should create paused state', () => {
    let idleState = new State(StateType.PAUSED);
    idleState.type.should.equal(StateType.PAUSED);
    idleState._duration.should.equal(0);
    idleState._timestamp.should.be.number;
  });
});
