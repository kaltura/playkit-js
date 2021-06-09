//@flow
import Player from '../player';
import EventManager from '../event/event-manager';
import State from './state';
import {StateType} from './state-type';
import {CustomEventType, Html5EventType} from '../event/event-type';
import FakeEvent from '../event/fake-event';
import getLogger from '../utils/logger';
import Env from '../utils/env';
import Error from '../error/error';

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
   * Holds the time of the beginning of the last buffering (waiting event)
   * @member
   * @type {number | null}
   * @private
   */
  _lastWaitingTime: ?number | null;
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
    [StateType.IDLE]: {
      [Html5EventType.LOAD_START]: () => this._updateState(StateType.LOADING),
      [Html5EventType.PLAY]: () => this._updateState(StateType.BUFFERING),
      [Html5EventType.SEEKED]: () => this._updateState(StateType.PAUSED)
    },
    [StateType.LOADING]: {
      [Html5EventType.LOADED_METADATA]: () => this._updateState(StateType.PAUSED),
      [Html5EventType.ERROR]: e => e.payload.severity === Error.Severity.CRITICAL && this._updateState(StateType.IDLE),
      [Html5EventType.SEEKED]: () => {
        if (this._prevState && this._prevState.type === StateType.PLAYING) {
          this._updateState(StateType.PLAYING);
        }
      }
    },
    [StateType.PAUSED]: {
      [Html5EventType.PLAY]: () => this._updateState(StateType.PLAYING),
      [Html5EventType.PLAYING]: () => this._updateState(StateType.PLAYING),
      [Html5EventType.ENDED]: () => this._updateState(StateType.IDLE)
    },
    [StateType.PLAYING]: {
      [Html5EventType.PAUSE]: () => this._updateState(StateType.PAUSED),
      [Html5EventType.WAITING]: () => {
        if (this._player.seeking) {
          this._updateState(StateType.LOADING);
        } else {
          this._updateState(StateType.BUFFERING);
          this._lastWaitingTime = this._player.currentTime;
        }
      },
      [Html5EventType.ENDED]: () => this._updateState(StateType.IDLE),
      [Html5EventType.ERROR]: e => e.payload.severity === Error.Severity.CRITICAL && this._updateState(StateType.IDLE)
    },
    [StateType.BUFFERING]: {
      [Html5EventType.PLAYING]: () => this._updateState(StateType.PLAYING),
      [Html5EventType.PAUSE]: () => this._updateState(StateType.PAUSED),
      [Html5EventType.TIME_UPDATE]: () => {
        if (
          Env.browser.name === 'IE' &&
          this._player.currentTime !== this._lastWaitingTime &&
          this._prevState &&
          this._prevState.type === StateType.PLAYING
        ) {
          this._lastWaitingTime = null;
          this._updateState(StateType.PLAYING);
        }
      }
    }
  };

  /**
   * @constructor
   * @param {Player} player - Reference to the player.
   */
  constructor(player: Player) {
    this._player = player;
    this._logger = getLogger('StateManager');
    this._eventManager = new EventManager();
    this._history = [];
    this._prevState = null;
    this._curState = new State(StateType.IDLE);
    this._attachListeners();
  }

  /**
   * Register to all necessary events which impacts on the player state.
   * @private
   * @returns {void}
   */
  _attachListeners(): void {
    this._eventManager.listen(this._player, Html5EventType.ERROR, this._doTransition.bind(this));
    this._eventManager.listen(this._player, Html5EventType.ENDED, this._doTransition.bind(this));
    this._eventManager.listen(this._player, Html5EventType.PLAY, this._doTransition.bind(this));
    this._eventManager.listen(this._player, Html5EventType.LOAD_START, this._doTransition.bind(this));
    this._eventManager.listen(this._player, Html5EventType.PLAYING, this._doTransition.bind(this));
    this._eventManager.listen(this._player, Html5EventType.LOADED_METADATA, this._doTransition.bind(this));
    this._eventManager.listen(this._player, Html5EventType.PAUSE, this._doTransition.bind(this));
    this._eventManager.listen(this._player, Html5EventType.WAITING, this._doTransition.bind(this));
    this._eventManager.listen(this._player, Html5EventType.SEEKED, this._doTransition.bind(this));
    this._eventManager.listen(this._player, Html5EventType.TIME_UPDATE, this._doTransition.bind(this));
  }

  /**
   * Performs a state transition depends on the event which occurs in the player system.
   * @param {FakeEvent} event - The event occurs in the player system.
   * @private
   * @returns {void}
   */
  _doTransition(event: FakeEvent): void {
    if (event.type !== Html5EventType.TIME_UPDATE || (this._curState === StateType.BUFFERING && event.type === Html5EventType.TIME_UPDATE)) {
      this._logger.debug('Do transition request', event.type); // don't show most of 'timeupdate' events
    }
    let transition = this._transitions[this._curState.type];
    if (typeof transition[event.type] === 'function') {
      transition[event.type](event);
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
      this._logger.debug(`Switch player state: from ${this._prevState.type} to ${this._curState.type}`);
      this._dispatchEvent();
    }
  }

  /**
   * Fires the playerStateChanged event after state has been changed.
   * @private
   * @returns {void}
   */
  _dispatchEvent(): void {
    let event = new FakeEvent(
      CustomEventType.PLAYER_STATE_CHANGED,
      ({
        oldState: this._prevState,
        newState: this._curState
      }: StateChanged)
    );
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
   * Resets the state manager.
   * @public
   * @returns {void}
   */
  reset(): void {
    this._history = [];
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
