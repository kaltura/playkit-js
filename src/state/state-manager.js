//@flow
import Player from '../player'
import EventManager from '../event/event-manager'
import State from './state'
import PlayerStates from './state-types'
import PlayerEvents from '../event/events'
import FakeEvent from '../event/fake-event'
import LoggerFactory from '../utils/logger'

/**
 * Define a transition object.
 */
type Transition = {
  type: string,
  events: {
    [event: string]: {
      types: Array<string>,
      action: Function
    }
  }
};

/**
 * This class responsible to manage all the state machine of the player.
 * @classdesc
 */
export default class StateManager {
  /**
   * The logger of the class.
   * @member
   * @type {any}
   * @private
   */
  _logger: any;
  /**
   * Reference to the actual player.
   * @member
   * @type {Player}
   * @private
   */
  _player: Player;
  /**
   * The event manager of the class.
   * @member
   * @type {EventManager}
   * @private
   */
  _eventManager: EventManager;
  /**
   * Holds the current state of the player.
   * @member
   * @type {State}
   * @private
   */
  _curState: State;
  /**
   * Holds the previous state of the player.
   * @member
   * @type {State | null}
   * @private
   */
  _prevState: State | null;
  /**
   * Holds the state history of the player.
   * @member
   * @type {Array<State>}
   * @private
   */
  _history: Array<State>;
  /**
   * The possible transitions from one state to another.
   * @type {Array<Transition>}
   * @private
   */
  _transitions: Array<Transition> = [{
    type: PlayerStates.IDLE,
    events: {
      'loadstart': {
        types: [PlayerStates.LOADING],
        action: (types: Array<string>) => {
          this._updateState(types[0]);
          this._logger.debug(`Player state changed: from ${this._prevState.type} to ${this._curState.type}`);
          this._dispatchEvent();
        }
      }
    }
  }, {
    type: PlayerStates.LOADING,
    events: {
      'loadedmetadata': {
        types: [PlayerStates.PAUSED, PlayerStates.PLAYING],
        action: (types: Array<string>) => {
          if (this._player.config.autoPlay) {
            this._updateState(types[1]);
          } else {
            this._updateState(types[0]);
          }
          this._logger.debug(`Player state changed: from ${this._prevState.type} to ${this._curState.type}`);
          this._dispatchEvent();
        }
      },
      'error': {
        types: [PlayerStates.IDLE],
        action: (types: Array<string>) => {
          this._updateState(types[0]);
          this._logger.debug(`Player state changed: from ${this._prevState.type} to ${this._curState.type}`);
          this._dispatchEvent();
        }
      }
    }
  }, {
    type: PlayerStates.PAUSED,
    events: {
      'play': {
        types: [PlayerStates.PLAYING],
        action: (types: Array<string>) => {
          this._updateState(types[0]);
          this._logger.debug(`Player state changed: from ${this._prevState.type} to ${this._curState.type}`);
          this._dispatchEvent();
        },
      },
      'ended': {
        types: [PlayerStates.IDLE],
        action: (types: Array<string>) => {
          this._updateState(types[0]);
          this._logger.debug(`Player state changed: from ${this._prevState.type} to ${this._curState.type}`);
          this._dispatchEvent();
        }
      }
    }
  }, {
    type: PlayerStates.PLAYING,
    events: {
      'pause': {
        types: [PlayerStates.PAUSED],
        action: (types: Array<string>) => {
          this._updateState(types[0]);
          this._logger.debug(`Player state changed: from ${this._prevState.type} to ${this._curState.type}`);
          this._dispatchEvent();
        }
      },
      'waiting': {
        types: [PlayerStates.BUFFERING],
        action: (types: Array<string>) => {
          this._updateState(types[0]);
          this._logger.debug(`Player state changed: from ${this._prevState.type} to ${this._curState.type}`);
          this._dispatchEvent();
        }
      },
      'ended': {
        types: [PlayerStates.IDLE],
        action: (types: Array<string>) => {
          this._updateState(types[0]);
          this._logger.debug(`Player state changed: from ${this._prevState.type} to ${this._curState.type}`);
          this._dispatchEvent();
        }
      },
      'error': {
        types: [PlayerStates.IDLE],
        action: (types: Array<string>) => {
          this._updateState(types[0]);
          this._logger.debug(`Player state changed: from ${this._prevState.type} to ${this._curState.type}`);
          this._dispatchEvent();
        }
      }
    }
  }, {
    type: PlayerStates.BUFFERING,
    events: {
      'playing': {
        types: [PlayerStates.PLAYING],
        action: (types: Array<string>) => {
          this._updateState(types[0]);
          this._logger.debug(`Player state changed: from ${this._prevState.type} to ${this._curState.type}`);
          this._dispatchEvent();
        }
      }
    }
  }];

  /**
   * @constructor
   * @param player - Reference to the player.
   */
  constructor(player: Player) {
    this._player = player;
    this._logger = LoggerFactory.getLogger("StateManager");
    this._eventManager = new EventManager();
    this._history = [];
    this._prevState = null;
    this._curState = new State(PlayerStates.IDLE);
    this._attachListeners();
  }

  /**
   * Register to all necessary events which impacts on the player state.
   * @private
   */
  _attachListeners(): void {
    this._eventManager.listen(this._player, PlayerEvents.ERROR, this._doTransition.bind(this));
    this._eventManager.listen(this._player, PlayerEvents.ENDED, this._doTransition.bind(this));
    this._eventManager.listen(this._player, PlayerEvents.PLAY, this._doTransition.bind(this));
    this._eventManager.listen(this._player, PlayerEvents.LOAD_START, this._doTransition.bind(this));
    this._eventManager.listen(this._player, PlayerEvents.PLAYING, this._doTransition.bind(this));
    this._eventManager.listen(this._player, PlayerEvents.LOADED_METADATA, this._doTransition.bind(this));
    this._eventManager.listen(this._player, PlayerEvents.PAUSE, this._doTransition.bind(this));
    this._eventManager.listen(this._player, PlayerEvents.WAITING, this._doTransition.bind(this));
  }

  _doTransition(event: FakeEvent): void {
    this._logger.debug('Do transition request', event);
    this._transitions.forEach((transition) => {
      if (this._curState.type === transition.type) {
        let transitionEvent = transition.events[event.type];
        if (transitionEvent) {
          transitionEvent.action(transitionEvent.types);
        }
        return;
      }
    });
  }

  /**
   * Updates the player state.
   * @param type - The type of the new state.
   * @private
   */
  _updateState(type: string): void {
    if (this._curState.type !== type) {
      this._curState.duration = Date.now() / 1000;
      this._history.push(this._curState);
      this._prevState = this._curState;
      this._curState = new State(type);
    }
  }

  /**
   * Fires the playerStateChanged event after state has been changed.
   * @private
   */
  _dispatchEvent(): void {
    let event = new FakeEvent(PlayerEvents.PLAYER_STATE_CHANGED, {
      'oldState': this._prevState,
      'newState': this._curState
    });
    this._player.dispatchEvent(event);
  }

  /**
   * Getter to the current state of the player.
   * @public
   * @returns {State}
   */
  get currentState(): State {
    return this._curState;
  }

  /**
   * Getter to the previous state of the player.
   * @public
   * @returns {State|null}
   */
  get previousState(): State | null {
    return this._prevState;
  }

  /**
   * Getter to the state history of the player.
   * @public
   * @returns {Array.<State>}
   */
  get history(): Array<State> {
    return this._history;
  }
}
