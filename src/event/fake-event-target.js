//@flow
import FakeEvent from './fake-event'
import MultiMap from '../utils/multi-map'

/**
 * These are the listener types defined in the closure extern for EventTarget.
 * @typedef {EventListener|function(!Event):(boolean|undefined)}
 * @memberof PlayKitJS.FakeEventTarget
 */
declare function ListenerType(event: FakeEvent): (boolean | void);

/**
 * A work-alike for EventTarget. Only DOM elements may be true EventTargets,
 * but this can be used as a base class to provide event dispatch to non-DOM
 * classes.  Only FakeEvents should be dispatched.
 * @namespace FakeEventTarget
 * @memberof PlayKitJS
 * @class
 */
export default class FakeEventTarget {
  _listeners: MultiMap<ListenerType>;
  /**
   * The target of all dispatched events.  Defaults to |this|.
   * @type {EventTarget}
   * @memberof PlayKitJS.FakeEventTarget
   * @public
   * @instance
   */
  dispatchTarget: FakeEventTarget;

  constructor() {
    this._listeners = new MultiMap();
    this.dispatchTarget = this;
  }

  /**
   * Add an event listener to this object.
   * @param {string} type - The event type to listen for.
   * @param {FakeEventTarget.ListenerType} listener - The callback or listener object to invoke.
   * @override
   * @memberof PlayKitJS.FakeEventTarget
   * @public
   * @instance
   */
  addEventListener(type: string, listener: ListenerType) {
    this._listeners.push(type, listener);
  }

  /**
   * Remove an event listener from this object.
   * @param {string} type - The event type for which you wish to remove a listener.
   * @param {FakeEventTarget.ListenerType} listener - The callback or listener object to remove.
   * @override
   * @memberof PlayKitJS.FakeEventTarget
   * @public
   * @instance
   */
  removeEventListener(type: string, listener: ListenerType) {
    this._listeners.remove(type, listener);
  }

  /**
   * Dispatch an event from this object.
   * @param {!Event} event - The event to be dispatched from this object.
   * @return {boolean} - True if the default action was prevented.
   * @override
   * @memberof PlayKitJS.FakeEventTarget
   * @public
   * @instance
   */
  dispatchEvent(event: FakeEvent) {
    let list = this._listeners.get(event.type) || [];
    for (let i = 0; i < list.length; ++i) {
      // Do this every time, since events can be re-dispatched from handlers.
      event.target = this.dispatchTarget;
      event.currentTarget = this.dispatchTarget;
      let listener = list[i];
      try {
        if (listener.handleEvent) {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (exception) {
        // Exceptions during event handlers should not affect the caller,
        // but should appear on the console as uncaught, according to MDN:
        // http://goo.gl/N6Ff27
        // TODO: add log
      }
      if (event.stopped) {
        break;
      }
    }
    return event.defaultPrevented;
  }
}
