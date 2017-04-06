//@flow

/**
 * This class describes a player state.
 * @classdesc
 */
export default class State {
  /**
   * The type of the state.
   * Can be one of those describes in states.js
   * @member
   * @type {string}
   * @public
   */
  type: string;
  /**
   * The duration that the player was in this state.
   * @member
   * @type {number}
   * @private
   */
  _duration: number;
  /**
   * The timestamp that this state started.
   * @member
   * @type {number}
   * @private
   */
  _timestamp: number;

  /**
   * @constructor
   * @param type - The type of the state.
   */
  constructor(type: string) {
    this.type = type;
    this._duration = 0;
    this._timestamp = Date.now() / 1000;
  }

  /**
   * Getter for the duration of the state.
   * @returns {number}
   */
  get duration(): number {
    return this._duration;
  }

  /**
   * Setter for the duration of the state.
   * @param endTime - The timestamp of the next state.
   */
  set duration(endTime: number): void {
    this._duration = endTime - this._timestamp;
  }
}
