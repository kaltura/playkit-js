//@flow
import Track from './track'

/**
 * Text track representation of the player.
 * @classdesc
 */
export default class TextTrack extends Track {
  static DefaultTextTrackSettings: TextTrackSettings = {
    active: false,
    index: -1,
    id: undefined,
    label: undefined,
    language: undefined,
    kind: undefined
  };

  /**
   * The kind of the text track:
   * subtitles/captions/metadata.
   * @member
   * @type {?string}
   * @private
   */
  _kind: ?string;

  /**
   * Getter for the kind of the text track.
   * @public
   * @returns {?string} - The kind of the text track.
   */
  get kind(): ?string {
    return this._kind;
  }

  /**
   * @constructor
   * @param {TextTrackSettings} settings - The track settings object.
   */
  constructor(settings: TextTrackSettings = TextTrack.DefaultTextTrackSettings) {
    super(settings);
    this._kind = settings.kind;
  }
}

export {TextTrack};
