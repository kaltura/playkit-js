// @flow
export type DrmDataObject = {
  licenseUrl: string;
  scheme: string;
  certificate?: string;
};

export default class DrmData {
  _licenseUrl: string;
  _scheme: string;
  _certificate: string;

  get licenseUrl(): string {
    return this._licenseUrl;
  }

  get scheme(): string {
    return this._scheme;
  }

  get certificate(): string {
    return this._certificate;
  }

  set certificate(value: string): void {
    if (typeof value !== 'string') return;
    this._certificate = value;
  }

  constructor(scheme: string | DrmDataObject, licenseUrl: string, certificate?: string) {
    validate(scheme, licenseUrl);
    if (typeof scheme === 'string') {
      this._scheme = scheme;
      this._licenseUrl = licenseUrl;
      if (certificate) {
        this.certificate = certificate;
      }
    } else if (typeof scheme === 'object') {
      this.fromJSON(scheme);
    }
  }

  fromJSON(json: DrmDataObject): void {
    this._scheme = json.scheme;
    this._licenseUrl = json.licenseUrl;
    if (json.certificate) {
      this.certificate = json.certificate;
    }
  }

  toJSON(): DrmDataObject {
    const response: DrmDataObject = {
      licenseUrl: this.licenseUrl,
      scheme: this.scheme
    };
    if (this.certificate) response.certificate = this.certificate;
    return response;
  }
}

/**
 * Validate user input
 * @param {Array<any>} param - user input
 * @returns {void}
 */
function validate(...params: Array<any>): void {
  if (typeof params[0] === 'string' && typeof params[1] === 'string') return;
  if (typeof params[0] === 'object' && typeof params[0].scheme === 'string' && typeof params[0].licenseUrl === 'string') return;
  throw new TypeError('Invalid DrmData: scheme and licenseUrl must be provided and be strings');
}
