// @flow

/**
 * Engine decorator provider.
 * @class EngineDecoratorProvider
 * @param {IEngineDecoratorProvider} plugin - The plugin which have implemented decorator.
 * @implements {IEngineDecorator}
 */
class EngineDecoratorProvider implements IEngineDecoratorProvider {
  constructor(plugin: IEngineDecoratorProvider) {
    this._name = plugin.getName();
    this._getEngineDecorator = plugin.getEngineDecorator.bind(plugin);
  }

  getEngineDecorator(...args): IEngineDecorator {
    return this._getEngineDecorator(...args);
  }

  getName(): string {
    return this._name;
  }
}

export {EngineDecoratorProvider};
