// @flow

/**
 * @typedef {Object} PKMetadataConfigObject
 * @property {string} poster
 * @property {string} [string]
 * @memberof Types
 */
type _PKMetadataConfigObject = {
  poster: string,
  description?: string
};

declare type PKMetadataConfigObject = _PKMetadataConfigObject;
