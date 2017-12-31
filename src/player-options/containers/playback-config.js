// @flow
import StreamPriorityList from '../lists/stream-priority-list'
import StreamPriorityItem, {EngineName, FormatName} from '../items/stream-priority'
import type {StreamPriorityObject} from '../items/stream-priority'
import PreferNativeConfig from './prefer-native-config'
import type {PreferNativeConfigObject} from './prefer-native-config'

export type PlaybackConfigObject = {
  audioLanguage: string,
  textLanguage: string,
  useNativeTextTrack: boolean,
  volume: number,
  playsinline: boolean,
  preload: string,
  autoplay: boolean,
  allowMutedAutoPlay: boolean,
  muted: boolean,
  streamPriority: Array<StreamPriorityObject>,
  preferNative: PreferNativeConfigObject
};

export const Preload: { [value: string]: string } = {
  NONE: 'none',
  AUTO: 'auto'
};

export const defaultPlaybackConfigObject: PlaybackConfigObject = {
  audioLanguage: '',
  textLanguage: '',
  useNativeTextTrack: false,
  volume: 1,
  playsinline: true,
  preload: Preload.NONE,
  autoplay: false,
  allowMutedAutoPlay: true,
  muted: false,
  streamPriority: [{
    engine: EngineName.HTML5,
    format: FormatName.HLS
  }, {
    engine: EngineName.HTML5,
    format: FormatName.DASH
  }, {
    engine: EngineName.HTML5,
    format: FormatName.PROGRESSIVE
  }],
  preferNative: {
    hls: false,
    dash: false
  }
};

export default class PlaybackConfig {
  _audioLanguage: string;
  _textLanguage: string;
  _useNativeTextTrack: boolean;
  _volume: number;
  _playsinline: boolean;
  _preload: string;
  _autoplay: boolean;
  _allowMutedAutoPlay: boolean;
  _muted: boolean;
  _preferNative: PreferNativeConfig;
  _streamPriority: StreamPriorityList;

  get audioLanguage(): string {
    return this._audioLanguage;
  }

  set audioLanguage(value: string): void {
    if (typeof value !== 'string') return;
    this._audioLanguage = value;
  }

  get textLanguage(): string {
    return this._textLanguage;
  }

  set textLanguage(value: string): void {
    if (typeof value !== 'string') return;
    this._textLanguage = value;
  }

  get useNativeTextTrack(): boolean {
    return this._useNativeTextTrack;
  }

  set useNativeTextTrack(value: boolean): void {
    if (typeof value !== 'boolean') return;
    this._useNativeTextTrack = value;
  }

  get volume(): number {
    return this._volume;
  }

  set volume(value: number): void {
    if (typeof value !== 'number') return;
    this._volume = value;
  }

  get playsinline(): boolean {
    return this._playsinline;
  }

  set playsinline(value: boolean): void {
    if (typeof value !== 'boolean') return;
    this._playsinline = value;
  }

  get preload(): string {
    return this._preload;
  }

  set preload(value: string): void {
    if (typeof value === 'string' && (value === Preload.NONE || value === Preload.AUTO)) {
      this._preload = value;
    }
  }

  get autoplay(): boolean {
    return this._autoplay;
  }

  set autoplay(value: boolean): void {
    if (typeof value !== 'boolean') return;
    this._autoplay = value;
  }

  get allowMutedAutoPlay(): boolean {
    return this._allowMutedAutoPlay;
  }

  set allowMutedAutoPlay(value: boolean): void {
    if (typeof value !== 'boolean') return;
    this._allowMutedAutoPlay = value;
  }

  get muted(): boolean {
    return this._muted;
  }

  set muted(value: boolean): void {
    if (typeof value !== 'boolean') return;
    this._muted = value;
  }

  get streamPriority(): Array<StreamPriorityItem> {
    return this._streamPriority.list;
  }

  set streamPriority(value: Array<StreamPriorityObject> | StreamPriorityList): void {
    if (value instanceof StreamPriorityList) {
      this._streamPriority = value;
    } else if (Array.isArray(value)) {
      this._streamPriority.list = value;
    }
  }

  get preferNative(): PreferNativeConfig {
    return this._preferNative;
  }

  set preferNative(value: PreferNativeConfigObject) {
    this._preferNative.dash = value.dash;
    this._preferNative.hls = value.hls;
  }

  constructor(config: PlaybackConfigObject = defaultPlaybackConfigObject) {
    this.audioLanguage = config.audioLanguage || defaultPlaybackConfigObject.audioLanguage;
    this.textLanguage = config.textLanguage || defaultPlaybackConfigObject.textLanguage;
    this.useNativeTextTrack = (config.useNativeTextTrack === undefined) ? defaultPlaybackConfigObject.useNativeTextTrack : config.useNativeTextTrack;
    this.playsinline = (config.playsinline === undefined) ? defaultPlaybackConfigObject.playsinline : config.playsinline;
    this.preload = config.preload || defaultPlaybackConfigObject.preload;
    this.autoplay = (config.autoplay === undefined) ? defaultPlaybackConfigObject.autoplay : config.autoplay;
    this.allowMutedAutoPlay = (config.allowMutedAutoPlay === undefined) ? defaultPlaybackConfigObject.allowMutedAutoPlay : config.allowMutedAutoPlay;
    this.muted = (config.muted === undefined) ? defaultPlaybackConfigObject.muted : config.muted;
    this.volume = (config.volume === undefined) ? defaultPlaybackConfigObject.volume : config.volume;
    this._streamPriority = new StreamPriorityList(config.streamPriority || defaultPlaybackConfigObject.streamPriority);
    this._preferNative = new PreferNativeConfig(config.preferNative || defaultPlaybackConfigObject.preferNative);
  }

  toJSON(): PlaybackConfigObject {
    return {
      audioLanguage: this.audioLanguage,
      textLanguage: this.textLanguage,
      useNativeTextTrack: this.useNativeTextTrack,
      volume: this.volume,
      playsinline: this.playsinline,
      preload: this.preload,
      autoplay: this.autoplay,
      allowMutedAutoPlay: this.allowMutedAutoPlay,
      muted: this.muted,
      streamPriority: this._streamPriority.toJSON(),
      preferNative: this._preferNative.toJSON()
    };
  }
}
