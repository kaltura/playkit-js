// @flow
export default class Num {
  /**
   * @param {number} n - A certain number
   * @returns {boolean} - If the input is a number
   */
  static isNumber(n: number): boolean {
    return window.Number(n) === n;
  }

  /**
   * @param {number} n - A certain number
   * @returns {boolean} - If the input is an integer
   */
  static isInt(n: number): boolean {
    return Num.isNumber(n) && n % 1 === 0;
  }

  /**
   * @param {number} n - A certain number
   * @returns {boolean} - If the input is a float
   */
  static isFloat(n: number): boolean {
    return Num.isNumber(n) && n % 1 !== 0;
  }
}
