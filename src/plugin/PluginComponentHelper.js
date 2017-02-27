//@flow
export default class PluginComponentHelper {
  _map: Map<string,any> = new Map();

  set(name: string, value: any): void {
    this.map.set(name, value)
  }

  get(name: string): any {
    return this.map.get(name);
  }

  has(name: string): boolean {
    return this.map.has(name);
  }

  remove(name: string): void {
    this.map.delete(name);
  }

  clear(): void {
    this.map.clear();
  }

  get size(): number {
    return this.map.size;
  }

  get map(): Map<string,any> {
    return this._map;
  }
}
