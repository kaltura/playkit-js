import {ILogHandler} from 'js-logger';

export type PKLogConfigObject = {
  level: string,
  handler?: ILogHandler
};
