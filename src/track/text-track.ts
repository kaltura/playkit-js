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
  public static MODE: Record<'DISABLED' | 'SHOWING' | 'HIDDEN', TextTrackMode> = {
    DISABLED: 'disabled',
    SHOWING: 'showing',
    HIDDEN: 'hidden'
  };

  public static KIND: Record<'METADATA' | 'SUBTITLES' | 'CAPTIONS', TextTrackKind> = {
    METADATA: 'metadata',
    SUBTITLES: 'subtitles',
    CAPTIONS: 'captions'
  };

  public static EXTERNAL_TRACK_ID = 'playkit-external-track';
  private static _tracksCount: number = 0;

  private _kind: string;
  private _external: boolean;
  private _default: boolean;
  private _mode: string | undefined;

  constructor(settings: TrackSettings = {}) {
    super(settings);
    // use language tag if no display label is available
    this._label = this.label || this.language;
    this._kind = settings.kind!;
    this._external = settings.external!;
    this._index = TextTrack._generateIndex();
    this._default = settings.default || false;
  }

  public static _generateIndex(): number {
    return TextTrack._tracksCount++;
  }

  public static reset(): void {
    TextTrack._tracksCount = 0;
  }

  public get mode(): string | undefined {
    return this._mode;
  }
  public set mode(mode: string) {
    this._mode = mode;
  }

  public get kind(): string {
    return this._kind;
  }

  public get external(): boolean {
    return this._external;
  }

  public get default(): boolean {
    return this._default;
  }

  public static isMetaDataTrack(track: any): boolean {
    return track && track.kind === TextTrack.KIND.METADATA;
  }

  public static isNativeTextTrack(track: any): boolean {
    return track && [TextTrack.KIND.SUBTITLES, TextTrack.KIND.CAPTIONS].includes(track.kind);
  }

  public static isExternalTrack(track: any): boolean {
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
  const normalizedCues: Array<VTTCue> = [];
  // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
  // @ts-ignore
  for (const cue of textTrackCueList) {
    //Normalize cues to be of type of VTT model
    // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if ((VTTCue && cue instanceof VTTCue) || (window.DataCue && cue instanceof window.DataCue)) {
      normalizedCues.push(cue);
    } else if (TextTrackCue && cue instanceof TextTrackCue) {
      try {
        // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
        // @ts-ignore
        normalizedCues.push(new VTTCue(cue.startTime, cue.endTime, cue.text));
      } catch (error) {
        new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.UNABLE_TO_CREATE_TEXT_CUE, error);
      }
    }
  }
  return normalizedCues;
}

export { getActiveCues, TextTrack as PKTextTrack };
