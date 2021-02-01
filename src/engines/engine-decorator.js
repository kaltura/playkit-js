// @flow
import FakeEvent from '../event/fake-event';
import {EventType} from '../event/event-type';
import EventManager from '../event/event-manager';
import FakeEventTarget from '../event/fake-event-target';
import {EngineDecoratorPriority} from './engine-decorator-priority';

/**
 * Engine decorator for plugin.
 * @class EngineDecorator
 * @param {IEngineDecorator} engine - The engine to decorate.
 * @implements {IEngineDecorator}
 */
class EngineDecorator extends FakeEventTarget implements IEngineDecorator {
  static _decoratorProviders: Array<IEngineDecoratorProvider> = [];
  _pluginDecorators: Array<IEngineDecorator>;
  _eventManager: EventManager;

  static register(decoratorProvider: IEngineDecoratorProvider): void {
    if (decoratorProvider) {
      if (!EngineDecorator._decoratorProviders.includes(decoratorProvider)) {
        EngineDecorator._decoratorProviders.push(decoratorProvider);
      }
    }
  }

  static getDecorator(engine: IEngine): ?IEngine {
    return EngineDecorator._decoratorProviders.length ? new this(engine) : null;
  }

  constructor(engine: IEngine) {
    super();
    this._eventManager = new EventManager();
    this._pluginDecorators = EngineDecorator._decoratorProviders.map(provider => provider.getEngineDecorator(engine, super.dispatchEvent.bind(this)));
    const events: Array<string> = (Object.values(EventType): any);
    events.forEach(event => this._eventManager.listen(engine, event, (e: FakeEvent) => this.dispatchEvent(e)));
    return new Proxy(engine, {
      get: (obj, prop) => {
        if (prop === 'destroy') {
          this._destroy();
        }
        if (prop === '_listeners') {
          return this._listeners;
        }
        const activeDecorator = this._getActiveDecorator(this._pluginDecorators);
        // $FlowFixMe
        return activeDecorator && prop in activeDecorator ? activeDecorator[prop] : obj[prop];
      },
      set: (obj, prop, value) => {
        const activeDecorator = this._getActiveDecorator(this._pluginDecorators);
        // $FlowFixMe
        activeDecorator && prop in activeDecorator ? (activeDecorator[prop] = value) : (obj[prop] = value);
        return true;
      }
    });
  }

  dispatchEvent(event: FakeEvent): boolean {
    const activeDecorator = this._getActiveDecorator(this._pluginDecorators);
    return activeDecorator ? activeDecorator.dispatchEvent && activeDecorator.dispatchEvent(event) : super.dispatchEvent(event);
  }

  _getActiveDecorator(decorators: Array<IEngineDecorator>): IEngineDecorator {
    let selectedDecorator = {priority: EngineDecoratorPriority.NONE};
    const getHigherPriority = (selectedDecorator, decorator) => {
      const decoratorPriority = decorator.priority || EngineDecoratorPriority.FALLBACK;
      if (decorator.active && decoratorPriority && decoratorPriority >= selectedDecorator.priority) {
        return decorator;
      }
      return selectedDecorator;
    };
    return decorators.find(decorator => {
      selectedDecorator = getHigherPriority(selectedDecorator, decorator);
      return selectedDecorator.priority === EngineDecoratorPriority.NONE ? null : selectedDecorator;
    });
  }

  _destroy(): void {
    this._pluginDecorators = [];
    this._eventManager.destroy();
  }

  get active(): boolean {
    return true;
  }

  get priority(): number {
    return EngineDecoratorPriority.FALLBACK;
  }
}

const registerEngineDecoratorProvider = EngineDecorator.register;
export {EngineDecorator, registerEngineDecoratorProvider};
