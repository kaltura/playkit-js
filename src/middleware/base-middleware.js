// @flow

/**
 * Base middleware.
 * @classdesc
 */
export default class BaseMiddleware {
  /**
   * Id of the middleware instance.
   * @public
   */
  id: string;

  /**
   * Calls the next handler in the middleware chain.
   * @param {Function} next - The next handler in the middleware chain.
   * @returns {void}
   */
  callNext(next: Function): void {
    if (next) {
      next();
    }
  }
}
