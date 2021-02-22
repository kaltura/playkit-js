// @flow
class ThumbnailInfo {
  _url: string;
  _width: number;
  _height: number;
  _x: number;
  _y: number;

  constructor(info: {url: string, width: number, height: number, x: number, y: number}) {
    const {url, width, height, x, y} = info;
    this._url = url;
    this._width = width;
    this._height = height;
    this._x = x;
    this._y = y;
  }

  get url(): string {
    return this._url;
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }
}

export {ThumbnailInfo};
