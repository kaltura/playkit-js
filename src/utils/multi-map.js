//@flow

/**
 * A simple multimap template.
 * @constructor
 * @struct
 * @template T
 */
class MultiMap<K, T> {
  _map: Map<K, T[]>;

  constructor() {
    /** @private {!Object.<K, !Array.<T>>} */
    this._map = new Map();
  }

  /**
   * Add a key, value pair to the map.
   * @param {K} key -
   * @param {T} value  -
   * @returns {void}
   */
  push(key: K, value: T): void {
    if (this._map.has(key)) {
      let list = this._map.get(key);
      if (Array.isArray(list)) {
        list.push(value);
        this._map.set(key, list);
      }
    } else {
      this._map.set(key, [value]);
    }
  }

  /**
   * Set an array of values for the key, overwriting any previous data.
   * @param {K} key -
   * @param {!Array.<T>} values -
   * @returns {void}
   */
  set(key: K, values: T[]): void {
    this._map.set(key, values);
  }

  /**
   * Check for a key.
   * @param {K} key -
   * @return {boolean} true if the key exists.
   */
  has(key: K): boolean {
    return this._map.has(key);
  }

  /**
   * Get a list of values by key.
   * @param {K} key -
   * @return {Array.<T>} or null if no such key exists.
   */
  get(key: K): Array<T> {
    let list = this._map.get(key);
    // slice() clones the list so that it and the map can each be modified
    // without affecting the other.
    return list ? list.slice() : [];
  }

  /**
   * Get a list of all values.
   * @returns {!Array.<T>} -
   */
  getAll(): T[] {
    let list: T[] = [];
    for (var value of this._map.values()) {
      list = list.concat(value);
    }
    return list;
  }

  /**
   * Remove a specific value, if it exists. If there are no more values to the key, the key is removed
   * @param {K} key -
   * @param {T} value -
   * @returns {void}
   */
  remove(key: K, value: T): void {
    if (!this._map.has(key)) return;
    let list = this._map.get(key);
    if (Array.isArray(list)) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i] == value) {
          list.splice(i, 1);
          --i;
        }
      }
      if (list.length === 0) {
        this._map.delete(key);
      }
    }
  }

  /**
   * Get all keys from the multimap.
   * @return {!Array.<K>}
   */
  // eslint-disable-next-line no-undef
  keys(): Iterator<K> {
    return this._map.keys();
  }

  /**
   * Clear all keys and values from the multimap.
   * @returns {void}
   */
  clear(): void {
    this._map.clear();
  }
}
export {MultiMap};
