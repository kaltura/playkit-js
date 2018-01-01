// @flow
import StreamPriority from '../items/stream-priority'
import type {StreamPriorityObject} from '../items/stream-priority'

export default class StreamPriorityList {
  _list: Array<StreamPriority>;

  get list(): Array<StreamPriority> {
    return this._list;
  }

  set list(value: Array<StreamPriorityObject>): void {
    this._list = [];
    value.forEach(i => this._list.push(new StreamPriority(i.engine, i.format)));
  }

  constructor(list: Array<StreamPriorityObject> = []) {
    validate(list);
    this.list = list;
  }

  toJSON(): Array<StreamPriorityObject> {
    const response = [];
    this._list.forEach(item => response.push(item.toJSON()));
    return response;
  }
}

/**
 * Validate user input
 * @param {Array<any>} list - user input
 * @returns {void}
 */
function validate(list: Array<any>): void {
  if (!list) return;
  if (Array.isArray(list)) return;
  throw new TypeError('Invalid StreamPriorityList: should be an array');
}
