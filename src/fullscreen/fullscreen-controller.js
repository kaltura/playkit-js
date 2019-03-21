//@flow
import EventManager from '../event/event-manager';
import Player from '../player';

/**
 * @class FullScreenController
 * @param {Player} player - The player.
 */
class FullScreenController {
  _player: Player;

  /**
   * after component mounted, set up event listeners to window fullscreen state change
   * @param {Player} player - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  constructor(player: Player): void {
    this._player = player;
  }

  /**
   * @returns {boolean} - the current fullscreen state of the document
   */
  static isFullscreen(): boolean {
    return (
      (typeof document.fullscreenElement !== 'undefined' && Boolean(document.fullscreenElement)) ||
      (typeof document.webkitFullscreenElement !== 'undefined' && Boolean(document.webkitFullscreenElement)) ||
      (typeof document.mozFullScreenElement !== 'undefined' && Boolean(document.mozFullScreenElement)) ||
      (typeof document.msFullscreenElement !== 'undefined' && Boolean(document.msFullscreenElement))
    );
  }

  /**
   * if mobile detected, get the video element and request fullscreen.
   * otherwise, request fullscreen to the parent player view than includes the GUI as well
   * @param {HTMLElement} element - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  enterFullscreen(element: HTMLElement): void {
    let fullScreenElement = typeof element !== 'undefined' ? element : this._player.getView();
    if (this._player.env.os.name === 'iOS') {
      if (FullScreenController.isFullscreen()) {
        this._enterInBrowserFullscreen();
      } else {
        this._player.getVideoElement().webkitEnterFullScreen();
      }
    } else {
      this._requestFullscreen(fullScreenElement);
    }
  }

  /**
   * exit fullscreen cross platform function
   *
   * @memberof FullScreenController
   * @returns {void}
   */
  exitFullscreen(): void {
    if (this._player.env.os.name === 'iOS') {
      if (FullScreenController.isFullscreen()) {
        this._exitInBrowserFullscreen();
      } else {
        this._player.getVideoElement().webkitExitFullScreen();
      }
    } else if (typeof document.exitFullscreen === 'function') {
      document.exitFullscreen();
    } else if (typeof document.webkitExitFullscreen === 'function') {
      document.webkitExitFullscreen();
    } else if (typeof document.mozCancelFullScreen === 'function') {
      document.mozCancelFullScreen();
    } else if (typeof document.msExitFullscreen === 'function') {
      document.msExitFullscreen();
    }
  }

  /**
   * request fullscreen function to all browsers
   *
   * @param {HTMLElement} element - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {boolean} - boolean success indicator to enter fullscreen or not
   */
  _requestFullscreen(element: Object): boolean {
    let fullScreenElement = typeof element !== 'undefined' ? element : this._player.getView();
    if (this._player.isInPictureInPicture()) {
      this._player.exitPictureInPicture();
    }
    if (typeof fullScreenElement.requestFullscreen === 'function') {
      fullScreenElement.requestFullscreen();
      return true;
    } else if (typeof fullScreenElement.mozRequestFullScreen === 'function') {
      fullScreenElement.mozRequestFullScreen();
      return true;
    } else if (typeof fullScreenElement.webkitRequestFullScreen === 'function') {
      fullScreenElement.webkitRequestFullScreen();
      return true;
    } else if (typeof fullScreenElement.msRequestFullscreen === 'function') {
      fullScreenElement.msRequestFullscreen();
      return true;
    } else {
      return false;
    }
  }

  /**
   * after component mounted, set up event listeners to window fullscreen state change
   * @param {function} EventHandler - callback function to handle event response
   * @memberof FullScreenController
   * @returns {void}
   */
  registerFullScreenEvents(EventHandler: Function): void {
    const eventManager = new EventManager();
    eventManager.listen(document, 'webkitfullscreenchange', () => this._fullscreenChangeHandler(EventHandler));
    eventManager.listen(document, 'mozfullscreenchange', () => this._fullscreenChangeHandler(EventHandler));
    eventManager.listen(document, 'fullscreenchange', () => this._fullscreenChangeHandler(EventHandler));
    eventManager.listen(document, 'MSFullscreenChange', () => this._fullscreenChangeHandler(EventHandler));
    eventManager.listen(this._player, this._player.Event.REQUESTED_ENTER_FULLSCREEN, () => this.enterFullscreen(EventHandler));
    eventManager.listen(this._player, this._player.Event.REQUESTED_EXIT_FULLSCREEN, () => this.exitFullscreen(EventHandler));
    this._handleIosFullscreen(EventHandler, eventManager);
  }

  /**
   * Handle iOS full screen changes
   * @param {function} EventHandler - callback function to handle event response
   * @param {EventManager} eventManager - event manager
   * @memberof FullScreenController
   * @returns {void}
   */
  _handleIosFullscreen(EventHandler: Function, eventManager: EventManager): void {
    if (this._player.env.os.name === 'iOS') {
      /**
       * Attach listeners to ios full screen change.
       * @param {function} EventHandler - callback function to handle event response
       * @returns {void}
       */
      const attachIosFullscreenListeners = (EventHandler: Function) => {
        eventManager.listen(this._player.getVideoElement(), 'webkitbeginfullscreen', () => this._fullscreenEnterHandler(EventHandler));
        eventManager.listen(this._player.getVideoElement(), 'webkitendfullscreen', () => this._fullscreenExitHandler(EventHandler));
      };
      if (this._player.getVideoElement()) {
        attachIosFullscreenListeners(EventHandler);
      } else {
        eventManager.listenOnce(this._player, this._player.Event.SOURCE_SELECTED, () => attachIosFullscreenListeners(EventHandler));
      }
    }
  }

  /**
   * fullscreen change handler function.
   * @param {function} EventHandler - callback function to handle event response
   * @memberof FullScreenController
   * @returns {void}
   */
  _fullscreenChangeHandler(EventHandler: Function): void {
    FullScreenController.isFullscreen() ? this._fullscreenEnterHandler(EventHandler) : this._fullscreenExitHandler(EventHandler);
  }

  /**
   * fullscreen enter handler function.
   * @param {function} EventHandler - callback function to handle event response
   * @memberof FullScreenController
   * @returns {void}
   */
  _fullscreenEnterHandler(EventHandler: Function): void {
    this._player.notifyEnterFullscreen();
    EventHandler();
  }

  /**
   * fullscreen exit handler function.
   * @param {function} EventHandler - callback function to handle event response
   * @memberof FullScreenController
   * @returns {void}
   */
  _fullscreenExitHandler(EventHandler: Function): void {
    this._player.notifyExitFullscreen();
    EventHandler();
  }

  /**
   * enter in browser fullscreen mode
   *
   * @memberof FullScreenController
   * @returns {void}
   */
  _enterInBrowserFullscreen(): void {
    this._player.notifyEnterFullscreen();
    window.dispatchEvent(new Event('resize'));
  }

  /**
   * exit in browser fullscreen mode
   *
   * @memberof FullScreenController
   * @returns {void}
   */
  _exitInBrowserFullscreen(): void {
    this._player.notifyExitFullscreen();
    window.dispatchEvent(new Event('resize'));
  }
}

export {FullScreenController};
