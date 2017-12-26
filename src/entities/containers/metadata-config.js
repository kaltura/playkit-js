// @flow
export type MetadataConfigObject = {
  poster: string,
  description: string
};

export default class MetadataConfig {
  constructor(config?: MetadataConfigObject) {
    this.poster = (config && config.poster) || '';
    this.description = (config && config.description) || '';
  }

  _poster: string;

  get poster(): string {
    return this._poster;
  }

  set poster(value: string): void {
    this._poster = value;
  }

  _description: string;

  get description(): string {
    return this._description;
  }

  set description(value: string): void {
    this._description = value;
  }

  toJSON(): MetadataConfigObject {
    return {
      poster: this.poster,
      description: this.description
    };
  }
}
