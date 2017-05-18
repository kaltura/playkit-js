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

describe('NativeAdapter:_parseTracks', function () {
  let video;
  let track1 = document.createElement("track");
  let track2 = document.createElement("track");
  track1.id = '0';
  track1.kind = 'subtitles';
  track1.label = 'English';
  track1.default = true;
  track2.id = '1';
  track2.kind = 'captions';
  track2.srclang = 'fr';
  let fakeEngine = {
    getVideoElement: function () {
      return video;
    }
  };
  let nativeInstance;

  beforeEach(() => {
    video = document.createElement("video");
    video.appendChild(track1);
    video.appendChild(track2);
    nativeInstance = NativeAdapter.createAdapter(fakeEngine, {
      mimetype: 'video/mp4',
      url: 'http://qa-apache-testing-ubu-01.dev.kaltura.com/p/1091/sp/109100/playManifest/entryId/0_2hv7lhga/flavorIds/0_cxckre0q,0_yual4izy,0_qswhyfht,0_ozgle3np/format/applehttp/protocol/http/a.m3u8'
    }, {});
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  it('should parse tracks', (done) => {
    nativeInstance._parseTracks().then(() => {
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
      nativeInstance._tracks.length.should.be.equal(totalTracksLength);
      nativeInstance._tracks.map((track) => {
        if(track instanceof VideoTrack) {
          track.id.should.equals(video.videoTracks[track.index].id);
          track.active.should.equals(video.videoTracks[track.index].selected);
          track.label.should.equals(video.videoTracks[track.index].label || video.videoTracks[track.index].language);
        }
        if(track instanceof AudioTrack) {
          track.id.should.equals(video.audioTracks[track.index].id);
          track.active.should.equals(video.audioTracks[track.index].enabled);
          track.label.should.equals(video.audioTracks[track.index].label || video.audioTracks[track.index].language);
        }
        if(track instanceof TextTrack) {
          track.kind.should.equals(video.textTracks[track.index].kind);
          track.id.should.equals(video.textTracks[track.index].id);
          track.active.should.equals(video.textTracks[track.index].mode === 'showing');
          track.label.should.equals(video.textTracks[track.index].label || video.textTracks[track.index].language);
        }
      });
      done();
    });
  });
});

describe('NativeAdapter:getTracks dummy', function () {
  let video = document.createElement('video');
  let fakeEngine = {
    getVideoElement: function () {
      return video;
    }
  };
  let nativeInstance = NativeAdapter.createAdapter(fakeEngine, {}, {});
  nativeInstance._tracks = [new VideoTrack(), new AudioTrack(), new AudioTrack(), new TextTrack(), new TextTrack(), new TextTrack()];

  it('should return all tracks for no type', (done) => {
    nativeInstance.getTracks().then((tracks) => {
      tracks.length.should.be.equal(6);
      done();
    });
  });

  it('should return video tracks', (done) => {
    nativeInstance.getTracks('video').then((tracks) => {
      tracks.length.should.be.equal(1);
      done();
    });
  });

  it('should return audio tracks', (done) => {
    nativeInstance.getTracks('audio').then((tracks) => {
      tracks.length.should.be.equal(2);
      done();
    });
  });

  it('should return text tracks', (done) => {
    nativeInstance.getTracks('text').then((tracks) => {
      tracks.length.should.be.equal(3);
      done();
    });
  });

  it('should return all tracks for unknown type', (done) => {
    nativeInstance.getTracks('some').then((tracks) => {
      tracks.length.should.be.equal(6);
      done();
    });
  });
});

describe('NativeAdapter:getTracks real', function () {
  let video;
  let track1 = document.createElement("track");
  let track2 = document.createElement("track");
  track1.kind = 'subtitles';
  track1.label = 'English';
  track1.default = true;
  track2.kind = 'captions';
  track2.srclang = 'fr';
  let fakeEngine = {
    getVideoElement: function () {
      return video;
    }
  };
  let nativeInstance;

  beforeEach(() => {
    video = document.createElement("video");
    video.appendChild(track1);
    video.appendChild(track2);
    nativeInstance = NativeAdapter.createAdapter(fakeEngine, {
      mimetype: 'video/mp4',
      url: '/base/src/assets/audios.mp4'
    }, {});
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  it('should return all tracks for no type', (done) => {
    nativeInstance.getTracks().then((tracks) => {
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
      tracks.length.should.be.equal(totalTracksLength);
      done();
    });
  });

  it('should return video tracks', (done) => {
    nativeInstance.getTracks('video').then((tracks) => {
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      tracks.length.should.be.equal(videoTracksLength);
      done();
    });
  });

  it('should return audio tracks', (done) => {
    nativeInstance.getTracks('audio').then((tracks) => {
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      tracks.length.should.be.equal(audioTracksLength);
      done();
    });
  });

  it('should return text tracks', (done) => {
    nativeInstance.getTracks('text').then((tracks) => {
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      tracks.length.should.be.equal(textTracksLength);
      done();
    });
  });

  it('should return all tracks for unknown type', (done) => {
    nativeInstance.getTracks('some').then((tracks) => {
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
      tracks.length.should.be.equal(totalTracksLength);
      done();
    });
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
