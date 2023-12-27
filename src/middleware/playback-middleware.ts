import Middleware from './middleware';
import BaseMiddleware from './base-middleware';

/**
 * The playback middleware.
 */
export default class PlaybackMiddleware {
  /**
   * The actions of the playback middleware.
   * @static
   */
  public static Actions: {[action: string]: string} = {
    LOAD: 'load',
    PLAY: 'play',
    PAUSE: 'pause',
    SET_CURRENT_TIME: 'setCurrentTime'
  };
  /**
   * The middleware implementation.
   * @private
   * @member
   */
  private _middleware: Middleware;

  /**
   * @constructor
   */
  constructor() {
    this._middleware = new Middleware(PlaybackMiddleware.Actions);
  }

  /**
   * Registers a playback middleware instance to the middleware chain.
   * @param {BaseMiddleware} middlewareInstance - The middleware instance.
   * @public
   * @returns {void}
   */
  public use(middlewareInstance: BaseMiddleware): void {
    this._middleware.use(middlewareInstance);
  }

  /**
   * Runs a load chain.
   * @param {Function} callback - The last load handler in the chain.
   * @public
   * @returns {void}
   */
  public load(callback: () => void): void {
    this._middleware.run(PlaybackMiddleware.Actions.LOAD, callback);
  }

  /**
   * Runs a play chain.
   * @param {Function} callback - The last play handler in the chain.
   * @public
   * @returns {void}
   */
  public play(callback: () => any): void {
    this._middleware.run(PlaybackMiddleware.Actions.PLAY, callback);
  }

  /**
   * Runs a pause chain.
   * @param {Function} callback - The last pause handler in the chain.
   * @public
   * @returns {void}
   */
  public pause(callback: () => any): void {
    this._middleware.run(PlaybackMiddleware.Actions.PAUSE, callback);
  }

  /**
   * Runs a setCurrentTime chain.
   * @param {Number} to - The number to set in seconds.
   * @param {Function} callback - The last setCurrentTime handler in the chain.
   * @public
   * @returns {void}
   */
  public setCurrentTime(to: number, callback: () => any): void {
    this._middleware.run(PlaybackMiddleware.Actions.SET_CURRENT_TIME, callback, to);
  }
}
