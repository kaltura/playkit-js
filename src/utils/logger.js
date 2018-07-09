//@flow
import * as JsLogger from 'js-logger';

const LogLevel: PKLogLevels = {
  DEBUG: JsLogger.DEBUG,
  INFO: JsLogger.INFO,
  TIME: JsLogger.TIME,
  WARN: JsLogger.WARN,
  ERROR: JsLogger.ERROR,
  OFF: JsLogger.OFF
};

const LogLevelType: PKLogLevelTypes = {};

// Build the log level types enums according to the LogLevel object
Object.keys(LogLevel).forEach(key => {
  LogLevelType[key] = key;
});

JsLogger.useDefaults({defaultLevel: JsLogger.ERROR});

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
 * @returns {PKLogLevelObject} - the log level
 */
function getLogLevel(name?: string): PKLogLevelObject {
  return getLogger(name).getLevel();
}

/**
 * sets the logger level
 * @param {PKLogLevelObject} level - the log level
 * @param {?string} name - the logger name
 * @returns {void}
 */
function setLogLevel(level: PKLogLevelObject, name?: string): void {
  getLogger(name).setLevel(level);
}

export default getLogger;
export {LogLevel, LogLevelType, getLogLevel, setLogLevel};
