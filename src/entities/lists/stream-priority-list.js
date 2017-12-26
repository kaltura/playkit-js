// @flow
import StreamPriorityItem from '../items/stream-priority'
import type {StreamPriorityObject} from '../items/stream-priority'

export default class StreamPriorityList {
  _list: Array<StreamPriorityItem> = [];

  get list(): Array<StreamPriorityItem> {
    return this._list;
  }

  set list(value: Array<StreamPriorityObject>): void {
    this._list = [];
    value.forEach(i => this._list.push(new StreamPriorityItem(i.engine, i.format)));
  }

  toJSON(): Array<StreamPriorityObject> {
    const response = [];
    this._list.forEach(item => response.push(item.toJSON()));
    return response;
  }
}
