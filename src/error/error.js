//@flow
import getLogger, {getLogLevel, LogLevel} from '../utils/logger';
import type {SeverityType} from './severity';
import {Severity} from './severity';
import type {CodeType} from './code';
import {Code} from './code';
import type {CategoryType} from './category';
import {Category} from './category';

const CLASS_NAME: string = 'Error';

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
    if (getLogLevel(CLASS_NAME) !== LogLevel.OFF) {
      Error._logger.error(`Category:${category} | Code:${code} |`, data);
    }
  }
}
