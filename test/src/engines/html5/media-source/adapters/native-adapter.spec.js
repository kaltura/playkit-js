import NativeAdapter from '../../../../../../src/engines/html5/media-source/adapters/native-adapter'

describe('NativeAdapter:isSupported', () => {
  it('should be supported', () => {
    NativeAdapter.isSupported().should.be.true;
  });
});

describe('NativeAdapter:canPlayType', () => {
  it('should return true for video/mp4', () => {
    NativeAdapter.canPlayType('video/mp4').should.be.true;
  });

  it('should return true for video/ogg', () => {
    NativeAdapter.canPlayType('video/ogg').should.be.true;
  });

  it('should return false for unsupported mime type', () => {
    NativeAdapter.canPlayType('someType').should.be.false;
  });

  it('should return false for no mime type', () => {
    NativeAdapter.canPlayType().should.be.false;
  });
});

describe('NativeAdapterInstance', () => {
  let video = document.createElement("video");
  let fakeEngine = {
    getVideoElement: function () {
      return video;
    }
  };
  let nativeInstance;

  beforeEach(() => {
    nativeInstance = NativeAdapter.createAdapter(fakeEngine, {mimetype: 'video/mp4', url: 'url3'}, {});
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  it('should create all native adapter properties', () => {
    nativeInstance._engine.should.exist;
    nativeInstance._config.should.exist;
    nativeInstance._videoElement.should.exist;
    nativeInstance._source.should.exist;
    nativeInstance._videoElement.src.should.equals(window.location.origin + '/url3');
  });
});
