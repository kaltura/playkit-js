//@flow
import BaseMiddleware from '../../src/middleware/base-middleware';

declare interface IPlugin {
  getConfig(attr?: string): any;
  updateConfig(update: Object): void;
  loadMedia(): void;
  destroy(): void;
  reset(): void;
  getMiddlewareImpl(): BaseMiddleware | null;
  getUIComponents(): Array<PKUIComponent>;
}
