import MediaSourceProvider from '../../../../../src/engines/html5/media-source/media-source-provider';
import {Adapter1, Adapter2, Adapter3, FakeDashAdapter, FakeNativeAdapter, FakeHlsAdapter} from './adapters/test-adapters/test-adapters';

let video = document.createElement('video');
let oldMediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters;

describe('mediaSourceProvider:register', () => {
  beforeEach(() => {
    MediaSourceProvider._mediaSourceAdapters = [];
  });

  after(() => {
    MediaSourceProvider._mediaSourceAdapters = oldMediaSourceAdapters;
  });

  it('should register Adapter1', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
    MediaSourceProvider.register(Adapter1);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(1);
    MediaSourceProvider._mediaSourceAdapters[0].id.should.equal('Adapter1');
  });

  it('should not register Adapter1 twice', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
    MediaSourceProvider.register(Adapter1);
    MediaSourceProvider.register(Adapter1);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(1);
    MediaSourceProvider._mediaSourceAdapters[0].id.should.equal('Adapter1');
  });

  it('should register Adapter1 and Adapter2', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
    MediaSourceProvider.register(Adapter1);
    MediaSourceProvider.register(Adapter2);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
    MediaSourceProvider._mediaSourceAdapters[0].id.should.equal('Adapter1');
    MediaSourceProvider._mediaSourceAdapters[1].id.should.equal('Adapter2');
  });

  it('should not register null', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
    MediaSourceProvider.register(null);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
  });

  it('should not register undefined', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
    MediaSourceProvider.register();
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
  });
});

describe('mediaSourceProvider:unRegister', () => {
  beforeEach(() => {
    MediaSourceProvider._mediaSourceAdapters = [Adapter1, Adapter2];
  });
  after(() => {
    MediaSourceProvider._mediaSourceAdapters = oldMediaSourceAdapters;
  });

  it('should unRegister Adapter1', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
    MediaSourceProvider.unRegister(Adapter1);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(1);
    MediaSourceProvider._mediaSourceAdapters[0].id.should.equal('Adapter2');
  });

  it('should unRegister Adapter1 and Adapter2', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
    MediaSourceProvider.unRegister(Adapter1);
    MediaSourceProvider.unRegister(Adapter2);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
  });

  it('should do nothing for adapter 3', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
    MediaSourceProvider.unRegister(Adapter3);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
  });

  it('should do nothing for null', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
    MediaSourceProvider.unRegister(null);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
  });

  it('should do nothing for undefined', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
    MediaSourceProvider.unRegister();
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
  });
});

describe('mediaSourceProvider:canPlaySource', () => {
  let sandbox;

  before(() => {
    MediaSourceProvider._mediaSourceAdapters = [Adapter1, Adapter2, Adapter3];
  });

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(MediaSourceProvider, '_orderMediaSourceAdapters', () => {});
  });

  afterEach(() => {
    sandbox.restore();
  });

  after(() => {
    MediaSourceProvider._mediaSourceAdapters = oldMediaSourceAdapters;
  });

  it('should can play source with type mimeType1', () => {
    MediaSourceProvider.canPlaySource({mimetype: 'mimeType1'}, true, {}).then(() => {
      MediaSourceProvider._selectedAdapter.id.should.equal('Adapter1');
    });
  });

  it('should can play source with type mimeType1 and drm scheme s1', () => {
    MediaSourceProvider.canPlaySource({mimetype: 'mimeType1', drmData: [{scheme: 's1'}]}, true, {}).then(() => {
      MediaSourceProvider._selectedAdapter.id.should.equal('Adapter1');
    });
  });

  it('should can play source with type mimeType2', () => {
    MediaSourceProvider.canPlaySource({mimetype: 'mimeType2'}, true, {}).then(() => {
      MediaSourceProvider._selectedAdapter.id.should.equal('Adapter2');
    });
  });

  it('should can play source with type video/mp4', () => {
    MediaSourceProvider.canPlaySource({mimetype: 'video/mp4'}, true, {}).then(() => {
      MediaSourceProvider._selectedAdapter.id.should.equal('Adapter3');
    });
  });

  it('should can play source with type video/mp4 and drm scheme s3', () => {
    MediaSourceProvider.canPlaySource({mimetype: 'video/mp4', drmData: [{scheme: 's3'}]}, true, {}).then(() => {
      MediaSourceProvider._selectedAdapter.id.should.equal('Adapter3');
    });
  });

  it('should can play source with type mimeType1 and drm scheme s3 by drm config', () => {
    MediaSourceProvider.canPlaySource({mimetype: 'mimeType1', drmData: [{scheme: 's3'}]}, true, {keySystem: 's1'}).then(() => {
      MediaSourceProvider._selectedAdapter.id.should.equal('Adapter1');
    });
  });

  it('should can play source with type video/mp4 and drm scheme s1 by drm config', () => {
    MediaSourceProvider.canPlaySource({mimetype: 'video/mp4', drmData: [{scheme: 's1'}]}, true, {keySystem: 's3'}).then(() => {
      MediaSourceProvider._selectedAdapter.id.should.equal('Adapter3');
    });
  });

  it('should cannot play source with valid mime type and not valid drm scheme', () => {
    MediaSourceProvider.canPlaySource({mimetype: 'mimeType0', drmData: [{scheme: 's4'}]}, true, {}).should.be.rejected;
    MediaSourceProvider.canPlaySource({mimetype: 'mimeType1', drmData: [{scheme: 's4'}]}, true, {}).should.be.rejected;
    MediaSourceProvider.canPlaySource({mimetype: 'mimeType2', drmData: [{scheme: 's4'}]}, true, {}).should.be.rejected;
    MediaSourceProvider.canPlaySource({mimetype: 'video/mp4', drmData: [{scheme: 's4'}]}, true, {}).should.be.rejected;
  });

  it('should cannot play source with unknown mime type', () => {
    MediaSourceProvider.canPlaySource({mimetype: 'unknownType'}, true, {}).should.be.rejected;
  });

  it('should cannot play source with no source', () => {
    MediaSourceProvider.canPlaySource().should.be.rejected;
  });
});

