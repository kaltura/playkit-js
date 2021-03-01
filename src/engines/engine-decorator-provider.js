// @flow

/**
 * Engine decorator provider.
 * @class EngineDecoratorProvider
 * @param {IEngineDecoratorProvider} plugin - The plugin which have implemented decorator.
 * @implements {IEngineDecorator}
 */
class EngineDecoratorProvider implements IEngineDecoratorProvider {
  _name: string;
  _getEngineDecorator: (engine: IEngine, dispatchEventHandler: Function) => IEngineDecorator;

  constructor(plugin: IEngineDecoratorProvider) {
    this._name = plugin.getName();
    this._getEngineDecorator = plugin.getEngineDecorator.bind(plugin);
  }

  getEngineDecorator(engine: IEngine, dispatchEventHandler: Function): IEngineDecorator {
    return this._getEngineDecorator(engine, dispatchEventHandler);
  }

  getName(): string {
    return this._name;
  }
}

export {EngineDecoratorProvider};
