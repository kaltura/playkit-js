import TextStyle from '../../src/track/text-style'
import Player from '../../src/player'
import {StateType} from '../../src/state/state-type'
import {CustomEventType, Html5EventType} from '../../src/event/event-type'
import SourcesConfig from './configs/sources.json'
import Track from '../../src/track/track'
import VideoTrack from '../../src/track/video-track'
import AudioTrack from '../../src/track/audio-track'
import TextTrack from '../../src/track/text-track'
import {createElement, getConfigStructure, removeElement, removeVideoElementsFromTestPage} from './utils/test-utils'
import PluginManager from '../../src/plugin/plugin-manager'
import ColorsPlugin from './plugin/test-plugins/colors-plugin'
import NumbersPlugin from './plugin/test-plugins/numbers-plugin'
import Locale from '../../src/utils/locale'
import Html5 from '../../src/engines/html5/html5'
import Error from '../../src/error/error'
import {Object} from '../../src/utils/util'
import {LabelOptions} from '../../src/track/label-options'

const targetId = 'player-placeholder_player.spec';
let sourcesConfig = Object.copyDeep(SourcesConfig);

describe('Player', function () {

  beforeEach(() => {
    sourcesConfig = Object.copyDeep(SourcesConfig);
  });

  describe("load", function () {
    let config, player, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4;
    });

    beforeEach(() => {
      player = new Player(config);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it("should load if no source", (done) => {
      player.ready().then(() => {
        done();
      });
      player.load();
    });

    it("should't load if no engine", (done) => {
      player._engine = null;
      setTimeout(done, 300);
      player.ready().then(() => {
        done(new Error('fail'));
      });
      player.load();
    });

    it("should't load if source already exists", (done) => {
      let loadCounter = 0;
      setTimeout(() => {
        loadCounter.should.equal(1);
        done();
      }, 1000);
      player.addEventListener(CustomEventType.TRACKS_CHANGED, () => {
        loadCounter++;
        setTimeout(() => player.load(), 200);
      });
      player.load();
    });

    it("should't load if is in loading process", (done) => {
      let loadCounter = 0;
      setTimeout(() => {
        loadCounter.should.equal(1);
        done();
      }, 1000);
      player.addEventListener(CustomEventType.TRACKS_CHANGED, () => {
        loadCounter++;
      });
      player.load();
      player.load();
    });

  });

  describe("play", function () {
    let config, player, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4;
    });

    beforeEach(() => {
      player = new Player(config);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
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

    let playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
    });

    describe("success", () => {

      let config;

      before(() => {
        config = getConfigStructure();
        config.sources = sourcesConfig.Mp4;
      });

      describe("preload none", () => {

        describe("passing config in constructor", () => {

          let player;

          beforeEach(() => {
            player = new Player(config);
            playerContainer.appendChild(player.getView());
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

          let player;

          beforeEach(() => {
            player = new Player();
            playerContainer.appendChild(player.getView());
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

          let player;

          beforeEach(() => {
            config.playback.preload = 'auto';
            player = new Player(config);
            playerContainer.appendChild(player.getView());
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
            player = new Player();
            playerContainer.appendChild(player.getView());
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

          let player;

          beforeEach(() => {
            player = new Player(config);
            playerContainer.appendChild(player.getView());
          });

          afterEach(() => {
            player.destroy();
          });

          it("should fail ready -> load", (done) => {
            player.addEventListener(Html5EventType.ERROR, (error) => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.code.should.equals(Error.Code.VIDEO_ERROR)) {
                done();
              }
            });
            player.ready()
              .catch(() => {
                // catching the error is handled by the Error Event
              });
            player.load();
          });

          it("should fail load -> ready", (done) => {
            player.addEventListener(Html5EventType.ERROR, (error) => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.code.should.equals(Error.Code.VIDEO_ERROR)) {
                done();
              }
            });
            player.load();
            player.ready()
              .catch(() => {
                // catching the error is handled by the Error Event
              });
          });
        });

        describe("passing config in configure", function () {

          let player;

          beforeEach(() => {
            player = new Player();
            playerContainer.appendChild(player.getView());
          });

          afterEach(() => {
            player.destroy();
          });

          it("should fail configure -> ready -> load", (done) => {
            player.addEventListener(Html5EventType.ERROR, (error) => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.code.should.equals(Error.Code.VIDEO_ERROR)) {
                done();
              }
            });
            player.configure(config);
            player.ready()
              .catch(() => {
                // catching the error is handled by the Error Event
              });
            player.load();
          });

          it("should fail configure -> load -> ready", (done) => {
            player.addEventListener(Html5EventType.ERROR, (error) => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.code.should.equals(Error.Code.VIDEO_ERROR)) {
                done();
              }
            });
            player.configure(config);
            player.load();
            player.ready()
              .catch(() => {
                // catching the error is handled by the Error Event
              });
          });

          it("should fail ready -> configure -> load", (done) => {
            player.addEventListener(Html5EventType.ERROR, (error) => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.code.should.equals(Error.Code.VIDEO_ERROR)) {
                done();
              }
            });
            player.ready()
              .catch(() => {
                // catching the error is handled by the Error Event
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
            player = new Player(config);
            playerContainer.appendChild(player.getView());
          });

          afterEach(() => {
            player.destroy();
          });

          it("should fail ready -> load", (done) => {
            player.addEventListener(Html5EventType.ERROR, (error) => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.code.should.equals(Error.Code.VIDEO_ERROR)) {
                done();
              }
            });
            player.ready()
              .catch(() => {
                // catching the error is handled by the Error Event
              });
            player.load();
          });

          it("should fail load -> ready", (done) => {
            player.addEventListener(Html5EventType.ERROR, (error) => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.code.should.equals(Error.Code.VIDEO_ERROR)) {
                done();
              }
            });
            player.load();
            player.ready()
              .catch(() => {
                // catching the error is handled by the Error Event
              });
          });
        });

        describe("passing config in configure", () => {

          let player;

          beforeEach(() => {
            config.playback.preload = 'auto';
            player = new Player();
            playerContainer.appendChild(player.getView());
          });

          afterEach(() => {
            player.destroy();
          });

          it("should fail configure -> ready -> load", (done) => {
            player.addEventListener(Html5EventType.ERROR, (error) => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.code.should.equals(Error.Code.VIDEO_ERROR)) {
                done();
              }
            });
            player.configure(config);
            player.ready()
              .catch(() => {
                // catching the error is handled by the Error Event
              });
            player.load();
          });

          it("should fail configure -> load -> ready", (done) => {
            player.addEventListener(Html5EventType.ERROR, (error) => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.code.should.equals(Error.Code.VIDEO_ERROR)) {
                done();
              }
            });
            player.configure(config);
            player.load();
            player.ready()
              .catch(() => {
                // catching the error is handled by the Error Event
              });
          });

          it("should fail ready -> load -> configure", (done) => {
            player.addEventListener(Html5EventType.ERROR, (error) => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.code.should.equals(Error.Code.VIDEO_ERROR)) {
                done();
              }
            });
            player.ready()
              .catch(() => {
                // catching the error is handled by the Error Event
              });
            player.load();
            player.configure(config);
          });

          it("should fail ready -> configure -> load", (done) => {
            player.addEventListener(Html5EventType.ERROR, (error) => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.code.should.equals(Error.Code.VIDEO_ERROR)) {
                done();
              }
            });
            player.ready()
              .catch(() => {
                // catching the error is handled by the Error Event
              });
            player.configure(config);
            player.load();
          });

          it("should fail load -> configure -> ready", (done) => {
            player.addEventListener(Html5EventType.ERROR, (error) => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.code.should.equals(Error.Code.VIDEO_ERROR)) {
                done();
              }
            });
            player.load();
            player.configure(config);
            player.ready()
              .catch(() => {
                // catching the error is handled by the Error Event
              });
          });

          it("should fail load -> ready -> configure", (done) => {
            player.addEventListener(Html5EventType.ERROR, (error) => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.code.should.equals(Error.Code.VIDEO_ERROR)) {
                done();
              }
            });
            player.load();
            player.ready()
              .catch(() => {
                // catching the error is handled by the Error Event
              });
            player.configure(config);
          });
        });
      });

    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });
  });

  describe('getTracks dummy', () => {
    let player, config;

    before(() => {
      createElement('DIV', targetId);
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4;
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
      removeElement(targetId);
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

    let config;
    let player;
    let video;
    let track1;
    let track2;
    let playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
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
      config.sources = sourcesConfig.MultipleSources;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      video = player._engine.getVideoElement();
      video.appendChild(track1);
      video.appendChild(track2);
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should return all tracks using ready', (done) => {
      player.ready().then(() => {
        let videoTracksLength = 2;
        let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
        let textTracksLength = (video.textTracks ? video.textTracks.length + 1 : 0);
        let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
        player.getTracks().length.should.be.equal(totalTracksLength);
        done();
      });
      player.load();
    });

    it('should return video tracks', (done) => {
      player.ready().then(() => {
        let videoTracksLength = 2;
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
        let textTracksLength = (video.textTracks ? video.textTracks.length + 1 : 0);
        player.getTracks('text').length.should.be.equal(textTracksLength);
        done();
      });
      player.load();
    });

    it('should return all tracks for unknown type', (done) => {
      player.ready().then(() => {
        let videoTracksLength = 2;
        let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
        let textTracksLength = (video.textTracks ? video.textTracks.length + 1 : 0);
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

  describe('selectTrack - video', function () {
    let config, player, video, playerContainer;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.MultipleSources;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it.skip('should select a new video track', (done) => {
      let tracks;
      player.addEventListener(CustomEventType.VIDEO_TRACK_CHANGED, (event) => {
        (event.payload.selectedVideoTrack instanceof VideoTrack).should.be.true;
        event.payload.selectedVideoTrack.index.should.equal(1);
        (video.src.indexOf(sourcesConfig.MultipleSources.progressive[0].url) > -1).should.be.false;
        (video.src.indexOf(sourcesConfig.MultipleSources.progressive[1].url) > -1).should.be.true;
        tracks[0].active.should.be.false;
        tracks[1].active.should.be.true;
        done();
      });
      player.ready().then(() => {
        tracks = player._tracks.filter((track) => {
          return track instanceof VideoTrack;
        });
        (video.src.indexOf(sourcesConfig.MultipleSources.progressive[0].url) > -1).should.be.true;
        (video.src.indexOf(sourcesConfig.MultipleSources.progressive[1].url) > -1).should.be.false;
        tracks.length.should.equal(2);
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        player.selectTrack(tracks[1]);
      });
      player.load();
      video = player._engine.getVideoElement();
    });

    it('should not change the selected for non exist video track', (done) => {
      player.ready().then(() => {
        let tracks = player._tracks.filter((track) => {
          return track instanceof VideoTrack;
        });
        (video.src.indexOf(sourcesConfig.MultipleSources.progressive[0].url) > -1).should.be.true;
        (video.src.indexOf(sourcesConfig.MultipleSources.progressive[1].url) > -1).should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        player.selectTrack(new VideoTrack({index: 2}));
        (video.src.indexOf(sourcesConfig.MultipleSources.progressive[0].url) > -1).should.be.true;
        (video.src.indexOf(sourcesConfig.MultipleSources.progressive[1].url) > -1).should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        done();
      });
      player.load();
      video = player._engine.getVideoElement();
    });
  });

  describe('selectTrack - audio', function () {
    let config, player, video, playerContainer;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should select a new audio track', (done) => {
      player.ready().then(() => {
        if (video.audioTracks) {
          player.addEventListener(CustomEventType.AUDIO_TRACK_CHANGED, (event) => {
            (event.payload.selectedAudioTrack instanceof AudioTrack).should.be.true;
            event.payload.selectedAudioTrack.index.should.equal(2);
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
        } else {
          done();
        }
      });
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
          done();
        } else {
          done();
        }
      });
      player.configure({playback: {preload: 'auto'}});
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
          done();
        } else {
          done();
        }
      });
      player.load();
      video = player._engine.getVideoElement();
    });
  });

  describe('selectTrack - text', function () {
    let config, player, video, track1, track2, playerContainer;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
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
      removeElement(targetId);
    });

    it('should select a new subtitles track', (done) => {
      player.ready().then(() => {
        player.addEventListener(CustomEventType.TEXT_TRACK_CHANGED, (event) => {
          (event.payload.selectedTextTrack instanceof TextTrack).should.be.true;
          event.payload.selectedTextTrack.index.should.equal(1);
          video.textTracks[0].mode.should.be.equal('disabled');
          video.textTracks[1].mode.should.be.equal('hidden');
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
        player.addEventListener(CustomEventType.TEXT_TRACK_CHANGED, (event) => {
          (event.payload.selectedTextTrack instanceof TextTrack).should.be.true;
          event.payload.selectedTextTrack.index.should.equal(1);
          video.textTracks[0].mode.should.be.equal('disabled');
          video.textTracks[1].mode.should.be.equal('hidden');
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
        video.textTracks[0].mode.should.be.equal('hidden');
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

  describe('getActiveTracks', function () {
    let config, player, video, track1, track2, playerContainer;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.MultipleSources;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
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
      removeElement(targetId);
    });

    it.skip('should get the active tracks before and after switching', (done) => {
      let videoTracks, audioTracks, textTracks;
      player.addEventListener(CustomEventType.TEXT_TRACK_CHANGED, () => {
        player.addEventListener(CustomEventType.VIDEO_TRACK_CHANGED, () => {
          player.addEventListener(CustomEventType.AUDIO_TRACK_CHANGED, () => {
            player.getActiveTracks().audio.should.deep.equals(audioTracks[2]);
            done();
          });
          player.getActiveTracks().video.should.deep.equals(videoTracks[1]);
          if (audioTracks.length) {
            player.selectTrack(new AudioTrack({index: 2}));
          } else {
            done();
          }
        });
        player.getActiveTracks().text.should.deep.equals(textTracks[1]);
        player.selectTrack(new VideoTrack({index: 1}));
      });
      player.ready().then(() => {
        videoTracks = player._tracks.filter((track) => {
          return track instanceof VideoTrack;
        });
        audioTracks = player._tracks.filter((track) => {
          return track instanceof AudioTrack;
        });
        textTracks = player._tracks.filter((track) => {
          return track instanceof TextTrack;
        });
        player.getActiveTracks().video.should.deep.equals(videoTracks[0]);
        player.getActiveTracks().text.should.deep.equals(textTracks[0]);
        if (audioTracks.length) {
          player.getActiveTracks().audio.should.deep.equals(audioTracks[0]);
        }
        player.selectTrack(new TextTrack({index: 1, kind: 'subtitles'}));
      });
      player.load();
    });
  });

  describe('hideTextTrack', function () {
    let config, player, video, track1, track2, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
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
      removeElement(targetId);
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

  describe('Text Track API', () => {
    let player, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
    });

    beforeEach(() => {
      player = new Player();
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    describe('textStyle API', () => {
      it("should accept only TextStyle setting", () => {
        try {
          player.textStyle = {
            backgroundColor: [255, 0, 0]
          };
        } catch (error) {
          error.message.should.be.equal("Style must be instance of TextStyle");
        }
      });

      it("should change style setting", () => {
        let textStyle = new TextStyle();
        textStyle.backgroundColor = TextStyle.StandardColors.RED;
        textStyle.fontColor = TextStyle.StandardColors.CYAN;
        textStyle.fontEdge = TextStyle.EdgeStyles.RAISED;
        player.textStyle = textStyle;
        const currentTextStyle = player.textStyle;
        currentTextStyle.backgroundColor.should.be.equal(textStyle.backgroundColor);
        currentTextStyle.fontColor.should.be.equal(textStyle.fontColor);
        currentTextStyle.fontEdge.should.be.equal(textStyle.fontEdge);
      })
    });

    describe('setTextDisplaySettings', () => {
      it('should change textDisplay settings', () => {
        const settings = {line: -4};
        player.setTextDisplaySettings(settings);
        player._textDisplaySettings.should.be.equal(settings)
      });
    });
  });

  describe('Fullscreen API', () => {
    let player;

    beforeEach(() => {
      player = new Player();
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
    });

    describe('isFullscreen', () => {
      it("should start with initial fullscreen state of false", () => {
        player.isFullscreen().should.be.false;
      });

      it("should be in fullscreen state after notify", () => {
        player.notifyEnterFullscreen();
        player.isFullscreen().should.be.true;
      });

      it("should not be in fullscreen state after notify", () => {
        player.notifyEnterFullscreen();
        player.isFullscreen().should.be.true;
        player.notifyExitFullscreen();
        player.isFullscreen().should.be.false;
      });
    });

    describe('notifyEnterFullscreen', () => {
      it("should fire ENTER_FULLSCREEN event", (done) => {
        player.addEventListener(player.Event.ENTER_FULLSCREEN, () => {
          player.isFullscreen().should.be.true;
          done();
        });
        player.notifyEnterFullscreen();
      });

      it("should not fire ENTER_FULLSCREEN event twice", (done) => {
        let callCount = 0;
        player.addEventListener(player.Event.ENTER_FULLSCREEN, () => {
          callCount++;
          player.isFullscreen().should.be.true;
          player.notifyEnterFullscreen();
          setTimeout(() => {
            if (callCount === 1) {
              done();
            } else {
              done(new Error('fail'));
            }
          }, 500);
        });
        player.notifyEnterFullscreen();
      });
    });

    describe('notifyExitFullscreen', () => {
      it("should fire EXIT_FULLSCREEN event", (done) => {
        player.addEventListener(player.Event.EXIT_FULLSCREEN, () => {
          player.isFullscreen().should.be.false;
          done();
        });
        player.addEventListener(player.Event.ENTER_FULLSCREEN, () => {
          player.isFullscreen().should.be.true;
          player.notifyExitFullscreen();
        });
        player.notifyEnterFullscreen();
      });

      it("should not fire EXIT_FULLSCREEN event twice", (done) => {
        let callCount = 0;
        player.addEventListener(player.Event.EXIT_FULLSCREEN, () => {
          callCount++;
          player.isFullscreen().should.be.false;
          player.notifyExitFullscreen();
          setTimeout(() => {
            if (callCount === 1) {
              done();
            } else {
              done(new Error('fail'));
            }
          }, 500);
        });
        player.addEventListener(player.Event.ENTER_FULLSCREEN, () => {
          player.isFullscreen().should.be.true;
          player.notifyExitFullscreen();
        });
        player.notifyEnterFullscreen();
      });

      it("should not fire EXIT_FULLSCREEN event when player is not in fullscreen state", (done) => {
        player.addEventListener(player.Event.EXIT_FULLSCREEN, () => done(new Error('fail')));
        player.notifyExitFullscreen();
        setTimeout(() => done(), 500);
      });
    });

    describe('enterFullscreen', () => {
      it("should fire REQUESTED_ENTER_FULLSCREEN event", (done) => {
        player.addEventListener(player.Event.REQUESTED_ENTER_FULLSCREEN, () => done());
        player.enterFullscreen();
      });

      it("should not fire REQUESTED_ENTER_FULLSCREEN event when player is already in fullscreen", (done) => {
        player.addEventListener(player.Event.REQUESTED_ENTER_FULLSCREEN, () => done(new Error('fail')));
        player.notifyEnterFullscreen();
        player.enterFullscreen();
        setTimeout(() => done(), 500);
      });
    });

    describe('exitFullscreen', () => {
      it("should fire REQUESTED_EXIT_FULLSCREEN event", (done) => {
        player.addEventListener(player.Event.REQUESTED_EXIT_FULLSCREEN, () => done());
        player.notifyEnterFullscreen();
        player.exitFullscreen();
      });

      it("should not fire REQUESTED_EXIT_FULLSCREEN event when player is not in fullscreen", (done) => {
        player.addEventListener(player.Event.REQUESTED_EXIT_FULLSCREEN, () => done(new Error('fail')));
        player.notifyExitFullscreen();
        player.exitFullscreen();
        setTimeout(() => done(), 500);
      });
    });
  });

  describe('Track enum', function () {
    let playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should return the track enum', () => {
      let config = getConfigStructure();
      config.sources = sourcesConfig.Mp4;
      let player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.Track.VIDEO.should.be.equal('video');
      player.Track.AUDIO.should.be.equal('audio');
      player.Track.TEXT.should.be.equal('text');
    });
  });

  describe('events', function () {
    describe('tracks changed', function () {

      let config, player, video, track1, track2, playerContainer;

      before(() => {
        playerContainer = createElement('DIV', targetId);
      });

      beforeEach(() => {
        config = getConfigStructure();
        config.sources = sourcesConfig.Mp4;
        player = new Player(config);
        playerContainer.appendChild(player.getView());
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
        removeElement(targetId);
      });

      it('should fire tracks changed', function (done) {
        /**
         * Handles assertions after tracks changed event.
         * @param {Object} data - The event data.
         * @returns {void}
         */
        function onTracksChanged(data) {
          player.removeEventListener(CustomEventType.TRACKS_CHANGED, onTracksChanged);
          let videoTracksLength = 1;
          let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
          let textTracksLength = (video.textTracks ? video.textTracks.length + 1 : 0);
          let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
          data.payload.tracks.length.should.be.equal(totalTracksLength);
          done();
        }

        player.addEventListener(CustomEventType.TRACKS_CHANGED, onTracksChanged);
        player.load();
      });
    });

    describe('first play', function () {

      let config;
      let player;
      let playerContainer;

      before(() => {
        playerContainer = createElement('DIV', targetId);
      });

      beforeEach(() => {
        config = getConfigStructure();
        config.sources = sourcesConfig.Mp4;
        player = new Player(config);
        playerContainer.appendChild(player.getView());
      });

      afterEach(() => {
        player.destroy();
      });

      after(() => {
        removeVideoElementsFromTestPage();
        removeElement(targetId);
      });

      it('should fire first play only once', (done) => {
        let counter = 0;
        let onPlaying = () => {
          player.removeEventListener(Html5EventType.PLAYING, onPlaying);
          player.pause();
          player.play();
          setTimeout(() => {
            counter.should.equal(1);
            done();
          }, 0);
        };
        player.addEventListener(CustomEventType.FIRST_PLAY, () => {
          counter++;
        });
        player.addEventListener(Html5EventType.PLAYING, onPlaying);
        player.play();
      });
    });

    describe('source selected', () => {
      let config;
      let player;
      let playerContainer;

      before(() => {
        playerContainer = createElement('DIV', targetId);
      });

      beforeEach(() => {
        config = getConfigStructure();
        config.sources = sourcesConfig.Mp4;
        player = new Player();
        playerContainer.appendChild(player.getView());

      });

      afterEach(() => {
        player.destroy();
      });

      after(() => {
        removeVideoElementsFromTestPage();
        removeElement(targetId);
      });

      it('should fire source selected', (done) => {
        player.addEventListener(CustomEventType.SOURCE_SELECTED, (event) => {
          event.payload.selectedSource[0].id.should.equal('1_rsrdfext_10081,url');
          done();
        });
        player.configure(config);
      });
    });

    describe('media loaded', () => {
      let config;
      let player;
      let playerContainer;

      before(() => {
        playerContainer = createElement('DIV', targetId);
      });

      beforeEach(() => {
        config = getConfigStructure();
        config.sources = sourcesConfig.Mp4;
        player = new Player();
        playerContainer.appendChild(player.getView());
        player.configure(config);
      });

      afterEach(() => {
        player.destroy();
      });

      after(() => {
        removeVideoElementsFromTestPage();
        removeElement(targetId);
      });

      it('should fire media loaded', (done) => {
        player.addEventListener(CustomEventType.MEDIA_LOADED, () => {
          done();
        });
        player.load();
      });
    });

    describe('playback started', () => {
      let config;
      let player;
      let playerContainer;

      before(() => {
        playerContainer = createElement('DIV', targetId);
      });

      beforeEach(() => {
        config = getConfigStructure();
        config.sources = sourcesConfig.Mp4;
        player = new Player();
        playerContainer.appendChild(player.getView());
        player.configure(config);
      });

      afterEach(() => {
        player.destroy();
      });

      after(() => {
        removeVideoElementsFromTestPage();
        removeElement(targetId);
      });

      it('should fire playback started when start to playing', (done) => {
        player.addEventListener(CustomEventType.PLAYBACK_STARTED, () => {
          done();
        });
        player.play();
      });

      it('should fire playback started only once', (done) => {
        let count = 0;

        player.addEventListener(CustomEventType.PLAYBACK_STARTED, () => {
          count++;

          player.addEventListener(Html5EventType.PLAYING, () => {
            if (count === 1) {
              done();
            } else {
              done(new Error('PLAYBACK_STARTED triggered more then once'));
            }
          });

          player.pause();
          player.play();
        });
        player.play();
      });
    });

    describe('abr mode changed', () => {
      let config;
      let player;
      let playerContainer;

      before(() => {
        playerContainer = createElement('DIV', targetId);
      });

      beforeEach(() => {
        config = getConfigStructure();
      });

      afterEach(() => {
        player.destroy();
      });

      after(() => {
        removeVideoElementsFromTestPage();
        removeElement(targetId);
      });

      it('should fire abr mode changed for progressive playback', (done) => {
        config.sources = sourcesConfig.Mp4;
        player = new Player(config);
        playerContainer.appendChild(player.getView());
        player.addEventListener(CustomEventType.ABR_MODE_CHANGED, (event) => {
          event.payload.mode.should.equal('manual');
          done();
        });
        player.load();
      });

      it('should fire abr mode changed for adaptive playback', (done) => {
        config.sources = sourcesConfig.Hls;
        player = new Player(config);
        playerContainer.appendChild(player.getView());
        player.addEventListener(CustomEventType.ABR_MODE_CHANGED, (event) => {
          event.payload.mode.should.equal('auto');
          done();
        });
        if (player._engine) {
          player.load();
        } else {
          done();
        }
      });
    });

    describe('ended', () => {
      let config;
      let player;
      let playerContainer;

      before(() => {
        playerContainer = createElement('DIV', targetId);
      });

      beforeEach(() => {
        config = getConfigStructure();
      });

      afterEach(() => {
        player.destroy();
      });

      after(() => {
        removeVideoElementsFromTestPage();
        removeElement(targetId);
      });

      it('should be paused', (done) => {
        let onPlaying = () => {
          player.removeEventListener(player.Event.PLAYING, onPlaying);
          player.addEventListener(player.Event.ENDED, () => {
            player.paused.should.be.true;
            done();
          });
          player.currentTime = player.duration - 1;
        };

        config.sources = sourcesConfig.Mp4;
        player = new Player(config);
        playerContainer.appendChild(player.getView());
        player.addEventListener(player.Event.PLAYING, onPlaying);
        player.play();
      });
    });

    describe('replay', () => {
      let config;
      let player;
      let playerContainer;

      before(() => {
        playerContainer = createElement('DIV', targetId);
      });

      beforeEach(() => {
        config = getConfigStructure();
      });

      afterEach(() => {
        player.destroy();
      });

      after(() => {
        removeVideoElementsFromTestPage();
        removeElement(targetId);
      });

      it('should fire replay', (done) => {
        config.sources = sourcesConfig.Mp4;
        player = new Player(config);
        let replayCounter = 0;
        playerContainer.appendChild(player.getView());
        player.addEventListener(player.Event.REPLAY, () => {
          replayCounter++;
          player.pause();
          player.play();
          setTimeout(() => {
            replayCounter.should.equal(1);
            done();
          }, 100);
        });
        player.addEventListener(player.Event.ENDED, () => {
          player.play();
        });
        player.addEventListener(player.Event.LOADED_DATA, () => {
          player.currentTime = player.duration - 1;
        });
        player.play();
      });

      it('should not fire replay when media has changed', (done) => {
        config.sources = sourcesConfig.Mp4;
        player = new Player(config);
        playerContainer.appendChild(player.getView());
        player.addEventListener(player.Event.REPLAY, () => {
          done(new Error('replay event should not fired when media has changed'));
        });
        player.addEventListener(player.Event.ENDED, () => {
          player.configure({sources: sourcesConfig.Mp4});
          player.play();
          setTimeout(done, 1000);
        });
        player.addEventListener(player.Event.LOADED_DATA, () => {
          player.currentTime = player.duration - 1;
        });
        player.play();
      });
    });

    describe('change source', () => {
      let config, player;

      before(() => {
        createElement('DIV', targetId);
      });

      beforeEach(() => {
        config = getConfigStructure();
        config.sources = sourcesConfig.Mp4;
      });

      afterEach(() => {
        player.destroy();
      });

      after(() => {
        removeVideoElementsFromTestPage();
        removeElement(targetId);
      });

      it('should fire change source started and change source ended', (done) => {
        let changeSourceStarted = false;
        player = new Player(config);
        player.addEventListener(player.Event.CHANGE_SOURCE_STARTED, () => {
          changeSourceStarted = true;
        });
        player.addEventListener(player.Event.CHANGE_SOURCE_ENDED, () => {
          if (changeSourceStarted) {
            done();
          } else {
            done(new Error('Change source event should called first'));
          }
        });
        player.addEventListener(player.Event.PLAYING, () => {
          player.configure({sources: sourcesConfig.Mp4});
        });
        player.play();
      });
    });

    describe('text style changed', () => {
      let player;

      beforeEach(() => {
        player = new Player();
      });

      afterEach(() => {
        player.destroy();
      });

      it('should fire text style changed', (done) => {
        player.addEventListener(player.Event.TEXT_STYLE_CHANGED, () => {
          done();
        });
        player.textStyle = new TextStyle();
      });
    });
  });

  describe('states', function () {
    let player, config, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should switch player states during playback', (done) => {
      /**
       * onLoadStart handler
       * @returns {void}
       */
      function onLoadStart() {
        player.removeEventListener(Html5EventType.LOAD_START, onLoadStart);
        player._stateManager.currentState.type.should.equal(StateType.LOADING);
      }

      /**
       * onLoadedMetadata handler
       * @returns {void}
       */
      function onLoadedMetadata() {
        player.removeEventListener(Html5EventType.LOADED_METADATA, onLoadedMetadata);
        if (player.config.autoplay) {
          player._stateManager.currentState.type.should.equal(StateType.PLAYING);
        } else {
          player._stateManager.currentState.type.should.equal(StateType.PAUSED);
        }
      }

      /**
       * onPlaying handler
       * @returns {void}
       */
      function onPlaying() {
        player.removeEventListener(Html5EventType.PLAYING, onPlaying);
        player._stateManager.currentState.type.should.equal(StateType.PLAYING);
        setTimeout(() => {
          player.pause();
        }, 100);
      }

      /**
       * onPause handler
       * @returns {void}
       */
      function onPause() {
        player.removeEventListener(Html5EventType.PAUSE, onPause);
        player._stateManager.currentState.type.should.equal(StateType.PAUSED);
        player.currentTime = player.duration - 1;
        player.play();
      }

      /**
       * onEnded handler
       * @returns {void}
       */
      function onEnded() {
        player.removeEventListener(Html5EventType.ENDED, onEnded);
        player._stateManager.currentState.type.should.equal(StateType.IDLE);
        player.destroy();
        done();
      }

      player._stateManager.currentState.type.should.equal(StateType.IDLE);
      player.addEventListener(Html5EventType.LOAD_START, onLoadStart);
      player.addEventListener(Html5EventType.LOADED_METADATA, onLoadedMetadata);
      player.addEventListener(Html5EventType.PLAYING, onPlaying);
      player.addEventListener(Html5EventType.PAUSE, onPause);
      player.addEventListener(Html5EventType.ENDED, onEnded);
      player.load();
      player.play();
    });
  });

  describe('configure', function () {

    let player, config, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should create player without sources and set the sources later', (done) => {
      config.sources = sourcesConfig.Mp4;
      player = new Player();
      playerContainer.appendChild(player.getView());
      player.should.be.instanceOf(Player);
      player.configure(config);
      player.addEventListener(Html5EventType.PLAYING, function () {
        player.destroy();
        done();
      });
      player.addEventListener(Html5EventType.ERROR, function () {
        player.destroy();
        done(new Error("test fail"));
      });
      player.load();
      player.ready().then(() => {
        player.play();
      });
    });

    describe('plugins lifecycle', () => {

      beforeEach(() => {
        PluginManager.register('colors', ColorsPlugin);
        PluginManager.register('numbers', NumbersPlugin);
      });

      afterEach(() => {
        PluginManager.unRegister('colors');
        PluginManager.unRegister('numbers');
      });

      it('should load 2 plugins on initial config and configure them on configure', function () {
        player = new Player({
          plugins: {
            colors: {
              size: 5
            },
            numbers: {
              size: 20
            }
          }
        });
        player._pluginManager.get('colors').should.exists;
        player._pluginManager.get('numbers').should.exists;
        player._pluginManager._plugins.size.should.equals(2);
        player.config.plugins.colors.should.deep.equals({
          size: 5,
          favouriteColor: "green"
        });
        player.config.plugins.numbers.should.deep.equals({
          size: 20,
          firstCellValue: 4,
          lastCellValue: 6
        });
        player.configure({
          plugins: {
            colors: {
              size: 50
            },
            numbers: {
              size: 200
            }
          }
        });
        player._pluginManager.get('colors').should.exists;
        player._pluginManager.get('numbers').should.exists;
        player._pluginManager._plugins.size.should.equals(2);
        player.config.plugins.colors.should.deep.equals({
          size: 50,
          favouriteColor: "green"
        });
        player.config.plugins.numbers.should.deep.equals({
          size: 200,
          firstCellValue: 4,
          lastCellValue: 6
        });
      });

      it('should load 1st plugin on initial config, load 2nd plugin and configure the 1st on configure', function () {
        player = new Player({
          plugins: {
            numbers: {
              size: 20
            }
          }
        });
        player._pluginManager.get('numbers').should.exists;
        player._pluginManager._plugins.size.should.equals(1);
        player.config.plugins.numbers.should.deep.equals({
          size: 20,
          firstCellValue: 4,
          lastCellValue: 6
        });
        player.configure({
          plugins: {
            colors: {
              size: 50
            },
            numbers: {
              size: 200
            }
          }
        });
        player._pluginManager.get('colors').should.exists;
        player._pluginManager.get('numbers').should.exists;
        player._pluginManager._plugins.size.should.equals(2);
        player.config.plugins.colors.should.deep.equals({
          size: 50,
          favouriteColor: "green"
        });
        player.config.plugins.numbers.should.deep.equals({
          size: 200,
          firstCellValue: 4,
          lastCellValue: 6
        });
      });

      it('should create player without plugins, load plugins on configure', function () {
        player = new Player();
        player._pluginManager._plugins.size.should.equals(0);
        player.config.plugins.should.deep.equals({});
        player.configure({
          plugins: {
            colors: {
              size: 50
            },
            numbers: {
              size: 200
            }
          }
        });
        player._pluginManager.get('colors').should.exists;
        player._pluginManager.get('numbers').should.exists;
        player._pluginManager._plugins.size.should.equals(2);
        player.config.plugins.colors.should.deep.equals({
          size: 50,
          favouriteColor: "green"
        });
        player.config.plugins.numbers.should.deep.equals({
          size: 200,
          firstCellValue: 4,
          lastCellValue: 6
        });
      });

      it('should create player without plugins, load 1st plugin on configure, configure 1st plugin with/after sources', function () {
        player = new Player();
        player._pluginManager._plugins.size.should.equals(0);
        player.config.plugins.should.deep.equals({});
        player.configure({
          plugins: {
            numbers: {
              size: 200
            }
          }
        });
        player._pluginManager.get('numbers').should.exists;
        player._pluginManager._plugins.size.should.equals(1);
        player.config.plugins.numbers.should.deep.equals({
          size: 200,
          firstCellValue: 4,
          lastCellValue: 6
        });
        player.configure({
          sources: sourcesConfig.Mp4,
          plugins: {
            numbers: {
              size: 2,
              firstCellValue: 3
            }
          }
        });
        player._pluginManager.get('numbers').should.exists;
        player._pluginManager._plugins.size.should.equals(1);
        player.config.plugins.numbers.should.deep.equals({
          size: 2,
          firstCellValue: 3,
          lastCellValue: 6
        });
        player.configure({
          plugins: {
            numbers: {
              size: 78
            }
          }
        });
        player.config.plugins.numbers.should.deep.equals({
          size: 78,
          firstCellValue: 3,
          lastCellValue: 6
        });
      });

      it('should create player with plugin and fail to configure other plugin after sources', function () {
        player = new Player({
          sources: sourcesConfig.Mp4,
          plugins: {
            numbers: {
              size: 2,
              firstCellValue: 3
            }
          }
        });
        player._pluginManager.get('numbers').should.exists;
        player._pluginManager._plugins.size.should.equals(1);
        player.config.plugins.should.deep.equals({
          numbers: {
            size: 2,
            firstCellValue: 3,
            lastCellValue: 6
          }
        });
        player.configure({
          plugins: {
            colors: {
              size: 200
            }
          }
        });
        player._pluginManager._plugins.size.should.equals(1);
        player.config.plugins.should.deep.equals({
          numbers: {
            size: 2,
            firstCellValue: 3,
            lastCellValue: 6
          }
        });
      });
    });

    describe('playback lifecycle', () => {
      it('should save initial playback config and initiate it when received sources - 1', function () {
        player = new Player({
          playback: {
            volume: 0,
            muted: true
          }
        });
        player.configure({
          sources: sourcesConfig.Mp4
        });
        player.volume.should.equals(0);
        player.muted.should.be.true;
      });

      it('should save initial playback config and initiate it when received sources - 2', function () {
        player = new Player({
          playback: {
            muted: true
          }
        });
        player.configure({
          playback: {
            volume: 0
          }
        });
        player.configure({
          sources: sourcesConfig.Mp4
        });
        player.volume.should.equals(0);
        player.muted.should.be.true;
      });

      it('should load the previous playback config and initiate the new one on updating sources', function (done) {
        player = new Player({
          sources: sourcesConfig.MultipleSources,
          playback: {
            muted: true,
            volume: 0.5
          }
        });
        player.load();
        player.volume.should.equals(0.5);
        player.muted.should.be.true;
        player.config.playback.volume.should.equals(0.5);
        player.config.playback.muted.should.be.true;
        player.ready().then(() => {
          player.src.should.equals(sourcesConfig.MultipleSources.progressive[0].url);
          done();
          player.addEventListener(player.Event.VOLUME_CHANGE, () => {
            let newProgressiveConfig = {
              progressive: [sourcesConfig.MultipleSources.progressive[1]]
            };
            player.configure({
              sources: newProgressiveConfig
            });
            player.load();
            player.volume.should.equals(1);
            player.muted.should.be.false;
            player.config.playback.volume.should.equals(0.5);
            player.config.playback.muted.should.be.true;
            player.ready().then(() => {
              player.src.should.equals(newProgressiveConfig.progressive[0].url);
              done();
            });
          });
          player.muted = false;
          player.volume = 1;
        });
      });

      it('should load the initial config and initiate the new one on updating sources', function (done) {
        player = new Player({
          sources: sourcesConfig.MultipleSources,
          playback: {
            muted: true,
            volume: 1,
          }
        });
        player.load();
        player.volume.should.equals(1);
        player.muted.should.be.true;
        player.config.playback.volume.should.equals(1);
        player.config.playback.muted.should.be.true;
        player.ready().then(() => {
          player.src.should.equals(sourcesConfig.MultipleSources.progressive[0].url);
          player.configure({
            playback: {
              muted: false,
              volume: 0.5
            }
          });
          player.volume.should.equals(1);
          player.muted.should.be.true;
          player.config.playback.volume.should.equals(0.5);
          player.config.playback.muted.should.be.false;
          let newProgressiveConfig = {
            progressive: [sourcesConfig.MultipleSources.progressive[1]]
          };
          player._playbackAttributesState = {};
          player.configure({
            sources: newProgressiveConfig
          });
          player.load();
          player.volume.should.equals(0.5);
          player.muted.should.be.false;
          player.config.playback.volume.should.equals(0.5);
          player.config.playback.muted.should.be.false;
          player.ready().then(() => {
            player.src.should.equals(newProgressiveConfig.progressive[0].url);
            done();
          });
        });
      });
    });
  });

  describe('config', function () {
    let player, config, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should get config', function () {
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.config.playback.streamPriority.should.deep.equal(getConfigStructure().playback.streamPriority);
    });

    it('should not change the player config', function () {
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.config.playback.streamPriority = {};
      player.config.playback.streamPriority.should.deep.equal(getConfigStructure().playback.streamPriority);
    });
  });

  describe('abr', function () {
    let player, config, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should return false for progressive playback abr', function () {
      config.sources = sourcesConfig.Mp4;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.enableAdaptiveBitrate();
      player.isAdaptiveBitrateEnabled().should.be.false;
    });

    it('should return true for adaptive playback abr', function () {
      config.sources = sourcesConfig.Hls;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      if (player._engine) {
        player.enableAdaptiveBitrate();
        player.isAdaptiveBitrateEnabled().should.be.true;
      }
    });
  });

  describe('isLive', function () {
    let player, config, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should return false for VOD', function (done) {
      config.sources = sourcesConfig.Mp4;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.ready().then(() => {
        player.isLive().should.be.false;
        done();
      });
      if (player._engine) {
        player.load();
      } else {
        done();
      }
    });

    it('should return true for VOD which configured as live', function (done) {
      config.sources = sourcesConfig.Mp4;
      config.sources.type = 'Live';
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.ready().then(() => {
        player.isLive().should.be.true;
        done();
      });
      if (player._engine) {
        player.load();
      } else {
        done();
      }
    });

    it('should return false for live before loading', function () {
      config.sources = sourcesConfig.Live;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.isLive().should.be.false;
    });

    it('should return true for live', function (done) {
      config.sources = sourcesConfig.Live;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.ready().then(() => {
        player.isLive().should.be.true;
        done();
      });
      if (player._engine) {
        player.load();
      } else {
        done();
      }
    });

    it('should return true for live even configured as VOD', function (done) {
      config.sources = sourcesConfig.Live;
      config.sources.type = 'Vod';
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.ready().then(() => {
        player.isLive().should.be.true;
        done();
      });
      if (player._engine) {
        player.load();
      } else {
        done();
      }
    });
  });

  describe('isDvr', function () {
    let player, config, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should return false for VOD', function (done) {
      config.sources = sourcesConfig.Mp4;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.ready().then(() => {
        player.isDvr().should.be.false;
        done();
      });
      if (player._engine) {
        player.load();
      } else {
        done();
      }
    });

    it('should return false for VOD even configured as dvr', function (done) {
      config.sources = sourcesConfig.Mp4;
      config.sources.dvr = true;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.ready().then(() => {
        player.isDvr().should.be.false;
        done();
      });
      if (player._engine) {
        player.load();
      } else {
        done();
      }
    });

    it('should return true for live which configured as dvr', function (done) {
      config.sources = sourcesConfig.Live;
      config.sources.dvr = true;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.ready().then(() => {
        player.isDvr().should.be.true;
        done();
      });
      if (player._engine) {
        player.load();
      } else {
        done();
      }
    });

    it('should return true for live which configured as non dvr', function (done) {
      config.sources = sourcesConfig.Live;
      config.sources.dvr = false;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.ready().then(() => {
        player.isDvr().should.be.false;
        done();
      });
      if (player._engine) {
        player.load();
      } else {
        done();
      }
    });
  });

  describe('seekToLiveEdge', function () {
    let player, config, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should not seek to live edge in VOD', (done) => {
      config.sources = sourcesConfig.Mp4;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.ready().then(() => {
        player.currentTime = 0;
        player.currentTime.should.not.equal(player.duration);
        player.seekToLiveEdge();
        player.currentTime.should.not.equal(player.duration);
        done();
      });
      if (player._engine) {
        player.load();
      } else {
        done();
      }
    });

    it('should seek to live edge', (done) => {
      config.sources = sourcesConfig.Live;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
      player.ready().then(() => {
        setTimeout(() => {
          player.currentTime = 0;
          player.currentTime.should.not.equal(player.duration);
          player.seekToLiveEdge();
          player.currentTime.should.equal(player.duration);
          done();
        }, 500);
      });
      if (player._engine) {
        player.load();
      } else {
        done();
      }
    });
  });

  describe('volume', function () {
    let player, config, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should return 1 by default', function () {
      player.volume.should.equal(1);

    });

    it('should enable setting the volume via API', function () {
      player.volume = 0.9;
      player.volume.should.equal(0.9);
      player.volume = 0.3;
      player.volume.should.equal(0.3);
      player.volume = 0;
      player.volume.should.equal(0);
    });

    it('should enable setting the volume via config', function () {
      config.playback.volume = 0.9;
      player.configure(config);
      player.volume.should.equal(0.9);
    });

    it('should cap volume values between 0 and 1(including)', function () {
      player.volume = 1.1;
      player.volume.should.equal(1);
      player.volume = -0.1;
      player.volume.should.equal(0);
    });
  });

  describe('set currentTime', function () {
    let player, config, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4;
      player = new Player(config);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should set the given currentTime', function (done) {
      player.ready().then(() => {
        player.currentTime = 2;
        player._engine.currentTime.should.equal(2);
        done()
      });
      player.load();
    });

    it('should do nothing for non number given', function (done) {
      player.ready().then(() => {
        player.currentTime = true;
        player._engine.currentTime.should.equal(0);
        done()
      });
      player.load();
    });

    it('should set 0 for negative number given', function (done) {
      player.ready().then(() => {
        player.currentTime = -1;
        player._engine.currentTime.should.equal(0);
        done()
      });
      player.load();
    });

    it('should set duration -1 for duration given', function (done) {
      player.ready().then(() => {
        player.currentTime = player.duration;
        player._engine.currentTime.should.equal(player.duration - 0.1);
        done()
      });
      player.load();
    });
  });

  describe('destroy', function () {
    let sandbox, player, config;

    before(() => {
      createElement('DIV', targetId);
    });

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4;
    });

    afterEach(() => {
      sandbox.restore();
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should destroy the player', function () {
      player = new Player(config);
      let engineSpy = sandbox.spy(player._engine, 'destroy');
      let posterMgrSpy = sandbox.spy(player._posterManager, 'destroy');
      let eventMgrSpy = sandbox.spy(player._eventManager, 'destroy');
      let pluginMgrSpy = sandbox.spy(player._pluginManager, 'destroy');
      let stateMgrSpy = sandbox.spy(player._stateManager, 'destroy');
      player.destroy();
      engineSpy.should.have.been.calledOnce;
      posterMgrSpy.should.have.been.calledOnce;
      eventMgrSpy.should.have.been.calledOnce;
      pluginMgrSpy.should.have.been.calledOnce;
      stateMgrSpy.should.have.been.calledOnce;
      player._activeTextCues.should.be.empty;
      player._textDisplaySettings.should.be.empty;
      player._config.should.be.empty;
      player._tracks.should.be.empty;
      player._engineType.should.be.empty;
      player._streamType.should.be.empty;
      (player._readyPromise === null).should.be.true;
      player._firstPlay.should.be.true;
    });
  });

  describe('reset', function () {
    let sandbox, player, config;

    before(() => {
      createElement('DIV', targetId);
    });

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4;
    });

    afterEach(() => {
      sandbox.restore();
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should resets the player', function () {
      player = new Player(config);
      player._reset = false;
      let posterMgrSpy = sandbox.spy(player._posterManager, 'reset');
      let engineSpy = sandbox.spy(player._engine, 'reset');
      let eventMgrSpy = sandbox.spy(player._eventManager, 'removeAll');
      let pluginMgrSpy = sandbox.spy(player._pluginManager, 'reset');
      let stateMgrSpy = sandbox.spy(player._stateManager, 'reset');
      let _updateTextDisplay = sandbox.spy(player, '_updateTextDisplay');
      player.reset();
      player.paused.should.be.true;
      posterMgrSpy.should.have.been.calledOnce;
      eventMgrSpy.should.have.been.calledOnce;
      pluginMgrSpy.should.have.been.calledOnce;
      stateMgrSpy.should.have.been.calledOnce;
      engineSpy.should.have.been.calledOnce;
      player._activeTextCues.should.be.empty;
      _updateTextDisplay.should.have.been.calledOnce;
      _updateTextDisplay.should.have.been.calledWith([]);
      player._config.should.not.be.empty;
      player._tracks.should.be.empty;
      player._engineType.should.be.empty;
      player._streamType.should.be.empty;
      player._readyPromise.should.exist;
      player._firstPlay.should.be.true;
      player._el.childNodes.should.not.be.empty;
      player._reset.should.be.true;
    });
  });

  describe('_loadEngine', function () {
    let sandbox, player, config;

    before(() => {
      createElement('DIV', targetId);
    });

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      config = getConfigStructure();
      config.sources = sourcesConfig.Mp4;
    });

    afterEach(() => {
      sandbox.restore();
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should load an engine for the first time', function () {
      let spy = sandbox.spy(Html5, 'createEngine');
      player = new Player(config);
      spy.should.have.been.calledOnce;
    });

    it('should call restore for the same engine', function () {
      let createSpy = sandbox.spy(Html5, 'createEngine');
      let restoreSpy = sandbox.spy(Html5.prototype, 'restore');
      player = new Player(config);
      createSpy.should.have.been.calledOnce;
      restoreSpy.should.have.callCount(0);
      player.configure({sources: sourcesConfig.Mp4});
      createSpy.should.have.been.calledOnce;
      restoreSpy.should.have.been.calledOnce;
    });
  });

  describe('_getLanguage', function () {
    let config, player, sandbox;

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      config = getConfigStructure();
      player = new Player(config);
    });

    afterEach(() => {
      sandbox.restore();
      player.destroy();
    });

    it('should return the configured language', () => {
      let configuredLanguage = 'ita';
      player._getLanguage(configuredLanguage, new TextTrack({}), "text").should.equals(configuredLanguage);
    });

    it('should return the locale language', () => {
      let configuredLanguage = 'auto';
      let engTrackOptions = {
        active: true,
        label: "Eng",
        language: "eng",
        kind: 'subtitles'
      };
      let engTrack = new TextTrack(engTrackOptions);

      sandbox.stub(player, '_getTracksByType', () => {
        return [engTrack];
      });

      let resultLang = player._getLanguage(configuredLanguage, engTrack, "text");
      Track.langComparer(resultLang, Locale.language).should.be.true;
    });

    it('should return the default text track language', () => {
      let configuredLanguage = 'auto';
      let gerTrackOptions = {
        active: true,
        label: "Germany",
        language: "ger",
        kind: 'subtitles'
      };
      let gerTrack = new TextTrack(gerTrackOptions);

      sandbox.stub(player, '_getTracksByType', () => {
        return [gerTrack];
      });

      player._getLanguage(configuredLanguage, gerTrack, "text").should.equals(gerTrack.language);
    });

    it('should return the first track language ', () => {
      let configuredLanguage = 'auto';
      let gerTrackOptions = {
        active: true,
        label: "Germany",
        language: "ger",
        kind: 'subtitles'
      };
      let gerTrack = new TextTrack(gerTrackOptions);

      sandbox.stub(player, '_getTracksByType', () => {
        return [gerTrack];
      });

      player._getLanguage(configuredLanguage, null, "text").should.equals(gerTrack.language);
    });

    it('should return the first track language even if off track sent as default ', () => {
      let configuredLanguage = 'auto';
      let gerTrackOptions = {
        active: true,
        label: "Germany",
        language: "ger",
        kind: 'subtitles'
      };
      let offTrackOptions = {
        active: true,
        label: "Off",
        language: "off"
      };
      let gerTrack = new TextTrack(gerTrackOptions);
      let offTrack = new TextTrack(offTrackOptions);

      sandbox.stub(player, '_getTracksByType', () => {
        return [gerTrack, offTrack];
      });

      player._getLanguage(configuredLanguage, offTrack, "text").should.equals(gerTrack.language);
    });
  });

  describe('_resetTextCuesAndReposition', function () {
    let config, player, sandbox;

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      config = getConfigStructure();
      player = new Player(config);
    });

    afterEach(() => {
      sandbox.restore();
      player.destroy();
    });

    it('should reset the active text cues', () => {
      player._activeTextCues[0] = {};
      player._resetTextCuesAndReposition();
      let cue = player._activeTextCues[0];
      cue.hasBeenReset.should.equals(true);
    });
  });

  describe('logger', () => {
    it('should return the current log level', () => {
      const player = new Player();
      const currentLogLevel = player.getLogLevel();
      currentLogLevel.should.equal(player.LogLevel.ERROR);
    });

    it('should enable setting the current log level from API', () => {
      const player = new Player();
      let currentLogLevel = player.getLogLevel();
      currentLogLevel.should.equal(player.LogLevel.ERROR);
      player.setLogLevel(player.LogLevel.WARN);
      currentLogLevel = player.getLogLevel();
      currentLogLevel.should.equal(player.LogLevel.WARN);
    });

    it('should enable setting the current log level from config', () => {
      const player = new Player({logLevel: "DEBUG"});
      let currentLogLevel = player.getLogLevel();
      currentLogLevel.should.equal(player.LogLevel.DEBUG);
    });
  });

  describe('setCapabilities', () => {
    let initialOrigCapabilities;

    before((done) => {
      Player.runCapabilities();
      Player.getCapabilities().then(capabilities => {
        initialOrigCapabilities = capabilities;
        done();
      })
    });

    afterEach(() => {
      Player._playerCapabilities = Object.copyDeep(initialOrigCapabilities);
    });

    it('should not change the original capabilities by reference', (done) => {
      Player.getCapabilities().then((c1) => {
        c1.should.deep.equal(initialOrigCapabilities);
        c1.html5.autoplay = 'some value';
        Player.getCapabilities().then((c2) => {
          c2.html5.autoplay.should.equal(initialOrigCapabilities.html5.autoplay);
          done();
        });
      });
    });

    it('should set custom capabilities successfully', (done) => {
      let newCapabilities = {
        autoplay: 1,
        mutedAutoPlay: 2,
        isSupported: 3
      };
      Player.setCapabilities('html5', newCapabilities).then(() => {
        Player.getCapabilities().then((c2) => {
          c2.html5.should.deep.equal(newCapabilities);
          done();
        });
      });
    });

    it('should set custom capabilities successfully after getCapabilities() call', (done) => {
      let newCapabilities = {
        autoplay: 3,
        mutedAutoPlay: 4,
        isSupported: 5
      };
      Player.getCapabilities().then((c1) => {
        c1.should.deep.equal(initialOrigCapabilities);
        Player.setCapabilities('html5', newCapabilities).then(() => {
          Player.getCapabilities().then((c2) => {
            c2.html5.should.deep.equal(newCapabilities);
            done();
          });
        });
      });
    });
  });

  describe("_maybeSetTracksLabels", function () {
    let config, player, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
      config = getConfigStructure();
      config.sources = sourcesConfig.MultipleSources;
    });

    beforeEach(() => {
      player = new Player(config);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    const getConfigStructureWithLabelCallback = () => {
      const audioLabelCallback = () => {
        return "audio_label";
      };
      const captionsLabelCallback = () => {
        return "captions_label";
      };
      const qualitiesLabelCallback = () => {
        return "qualities_label";
      };
      const config = getConfigStructure();
      config["customLabels"] = {
        [LabelOptions.QUALITIES]: qualitiesLabelCallback,
        [LabelOptions.AUDIO]: audioLabelCallback,
        [LabelOptions.CAPTIONS]: captionsLabelCallback
      };
      return config;
    };

    it("should load with callback label function, and change the label of video track to 'qualities_label'", () => {
      player.configure(getConfigStructureWithLabelCallback());
      player._tracks = [
        new VideoTrack()
      ];
      player._maybeSetTracksLabels();
      player._tracks[0].label.should.equal('qualities_label');
    });

    it("should load with callback label function, and change the label of audio track to 'audio_label'", () => {
      player.configure(getConfigStructureWithLabelCallback());
      player._tracks = [
        new AudioTrack()
      ];
      player._maybeSetTracksLabels();
      player._tracks[0].label.should.equal('audio_label');
    });

    it("should load with callback label function, and change the label of text track to 'captions_label'", () => {
      player.configure(getConfigStructureWithLabelCallback());
      player._tracks = [
        new TextTrack()
      ];
      player._maybeSetTracksLabels();
      player._tracks[0].label.should.equal('captions_label');
    });

    it("should load with all callback label function, and change the label respectively to the track type'", () => {
      player.configure(getConfigStructureWithLabelCallback());
      player._tracks = [
        new TextTrack(),
        new VideoTrack(),
        new AudioTrack()
      ];
      player._maybeSetTracksLabels();
      player._tracks.forEach(t => {
        switch (t) {
          case t instanceof AudioTrack:
            t.label.should.equal('audio_label');
            break;
          case t instanceof TextTrack:
            t.label.should.equal('captions_label');
            break;
          case t instanceof VideoTrack:
            t.label.should.equal('qualities_label');
            break;
        }
      });
    });
  });
});
