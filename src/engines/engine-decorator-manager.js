// @flow
import getLogger from '../utils/logger';

/**
 * Engine decorator manager for plugins.
 * @class EngineDecoratorManager
 */
class EngineDecoratorManager {
  _decoratorProviders: Map<string, IEngineDecoratorProvider> = new Map();
  _logger: any = getLogger('EngineDecoratorManager');

  register(engineDecoratorProvider: IEngineDecoratorProvider): void {
    if (!this._decoratorProviders.has(engineDecoratorProvider.getName())) {
      this._decoratorProviders.set(engineDecoratorProvider.getName(), engineDecoratorProvider);
    } else {
      this._logger.warn(`decorator already registered for ${engineDecoratorProvider.getName()}`);
    }
  }

  createDecorators(engine: IEngine, dispatchEvent: Function): Array<IEngineDecorator> {
    this._logger.debug(`decorators created for ${Array.from(this._decoratorProviders.keys()).toString()}`);
    return Array.from(this._decoratorProviders.values(), engineDecoratorProvider =>
      engineDecoratorProvider.getEngineDecorator(engine, dispatchEvent)
    );
  }

  destroy(): void {
    this._logger.debug(`decorators destroyed`);
    this._decoratorProviders.clear();
  }
}

export {EngineDecoratorManager};
