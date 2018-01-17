// @flow

/**
 * @typedef {Object} PKDrmDataObject
 * @property {string} licenseUrl
 * @property {string} scheme
 * @property {string} [certificate]
 * @memberof Types
 */
type _PKDrmDataObject = {
  licenseUrl: string;
  scheme: string;
  certificate?: string;
};

declare type PKDrmDataObject = _PKDrmDataObject;
