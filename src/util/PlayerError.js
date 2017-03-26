//@flow
export default class PlayerError {
  name: string;
  message: string;

  constructor(name: string, message: string) {
    this.name = name;
    this.message = message;
  }

  getError() {
    return {
      name: this.name,
      message: this.message
    };
  }
}
