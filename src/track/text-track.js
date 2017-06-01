//@flow
import Track from './track'

export default class TextTrack extends Track {
  _kind: string;

  get kind(): string {
    return this._kind;
  }

  constructor(settings: Object = {}) {
    super(settings);
    this._kind = settings.kind;
  }
}
