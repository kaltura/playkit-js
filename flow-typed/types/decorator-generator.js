// @flow
import type {IEngine} from './engine';

declare type EngineDecoratorGenerator = {(engine: IEngine, dispatchEventHandler: Function): IEngineDecorator};
