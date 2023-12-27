import {IEngine} from './interfaces/engine';
import {IEngineDecorator} from './interfaces/engine-decorator';


export interface IEngineDecoratorProvider {
  getEngineDecorator(engine: IEngine, dispatchEventHandler: Function): IEngineDecorator;
  getName(): string;
}
