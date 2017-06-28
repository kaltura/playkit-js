import Player from '../../src/player'
import PlayerStates from '../../src/state/state-types'
import {HTML5_EVENTS as Html5Events, CUSTOM_EVENTS as CustomEvents} from '../../src/event/events'
import sourcesConfig from './configs/sources.json'
import VideoTrack from '../../src/track/video-track'
import AudioTrack from '../../src/track/audio-track'
import TextTrack from '../../src/track/text-track'
import {removeVideoElementsFromTestPage, createElement, removeElemenet, getConfigStructure} from './utils/test-utils'

const targetId = 'player-placeholder_player.spec';

describe("play", function () {
  this.timeout(10000);

  let config, player;

  before(() => {
    createElement('DIV', targetId);
    config = getConfigStructure();
    config.sources = sourcesConfig.Mp4HlsDash;
  });

  beforeEach(() => {
    player = new Player(targetId, config);
  });

  afterEach(() => {
    player.destroy();
  });

  after(() => {
    removeVideoElementsFromTestPage();
    removeElemenet(targetId);
  });

  it("should success before load", (done) => {
    player.addEventListener('playing', () => {
      done();
    });
    player.play();
  });

  it("should success after load", (done) => {
    player.addEventListener('playing', () => {
      done();
    });
    player.load();
    player.ready().then(() => {
      player.play();
    });
  });
});

