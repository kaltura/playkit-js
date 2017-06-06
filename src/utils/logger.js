//@flow
import * as JsLogger from 'js-logger'
import {getQueryVariable} from './util'

const LOG_LEVEL: { [level: string]: Object } = {
  "DEBUG": JsLogger.DEBUG,
  "INFO": JsLogger.INFO,
  "TIME": JsLogger.TIME,
  "WARN": JsLogger.WARN,
  "ERROR": JsLogger.ERROR,
  "OFF": JsLogger.OFF
};

class LoggerFactory {
  constructor(options?: Object) {
    JsLogger.useDefaults(options || {});
  }

  getLogger(name?: string) {
    if (!name) {
      return JsLogger;
    }
    return JsLogger.get(name);
  }
}

let logLevel;

(function () {
  let queryLogLevel = getQueryVariable('logLevel');
  if (!queryLogLevel) {
    logLevel = LOG_LEVEL.OFF;
  } else {
    logLevel = LOG_LEVEL[queryLogLevel.toUpperCase()];
  }
})();

const lf = new LoggerFactory({defaultLevel: logLevel});

export default lf;
export {LOG_LEVEL};
