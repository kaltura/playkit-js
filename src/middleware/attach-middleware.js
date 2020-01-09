// @flow
import BaseMiddleware from './base-middleware';

/**
 * Middleware implementation for bumper plugin.
 * @classdesc
 */
class AttachMiddleware extends BaseMiddleware {
  id: string = 'AttachMiddleware';
  _context: Player;

  /**
   * @constructor
   * @param {Player} context - The Player context.
   */
  constructor(context: Player) {
    super();
    this._context = context;
  }

  /**
   * Play middleware handler.
   * @param {Function} next - The next play handler in the middleware chain.
   * @returns {void}
   */
  play(next: Function): void {
    if (!this._context.src) {
      this._context._load();
    }
    this.callNext(next);
  }
}

export {AttachMiddleware};