describe("ready", function () {

  describe("success", () => {

    let config;

    before(() => {
      createElement('DIV', targetId);
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4HlsDash;
    });

    describe("preload none", () => {

      describe("passing config in constructor", () => {

        let player;

        beforeEach(() => {
          player = new Player(targetId, config);
        });

        afterEach(() => {
          player.destroy();
        });

        it("should success ready -> load", (done) => {
          player.ready()
            .then(() => {
              done();
            });
          player.load();
        });

        it("should success load -> ready", (done) => {
          player.load();
          player.ready()
            .then(() => {
              done();
            });
        });
      });

      describe("passing config in configure", function () {
        this.timeout(10000);

        let player;

        beforeEach(() => {
          player = new Player(targetId);
        });

        afterEach(() => {
          player.destroy();
        });

        it("should success configure -> ready -> load", (done) => {
          player.configure(config);
          player.ready()
            .then(() => {
              done();
            });
          player.load();
        });

        it("should success configure -> load -> ready", (done) => {
          player.configure(config);
          player.load();
          player.ready()
            .then(() => {
              done();
            });
        });

        it("should success ready -> configure -> load", (done) => {
          player.ready()
            .then(() => {
              done();
            });
          player.configure(config);
          player.load();
        });
      });
    });

    describe("preload auto", () => {

      describe("passing config in constructor", function () {
        this.timeout(10000);

        let player;

        beforeEach(() => {
          config.playback.preload = 'auto';
          player = new Player(targetId, config);
        });

        afterEach(() => {
          player.destroy();
        });

        it("should success ready -> load", (done) => {
          player.ready()
            .then(() => {
              done();
            });
          player.load();
        });

        it("should success load -> ready", (done) => {
          player.load();
          player.ready()
            .then(() => {
              done();
            });
        });
      });

      describe("passing config in configure", () => {

        let player;

        beforeEach(() => {
          config.playback.preload = 'auto';
          player = new Player(targetId);
        });

        afterEach(() => {
          player.destroy();
        });

        it("should success configure -> ready -> load", (done) => {
          player.configure(config);
          player.ready()
            .then(() => {
              done();
            });
          player.load();
        });

        it("should success configure -> load -> ready", (done) => {
          player.configure(config);
          player.load();
          player.ready()
            .then(() => {
              done();
            });
        });

        it("should success ready -> load -> configure", (done) => {
          player.ready()
            .then(() => {
              done();
            });
          player.load();
          player.configure(config);
        });

        it("should success ready -> configure -> load", (done) => {
          player.ready()
            .then(() => {
              done();
            });
          player.configure(config);
          player.load();
        });

        it("should success load -> configure -> ready", (done) => {
          player.load();
          player.configure(config);
          player.ready()
            .then(() => {
              done();
            });
        });

        it("should success load -> ready -> configure", (done) => {
          player.load();
          player.ready()
            .then(() => {
              done();
            });
          player.configure(config);
        });
      });
    });

  });

  describe("failure", () => {

    let config;

    before(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.CorruptedUrl;
    });

    describe("preload none", () => {

      describe("passing config in constructor", function () {
        this.timeout(10000);

        let player;

        beforeEach(() => {
          player = new Player(targetId, config);
        });

        afterEach(() => {
          player.destroy();
        });

        it("should fail ready -> load", (done) => {
          player.ready()
            .catch((error) => {
              error.type.should.be.equal('error');
              done();
            });
          player.load();
        });

        it("should fail load -> ready", (done) => {
          player.load();
          player.ready()
            .catch((error) => {
              error.type.should.be.equal('error');
              done();
            });
        });
      });

      describe("passing config in configure", function () {
        this.timeout(10000);

        let player;

        beforeEach(() => {
          player = new Player(targetId);
        });

        afterEach(() => {
          player.destroy();
        });

        it("should fail configure -> ready -> load", (done) => {
          player.configure(config);
          player.ready()
            .catch((error) => {
              error.type.should.be.equal('error');
              done();
            });
          player.load();
        });

        it("should fail configure -> load -> ready", (done) => {
          player.configure(config);
          player.load();
          player.ready()
            .catch((error) => {
              error.type.should.be.equal('error');
              done();
            });
        });

        it("should fail ready -> configure -> load", (done) => {
          player.ready()
            .catch((error) => {
              error.type.should.be.equal('error');
              done();
            });
          player.configure(config);
          player.load();
        });
      });
    });

    describe("preload auto", () => {

      describe("passing config in constructor", () => {

        let player;

        beforeEach(() => {
          config.playback.preload = 'auto';
          player = new Player(targetId, config);
        });

        afterEach(() => {
          player.destroy();
        });

        it("should fail ready -> load", (done) => {
          player.ready()
            .catch((error) => {
              error.type.should.be.equal('error');
              done();
            });
          player.load();
        });

        it("should fail load -> ready", (done) => {
          player.load();
          player.ready()
            .catch((error) => {
              error.type.should.be.equal('error');
              done();
            });
        });
      });

      describe("passing config in configure", () => {

        let player;

        beforeEach(() => {
          config.playback.preload = 'auto';
          player = new Player(targetId);
        });

        afterEach(() => {
          player.destroy();
        });

        it("should fail configure -> ready -> load", (done) => {
          player.configure(config);
          player.ready()
            .catch((error) => {
              error.type.should.be.equal('error');
              done();
            });
          player.load();
        });

        it("should fail configure -> load -> ready", (done) => {
          player.configure(config);
          player.load();
          player.ready()
            .catch((error) => {
              error.type.should.be.equal('error');
              done();
            });
        });

        it("should fail ready -> load -> configure", (done) => {
          player.ready()
            .catch((error) => {
              error.type.should.be.equal('error');
              done();
            });
          player.load();
          player.configure(config);
        });

        it("should fail ready -> configure -> load", (done) => {
          player.ready()
            .catch((error) => {
              error.type.should.be.equal('error');
              done();
            });
          player.configure(config);
          player.load();
        });

        it("should fail load -> configure -> ready", (done) => {
          player.load();
          player.configure(config);
          player.ready()
            .catch((error) => {
              error.type.should.be.equal('error');
              done();
            });
        });

        it("should fail load -> ready -> configure", (done) => {
          player.load();
          player.ready()
            .catch((error) => {
              error.type.should.be.equal('error');
              done();
            });
          player.configure(config);
        });
      });
    });

  });

  after(() => {
    removeVideoElementsFromTestPage();
    removeElemenet(targetId);
  });
});

