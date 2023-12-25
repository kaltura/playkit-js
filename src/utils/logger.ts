import JsLogger, {ILogger, ILogHandler, ILogLevel} from 'js-logger';
import { LoggerLevels } from '../types/logger-levels';

const LogLevel: LoggerLevels = {
  DEBUG: JsLogger.DEBUG,
  INFO: JsLogger.INFO,
  TIME: JsLogger.TIME,
  WARN: JsLogger.WARN,
  ERROR: JsLogger.ERROR,
  OFF: JsLogger.OFF,
  TRACE: JsLogger.TRACE
};

const LogLevelType: Record<keyof LoggerLevels, keyof LoggerLevels> = {} as Record<keyof LoggerLevels, keyof LoggerLevels>;

// Build the log level types enums according to the LogLevel object
Object.keys(LogLevel).forEach(key => {
  LogLevelType[key] = key;
});

JsLogger.useDefaults({defaultLevel: JsLogger.ERROR});

/**
 * sets the logger handler
 * @private
 * @param {LogHandlerType} handler - the log level
 * @returns {void}
 */
function setLogHandler(handler: ILogHandler): void {
  JsLogger.setHandler((messages, context) => handler(messages, context));
}

/**
 * get a logger
 * @param {?string} name - the logger name
 * @returns {Object} - the logger class
 */
function getLogger(name?: string): ILogger {
  if (!name) {
    return JsLogger;
  }
  return JsLogger.get(name);
}

/**
 * get the log level
 * @param {?string} name - the logger name
 * @returns {PKLogLevelObject} - the log level
 */
function getLogLevel(name?: string): ILogLevel {
  return getLogger(name).getLevel();
}

/**
 * sets the logger level
 * @param {PKLogLevelObject} level - the log level
 * @param {?string} name - the logger name
 * @returns {void}
 */
function setLogLevel(level: ILogLevel, name?: string): void {
  getLogger(name).setLevel(level);
}

export default getLogger;
export {LogLevel, LogLevelType, getLogLevel, setLogLevel, setLogHandler, getLogger};
