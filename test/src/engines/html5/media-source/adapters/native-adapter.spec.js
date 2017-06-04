import NativeAdapter from '../../../../../../src/engines/html5/media-source/adapters/native-adapter'

describe('NativeAdapter:isSupported', () => {
  it('should be supported', () => {
    NativeAdapter.isSupported().should.be.true;
  });
});

describe('NativeAdapter:canPlayType', () => {
  let video;
  before(function () {
    video = document.createElement('video');
  });

  it('should return video/mp4 support', () => {
    NativeAdapter.canPlayType('video/mp4').should.equal(!!video.canPlayType('video/mp4'));
  });

  it('should return video/ogg support', () => {
    NativeAdapter.canPlayType('video/ogg').should.equal(!!video.canPlayType('video/ogg'));
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
  let nativeInstance;

  beforeEach(() => {
    nativeInstance = NativeAdapter.createAdapter(video, {mimetype: 'video/mp4', url: 'url3'}, {});
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  it('should create all native adapter properties', () => {
    nativeInstance._config.should.exist;
    nativeInstance._videoElement.should.exist;
    nativeInstance._videoElement.src.should.equals(window.location.origin + '/url3');
  });
});