describe('getTracks dummy', () => {
  let player, config;

  before(() => {
    createElement('DIV', targetId);
    config = getConfigStructure();
    config.sources = sourcesConfig.Mp4HlsDash;
    player = new Player(targetId, config);
    player._tracks = [
      new VideoTrack(),
      new AudioTrack(),
      new AudioTrack(),
      new TextTrack(),
      new TextTrack(),
      new TextTrack()
    ];
  });

  after(() => {
    removeVideoElementsFromTestPage();
    removeElemenet(targetId);
  });

  it('should return all tracks for no type', () => {
    player.getTracks().length.should.be.equal(6);
  });

  it('should return video tracks', () => {
    player.getTracks('video').length.should.be.equal(1);
  });

  it('should return audio tracks', () => {
    player.getTracks('audio').length.should.be.equal(2);
  });

  it('should return text tracks', () => {
    player.getTracks('text').length.should.be.equal(3);
  });

  it('should return all tracks for unknown type', () => {
    player.getTracks('some').length.should.be.equal(6);
  });
});

describe('getTracks real', function () {
  this.timeout(10000);

  let config;
  let player;
  let video;
  let track1;
  let track2;

  before(() => {
    createElement('DIV', targetId);
    track1 = document.createElement("track");
    track2 = document.createElement("track");
    track1.kind = 'subtitles';
    track1.label = 'English';
    track1.default = true;
    track2.kind = 'captions';
    track2.srclang = 'fr';
  });

  beforeEach(() => {
    config = getConfigStructure();
    config.sources = sourcesConfig.Mp4HlsDash;
    player = new Player(targetId, config);
    video = player._engine.getVideoElement();
    video.appendChild(track1);
    video.appendChild(track2);
  });

  afterEach(() => {
    player.destroy();
  });

  after(() => {
    removeVideoElementsFromTestPage();
    removeElemenet(targetId);
  });

  it('should return all tracks using ready', (done) => {
    player.ready().then(() => {
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
      player.getTracks().length.should.be.equal(totalTracksLength);
      done();
    });
    player.load();
  });

  it('should return video tracks', (done) => {
    player.ready().then(() => {
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      player.getTracks('video').length.should.be.equal(videoTracksLength);
      done();
    });
    player.load();
  });

  it('should return audio tracks', (done) => {
    player.load();
    player.ready().then(() => {
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      player.getTracks('audio').length.should.be.equal(audioTracksLength);
      done();
    });
  });

  it('should return text tracks', (done) => {
    player.ready().then(() => {
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      player.getTracks('text').length.should.be.equal(textTracksLength);
      done();
    });
    player.load();
  });

  it('should return all tracks for unknown type', (done) => {
    player.ready().then(() => {
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
      player.getTracks('some').length.should.be.equal(totalTracksLength);
      done();
    });
    player.load();
  });

  it('should return empty array before loading', () => {
    let tracks = player.getTracks();
    tracks.length.should.be.equal(0);
  });
});

