//@flow
import * as JsLogger from 'js-logger';

/**
 * @enum LogLevel
 * @memberof Enums
 */
export const LogLevel = {
  /** @memberof Enums.LogLevel */
  "DEBUG": JsLogger.DEBUG,
  /** @memberof Enums.LogLevel */
  "INFO": JsLogger.INFO,
  /** @memberof Enums.LogLevel */
  "TIME": JsLogger.TIME,
  /** @memberof Enums.LogLevel */
  "WARN": JsLogger.WARN,
  /** @memberof Enums.LogLevel */
  "ERROR": JsLogger.ERROR,
  /** @memberof Enums.LogLevel */
  "OFF": JsLogger.OFF
};

/**
 * @namespace LoggerFactory
 * @memberof Utils
 */
class LoggerFactory {
  constructor(options?: Object) {
    JsLogger.useDefaults(options || {});
  }

  /**
   * @memberof Utils.LoggerFactory
   * @param name - The name of the logger.
   * @returns {ILogger} - The logger singleton.
   */
  getLogger(name?: string) {
    if (!name) {
      return JsLogger;
    }
    return JsLogger.get(name);
  }
}

const lf = new LoggerFactory({defaultLevel: JsLogger.DEBUG});
export default lf;
