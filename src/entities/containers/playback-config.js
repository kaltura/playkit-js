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

export default class PlaybackConfig {
  constructor(config?: PlaybackConfigObject) {
    this._streamPriority = new StreamPriorityList();
    this._preferNative = new PreferNativeConfig();
    this.audioLanguage = (config && config.audioLanguage) || '';
    this.textLanguage = (config && config.textLanguage) || '';
    this.useNativeTextTrack = (config && config.useNativeTextTrack) || false;
    this.volume = (config && config.volume) || 1;
    this.playsinline = (config && config.playsinline) || true;
    this.preload = (config && config.preload) || Preload.NONE;
    this.autoplay = (config && config.autoplay) || false;
    this.allowMutedAutoPlay = (config && config.allowMutedAutoPlay) || true;
    this.muted = (config && config.muted) || false;
    if (config && config.preferNative) {
      this.preferNative = config.preferNative;
    }
    if (config && config.streamPriority) {
      this.streamPriority = config.streamPriority;
    } else {
      this._streamPriority.list.push(new StreamPriorityItem(EngineName.HTML5, FormatName.HLS));
      this._streamPriority.list.push(new StreamPriorityItem(EngineName.HTML5, FormatName.DASH));
      this._streamPriority.list.push(new StreamPriorityItem(EngineName.HTML5, FormatName.PROGRESSIVE));
    }
  }

  _audioLanguage: string;

  get audioLanguage(): string {
    return this._audioLanguage;
  }

  set audioLanguage(value: string): void {
    if (typeof value === 'string') {
      this._audioLanguage = value;
    }
  }

  _textLanguage: string;

  get textLanguage(): string {
    return this._textLanguage;
  }

  set textLanguage(value: string): void {
    if (typeof value === 'string') {
      this._textLanguage = value;
    }
  }

  _useNativeTextTrack: boolean;

  get useNativeTextTrack(): boolean {
    return this._useNativeTextTrack;
  }

  set useNativeTextTrack(value: boolean): void {
    if (typeof value === 'boolean') {
      this._useNativeTextTrack = value;
    }
  }

  _volume: number;

  get volume(): number {
    return this._volume;
  }

  set volume(value: number): void {
    if (typeof value === 'number') {
      this._volume = value;
    }
  }

  _playsinline: boolean;

  get playsinline(): boolean {
    return this._playsinline;
  }

  set playsinline(value: boolean): void {
    if (typeof value === 'boolean') {
      this._playsinline = value;
    }
  }

  _preload: string;

  get preload(): string {
    return this._preload;
  }

  set preload(value: string): void {
    if (typeof value === 'string' && (value === Preload.NONE || value === Preload.AUTO)) {
      this._preload = value;
    }
  }

  _autoplay: boolean;

  get autoplay(): boolean {
    return this._autoplay;
  }

  set autoplay(value: boolean): void {
    if (typeof value === 'boolean') {
      this._autoplay = value;
    }
  }

  _allowMutedAutoPlay: boolean;

  get allowMutedAutoPlay(): boolean {
    return this._allowMutedAutoPlay;
  }

  set allowMutedAutoPlay(value: boolean): void {
    if (typeof value === 'boolean') {
      this._allowMutedAutoPlay = value;
    }
  }

  _muted: boolean;

  get muted(): boolean {
    return this._muted;
  }

  set muted(value: boolean): void {
    if (typeof value === 'boolean') {
      this._muted = value;
    }
  }

  _streamPriority: StreamPriorityList;

  get streamPriority(): Array<StreamPriorityItem> {
    return this._streamPriority.list;
  }

  set streamPriority(value: Array<StreamPriorityObject>): void {
    this._streamPriority.list = value;
  }

  _preferNative: PreferNativeConfig;

  get preferNative(): PreferNativeConfig {
    return this._preferNative;
  }

  set preferNative(value: PreferNativeConfigObject) {
    if (typeof value.dash === 'boolean') {
      this._preferNative.dash = value.dash;
    }
    if (typeof value.hls === 'boolean') {
      this._preferNative.hls = value.hls;
    }
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
