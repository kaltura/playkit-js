// @flow

/**
 * @typedef {Object} PKSessionConfigObject
 * @property {string} [id]
 * @property {string} [ks]
 * @property {number} [partnerId]
 * @property {number} [uiConfId]
 * @memberof Types
 */
type _PKSessionConfigObject = {
  id?: string,
  ks?: string,
  partnerId?: number,
  uiConfId?: number
};

declare type PKSessionConfigObject = _PKSessionConfigObject;
