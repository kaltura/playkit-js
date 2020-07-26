// @flow
declare type PKLogLevelObject = {value: number, name: string};
declare type PKLogLevels = {[level: string]: PKLogLevelObject};
declare type PKLogLevelTypes = {[level: string]: string};
declare type LogHandlerType = (messages: any[], context: Object) => void;
declare type PKLogConfigObject = {
  level: string,
  handler: ?LogHandlerType
};
