//@flow

/**
 * Create an Event work-alike object based on the dictionary.
 * The event should contain all of the same properties from the dict.
 * @namespace FakeEvent
 * @memberof PlayKitJS
 * @class
 */
export default class FakeEvent {
  /**
   * @const {boolean}
   * @public
   * @instance
   * @memberof PlayKitJS.FakeEvent
   **/
  bubbles: boolean;
  /**
   * @const {boolean}
   * @public
   * @instance
   * @memberof PlayKitJS.FakeEvent
   **/
  cancelable: boolean;
  /**
   * @const {boolean}
   * @public
   * @instance
   * @memberof PlayKitJS.FakeEvent
   **/
  defaultPrevented: boolean;
  /**
   * @const {number}
   * @public
   * @instance
   * @memberof PlayKitJS.FakeEvent
   **/
  timeStamp: number | Date;
  /**
   * @const {string}
   * @public
   * @instance
   * @memberof PlayKitJS.FakeEvent
   **/
  type: string;
  /**
   * @const {boolean}
   * @public
   * @instance
   * @memberof PlayKitJS.FakeEvent
   **/
  isTrusted: boolean;
  /**
   * @type {EventTarget}
   * @public
   * @instance
   * @memberof PlayKitJS.FakeEvent
   **/
  currentTarget: any;
  /**
   * @type {EventTarget}
   * @public
   * @instance
   * @memberof PlayKitJS.FakeEvent
   **/
  target: any;
  /**
   * Non-standard property read by FakeEventTarget to stop processing listeners.
   * @type {boolean}
   * @public
   * @instance
   * @memberof PlayKitJS.FakeEvent
   **/
  stopped: boolean;
  /**
   * @type {any}
   * @public
   * @instance
   * @memberof PlayKitJS.FakeEvent
   **/
  payload: any;

  constructor(type: string, payload: any) {
    this.bubbles = false;
    this.cancelable = false;
    this.defaultPrevented = false;
    this.timeStamp = window.performance ? window.performance.now() : Date.now();
    this.type = type;
    this.isTrusted = false;
    this.currentTarget = null;
    this.target = null;
    this.stopped = false;
    this.payload = payload;
  }

  /**
   * Does nothing, since FakeEvents have no default.  Provided for compatibility
   * with native Events.
   * @override
   * @public
   * @instance
   * @memberof PlayKitJS.FakeEvent
   **/
  preventDefault() {
  }

  /**
   * Stops processing event listeners for this event.  Provided for compatibility
   * with native Events.
   * @override
   * @public
   * @instance
   * @memberof PlayKitJS.FakeEvent
   **/
  stopImmediatePropagation() {
    this.stopped = true;
  }

  /**
   * Does nothing, since FakeEvents do not bubble.  Provided for compatibility
   * with native Events.
   * @override
   * @public
   * @instance
   * @memberof PlayKitJS.FakeEvent
   **/
  stopPropagation() {
  }
}


