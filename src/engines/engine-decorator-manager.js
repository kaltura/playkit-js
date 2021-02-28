// @flow
/**
 * Engine decorator manager for plugins.
 * @class EngineDecoratorManager
 */
class EngineDecoratorManager {
  _decoratorProviders: Map<string, IEngineDecoratorProvider> = new Map();

  register(engineDecoratorProvider: IEngineDecoratorProvider): void {
    if (!this._decoratorProviders.has(engineDecoratorProvider.getName())) {
      this._decoratorProviders.set(engineDecoratorProvider.getName(), engineDecoratorProvider);
    }
  }

  createDecorators(engine: IEngine, dispatchEvent: Function): Array<IEngineDecorator> {
    return Array.from(this._decoratorProviders.values(), engineDecoratorProvider =>
      engineDecoratorProvider.getEngineDecorator(engine, dispatchEvent)
    );
  }

  destroy(): void {
    this._decoratorProviders.clear();
  }
}

export {EngineDecoratorManager};
