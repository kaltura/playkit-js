// @flow

/**
 * Engine decorator manager for plugins.
 * @class EngineDecoratorManager
 */
class EngineDecoratorManager {
  _decoratorGenerators: Array<EngineDecoratorGenerator> = [];

  addDecorator(decoratorGenerator: EngineDecoratorGenerator): void {
    this._decoratorGenerators.push(decoratorGenerator);
  }

  createDecorators(engine: IEngine, dispatchEvent: Function): Array<IEngineDecorator> {
    return this._decoratorGenerators.map(decoratorGenerator => decoratorGenerator(engine, dispatchEvent));
  }

  destroy(): void {
    this._decoratorGenerators = [];
  }
}

export {EngineDecoratorManager};
