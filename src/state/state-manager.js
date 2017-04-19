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
  [state: string]: {
    [event: string]: Function
  }
}

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
  _transitions: Transition = {
    [PlayerStates.IDLE]: {
      [PlayerEvents.LOAD_START]: () => {
        this._updateState(PlayerStates.LOADING);
        this._dispatchEvent();
      }
    },
    [PlayerStates.LOADING]: {
      [PlayerEvents.LOADED_METADATA]: () => {
        if (this._player.config.autoPlay) {
          this._updateState(PlayerStates.PLAYING);
        } else {
          this._updateState(PlayerStates.PAUSED);
        }
        this._dispatchEvent();
      },
      [PlayerEvents.ERROR]: () => {
        this._updateState(PlayerStates.IDLE);
        this._dispatchEvent();
      }
    },
    [PlayerStates.PAUSED]: {
      [PlayerEvents.PLAY]: () => {
        this._updateState(PlayerStates.PLAYING);
        this._dispatchEvent();
      },
      [PlayerEvents.ENDED]: () => {
        this._updateState(PlayerStates.IDLE);
        this._dispatchEvent();
      }
    },
    [PlayerStates.PLAYING]: {
      [PlayerEvents.PAUSE]: () => {
        this._updateState(PlayerStates.PAUSED);
        this._dispatchEvent();
      },
      [PlayerEvents.WAITING]: () => {
        this._updateState(PlayerStates.BUFFERING);
        this._dispatchEvent();
      },
      [PlayerEvents.ENDED]: () => {
        this._updateState(PlayerStates.IDLE);
        this._dispatchEvent();
      },
      [PlayerEvents.ERROR]: () => {
        this._updateState(PlayerStates.IDLE);
        this._dispatchEvent();
      }
    },
    [PlayerStates.BUFFERING]: {
      [PlayerEvents.PLAYING]: () => {
        this._updateState(PlayerStates.PLAYING);
        this._dispatchEvent();
      }
    }
  };

  /**
   * @constructor
   * @param {Player} player - Reference to the player.
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
   * @returns {void}
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

  /**
   * Performs a state transition depends on the event which occurs in the player system.
   * @param {FakeEvent} event - The event occurs in the player system.
   * @private
   * @returns {void}
   */
  _doTransition(event: FakeEvent): void {
    this._logger.debug('Do transition request', event);
    let transition = this._transitions[this._curState.type];
    if (typeof transition[event.type] === 'function') {
      transition[event.type]();
    }
  }

  /**
   * Updates the player's state.
   * @param {string} type - The type of the new state.
   * @private
   * @returns {void}
   */
  _updateState(type: string): void {
    if (this._curState.type !== type) {
      this._curState.duration = Date.now() / 1000;
      this._history.push(this._curState);
      this._prevState = this._curState;
      this._curState = new State(type);
      this._logger.debug(`Switch player state: from ${this._prevState.type} to ${this._curState.type}`)
    }
  }

  /**
   * Fires the playerStateChanged event after state has been changed.
   * @private
   * @returns {void}
   */
  _dispatchEvent(): void {
    let event = new FakeEvent(PlayerEvents.PLAYER_STATE_CHANGED, {
      'oldState': this._prevState,
      'newState': this._curState
    });
    this._player.dispatchEvent(event);
  }

  /**
   * Destroys the state manager.
   * @public
   * @returns {void}
   */
  destroy(): void {
    this._history = [];
    this._eventManager.destroy();
  }

  /**
   * Getter to the current state of the player.
   * @public
   * @returns {State} - The current state object
   */
  get currentState(): State {
    return this._curState;
  }

  /**
   * Getter to the previous state of the player.
   * @public
   * @returns {State|null} - The previous state object, or null if such doesn't exists
   */
  get previousState(): State | null {
    return this._prevState;
  }

  /**
   * Getter to the state history of the player.
   * @public
   * @returns {Array.<State>} - The full states history objects
   */
  get history(): Array<State> {
    return this._history;
  }
}
