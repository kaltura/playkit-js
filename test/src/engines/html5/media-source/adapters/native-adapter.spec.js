import NativeAdapter from '../../../../../../src/engines/html5/media-source/adapters/native-adapter'
import VideoTrack from '../../../../../../src/track/video-track'
import AudioTrack from '../../../../../../src/track/audio-track'
import TextTrack from '../../../../../../src/track/text-track'
import {removeVideoElementsFromTestPage} from '../../../../utils/test-utils'

describe('NativeAdapter:isSupported', () => {
  it('should be supported', () => {
    NativeAdapter.isSupported().should.be.true;
  });
});

describe('NativeAdapter:canPlayType', () => {
  let video;

  before(() => {
    video = document.createElement('video');
  });

  after(() => {
    removeVideoElementsFromTestPage();
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
  let video;
  let nativeInstance;

  before(() => {
    video = document.createElement('video');
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  beforeEach(() => {
    nativeInstance = NativeAdapter.createAdapter(video, {url: 'url3'}, {});
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  it('should create all native adapter properties', () => {
    nativeInstance._config.should.exist;
    nativeInstance._videoElement.should.exist;
    nativeInstance._sourceObj.should.exist;
  });
});

describe('NativeAdapter: load', function () {
  this.timeout(10000);

  let video, nativeInstance;

  beforeEach(() => {
    video = document.createElement("video");
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  it('should success', (done) => {
    nativeInstance = NativeAdapter.createAdapter(video, {
      mimetype: 'video/mp4',
      url: '/base/src/assets/audios.mp4'
    }, {});

    nativeInstance.load().then(() => {
      done();
    });
  });

  it('should failed', (done) => {
    nativeInstance = NativeAdapter.createAdapter(video, {
      mimetype: 'video/mp4',
      url: 'some corrupted_url'
    }, {});

    nativeInstance.load().catch((error) => {
      error.should.be.exist;
      done();
    });
  });
});

describe('NativeAdapter: destroy', function () {
  this.timeout(10000);

  let video, nativeInstance;

  beforeEach(() => {
    video = document.createElement("video");
    nativeInstance = NativeAdapter.createAdapter(video, {
      mimetype: 'video/mp4',
      url: '/base/src/assets/audios.mp4'
    }, {});
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  after(function () {
    removeVideoElementsFromTestPage();
  });

  it('should destroyed', (done) => {
    nativeInstance.load().then(() => {
      nativeInstance._loadPromise.should.be.exist;
      nativeInstance._sourceObj.should.be.exist;
      nativeInstance.destroy();
      (!nativeInstance._loadPromise).should.be.true;
      (!nativeInstance._sourceObj).should.be.true;
      done();
    });
  });
});

describe('NativeAdapter:_getParsedTracks', function () {
  this.timeout(10000);

  let video;
  let track1;
  let track2;
  let nativeInstance;

  before(() => {
    track1 = document.createElement("track");
    track2 = document.createElement("track");
    track1.kind = 'subtitles';
    track1.label = 'English';
    track1.default = true;
    track2.kind = 'captions';
    track2.srclang = 'fr';
  });

  beforeEach(() => {
    video = document.createElement("video");
    nativeInstance = NativeAdapter.createAdapter(video, {
      mimetype: 'video/mp4',
      url: '/base/src/assets/audios.mp4'
    }, {});
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  it('should return the parsed tracks', (done) => {
    video.appendChild(track1);
    video.appendChild(track2);
    nativeInstance.load().then((data) => {
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
      data.tracks.length.should.be.equal(totalTracksLength);
      data.tracks.map((track) => {
        if (track instanceof VideoTrack) {
          track.id.should.equal(video.videoTracks[track.index].id);
          track.active.should.equal(video.videoTracks[track.index].selected);
          track.label.should.equal(video.videoTracks[track.index].label);
          track.language.should.equal(video.videoTracks[track.index].language);
        }
        if (track instanceof AudioTrack) {
          track.id.should.equal(video.audioTracks[track.index].id);
          track.active.should.equal(video.audioTracks[track.index].enabled);
          track.label.should.equal(video.audioTracks[track.index].label);
          track.language.should.equal(video.audioTracks[track.index].language);
        }
        if (track instanceof TextTrack) {
          track.kind.should.equal(video.textTracks[track.index].kind);
          track.active.should.equal(video.textTracks[track.index].mode === 'showing');
          track.label.should.equal(video.textTracks[track.index].label);
          track.language.should.equal(video.textTracks[track.index].language);
        }
      });
      done();
    });
  });

  it('should return empty array before loading', () => {
    let tracks = nativeInstance._getParsedTracks();
    tracks.length.should.be.equal(0);
  });
});

describe('NativeAdapter:selectAudioTrack', function () {
  this.timeout(10000);

  let video;
  let nativeInstance;

  beforeEach(() => {
    video = document.createElement("video");
    nativeInstance = NativeAdapter.createAdapter(video, {
      mimetype: 'video/mp4',
      url: '/base/src/assets/audios.mp4'
    }, {});
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  it('should select a new audio track', (done) => {
    nativeInstance.load().then(() => {
      if (nativeInstance._videoElement.audioTracks) {
        nativeInstance._videoElement.audioTracks[0].enabled.should.be.true;
        nativeInstance._videoElement.audioTracks[1].enabled.should.be.false;
        nativeInstance._videoElement.audioTracks[2].enabled.should.be.false;
        nativeInstance.selectAudioTrack(new AudioTrack({index: 2}));
        nativeInstance._videoElement.audioTracks[0].enabled.should.be.false;
        nativeInstance._videoElement.audioTracks[1].enabled.should.be.false;
        nativeInstance._videoElement.audioTracks[2].enabled.should.be.true;
      }
      done();
    });
  });

  it('should not change the selected audio track', (done) => {
    nativeInstance.load().then(() => {
      if (nativeInstance._videoElement.audioTracks) {
        nativeInstance._videoElement.audioTracks[0].enabled.should.be.true;
        nativeInstance._videoElement.audioTracks[1].enabled.should.be.false;
        nativeInstance._videoElement.audioTracks[2].enabled.should.be.false;
        nativeInstance.selectAudioTrack(new AudioTrack({index: 0}));
        nativeInstance._videoElement.audioTracks[0].enabled.should.be.true;
        nativeInstance._videoElement.audioTracks[1].enabled.should.be.false;
        nativeInstance._videoElement.audioTracks[2].enabled.should.be.false;
      }
      done();
    });
  });

  it('should not change the selected for non exist audio track', (done) => {
    nativeInstance.load().then(() => {
      if (nativeInstance._videoElement.audioTracks) {
        nativeInstance._videoElement.audioTracks[0].enabled.should.be.true;
        nativeInstance._videoElement.audioTracks[1].enabled.should.be.false;
        nativeInstance._videoElement.audioTracks[2].enabled.should.be.false;
        nativeInstance.selectAudioTrack(new AudioTrack({index: 3}));
        nativeInstance._videoElement.audioTracks[0].enabled.should.be.true;
        nativeInstance._videoElement.audioTracks[1].enabled.should.be.false;
        nativeInstance._videoElement.audioTracks[2].enabled.should.be.false;
      }
      done();
    });
  });
});

describe('NativeAdapter:selectTextTrack', function () {
  this.timeout(10000);

  let video;
  let track1;
  let track2;
  let nativeInstance;

  beforeEach(() => {
    video = document.createElement("video");
    track1 = document.createElement("track");
    track2 = document.createElement("track");
    track1.kind = 'subtitles';
    track1.label = 'English';
    track1.default = true;
    track2.kind = 'subtitles';
    track2.srclang = 'fr';
    video.appendChild(track1);
    video.appendChild(track2);
    nativeInstance = NativeAdapter.createAdapter(video, {
      mimetype: 'video/mp4',
      url: '/base/src/assets/audios.mp4'
    }, {});
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  it('should select a new subtitles track', (done) => {
    nativeInstance.load().then(() => {
      if (nativeInstance._videoElement.textTracks) {
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('showing');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('disabled');
        nativeInstance.selectTextTrack(new TextTrack({index: 1, kind: 'subtitles'}));
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('disabled');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('showing');
      }
      done();
    });
  });

  it('should select a new captions track', (done) => {
    nativeInstance.load().then(() => {
      if (nativeInstance._videoElement.textTracks) {
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('showing');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('disabled');
        nativeInstance.selectTextTrack(new TextTrack({index: 1, kind: 'captions'}));
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('disabled');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('showing');
      }
      done();
    });
  });

  it('should not change the selected text track', (done) => {
    nativeInstance.load().then(() => {
      if (nativeInstance._videoElement.textTracks) {
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('showing');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('disabled');
        nativeInstance.selectTextTrack(new TextTrack({index: 0, kind: 'subtitles'}));
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('showing');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('disabled');
      }
      done();
    });
  });

  it('should not change the selected for non exist text track', (done) => {
    nativeInstance.load().then(() => {
      if (nativeInstance._videoElement.textTracks) {
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('showing');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('disabled');
        nativeInstance.selectTextTrack(new TextTrack({index: 3, kind: 'subtitles'}));
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('showing');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('disabled');
      }
      done();
    });
  });

  it('should not change the selected for metadata text track', (done) => {
    nativeInstance.load().then(() => {
      if (nativeInstance._videoElement.textTracks) {
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('showing');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('disabled');
        nativeInstance.selectTextTrack(new TextTrack({index: 1, kind: 'metadata'}));
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('showing');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('disabled');
      }
      done();
    });
  });
});

describe('NativeAdapter:hideTextTrack', function () {
  this.timeout(10000);

  let video;
  let track1;
  let track2;
  let nativeInstance;

  beforeEach(() => {
    video = document.createElement("video");
    track1 = document.createElement("track");
    track2 = document.createElement("track");
    track1.kind = 'subtitles';
    track1.label = 'English';
    track1.default = true;
    track2.kind = 'subtitles';
    track2.srclang = 'fr';
    video.appendChild(track1);
    video.appendChild(track2);
    nativeInstance = NativeAdapter.createAdapter(video, {
      mimetype: 'video/mp4',
      url: '/base/src/assets/audios.mp4'
    }, {});
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  it('should disable the active text track', (done) => {
    nativeInstance.load().then(() => {
      if (nativeInstance._videoElement.textTracks) {
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('showing');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('disabled');
        nativeInstance.hideTextTrack();
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('disabled');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('disabled');
      }
      done();
    });
  });
});

