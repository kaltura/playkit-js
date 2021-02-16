// @flow
class ThumbnailInfo {
  _url: string;
  _width: number;
  _height: number;
  _x: number;
  _y: number;

  set url(value: string) {
    this._url = value;
  }

  set width(value: number) {
    this._width = value;
  }

  set height(value: number) {
    this._height = value;
  }

  set x(value: number) {
    this._x = value;
  }

  set y(value: number) {
    this._y = value;
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
