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
    NativeAdapter.canPlayType('video/mp4').should.equal(!!video.canPlayType('video/mp4'));
  });

  it('should return video/ogg support', () => {
    NativeAdapter.canPlayType('video/ogg').should.equal(!!video.canPlayType('video/ogg'));
  });

  it('should return application/x-mpegURL support', () => {
    NativeAdapter.canPlayType('application/x-mpegURL').should.equal(!!video.canPlayType('application/x-mpegURL'));
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
    nativeInstance = NativeAdapter.createAdapter(fakeEngine, {url: 'url3'}, {});
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
  });
});

describe('NativeAdapter: load', () => {
  let video, nativeInstance;
  let fakeEngine = {
    getVideoElement: function () {
      return video;
    }
  };

  beforeEach(function () {
    video = document.createElement("video");
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  it('should success', (done) => {
    nativeInstance = NativeAdapter.createAdapter(fakeEngine, {
      mimetype: 'video/mp4',
      url: '/base/src/assets/audios.mp4'
    }, {});

    nativeInstance.load().then(()=>{
      done();
    });
  });

  it('should failed', (done) => {
    nativeInstance = NativeAdapter.createAdapter(fakeEngine, {
      mimetype: 'video/mp4',
      url: 'some corrupted_url'
    }, {});

    nativeInstance.load().catch((error)=>{
      error.should.be.exist;
      done();
    });
  });
});

describe('NativeAdapter: destroy', () => {
  let video, nativeInstance;
  let fakeEngine = {
    getVideoElement: function () {
      return video;
    }
  };

  beforeEach(function () {
    video = document.createElement("video");
    nativeInstance = NativeAdapter.createAdapter(fakeEngine, {
      mimetype: 'video/mp4',
      url: '/base/src/assets/audios.mp4'
    }, {});
  });

  afterEach(() => {
    nativeInstance = null;
  });

  it('should destroyed', (done) => {
    nativeInstance.load().then(()=>{
      nativeInstance._videoElement.src.includes('/base/src/assets/audios.mp4').should.be.true;
      nativeInstance.destroy();
      nativeInstance._videoElement.src.should.equal('');
      nativeInstance._tracks.length.should.equal(0);
      done();
    });
  });
});


describe('NativeAdapter:_parsedTracks', function () {
  let video;
  let track1 = document.createElement("track");
  let track2 = document.createElement("track");
  track1.id = '0';
  track1.kind = 'subtitles';
  track1.label = 'English';
  track1.default = true;
  track2.id = '1';
  track2.kind = 'caption';
  track2.srclang = 'fr';
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

  it('should return the parsed tracks', (done) => {
    video.appendChild(track1);
    video.appendChild(track2);
    nativeInstance.load().then(() => {
      let tracks = nativeInstance._parsedTracks;
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
      tracks.length.should.be.equal(totalTracksLength);
      tracks.map((track) => {
        if (track instanceof VideoTrack) {
          track.id.should.equal(video.videoTracks[track.index].id);
          track.active.should.equal(video.videoTracks[track.index].selected);
          track.label.should.equal(video.videoTracks[track.index].label || video.videoTracks[track.index].language);
        }
        if (track instanceof AudioTrack) {
          track.id.should.equal(video.audioTracks[track.index].id);
          track.active.should.equal(video.audioTracks[track.index].enabled);
          track.label.should.equal(video.audioTracks[track.index].label || video.audioTracks[track.index].language);
        }
        if (track instanceof TextTrack) {
          track.kind.should.equal(video.textTracks[track.index].kind);
          track.id.should.equal(video.textTracks[track.index].id);
          track.active.should.equal(video.textTracks[track.index].mode === 'showing');
          track.label.should.equal(video.textTracks[track.index].label || video.textTracks[track.index].language);
        }
      });
      done();
    });
  });

  it('should return empty array before loading', () => {
    let tracks = nativeInstance._parsedTracks;
    tracks.length.should.be.equal(0);
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

  it('should return all tracks for no type', () => {
    nativeInstance.getTracks().length.should.be.equal(6);
  });

  it('should return video tracks', () => {
    nativeInstance.getTracks('video').length.should.be.equal(1);
  });

  it('should return audio tracks', () => {
    nativeInstance.getTracks('audio').length.should.be.equal(2);
  });

  it('should return text tracks', () => {
    nativeInstance.getTracks('text').length.should.be.equal(3);
  });

  it('should return all tracks for unknown type', () => {
    nativeInstance.getTracks('some').length.should.be.equal(6);
  });
});

describe('NativeAdapter:getTracks real', function () {
  let video;
  let track1 = document.createElement("track");
  let track2 = document.createElement("track");
  track1.kind = 'subtitles';
  track1.label = 'English';
  track1.default = true;
  track2.kind = 'caption';
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
    nativeInstance.load().then(() => {
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
      nativeInstance.getTracks().length.should.be.equal(totalTracksLength);
      done();
    });
  });

  it('should return video tracks', (done) => {
    nativeInstance.load().then(() => {
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      nativeInstance.getTracks('video').length.should.be.equal(videoTracksLength);
      done();
    });
  });

  it('should return audio tracks', (done) => {
    nativeInstance.load().then(() => {
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      nativeInstance.getTracks('audio').length.should.be.equal(audioTracksLength);
      done();
    });
  });

  it('should return text tracks', (done) => {
    nativeInstance.load().then(() => {
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      nativeInstance.getTracks('text').length.should.be.equal(textTracksLength);
      done();
    });
  });

  it('should return all tracks for unknown type', (done) => {
    nativeInstance.load().then(() => {
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
      nativeInstance.getTracks('some').length.should.be.equal(totalTracksLength);
      done();
    });
  });

  it('should return empty array before loading', () => {
    let tracks = nativeInstance.getTracks();
    tracks.length.should.be.equal(0);
  });
});

describe('NativeAdapter:selectTrack - audio', function () {
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
    nativeInstance.load().then(() => {
      if (nativeInstance._engine.getVideoElement().audioTracks) {
        let tracks = nativeInstance.getTracks('audio');
        nativeInstance._engine.getVideoElement().audioTracks[0].enabled.should.be.true;
        nativeInstance._engine.getVideoElement().audioTracks[1].enabled.should.be.false;
        nativeInstance._engine.getVideoElement().audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
        nativeInstance.selectTrack(new AudioTrack({index: 2}));
        nativeInstance._engine.getVideoElement().audioTracks[0].enabled.should.be.false;
        nativeInstance._engine.getVideoElement().audioTracks[1].enabled.should.be.false;
        nativeInstance._engine.getVideoElement().audioTracks[2].enabled.should.be.true;
        tracks[0].active.should.be.false;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.true;
      }
      done();
    });
  });

  it('should not change the selected audio track', (done) => {
    nativeInstance.load().then(() => {
      if (nativeInstance._engine.getVideoElement().audioTracks) {
        let tracks = nativeInstance.getTracks('audio');
        nativeInstance._engine.getVideoElement().audioTracks[0].enabled.should.be.true;
        nativeInstance._engine.getVideoElement().audioTracks[1].enabled.should.be.false;
        nativeInstance._engine.getVideoElement().audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
        nativeInstance.selectTrack(new AudioTrack({index: 0}));
        nativeInstance._engine.getVideoElement().audioTracks[0].enabled.should.be.true;
        nativeInstance._engine.getVideoElement().audioTracks[1].enabled.should.be.false;
        nativeInstance._engine.getVideoElement().audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
      }
      done();
    });
  });

  it('should not change the selected for non exist audio track', (done) => {
    nativeInstance.load().then(() => {
      if (nativeInstance._engine.getVideoElement().audioTracks) {
        let tracks = nativeInstance.getTracks('audio');
        nativeInstance._engine.getVideoElement().audioTracks[0].enabled.should.be.true;
        nativeInstance._engine.getVideoElement().audioTracks[1].enabled.should.be.false;
        nativeInstance._engine.getVideoElement().audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
        nativeInstance.selectTrack(new AudioTrack({index: 3}));
        nativeInstance._engine.getVideoElement().audioTracks[0].enabled.should.be.true;
        nativeInstance._engine.getVideoElement().audioTracks[1].enabled.should.be.false;
        nativeInstance._engine.getVideoElement().audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
      }
      done();
    });
  });
});

