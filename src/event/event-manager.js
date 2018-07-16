//@flow
import MultiMap from '../utils/multi-map'
import FakeEvent from './fake-event'

/**
 * Creates a new EventManager. An EventManager maintains a collection of "event
 * bindings" between event targets and event listeners.
 *
 * @struct
 * @constructor
 * @implements {IDestroyable}
 */
class EventManager {
  _bindingMap: MultiMap<Binding_> | null;

  constructor() {
    /**
     * Maps an event type to an array of event bindings.
     * @private {MultiMap.<!EventManager.Binding_>}
     */
    this._bindingMap = new MultiMap();
  }

  /**
   * Detaches all event listeners.
   * @override
   */
  destroy() {
    this.removeAll();
    this._bindingMap = null;
    return Promise.resolve();
  }

  /**
   * Attaches an event listener to an event target for only one time.
   * @param {EventTarget} target - The event target.
   * @param {string} type - The event type.
   * @param {EventManager.ListenerType} listener - The event listener.
   * @param {?Object} options - The event options.
   * @returns {void}
   */
  listenOnce(target: any, type: string, listener: ListenerType, options: ?Object): void {
    let oneListener = (event) => {
      this.unlisten(target, type, oneListener);
      listener.call(this, event)
    };
    this.listen(target, type, oneListener, options);
  }


  /**
   * Attaches an event listener to an event target.
   * @param {EventTarget} target The event target.
   * @param {string} type The event type.
   * @param {EventManager.ListenerType} listener The event listener.
   * @param {?Object} options The event options.
   * @returns {void}
   */
  listen(target: any, type: string, listener: ListenerType, options: ?Object): void {
    let binding = new Binding_(target, type, listener, options);
    if (this._bindingMap) {
      this._bindingMap.push(type, binding);
    }
  }


  /**
   * Detaches an event listener from an event target.
   * @param {EventTarget} target The event target.
   * @param {string} type The event type.
   * @param {EventManager.ListenerType} [listener] The event listener to detach. If no given, detaches all event listeners of the target and type.
   * @returns {void}
   */
  unlisten(target: any, type: string, listener: ?ListenerType): void {
    if (this._bindingMap) {
      let list = this._bindingMap.get(type);

      for (let i = 0; i < list.length; ++i) {
        let binding = list[i];

        if (binding.target === target && (binding.listener === listener || !listener)) {
          binding.unlisten();
          if (this._bindingMap) {
            this._bindingMap.remove(type, binding);
          }
        }
      }
    }
  }

  /**
   * Detaches all event listeners from all targets.
   * @returns {void}
   */
  removeAll(): void {
    if (this._bindingMap) {
      let listeners = this._bindingMap.getAll();

      for (let listener of listeners) {
        listener.unlisten();
      }
      if (this._bindingMap) {
        this._bindingMap.clear();
      }
    }
  }
}

/**
 * @typedef {function(!Event)}
 */
type ListenerType = (event: FakeEvent) => any;

/**
 * Creates a new Binding_ and attaches the event listener to the event target.
 * @param {EventTarget} target The event target.
 * @param {string} type The event type.
 * @param {EventManager.ListenerType} listener The event listener.
 * @constructor
 * @private
 */
class Binding_ {
  target: any;
  type: string;
  listener: ?ListenerType;
  options: ?Object;

  constructor(target, type, listener, options) {
    /** @type {EventTarget} */
    this.target = target;

    /** @type {string} */
    this.type = type;

    /** @type {?EventManager.ListenerType} */
    this.listener = listener;

    /** @type {?Object} */
    this.options = options;

    this.target.addEventListener(type, listener, options);
  }


  /**
   * Detaches the event listener from the event target. This does nothing if the
   * event listener is already detached.
   * @returns {void}
   */
  unlisten(): void {
    if (!this.target)
      return;

    this.target.removeEventListener(this.type, this.listener, this.options);

    this.target = null;
    this.listener = null;
    this.options = null;
  }
}

export default EventManager;