describe('selectTrack - audio', function () {
  this.timeout(10000);

  let config, player, video;

  before(() => {
    createElement('DIV', targetId);
  });

  beforeEach(() => {
    config = getConfigStructure();
    config.sources = sourcesConfig.Mp4HlsDash;
    player = new Player(targetId);
  });

  afterEach(() => {
    player.destroy();
  });

  after(() => {
    removeVideoElementsFromTestPage();
    removeElemenet(targetId);
  });

  it('should select a new audio track', (done) => {
    player.ready().then(() => {
      if (video.audioTracks) {
        player.addEventListener(CustomEvents.AUDIO_TRACK_CHANGED, (event) => {
          (event.payload instanceof AudioTrack).should.be.true;
          event.payload.index.should.equal(2);
          video.audioTracks[0].enabled.should.be.false;
          video.audioTracks[1].enabled.should.be.false;
          video.audioTracks[2].enabled.should.be.true;
          tracks[0].active.should.be.false;
          tracks[1].active.should.be.false;
          tracks[2].active.should.be.true;
          done();
        });
        let tracks = player._tracks.filter((track) => {
          return track instanceof AudioTrack;
        });
        video.audioTracks[0].enabled.should.be.true;
        video.audioTracks[1].enabled.should.be.false;
        video.audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
        player.selectTrack(new AudioTrack({index: 2}));
      }
      done();
    });
    player.configure(config);
    player.load();
    video = player._engine.getVideoElement();
  });

  it('should not change the selected audio track', (done) => {
    player.ready().then(() => {
      if (video.audioTracks) {
        let tracks = player._tracks.filter((track) => {
          return track instanceof AudioTrack;
        });
        video.audioTracks[0].enabled.should.be.true;
        video.audioTracks[1].enabled.should.be.false;
        video.audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
        player.selectTrack(new AudioTrack({index: 0}));
        video.audioTracks[0].enabled.should.be.true;
        video.audioTracks[1].enabled.should.be.false;
        video.audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
      }
      done();
    });
    config.playback = {preload: 'auto'};
    player.configure(config);
    video = player._engine.getVideoElement();
    player.load();
  });

  it('should not change the selected for non exist audio track', (done) => {
    player.ready().then(() => {
      if (video.audioTracks) {
        let tracks = player._tracks.filter((track) => {
          return track instanceof AudioTrack;
        });
        video.audioTracks[0].enabled.should.be.true;
        video.audioTracks[1].enabled.should.be.false;
        video.audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
        player.selectTrack(new AudioTrack({index: 3}));
        video.audioTracks[0].enabled.should.be.true;
        video.audioTracks[1].enabled.should.be.false;
        video.audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
      }
      done();
    });
    player.configure(config);
    player.load();
    video = player._engine.getVideoElement();
  });
});

describe('selectTrack - text', function () {
  this.timeout(10000);

  let config, player, video, track1, track2;

  before(() => {
    createElement('DIV', targetId);
  });

  beforeEach(() => {
    config = getConfigStructure();
    config.sources = sourcesConfig.Mp4HlsDash;
    player = new Player(targetId, config);
    video = player._engine.getVideoElement();
    track1 = document.createElement("track");
    track2 = document.createElement("track");
    track1.kind = 'subtitles';
    track1.label = 'English';
    track1.default = true;
    track2.kind = 'subtitles';
    track2.srclang = 'fr';
    video.appendChild(track1);
    video.appendChild(track2);
  });

  afterEach(() => {
    player.destroy();
  });

  after(() => {
    removeVideoElementsFromTestPage();
    removeElemenet(targetId);
  });

  it('should select a new subtitles track', (done) => {
    player.ready().then(() => {
      player.addEventListener(CustomEvents.TEXT_TRACK_CHANGED, (event) => {
        (event.payload.selectedTextTrack instanceof TextTrack).should.be.true;
        event.payload.selectedTextTrack.index.should.equal(1);
        video.textTracks[0].mode.should.be.equal('disabled');
        video.textTracks[1].mode.should.be.equal('showing');
        tracks[0].active.should.be.false;
        tracks[1].active.should.be.true;
        done();
      });
      let tracks = player._tracks.filter((track) => {
        return track instanceof TextTrack;
      });
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      player.selectTrack(new TextTrack({index: 1, kind: 'subtitles'}));
    });
    player.load();
  });

  it('should select a new captions track', (done) => {
    player.load();
    player.ready().then(() => {
      player.addEventListener(CustomEvents.TEXT_TRACK_CHANGED, (event) => {
        (event.payload.selectedTextTrack instanceof TextTrack).should.be.true;
        event.payload.selectedTextTrack.index.should.equal(1);
        video.textTracks[0].mode.should.be.equal('disabled');
        video.textTracks[1].mode.should.be.equal('showing');
        tracks[0].active.should.be.false;
        tracks[1].active.should.be.true;
        done();
      });
      let tracks = player._tracks.filter((track) => {
        return track instanceof TextTrack;
      });
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      player.selectTrack(new TextTrack({index: 1, kind: 'captions'}));
    });
  });

  it('should not change the selected text track', (done) => {
    player.ready().then(() => {
      let tracks = player._tracks.filter((track) => {
        return track instanceof TextTrack;
      });
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      player.selectTrack(new TextTrack({index: 0, kind: 'subtitles'}));
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      done();
    });
    player.load();
  });

  it('should not change the selected for non exist text track', (done) => {
    player.load();
    player.ready().then(() => {
      let tracks = player._tracks.filter((track) => {
        return track instanceof TextTrack;
      });
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      player.selectTrack(new TextTrack({index: 3, kind: 'subtitles'}));
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      done();
    });
  });

  it('should not change the selected for metadata text track', (done) => {
    player.ready().then(() => {
      let tracks = player._tracks.filter((track) => {
        return track instanceof TextTrack;
      });
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      player.selectTrack(new TextTrack({index: 1, kind: 'metadata'}));
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      done();
    });
    player.load();
  });
});

