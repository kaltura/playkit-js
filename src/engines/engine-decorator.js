// @flow
import FakeEvent from '../event/fake-event';
import {EventType} from '../event/event-type';
import EventManager from '../event/event-manager';
import FakeEventTarget from '../event/fake-event-target';

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
        const activeDecorator = this._pluginDecorators.find(decorator => prop in decorator && decorator.active);
        // $FlowFixMe
        return activeDecorator ? activeDecorator[prop] : obj[prop];
      },
      set: (obj, prop, value) => {
        const activeDecorator = this._pluginDecorators.find(decorator => prop in decorator && decorator.active);
        // $FlowFixMe
        activeDecorator ? (activeDecorator[prop] = value) : (obj[prop] = value);
        return true;
      }
    });
  }

  dispatchEvent(event: FakeEvent): boolean {
    const activeDecorator = this._pluginDecorators.find(decorator => decorator.active);
    return activeDecorator ? activeDecorator.dispatchEvent && activeDecorator.dispatchEvent(event) : super.dispatchEvent(event);
  }

  _destroy(): void {
    this._pluginDecorators = [];
    this._eventManager.destroy();
  }

  get active(): boolean {
    return true;
  }
}

const registerEngineDecoratorProvider = EngineDecorator.register;
export {EngineDecorator, registerEngineDecoratorProvider};
