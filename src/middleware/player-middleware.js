// @flow
import Middleware from './middleware'

export default class PlayerMiddleware {

  static Actions: { [action: string]: string } = {
    LOAD: 'load',
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

  load(callback: Function): Promise<*> {
    return Promise.resolve(this._middleware.run(PlayerMiddleware.Actions.LOAD, callback));
  }

  play(callback: Function): void {
    this._middleware.run(PlayerMiddleware.Actions.PLAY, callback);
  }

  pause(callback: Function): void {
    this._middleware.run(PlayerMiddleware.Actions.PAUSE, callback);
  }
}
