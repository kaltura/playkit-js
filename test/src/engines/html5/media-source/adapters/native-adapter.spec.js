import NativeAdapter from '../../../../../../src/engines/html5/media-source/adapters/native-adapter'
import AudioTrack from '../../../../../../src/track/audio-track'

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

describe('NativeAdapter:selectTrack', function () {
  let video ;
  let fakeEngine = {
    getVideoElement: function () {
      return video;
    },
    player: {
      getTracks(type?: string): Array<Track> {
        return !type ? this.tracks : this.tracks.filter((track) => {
          return track.type === type;
        });
      }
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

  it('should select the last audio track', (done) => {
    nativeInstance._engine.getVideoElement().addEventListener('loadeddata', function () {
      if (nativeInstance._engine.getVideoElement().audioTracks) {
        nativeInstance._engine.getVideoElement().audioTracks.getTrackById('2').enabled.should.be.true;
        nativeInstance._engine.player.tracks[0].active.should.be.true;
        nativeInstance.selectTrack(new AudioTrack('4', false));
        nativeInstance._engine.getVideoElement().audioTracks.getTrackById('4').enabled.should.be.true;
        nativeInstance._engine.player.tracks[0].active.should.be.false;
        nativeInstance._engine.player.tracks[1].active.should.be.false;
        nativeInstance._engine.player.tracks[2].active.should.be.true;
      }
      done();
    });
  });

  it('should not change the selected audio track', (done) => {
    nativeInstance._engine.getVideoElement().addEventListener('loadeddata', function () {
      if (nativeInstance._engine.getVideoElement().audioTracks) {
        nativeInstance._engine.getVideoElement().audioTracks.getTrackById('2').enabled.should.be.true;
        nativeInstance._engine.player.tracks[0].active.should.be.true;
        nativeInstance.selectTrack(new AudioTrack('2', false));
        nativeInstance._engine.getVideoElement().audioTracks.getTrackById('2').enabled.should.be.true;
        nativeInstance._engine.player.tracks[0].active.should.be.true;
        nativeInstance._engine.player.tracks[1].active.should.be.false;
        nativeInstance._engine.player.tracks[2].active.should.be.false;
      }
      done();
    });
  });
});