describe('mediaSourceProvider:getMediaSourceAdapter', () => {
  let sandbox;

  before(() => {
    MediaSourceProvider._mediaSourceAdapters = [Adapter1, Adapter2, Adapter3];
  });

  beforeEach(() => {});

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    MediaSourceProvider._selectedAdapter = null;
    sandbox.stub(MediaSourceProvider, '_orderMediaSourceAdapters', () => {});
  });

  afterEach(() => {
    sandbox.restore();
  });

  after(() => {
    MediaSourceProvider._mediaSourceAdapters = oldMediaSourceAdapters;
  });

  it('should provide Adapter1', () => {
    MediaSourceProvider.getMediaSourceAdapter(video, {mimetype: 'mimeType1', url: 'url1'}, {}).then(adapter => {
      adapter.constructor.id.should.equal('Adapter1');
    });
  });

  it('should provide Adapter2', () => {
    MediaSourceProvider.getMediaSourceAdapter(video, {mimetype: 'mimeType2', url: 'url3'}, {}).then(adapter => {
      adapter.constructor.id.should.equal('Adapter2');
    });
  });

  it('should provide Adapter3', () => {
    MediaSourceProvider.getMediaSourceAdapter(video, {mimetype: 'video/mp4', url: 'url3'}, {}).then(adapter => {
      adapter.constructor.id.should.equal('Adapter3');
    });
  });

  it('should provide null for unknown mime type', () => {
    MediaSourceProvider.getMediaSourceAdapter(video, {mimetype: 'unknownType'}, {}).then(adapter => {
      (adapter === null).should.be.true;
    });
  });

  it('should provide null for no params', () => {
    MediaSourceProvider.getMediaSourceAdapter().then(adapter => {
      (adapter === null).should.be.true;
    });
  });

  it('should provide null for no videoElement param', () => {
    MediaSourceProvider.getMediaSourceAdapter(undefined, {mimetype: 'mimeType1', src: 'url1'}, {}).then(adapter => {
      (adapter === null).should.be.true;
    });
  });

  it('should provide null for no sources param', () => {
    MediaSourceProvider.getMediaSourceAdapter(video, undefined, {}).then(adapter => {
      (adapter === null).should.be.true;
    });
  });

  it('should provide null for no config param', () => {
    MediaSourceProvider.getMediaSourceAdapter(video, {mimetype: 'mimeType1', src: 'url1'}).then(adapter => {
      (adapter === null).should.be.true;
    });
  });
});

