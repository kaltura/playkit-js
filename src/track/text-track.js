//@flow
import Track from './track'

/**
 * @memberof Classes
 * @extends Track
 * @class TextTrack
 */
export default class TextTrack extends Track {
  _kind: string;

  /**
   * The kind of the text track: subtitles, captions or metadata.
   * @public
   * @returns {string} - The kind of the text track.
   * @memberof Classes.TextTrack
   * @instance
   */
  get kind(): string {
    return this._kind;
  }

  constructor(settings: Object = {}) {
    super(settings);
    this._kind = settings.kind;
  }
}
