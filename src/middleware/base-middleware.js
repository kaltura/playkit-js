// @flow

/**
 * @virtual BaseMiddleware
 * @namespace BaseMiddleware
 * @memberof Classes
 * @typedef {BaseMiddleware}
 */
export default class BaseMiddleware {
  /**
   * The id of the middleware instance.
   * @public
   * @abstract id
   * @public
   * @memberof Classes.BaseMiddleware
   */
  id: string;

  /**
   * @param {Function} next - The next handler in the middleware chain.
   * @returns {void}
   * @virtual callNext
   * @public
   * @memberof Classes.BaseMiddleware
   */
  callNext(next: Function): void {
    if (next) {
      next();
    }
  }
}

