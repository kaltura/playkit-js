//@flow
import EventType from './event-types'

/**
 * Create an Event work-alike object based on the dictionary.
 * The event should contain all of the same properties from the dict.
 * @classdesc
 */
class FakeEvent {
  static Type: { [event: string]: string } = EventType;
  /** @const {boolean} */
  bubbles: boolean;
  /** @const {boolean} */
  cancelable: boolean;
  /** @const {boolean} */
  defaultPrevented: boolean;
  /**
   * According to MDN, Chrome uses high-res timers instead of epoch time.
   * Follow suit so that timeStamps on FakeEvents use the same base as
   * on native Events.
   * @const {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp
   */
  timeStamp: number | Date;
  /** @const {string} */
  type: string;
  /** @const {boolean} */
  isTrusted: boolean;
  /** @type {EventTarget} */
  currentTarget: any;
  /** @type {EventTarget} */
  target: any;
  /**
   * Non-standard property read by FakeEventTarget to stop processing listeners.
   * @type {boolean}
   */
  stopped: boolean;
  /**
   * The event payload;
   * @type {any}
   */
  payload: any;

  /**
   * @constructor
   * @param{string} type - The event type.
   * @param {any} payload - The event payload.
   */
  constructor(type: string, payload?: any) {
    this.bubbles = false;
    this.cancelable = false;
    this.defaultPrevented = false;
    this.timeStamp = window.performance ? window.performance.now() : Date.now();
    this.type = type;
    this.isTrusted = false;
    this.currentTarget = null;
    this.target = null;
    this.stopped = false;
    if (payload) {
      this.payload = payload;
    }
  }

  /**
   * Does nothing, since FakeEvents have no default.  Provided for compatibility
   * with native Events.
   * @override
   */
  preventDefault() {
  }

  /**
   * Stops processing event listeners for this event.  Provided for compatibility
   * with native Events.
   * @override
   */
  stopImmediatePropagation() {
    this.stopped = true;
  }

  /**
   * Does nothing, since FakeEvents do not bubble.  Provided for compatibility
   * with native Events.
   * @override
   */
  stopPropagation() {
  }
}

export default FakeEvent;
