//@flow
import FakeEvent from "./FakeEvent";
import MultiMap from "../util/MultiMap";


/**
 * A work-alike for EventTarget.  Only DOM elements may be true EventTargets,
 * but this can be used as a base class to provide event dispatch to non-DOM
 * classes.  Only FakeEvents should be dispatched.
 *
 * @struct
 * @constructor
 * @implements {EventTarget}
 * @export
 */
class FakeEventTarget {
  listeners_: MultiMap<ListenerType>;
  dispatchTarget: FakeEventTarget;

  constructor() {
    /**
     * @private {!MultiMap.<FakeEventTarget.ListenerType>}
     */
    this.listeners_ = new MultiMap();

    /**
     * The target of all dispatched events.  Defaults to |this|.
     * @type {EventTarget}
     */
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
   * @export
   */
  addEventListener(type: string, listener: ListenerType) {
    this.listeners_.push(type, listener);
  }


  /**
   * Remove an event listener from this object.
   *
   * @param {string} type The event type for which you wish to remove a listener.
   * @param {FakeEventTarget.ListenerType} listener The callback or
   *   listener object to remove.
   * @param {boolean=} opt_capturing Ignored.  FakeEventTargets do not have
   *   parents, so events neither capture nor bubble.
   * @override
   * @export
   */
  removeEventListener(type: string, listener: ListenerType) {
    this.listeners_.remove(type, listener);
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
    //goog.asserts.assert(event instanceof FakeEvent,
    //    'FakeEventTarget can only dispatch FakeEvents!');

    let list = this.listeners_.get(event.type) || [];

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
/**
 * These are the listener types defined in the closure extern for EventTarget.
 * @typedef {EventListener|function(!Event):(boolean|undefined)}
 */
// FakeEventTarge.ListenerType;
declare function ListenerType(event: FakeEvent): (boolean | void);

export default FakeEventTarget;
