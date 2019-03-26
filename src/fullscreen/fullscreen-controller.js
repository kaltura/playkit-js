//@flow
import EventManager from '../event/event-manager';
import Player from '../player';
import FakeEvent from '../event/fake-event';
import * as Utils from '../utils/util';

/**
 * The IOS fullscreen class name.
 * @type {string}
 * @const
 */
const IN_BROWSER_FULLSCREEN_FOR_IOS: string = 'in-browser-fullscreen-mode';

/**
 * @class FullScreenController
 * @param {Player} player - The player.
 */
class FullScreenController {
  _player: Player;
  _inBrowserFullscreenForIOS: boolean;
  _isFullscreenManually: boolean;

  /**
   * after component mounted, set up event listeners to window fullscreen state change
   * @param {Player} player - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  constructor(player: Player): void {
    this._player = player;
    this._inBrowserFullscreenForIOS = this._player.config.playback.inBrowserFullscreenForIOS;
    //flag to cover the option that inBrowserFullscreenForIOS selected and we should know if it's full screen
    this._isFullscreenManually = false;
    this.registerFullScreenEvents();
  }

  /**
   * if fullscreen mode
   * @memberof FullScreenController
   * @returns {boolean} - the current fullscreen state of the document
   */
  isFullscreen(): boolean {
    return (
      (typeof document.fullscreenElement !== 'undefined' && Boolean(document.fullscreenElement)) ||
      (typeof document.webkitFullscreenElement !== 'undefined' && Boolean(document.webkitFullscreenElement)) ||
      (typeof document.mozFullScreenElement !== 'undefined' && Boolean(document.mozFullScreenElement)) ||
      (typeof document.msFullscreenElement !== 'undefined' && Boolean(document.msFullscreenElement)) ||
      //indicator for manually full screen in ios - with css flag
      this._isFullscreenManually
    );
  }

  /**
   * if mobile detected, get the video element and request fullscreen.
   * otherwise, request fullscreen to the parent player view than includes the GUI as well
   * @param {?HTMLElement} element - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  enterFullscreen(element: ?HTMLElement): void {
    const fullScreenElement = element ? element : this._player.getView();
    if (this._player.env.os.name === 'iOS') {
      if (this._inBrowserFullscreenForIOS) {
        this._enterInBrowserFullscreenForIOS(fullScreenElement);
      } else {
        if (this._player.getVideoElement()) {
          if (typeof this._player.getVideoElement().webkitEnterFullScreen === 'function') {
            this._player.getVideoElement().webkitEnterFullScreen();
          }
        }
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
      // player will be in full screen with this flag or otherwise will be natively full screen
      if (this._inBrowserFullscreenForIOS) {
        this._exitInBrowserFullscreenForIOS();
      } else {
        if (this._player.getVideoElement()) {
          if (typeof this._player.getVideoElement().webkitExitFullscreen === 'function') {
            this._player.getVideoElement().webkitExitFullScreen();
          }
        }
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
   * @param {HTMLElement} fullScreenElement - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {boolean} - boolean success indicator to enter fullscreen or not
   */
  _requestFullscreen(fullScreenElement: HTMLElement): boolean {
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
   * enter from ios manually method enter to fullscreen with css
   * @memberof FullScreenController
   * @param {HTMLElement} fullScreenElement - element to enter fullscreen
   * @returns {void}
   */
  _enterInBrowserFullscreenForIOS(fullScreenElement: HTMLElement): void {
    // add class for fullscreen
    fullScreenElement.classList.add(IN_BROWSER_FULLSCREEN_FOR_IOS);
    this._isFullscreenManually = true;
    this._player.notifyEnterFullscreen();
    this._player.dispatchEvent(new FakeEvent(this._player.Event.RESIZE));
  }

  /**
   * exit from ios manually method enter to fullscreen with css
   * @memberof FullScreenController
   * @returns {void}
   */
  _exitInBrowserFullscreenForIOS(): void {
    //get the element with relevant css, otherwise keep the flow of exit manually
    const fullScreenElement = Utils.Dom.getElementBySelector('.' + IN_BROWSER_FULLSCREEN_FOR_IOS);
    if (fullScreenElement) {
      fullScreenElement.classList.remove(IN_BROWSER_FULLSCREEN_FOR_IOS);
    }
    this._isFullscreenManually = false;
    this._player.notifyExitFullscreen();
    this._player.dispatchEvent(new FakeEvent(this._player.Event.RESIZE));
  }

  /**
   * set up event listeners to window fullscreen state change
   * @memberof FullScreenController
   * @returns {void}
   */
  registerFullScreenEvents(): void {
    const eventManager = new EventManager();
    eventManager.listen(document, 'webkitfullscreenchange', () => this._fullscreenChangeHandler());
    eventManager.listen(document, 'mozfullscreenchange', () => this._fullscreenChangeHandler());
    eventManager.listen(document, 'fullscreenchange', () => this._fullscreenChangeHandler());
    eventManager.listen(document, 'MSFullscreenChange', () => this._fullscreenChangeHandler());
    this._handleIosFullscreen(eventManager);
  }

  /**
   * Handle iOS full screen changes
   * @param {EventManager} eventManager - event manager
   * @memberof FullScreenController
   * @returns {void}
   */
  _handleIosFullscreen(eventManager: EventManager): void {
    if (this._player.env.os.name === 'iOS') {
      /**
       * Attach listeners to ios full screen change.
       * @returns {void}
       */
      const attachIosFullscreenListeners = () => {
        eventManager.listen(this._player.getVideoElement(), 'webkitbeginfullscreen', () => this._fullscreenEnterHandler());
        eventManager.listen(this._player.getVideoElement(), 'webkitendfullscreen', () => this._fullscreenExitHandler());
      };
      if (this._player.getVideoElement()) {
        attachIosFullscreenListeners();
      } else {
        eventManager.listenOnce(this._player, this._player.Event.SOURCE_SELECTED, () => attachIosFullscreenListeners());
      }
    }
  }

  /**
   * fullscreen change handler function.
   * @memberof FullScreenController
   * @returns {void}
   */
  _fullscreenChangeHandler(): void {
    //fire player event for current state, if player is in fullscreen fire player fullscreen event otherwise exit
    this.isFullscreen() ? this._fullscreenEnterHandler() : this._fullscreenExitHandler();
  }

  /**
   * fullscreen enter handler function.
   * @memberof FullScreenController
   * @returns {void}
   */
  _fullscreenEnterHandler(): void {
    this._player.notifyEnterFullscreen();
  }

  /**
   * fullscreen exit handler function.
   * @memberof FullScreenController
   * @returns {void}
   */
  _fullscreenExitHandler(): void {
    this._player.notifyExitFullscreen();
  }
}

export {FullScreenController};
