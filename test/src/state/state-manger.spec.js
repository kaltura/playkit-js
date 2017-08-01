import State from '../../../src/state/state'
import {StateType} from '../../../src/state/state-type'
import StateManager from '../../../src/state/state-manager'
import {EventType} from '../../../src/event/event-type'

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
    stateManager.currentState.type.should.equal(StateType.IDLE);
    (stateManager.previousState === null).should.be.true;
    stateManager.history.should.deep.equal([]);
  });

  it("should update a state", () => {
    stateManager._updateState(StateType.LOADING);
    stateManager.currentState.should.be.an.instanceof(State);
    stateManager.currentState.type.should.equal(StateType.LOADING);
    stateManager.previousState.should.be.an.instanceof(State);
    stateManager.previousState.type.should.equal(StateType.IDLE);
    stateManager.history.should.have.lengthOf(1);
    stateManager.history[0].type.should.equal(StateType.IDLE);

    stateManager._updateState(StateType.PLAYING);
    stateManager.currentState.should.be.an.instanceof(State);
    stateManager.currentState.type.should.equal(StateType.PLAYING);
    stateManager.previousState.should.be.an.instanceof(State);
    stateManager.previousState.type.should.equal(StateType.LOADING);
    stateManager.history.should.have.lengthOf(2);
    stateManager.history[0].type.should.equal(StateType.IDLE);
    stateManager.history[1].type.should.equal(StateType.LOADING);
  });

  it("should not update a state", () => {
    stateManager._updateState(StateType.IDLE);
    stateManager.currentState.should.be.an.instanceof(State);
    stateManager.currentState.type.should.equal(StateType.IDLE);
    (stateManager.previousState === null).should.be.true;
    stateManager.history.should.have.lengthOf(0);
  });

  it("should dispatch initial state event", (done) => {
    sandbox.stub(stateManager._player, 'dispatchEvent').callsFake(function (event) {
      event.type.should.equal(EventType.Player.PLAYER_STATE_CHANGED);
      (event.payload.oldState === null).should.be.true;
      event.payload.newState.should.be.an.instanceof(State);
      event.payload.newState.type.should.equal(StateType.IDLE);
      done();
    });
    stateManager._dispatchEvent();
  });

  it("should dispatch new state event", (done) => {
    sandbox.stub(stateManager._player, 'dispatchEvent').callsFake(function (event) {
      event.type.should.equal(EventType.Player.PLAYER_STATE_CHANGED);
      event.payload.oldState.should.be.an.instanceof(State);
      event.payload.oldState.type.should.equal(StateType.IDLE);
      event.payload.newState.should.be.an.instanceof(State);
      event.payload.newState.type.should.equal(StateType.LOADING);
      done();
    });
    stateManager._updateState(StateType.LOADING);
    stateManager._dispatchEvent();
  });
});

describe("StateManager.Transitions:IDLE", () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function () {
    });
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(StateType.IDLE);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from idle to loading', () => {
    stateManager._doTransition({type: EventType.Html5.LOAD_START});
    stateManager.currentState.type.should.equal(StateType.LOADING);
  });

  it('should handle transition from idle to buffering', () => {
    stateManager._doTransition({type: EventType.Html5.PLAY});
    stateManager.currentState.type.should.equal(StateType.BUFFERING);
  });

  it('shouldn\'t handle transition from idle because of unregistered event', () => {
    stateManager._doTransition({type: EventType.Html5.ERROR});
    stateManager.currentState.type.should.equal(StateType.IDLE);
  });
});

describe("StateManager.Transitions:LOADING", () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function () {
    });
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(StateType.LOADING);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from loading to idle', () => {
    stateManager._doTransition({type: EventType.Html5.ERROR});
    stateManager.currentState.type.should.equal(StateType.IDLE);
  });

  it('should handle transition from loading to playing', () => {
    fakePlayer.config.playback.autoplay = true;
    stateManager._doTransition({type: EventType.Html5.LOADED_METADATA});
    stateManager.currentState.type.should.equal(StateType.PLAYING);
  });

  it('should handle transition from loading to paused', () => {
    fakePlayer.config.playback.autoplay = false;
    stateManager._doTransition({type: EventType.Html5.LOADED_METADATA});
    stateManager.currentState.type.should.equal(StateType.PAUSED);
  });

  it('shouldn\'t handle transition from loading because of unregistered event', () => {
    stateManager._doTransition({type: EventType.Html5.WAITING});
    stateManager.currentState.type.should.equal(StateType.LOADING);
  });
});

describe("StateManager.Transitions:PAUSED", () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function () {
    });
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(StateType.PAUSED);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from paused to playing', () => {
    stateManager._doTransition({type: EventType.Html5.PLAY});
    stateManager.currentState.type.should.equal(StateType.PLAYING);
  });

  it('should handle transition from paused to playing', () => {
    stateManager._doTransition({type: EventType.Html5.PLAYING});
    stateManager.currentState.type.should.equal(StateType.PLAYING);
  });

  it('should handle transition from paused to idle', () => {
    stateManager._doTransition({type: EventType.Html5.ENDED});
    stateManager.currentState.type.should.equal(StateType.IDLE);
  });

  it('shouldn\'t handle transition from paused because of unregistered event', () => {
    stateManager._doTransition({type: EventType.Html5.ERROR});
    stateManager.currentState.type.should.equal(StateType.PAUSED);
  });
});

describe("StateManager.Transitions:BUFFERING", () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function () {
    });
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(StateType.BUFFERING);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from buffering to playing', () => {
    stateManager._doTransition({type: EventType.Html5.PLAYING});
    stateManager.currentState.type.should.equal(StateType.PLAYING);
  });

  it('should handle transition from buffering to paused', () => {
    stateManager._doTransition({type: EventType.Html5.PAUSE});
    stateManager.currentState.type.should.equal(StateType.PAUSED);
  });

  it('shouldn\'t handle transition from buffering because of unregistered event', () => {
    stateManager._doTransition({type: EventType.Html5.ERROR});
    stateManager.currentState.type.should.equal(StateType.BUFFERING);
  });
});

describe("StateManager.Transitions:PLAYING", () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function () {
    });
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(StateType.PLAYING);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from playing to idle because of error', () => {
    stateManager._doTransition({type: EventType.Html5.ERROR});
    stateManager.currentState.type.should.equal(StateType.IDLE);
  });

  it('should handle transition from playing to idle because of ended', () => {
    stateManager._doTransition({type: EventType.Html5.ENDED});
    stateManager.currentState.type.should.equal(StateType.IDLE);
  });

  it('should handle transition from playing to buffering', () => {
    stateManager._doTransition({type: EventType.Html5.WAITING});
    stateManager.currentState.type.should.equal(StateType.BUFFERING);
  });

  it('should handle transition from playing to paused', () => {
    stateManager._doTransition({type: EventType.Html5.PAUSE});
    stateManager.currentState.type.should.equal(StateType.PAUSED);
  });

  it('shouldn\'t handle transition from playing because of unregistered event', () => {
    stateManager._doTransition({type: EventType.Html5.LOADED_METADATA});
    stateManager.currentState.type.should.equal(StateType.PLAYING);
  });
});
