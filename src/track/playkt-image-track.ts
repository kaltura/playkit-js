import {PKTrack} from './playkit-track';

class PKImageTrack extends PKTrack {
  _url: string;
  _width: number;
  _height: number;
  _duration: number;
  _rows: number;
  _cols: number;
  _customData: any;

  constructor(settings: {
    id: string,
    active: boolean,
    index: number,
    url: string,
    width: number,
    height: number,
    duration: number,
    rows: number,
    cols: number,
    customData: any
  }) {
    super(settings);
    this._url = settings.url;
    this._width = settings.width;
    this._height = settings.height;
    this._duration = settings.duration;
    this._customData = settings.customData;
    this._rows = settings.rows || 1;
    this._cols = settings.cols || 1;
  }

  get url() {
    return this._url;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get duration() {
    return this._duration;
  }

  get rows() {
    return this._rows;
  }

  get cols() {
    return this._cols;
  }

  get customData() {
    return this._customData;
  }

  get sliceWidth() {
    return this._width / this._cols;
  }

  get sliceHeight() {
    return this._height / this._rows;
  }
}

export default PKImageTrack;
