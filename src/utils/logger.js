//@flow
import * as JsLogger from 'js-logger';

const LogLevelType: { [level: string]: LogLevel } = {
  DEBUG: JsLogger.DEBUG,
  INFO: JsLogger.INFO,
  TIME: JsLogger.TIME,
  WARN: JsLogger.WARN,
  ERROR: JsLogger.ERROR,
  OFF: JsLogger.OFF
};

JsLogger.useDefaults({defaultLevel: LogLevelType.ERROR});

/**
 * get a logger
 * @param {?string} name - the logger name
 * @returns {Object} - the logger class
 */
function getLogger(name?: string): Object {
  if (!name) {
    return JsLogger;
  }
  return JsLogger.get(name);
}

/**
 * get the log level
 * @param {?string} name - the logger name
 * @returns {LogLevel} - the log level
 */
function getLogLevel(name?: string): LogLevel {
  return getLogger(name).getLevel();
}

/**
 * sets the logger level
 * @param {LogLevel} level - the log level
 * @param {?string} name - the logger name
 * @returns {void}
 */
function setLogLevel(level: LogLevel, name?: string): void {
  getLogger(name).setLevel(level);
}

export default getLogger;
export {LogLevelType, getLogLevel, setLogLevel};
