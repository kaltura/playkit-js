//@flow
import Player from '../player'
import EventManager from '../event/event-manager'
import State from './state'
import PlayerStates from './states'
import PlayerEvents from '../event/events'
import FakeEvent from '../event/fake-event'
import LoggerFactory from '../utils/logger'

/**
 * This class responsible to manage all the state machine of the player.
 * @classdesc
 */
export default class StateManager {
  /**
   * The logger of the class.
   * @member
   * @type {Logger}
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
   * The event name which the player dispatch from this class.
   * @static
   * @public
   * @type {string}
   */
  static EventName: string = "playerStateChanged";

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
    // Transition: {playing/loading} --> {idle}
    this._eventManager.listen(this._player, PlayerEvents.ERROR, () => {
      if (this._curState.type === PlayerStates.PLAYING || this._curState.type === PlayerStates.LOADING) {
        this._updateState(PlayerStates.IDLE);
      }
    });

    // Transition: {playing} --> {idle}
    this._eventManager.listen(this._player, PlayerEvents.ENDED, () => {
      if (this._curState.type === PlayerStates.PLAYING || this._curState.type === PlayerStates.PAUSED) {
        this._updateState(PlayerStates.IDLE);
      }
    });

    // Transition: {idle} --> {loading}
    this._eventManager.listen(this._player, PlayerEvents.LOAD_START, () => {
      this._updateState(PlayerStates.LOADING);
    });

    // Transition: {any} --> {playing}
    this._eventManager.listen(this._player, PlayerEvents.PLAYING, () => {
      this._updateState(PlayerStates.PLAYING);
    });

    // Transition: {loading} --> {playing/paused}
    this._eventManager.listen(this._player, PlayerEvents.LOADED_METADATA, () => {
      if (this._player.config.autoPlay) {
        this._updateState(PlayerStates.PLAYING);
      } else {
        this._updateState(PlayerStates.PAUSED);
      }
    });

    // Transition: {any} --> {paused}
    this._eventManager.listen(this._player, PlayerEvents.PAUSE, () => {
      this._updateState(PlayerStates.PAUSED);
    });

    // Transition: {playing} --> {buffering}
    this._eventManager.listen(this._player, PlayerEvents.WAITING, () => {
      if (this._curState.type === PlayerStates.PLAYING) {
        this._updateState(PlayerStates.BUFFERING);
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
      this._dispatchEvent();
    }
  }

  /**
   * Fires the playerStateChanged event after state has been changed.
   * @private
   */
  _dispatchEvent(): void {
    let event = new FakeEvent(StateManager.EventName, {'oldState': this._prevState, 'newState': this._curState});
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
