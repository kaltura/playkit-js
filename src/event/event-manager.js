//@flow
import MultiMap from '../utils/multi-map'
import FakeEvent from './fake-event'

type ListenerType = (event: FakeEvent) => any;

/**
 * Creates a new EventManager.
 * An EventManager maintains a collection of "event bindings" between event targets and event listeners.
 * @namespace EventManager
 * @memberof Classes
 * @class EventManager
 **/
class EventManager {
  _bindingMap: MultiMap<Binding> | null;

  constructor() {
    this._bindingMap = new MultiMap();
  }

  /**
   * Detaches all event listeners.
   * @public
   * @instance
   * @memberof Classes.EventManager
   * @returns {Promise<*>}
   */
  destroy(): Promise<*> {
    this.removeAll();
    this._bindingMap = null;
    return Promise.resolve();
  }

  /**
   * Attaches an event listener to an event target.
   * @param {EventTarget} target - The event target.
   * @param {string} type - The event type.
   * @param {EventManager.ListenerType} listener - The event listener.
   * @returns {void}
   * @public
   * @instance
   * @memberof Classes.EventManager
   */
  listen(target: any, type: string, listener: ListenerType): void {
    let binding = new Binding(target, type, listener);
    if (this._bindingMap) {
      this._bindingMap.push(type, binding);
    }
  }

  /**
   * Detaches an event listener from an event target.
   * @param {EventTarget} target - The event target.
   * @param {string} type - The event type.
   * @returns {void}
   * @public
   * @instance
   * @memberof Classes.EventManager
   */
  unlisten(target: any, type: string): void {
    if (this._bindingMap) {
      let list = this._bindingMap.get(type);

      for (let i = 0; i < list.length; ++i) {
        let binding = list[i];

        if (binding.target == target) {
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
   * @public
   * @instance
   * @memberof Classes.EventManager
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

class Binding {
  target: any;
  type: string;
  listener: ?ListenerType;

  constructor(target, type, listener) {
    this.target = target;
    this.type = type;
    this.listener = listener;
    this.target.addEventListener(type, listener, false);
  }

  unlisten(): void {
    if (!this.target) {
      return;
    }
    this.target.removeEventListener(this.type, this.listener, false);
    this.target = null;
    this.listener = null;
  }
}

export default EventManager;
