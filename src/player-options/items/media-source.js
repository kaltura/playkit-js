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
    if (typeof value !== 'string') return;
    this._id = value;
  }

  get bandwidth(): number {
    return this._bandwidth;
  }

  set bandwidth(value: number): void {
    if (typeof value !== 'number') return;
    this._bandwidth = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number): void {
    if (typeof value !== 'number') return;
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number): void {
    if (typeof value !== 'number') return;
    this._height = value;
  }

  get drmData(): Array<DrmData> {
    return this._drmData;
  }

  set drmData(value: Array<DrmDataObject>): void {
    this._drmData = [];
    value.forEach(d => this._drmData.push(new DrmData(d.scheme, d.licenseUrl, d.certificate)));
  }

  constructor(mimetype: string | MediaSourceObject, url: string, id?: string) {
    validate(mimetype, url);
    if (typeof mimetype === 'string') {
      this._url = url;
      this._mimetype = mimetype;
      if (id) {
        this.id = id;
      }
    } else if (typeof mimetype === 'object') {
      this.fromJSON(mimetype);
    }
  }

  fromJSON(json: MediaSourceObject): void {
    this._url = json.url;
    this._mimetype = json.mimetype;
    if (json.id) {
      this.id = json.id;
    }
    if (json.bandwidth) {
      this.bandwidth = json.bandwidth;
    }
    if (json.height) {
      this.height = json.height;
    }
    if (json.width) {
      this.width = json.width;
    }
    if (json.drmData) {
      this.drmData = json.drmData;
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

/**
 * Validate user input
 * @param {Array<any>} params - user input
 * @returns {void}
 */
function validate(...params: Array<any>): void {
  if (typeof params[0] === 'string' && typeof params[1] === 'string') return;
  if (typeof params[0] === 'object' && typeof params[0].mimetype === 'string' && typeof params[0].url === 'string') return;
  throw new TypeError('Invalid MediaSource: mimetype and url must be provided and be strings');
}