describe('hideTextTrack', function () {
  this.timeout(10000);

  let config, player, video, track1, track2;

  before(() => {
    createElement('DIV', targetId);
  });

  beforeEach(() => {
    config = getConfigStructure();
    config.sources = sourcesConfig.Mp4HlsDash;
    player = new Player(targetId, config);
    video = player._engine.getVideoElement();
    track1 = document.createElement("track");
    track2 = document.createElement("track");
    track1.kind = 'subtitles';
    track1.label = 'English';
    track1.default = true;
    track2.kind = 'subtitles';
    track2.srclang = 'fr';
    video.appendChild(track1);
    video.appendChild(track2);
  });

  afterEach(() => {
    player.destroy();
  });

  after(() => {
    removeVideoElementsFromTestPage();
    removeElemenet(targetId);
  });

  it('should disable the active text track', (done) => {
    player.ready().then(() => {
      let tracks = player._tracks.filter((track) => {
        return track instanceof TextTrack;
      });
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      player.hideTextTrack();
      video.textTracks[0].mode.should.be.equal('disabled');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.false;
      tracks[1].active.should.be.false;
      done();
    });
    player.load();
  });
});

describe('Track enum', function () {
  before(() => {
    createElement('DIV', targetId);
  });

  after(() => {
    removeVideoElementsFromTestPage();
    removeElemenet(targetId);
  });

  it('should return the track enum', () => {
    let config = getConfigStructure();
    config.sources = sourcesConfig.Mp4HlsDash;
    let player = new Player(targetId, config);
    player.Track.VIDEO.should.be.equal('video');
    player.Track.AUDIO.should.be.equal('audio');
    player.Track.TEXT.should.be.equal('text');
  });
});

