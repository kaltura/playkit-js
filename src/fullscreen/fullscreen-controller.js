//@flow
import EventManager from '../event/event-manager';
import Player from '../player';
import FakeEvent from '../event/fake-event';
import * as Utils from '../utils/util';
import {ScreenOrientationType} from '../screen-orientation-type';

/**
 * The IOS fullscreen class name.
 * @type {string}
 * @const
 */
const IN_BROWSER_FULLSCREEN: string = 'playkit-in-browser-fullscreen-mode';

const EXIT_PIP_TIMEOUT: number = 1000;

/**
 * @class FullscreenController
 * @param {Player} player - The player.
 */
class FullscreenController {
  _player: Player;
  // Flag to indicate that player is in fullscreen(when different element on fullscreen - api return correct state).
  _isInFullscreen: boolean = false;
  _isInBrowserFullscreen: boolean;
  _isScreenLocked: boolean = false;
  _isScreenOrientationSupport: boolean =
    // $FlowFixMe
    !!screen && !!screen.orientation && typeof screen.orientation.unlock === 'function' && typeof screen.orientation.lock === 'function';
  _eventManager: EventManager;
  // Flag to overcome browsers which supports more than one fullscreenchange event
  _isFullscreenEventDispatched: boolean = false;

  /**
   * after component mounted, set up event listeners to window fullscreen state change
   * @param {Player} player - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  constructor(player: Player): void {
    this._player = player;
    //flag to cover the option that inBrowserFullscreen selected and we should know if it's full screen
    this._isInBrowserFullscreen = false;
    this._eventManager = new EventManager();
  }

  /**
   * if native fullscreen mode
   * @memberof FullScreenController
   * @returns {boolean} - the current fullscreen state of the document
   */
  _isNativeFullscreen(): boolean {
    //for ios mobile checking video element
    const videoElement: ?HTMLVideoElement = typeof this._player.getVideoElement === 'function' ? this._player.getVideoElement() : null;
    return !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement ||
      // $FlowFixMe for ios mobile
      (this._player.env.os.name === 'iOS' &&
        !!videoElement &&
        !!videoElement.webkitDisplayingFullscreen &&
        (!videoElement.webkitPresentationMode || videoElement.webkitPresentationMode === 'fullscreen'))
    );
  }

  /**
   * if fullscreen mode
   * @memberof FullScreenController
   * @returns {boolean} - the current fullscreen state of the document
   */
  isFullscreen(): boolean {
    return (
      (this._isNativeFullscreen() && this._isInFullscreen) ||
      //indicator for manually full screen in ios - with css flag
      this._isInBrowserFullscreen
    );
  }

  /**
   * if mobile detected, get the video element and request fullscreen.
   * otherwise, request fullscreen to the parent player view than includes the GUI as well
   * @param {?string} elementId - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  enterFullscreen(elementId: ?string): void {
    if (!this.isFullscreen()) {
      this.registerFullScreenEvents();
      let fullScreenElement = elementId && Utils.Dom.getElementById(elementId);
      const playbackConfig = this._player.config.playback;
      if (!fullScreenElement) {
        fullScreenElement = this._player.getView();
      }
      if (this._player.env.os.name === 'iOS') {
        if (playbackConfig.inBrowserFullscreen && playbackConfig.playsinline) {
          this._enterInBrowserFullscreen(fullScreenElement);
        } else {
          const videoElement: ?HTMLVideoElement = this._player.getVideoElement();
          if (videoElement && typeof videoElement.webkitEnterFullScreen === 'function') {
            if (this._player.isInPictureInPicture()) {
              // iOS < 13 (iPad) has an issue to enter to full screen from PiP
              setTimeout(() => videoElement.webkitEnterFullScreen(), EXIT_PIP_TIMEOUT);
              this._player.exitPictureInPicture();
            } else {
              videoElement.webkitEnterFullScreen();
            }
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
        if (this._isInBrowserFullscreen) {
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
   * get native fullscreen function response
   *
   * @param {HTMLElement} fullScreenElement - element to enter fullscreen
   * @memberof FullScreenController
   * @returns {void}
   */
  _nativeEnterFullScreen(fullScreenElement: HTMLElement) {
    if (typeof fullScreenElement.requestFullscreen === 'function') {
      return fullScreenElement.requestFullscreen();
    } else if (typeof fullScreenElement.mozRequestFullScreen === 'function') {
      return fullScreenElement.mozRequestFullScreen();
    } else if (typeof fullScreenElement.webkitRequestFullScreen === 'function') {
      return fullScreenElement.webkitRequestFullScreen();
    } else if (typeof fullScreenElement.msRequestFullscreen === 'function') {
      return fullScreenElement.msRequestFullscreen();
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
    Promise.resolve(this._nativeEnterFullScreen(fullScreenElement)).then(
      () => {
        this._isInFullscreen = true;
        const screenLockOrientionMode = Utils.Object.getPropertyPath(this._player, 'config.playback.screenLockOrientionMode');
        const validOrientation =
          screenLockOrientionMode !== ScreenOrientationType.NONE && Object.values(ScreenOrientationType).includes(screenLockOrientionMode);
        if (this._isScreenOrientationSupport && validOrientation) {
          screen.orientation
            // $FlowFixMe
            .lock(screenLockOrientionMode)
            .then(() => (this._isScreenLocked = true))
            .catch(() => (this._isScreenLocked = false));
        }
      },
      () => {}
    );
  }

  /**
   * get native fullscreen function response
   *
   * @memberof FullScreenController
   * @returns {void}
   */
  _nativeExitFullScreen() {
    if (typeof document.exitFullscreen === 'function') {
      return document.exitFullscreen();
    } else if (typeof document.webkitExitFullscreen === 'function') {
      return document.webkitExitFullscreen();
    } else if (typeof document.mozCancelFullScreen === 'function') {
      return document.mozCancelFullScreen();
    } else if (typeof document.msExitFullscreen === 'function') {
      return document.msExitFullscreen();
    }
  }

  /**
   * request exit from fullscreen function for all browsers
   *
   * @memberof FullScreenController
   * @returns {void}
   */
  _requestExitFullscreen(): void {
    Promise.resolve(this._nativeExitFullScreen()).then(
      () => {
        this._isInFullscreen = false;
        if (this._isScreenOrientationSupport && this._isScreenLocked) {
          // $FlowFixMe
          screen.orientation.unlock();
          this._isScreenLocked = false;
        }
      },
      () => {}
    );
  }

  /**
   * enter from ios manually method enter to fullscreen with css
   * @memberof FullScreenController
   * @param {HTMLElement} fullScreenElement - element to enter fullscreen
   * @returns {void}
   */
  _enterInBrowserFullscreen(fullScreenElement: HTMLElement): void {
    if (this._player.isInPictureInPicture()) {
      this._player.exitPictureInPicture();
    }
    // add class for fullscreen
    Utils.Dom.addClassName(fullScreenElement, IN_BROWSER_FULLSCREEN);
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
    const fullScreenElement = Utils.Dom.getElementBySelector('.' + IN_BROWSER_FULLSCREEN);
    if (fullScreenElement) {
      Utils.Dom.removeClassName(fullScreenElement, IN_BROWSER_FULLSCREEN);
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
    if (this._player.env.os.name === 'iOS') {
      this._handleIosFullscreen();
    } else {
      this._eventManager.listen(document, 'webkitfullscreenchange', () => this._fullscreenChangeHandler());
      this._eventManager.listen(document, 'mozfullscreenchange', () => this._fullscreenChangeHandler());
      this._eventManager.listen(document, 'fullscreenchange', () => this._fullscreenChangeHandler());
      this._eventManager.listen(document, 'MSFullscreenChange', () => this._fullscreenChangeHandler());
    }
  }

  /**
   * Handle iOS full screen changes
   * @memberof FullScreenController
   * @returns {void}
   */
  _handleIosFullscreen(): void {
    /**
     * Attach listeners to ios full screen change.
     * @returns {void}
     */
    const attachIosFullscreenListeners = () => {
      let vidEl = this._player.getVideoElement();
      if (vidEl) {
        this._eventManager.listen(vidEl, 'webkitbeginfullscreen', () => this._fullscreenEnterHandler());
        this._eventManager.listen(vidEl, 'webkitendfullscreen', () => this._fullscreenExitHandler());
      }
    };
    if (this._player.getVideoElement()) {
      attachIosFullscreenListeners();
    } else {
      this._eventManager.listenOnce(this._player, this._player.Event.SOURCE_SELECTED, () => attachIosFullscreenListeners());
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
    if (this.isFullscreen() && !this._isFullscreenEventDispatched) {
      this._isFullscreenEventDispatched = true;
      this._player.dispatchEvent(new FakeEvent(this._player.Event.ENTER_FULLSCREEN));
    }
  }

  /**
   * fullscreen exit handler function.
   * @memberof FullScreenController
   * @returns {void}
   */
  _fullscreenExitHandler(): void {
    if (!this.isFullscreen() && this._isFullscreenEventDispatched) {
      this._isFullscreenEventDispatched = false;
      this._eventManager.removeAll();
      this._player.dispatchEvent(new FakeEvent(this._player.Event.EXIT_FULLSCREEN));
    }
  }

  /**
   * Destroys the FullScreenController.
   * @returns {void}
   * @public
   */
  destroy(): void {
    this._eventManager.destroy();
  }
}

export {FullscreenController};
