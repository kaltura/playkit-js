// @flow
export type MetadataConfigObject = {
  poster: string,
  description: string
};

export const defaultMetadataConfigObject: MetadataConfigObject = {
  poster: '',
  description: ''
};

export default class MetadataConfig {
  _poster: string;
  _description: string;

  get poster(): string {
    return this._poster;
  }

  set poster(value: string): void {
    if (typeof value !== 'string') return;
    this._poster = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string): void {
    if (typeof value !== 'string') return;
    this._description = value;
  }

  constructor(config: MetadataConfigObject = defaultMetadataConfigObject) {
    this.poster = config.poster || defaultMetadataConfigObject.poster;
    this.description = config.description || defaultMetadataConfigObject.description;
  }

  toJSON(): MetadataConfigObject {
    return {
      poster: this.poster,
      description: this.description
    };
  }
}
