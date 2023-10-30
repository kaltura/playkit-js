import {PKTrack} from './playkit-track';

type TrackSettings = {
  kind?: string;
  external?: boolean;
  default?: boolean;
  active?: boolean;
  label?: string;
  language?: string;
};

class PKTextTrack extends PKTrack {
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
    this._index = PKTextTrack._generateIndex();
  }

  static _generateIndex(): number {
    return PKTextTrack._tracksCount++;
  }

  static reset(): void {
    PKTextTrack._tracksCount = 0;
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
    return track && track.kind === PKTextTrack.KIND.METADATA;
  }

  static isNativeTextTrack(track: any): boolean {
    return track && [PKTextTrack.KIND.SUBTITLES, PKTextTrack.KIND.CAPTIONS].includes(track.kind);
  }

  static isExternalTrack(track: any): boolean {
    return track && [track.language, track.label].includes(PKTextTrack.EXTERNAL_TRACK_ID);
  }
}

export default PKTextTrack;
