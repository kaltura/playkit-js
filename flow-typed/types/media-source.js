// @flow

/**
 * @typedef {Object} PKMediaSourceObject
 * @property {string} mimetype
 * @property {string} url
 * @property {string} [id]
 * @property {number} [bandwidth]
 * @property {number} [width]
 * @property {number} [height]
 * @property {PKDrmDataObject} [drmData]
 * @memberof Types
 */
type _PKMediaSourceObject = {
  mimetype: string,
  url: string,
  id?: string,
  bandwidth?: number,
  width?: number,
  height?: number,
  drmData?: Array<PKDrmDataObject>
};

declare type PKMediaSourceObject = _PKMediaSourceObject;
