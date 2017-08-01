//@flow

/**
 * @namespace State
 * @class State
 * @memberof Classes
 */
export default class State {
  _duration: number;
  _timestamp: number;
  /**
   * @type {string}
   * @public
   * @instance
   * @memberof Classes.State
   */
  type: string;

  constructor(type: string) {
    this.type = type;
    this._duration = 0;
    this._timestamp = Date.now() / 1000;
  }

  /**
   * @returns {number}
   * @public
   * @instance
   * @memberof Classes.State
   */
  get duration(): number {
    return this._duration;
  }

  /**
   * @param {number} endTime
   * @public
   * @instance
   * @memberof Classes.State
   */
  set duration(endTime: number): void {
    this._duration = endTime - this._timestamp;
  }
}
