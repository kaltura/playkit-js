// @flow
import BaseMiddleware from '../../src/middleware/base-middleware';

declare interface IMiddlewareProvider {
  getMiddlewareImpl(): BaseMiddleware;
}
