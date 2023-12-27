// @flow
import getLogger from '../utils/logger';
import {IEngine} from '../types/interfaces/engine';
import {IEngineDecorator} from '../types/interfaces/engine-decorator';
import {IEngineDecoratorProvider} from '../types';
import { FakeEvent } from '../event/fake-event';

/**
 * Engine decorator manager for plugins.
 * @class EngineDecoratorManager
 */
class EngineDecoratorManager {
  private _decoratorProviders: Map<string, IEngineDecoratorProvider> = new Map();
  private _logger: any = getLogger('EngineDecoratorManager');

  public register(engineDecoratorProvider: IEngineDecoratorProvider): void {
    if (!this._decoratorProviders.has(engineDecoratorProvider.getName())) {
      this._decoratorProviders.set(engineDecoratorProvider.getName(), engineDecoratorProvider);
    } else {
      this._logger.warn(`decorator already registered for ${engineDecoratorProvider.getName()}`);
    }
  }

  public createDecorators(engine: IEngine, dispatchEvent: (event: FakeEvent) => void): Array<IEngineDecorator> {
    this._logger.debug(`decorators created for ${Array.from(this._decoratorProviders.keys()).toString()}`);
    return Array.from(this._decoratorProviders.values(), engineDecoratorProvider =>
      engineDecoratorProvider.getEngineDecorator(engine, dispatchEvent)
    );
  }

  public destroy(): void {
    this._logger.debug('decorators destroyed');
    this._decoratorProviders.clear();
  }
}

export {EngineDecoratorManager};
