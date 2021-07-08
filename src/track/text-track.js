//@flow
import Track from './track';

/**
 * Text track representation of the player.
 * @classdesc
 */
const TextTrack: TextTrack = class TextTrack extends Track {
  MODE: {[mode: string]: string};
  KIND: {[kind: string]: string};
  EXTERNAL_TRACK_ID: string;

  isMetaDataTrack: Function;
  isNativeTextTrack: Function;
  isExternalTrack: Function;

  /**
   * The kind of the text track:
   * subtitles/captions/metadata.
   * @member
   * @type {string}
   * @private
   */
  _kind: string;
  /**
   * flag to know if it's external or not
   * @member
   * @type {boolean}
   * @private
   */
  _external: boolean;

  /**
   * Getter for the kind of the text track.
   * @public
   * @returns {string} - The kind of the text track.
   */
  get kind(): string {
    return this._kind;
  }

  /**
   * Getter for the external of the text track.
   * @public
   * @returns {boolean} - The kind of the text track.
   */
  get external(): boolean {
    return this._external;
  }

  /**
   * @constructor
   * @param {Object} settings - The track settings object.
   */
  constructor(settings: Object = {}) {
    super(settings);
    // use language tag if no display label is available
    this._label = this.label || this.language;
    this._kind = settings.kind;
    this._external = settings.external;
  }
};

TextTrack.MODE = {
  DISABLED: 'disabled',
  SHOWING: 'showing',
  HIDDEN: 'hidden'
};

TextTrack.KIND = {
  METADATA: 'metadata',
  SUBTITLES: 'subtitles',
  CAPTIONS: 'captions'
};

TextTrack.EXTERNAL_TRACK_ID = 'playkit-external-track';

TextTrack.isMetaDataTrack = (track: any) => {
  return track && track.kind === TextTrack.KIND.METADATA;
};

TextTrack.isNativeTextTrack = (track: any) => {
  return track && [TextTrack.KIND.SUBTITLES, TextTrack.KIND.CAPTIONS].includes(track.kind);
};

TextTrack.isExternalTrack = (track: any) => {
  return track && [track.language, track.label].includes(TextTrack.EXTERNAL_TRACK_ID);
};

export default TextTrack;
