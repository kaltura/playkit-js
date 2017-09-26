import NativeAdapter from '../../../../../../src/engines/html5/media-source/adapters/native-adapter'
import VideoTrack from '../../../../../../src/track/video-track'
import AudioTrack from '../../../../../../src/track/audio-track'
import TextTrack from '../../../../../../src/track/text-track'
import {removeVideoElementsFromTestPage} from '../../../../utils/test-utils'
import sourcesConfig from '../../../../configs/sources.json'
import * as Utils from '../../../../../../src/utils/util'
import {CUSTOM_EVENTS} from '../../../../../../src/event/events'


describe('NativeAdapter: isSupported', () => {
  it('should be supported', () => {
    NativeAdapter.isSupported().should.be.true;
  });
});

describe('NativeAdapter: canPlayType', () => {
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

  it('should return application/x-mpegURL not supported if preferNative equals false', () => {
    NativeAdapter.canPlayType('application/x-mpegURL', false).should.be.false;
  });

  it('should return false for unsupported mime type', () => {
    NativeAdapter.canPlayType('someType').should.be.false;
  });

  it('should return false for no mime type', () => {
    NativeAdapter.canPlayType().should.be.false;
  });
});

describe('NativeAdapter: createAdapter', () => {
  let video;
  let nativeInstance;

  before(() => {
    video = document.createElement('video');
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  beforeEach(() => {
    nativeInstance = NativeAdapter.createAdapter(video, {url: 'url3'}, {sources: {}});
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

describe('NativeAdapter: constructor', () => {
  let video;
  let nativeInstance;

  before(() => {
    video = document.createElement('video');
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  beforeEach(() => {
    nativeInstance = new NativeAdapter(video, {url: 'url3'}, {sources: {}});
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

describe('NativeAdapter: _isProgressivePlayback', function () {

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

  it('should return true for mp4', () => {
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.Mp4.progressive[0], {sources: {}});
    nativeInstance._isProgressivePlayback().should.be.true
  });

  it('should return false for non mp4', () => {
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.UnknownMimetype.progressive[0], {sources: {}});
    nativeInstance._isProgressivePlayback().should.be.false
  });
});

describe('NativeAdapter: load', function () {

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
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.Mp4.progressive[0], {sources: {}});
    nativeInstance.load().then(() => {
      done();
    });
  });

  it('should failed', (done) => {
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.CorruptedUrl.progressive[0], {sources: {}});
    nativeInstance.load().catch((error) => {
      error.should.be.exist;
      done();
    });
  });
});

describe('NativeAdapter: _setProgressiveSource', function () {

  let video, nativeInstance;

  beforeEach(() => {
    video = document.createElement("video");
    document.body.appendChild(video);
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  it('should replace _sourceObj', (done) => {
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.MultipleSources.progressive[1], {sources: sourcesConfig.MultipleSources});
    nativeInstance.load().then(() => {
      nativeInstance._sourceObj.id.should.equal('id1');
      done();
    });
  });

  it('should not replace _sourceObj', (done) => {
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.MultipleSources.progressive[0], {sources: sourcesConfig.MultipleSources});
    nativeInstance.load().then(() => {
      nativeInstance._sourceObj.id.should.equal('id1');
      done();
    });
  });
});

describe('NativeAdapter: destroy', function () {

  let video, nativeInstance;

  beforeEach(() => {
    video = document.createElement("video");
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.Mp4.progressive[0], {sources: {}});
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
      Utils.Object.isEmptyObject(nativeInstance._sourceObj).should.be.false;
      nativeInstance.destroy();
      (!nativeInstance._loadPromise).should.be.true;
      Utils.Object.isEmptyObject(nativeInstance._sourceObj).should.be.true;
      done();
    });
  });
});

describe('NativeAdapter: _getParsedTracks', function () {

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
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.MultipleSources.progressive[0], {sources: sourcesConfig.MultipleSources});
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
      let videoTracksLength = 2;
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
      data.tracks.length.should.be.equal(totalTracksLength);
      data.tracks.map((track) => {
        if (track instanceof VideoTrack) {
          track.id.should.equal(sourcesConfig.MultipleSources.progressive[track.index].id);
          track.active.should.equal(track.id === nativeInstance._sourceObj.id);
          track.width.should.equal(sourcesConfig.MultipleSources.progressive[track.index].width);
          track.height.should.equal(sourcesConfig.MultipleSources.progressive[track.index].height);
          track.bandwidth.should.equal(sourcesConfig.MultipleSources.progressive[track.index].bandwidth);
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

  it('should return only progressive video tracks before loading', () => {
    let tracks = nativeInstance._getParsedTracks();
    tracks.length.should.be.equal(2);
  });
});

describe('NativeAdapter: _selectProgressiveVideoTrack', function () {

  let video;
  let nativeInstance;

  beforeEach(() => {
    video = document.createElement("video");
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.MultipleSources.progressive[1], {sources: sourcesConfig.MultipleSources});
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  it('should select a new video track', (done) => {
    nativeInstance.load().then(() => {
      nativeInstance.addEventListener(CUSTOM_EVENTS.VIDEO_TRACK_CHANGED, (event) => {
        event.payload.selectedVideoTrack.index.should.equal(0);
        nativeInstance._videoElement.currentTime.should.equal(2);
        nativeInstance._videoElement.paused.should.be.true;
        done();
      });
      (nativeInstance._videoElement.src.indexOf(sourcesConfig.MultipleSources.progressive[1].url) > -1).should.be.true;
      (nativeInstance._videoElement.src.indexOf(sourcesConfig.MultipleSources.progressive[0].url) > -1).should.be.false;
      nativeInstance._videoElement.currentTime = 2;
      nativeInstance._selectProgressiveVideoTrack(new VideoTrack({index: 0}));
      (nativeInstance._videoElement.src.indexOf(sourcesConfig.MultipleSources.progressive[1].url) > -1).should.be.false;
      (nativeInstance._videoElement.src.indexOf(sourcesConfig.MultipleSources.progressive[0].url) > -1).should.be.true;
    });
  });

  it('should not change the selected for non exist video track', (done) => {
    nativeInstance.load().then(() => {
      (nativeInstance._videoElement.src.indexOf(sourcesConfig.MultipleSources.progressive[1].url) > -1).should.be.true;
      (nativeInstance._videoElement.src.indexOf(sourcesConfig.MultipleSources.progressive[0].url) > -1).should.be.false;
      nativeInstance._selectProgressiveVideoTrack(new VideoTrack({index: 2}));
      (nativeInstance._videoElement.src.indexOf(sourcesConfig.MultipleSources.progressive[1].url) > -1).should.be.true;
      (nativeInstance._videoElement.src.indexOf(sourcesConfig.MultipleSources.progressive[0].url) > -1).should.be.false;
      done();
    });
  });
});

describe('NativeAdapter: selectVideoTrack - progressive', function () {

  let video;
  let nativeInstance;

  beforeEach(() => {
    video = document.createElement("video");
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.MultipleSources.progressive[1], {sources: sourcesConfig.MultipleSources});
  });

  afterEach(() => {
    nativeInstance.destroy();
    nativeInstance = null;
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  it('should select a new video track', (done) => {
    nativeInstance.load().then(() => {
      (nativeInstance._videoElement.src.indexOf(sourcesConfig.MultipleSources.progressive[1].url) > -1).should.be.true;
      (nativeInstance._videoElement.src.indexOf(sourcesConfig.MultipleSources.progressive[0].url) > -1).should.be.false;
      nativeInstance.selectVideoTrack(new VideoTrack({index: 0}));
      (nativeInstance._videoElement.src.indexOf(sourcesConfig.MultipleSources.progressive[1].url) > -1).should.be.false;
      (nativeInstance._videoElement.src.indexOf(sourcesConfig.MultipleSources.progressive[0].url) > -1).should.be.true;
      done();
    });
  });
});

describe('NativeAdapter: selectAudioTrack', function () {

  let video;
  let nativeInstance;

  beforeEach(() => {
    video = document.createElement("video");
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.Mp4.progressive[0], {sources: {}});
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
        nativeInstance.addEventListener(CUSTOM_EVENTS.AUDIO_TRACK_CHANGED, (event) => {
          event.payload.selectedAudioTrack.index.should.equal(2);
          done();
        });
        nativeInstance._videoElement.audioTracks[0].enabled.should.be.true;
        nativeInstance._videoElement.audioTracks[1].enabled.should.be.false;
        nativeInstance._videoElement.audioTracks[2].enabled.should.be.false;
        nativeInstance.selectAudioTrack(new AudioTrack({index: 2}));
        nativeInstance._videoElement.audioTracks[0].enabled.should.be.false;
        nativeInstance._videoElement.audioTracks[1].enabled.should.be.false;
        nativeInstance._videoElement.audioTracks[2].enabled.should.be.true;
      } else {
        done();
      }
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

describe('NativeAdapter: selectTextTrack', function () {

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
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.Mp4.progressive[0], {sources: {}});
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
        nativeInstance.addEventListener(CUSTOM_EVENTS.TEXT_TRACK_CHANGED, (event) => {
          event.payload.selectedTextTrack.index.should.equal(1);
          done();
        });
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('showing');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('disabled');
        nativeInstance.selectTextTrack(new TextTrack({index: 1, kind: 'subtitles'}));
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('disabled');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('hidden');
      } else {
        done();
      }
    });
  });

  it('should select a new captions track', (done) => {
    nativeInstance.load().then(() => {
      if (nativeInstance._videoElement.textTracks) {
        nativeInstance.addEventListener(CUSTOM_EVENTS.TEXT_TRACK_CHANGED, (event) => {
          event.payload.selectedTextTrack.index.should.equal(1);
          done();
        });
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('showing');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('disabled');
        nativeInstance.selectTextTrack(new TextTrack({index: 1, kind: 'captions'}));
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('disabled');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('hidden');
      } else {
        done();
      }
    });
  });

  it('should not change the selected text track', (done) => {
    nativeInstance.load().then(() => {
      if (nativeInstance._videoElement.textTracks) {
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('showing');
        nativeInstance._videoElement.textTracks[1].mode.should.be.equal('disabled');
        nativeInstance.selectTextTrack(new TextTrack({index: 0, kind: 'subtitles'}));
        nativeInstance._videoElement.textTracks[0].mode.should.be.equal('hidden');
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

describe('NativeAdapter: hideTextTrack', function () {

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
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.Mp4.progressive[0], {sources: {}});
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

describe('NativeAdapter: isLive', function () {
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

  it('should return false for VOD', function (done) {
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.Mp4.progressive[0], {sources: {}});
    nativeInstance.load().then(() => {
      nativeInstance.isLive().should.be.false;
      done();
    });
  });

  it('should return false for live before load', () => {
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.Live.hls[0], {sources: {}});
    nativeInstance.isLive().should.be.false;
  });

  it('should return true for live', (done) => {
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.Live.hls[0], {sources: {}});
    nativeInstance.load().then(() => {
      nativeInstance.isLive().should.be.true;
      done();
    }).catch(() => {
      done();
    });
  });
});

describe('NativeAdapter: seekToLiveEdge', () => {
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

  it('should seek to live edge', (done) => {
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.Live.hls[0], {sources: {}});
    nativeInstance.load().then(() => {
      video.currentTime = 0;
      video.currentTime.should.not.equal(nativeInstance.duration);
      nativeInstance.seekToLiveEdge();
      video.currentTime.should.equal(nativeInstance.duration);
      done();
    }).catch(() => {
      done();
    });
  });
});

describe('NativeAdapter: get duration', () => {
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

  it('should return video tag duration for VOD', (done) => {
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.Mp4.progressive[0], {sources: {}});
    nativeInstance.load().then(() => {
      nativeInstance.duration.should.be.equal(video.duration);
      done();
    });
  });

  it('should return live duration for live', (done) => {
    nativeInstance = NativeAdapter.createAdapter(video, sourcesConfig.Live.hls[0], {sources: {}});
    nativeInstance.load().then(() => {
      let duration;
      if (nativeInstance._videoElement.seekable.length) {
        duration = nativeInstance._videoElement.seekable.end(nativeInstance._videoElement.seekable.length - 1);
      } else if (nativeInstance._videoElement.buffered.length) {
        duration = nativeInstance._videoElement.buffered.end(nativeInstance._videoElement.buffered.length - 1);
      } else {
        duration = nativeInstance._videoElement.duration;
      }
      nativeInstance.duration.should.be.equal(duration);
      done();
    }).catch(() => {
      done();
    });
  });
});


