//@flow
export default class Track {
  _id: string;
  _active: boolean;
  _type: string;
  _language: string;

  get id(): string {
    return this._id;
  }

  get active(): boolean {
    return this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }

  get type(): string {
    return this._type;
  }

  get language(): string {
    return this._language;
  }

  constructor(id: string, active: boolean, language: string) {
    this._id = id;
    this._active = active;
    this._language = language;
  }
}
