import { FakeEvent } from '../event/fake-event';
import {EventType} from '../event/event-type';
import { EventManager } from '../event/event-manager';
import { FakeEventTarget } from '../event/fake-event-target';
import {EngineDecoratorManager} from './engine-decorator-manager';
import {IEngineDecorator} from '../types/interfaces/engine-decorator';
import {IEngine} from '../types/interfaces/engine';

export type EngineDecoratorType = EngineDecorator & IEngine;

/**
 * Engine decorator for plugin.
 * @class EngineDecorator
 * @param {IEngineDecorator} engine - The engine to decorate.
 * @implements {IEngineDecorator}
 */
class EngineDecorator extends FakeEventTarget implements IEngineDecorator {
  private _pluginDecorators: Array<IEngineDecorator>;
  private _eventManager: EventManager;

  constructor(engine: IEngine, decoratorManager: EngineDecoratorManager) {
    super();
    this._eventManager = new EventManager();
    this._pluginDecorators = decoratorManager.createDecorators(engine, super.dispatchEvent.bind(this));
    const events: Array<string> = Object.values(EventType);
    events.forEach(event => this._eventManager.listen(engine, event, (e: FakeEvent) => this.dispatchEvent(e)));
    return new Proxy<IEngine>(engine, {
      get: (obj, prop): IEngine => {
        if (prop === 'destroy') {
          this._destroy();
        }
        const activeDecorator = this._pluginDecorators.find(decorator => decorator.active);
        let target;
        //For events the proxy is the target - to avoid listening to engine itself
        if (prop === 'addEventListener' || prop === 'removeEventListener') {
          // eslint-disable-next-line
          target = this;
        } else {
          target = activeDecorator && prop in activeDecorator ? activeDecorator : obj;
        }
        return target[prop] && typeof target[prop].bind === 'function' ? target[prop].bind(target) : target[prop];
      },
      set: (obj, prop, value): boolean => {
        const activeDecorator = this._pluginDecorators.find(decorator => prop in decorator && decorator.active);
        activeDecorator && prop in activeDecorator ? (activeDecorator[prop] = value) : (obj[prop] = value);
        return true;
      }
    }) as EngineDecoratorType;
  }

  public dispatchEvent(event: FakeEvent): boolean {
    const activeDecorator = this._pluginDecorators.find(decorator => decorator.active);
    return activeDecorator && activeDecorator.dispatchEvent ? activeDecorator.dispatchEvent(event) : super.dispatchEvent(event);
  }

  private _destroy(): void {
    this._pluginDecorators = [];
    this._eventManager.destroy();
  }

  public get active(): boolean {
    return true;
  }
}

export {EngineDecorator};
