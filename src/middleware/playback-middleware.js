// @flow
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
  static Actions: {[action: string]: string} = {
    PLAY: 'play',
    PAUSE: 'pause'
  };
  /**
   * The middleware implementation.
   * @private
   * @member
   */
  _middleware: Middleware;

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
  use(middlewareInstance: BaseMiddleware): void {
    this._middleware.use(middlewareInstance);
  }

  /**
   * Runs a play chain.
   * @param {Function} callback - The last play handler in the chain.
   * @public
   * @returns {void}
   */
  play(callback: Function): void {
    this._middleware.run(PlaybackMiddleware.Actions.PLAY, callback);
  }

  /**
   * Runs a pause chain.
   * @param {Function} callback - The last pause handler in the chain.
   * @public
   * @returns {void}
   */
  pause(callback: Function): void {
    this._middleware.run(PlaybackMiddleware.Actions.PAUSE, callback);
  }
}
