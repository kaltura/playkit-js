//@flow
import Track from './track'

/**
 * Text track representation of the player.
 * @classdesc
 */
export default class TextTrack extends Track {
  /**
   * The kind of the text track:
   * subtitles/captions/metadata.
   * @member
   * @type {string}
   * @private
   */
  _kind: string;

  _external: boolean;

  _cues: Array<any>;

  _url: string;

  _type: string;

  /**
   * Getter for the kind of the text track.
   * @public
   * @returns {string} - The kind of the text track.
   */
  get kind(): string {
    return this._kind;
  }

  get type(): string{
    return this._type;
  }

  get external(): boolean {
    return this._external;
  }

  get cues() {
    return this._cues;
  }

  set cues(value: Array<any>) {
    this._cues = value;
  }

  get url(): string {
    return this._url;
  }

  /**
   * @constructor
   * @param {Object} settings - The track settings object.
   */
  constructor(settings: Object = {}) {
    super(settings);
    this._kind = settings.kind;
    this._external = settings.external;
    this._cues = settings.cues;
    this._url = settings.url;
    this._type = settings.type;
  }
}

export {TextTrack};
