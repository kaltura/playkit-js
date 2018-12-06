import FakeEventTarget from '../../../../../../../src/event/fake-event-target';

class FakeNativeAdapter implements IMediaSourceAdapter {
  static get id() {
    return 'NativeAdapter';
  }
}

class FakeHlsAdapter implements IMediaSourceAdapter {
  static get id() {
    return 'HlsAdapter';
  }
}

class FakeDashAdapter extends FakeEventTarget implements IMediaSourceAdapter {
  static get id() {
    return 'DashAdapter';
  }
}

class Adapter1 implements IMediaSourceAdapter {
  static get id() {
    return 'Adapter1';
  }

  static canPlayType(mimeType: string): boolean {
    return ['mimeType0', 'mimeType1'].includes(mimeType);
  }

  static canPlayDrm(drmData: Array<Object>): boolean {
    return !!(drmData.length && drmData[0].scheme === 's1');
  }

  static createAdapter(videoElement: HTMLVideoElement, source: Object, config: Object): IMediaSourceAdapter {
    return new this(videoElement, source, config);
  }

  constructor() {}

  load(): void {}

  destroy(): void {}
}

class Adapter2 implements IMediaSourceAdapter {
  static get id() {
    return 'Adapter2';
  }

  static canPlayType(mimeType: string): boolean {
    return ['mimeType1', 'mimeType2'].includes(mimeType);
  }

  static canPlayDrm(): boolean {
    return false;
  }

  static createAdapter(videoElement: HTMLVideoElement, source: Object, config: Object): IMediaSourceAdapter {
    return new this(videoElement, source, config);
  }

  constructor() {}

  load(): void {}

  destroy(): void {}
}

class Adapter3 implements IMediaSourceAdapter {
  static get id() {
    return 'Adapter3';
  }

  static canPlayType(mimeType: string): boolean {
    return !!document.createElement('video').canPlayType(mimeType);
  }

  static canPlayDrm(drmData: Array<Object>): boolean {
    return !!(drmData.length && drmData[0].scheme === 's3');
  }

  static createAdapter(videoElement: HTMLVideoElement, source: Object, config: Object): IMediaSourceAdapter {
    return new this(videoElement, source, config);
  }

  constructor() {}

  load(): void {}

  destroy(): void {}
}

export {Adapter1, Adapter2, Adapter3, FakeDashAdapter, FakeHlsAdapter, FakeNativeAdapter};
