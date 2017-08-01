//@flow

/**
 * @namespace IPlugin
 * @memberof Interfaces
 * @interface
 */
declare interface IPlugin {
  getConfig(attr?: string): any;

  updateConfig(update: Object): void;

  destroy(): void;
}
