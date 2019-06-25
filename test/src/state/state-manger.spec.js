import State from '../../../src/state/state';
import {StateType} from '../../../src/state/state-type';
import StateManager from '../../../src/state/state-manager';
import {Html5EventType, CustomEventType} from '../../../src/event/event-type';

let sandbox;
let stateManager;
let fakePlayer = {
  dispatchEvent: function() {},
  config: {
    playback: {}
  }
};

describe('StateManager', () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function() {});
    stateManager = new StateManager(fakePlayer);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create all state manager properties', () => {
    stateManager.currentState.should.be.an.instanceof(State);
    stateManager.currentState.type.should.equal(StateType.IDLE);
    (stateManager.previousState === null).should.be.true;
    stateManager.history.should.deep.equal([]);
  });

  it('should update a state', () => {
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

  it('should not update a state', () => {
    stateManager._updateState(StateType.IDLE);
    stateManager.currentState.should.be.an.instanceof(State);
    stateManager.currentState.type.should.equal(StateType.IDLE);
    (stateManager.previousState === null).should.be.true;
    stateManager.history.should.have.lengthOf(0);
  });

  it('should dispatch initial state event', done => {
    sandbox.stub(stateManager._player, 'dispatchEvent').callsFake(function(event) {
      event.type.should.equal(CustomEventType.PLAYER_STATE_CHANGED);
      (event.payload.oldState === null).should.be.true;
      event.payload.newState.should.be.an.instanceof(State);
      event.payload.newState.type.should.equal(StateType.IDLE);
      done();
    });
    stateManager._dispatchEvent();
  });

  it('should dispatch new state event', done => {
    sandbox.stub(stateManager._player, 'dispatchEvent').callsFake(function(event) {
      event.type.should.equal(CustomEventType.PLAYER_STATE_CHANGED);
      event.payload.oldState.should.be.an.instanceof(State);
      event.payload.oldState.type.should.equal(StateType.IDLE);
      event.payload.newState.should.be.an.instanceof(State);
      event.payload.newState.type.should.equal(StateType.LOADING);
      done();
    });
    stateManager._updateState(StateType.LOADING);
    stateManager._dispatchEvent();
  });

  it('should reset the state manager', () => {
    stateManager.reset();
    stateManager.history.should.be.empty;
  });
});

describe('StateManager.Transitions:IDLE', () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function() {});
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(StateType.IDLE);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from idle to loading', () => {
    stateManager._doTransition({type: Html5EventType.LOAD_START});
    stateManager.currentState.type.should.equal(StateType.LOADING);
  });

  it('should handle transition from idle to buffering', () => {
    stateManager._doTransition({type: Html5EventType.PLAY});
    stateManager.currentState.type.should.equal(StateType.BUFFERING);
  });

  it('should handle transition from idle to paused', () => {
    stateManager._doTransition({type: Html5EventType.SEEKED});
    stateManager.currentState.type.should.equal(StateType.PAUSED);
  });

  it("shouldn't handle transition from idle because of unregistered event", () => {
    stateManager._doTransition({type: Html5EventType.ERROR});
    stateManager.currentState.type.should.equal(StateType.IDLE);
  });
});

describe('StateManager.Transitions:LOADING', () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function() {});
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(StateType.LOADING);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from loading to idle', () => {
    stateManager._doTransition({type: Html5EventType.ERROR});
    stateManager.currentState.type.should.equal(StateType.IDLE);
  });

  it('should handle transition from loading to paused', () => {
    fakePlayer.config.playback.autoplay = false;
    stateManager._doTransition({type: Html5EventType.LOADED_METADATA});
    stateManager.currentState.type.should.equal(StateType.PAUSED);
  });

  it("shouldn't handle transition from loading because of unregistered event", () => {
    stateManager._doTransition({type: Html5EventType.WAITING});
    stateManager.currentState.type.should.equal(StateType.LOADING);
  });
});

describe('StateManager.Transitions:PAUSED', () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function() {});
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(StateType.PAUSED);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from paused to playing', () => {
    stateManager._doTransition({type: Html5EventType.PLAY});
    stateManager.currentState.type.should.equal(StateType.PLAYING);
  });

  it('should handle transition from paused to playing', () => {
    stateManager._doTransition({type: Html5EventType.PLAYING});
    stateManager.currentState.type.should.equal(StateType.PLAYING);
  });

  it('should handle transition from paused to idle', () => {
    stateManager._doTransition({type: Html5EventType.ENDED});
    stateManager.currentState.type.should.equal(StateType.IDLE);
  });

  it("shouldn't handle transition from paused because of unregistered event", () => {
    stateManager._doTransition({type: Html5EventType.ERROR});
    stateManager.currentState.type.should.equal(StateType.PAUSED);
  });
});

describe('StateManager.Transitions:BUFFERING', () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function() {});
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(StateType.BUFFERING);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from buffering to playing', () => {
    stateManager._doTransition({type: Html5EventType.PLAYING});
    stateManager.currentState.type.should.equal(StateType.PLAYING);
  });

  it('should handle transition from buffering to paused', () => {
    stateManager._doTransition({type: Html5EventType.PAUSE});
    stateManager.currentState.type.should.equal(StateType.PAUSED);
  });

  it('should handle transition from buffering to playing on seeked while playing', () => {
    stateManager._doTransition({type: Html5EventType.PLAYING});
    stateManager._doTransition({type: Html5EventType.SEEKED});
    stateManager.currentState.type.should.equal(StateType.PLAYING);
  });

  it("shouldn't handle transition from buffering on seeked not while playing", () => {
    stateManager._doTransition({type: Html5EventType.SEEKED});
    stateManager.currentState.type.should.equal(StateType.BUFFERING);
  });

  it("shouldn't handle transition from buffering because of unregistered event", () => {
    stateManager._doTransition({type: Html5EventType.ERROR});
    stateManager.currentState.type.should.equal(StateType.BUFFERING);
  });
});

describe('StateManager.Transitions:PLAYING', () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(StateManager.prototype, '_attachListeners').callsFake(function() {});
    stateManager = new StateManager(fakePlayer);
    stateManager._updateState(StateType.PLAYING);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should handle transition from playing to idle because of error', () => {
    stateManager._doTransition({type: Html5EventType.ERROR});
    stateManager.currentState.type.should.equal(StateType.IDLE);
  });

  it('should handle transition from playing to idle because of ended', () => {
    stateManager._doTransition({type: Html5EventType.ENDED});
    stateManager.currentState.type.should.equal(StateType.IDLE);
  });

  it('should handle transition from playing to buffering', () => {
    stateManager._doTransition({type: Html5EventType.WAITING});
    stateManager.currentState.type.should.equal(StateType.BUFFERING);
  });

  it('should handle transition from playing to paused', () => {
    stateManager._doTransition({type: Html5EventType.PAUSE});
    stateManager.currentState.type.should.equal(StateType.PAUSED);
  });

  it("shouldn't handle transition from playing because of unregistered event", () => {
    stateManager._doTransition({type: Html5EventType.LOADED_METADATA});
    stateManager.currentState.type.should.equal(StateType.PLAYING);
  });
});
