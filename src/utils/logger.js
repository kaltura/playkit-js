//@flow
import * as JsLogger from 'js-logger';

const LOG_LEVEL: { [level: string]: Object } = {
  "DEBUG": JsLogger.DEBUG,
  "INFO": JsLogger.INFO,
  "TIME": JsLogger.TIME,
  "WARN": JsLogger.WARN,
  "ERROR": JsLogger.ERROR,
  "OFF": JsLogger.OFF
};

JsLogger.useDefaults({defaultLevel: JsLogger.ERROR});
if (window.PLAYKIT_LOG_LEVEL && LOG_LEVEL[window.PLAYKIT_LOG_LEVEL]) {
  JsLogger.useDefaults({defaultLevel: LOG_LEVEL[window.PLAYKIT_LOG_LEVEL]});
}

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
 * @returns {string} - the log level
 */
function getLogLevel(name?: string): string{
  return getLogger(name).getLevel().name;
}

/**
 * sets the logger level
 * @param {string} level - the log level
 * @param {?string} name - the logger name
 * @returns {void}
 */
function setLogLevel(level: string, name?: string): void{
  getLogger(name).setLevel(level);
}

export default getLogger;
export {LOG_LEVEL, getLogLevel, setLogLevel};
