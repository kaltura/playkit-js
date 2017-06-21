// @flow
import Middleware from './middleware'
import PlayerMiddlewareBase from './player-middleware-base'

export default class PlayerMiddleware {

  static Actions: { [action: string]: string } = {
    PLAY: 'play',
    PAUSE: 'pause'
  };

  _middleware: Middleware;

  constructor() {
    this._middleware = new Middleware(PlayerMiddleware.Actions);
  }

  use(playerMiddleware: PlayerMiddlewareBase): void {
    this._middleware.use(playerMiddleware);
  }

  play(callback: Function): void {
    this._middleware.run(PlayerMiddleware.Actions.PLAY, callback);
  }

  pause(callback: Function): void {
    this._middleware.run(PlayerMiddleware.Actions.PAUSE, callback);
  }
}
