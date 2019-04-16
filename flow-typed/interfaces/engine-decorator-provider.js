// @flow
import {BaseEngineDecorator} from '../../src/engines/base-engine-decorator';
import type {IEngine} from './engine';

declare interface IEngineDecoratorProvider {
  getEngineDecorator(engine: IEngine): BaseEngineDecorator;
}
