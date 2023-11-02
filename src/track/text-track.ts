import Track from './track';
import Error from '../error/error';

type TrackSettings = {
  kind?: string;
  external?: boolean;
  default?: boolean;
  active?: boolean;
  label?: string;
  language?: string;
};

export default class TextTrack extends Track {
  static MODE: Record<'DISABLED' | 'SHOWING' | 'HIDDEN', TextTrackMode> = {
    DISABLED: 'disabled',
    SHOWING: 'showing',
    HIDDEN: 'hidden'
  };

  static KIND: {[kind: string]: TextTrackKind } = {
    METADATA: 'metadata',
    SUBTITLES: 'subtitles',
    CAPTIONS: 'captions'
  };

  static EXTERNAL_TRACK_ID = 'playkit-external-track';
  static _tracksCount: number = 0;

  private _kind: string;
  private _external: boolean;
  private _default: boolean;
  private _mode: string | undefined;

  constructor(settings: TrackSettings = {}) {
    super(settings);
    this._kind = settings.kind || '';
    this._external = settings.external || false;
    this._default = settings.default || false;
    this._index = TextTrack._generateIndex();
  }

  static _generateIndex(): number {
    return TextTrack._tracksCount++;
  }

  static reset(): void {
    TextTrack._tracksCount = 0;
  }

  get mode(): string | undefined {
    return this._mode;
  }
  set mode(mode: string) {
    this._mode = mode;
  }

  get kind(): string {
    return this._kind;
  }

  get external(): boolean {
    return this._external;
  }

  get default(): boolean {
    return this._default;
  }

  static isMetaDataTrack(track: any): boolean {
    return track && track.kind === TextTrack.KIND.METADATA;
  }

  static isNativeTextTrack(track: any): boolean {
    return track && [TextTrack.KIND.SUBTITLES, TextTrack.KIND.CAPTIONS].includes(track.kind);
  }

  static isExternalTrack(track: any): boolean {
    return track && [track.language, track.label].includes(TextTrack.EXTERNAL_TRACK_ID);
  }
}

/**
 * Normalize cues to be of type of VTT model.
 * @param {TextTrackCueList} textTrackCueList - The text track cue list contains the cues.
 * @returns {void}
 * @private
 */
function getActiveCues(textTrackCueList: TextTrackCueList): Array<VTTCue> {
  let normalizedCues: Array<VTTCue> = [];
  // @ts-ignore
  for (let cue of textTrackCueList) {
    //Normalize cues to be of type of VTT model
    // @ts-ignore
    if ((VTTCue && cue instanceof VTTCue) || (DataCue && cue instanceof window.DataCue)) {
      normalizedCues.push(cue);
    } else if (TextTrackCue && cue instanceof TextTrackCue) {
      try {
        // @ts-ignore
        normalizedCues.push(new VTTCue(cue.startTime, cue.endTime, cue.text));
      } catch (error) {
        new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.UNABLE_TO_CREATE_TEXT_CUE, error);
      }
    }
  }
  return normalizedCues;
}

export {getActiveCues};
