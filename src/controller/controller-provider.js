//@flow

import PluginManager from '../plugin/plugin-manager';

class ControllerProvider {
  _pluginManager: PluginManager;

  constructor(pluginManager: PluginManager) {
    this._pluginManager = pluginManager;
  }

  getAdsController(): IAdsController {
    // $FlowFixMe
    const adPlugin: IAdsControllerProvider = this._pluginManager.getAll().find(plugin => typeof plugin.getAdsController === 'function');
    return adPlugin && adPlugin.getAdsController();
  }
}

export {ControllerProvider};
