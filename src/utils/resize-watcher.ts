import { FakeEvent } from '../event/fake-event';
import { FakeEventTarget } from '../event/fake-event-target';
import {CustomEventType} from '../event/event-type';

/**
 * A Factory class to create a resize observer for the player.
 */
class ResizeWatcher extends FakeEventTarget {
  private _observer?: ResizeObserver | IFrameObserver;
  private _el?: HTMLElement;

  constructor() {
    super();
  }

  /**
   * Removes resize listeners.
   * @returns {void}
   */
  public destroy(): void {
    if (this._observer) {
      this._observer.disconnect();
    }
    this._observer = undefined;
    this._el = undefined;
  }

  /**
   * Start listening to a resize of the element.
   * @param {HTMLElement} el - the element to listen to.
   * @returns {void}
   */
  public init(el: HTMLElement): void {
    if (this._observer) return
    this._el = el;
    ResizeObserver ? this._createNativeObserver() : this._createIframeObserver();
    if (this._el instanceof HTMLElement && this._observer) {
      (this._observer as ResizeObserver | IFrameObserver).observe(this._el);
    }
  }

  private _createNativeObserver(): void {
    this._observer = new ResizeObserver(entries => {
      entries.forEach(() => {
        this._triggerResize();
      });
    });
  }

  private _createIframeObserver(): void {
    this._observer = new IFrameObserver(this._triggerResize.bind(this));
  }

  private _triggerResize(): void {
    this.dispatchEvent(new FakeEvent(CustomEventType.RESIZE));
  }
}

const IFRAME_CLASS_NAME: string = 'playkit-size-iframe';

/**
 * This class mimics the API of the ResizeObserver API (currently available only in Chrome).
 * Creates an empty iFrame next to the player container, which gets the dimensions of it's parent and listens to
 * the iframes resize event.
 * @param {Function} callback - the function to be called when a resize event is detected.
 */
class IFrameObserver {
  private _observersStore: {[id: number]: HTMLIFrameElement} = {};
  private _onChangeCallback: () => void;

  constructor(callback: () => void) {
    this._onChangeCallback = callback;
  }

  /**
   * start detecting resize event
   * @param {HTMLElement} el - The element that is going to be resized.
   * @returns {void}
   */
  public observe(el: HTMLElement): void {
    const iframe = this._createIframe();
    const playerId = el.getAttribute('id');
    this._observersStore[playerId!] = iframe;
    el.appendChild(iframe);
    // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
    // @ts-ignore
    iframe.contentWindow.onresize = (): void => this._onChangeCallback();
  }

  /**
   * remove all resize listeners
   * @returns {void}
   */
  public disconnect(): void {
    for (const target in this._observersStore) {
      const el = document.getElementById(target);
      const iframe = this._observersStore[target];
      iframe.onresize = null;
      if (el) {
        el.removeChild(iframe);
        // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete this._observersStore[el.getAttribute('id')];
      }
    }
  }

  private _createIframe(): HTMLIFrameElement {
    const iframe = document.createElement('iframe');
    iframe.className = IFRAME_CLASS_NAME;
    return iframe;
  }
}

export {ResizeWatcher};
