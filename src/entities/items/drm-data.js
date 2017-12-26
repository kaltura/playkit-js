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

  set certificate(value: string) {
    this._certificate = value;
  }

  constructor(scheme: string, licenseUrl: string, certificate?: string) {
    this._scheme = scheme;
    this._licenseUrl = licenseUrl;
    if (certificate) {
      this._certificate = certificate;
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
