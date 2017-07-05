// @flow
import BaseMiddleware from '../../src/middleware/base-middleware';

declare interface IPlayerMiddlewareProvider {
  getMiddlewareImpl(): BaseMiddleware;
}
