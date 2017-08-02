//@flow

/**
 * @memberof Interfaces
 * @interface IPlugin
 */
export interface IPlugin {
  getConfig(attr?: string): any;
  updateConfig(update: Object): void;
  destroy(): void;
}
