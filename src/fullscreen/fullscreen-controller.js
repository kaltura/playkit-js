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
const IN_BROWSER_FULLSCREEN_FOR_IOS: string = 'playkit-in-browser-fullscreen-mode';

/**
 * @class FullscreenController
 * @param {Player} player - The player.
 */
class FullscreenController {
  _player: Player;
  _inBrowserFullscreenConfig: boolean;
  _isInBrowserFullscreen: boolean;

  /**
   * after component mounted, set up event listeners to window fullscreen state change
   * @param {Player} player - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  constructor(player: Player): void {
    this._player = player;
    this._inBrowserFullscreenConfig = this._player.config.playback.inBrowserFullscreen;
    //flag to cover the option that inBrowserFullscreen selected and we should know if it's full screen
    this._isInBrowserFullscreen = false;
    this.registerFullScreenEvents();
  }

  /**
   * if native fullscreen mode
   * @memberof FullScreenController
   * @returns {boolean} - the current fullscreen state of the document
   */
  _isNativeFullscreen(): boolean {
    // $FlowFixMe
    return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
  }

  /**
   * if fullscreen mode
   * @memberof FullScreenController
   * @returns {boolean} - the current fullscreen state of the document
   */
  isFullscreen(): boolean {
    return (
      this._isNativeFullscreen() ||
      //indicator for manually full screen in ios - with css flag
      this._isInBrowserFullscreen
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
    if (!this.isFullscreen()) {
      const fullScreenElement = element ? element : this._player.getView();
      if (this._player.env.os.name === 'iOS') {
        if (this._inBrowserFullscreenConfig) {
          this._enterInBrowserFullscreen(fullScreenElement);
        } else {
          const videoElement: ?HTMLVideoElement = this._player.getVideoElement();
          if (videoElement && typeof videoElement.webkitEnterFullScreen === 'function') {
            videoElement.webkitEnterFullScreen();
          }
        }
      } else {
        this._requestFullscreen(fullScreenElement);
      }
    }
  }

  /**
   * exit fullscreen cross platform function
   *
   * @memberof FullScreenController
   * @returns {void}
   */
  exitFullscreen(): void {
    if (this.isFullscreen()) {
      if (this._player.env.os.name === 'iOS') {
        // player will be in full screen with this flag or otherwise will be natively full screen
        if (this._inBrowserFullscreenConfig) {
          this._exitInBrowserFullscreen();
        } else {
          const videoElement: ?HTMLVideoElement = this._player.getVideoElement();
          if (videoElement && typeof videoElement.webkitExitFullscreen === 'function') {
            videoElement.webkitExitFullscreen();
          }
        }
      } else {
        this._requestExitFullscreen();
      }
    }
  }

  /**
   * request fullscreen function to all browsers
   *
   * @param {HTMLElement} fullScreenElement - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  _requestFullscreen(fullScreenElement: HTMLElement) {
    if (this._player.isInPictureInPicture()) {
      this._player.exitPictureInPicture();
    }
    if (typeof fullScreenElement.requestFullscreen === 'function') {
      fullScreenElement.requestFullscreen();
    } else if (typeof fullScreenElement.mozRequestFullScreen === 'function') {
      fullScreenElement.mozRequestFullScreen();
    } else if (typeof fullScreenElement.webkitRequestFullScreen === 'function') {
      fullScreenElement.webkitRequestFullScreen();
    } else if (typeof fullScreenElement.msRequestFullscreen === 'function') {
      fullScreenElement.msRequestFullscreen();
    }
  }

  /**
   * request exit from fullscreen function for all browsers
   *
   * @memberof FullScreenController
   * @returns {void}
   */
  _requestExitFullscreen(): void {
    if (typeof document.exitFullscreen === 'function') {
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
   * enter from ios manually method enter to fullscreen with css
   * @memberof FullScreenController
   * @param {HTMLElement} fullScreenElement - element to enter fullscreen
   * @returns {void}
   */
  _enterInBrowserFullscreen(fullScreenElement: HTMLElement): void {
    // add class for fullscreen
    Utils.Dom.addClassName(fullScreenElement, IN_BROWSER_FULLSCREEN_FOR_IOS);
    this._isInBrowserFullscreen = true;
    this._fullscreenEnterHandler();
    this._player.dispatchEvent(new FakeEvent(this._player.Event.RESIZE));
  }

  /**
   * exit from ios manually method enter to fullscreen with css
   * @memberof FullScreenController
   * @returns {void}
   */
  _exitInBrowserFullscreen(): void {
    //get the element with relevant css, otherwise keep the flow of exit manually
    const fullScreenElement = Utils.Dom.getElementBySelector('.' + IN_BROWSER_FULLSCREEN_FOR_IOS);
    if (fullScreenElement) {
      Utils.Dom.removeClassName(fullScreenElement, IN_BROWSER_FULLSCREEN_FOR_IOS);
    }
    this._isInBrowserFullscreen = false;
    this._fullscreenExitHandler();
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
    if (this.isFullscreen()) {
      this._player.dispatchEvent(new FakeEvent(this._player.Event.ENTER_FULLSCREEN));
    }
  }

  /**
   * fullscreen exit handler function.
   * @memberof FullScreenController
   * @returns {void}
   */
  _fullscreenExitHandler(): void {
    if (!this.isFullscreen()) {
      this._player.dispatchEvent(new FakeEvent(this._player.Event.EXIT_FULLSCREEN));
    }
  }
}

export {FullscreenController};
