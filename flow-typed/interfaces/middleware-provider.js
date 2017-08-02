// @flow
import BaseMiddleware from '../../src/middleware/base-middleware';

/**
 * @memberof Interfaces
 * @interface IMiddlewareProvider
 */
export interface IMiddlewareProvider {
  getMiddlewareImpl(): BaseMiddleware;
}
