//@flow

import PluginManager from '../plugin/plugin-manager';

/**
 * Controller provider
 * @classdesc
 */
class ControllerProvider {
  _pluginManager: PluginManager;

  /**
   * @constructor
   * @param {PluginManager} pluginManager - the plugin manager
   */
  constructor(pluginManager: PluginManager) {
    this._pluginManager = pluginManager;
  }

  /**
   * Get the ads controller of the current ads plugin.
   * @returns {?IAdsController} - the ads controller.
   */
  getAdsController(): ?IAdsController {
    //$FlowFixMe
    const adPlugin: ?IAdsControllerProvider = Array.from(this._pluginManager.getAll().values()).find(
      //$FlowFixMe
      plugin => typeof plugin.getAdsController === 'function'
    );
    return adPlugin && adPlugin.getAdsController();
  }
}

export {ControllerProvider};
