// @flow
import MediaSourceList from '../lists/media-source-list'
import type {MediaSourceObject} from '../items/media-source'
import MediaSource from '../items/media-source'

export type SourcesConfigObject = {
  hls: Array<MediaSourceObject>,
  dash: Array<MediaSourceObject>,
  progressive: Array<MediaSourceObject>
};

export const defaultSourcesConfigObject: SourcesConfigObject = {
  hls: [],
  dash: [],
  progressive: []
};

export default class SourcesConfig {
  _hls: MediaSourceList;
  _dash: MediaSourceList;
  _progressive: MediaSourceList;

  get hls(): Array<MediaSource> {
    return this._hls.list;
  }

  set hls(value: Array<MediaSourceObject> | MediaSourceList): void {
    if (value instanceof MediaSourceList) {
      this._hls = value;
    } else if (Array.isArray(value)) {
      this._hls.list = value;
    }
  }

  get dash(): Array<MediaSource> {
    return this._dash.list;
  }

  set dash(value: Array<MediaSourceObject> | MediaSourceList): void {
    if (value instanceof MediaSourceList) {
      this._dash = value;
    } else if (Array.isArray(value)) {
      this._dash.list = value;
    }
  }

  get progressive(): Array<MediaSource> {
    return this._progressive.list;
  }

  set progressive(value: Array<MediaSourceObject> | MediaSourceList): void {
    if (value instanceof MediaSourceList) {
      this._progressive = value;
    } else if (Array.isArray(value)) {
      this._progressive.list = value;
    }
  }

  constructor(config: SourcesConfigObject = defaultSourcesConfigObject) {
    this._hls = new MediaSourceList(config.hls || defaultSourcesConfigObject.hls);
    this._dash = new MediaSourceList(config.dash || defaultSourcesConfigObject.dash);
    this._progressive = new MediaSourceList(config.progressive || defaultSourcesConfigObject.progressive);
  }

  toJSON(): SourcesConfigObject {
    return {
      hls: this._hls.toJSON(),
      dash: this._dash.toJSON(),
      progressive: this._progressive.toJSON()
    };
  }
}
