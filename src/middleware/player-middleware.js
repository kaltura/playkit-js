// @flow
import Middleware from './middleware'

export default class PlayerMiddleware {

  static Actions: { [action: string]: string } = {
    PLAY: 'play',
    PAUSE: 'pause'
  };

  _middleware: Middleware;

  constructor() {
    this._middleware = new Middleware(PlayerMiddleware.Actions);
  }

  use(playerMiddleware: Object): void {
    this._middleware.use(playerMiddleware);
  }

  play(callback: Function): void {
    this._middleware.run(PlayerMiddleware.Actions.PLAY, callback);
  }
}

const PlayerMiddlewareActions = PlayerMiddleware.Actions;
export {PlayerMiddlewareActions};
