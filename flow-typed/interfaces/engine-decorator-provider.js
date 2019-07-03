// @flow
import type {IEngine} from './engine';

declare interface IEngineDecoratorProvider {
  getEngineDecorator(engine: IEngine, dispatchEventHandler: Function): IEngineDecorator;
}
