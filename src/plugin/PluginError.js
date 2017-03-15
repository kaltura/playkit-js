//@flow
import PlayerError from '../util/PlayerError';

export default class PluginError extends PlayerError {
  static TYPE: {[name: string]: Object} = {
    NOT_IMPLEMENTED_METHOD: {
      name: "NotImplementedPluginMethodException",
      message: function (method) {
        return `Plugin must implement ${method} method`;
      }
    },
    NOT_REGISTERED_PLUGIN: {
      name: "PluginNotRegisteredException",
      message: function (name) {
        return `Cannot load ${name} plugin. Name not found in the registry`;
      }
    },
    NOT_VALID_HANDLER: {
      name: "PluginHandlerIsNotValidException",
      message: function () {
        return "To activate plugin you must provide a class derived from BasePlugin";
      }
    }
  };

  constructor(error: Object, param?: any) {
    super(error.name, error.message(param));
  }
}
