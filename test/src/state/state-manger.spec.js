import State from '../../../src/state/state'
import PlayerStates from '../../../src/state/state-types'
import StateManager from '../../../src/state/state-manager'
import {HTML5_EVENTS as Html5Events, CUSTOM_EVENTS as CustomEvents} from '../../../src/event/events'

let sandbox;
let stateManager;
let fakePlayer = {
  dispatchEvent: function () {
  },
  config: {
    playback: {}
  }
};

describe("StateManager", () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function () {
    });
    stateManager = new StateManager(fakePlayer);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should create all state manager properties", () => {
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
    sandbox.stub(stateManager._player, 'dispatchEvent').callsFake(function (event) {
      event.type.should.equal(CustomEvents.PLAYER_STATE_CHANGED);
      (event.payload.oldState === null).should.be.true;
      event.payload.newState.should.be.an.instanceof(State);
      event.payload.newState.type.should.equal(PlayerStates.IDLE);
      done();
    });
    stateManager._dispatchEvent();
  });

  it("should dispatch new state event", (done) => {
    sandbox.stub(stateManager._player, 'dispatchEvent').callsFake(function (event) {
      event.type.should.equal(CustomEvents.PLAYER_STATE_CHANGED);
      event.payload.oldState.should.be.an.instanceof(State);
      event.payload.oldState.type.should.equal(PlayerStates.IDLE);
      event.payload.newState.should.be.an.instanceof(State);
      event.payload.newState.type.should.equal(PlayerStates.LOADING);
      done();
    });
    stateManager._updateState(PlayerStates.LOADING);
    stateManager._dispatchEvent();
  });
});

describe("StateManager.Transitions:IDLE", () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function () {
    });
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(PlayerStates.IDLE);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from idle to loading', () => {
    stateManager._doTransition({type: Html5Events.LOAD_START});
    stateManager.currentState.type.should.equal(PlayerStates.LOADING);
  });

  it('should handle transition from idle to buffering', () => {
    stateManager._doTransition({type: Html5Events.PLAY});
    stateManager.currentState.type.should.equal(PlayerStates.BUFFERING);
  });

  it('shouldn\'t handle transition from idle because of unregistered event', () => {
    stateManager._doTransition({type: Html5Events.ERROR});
    stateManager.currentState.type.should.equal(PlayerStates.IDLE);
  });
});

describe("StateManager.Transitions:LOADING", () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function () {
    });
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(PlayerStates.LOADING);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from loading to idle', () => {
    stateManager._doTransition({type: Html5Events.ERROR});
    stateManager.currentState.type.should.equal(PlayerStates.IDLE);
  });

  it('should handle transition from loading to playing', () => {
    fakePlayer.config.playback.autoplay = true;
    stateManager._doTransition({type: Html5Events.LOADED_METADATA});
    stateManager.currentState.type.should.equal(PlayerStates.PLAYING);
  });

  it('should handle transition from loading to paused', () => {
    fakePlayer.config.playback.autoplay = false;
    stateManager._doTransition({type: Html5Events.LOADED_METADATA});
    stateManager.currentState.type.should.equal(PlayerStates.PAUSED);
  });

  it('shouldn\'t handle transition from loading because of unregistered event', () => {
    stateManager._doTransition({type: Html5Events.WAITING});
    stateManager.currentState.type.should.equal(PlayerStates.LOADING);
  });
});

describe("StateManager.Transitions:PAUSED", () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function () {
    });
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(PlayerStates.PAUSED);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from paused to playing', () => {
    stateManager._doTransition({type: Html5Events.PLAY});
    stateManager.currentState.type.should.equal(PlayerStates.PLAYING);
  });

  it('should handle transition from paused to playing', () => {
    stateManager._doTransition({type: Html5Events.PLAYING});
    stateManager.currentState.type.should.equal(PlayerStates.PLAYING);
  });

  it('should handle transition from paused to idle', () => {
    stateManager._doTransition({type: Html5Events.ENDED});
    stateManager.currentState.type.should.equal(PlayerStates.IDLE);
  });

  it('shouldn\'t handle transition from paused because of unregistered event', () => {
    stateManager._doTransition({type: Html5Events.ERROR});
    stateManager.currentState.type.should.equal(PlayerStates.PAUSED);
  });
});

describe("StateManager.Transitions:BUFFERING", () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function () {
    });
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(PlayerStates.BUFFERING);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from buffering to playing', () => {
    stateManager._doTransition({type: Html5Events.PLAYING});
    stateManager.currentState.type.should.equal(PlayerStates.PLAYING);
  });

  it('should handle transition from buffering to paused', () => {
    stateManager._doTransition({type: Html5Events.PAUSE});
    stateManager.currentState.type.should.equal(PlayerStates.PAUSED);
  });

  it('should handle transition from buffering to playing on seeked while playing', () => {
    stateManager._doTransition({type: Html5Events.PLAYING});
    stateManager._doTransition({type: Html5Events.SEEKED});
    stateManager.currentState.type.should.equal(PlayerStates.PLAYING);
  });

  it('shouldn\'t handle transition from buffering on seeked not while playing', () => {
    stateManager._doTransition({type: Html5Events.SEEKED});
    stateManager.currentState.type.should.equal(PlayerStates.BUFFERING);
  });

  it('shouldn\'t handle transition from buffering because of unregistered event', () => {
    stateManager._doTransition({type: Html5Events.ERROR});
    stateManager.currentState.type.should.equal(PlayerStates.BUFFERING);
  });
});

describe("StateManager.Transitions:PLAYING", () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function () {
    });
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(PlayerStates.PLAYING);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from playing to idle because of error', () => {
    stateManager._doTransition({type: Html5Events.ERROR});
    stateManager.currentState.type.should.equal(PlayerStates.IDLE);
  });

  it('should handle transition from playing to idle because of ended', () => {
    stateManager._doTransition({type: Html5Events.ENDED});
    stateManager.currentState.type.should.equal(PlayerStates.IDLE);
  });

  it('should handle transition from playing to buffering', () => {
    stateManager._doTransition({type: Html5Events.WAITING});
    stateManager.currentState.type.should.equal(PlayerStates.BUFFERING);
  });

  it('should handle transition from playing to paused', () => {
    stateManager._doTransition({type: Html5Events.PAUSE});
    stateManager.currentState.type.should.equal(PlayerStates.PAUSED);
  });

  it('shouldn\'t handle transition from playing because of unregistered event', () => {
    stateManager._doTransition({type: Html5Events.LOADED_METADATA});
    stateManager.currentState.type.should.equal(PlayerStates.PLAYING);
  });
});
