//@flow
import Player from '../player'
import EventManager from '../event/event-manager'
import State from './state'
import PlayerStates from './states'
import PlayerEvents from '../event/events'
import FakeEvent from '../event/fake-event'
import LoggerFactory from '../utils/logger'

export default class StateManager {
  _logger: any;
  _player: Player;
  _eventManager: EventManager;
  _curState: State;
  _prevState: State | null;
  _history: Array<State>;

  static EventName: string = "playerStateChanged";

  constructor(player: Player) {
    this._player = player;
    this._logger = LoggerFactory.getLogger("StateManager");
    this._eventManager = new EventManager();
    this._history = [];
    this._prevState = null;
    this._curState = new State(PlayerStates.IDLE);
    this._attachListeners();
  }

  _attachListeners(): void {
    //TODO: load(), stop(), seek()

    // Transition: {playing/loading} --> {idle}
    this._eventManager.listen(this._player, PlayerEvents.ERROR, () => {
      if (this._curState.type === PlayerStates.PLAYING || this._curState.type === PlayerStates.LOADING) {
        this._updateState(PlayerStates.IDLE);
      }
    });

    // Transition: {playing} --> {idle}
    this._eventManager.listen(this._player, PlayerEvents.ENDED, () => {
      if (this._curState.type === PlayerStates.PLAYING) {
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

    // Transition: {any} --> {playing}
    this._eventManager.listen(this._player, PlayerEvents.PLAY, () => {
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

  _updateState(type: string): void {
    if (this._curState.type !== type) {
      this._curState.duration = Date.now() / 1000;
      this._history.push(this._curState);
      this._prevState = this._curState;
      this._curState = new State(type);
      this._dispatchEvent();
    }
  }

  _dispatchEvent(): void {
    let event = new FakeEvent(StateManager.EventName, {
      'oldState': this._prevState,
      'newState': this._curState
    });
    this._player.dispatchEvent(event);
  }

  get currentState(): State {
    return this._curState;
  }

  get previousState(): State | null {
    return this._prevState;
  }

  get history(): Array<State> {
    return this._history;
  }
}
