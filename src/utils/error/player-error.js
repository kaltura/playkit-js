//@flow
import getLogger, {getLogLevel, LogLevel} from '../logger'
import {Severity} from './severity'
import type {SeverityType} from './severity'
import {Code} from './code'
import type {CodeType} from './code'
import {Category} from './category'
import type {CategoryType} from './category'


const CLASS_NAME: string = 'Error';

const UNKNOWN: string = 'UNKNOWN'

/**
 * @classdesc This is a description of the error class.
 */
export default class Error {
  severity: number;
  category: number;
  code: number;
  data: any;
  /**
   * @enum {number}
   */
  static Severity: SeverityType = Severity;
  /**
   * @enum {number}
   */
  static Category: CategoryType = Category;
  /**
   * @enum {number}
   */
  static Code: CodeType = Code;
  static _logger: any = getLogger(CLASS_NAME);

  constructor(severity: number, category: number, code: number, data: any = {}) {
    this.severity = severity;
    this.category = category;
    this.code = code;
    this.data = data;
    if (getLogLevel(CLASS_NAME) === LogLevel.DEBUG) {
      let codeName = UNKNOWN;
      let categoryName = UNKNOWN;
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
