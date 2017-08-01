//@flow

/**
 * Create an Event work-alike object based on the dictionary.
 * The event should contain all of the same properties from the dict.
 * @namespace FakeEvent
 * @memberof Classes
 * @class FakeEvent
 */
export default class FakeEvent {
  /**
   * @const {boolean}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/
  bubbles: boolean;
  /**
   * @const {boolean}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/
  cancelable: boolean;
  /**
   * @const {boolean}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/
  defaultPrevented: boolean;
  /**
   * @const {number}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/
  timeStamp: number | Date;
  /**
   * @const {string}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/
  type: string;
  /**
   * @const {boolean}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/
  isTrusted: boolean;
  /**
   * @type {EventTarget}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/
  currentTarget: any;
  /**
   * @type {EventTarget}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/
  target: any;
  /**
   * Non-standard property read by FakeEventTarget to stop processing listeners.
   * @type {boolean}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
   **/
  stopped: boolean;
  /**
   * @type {any}
   * @public
   * @instance
   * @memberof Classes.FakeEvent
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
   * @memberof Classes.FakeEvent
   **/
  preventDefault() {
  }

  /**
   * Stops processing event listeners for this event.  Provided for compatibility
   * with native Events.
   * @override
   * @public
   * @instance
   * @memberof Classes.FakeEvent
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
   * @memberof Classes.FakeEvent
   **/
  stopPropagation() {
  }
}


