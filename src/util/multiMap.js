// @flow
/**
 * A simple multimap template.
 * @constructor
 * @struct
 * @template T
 */
class MultiMap<T> {
  map_: Map<string, T[]>;

  constructor() {
    /** @private {!Object.<string, !Array.<T>>} */
    this.map_ = new Map();
  }

  /**
   * Add a key, value pair to the map.
   * @param {string} key
   * @param {T} value
   */
  push(key: string, value: T) {
    if (this.map_.has(key)) {
      let list = this.map_.get(key);
      if (Array.isArray(list)) {
        list.push(value);
        this.map_.set(key, list);
      }
    } else {
      this.map_.set(key, [value]);
    }
  }


  /**
   * Set an array of values for the key, overwriting any previous data.
   * @param {string} key
   * @param {!Array.<T>} values
   */
  set(key: string, values: T[]) {
    this.map_.set(key, values);
  }


  /**
   * Check for a key.
   * @param {string} key
   * @return {boolean} true if the key exists.
   */
  has(key: string): boolean {
    return this.map_.has(key);
  }

  /**
   * Get a list of values by key.
   * @param {string} key
   * @return {Array.<T>} or null if no suZch key exists.
   */
  get(key: string): Array<T> {
    let list = this.map_.get(key);
    // slice() clones the list so that it and the map can each be modified
    // without affecting the other.
    return list ? list.slice() : [];
  }


  /**
   * Get a list of all values.
   * @return {!Array.<T>}
   */
  getAll(): T[] {
    let list: T[] = [];
    for (var value of this.map_.values()) {
      list = list.concat(value);
    }
    return list;
  }


  /**
   * Remove a specific value, if it exists.
   * @param {string} key
   * @param {T} value
   */
  remove(key: string, value: T) {
    if (!this.map_.has(key)) return;
    let list = this.map_.get(key);
    if (Array.isArray(list)) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i] == value) {
          list.splice(i, 1);
          --i;
        }
      }
    }
  }


  /**
   * Get all keys from the multimap.
   * @return {!Array.<string>}
   */
  // eslint-disable-next-line no-undef
  keys(): Iterator<string> {
    return this.map_.keys();
  }


  /**
   * Clear all keys and values from the multimap.
   */
  clear() {
    this.map_.clear();
  }
}

export default MultiMap;
