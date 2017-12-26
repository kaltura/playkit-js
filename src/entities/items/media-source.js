// @flow
import DrmData from './drm-data'
import type {DrmDataObject} from './drm-data'

export type MediaSourceObject = {
  mimetype: string,
  url: string,
  id?: string,
  bandwidth?: number,
  width?: number,
  height?: number,
  drmData?: Array<DrmDataObject>
};

export default class MediaSource {
  _url: string;
  _mimetype: string;
  _id: string;
  _bandwidth: number;
  _width: number;
  _height: number;
  _drmData: Array<DrmData>;

  get url(): string {
    return this._url;
  }

  get mimetype(): string {
    return this._mimetype;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string): void {
    this._id = value;
  }

  get bandwidth(): number {
    return this._bandwidth;
  }

  set bandwidth(value: number): void {
    this._bandwidth = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number): void {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number): void {
    this._height = value;
  }

  get drmData(): Array<DrmData> {
    return this._drmData;
  }

  set drmData(value: Array<DrmDataObject>): void {
    this._drmData = [];
    value.forEach(d => this._drmData.push(new DrmData(d.scheme, d.licenseUrl, d.certificate)));
  }

  constructor(mimetype: string, url: string, id?: string) {
    this._url = url;
    this._mimetype = mimetype;
    if (id) {
      this._id = id;
    }
  }

  toJSON(): MediaSourceObject {
    const response: MediaSourceObject = {
      mimetype: this.mimetype,
      url: this.url
    };
    if (this.id) response.id = this.id;
    if (this.bandwidth) response.bandwidth = this.bandwidth;
    if (this.width) response.width = this.width;
    if (this.height) response.height = this.height;
    if (this.drmData) {
      response.drmData = [];
      this.drmData.forEach(d => {
        if (response.drmData) {
          response.drmData.push(d.toJSON())
        }
      });
    }
    return response;
  }
}
