// @flow
import {EventType} from '../event/event-type';
import FakeEventTarget from '../event/fake-event-target';
import EventManager from '../event/event-manager';

/**
 * Engine decorator for ad plugin.
 * @class AdEngineDecorator
 * @param {IEngine} engine - The engine to decorate.
 */
class AdEngineDecorator extends FakeEventTarget implements IEngine {
  _pluginDecorators;

  static getDecorator(engine: IEngine, plugins: Array<BasePlugin>): ?IEngine {
    const pluginWithDecorators = plugins.filter(plugin => plugin.getEngineDecorator);
    return pluginWithDecorators.length ? new this(engine, pluginWithDecorators) : null;
  }

  constructor(engine: IEngine, pluginWithDecorators) {
    super();
    this._eventManager = new EventManager();
    this._pluginDecorators = pluginWithDecorators.map(plugin => plugin.getEngineDecorator(engine, super.dispatchEvent.bind(this)));
    const events: Array<string> = (Object.values(EventType): any);
    events.forEach(event => this._eventManager.listen(engine, event, e => this.dispatchEvent(e)));
    return new Proxy(engine, {
      get: (obj, prop) => {
        if (prop === '_listeners') {
          return this._listeners;
        }
        const activeDecorator = this._pluginDecorators.find(decorator => prop in decorator && decorator.active);
        return activeDecorator ? activeDecorator[prop] : obj[prop];
      },
      set: (obj, prop, value) => {
        const activeDecorator = this._pluginDecorators.find(decorator => prop in decorator && decorator.active);
        activeDecorator ? (activeDecorator[prop] = value) : (obj[prop] = value);
        return true;
      }
    });
  }

  dispatchEvent(event: FakeEvent): boolean {
    const activeDecorator = this._pluginDecorators.find(decorator => decorator.active);
    return activeDecorator ? activeDecorator.dispatchEvent && activeDecorator.dispatchEvent(event) : super.dispatchEvent(event);
  }
}

export {AdEngineDecorator};
