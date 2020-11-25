//@flow
import EventManager from '../event/event-manager';
import Player from '../player';
import FakeEvent from '../event/fake-event';

class TabVisibilityHandler {
  _eventManager: EventManager;
  _player: Player;
  _isTabActive: boolean;

  constructor(player: Player): void {
    this._player = player;
    this._eventManager = new EventManager();
    this._init();
  }

  _init(): void {
    let hiddenAttr: string;
    let visibilityChangeEventName: string;
    if (typeof document.hidden !== 'undefined') {
      // Opera 12.10 and Firefox 18 and later support
      hiddenAttr = 'hidden';
      visibilityChangeEventName = 'visibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
      hiddenAttr = 'msHidden';
      visibilityChangeEventName = 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
      hiddenAttr = 'webkitHidden';
      visibilityChangeEventName = 'webkitvisibilitychange';
    }

    if (hiddenAttr && visibilityChangeEventName) {
      this._eventManager.listen(document, visibilityChangeEventName, () =>
        this._player.dispatchEvent(new FakeEvent(this._player.Event.TAB_VISIBILITY_CHANGE, {active: !document[hiddenAttr]}))
      );
      this._isTabActive = !document[hiddenAttr];
    }
  }

  get isTabActive(): boolean {
    return this._isTabActive;
  }
  /**
   * Destroys the TabVisibilityHandler.
   * @returns {void}
   * @public
   */
  destroy(): void {
    this._eventManager.destroy();
  }
}

export {TabVisibilityHandler};
