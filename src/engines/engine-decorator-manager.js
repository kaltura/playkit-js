// @flow

/**
 * Engine decorator manager for plugins.
 * @class EngineDecoratorManager
 */
class EngineDecoratorManager {
  _decoratorGenerators: Array<(engine: IEngine, dispatchEvent: Function) => IEngineDecorator> = [];

  addDecorator(decoratorGenerator: (engine: IEngine, dispatchEvent: Function) => IEngineDecorator): void {
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
