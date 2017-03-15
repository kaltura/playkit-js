//@flow
export default class PlayerError {
  static TYPE: {[name: string]: Object} = {
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