describe('mediaSourceProvider:_orderMediaSourceAdapters', () => {
  it('should place NativeAdapter last with preferNative=false', () => {
    MediaSourceProvider._mediaSourceAdapters = [FakeNativeAdapter, FakeHlsAdapter, FakeDashAdapter];
    MediaSourceProvider._orderMediaSourceAdapters(false);
    MediaSourceProvider._mediaSourceAdapters.length.should.equals(3);
    MediaSourceProvider._mediaSourceAdapters[0].id.should.equals('HlsAdapter');
    MediaSourceProvider._mediaSourceAdapters[1].id.should.equals('DashAdapter');
    MediaSourceProvider._mediaSourceAdapters[2].id.should.equals('NativeAdapter');
  });

  it('should place NativeAdapter last with preferNative=false', () => {
    MediaSourceProvider._mediaSourceAdapters = [FakeHlsAdapter, FakeNativeAdapter, FakeDashAdapter];
    MediaSourceProvider._orderMediaSourceAdapters(false);
    MediaSourceProvider._mediaSourceAdapters.length.should.equals(3);
    MediaSourceProvider._mediaSourceAdapters[0].id.should.equals('HlsAdapter');
    MediaSourceProvider._mediaSourceAdapters[1].id.should.equals('DashAdapter');
    MediaSourceProvider._mediaSourceAdapters[2].id.should.equals('NativeAdapter');
  });

  it('should place NativeAdapter last with preferNative=false', () => {
    MediaSourceProvider._mediaSourceAdapters = [FakeHlsAdapter, FakeDashAdapter, FakeNativeAdapter];
    MediaSourceProvider._orderMediaSourceAdapters(false);
    MediaSourceProvider._mediaSourceAdapters.length.should.equals(3);
    MediaSourceProvider._mediaSourceAdapters[0].id.should.equals('HlsAdapter');
    MediaSourceProvider._mediaSourceAdapters[1].id.should.equals('DashAdapter');
    MediaSourceProvider._mediaSourceAdapters[2].id.should.equals('NativeAdapter');
  });

  it('should place NativeAdapter first with preferNative=true', () => {
    MediaSourceProvider._mediaSourceAdapters = [FakeNativeAdapter, FakeHlsAdapter, FakeDashAdapter];
    MediaSourceProvider._orderMediaSourceAdapters(true);
    MediaSourceProvider._mediaSourceAdapters.length.should.equals(3);
    MediaSourceProvider._mediaSourceAdapters[0].id.should.equals('NativeAdapter');
    MediaSourceProvider._mediaSourceAdapters[1].id.should.equals('HlsAdapter');
    MediaSourceProvider._mediaSourceAdapters[2].id.should.equals('DashAdapter');
  });

  it('should place NativeAdapter first with preferNative=true', () => {
    MediaSourceProvider._mediaSourceAdapters = [FakeHlsAdapter, FakeNativeAdapter, FakeDashAdapter];
    MediaSourceProvider._orderMediaSourceAdapters(true);
    MediaSourceProvider._mediaSourceAdapters.length.should.equals(3);
    MediaSourceProvider._mediaSourceAdapters[0].id.should.equals('NativeAdapter');
    MediaSourceProvider._mediaSourceAdapters[1].id.should.equals('HlsAdapter');
    MediaSourceProvider._mediaSourceAdapters[2].id.should.equals('DashAdapter');
  });

  it('should place NativeAdapter first with preferNative=true', () => {
    MediaSourceProvider._mediaSourceAdapters = [FakeHlsAdapter, FakeDashAdapter, FakeNativeAdapter];
    MediaSourceProvider._orderMediaSourceAdapters(true);
    MediaSourceProvider._mediaSourceAdapters.length.should.equals(3);
    MediaSourceProvider._mediaSourceAdapters[0].id.should.equals('NativeAdapter');
    MediaSourceProvider._mediaSourceAdapters[1].id.should.equals('HlsAdapter');
    MediaSourceProvider._mediaSourceAdapters[2].id.should.equals('DashAdapter');
  });

  it('should place NativeAdapter first with preferNative=true', () => {
    MediaSourceProvider._mediaSourceAdapters = [FakeNativeAdapter];
    MediaSourceProvider._orderMediaSourceAdapters(true);
    MediaSourceProvider._mediaSourceAdapters.length.should.equals(1);
    MediaSourceProvider._mediaSourceAdapters[0].id.should.equals('NativeAdapter');
  });

  it('should place NativeAdapter first with preferNative=false', () => {
    MediaSourceProvider._mediaSourceAdapters = [FakeNativeAdapter];
    MediaSourceProvider._orderMediaSourceAdapters(false);
    MediaSourceProvider._mediaSourceAdapters.length.should.equals(1);
    MediaSourceProvider._mediaSourceAdapters[0].id.should.equals('NativeAdapter');
  });
});
