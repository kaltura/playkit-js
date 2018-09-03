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
    // $FlowFixMe
    const adPlugin: IAdsControllerProvider = this._pluginManager.getAll().find(plugin => typeof plugin.getAdsController === 'function');
    return adPlugin && adPlugin.getAdsController();
  }
}

export {ControllerProvider};
