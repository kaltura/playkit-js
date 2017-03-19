//@flow
export default class PlayerError {
  static TYPE: {[name: string]: Object} = {
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
    },
    NOT_IMPLEMENTED_METHOD: {
      name: "NotImplementedException",
      message: function (method) {
        return `${method} method not implemented`;
      }
    }
  };
  name: string;
  message: string;

  constructor(error: Object, param?: any) {
    this.name = error.name;
    this.message = error.message(param);
  }

  getError() {
    return {
      name: this.name,
      message: this.message
    };
  }

}
