//@flow
import Track from './track';

const ImageTrack: ImageTrack = class ImageTrack extends Track {
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
    const {url, width, height, duration, rows, cols, customData} = settings;
    this._url = url;
    this._width = width;
    this._height = height;
    this._duration = duration;
    this._customData = customData;
    this._rows = rows || 1;
    this._cols = cols || 1;
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
};

export default ImageTrack;
