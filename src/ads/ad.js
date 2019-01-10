// @flow

class Ad {
  _id: string;
  _url: ?string;
  _contentType: ?string;
  _title: ?string;
  _position: ?number;
  _duration: ?number;
  _clickThroughUrl: ?string;
  _posterUrl: ?string;
  _skipOffset: ?number;
  _linear: ?boolean;
  _width: number;
  _height: number;
  _bitrate: number;

  constructor(id: string, options: PKAdOptions) {
    this._id = id;
    this._url = options.url;
    this._contentType = options.contentType;
    this._title = options.title;
    this._position = options.position;
    this._duration = options.duration;
    this._clickThroughUrl = options.clickThroughUrl;
    this._posterUrl = options.posterUrl;
    this._skipOffset = options.skipOffset;
    this._linear = options.linear;
    this._width = options.width || 0;
    this._height = options.height || 0;
    this._bitrate = options.bitrate || 0;
  }

  get id(): string {
    return this._id;
  }

  get contentType(): ?string {
    return this._contentType;
  }

  get url(): ?string {
    return this._url;
  }

  get title(): ?string {
    return this._title;
  }

  get position(): ?number {
    return this._position;
  }

  get duration(): ?number {
    return this._duration;
  }

  get clickThroughUrl(): ?string {
    return this._clickThroughUrl;
  }

  get posterUrl(): ?string {
    return this._posterUrl;
  }

  get skipOffset(): ?number {
    return this._skipOffset;
  }

  get linear(): ?boolean {
    return this._linear;
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  get bitrate(): number {
    return this._bitrate;
  }

  get skippable(): boolean {
    return !!(this.skipOffset && this.skipOffset > 0);
  }

  toJSON(): Object {
    return {
      id: this.id,
      url: this.url,
      contentType: this.contentType,
      title: this.title,
      position: this.position,
      duration: this.duration,
      clickThroughUrl: this.clickThroughUrl,
      posterUrl: this.posterUrl,
      skipOffset: this.skipOffset,
      linear: this.linear,
      skippable: this.skippable,
      width: this.width,
      height: this.height,
      bitrate: this.bitrate
    };
  }
}

export {Ad};
