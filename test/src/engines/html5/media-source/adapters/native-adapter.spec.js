import NativeAdapter from '../../../../../../src/engines/html5/media-source/adapters/native-adapter'
import VideoTrack from '../../../../../../flow-typed/classes/track/video-track'
import AudioTrack from '../../../../../../flow-typed/classes/track/audio-track'
import TextTrack from '../../../../../../flow-typed/classes/track/text-track'

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
    NativeAdapter.canPlayType('video/mp4').should.equals(!!video.canPlayType('video/mp4'));
  });

  it('should return video/ogg support', () => {
    NativeAdapter.canPlayType('video/ogg').should.equals(!!video.canPlayType('video/ogg'));
  });

  it('should return application/x-mpegURL support', () => {
    NativeAdapter.canPlayType('application/x-mpegURL').should.equals(!!video.canPlayType('application/x-mpegURL'));
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

describe.only('NativeAdapter:getTracks', function () {
  let video = document.createElement('video');
  let fakeEngine = {
    getVideoElement: function () {
      return video;
    }
  };
  let nativeInstance = NativeAdapter.createAdapter(fakeEngine, {}, {});
  nativeInstance._tracks = [new VideoTrack(), new AudioTrack(), new AudioTrack(), new TextTrack(), new TextTrack(), new TextTrack()];

  it('should return all tracks for no type', () => {
    nativeInstance.getTracks().length.should.equals(6);
  });

  it('should return video tracks', () => {
    nativeInstance.getTracks('video').length.should.equals(1);
  });

  it('should return audio tracks', () => {
    nativeInstance.getTracks('audio').length.should.equals(2);
  });

  it('should return text tracks', () => {
    nativeInstance.getTracks('text').length.should.equals(3);
  });

  it('should return all tracks for unknown type', () => {
    nativeInstance.getTracks('some').length.should.equals(6);
  });
});

describe.only('NativeAdapter:selectTrack', function () {
  let video;
  let fakeEngine = {
    getVideoElement: function () {
      return video;
    }
  };
  let nativeInstance;

  beforeEach(() => {
    video = document.createElement("video");
    nativeInstance = NativeAdapter.createAdapter(fakeEngine, {
      mimetype: 'video/mp4',
      url: '/base/src/assets/audios.mp4'
    }, {});
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  it('should select a new audio track', (done) => {
    nativeInstance._engine.getVideoElement().addEventListener('loadeddata', function () {
      if (nativeInstance._engine.getVideoElement().audioTracks) {
        nativeInstance._engine.getVideoElement().audioTracks.getTrackById('2').enabled.should.be.true;
        nativeInstance.getTracks()[0].active.should.be.true;
        nativeInstance.selectTrack(new AudioTrack({id: '4'}));
        nativeInstance._engine.getVideoElement().audioTracks.getTrackById('4').enabled.should.be.true;
        nativeInstance.getTracks()[0].active.should.be.false;
        nativeInstance.getTracks()[1].active.should.be.false;
        nativeInstance.getTracks()[2].active.should.be.true;
      }
      done();
    });
  });

  it('should not change the selected audio track', (done) => {
    nativeInstance._engine.getVideoElement().addEventListener('loadeddata', function () {
      if (nativeInstance._engine.getVideoElement().audioTracks) {
        nativeInstance._engine.getVideoElement().audioTracks.getTrackById('2').enabled.should.be.true;
        nativeInstance.getTracks()[0].active.should.be.true;
        nativeInstance.selectTrack(new AudioTrack({id: '2'}));
        nativeInstance._engine.getVideoElement().audioTracks.getTrackById('2').enabled.should.be.true;
        nativeInstance.getTracks()[0].active.should.be.true;
        nativeInstance.getTracks()[1].active.should.be.false;
        nativeInstance.getTracks()[2].active.should.be.false;
      }
      done();
    });
  });

  it('should not select non exist audio track', (done) => {
    nativeInstance._engine.getVideoElement().addEventListener('loadeddata', function () {
      if (nativeInstance._engine.getVideoElement().audioTracks) {
        nativeInstance._engine.getVideoElement().audioTracks.getTrackById('2').enabled.should.be.true;
        nativeInstance.getTracks()[0].active.should.be.true;
        nativeInstance.selectTrack(new AudioTrack({id: '0'}));
        nativeInstance._engine.getVideoElement().audioTracks.getTrackById('2').enabled.should.be.true;
        nativeInstance.getTracks()[0].active.should.be.true;
        nativeInstance.getTracks()[1].active.should.be.false;
        nativeInstance.getTracks()[2].active.should.be.false;
      }
      done();
    });
  });
});
