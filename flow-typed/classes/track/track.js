//@flow
export default class Track {
  _id: string;
  _active: boolean;
  _label: string;

  get id(): string {
    return this._id;
  }

  get active(): boolean {
    return this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }

  get label(): string {
    return this._label;
  }

  constructor(settings: Object = {}) {
    this._id = settings.id;
    this._active = settings.active;
    this._label = settings.label;
  }
}
