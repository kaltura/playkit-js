//@flow
export default class Track {
  _active: boolean;
  _label: string;
  _language: string;
  _index: number;

  get active(): boolean {
    return this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }

  get label(): string {
    return this._label;
  }

  get language(): string {
    return this._language;
  }

  get index(): number {
    return this._index;
  }

  constructor(settings: Object = {}) {
    this._active = settings.active;
    this._label = settings.label;
    this._language = settings.language;
    this._index = settings.index;
  }
}
