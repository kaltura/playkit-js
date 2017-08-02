// @flow
import BaseMiddleware from '../../src/middleware/base-middleware';

/**
 * @memberof Interfaces
 * @interface IMiddlewareProvider
 */
declare interface IMiddlewareProvider {
  getMiddlewareImpl(): BaseMiddleware;
}
