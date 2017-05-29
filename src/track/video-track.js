//@flow
import Track from './track'

export default class VideoTrack extends Track {
  _id: string;

  get id(): string {
    return this._id;
  }

  constructor(settings: Object = {}) {
    super(settings);
    this._id = settings.id;
  }
}
