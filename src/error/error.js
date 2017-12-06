//@flow
import getLogger, {getLogLevel, LogLevel} from '../utils/logger'
import {Severity} from './severity'
import type {SeverityType} from './severity'
import {Code} from './code'
import type {CodeType} from './code'
import {Category} from './category'
import type {CategoryType} from './category'

const CLASS_NAME: string = 'Error';
const UNKNOWN: string = 'UNKNOWN';

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

  /**
   * @constructor
   * @param {number} severity - error's severity
   * @param {number} category - error's category.
   * @param {number} code - error's code.
   * @param {any} data - additional data for the error.
   */
  constructor(severity: number, category: number, code: number, data: any = {}) {
    this.severity = severity;
    this.category = category;
    this.code = code;
    this.data = data;
    if (getLogLevel(CLASS_NAME) === LogLevel.DEBUG) {
      this._createReadableError(category, code, data);
    }
  }

  /**
   * creates a readable form of the error
   * @param {number} category - error's category.
   * @param {number} code - error's code.
   * @param {any} data - additional data for the error.
   * @returns {void}
   */
  _createReadableError(category: number, code: number, data: any = {}): void {
    const codeName = this._getKey(Error.Code, code);
    const categoryName = this._getKey(Error.Category, category);
    Error._logger.error(`Player error ${categoryName}.${codeName}`, data);
  }

  /**
   * returns the string key of the number sent (from the enum)
   * @param {Object} obj - reference to the code / category
   * @param {number} value - category's / code's number.
   * @returns {string} - the key string
   */
  _getKey(obj: Object, value: number): string {
    for (let strKey in obj) {
      if (value === obj[strKey]) {
        return strKey;
      }
    }
    return UNKNOWN;
  }
}
