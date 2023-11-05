//@flow
import Track from './track';

class ImageTrack extends Track {
  private _url: string;
  private _width: number;
  private _height: number;
  private _duration: number;
  private _rows: number;
  private _cols: number;
  private _customData: any;

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

  public get url(): string {
    return this._url;
  }

  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }

  public get duration(): number {
    return this._duration;
  }

  public get rows(): number {
    return this._rows;
  }

  public get cols(): number {
    return this._cols;
  }

  public get customData(): any {
    return this._customData;
  }

  public get sliceWidth(): number {
    return this._width / this._cols;
  }

  public get sliceHeight(): number {
    return this._height / this._rows;
  }
}

export default ImageTrack;
