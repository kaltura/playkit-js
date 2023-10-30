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
  public type: string;
  /**
   * The duration that the player was in this state.
   * @member
   * @type {number}
   * @private
   */
  private _duration: number;
  /**
   * The timestamp that this state started.
   * @member
   * @type {number}
   * @private
   */
  private _timestamp: number;

  /**
   * @constructor
   * @param {string} type - The type of the state.
   */
  constructor(type: string) {
    this.type = type;
    this._duration = 0;
    this._timestamp = Date.now() / 1000;
  }

  /**
   * Getter for the duration of the state.
   * @returns {number} - The duration of the state
   */
  public get duration(): number {
    return this._duration;
  }

  /**
   * Setter for the duration of the state.
   * @param {number} endTime - The timestamp of the next state.
   */
  public set duration(endTime: number) {
    this._duration = endTime - this._timestamp;
  }
}
