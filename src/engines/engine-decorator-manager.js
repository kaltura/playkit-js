// @flow
import {MultiMap} from '../utils';

/**
 * Engine decorator manager for plugins.
 * @class EngineDecoratorManager
 */
class EngineDecoratorManager {
  _decoratorProviders: MultiMap<string, IEngineDecoratorProvider> = new MultiMap();

  register(engineDecoratorProvider: IEngineDecoratorProvider): void {
    if (!this._decoratorProviders.has(engineDecoratorProvider.getName())) {
      this._decoratorProviders.push(engineDecoratorProvider.getName(), engineDecoratorProvider);
    }
  }

  createDecorators(engine: IEngine, dispatchEvent: Function): Array<IEngineDecorator> {
    return this._decoratorProviders.getAll().map(engineDecoratorProvider => engineDecoratorProvider.getEngineDecorator(engine, dispatchEvent));
  }

  destroy(): void {
    this._decoratorProviders.clear();
  }
}

export {EngineDecoratorManager};
