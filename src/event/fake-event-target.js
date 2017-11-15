//@flow
import FakeEvent from './fake-event'
import {MultiMap} from '../utils/index'

/**
 * A work-alike for EventTarget.  Only DOM elements may be true EventTargets,
 * but this can be used as a base class to provide event dispatch to non-DOM
 * classes.  Only FakeEvents should be dispatched.
 * @classdesc
 */
class FakeEventTarget {
  /**
   * The target of all dispatched events.  Defaults to |this|.
   * @type {EventTarget}
   */
  dispatchTarget: FakeEventTarget;
  /**
   * @private {!MultiMap.<FakeEventTarget.ListenerType>}
   */
  _listeners: MultiMap<ListenerType>;

  /**
   * @constructor
   */
  constructor() {
    this._listeners = new MultiMap();
    this.dispatchTarget = this;
  }

  /**
   * Add an event listener to this object.
   *
   * @param {string} type The event type to listen for.
   * @param {FakeEventTarget.ListenerType} listener The callback or
   *   listener object to invoke.
   * @param {boolean=} opt_capturing Ignored.  FakeEventTargets do not have
   *   parents, so events neither capture nor bubble.
   * @override
   */
  addEventListener(type: string, listener: ListenerType) {
    this._listeners.push(type, listener);
  }

  /**
   * Remove an event listener from this object.
   * @param {string} type The event type for which you wish to remove a listener.
   * @param {FakeEventTarget.ListenerType} listener The callback or
   *   listener object to remove.
   * @param {boolean=} opt_capturing Ignored.  FakeEventTargets do not have
   *   parents, so events neither capture nor bubble.
   * @override
   */
  removeEventListener(type: string, listener: ListenerType) {
    this._listeners.remove(type, listener);
  }

  /**
   * Dispatch an event from this object.
   *
   * @param {!Event} event The event to be dispatched from this object.
   * @return {boolean} True if the default action was prevented.
   * @override
   * @export
   */
  dispatchEvent(event: FakeEvent) {
    // In many browsers, it is complex to overwrite properties of actual Events.
    // Here we expect only to dispatch FakeEvents, which are simpler.
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

export default FakeEventTarget;
