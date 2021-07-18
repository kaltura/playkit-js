//@flow
import Track from './track';
import {Cue} from './vtt-cue';
import Error from '../error/error';

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

/**
 * Normalize cues to be of type of VTT model.
 * @param {TextTrackCueList} textTrackCueList - The text track cue list contains the cues.
 * @returns {void}
 * @private
 */
function getActiveCues(textTrackCueList: TextTrackCueList) {
  let normalizedCues: Array<Cue> = [];
  for (let cue of textTrackCueList) {
    //Normalize cues to be of type of VTT model
    if (window.VTTCue && cue instanceof window.VTTCue) {
      normalizedCues.push(cue);
    } else if (window.TextTrackCue && cue instanceof window.TextTrackCue) {
      try {
        normalizedCues.push(new Cue(cue.startTime, cue.endTime, cue.text));
      } catch (error) {
        new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.UNABLE_TO_CREATE_TEXT_CUE, error);
      }
    }
  }
  return normalizedCues;
}

export default TextTrack;
export {getActiveCues};
