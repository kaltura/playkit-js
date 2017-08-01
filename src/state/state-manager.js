//@flow
import Player from '../player'
import EventManager from '../event/event-manager'
import State from './state'
import {StateType} from './state-type'
import {EventType} from '../event/event-type'
import FakeEvent from '../event/fake-event'
import LoggerFactory from '../utils/logger'

type Transition = {
  [state: string]: {
    [event: string]: Function
  }
}

/**
 * @namespace StateManager
 * @class StateManager
 * @memberof Classes
 */
export default class StateManager {
  _logger: any;
  _player: Player;
  _eventManager: EventManager;
  _curState: State;
  _prevState: State | null;
  _history: Array<State>;
  _transitions: Transition = {
    [StateType.IDLE]: {
      [EventType.Html5.LOAD_START]: () => {
        this._updateState(StateType.LOADING);
        this._dispatchEvent();
      },
      [EventType.Html5.PLAY]: () => {
        this._updateState(StateType.BUFFERING);
        this._dispatchEvent();
      }
    },
    [StateType.LOADING]: {
      [EventType.Html5.LOADED_METADATA]: () => {
        if (this._player.config.playback.autoplay) {
          this._updateState(StateType.PLAYING);
        } else {
          this._updateState(StateType.PAUSED);
        }
        this._dispatchEvent();
      },
      [EventType.Html5.ERROR]: () => {
        this._updateState(StateType.IDLE);
        this._dispatchEvent();
      }
    },
    [StateType.PAUSED]: {
      [EventType.Html5.PLAY]: () => {
        this._updateState(StateType.PLAYING);
        this._dispatchEvent();
      },
      [EventType.Html5.PLAYING]: () => {
        this._updateState(StateType.PLAYING);
        this._dispatchEvent();
      },
      [EventType.Html5.ENDED]: () => {
        this._updateState(StateType.IDLE);
        this._dispatchEvent();
      }
    },
    [StateType.PLAYING]: {
      [EventType.Html5.PAUSE]: () => {
        this._updateState(StateType.PAUSED);
        this._dispatchEvent();
      },
      [EventType.Html5.WAITING]: () => {
        this._updateState(StateType.BUFFERING);
        this._dispatchEvent();
      },
      [EventType.Html5.ENDED]: () => {
        this._updateState(StateType.IDLE);
        this._dispatchEvent();
      },
      [EventType.Html5.ERROR]: () => {
        this._updateState(StateType.IDLE);
        this._dispatchEvent();
      }
    },
    [StateType.BUFFERING]: {
      [EventType.Html5.PLAYING]: () => {
        this._updateState(StateType.PLAYING);
        this._dispatchEvent();
      },
      [EventType.Html5.PAUSE]: () => {
        this._updateState(StateType.PAUSED);
        this._dispatchEvent();
      }
    }
  };

  constructor(player: Player) {
    this._player = player;
    this._logger = LoggerFactory.getLogger("StateManager");
    this._eventManager = new EventManager();
    this._history = [];
    this._prevState = null;
    this._curState = new State(StateType.IDLE);
    this._attachListeners();
  }

  /**
   * Get the current state of the player.
   * @public
   * @returns {State} - The current state of the player.
   * @instance
   * @readonly
   * @memberof Classes.StateManager
   */
  get currentState(): State {
    return this._curState;
  }

  /**
   * Get the previous state of the player.
   * @public
   * @returns {State|null} - The previous state of the player (null if no state was before).
   * @instance
   * @readonly
   * @memberof Classes.StateManager
   */
  get previousState(): State | null {
    return this._prevState;
  }

  /**
   * Get the state history of the player.
   * @public
   * @returns {Array<State>} - The state history of the player.
   * @instance
   * @readonly
   * @memberof Classes.StateManager
   */
  get history(): Array<State> {
    return this._history;
  }

  /**
   * Destroys the state manager.
   * @public
   * @returns {void}
   * @instance
   * @memberof Classes.StateManager
   */
  destroy(): void {
    this._history = [];
    this._eventManager.destroy();
  }

  _attachListeners(): void {
    this._eventManager.listen(this._player, EventType.Html5.ERROR, this._doTransition.bind(this));
    this._eventManager.listen(this._player, EventType.Html5.ENDED, this._doTransition.bind(this));
    this._eventManager.listen(this._player, EventType.Html5.PLAY, this._doTransition.bind(this));
    this._eventManager.listen(this._player, EventType.Html5.LOAD_START, this._doTransition.bind(this));
    this._eventManager.listen(this._player, EventType.Html5.PLAYING, this._doTransition.bind(this));
    this._eventManager.listen(this._player, EventType.Html5.LOADED_METADATA, this._doTransition.bind(this));
    this._eventManager.listen(this._player, EventType.Html5.PAUSE, this._doTransition.bind(this));
    this._eventManager.listen(this._player, EventType.Html5.WAITING, this._doTransition.bind(this));
  }

  _doTransition(event: FakeEvent): void {
    this._logger.debug('Do transition request', event);
    let transition = this._transitions[this._curState.type];
    if (typeof transition[event.type] === 'function') {
      transition[event.type]();
    }
  }

  _updateState(type: string): void {
    if (this._curState.type !== type) {
      this._curState.duration = Date.now() / 1000;
      this._history.push(this._curState);
      this._prevState = this._curState;
      this._curState = new State(type);
      this._logger.debug(`Switch player state: from ${this._prevState.type} to ${this._curState.type}`)
    }
  }

  _dispatchEvent(): void {
    let event = new FakeEvent(EventType.Player.PLAYER_STATE_CHANGED, {
      'oldState': this._prevState,
      'newState': this._curState
    });
    this._player.dispatchEvent(event);
  }

}
