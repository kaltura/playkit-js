// @flow
import BaseMiddleware from '../../src/middleware/base-middleware';

/**
 * @namespace IMiddlewareProvider
 * @memberof Interfaces
 * @interface
 */
declare interface IMiddlewareProvider {
  getMiddlewareImpl(): BaseMiddleware;
}
