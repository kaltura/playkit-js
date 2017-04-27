class adapter1 implements IMediaSourceAdapter {
  static _name = 'adapter1';
  static get name() {
    return adapter1._name;
  }

  static canPlayType(mimeType: string): boolean {
    return ['mimeType0', 'mimeType1'].includes(mimeType);
  }

  static createAdapter(engine: IEngine, source: Object, config: Object): IMediaSourceAdapter {
    return new this(engine, source, config);
  }

  constructor() {
  }

  load(): void {
  }

  destroy(): void {
  }
}

class adapter2 implements IMediaSourceAdapter {
  static _name = 'adapter2';
  static get name() {
    return adapter2._name;
  }

  static canPlayType(mimeType: string): boolean {
    return ['mimeType1', 'mimeType2'].includes(mimeType);
  }

  static createAdapter(engine: IEngine, source: Object, config: Object): IMediaSourceAdapter {
    return new this(engine, source, config);
  }

  constructor() {
  }

  load(): void {
  }

  destroy(): void {
  }
}

class adapter3 implements IMediaSourceAdapter {
  static _name = 'adapter3';
  static get name() {
    return adapter3._name;
  }

  static canPlayType(mimeType: string): boolean {
    return !!(document.createElement("video").canPlayType(mimeType));
  }

  static createAdapter(engine: IEngine, source: Object, config: Object): IMediaSourceAdapter {
    return new this(engine, source, config);
  }

  constructor() {
  }

  load(): void {
  }

  destroy(): void {
  }
}

export {adapter1, adapter2, adapter3};
