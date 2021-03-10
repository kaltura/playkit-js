// @flow
import FakeEvent from '../event/fake-event';
import {EventType} from '../event/event-type';
import EventManager from '../event/event-manager';
import FakeEventTarget from '../event/fake-event-target';
import {EngineDecoratorManager} from './engine-decorator-manager';

/**
 * Engine decorator for plugin.
 * @class EngineDecorator
 * @param {IEngineDecorator} engine - The engine to decorate.
 * @implements {IEngineDecorator}
 */
class EngineDecorator extends FakeEventTarget implements IEngineDecorator {
  _pluginDecorators: Array<IEngineDecorator>;
  _eventManager: EventManager;

  constructor(engine: IEngine, decoratorManager: EngineDecoratorManager) {
    super();
    this._eventManager = new EventManager();
    this._pluginDecorators = decoratorManager.createDecorators(engine, super.dispatchEvent.bind(this));
    const events: Array<string> = (Object.values(EventType): any);
    events.forEach(event => this._eventManager.listen(engine, event, (e: FakeEvent) => this.dispatchEvent(e)));
    return new Proxy(engine, {
      get: (obj, prop) => {
        if (prop === 'destroy') {
          this._destroy();
        }
        const activeDecorator = this._pluginDecorators.find(decorator => decorator.active);
        const isGetter = (target: Object, property: string) => {
          const hasGetter = (prototype: Object) => {
            const descriptor = Object.getOwnPropertyDescriptor(prototype, property);
            return descriptor && !!descriptor['get'];
          };
          const isGetterInPrototype = () => {
            let currentPrototype = target;
            //check until we get the base prototype - object prototype
            while (currentPrototype.constructor !== Object.constructor) {
              //when descriptor exists on prototype it'll return boolean otherwise undefined
              if (typeof hasGetter(currentPrototype) === 'boolean') {
                return hasGetter(currentPrototype);
              } else {
                currentPrototype = Object.getPrototypeOf(currentPrototype);
              }
            }
            return false;
          };
          return isGetterInPrototype();
        };
        let target;
        //For events the proxy is the target - to avoid listening to engine itself
        if (prop === 'addEventListener' || prop === 'removeEventListener') {
          target = this;
        } else {
          target = activeDecorator && prop in activeDecorator ? activeDecorator : obj;
        }
        return isGetter(target, prop)
          ? // $FlowFixMe
            target[prop]
          : // $FlowFixMe
            (...args) => target[prop](...args);
      },
      set: (obj, prop, value) => {
        const activeDecorator = this._pluginDecorators.find(decorator => prop in decorator && decorator.active);
        // $FlowFixMe
        activeDecorator && prop in activeDecorator ? (activeDecorator[prop] = value) : (obj[prop] = value);
        return true;
      }
    });
  }

  dispatchEvent(event: FakeEvent): boolean {
    const activeDecorator = this._pluginDecorators.find(decorator => decorator.active);
    return activeDecorator && activeDecorator.dispatchEvent ? activeDecorator.dispatchEvent(event) : super.dispatchEvent(event);
  }

  _destroy(): void {
    this._pluginDecorators = [];
    this._eventManager.destroy();
  }

  get active(): boolean {
    return true;
  }
}

export {EngineDecorator};
