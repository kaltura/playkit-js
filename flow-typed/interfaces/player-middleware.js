// @flow
import PlayerMiddlewareBase from '../../src/middleware/player-middleware-base';

declare interface IPlayerMiddlewareProvider {
  getPlayerMiddleware(): PlayerMiddlewareBase;
}
