/**
 * Engine decorator provider.
 * @class EngineDecoratorProvider
 * @param {IEngineDecoratorProvider} plugin - The plugin which have implemented decorator.
 * @implements {IEngineDecorator}
 */
import {IEngineDecoratorProvider} from '../types';
import {IEngine} from '../types/interfaces/engine';
import {IEngineDecorator} from '../types/interfaces/engine-decorator';
import { FakeEvent } from '../event/fake-event';

class EngineDecoratorProvider implements IEngineDecoratorProvider {
  private _name: string;
  private _getEngineDecorator: (engine: IEngine, dispatchEventHandler: (event: FakeEvent) => void) => IEngineDecorator;

  constructor(plugin: IEngineDecoratorProvider) {
    this._name = plugin.getName();
    this._getEngineDecorator = plugin.getEngineDecorator.bind(plugin);
  }

  public getEngineDecorator(engine: IEngine, dispatchEventHandler: (event: FakeEvent) => void): IEngineDecorator {
    return this._getEngineDecorator(engine, dispatchEventHandler);
  }

  public getName(): string {
    return this._name;
  }
}

export {EngineDecoratorProvider};
