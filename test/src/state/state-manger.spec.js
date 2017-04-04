import State from '../../../src/state/state'
import PlayerStates from '../../../src/state/states'
import StateManager from '../../../src/state/state-manager'

describe("StateManager", () => {

  let sandbox;
  let stateManager;
  let fakePlayer = {
    dispatchEvent: function () {}
  };

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners', function(){});
    stateManager = new StateManager(fakePlayer);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should create all state manager properties", () => {
    StateManager.EventName.should.equal("playerStateChanged");
    stateManager.currentState.should.be.an.instanceof(State);
    stateManager.currentState.type.should.equal(PlayerStates.IDLE);
    (stateManager.previousState === null).should.be.true;
    stateManager.history.should.deep.equal([]);
  });

  it("should update a state", () => {
    stateManager._updateState(PlayerStates.LOADING);
    stateManager.currentState.should.be.an.instanceof(State);
    stateManager.currentState.type.should.equal(PlayerStates.LOADING);
    stateManager.previousState.should.be.an.instanceof(State);
    stateManager.previousState.type.should.equal(PlayerStates.IDLE);
    stateManager.history.should.have.lengthOf(1);
    stateManager.history[0].type.should.equal(PlayerStates.IDLE);

    stateManager._updateState(PlayerStates.PLAYING);
    stateManager.currentState.should.be.an.instanceof(State);
    stateManager.currentState.type.should.equal(PlayerStates.PLAYING);
    stateManager.previousState.should.be.an.instanceof(State);
    stateManager.previousState.type.should.equal(PlayerStates.LOADING);
    stateManager.history.should.have.lengthOf(2);
    stateManager.history[0].type.should.equal(PlayerStates.IDLE);
    stateManager.history[1].type.should.equal(PlayerStates.LOADING);
  });

  it("should not update a state", () => {
    stateManager._updateState(PlayerStates.IDLE);
    stateManager.currentState.should.be.an.instanceof(State);
    stateManager.currentState.type.should.equal(PlayerStates.IDLE);
    (stateManager.previousState === null).should.be.true;
    stateManager.history.should.have.lengthOf(0);
  });

  it("should dispatch initial state event", (done) => {
    sandbox.stub(stateManager._player, 'dispatchEvent', function (event) {
      event.type.should.equal(StateManager.EventName);
      (event.payload.oldState === null).should.be.true;
      event.payload.newState.should.be.an.instanceof(State);
      event.payload.newState.type.should.equal(PlayerStates.IDLE);git
      done();
    });
    stateManager._dispatchEvent();
  });

  it("should dispatch new state event", (done) => {
    sandbox.stub(stateManager._player, 'dispatchEvent', function (event) {
      event.type.should.equal(StateManager.EventName);
      event.payload.oldState.should.be.an.instanceof(State);
      event.payload.oldState.type.should.equal(PlayerStates.IDLE);
      event.payload.newState.should.be.an.instanceof(State);
      event.payload.newState.type.should.equal(PlayerStates.LOADING);
      done();
    });
    stateManager._updateState(PlayerStates.LOADING);
  });
});
