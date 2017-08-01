//@flow

/**
 * @typedef {Source}
 * @memberof Types
 * @extends {Object}
 */
export type Source = {
  mimetype: string,
  url: string,
  id: ?string,
  bandwidth: ?number,
  width: ?number,
  height: ?number
};
