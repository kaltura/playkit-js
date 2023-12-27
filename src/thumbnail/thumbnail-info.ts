class ThumbnailInfo {
  private _url: string;
  private _width: number;
  private _height: number;
  private _x: number;
  private _y: number;

  constructor(info: {url: string, width: number, height: number, x: number, y: number}) {
    const {url, width, height, x, y} = info;
    this._url = url;
    this._width = width;
    this._height = height;
    this._x = x;
    this._y = y;
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

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }
}

export {ThumbnailInfo};