describe('events', function () {
  describe('tracks changed', function () {
    this.timeout(10000);

    let config, player, video, track1, track2;

    before(() => {
      createElement('DIV', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4HlsDash;
      player = new Player(targetId, config);
      video = player._engine.getVideoElement();
      track1 = document.createElement("track");
      track2 = document.createElement("track");
      track1.kind = 'subtitles';
      track1.label = 'English';
      track1.default = true;
      track2.kind = 'subtitles';
      track2.srclang = 'fr';
      video.appendChild(track1);
      video.appendChild(track2);
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElemenet(targetId);
    });

    it('should fire tracks changed', function (done) {
      /**
       * Handles assertions after tracks changed event.
       * @param {Object} data - The event data.
       * @returns {void}
       */
      function onTracksChanged(data) {
        player.removeEventListener(CustomEvents.TRACKS_CHANGED, onTracksChanged);
        let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
        let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
        let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
        let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
        data.payload.tracks.length.should.be.equal(totalTracksLength);
        done();
      }

      player.addEventListener(CustomEvents.TRACKS_CHANGED, onTracksChanged);
      player.load();
    });
  });

  describe('first play', function () {
    this.timeout(10000);

    let config;
    let player;

    before(() => {
      createElement('DIV', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4HlsDash;
      player = new Player(targetId, config);

    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElemenet(targetId);
    });

    it('should fire first play only once', (done) => {
      let counter = 0;
      let onPlaying = () => {
        player.removeEventListener(Html5Events.PLAYING, onPlaying);
        player.pause();
        player.play();
        setTimeout(() => {
          counter.should.equal(1);
          done();
        }, 0);
      };
      player.addEventListener(CustomEvents.FIRST_PLAY, () => {
        counter++;
      });
      player.addEventListener(Html5Events.PLAYING, onPlaying);
      player.play();
    });
  });

  describe('source selected', () => {
    let config;
    let player;

    before(() => {
      createElement('DIV', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4HlsDash;
      player = new Player(targetId);

    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElemenet(targetId);
    });

    it('should fire source selected', (done) => {
      player.addEventListener(CustomEvents.SOURCE_SELECTED, (event) => {
        event.payload.selectedSource.id.should.equal('1_rsrdfext_10081,url');
        done();
      });
      player.configure(config);
    });
  });
});

describe('states', function () {
  this.timeout(10000);

  let player, config;

  before(() => {
    createElement('DIV', targetId);
  });

  beforeEach(() => {
    config = getConfigStructure();
    config.sources = sourcesConfig.Mp4HlsDash;
    player = new Player(targetId, config);
  });

  afterEach(() => {
    player.destroy();
  });

  after(() => {
    removeVideoElementsFromTestPage();
    removeElemenet(targetId);
  });

  it('should switch player states during playback', (done) => {
    /**
     * onLoadStart handler
     * @returns {void}
     */
    function onLoadStart() {
      player.removeEventListener(Html5Events.LOAD_START, onLoadStart);
      player._stateManager.currentState.type.should.equal(PlayerStates.LOADING);
    }

    /**
     * onLoadedMetadata handler
     * @returns {void}
     */
    function onLoadedMetadata() {
      player.removeEventListener(Html5Events.LOADED_METADATA, onLoadedMetadata);
      if (player.config.autoplay) {
        player._stateManager.currentState.type.should.equal(PlayerStates.PLAYING);
      } else {
        player._stateManager.currentState.type.should.equal(PlayerStates.PAUSED);
      }
    }

    /**
     * onPlaying handler
     * @returns {void}
     */
    function onPlaying() {
      player.removeEventListener(Html5Events.PLAYING, onPlaying);
      player._stateManager.currentState.type.should.equal(PlayerStates.PLAYING);
      setTimeout(() => {
        player.pause();
      }, 100);
    }

    /**
     * onPause handler
     * @returns {void}
     */
    function onPause() {
      player.removeEventListener(Html5Events.PAUSE, onPause);
      player._stateManager.currentState.type.should.equal(PlayerStates.PAUSED);
      player.currentTime = player.duration - 1;
      player.play();
    }

    /**
     * onEnded handler
     * @returns {void}
     */
    function onEnded() {
      player.removeEventListener(Html5Events.ENDED, onEnded);
      player._stateManager.currentState.type.should.equal(PlayerStates.IDLE);
      player.destroy();
      done();
    }

    player._stateManager.currentState.type.should.equal(PlayerStates.IDLE);
    player.addEventListener(Html5Events.LOAD_START, onLoadStart);
    player.addEventListener(Html5Events.LOADED_METADATA, onLoadedMetadata);
    player.addEventListener(Html5Events.PLAYING, onPlaying);
    player.addEventListener(Html5Events.PAUSE, onPause);
    player.addEventListener(Html5Events.ENDED, onEnded);
    player.load();
    player.play();
  });
});

describe('configure', function () {
  this.timeout(10000);

  let player, config;

  before(() => {
    createElement('DIV', targetId);
  });

  beforeEach(() => {
    config = getConfigStructure();
  });

  afterEach(() => {
    player.destroy();
  });

  after(() => {
    removeVideoElementsFromTestPage();
    removeElemenet(targetId);
  });

  it('should create player without sources and set the sources later', (done) => {
    config.sources = sourcesConfig.Mp4HlsDash;
    player = new Player(targetId);
    player.should.be.instanceOf(Player);
    player.configure(config);
    player.addEventListener(Html5Events.PLAYING, function () {
      player.destroy();
      done();
    });
    player.addEventListener(Html5Events.ERROR, function () {
      player.destroy();
      should.fail();
    });
    player.load();
    player.ready().then(() => {
      player.play();
    });
  });
});
