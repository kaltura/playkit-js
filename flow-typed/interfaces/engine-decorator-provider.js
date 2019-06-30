// @flow
import type {IEngine} from './engine';

declare interface IEngineDecoratorProvider {
  getEngineDecorator(engine: IEngine): IEngine;
}
