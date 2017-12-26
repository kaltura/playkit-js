// @flow
export type DrmDataObject = {
  licenseUrl: string;
  scheme: string;
  certificate?: string;
};

export default class DrmData {
  constructor(scheme: string, licenseUrl: string, certificate?: string) {
    this._scheme = scheme;
    this._licenseUrl = licenseUrl;
    if (certificate) {
      this._certificate = certificate;
    }
  }

  _licenseUrl: string;

  get licenseUrl(): string {
    return this._licenseUrl;
  }

  _scheme: string;

  get scheme(): string {
    return this._scheme;
  }

  _certificate: string;

  get certificate(): string {
    return this._certificate;
  }

  set certificate(value: string) {
    this._certificate = value;
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