describe('NativeAdapter:selectTrack - text', function () {
  let video, track1, track2;
  let fakeEngine = {
    getVideoElement: function () {
      return video;
    }
  };
  let nativeInstance;

  beforeEach(() => {
    video = document.createElement("video");
    track1 = document.createElement("track");
    track2 = document.createElement("track");
    track1.id = '0';
    track1.kind = 'subtitles';
    track1.label = 'English';
    track1.default = true;
    track2.id = '1';
    track2.kind = 'subtitles';
    track2.srclang = 'fr';
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

  it('should select a new subtitles track', (done) => {
    nativeInstance.load().then(() => {
      if (nativeInstance._engine.getVideoElement().textTracks) {
        let tracks = nativeInstance.getTracks('text');
        nativeInstance._engine.getVideoElement().textTracks[0].mode.should.be.equal('showing');
        nativeInstance._engine.getVideoElement().textTracks[1].mode.should.be.equal('disabled');
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        nativeInstance.selectTrack(new TextTrack({index: 1, kind: 'subtitles'}));
        nativeInstance._engine.getVideoElement().textTracks[0].mode.should.be.equal('disabled');
        nativeInstance._engine.getVideoElement().textTracks[1].mode.should.be.equal('showing');
        tracks[0].active.should.be.false;
        tracks[1].active.should.be.true;
      }
      done();
    });
  });

  it('should select a new caption track', (done) => {
    video.appendChild(track1);
    video.appendChild(track2);
    nativeInstance.load().then(() => {
      if (nativeInstance._engine.getVideoElement().textTracks) {
        let tracks = nativeInstance.getTracks('text');
        nativeInstance._engine.getVideoElement().textTracks[0].mode.should.be.equal('showing');
        nativeInstance._engine.getVideoElement().textTracks[1].mode.should.be.equal('disabled');
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        nativeInstance.selectTrack(new TextTrack({index: 1, kind: 'caption'}));
        nativeInstance._engine.getVideoElement().textTracks[0].mode.should.be.equal('disabled');
        nativeInstance._engine.getVideoElement().textTracks[1].mode.should.be.equal('showing');
        tracks[0].active.should.be.false;
        tracks[1].active.should.be.true;
      }
      done();
    });
  });

  it('should not change the selected text track', (done) => {
    video.appendChild(track1);
    video.appendChild(track2);
    nativeInstance.load().then(() => {
      if (nativeInstance._engine.getVideoElement().textTracks) {
        let tracks = nativeInstance.getTracks('text');
        nativeInstance._engine.getVideoElement().textTracks[0].mode.should.be.equal('showing');
        nativeInstance._engine.getVideoElement().textTracks[1].mode.should.be.equal('disabled');
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        nativeInstance.selectTrack(new TextTrack({index: 0, kind: 'subtitles'}));
        nativeInstance._engine.getVideoElement().textTracks[0].mode.should.be.equal('showing');
        nativeInstance._engine.getVideoElement().textTracks[1].mode.should.be.equal('disabled');
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
      }
      done();
    });
  });

  it('should not change the selected for non exist text track', (done) => {
    video.appendChild(track1);
    video.appendChild(track2);
    nativeInstance.load().then(() => {
      if (nativeInstance._engine.getVideoElement().textTracks) {
        let tracks = nativeInstance.getTracks('text');
        nativeInstance._engine.getVideoElement().textTracks[0].mode.should.be.equal('showing');
        nativeInstance._engine.getVideoElement().textTracks[1].mode.should.be.equal('disabled');
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        nativeInstance.selectTrack(new TextTrack({index: 3, kind: 'subtitles'}));
        nativeInstance._engine.getVideoElement().textTracks[0].mode.should.be.equal('showing');
        nativeInstance._engine.getVideoElement().textTracks[1].mode.should.be.equal('disabled');
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
      }
      done();
    });
  });

  it('should not change the selected for metadata text track', (done) => {
    video.appendChild(track1);
    video.appendChild(track2);
    nativeInstance.load().then(() => {
      if (nativeInstance._engine.getVideoElement().textTracks) {
        let tracks = nativeInstance.getTracks('text');
        nativeInstance._engine.getVideoElement().textTracks[0].mode.should.be.equal('showing');
        nativeInstance._engine.getVideoElement().textTracks[1].mode.should.be.equal('disabled');
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        nativeInstance.selectTrack(new TextTrack({index: 1, kind: 'metadata'}));
        nativeInstance._engine.getVideoElement().textTracks[0].mode.should.be.equal('showing');
        nativeInstance._engine.getVideoElement().textTracks[1].mode.should.be.equal('disabled');
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
      }
      done();
    });
  });
});
