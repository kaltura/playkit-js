// @flow
import Middleware from './middleware'
import BaseMiddleware from './base-middleware'

/**
 * @namespace PlaybackMiddleware
 * @class PlaybackMiddleware
 * @memberof Classes
 */
export default class PlaybackMiddleware {
  _middleware: Middleware;

  /**
   * The possible actions of the playback middleware.
   * @static
   * @namespace Actions
   * @memberof Classes.PlaybackMiddleware
   */
  static Actions: Object = {
    /**
     * @memberof Classes.PlaybackMiddleware.Actions
     */
    PLAY: 'play',
    /**
     * @memberof Classes.PlaybackMiddleware.Actions
     */
    PAUSE: 'pause'
  };

  constructor() {
    this._middleware = new Middleware(PlaybackMiddleware.Actions);
  }

  /**
   * Registers a base middleware instance to the middleware chain.
   * @param {BaseMiddleware} middlewareInstance - The base middleware instance.
   * @public
   * @returns {void}
   * @instance
   * @memberof Classes.PlaybackMiddleware
   */
  use(middlewareInstance: BaseMiddleware): void {
    this._middleware.use(middlewareInstance);
  }

  /**
   * Runs a play chain.
   * @param {Function} callback - The last play handler in the chain.
   * @public
   * @returns {void}
   * @instance
   * @memberof Classes.PlaybackMiddleware
   */
  play(callback: Function): void {
    this._middleware.run(PlaybackMiddleware.Actions.PLAY, callback);
  }

  /**
   * Runs a pause chain.
   * @param {Function} callback - The last pause handler in the chain.
   * @public
   * @returns {void}
   * @instance
   * @memberof Classes.PlaybackMiddleware
   */
  pause(callback: Function): void {
    this._middleware.run(PlaybackMiddleware.Actions.PAUSE, callback);
  }
}
