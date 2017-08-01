//@flow

/**
 * @namespace Track
 * @abstract Track
 * @memberof Classes
 */
export default class Track {
  _id: ?string;
  _active: boolean;
  _label: string;
  _language: string;
  _index: number;

  /**
   * The id of the track.
   * @public
   * @returns {?string} - The track id.
   * @memberof Classes.Track
   * @instance
   */
  get id(): ?string {
    return this._id;
  }

  /**
   * The active mode of the track.
   * @public
   * @returns {boolean} - The active mode of the track.
   * @memberof Classes.Track
   * @instance
   */
  get active(): boolean {
    return this._active;
  }

  /**
   * @public
   * @param {boolean} value - Whether the track is active or not.
   * @memberof Classes.Track
   * @instance
   */
  set active(value: boolean) {
    this._active = value;
  }

  /**
   * The label of the track.
   * @public
   * @returns {string} - The label of the track.
   * @memberof Classes.Track
   * @instance
   */
  get label(): string {
    return this._label;
  }

  /**
   * The language of the track.
   * @public
   * @returns {string} - The language of the track.
   * @memberof Classes.Track
   * @instance
   */
  get language(): string {
    return this._language;
  }

  /**
   * The index of the track.
   * @public
   * @returns {number} - The index of the track.
   * @memberof Classes.Track
   * @instance
   */
  get index(): number {
    return this._index;
  }

  constructor(settings: Object = {}) {
    this._id = settings.id;
    this._active = settings.active;
    this._label = settings.label;
    this._language = settings.language;
    this._index = settings.index;
  }
}
