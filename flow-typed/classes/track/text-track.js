//@flow
import Track from './track'

export default class textTrack extends Track {
  _kind: string;

  get kind() {
    return this._kind;
  }

  constructor(settings: Object = {}) {
    super(settings);
    this._kind = settings.kind;
  }
}
