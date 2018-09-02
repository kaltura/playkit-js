// @flow
class AdError {
  _fatal: boolean;
  _code: ?number;
  _message: ?string;

  constructor(fatal: boolean, options: PKAdErrorOptions) {
    this._fatal = fatal;
    this._code = options.code;
    this._message = options.message;
  }

  get fatal(): boolean {
    return this._fatal;
  }

  get code(): ?number {
    return this._code;
  }

  get message(): ?string {
    return this._message;
  }
}

export {AdError};
