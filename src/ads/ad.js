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
  _skipOffset: ?number = -1;
  _linear: ?boolean;

  constructor(id: string) {
    this._id = id;
  }

  get id(): string {
    return this._id;
  }

  get contentType(): string {
    return this._contentType;
  }

  set contentType(value: string): void {
    this._contentType = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string): void {
    this._url = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string): void {
    this._title = value;
  }

  get position(): number {
    return this._position;
  }

  set position(value: number): void {
    this._position = value;
  }

  get duration(): number {
    return this._duration;
  }

  set duration(value: number): void {
    this._duration = value;
  }

  get clickThroughUrl(): string {
    return this._clickThroughUrl;
  }

  set clickThroughUrl(value: string): void {
    this._clickThroughUrl = value;
  }

  get posterUrl(): string {
    return this._posterUrl;
  }

  set posterUrl(value: string): void {
    this._posterUrl = value;
  }

  get skipOffset(): number {
    return this._skipOffset;
  }

  set skipOffset(value: number): void {
    this._skipOffset = value;
  }

  get linear(): boolean {
    return this._linear;
  }

  set linear(value: boolean): void {
    this._linear = value;
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
      skippable: this.skippable
    };
  }
}

export {Ad};
