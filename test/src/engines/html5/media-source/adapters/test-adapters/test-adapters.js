class adapter1 implements IMediaSourceAdapter {
  static get id() {
    return 'adapter1';
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

  constructor() {
  }

  load(): void {
  }

  destroy(): void {
  }
}

class adapter2 implements IMediaSourceAdapter {
  static get id() {
    return 'adapter2';
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

  constructor() {
  }

  load(): void {
  }

  destroy(): void {
  }
}

class adapter3 implements IMediaSourceAdapter {
  static get id() {
    return 'adapter3';
  }

  static canPlayType(mimeType: string): boolean {
    return !!(document.createElement("video").canPlayType(mimeType));
  }

  static canPlayDrm(drmData: Array<Object>): boolean {
    return !!(drmData.length && drmData[0].scheme === 's3');
  }

  static createAdapter(videoElement: HTMLVideoElement, source: Object, config: Object): IMediaSourceAdapter {
    return new this(videoElement, source, config);
  }

  constructor() {
  }

  load(): void {
  }

  destroy(): void {
  }
}

export {adapter1, adapter2, adapter3};
