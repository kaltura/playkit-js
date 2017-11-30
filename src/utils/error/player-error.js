//@flow
import getLogger, {getLogLevel, LogLevel} from '../logger'
import {Severity} from './severity'
import {Code} from './code'
import {Category} from './category'


const ERROR_LOGGER: string = 'Error';
/**
 * @classdesc This is a description of the error class.
 */

export default class Error {

  UNKNOWN: string = 'UNKNOWN';

  severity: number;
  category: number;
  code: number;
  data: any;

  /**
   * @enum {number}
   */
  static Severity: { [level: string]: number } = Severity;

  /**
   * @enum {number}
   */
  static Category: { [level: string]: number } = Category;

  /**
   * @enum {number}
   */
  static Code: { [level: string]: number } = Code;

  static _logger: any = getLogger(ERROR_LOGGER);



  constructor(severity: number, category: number, code: number, data: any = {}) {
    this.severity = severity;
    this.category = category;
    this.code = code;
    this.data = data;

    if (getLogLevel(ERROR_LOGGER) === LogLevel.DEBUG) {
      let codeName = this.UNKNOWN;
      let categoryName = this.UNKNOWN;
      for (let k in Error.Code) {
        if (code === Error.Code[k]) {
          codeName = k;
        }
      }
      for (let i in Error.Category) {
        if (category === Error.Category[i]) {
          categoryName = i;
        }
      }

      Error._logger.debug('Player error ' + categoryName + '.' + codeName + ' (' + JSON.stringify(data) + ')');
    }
  }
}

export {Error}
