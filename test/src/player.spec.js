import TextStyle from '../../src/track/text-style';
import Player from '../../src/player';
import {StateType} from '../../src/state/state-type';
import {CustomEventType, Html5EventType} from '../../src/event/event-type';
import SourcesConfig from './configs/sources.json';
import ExternalCaption from './configs/external-captions.json';
import Track from '../../src/track/track';
import VideoTrack from '../../src/track/video-track';
import AudioTrack from '../../src/track/audio-track';
import TextTrack from '../../src/track/text-track';
import {createElement, getConfigStructure, removeElement, removeVideoElementsFromTestPage} from './utils/test-utils';
import Locale from '../../src/utils/locale';
import Html5 from '../../src/engines/html5/html5';
import Error from '../../src/error/error';
import {Object as PKObject} from '../../src/utils/util';
import {LabelOptions} from '../../src/track/label-options';
import {EngineProvider} from '../../src/engines/engine-provider';
import FakeEvent from '../../src/event/fake-event';
import Html5AutoPlayCapability from '../../src/engines/html5/capabilities/html5-autoplay';
import {EXTERNAL_TRACK_ID} from '../../src/track/external-captions-handler';
import * as Utils from '../../src/utils/util';

const targetId = 'player-placeholder_player.spec';
let sourcesConfig = PKObject.copyDeep(SourcesConfig);

describe('Player', function () {
  before(() => {});

  beforeEach(() => {
    EngineProvider.destroy();
    EngineProvider.register(Html5.id, Html5);
    sourcesConfig = PKObject.copyDeep(SourcesConfig);
  });

  describe('load', function () {
    let config, player, playerContainer, sandbox;

    before(() => {
      playerContainer = createElement('DIV', targetId);
      config = getConfigStructure();
    });

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      sandbox.restore();
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should load if no source', done => {
      player.ready().then(() => {
        done();
      });
      player.load();
    });

    it("should't load if no engine", done => {
      player._engine = null;
      setTimeout(done, 300);
      player.ready().then(() => {
        done(new Error('fail'));
      });
      player.load();
    });

    it("should't load if source already exists", done => {
      player.addEventListener(CustomEventType.TRACKS_CHANGED, () => {
        sandbox.stub(player, '_load').callsFake(function () {
          done(new Error("should't load if source already exists"));
        });
        player.load();
        done();
      });
      player.load();
    });

    it("should't load if is in loading process", done => {
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

  describe('play', function () {
    let config, player, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
      config = getConfigStructure();
    });

    beforeEach(() => {
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should success before load', done => {
      player.addEventListener('playing', () => {
        done();
      });
      player.play();
    });

    it('should success after load', done => {
      player.addEventListener('playing', () => {
        done();
      });
      player.load();
      player.ready().then(() => {
        player.play();
      });
    });
    describe('attach detach', function () {
      it('should success play after detach attach', done => {
        const playing = () => {
          player.removeEventListener(Html5EventType.PLAYING, playing);
          player.addEventListener(Html5EventType.PLAYING, () => {
            done();
          });
          player.detachMediaSource();
          player.attachMediaSource();
          player.play();
        };
        player.addEventListener(Html5EventType.PLAYING, playing);
        player.play();
      });

      it('should attach return to time before detach', () => {
        let currentTime = NaN;
        const playing = () => {
          player.removeEventListener(Html5EventType.PLAYING, playing);
          currentTime = Math.floor(player.currentTime);
          player.detachMediaSource();
          player.attachMediaSource();
          Math.floor(player.currentTime).should.equal(currentTime);
        };
        player.addEventListener(Html5EventType.PLAYING, playing);
        player.play();
      });
    });
  });

  describe('ready', function () {
    let playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
    });

    describe('success', () => {
      let config;

      before(() => {
        config = getConfigStructure();
      });

      describe('preload none', () => {
        describe('passing config in constructor', () => {
          let player;

          beforeEach(() => {
            player = new Player(config);
            player.setSources(sourcesConfig.Mp4);
            playerContainer.appendChild(player.getView());
          });

          afterEach(() => {
            player.destroy();
          });

          it('should success ready -> load', done => {
            player.ready().then(() => {
              done();
            });
            player.load();
          });

          it('should success load -> ready', done => {
            player.load();
            player.ready().then(() => {
              done();
            });
          });

          it('should resolved successfully even when recoverable error occurred', done => {
            let readyResolved = false;
            player.addEventListener(CustomEventType.TRACKS_CHANGED, () => {
              readyResolved = true;
            });
            const error = new Error(Error.Severity.RECOVERABLE, Error.Category.PLAYER, Error.Code.RUNTIME_ERROR_NOT_REGISTERED_PLUGIN, 'plugin');
            player.dispatchEvent(new FakeEvent(Html5EventType.ERROR, error));
            player.load();
            player.ready().then(() => {
              try {
                readyResolved.should.be.true;
                done();
              } catch (e) {
                done(e);
              }
            });
          });
        });

        describe('passing config in configure', function () {
          let player;

          beforeEach(() => {
            player = new Player();
            playerContainer.appendChild(player.getView());
          });

          afterEach(() => {
            player.destroy();
          });

          it('should success setSources -> ready -> load', done => {
            player.setSources(sourcesConfig.Mp4);
            player.ready().then(() => {
              done();
            });
            player.load();
          });

          it('should success setSources -> load -> ready', done => {
            player.setSources(sourcesConfig.Mp4);
            player.load();
            player.ready().then(() => {
              done();
            });
          });

          it('should success ready -> setSources -> load', done => {
            player.ready().then(() => {
              done();
            });
            player.setSources(sourcesConfig.Mp4);
            player.load();
          });
        });
      });

      describe('preload auto', () => {
        describe('passing config in constructor', function () {
          let player;

          beforeEach(() => {
            config.playback.preload = 'auto';
            player = new Player(config);
            player.setSources(sourcesConfig.Mp4);
            playerContainer.appendChild(player.getView());
          });

          afterEach(() => {
            player.destroy();
          });

          it('should success ready -> load', done => {
            player.ready().then(() => {
              done();
            });
            player.load();
          });

          it('should success load -> ready', done => {
            player.load();
            player.ready().then(() => {
              done();
            });
          });
        });

        describe('passing config in configure', () => {
          let player;

          beforeEach(() => {
            config.playback.preload = 'auto';
            player = new Player(config);
            playerContainer.appendChild(player.getView());
          });

          afterEach(() => {
            player.destroy();
          });

          it('should success setSources -> ready -> load', done => {
            player.setSources(sourcesConfig.Mp4);
            player.ready().then(() => {
              done();
            });
            player.load();
          });

          it('should success setSources -> load -> ready', done => {
            player.setSources(sourcesConfig.Mp4);
            player.load();
            player.ready().then(() => {
              done();
            });
          });

          it('should success ready -> load -> setSources', done => {
            player.ready().then(() => {
              done();
            });
            player.load();
            player.setSources(sourcesConfig.Mp4);
          });

          it('should success ready -> setSources -> load', done => {
            player.ready().then(() => {
              done();
            });
            player.setSources(sourcesConfig.Mp4);
            player.load();
          });

          it('should success load -> setSources -> ready', done => {
            player.load();
            player.setSources(sourcesConfig.Mp4);
            player.ready().then(() => {
              done();
            });
          });

          it('should success load -> ready -> setSources', done => {
            player.load();
            player.ready().then(() => {
              done();
            });
            player.setSources(sourcesConfig.Mp4);
          });
        });
      });
    });

    describe('failure', () => {
      let config;

      before(() => {
        config = getConfigStructure();
      });

      describe('preload none', () => {
        describe('passing config in constructor', function () {
          let player;

          beforeEach(() => {
            player = new Player(config);
            player.setSources(sourcesConfig.CorruptedUrl);
            playerContainer.appendChild(player.getView());
          });

          afterEach(() => {
            player.destroy();
          });

          it('should fail ready -> load', done => {
            player.addEventListener(Html5EventType.ERROR, error => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.category.should.equals(Error.Category.MEDIA)) {
                done();
              }
            });
            player.ready().catch(() => {
              // catching the error is handled by the Error Event
            });
            player.load();
          });

          it('should fail load -> ready', done => {
            player.addEventListener(Html5EventType.ERROR, error => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.category.should.equals(Error.Category.MEDIA)) {
                done();
              }
            });
            player.load();
            player.ready().catch(() => {
              // catching the error is handled by the Error Event
            });
          });
        });

        describe('passing config in configure', function () {
          let player;

          beforeEach(() => {
            player = new Player();
            playerContainer.appendChild(player.getView());
          });

          afterEach(() => {
            player.destroy();
          });

          it('should fail setSources -> ready -> load', done => {
            player.addEventListener(Html5EventType.ERROR, error => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.category.should.equals(Error.Category.MEDIA)) {
                done();
              }
            });
            player.setSources(sourcesConfig.CorruptedUrl);
            player.ready().catch(() => {
              // catching the error is handled by the Error Event
            });
            player.load();
          });

          it('should fail setSources -> load -> ready', done => {
            player.addEventListener(Html5EventType.ERROR, error => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.category.should.equals(Error.Category.MEDIA)) {
                done();
              }
            });
            player.setSources(sourcesConfig.CorruptedUrl);
            player.load();
            player.ready().catch(() => {
              // catching the error is handled by the Error Event
            });
          });

          it('should fail ready -> setSources -> load', done => {
            player.addEventListener(Html5EventType.ERROR, error => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.category.should.equals(Error.Category.MEDIA)) {
                done();
              }
            });
            player.ready().catch(() => {
              // catching the error is handled by the Error Event
            });
            player.setSources(sourcesConfig.CorruptedUrl);
            player.load();
          });
        });
      });

      describe('preload auto', () => {
        describe('passing config in constructor', () => {
          let player;

          beforeEach(() => {
            config.playback.preload = 'auto';
            player = new Player(config);
            player.setSources(sourcesConfig.CorruptedUrl);
            playerContainer.appendChild(player.getView());
          });

          afterEach(() => {
            player.destroy();
          });

          it('should fail ready -> load', done => {
            player.addEventListener(Html5EventType.ERROR, error => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.category.should.equals(Error.Category.MEDIA)) {
                done();
              }
            });
            player.ready().catch(() => {
              // catching the error is handled by the Error Event
            });
            player.load();
          });

          it('should fail load -> ready', done => {
            player.addEventListener(Html5EventType.ERROR, error => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.category.should.equals(Error.Category.MEDIA)) {
                done();
              }
            });
            player.load();
            player.ready().catch(() => {
              // catching the error is handled by the Error Event
            });
          });
        });

        describe('passing config in configure', () => {
          let player;

          beforeEach(() => {
            config.playback.preload = 'auto';
            player = new Player();
            playerContainer.appendChild(player.getView());
          });

          afterEach(() => {
            player.destroy();
          });

          it('should fail setSources -> ready -> load', done => {
            player.addEventListener(Html5EventType.ERROR, error => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.category.should.equals(Error.Category.MEDIA)) {
                done();
              }
            });
            player.configure(config);
            player.setSources(sourcesConfig.CorruptedUrl);
            player.ready().catch(() => {
              // catching the error is handled by the Error Event
            });
            player.load();
          });

          it('should fail setSources -> load -> ready', done => {
            player.addEventListener(Html5EventType.ERROR, error => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.category.should.equals(Error.Category.MEDIA)) {
                done();
              }
            });
            player.configure(config);
            player.setSources(sourcesConfig.CorruptedUrl);
            player.load();
            player.ready().catch(() => {
              // catching the error is handled by the Error Event
            });
          });

          it('should fail ready -> load -> setSources', done => {
            player.addEventListener(Html5EventType.ERROR, error => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.category.should.equals(Error.Category.MEDIA)) {
                done();
              }
            });
            player.ready().catch(() => {
              // catching the error is handled by the Error Event
            });
            player.load();
            player.configure(config);
            player.setSources(sourcesConfig.CorruptedUrl);
          });

          it('should fail ready -> setSources -> load', done => {
            player.addEventListener(Html5EventType.ERROR, error => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.category.should.equals(Error.Category.MEDIA)) {
                done();
              }
            });
            player.ready().catch(() => {
              // catching the error is handled by the Error Event
            });
            player.configure(config);
            player.setSources(sourcesConfig.CorruptedUrl);
            player.load();
          });

          it('should fail load -> setSources -> ready', done => {
            player.addEventListener(Html5EventType.ERROR, error => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.category.should.equals(Error.Category.MEDIA)) {
                done();
              }
            });
            player.load();
            player.configure(config);
            player.setSources(sourcesConfig.CorruptedUrl);
            player.ready().catch(() => {
              // catching the error is handled by the Error Event
            });
          });

          it('should fail load -> ready -> setSources', done => {
            player.addEventListener(Html5EventType.ERROR, error => {
              if (error.payload.severity.should.equals(Error.Severity.CRITICAL) && error.payload.category.should.equals(Error.Category.MEDIA)) {
                done();
              }
            });
            player.load();
            player.ready().catch(() => {
              // catching the error is handled by the Error Event
            });
            player.configure(config);
            player.setSources(sourcesConfig.CorruptedUrl);
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
    let player, config, sandbox;

    before(() => {
      sandbox = sinon.createSandbox();
      createElement('DIV', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
      player._tracks = [
        new VideoTrack({bandwidth: 15000, height: 760, width: 480}),
        new VideoTrack({bandwidth: 20000, height: 860, width: 560}),
        new AudioTrack(),
        new AudioTrack(),
        new TextTrack(),
        new TextTrack(),
        new TextTrack()
      ];
      sandbox.stub(player._engine, 'applyABRRestriction').callsFake(function () {});
    });

    afterEach(() => {
      player.destroy();
      sandbox.restore();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should return all tracks for no type', () => {
      player.getTracks().length.should.be.equal(7);
    });

    it('should return video tracks', () => {
      player.getTracks('video').length.should.be.equal(2);
    });

    it('should filter by bitrate video tracks after restriction include the highest', () => {
      player.configure({
        abr: {
          restrictions: {
            minBitrate: 17000,
            maxBitrate: 20000
          }
        }
      });
      player.getTracks('video').length.should.be.equal(1);
    });

    it('should filter by bitrate video tracks after restriction include the lowest', () => {
      player.configure({
        abr: {
          restrictions: {
            minBitrate: 13000,
            maxBitrate: 15000
          }
        }
      });
      player.getTracks('video').length.should.be.equal(1);
    });

    it('should filter by bitrate video tracks after restriction include both', () => {
      player.configure({
        abr: {
          restrictions: {
            minBitrate: 15000,
            maxBitrate: 20000
          }
        }
      });
      player.getTracks('video').length.should.be.equal(2);
    });

    it('should filter by height video tracks after restriction include the highest', () => {
      player.configure({
        abr: {
          restrictions: {
            minHeight: 800,
            maxHeight: 900
          }
        }
      });
      player.getTracks('video').length.should.be.equal(1);
    });

    it('should filter by height video tracks after restriction include the lowest', () => {
      player.configure({
        abr: {
          restrictions: {
            minHeight: 700,
            maxHeight: 800
          }
        }
      });
      player.getTracks('video').length.should.be.equal(1);
    });

    it('should filter by height video tracks after restriction include both', () => {
      player.configure({
        abr: {
          restrictions: {
            minHeight: 700,
            maxHeight: 900
          }
        }
      });
      player.getTracks('video').length.should.be.equal(2);
    });

    it('should filter by width video tracks after restriction include the highest', () => {
      player.configure({
        abr: {
          restrictions: {
            minWidth: 500,
            maxWidth: 600
          }
        }
      });
      player.getTracks('video').length.should.be.equal(1);
    });

    it('should filter by width video tracks after restriction include the lowest', () => {
      player.configure({
        abr: {
          restrictions: {
            minWidth: 400,
            maxWidth: 500
          }
        }
      });
      player.getTracks('video').length.should.be.equal(1);
    });

    it('should filter by width video tracks after restriction include both', () => {
      player.configure({
        abr: {
          restrictions: {
            minWidth: 400,
            maxWidth: 600
          }
        }
      });
      player.getTracks('video').length.should.be.equal(2);
    });

    it('should filter by height and width video tracks after will return all cause both of them not relevant', () => {
      player.configure({
        abr: {
          restrictions: {
            minWidth: 600,
            minHeight: 1000
          }
        }
      });
      player.getTracks('video').length.should.be.equal(2);
    });

    it('should not change the result for incorrect config', () => {
      player.configure({
        abr: {
          restrictions: {
            minWidth: 400,
            maxWidth: 500
          }
        }
      });
      player.getTracks('video').length.should.be.equal(1);
      player.configure({
        abr: {
          restrictions: {
            minWidth: 400,
            maxWidth: 450
          }
        }
      });
      player.getTracks('video').length.should.be.equal(1);
    });

    it('should filter by height and width video tracks will return the correct one', () => {
      player.configure({
        abr: {
          restrictions: {
            minWidth: 500,
            minHeight: 800
          }
        }
      });
      player.getTracks('video').length.should.be.equal(1);
    });

    it('should return audio tracks', () => {
      player.getTracks('audio').length.should.be.equal(2);
    });

    it('should return text tracks', () => {
      player.getTracks('text').length.should.be.equal(3);
    });

    it('should return all tracks for unknown type', () => {
      player.getTracks('some').length.should.be.equal(7);
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
      track1 = document.createElement('track');
      track2 = document.createElement('track');
      track1.kind = 'subtitles';
      track1.label = 'English';
      track1.srclang = 'en';
      track1.default = true;
      track2.kind = 'captions';
      track2.srclang = 'fr';
    });

    beforeEach(() => {
      config = getConfigStructure();
      // config.sources = ;
      player = new Player(config);
      player.setSources(sourcesConfig.MultipleSources);
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

    it('should return all tracks using ready', done => {
      player.ready().then(() => {
        let videoTracksLength = 2;
        let audioTracksLength = video.audioTracks ? video.audioTracks.length : 0;
        let textTracksLength = video.textTracks ? video.textTracks.length + 1 : 0;
        let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
        player.getTracks().length.should.be.equal(totalTracksLength);
        done();
      });
      player.load();
    });

    it('should return video tracks', done => {
      player.ready().then(() => {
        let videoTracksLength = 2;
        player.getTracks('video').length.should.be.equal(videoTracksLength);
        done();
      });
      player.load();
    });

    it('should return audio tracks', done => {
      player.load();
      player.ready().then(() => {
        let audioTracksLength = video.audioTracks ? video.audioTracks.length : 0;
        player.getTracks('audio').length.should.be.equal(audioTracksLength);
        done();
      });
    });

    it('should return text tracks', done => {
      player.ready().then(() => {
        let textTracksLength = video.textTracks ? video.textTracks.length + 1 : 0;
        player.getTracks('text').length.should.be.equal(textTracksLength);
        done();
      });
      player.load();
    });

    it('should return all tracks for unknown type', done => {
      player.ready().then(() => {
        let videoTracksLength = 2;
        let audioTracksLength = video.audioTracks ? video.audioTracks.length : 0;
        let textTracksLength = video.textTracks ? video.textTracks.length + 1 : 0;
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
      player = new Player(config);
      player.setSources(sourcesConfig.MultipleSources);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it.skip('should select a new video track', done => {
      let tracks;
      player.addEventListener(CustomEventType.VIDEO_TRACK_CHANGED, event => {
        (event.payload.selectedVideoTrack instanceof VideoTrack).should.be.true;
        event.payload.selectedVideoTrack.index.should.equal(1);
        (video.src.indexOf(sourcesConfig.MultipleSources.progressive[0].url) > -1).should.be.false;
        (video.src.indexOf(sourcesConfig.MultipleSources.progressive[1].url) > -1).should.be.true;
        tracks[0].active.should.be.false;
        tracks[1].active.should.be.true;
        done();
      });
      player.ready().then(() => {
        tracks = player._tracks.filter(track => {
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

    it('should not change the selected for non exist video track', done => {
      player.ready().then(() => {
        let tracks = player._tracks.filter(track => {
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
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should select a new audio track', done => {
      player.ready().then(() => {
        if (video.audioTracks) {
          player.addEventListener(CustomEventType.AUDIO_TRACK_CHANGED, event => {
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
          let tracks = player._tracks.filter(track => {
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

    it('should not change the selected audio track', done => {
      player.ready().then(() => {
        if (video.audioTracks) {
          let tracks = player._tracks.filter(track => {
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

    it('should not change the selected for non exist audio track', done => {
      player.ready().then(() => {
        if (video.audioTracks) {
          let tracks = player._tracks.filter(track => {
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
    let config, player, video, playerContainer;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    beforeEach(() => {
      config = getConfigStructure();
      config.playback.textLanguage = 'auto';
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());
      video = player._engine.getVideoElement();
      video.addTextTrack('subtitles', 'English', 'en');
      video.addTextTrack('subtitles', 'French', 'fr');
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should select a new subtitles track', done => {
      player
        .ready()
        .then(() => {
          player.addEventListener(CustomEventType.TEXT_TRACK_CHANGED, event => {
            (event.payload.selectedTextTrack instanceof TextTrack).should.be.true;
            event.payload.selectedTextTrack.language.should.equal('fr');
            video.textTracks[0].mode.should.be.equal('disabled');
            video.textTracks[1].mode.should.be.equal('hidden');
            tracks[0].active.should.be.false;
            tracks[1].active.should.be.true;
            done();
          });
          let tracks = player._tracks.filter(track => {
            return track instanceof TextTrack;
          });
          video.textTracks[0].mode.should.be.equal('hidden');
          video.textTracks[1].mode.should.be.equal('disabled');
          tracks[0].active.should.be.true;
          tracks[1].active.should.be.false;
          player.selectTrack(new TextTrack({language: 'fr', kind: 'subtitles', index: 1}));
        })
        .catch(e => {
          done(e);
        });
      player.load();
    });

    it('should select a new captions track', done => {
      player.load();
      player.ready().then(() => {
        player.addEventListener(CustomEventType.TEXT_TRACK_CHANGED, event => {
          (event.payload.selectedTextTrack instanceof TextTrack).should.be.true;
          event.payload.selectedTextTrack.index.should.equal(1);
          video.textTracks[0].mode.should.be.equal('disabled');
          video.textTracks[1].mode.should.be.equal('hidden');
          tracks[0].active.should.be.false;
          tracks[1].active.should.be.true;
          done();
        });
        let tracks = player._tracks.filter(track => {
          return track instanceof TextTrack;
        });
        video.textTracks[0].mode.should.be.equal('hidden');
        video.textTracks[1].mode.should.be.equal('disabled');
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        player.selectTrack(new TextTrack({index: 1, kind: 'captions', language: 'fr'}));
      });
    });

    it('should not change the selected text track', done => {
      player.ready().then(() => {
        let tracks = player._tracks.filter(track => {
          return track instanceof TextTrack;
        });
        video.textTracks[0].mode.should.be.equal('hidden');
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

    it('should not change the selected for non exist text track', done => {
      player.load();
      player.ready().then(() => {
        let tracks = player._tracks.filter(track => {
          return track instanceof TextTrack;
        });
        video.textTracks[0].mode.should.be.equal('hidden');
        video.textTracks[1].mode.should.be.equal('disabled');
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        player.selectTrack(new TextTrack({index: 3, kind: 'subtitles'}));
        video.textTracks[0].mode.should.be.equal('hidden');
        video.textTracks[1].mode.should.be.equal('disabled');
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        done();
      });
    });

    it('should not change the selected for metadata text track', done => {
      player.ready().then(() => {
        let tracks = player._tracks.filter(track => {
          return track instanceof TextTrack;
        });
        video.textTracks[0].mode.should.be.equal('hidden');
        video.textTracks[1].mode.should.be.equal('disabled');
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        player.selectTrack(new TextTrack({index: 1, kind: 'metadata'}));
        video.textTracks[0].mode.should.be.equal('hidden');
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
      player = new Player(config);
      player.setSources(sourcesConfig.MultipleSources);
      playerContainer.appendChild(player.getView());
      video = player._engine.getVideoElement();
      track1 = document.createElement('track');
      track2 = document.createElement('track');
      track1.kind = 'subtitles';
      track1.label = 'English';
      track1.default = true;
      track1.srclang = 'en';
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

    it.skip('should get the active tracks before and after switching', done => {
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
        videoTracks = player._tracks.filter(track => {
          return track instanceof VideoTrack;
        });
        audioTracks = player._tracks.filter(track => {
          return track instanceof AudioTrack;
        });
        textTracks = player._tracks.filter(track => {
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
      config.playback.textLanguage = 'auto';
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());
      video = player._engine.getVideoElement();
      track1 = document.createElement('track');
      track2 = document.createElement('track');
      track1.kind = 'subtitles';
      track1.label = 'English';
      track1.default = true;
      track1.srclang = 'en';
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

    it('should disable the active text track', done => {
      player
        .ready()
        .then(() => {
          let tracks = player._tracks.filter(track => {
            return track instanceof TextTrack;
          });
          video.textTracks[0].mode.should.be.equal('hidden');
          video.textTracks[1].mode.should.be.equal('disabled');
          tracks[0].active.should.be.true;
          tracks[1].active.should.be.false;
          player.hideTextTrack();
          video.textTracks[0].mode.should.be.equal('disabled');
          video.textTracks[1].mode.should.be.equal('disabled');
          tracks[0].active.should.be.false;
          tracks[1].active.should.be.false;
          done();
        })
        .catch(e => {
          done(e);
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
      it('should accept only TextStyle setting', () => {
        try {
          player.textStyle = {
            backgroundColor: [255, 0, 0]
          };
        } catch (error) {
          error.message.should.be.equal('Style must be instance of TextStyle');
        }
      });

      it('should change style setting', () => {
        let textStyle = new TextStyle();
        textStyle.fontEdge = TextStyle.EdgeStyles.RAISED;
        textStyle.fontSize = '75%';
        textStyle.fontScale = '3';
        textStyle.fontColor = TextStyle.StandardColors.BLACK;
        textStyle.fontOpacity = TextStyle.StandardOpacities.SEMI_HIGH;
        textStyle.backgroundOpacity = TextStyle.StandardOpacities.SEMI_LOW;
        textStyle.fontFamily = TextStyle.FontFamily.ARIAL;
        textStyle.backgroundColor = TextStyle.StandardColors.RED;
        player.textStyle = textStyle;
        const currentTextStyle = player.textStyle;
        currentTextStyle.fontEdge.should.deep.equal(textStyle.fontEdge);
        currentTextStyle.fontSize.should.equal(textStyle.fontSize);
        currentTextStyle.fontScale.should.equal(textStyle.fontScale);
        currentTextStyle.fontColor.should.deep.equal(textStyle.fontColor);
        currentTextStyle.fontOpacity.should.equal(textStyle.fontOpacity);
        currentTextStyle.backgroundOpacity.should.equal(textStyle.backgroundOpacity);
        currentTextStyle.fontFamily.should.equal(textStyle.fontFamily);
        currentTextStyle.backgroundColor.should.deep.equal(textStyle.backgroundColor);
      });

      it('should create fromJson set the correct value', () => {
        const settings = {
          fontEdge: TextStyle.EdgeStyles.NONE,
          fontSize: '75%',
          fontScale: '3',
          fontColor: TextStyle.StandardColors.CYAN,
          fontOpacity: TextStyle.StandardOpacities.TRANSPARENT,
          backgroundOpacity: TextStyle.StandardOpacities.TRANSPARENT,
          fontFamily: TextStyle.FontFamily.ARIAL,
          backgroundColor: TextStyle.StandardColors.RED
        };
        const textStyle = TextStyle.fromJson(settings);
        textStyle.fontEdge.should.deep.equal(settings.fontEdge);
        textStyle.fontSize.should.equal(settings.fontSize);
        textStyle.fontScale.should.equal(settings.fontScale);
        textStyle.fontColor.should.deep.equal(settings.fontColor);
        textStyle.fontOpacity.should.equal(settings.fontOpacity);
        textStyle.backgroundOpacity.should.equal(settings.backgroundOpacity);
        textStyle.fontFamily.should.equal(settings.fontFamily);
        textStyle.backgroundColor.should.deep.equal(settings.backgroundColor);
      });

      it('should fromJson return an object equal to explicit set object', () => {
        const settings = {
          fontEdge: TextStyle.EdgeStyles.RAISED,
          fontSize: '75%',
          fontScale: '3',
          fontColor: TextStyle.StandardColors.CYAN,
          fontOpacity: TextStyle.StandardOpacities.SEMI_LOW,
          backgroundOpacity: TextStyle.StandardOpacities.SEMI_LOW,
          fontFamily: TextStyle.FontFamily.ARIAL,
          backgroundColor: TextStyle.StandardColors.RED
        };
        let textStyle = new TextStyle();
        textStyle.fontEdge = TextStyle.EdgeStyles.RAISED;
        textStyle.fontSize = '75%';
        textStyle.fontScale = '3';
        textStyle.fontColor = TextStyle.StandardColors.CYAN;
        textStyle.fontOpacity = TextStyle.StandardOpacities.SEMI_LOW;
        textStyle.backgroundColor = TextStyle.StandardColors.RED;
        textStyle.backgroundOpacity = TextStyle.StandardOpacities.SEMI_LOW;
        textStyle.fontFamily = TextStyle.FontFamily.ARIAL;
        TextStyle.fromJson(settings).isEqual(textStyle).should.be.true;
      });

      it('should toJson return same object', () => {
        const settings = {
          fontEdge: TextStyle.EdgeStyles.RAISED,
          fontSize: '75%',
          fontScale: '3',
          fontColor: TextStyle.StandardColors.CYAN,
          fontOpacity: TextStyle.StandardOpacities.SEMI_LOW,
          backgroundOpacity: TextStyle.StandardOpacities.SEMI_LOW,
          fontFamily: TextStyle.FontFamily.ARIAL,
          backgroundColor: TextStyle.StandardColors.RED
        };
        let textStyle = new TextStyle();
        textStyle.fontEdge = TextStyle.EdgeStyles.RAISED;
        textStyle.fontSize = '75%';
        textStyle.fontScale = '3';
        textStyle.fontColor = TextStyle.StandardColors.CYAN;
        textStyle.fontOpacity = TextStyle.StandardOpacities.SEMI_LOW;
        textStyle.backgroundColor = TextStyle.StandardColors.RED;
        textStyle.backgroundOpacity = TextStyle.StandardOpacities.SEMI_LOW;
        textStyle.fontFamily = TextStyle.FontFamily.ARIAL;
        TextStyle.toJson(textStyle).should.deep.equal(settings);
      });

      it('should clone API return exact same object', () => {
        let clonedTextStyle = new TextStyle();
        clonedTextStyle.fontEdge = TextStyle.EdgeStyles.RAISED;
        clonedTextStyle.fontSize = '75%';
        clonedTextStyle.fontScale = '3';
        clonedTextStyle.fontColor = TextStyle.StandardColors.CYAN;
        clonedTextStyle.fontOpacity = TextStyle.StandardOpacities.SEMI_LOW;
        clonedTextStyle.backgroundColor = TextStyle.StandardColors.RED;
        clonedTextStyle.backgroundOpacity = TextStyle.StandardOpacities.SEMI_LOW;
        clonedTextStyle.fontFamily = TextStyle.FontFamily.ARIAL;
        clonedTextStyle.clone().isEqual(clonedTextStyle).should.be.true;
      });
    });

    describe('setTextDisplaySettings', () => {
      it('should change textDisplay settings', () => {
        const settings = {line: -4};
        player.setTextDisplaySettings(settings);
        player._textDisplaySettings.should.deep.equal(settings);
      });

      it('should change textDisplay settings and remove setting from cue for empty values', () => {
        const settings = {line: -4, position: '10%'};
        player._activeTextCues[0] = {
          position: 'auto',
          align: 'center',
          size: 100,
          vertical: ''
        };
        player.setTextDisplaySettings(settings);
        player._textDisplaySettings.should.deep.equal(settings);
        player._activeTextCues[0].should.deep.equal(Utils.Object.mergeDeep(player._activeTextCues[0], settings));
        const settingsToRemovePositionValue = {line: -4, position: ''};
        player.setTextDisplaySettings(settingsToRemovePositionValue);
        player._activeTextCues[0].should.deep.equal(Utils.Object.mergeDeep(player._activeTextCues[0], {line: -4}));
      });
    });

    describe('configure text track display', () => {
      it('should change textDisplay settings by config', () => {
        const settings = {line: -4};
        player = new Player({text: {textTrackDisplaySetting: settings}});
        player._textDisplaySettings.should.deep.equal(settings);
      });

      it('should forceCenter override textTrackDisplaySetting', () => {
        const settings = {position: '10%', align: 'left', size: '10'};
        player = new Player({text: {forceCenter: true, textTrackDisplaySetting: settings}});
        player._textDisplaySettings.should.deep.equal({position: 'auto', align: 'center', size: '100'});
      });

      it('should forceCenter keep the other values from textTrackDisplaySetting', () => {
        const settings = {line: '-4', lineAlign: 'end', position: '10%'};
        player = new Player({text: {forceCenter: true, textTrackDisplaySetting: settings}});
        player._textDisplaySettings.should.deep.equal(Utils.Object.mergeDeep(settings, {position: 'auto', align: 'center', size: '100'}));
      });

      it('should configure change of textTrackDisplaySetting will apply forceCenter', () => {
        const settings = {position: '10%', align: 'left', size: '10'};
        player = new Player({text: {forceCenter: true, textTrackDisplaySetting: settings}});
        player.configure({text: {textTrackDisplaySetting: settings}});
        player._textDisplaySettings.should.deep.equal({position: 'auto', align: 'center', size: '100'});
      });

      it('should empty configure will not take the previous config and change the values from setTextDisplaySettings', () => {
        const settings = {position: '10%', align: 'left', size: '10'};
        player = new Player({text: {forceCenter: true, textTrackDisplaySetting: settings}});
        player.setTextDisplaySettings(settings);
        player.configure({text: {}});
        player._textDisplaySettings.should.deep.equal(settings);
      });

      it('should keep the current setting for empty config', () => {
        const settings = {line: '-4', lineAlign: 'end', position: '10%'};
        player.setTextDisplaySettings(settings);
        player.configure({text: {}});
        player._textDisplaySettings.should.deep.equal(settings);
      });

      it('should change style setting by config', () => {
        player = new Player({
          text: {
            textStyle: {
              backgroundColor: TextStyle.StandardColors.RED,
              fontColor: TextStyle.StandardColors.CYAN,
              fontEdge: TextStyle.EdgeStyles.RAISED
            }
          }
        });
        const currentTextStyle = player.textStyle;
        currentTextStyle.backgroundColor.should.deep.equal(TextStyle.StandardColors.RED);
        currentTextStyle.fontColor.should.deep.equal(TextStyle.StandardColors.CYAN);
        currentTextStyle.fontEdge.should.deep.equal(TextStyle.EdgeStyles.RAISED);
      });
    });
  });

  describe('Text Track', () => {
    let config, player, video, playerContainer;

    before(() => {
      playerContainer = createElement('div', targetId);
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    let getActiveNativeTracks = () => {};
    let checkTrack = () => {};

    const switchTextTrack = (track1, track2, done) => {
      const tracksChangeToTrack1 = event => {
        try {
          player.removeEventListener(CustomEventType.TEXT_TRACK_CHANGED, tracksChangeToTrack1);
          player.addEventListener(CustomEventType.TEXT_TRACK_CHANGED, tracksChangeToTrack2);
          checkTrack(track1, event.payload.selectedTextTrack);
          player.selectTrack(track2);
        } catch (e) {
          done(e);
        }
      };
      const tracksChangeToTrack2 = event => {
        try {
          player.removeEventListener(CustomEventType.TEXT_TRACK_CHANGED, tracksChangeToTrack2);
          checkTrack(track2, event.payload.selectedTextTrack);
          done();
        } catch (e) {
          done(e);
        }
      };
      player.addEventListener(CustomEventType.TEXT_TRACK_CHANGED, tracksChangeToTrack1);
      player.selectTrack(track1);
    };

    describe('useNativeTextTrack = true', () => {
      before(() => {
        getActiveNativeTracks = () => {
          return Array.from(video.textTracks).filter(track => {
            return track.mode === 'showing';
          });
        };

        checkTrack = (textTrack, selectedTrack) => {
          const activeNativeTracks = getActiveNativeTracks();
          activeNativeTracks.length.should.equal(1);
          selectedTrack.language.should.equal(textTrack.language);
          textTrack.external
            ? activeNativeTracks[0].language.should.equal(EXTERNAL_TRACK_ID)
            : activeNativeTracks[0].language.should.equal(textTrack.language);
        };
      });

      beforeEach(() => {
        config = Utils.Object.mergeDeep(getConfigStructure(), {
          text: {useNativeTextTrack: true}
        });
        player = new Player(config);
        player.setSources(Utils.Object.mergeDeep({captions: [ExternalCaption.He, ExternalCaption.Ru]}, sourcesConfig.Mp4));
        playerContainer.appendChild(player.getView());
        video = player._engine.getVideoElement();
        video.addTextTrack('subtitles', 'English', 'en');
        video.addTextTrack('subtitles', 'French', 'fr');
      });

      it('should switch between internal and external', done => {
        player.ready().then(() => {
          let externalTracks = player.getTracks().filter(track => {
            return track instanceof TextTrack && track.external;
          });
          let internalTracks = player.getTracks().filter(track => {
            return track instanceof TextTrack && !track.external;
          });
          switchTextTrack(externalTracks[0], internalTracks[0], done);
        });
        player.load();
      });

      it('should switch between internal and internal', done => {
        player.ready().then(() => {
          let internalTracks = player.getTracks().filter(track => {
            return track instanceof TextTrack && !track.external;
          });
          switchTextTrack(internalTracks[0], internalTracks[1], done);
        });
        player.load();
      });

      it('should switch between external and external', done => {
        player.ready().then(() => {
          let externalTracks = player.getTracks().filter(track => {
            return track instanceof TextTrack && track.external;
          });
          switchTextTrack(externalTracks[0], externalTracks[1], done);
        });
        player.load();
      });

      it('should getTracks return external and internal caption', done => {
        player.ready().then(() => {
          try {
            let tracks = player.getTracks().filter(track => {
              return track instanceof TextTrack;
            });
            tracks.length.should.equal(5);
            done();
          } catch (e) {
            done(e);
          }
        });
        player.load();
      });

      it('should create only one track for external', done => {
        player.ready().then(() => {
          try {
            Array.from(video.textTracks).length.should.equal(3);
            const externalTrack = Array.from(video.textTracks).filter(track => track.language === EXTERNAL_TRACK_ID);
            externalTrack.length.should.equal(1);
            done();
          } catch (e) {
            done(e);
          }
        });
        player.load();
      });
    });

    describe('useNativeTextTrack = false', () => {
      before(() => {
        getActiveNativeTracks = () => {
          return Array.from(video.textTracks).filter(track => {
            return track.mode === 'hidden';
          });
        };
        checkTrack = (textTrack, selectedTrack) => {
          const activeNativeTracks = getActiveNativeTracks();
          if (!textTrack.external) {
            activeNativeTracks.length.should.equal(1);
            activeNativeTracks[0].language.should.equal(textTrack.language);
            player._externalCaptionsHandler._isTextTrackActive = false;
          } else {
            activeNativeTracks.length.should.equal(0);
            player._externalCaptionsHandler._isTextTrackActive = true;
          }
          selectedTrack.language.should.equal(textTrack.language);
        };
      });

      beforeEach(() => {
        config = Utils.Object.mergeDeep(getConfigStructure(), {
          text: {useNativeTextTrack: false}
        });
        player = new Player(config);
        player.setSources(Utils.Object.mergeDeep({captions: [ExternalCaption.He, ExternalCaption.Ru]}, sourcesConfig.Mp4));
        playerContainer.appendChild(player.getView());
        video = player._engine.getVideoElement();
        video.addTextTrack('subtitles', 'English', 'en');
        video.addTextTrack('subtitles', 'French', 'fr');
      });

      it('should switch between internal and external', done => {
        player.ready().then(() => {
          let externalTracks = player.getTracks().filter(track => {
            return track instanceof TextTrack && track.external;
          });
          let internalTracks = player.getTracks().filter(track => {
            return track instanceof TextTrack && !track.external;
          });
          switchTextTrack(externalTracks[0], internalTracks[0], done);
        });
        player.load();
      });

      it('should switch between internal and internal', done => {
        player.ready().then(() => {
          let internalTracks = player.getTracks().filter(track => {
            return track instanceof TextTrack && !track.external;
          });
          switchTextTrack(internalTracks[0], internalTracks[1], done);
        });
        player.load();
      });

      it('should switch between external and external', done => {
        player.ready().then(() => {
          let externalTracks = player.getTracks().filter(track => {
            return track instanceof TextTrack && track.external;
          });
          switchTextTrack(externalTracks[0], externalTracks[1], done);
        });
        player.load();
      });

      it('should getTracks return external and internal caption', done => {
        player.ready().then(() => {
          try {
            let tracks = player.getTracks().filter(track => {
              return track instanceof TextTrack;
            });
            tracks.length.should.equal(5);
            done();
          } catch (e) {
            done(e);
          }
        });
        player.load();
      });

      it('should not create native track for external', done => {
        player.ready().then(() => {
          try {
            Array.from(video.textTracks).length.should.equal(2);
            const externalTrack = Array.from(video.textTracks).filter(track => track.language === EXTERNAL_TRACK_ID);
            externalTrack.length.should.equal(0);
            done();
          } catch (e) {
            done(e);
          }
        });
        player.load();
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
      it('should start with initial fullscreen state of false', () => {
        player.isFullscreen().should.be.false;
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
      let player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
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
        player = new Player(config);
        player.setSources(sourcesConfig.Mp4);
        playerContainer.appendChild(player.getView());
        video = player._engine.getVideoElement();
        track1 = document.createElement('track');
        track2 = document.createElement('track');
        track1.kind = 'subtitles';
        track1.label = 'English';
        track1.default = true;
        track1.srclang = 'en';
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
          let audioTracksLength = video.audioTracks ? video.audioTracks.length : 0;
          let textTracksLength = video.textTracks ? video.textTracks.length + 1 : 0;
          let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
          data.payload.tracks.length.should.be.equal(totalTracksLength);
          done();
        }

        player.addEventListener(CustomEventType.TRACKS_CHANGED, onTracksChanged);
        player.load();
      });
    });

    describe('playback start', function () {
      let config;
      let player;
      let playerContainer;

      before(() => {
        playerContainer = createElement('DIV', targetId);
      });

      beforeEach(() => {
        config = getConfigStructure();
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

      it('should fire playback start only once', done => {
        let counter = 0;
        let onPlaying = () => {
          player.removeEventListener(Html5EventType.PLAYING, onPlaying);
          player.pause();
          player.play();
          setTimeout(() => {
            try {
              counter.should.equal(1);
              done();
            } catch (e) {
              done(e);
            }
          }, 0);
        };
        player.addEventListener(CustomEventType.PLAYBACK_START, () => {
          counter++;
        });
        player.addEventListener(Html5EventType.PLAYING, onPlaying);
        player.setSources(sourcesConfig.Mp4);
        player.play();
      });

      it('should fire playback start - autoplay', done => {
        player.addEventListener(CustomEventType.PLAYBACK_START, () => {
          done();
        });
        player.configure({
          playback: {
            autoplay: true
          }
        });
        player.setSources(sourcesConfig.Mp4);
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
        player = new Player(config);
        player.setSources(sourcesConfig.Mp4);
        playerContainer.appendChild(player.getView());
      });

      afterEach(() => {
        player.destroy();
      });

      after(() => {
        removeVideoElementsFromTestPage();
        removeElement(targetId);
      });

      it('should fire first play only once', done => {
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

      it('should fire first play only after media loaded', done => {
        player.addEventListener(CustomEventType.MEDIA_LOADED, () => {
          player.addEventListener(CustomEventType.FIRST_PLAY, () => {
            done();
          });
        });
        player.load();
        player.play();
      });
    });

    describe('auto play failed', function () {
      let config;
      let player;
      let playerContainer;
      let sandbox;

      before(() => {
        playerContainer = createElement('DIV', targetId);
      });

      beforeEach(() => {
        sandbox = sinon.createSandbox();
        config = PKObject.mergeDeep(getConfigStructure(), {
          sources: sourcesConfig.Mp4,
          playback: {
            autoplay: true
          }
        });
        player = new Player(config);
        player.setSources(sourcesConfig.Mp4);
        playerContainer.appendChild(player.getView());
      });

      afterEach(() => {
        player.destroy();
        sandbox.restore();
      });

      after(() => {
        removeVideoElementsFromTestPage();
        removeElement(targetId);
      });

      it('should fire auto play failed and show the poster once get PLAY_FAILED', done => {
        player.addEventListener(CustomEventType.AUTOPLAY_FAILED, event => {
          try {
            player._posterManager._el.style.display.should.equal('');
            event.payload.error.should.equal('mock failure');
            done();
          } catch (e) {
            done(e);
          }
        });
        sandbox.stub(player._engine._el, 'play').callsFake(function () {
          return Promise.reject('mock failure');
        });
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

      it('should fire source selected', done => {
        player.addEventListener(CustomEventType.SOURCE_SELECTED, event => {
          event.payload.selectedSource[0].id.should.equal('1_rsrdfext_10081,url');
          done();
        });
        player.setSources(sourcesConfig.Mp4);
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
        player = new Player();
        player.setSources(sourcesConfig.Mp4);
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

      it('should fire media loaded', done => {
        player.addEventListener(CustomEventType.MEDIA_LOADED, () => {
          done();
        });
        player.load();
      });
    });

    describe('first playing', () => {
      let config;
      let player;
      let playerContainer;

      before(() => {
        playerContainer = createElement('DIV', targetId);
      });

      beforeEach(() => {
        config = getConfigStructure();
        player = new Player();
        player.setSources(sourcesConfig.Mp4);
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

      it('should fire first playing when start to playing', done => {
        player.addEventListener(CustomEventType.FIRST_PLAYING, () => {
          done();
        });
        player.play();
      });

      it('should fire first playing only once', done => {
        let count = 0;

        player.addEventListener(CustomEventType.FIRST_PLAYING, () => {
          count++;

          player.addEventListener(Html5EventType.PLAYING, () => {
            if (count === 1) {
              done();
            } else {
              done(new Error('FIRST_PLAYING triggered more then once'));
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

      it('should fire abr mode changed for progressive playback', done => {
        player = new Player(config);
        player.setSources(sourcesConfig.Mp4);
        playerContainer.appendChild(player.getView());
        player.addEventListener(CustomEventType.ABR_MODE_CHANGED, event => {
          event.payload.mode.should.equal('manual');
          done();
        });
        player.load();
      });

      it('should fire abr mode changed for adaptive playback', done => {
        player = new Player(config);
        player.setSources(sourcesConfig.Hls);
        playerContainer.appendChild(player.getView());
        player.addEventListener(CustomEventType.ABR_MODE_CHANGED, event => {
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

      it('should be paused', done => {
        let onPlaying = () => {
          player.removeEventListener(player.Event.PLAYING, onPlaying);
          player.addEventListener(player.Event.ENDED, () => {
            player.paused.should.be.true;
            done();
          });
          player.currentTime = player.duration - 1;
        };

        player = new Player(config);
        player.setSources(sourcesConfig.Mp4);
        playerContainer.appendChild(player.getView());
        player.addEventListener(player.Event.PLAYING, onPlaying);
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
      });

      afterEach(() => {
        player.destroy();
      });

      after(() => {
        removeVideoElementsFromTestPage();
        removeElement(targetId);
      });

      it('should fire change source started and change source ended', done => {
        let changeSourceStarted = false;
        player = new Player(config);
        player.setSources(sourcesConfig.Mp4);
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
          player.setSources(sourcesConfig.Mp4);
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

      it('should fire text style changed', done => {
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
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
      removeElement(targetId);
    });

    it('should switch player states during playback', done => {
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

    it('should create player without sources and set the sources later', done => {
      player = new Player();
      player.setSources(sourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());
      player.should.be.instanceOf(Player);
      player.configure(config);
      player.addEventListener(Html5EventType.PLAYING, function () {
        player.destroy();
        done();
      });
      player.addEventListener(Html5EventType.ERROR, function () {
        player.destroy();
        done(new Error('test fail'));
      });
      player.load();
      player.ready().then(() => {
        player.play();
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
        player.setSources(sourcesConfig.Mp4);
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
        player.setSources(sourcesConfig.Mp4);
        player.volume.should.equals(0);
        player.muted.should.be.true;
      });

      it('should load the previous playback config and initiate the new one on updating sources', function (done) {
        player = new Player({
          playback: {
            muted: true,
            volume: 0.5
          }
        });
        player.setSources(sourcesConfig.MultipleSources);
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
            player.setSources(newProgressiveConfig);
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
          playback: {
            muted: true,
            volume: 1
          }
        });
        player.setSources(sourcesConfig.MultipleSources);
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
          player.setSources(newProgressiveConfig);
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

    it('should set playbackRates', function () {
      config.playback.playbackRates = [18, 2, 3, 4, 20, 30, -19];
      player = new Player(config);
      player.setSources(sourcesConfig.MultipleSources);
      player._playbackRates.should.deep.equal(getConfigStructure().playback.playbackRates);
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
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());
      player.enableAdaptiveBitrate();
      player.isAdaptiveBitrateEnabled().should.be.false;
    });

    it('should return true for adaptive playback abr', function () {
      player = new Player(config);
      player.setSources(sourcesConfig.Hls);
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
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
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
      let sources = sourcesConfig.Mp4;
      sources.type = 'Live';
      player = new Player(config);
      player.setSources(sources);
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
      player = new Player(config);
      player.setSources(sourcesConfig.Live);
      playerContainer.appendChild(player.getView());
      player.isLive().should.be.false;
    });

    it('should return true for live', function (done) {
      player = new Player(config);
      player.setSources(sourcesConfig.Live);
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
      let sources = sourcesConfig.Live;
      sources.type = 'Vod';
      player = new Player(config);
      player.setSources(sources);
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
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
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
      let sources = sourcesConfig.Mp4;
      sources.dvr = true;
      player = new Player(config);
      player.setSources(sources);
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
      let sources = sourcesConfig.Live;
      sources.dvr = true;
      player = new Player(config);
      player.setSources(sources);
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
      let sources = sourcesConfig.Live;
      sources.dvr = false;
      player = new Player(config);
      player.setSources(sources);
      playerContainer.appendChild(player.getView());
      player.ready().then(() => {
        player.isDvr().should.be.false;
        done();
      });
      // if (player._engine) {
      //   player.load();
      // } else {
      //   done();
      // }
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

    it('should not seek to live edge in VOD', done => {
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());
      if (player._engine) {
        player.ready().then(() => {
          player.currentTime = 0;
          player.currentTime.should.not.equal(player.duration);
          player.seekToLiveEdge();
          player.currentTime.should.not.equal(player.duration);
          done();
        });
        player.load();
      } else {
        done();
      }
    });

    it('should seek to live edge', done => {
      player = new Player(config);
      player.setSources(sourcesConfig.Live);
      playerContainer.appendChild(player.getView());
      if (player._engine) {
        player.ready().then(() => {
          setTimeout(() => {
            player.currentTime = 0;
            player.currentTime.should.not.equal(player.duration);
            player.seekToLiveEdge();
            player.currentTime.should.equal(player.duration);
            done();
          }, 500);
        });
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
      player.setSources(sourcesConfig.Mp4);
      player.volume.should.equal(1);
    });

    it('should enable setting the volume via API', function () {
      player.setSources(sourcesConfig.Mp4);
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
      player.setSources(sourcesConfig.Mp4);
      player.volume.should.equal(0.9);
    });

    it('should cap volume values between 0 and 1(including)', function () {
      player.setSources(sourcesConfig.Mp4);
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
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
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
        done();
      });
      player.load();
    });

    it('should do nothing for non number given', function (done) {
      player.ready().then(() => {
        player.currentTime = true;
        player._engine.currentTime.should.equal(0);
        done();
      });
      player.load();
    });

    it('should set 0 for negative number given', function (done) {
      player.ready().then(() => {
        player.currentTime = -1;
        player._engine.currentTime.should.equal(0);
        done();
      });
      player.load();
    });

    it('should set duration -1 for duration given', function (done) {
      player.ready().then(() => {
        player.currentTime = player.duration;
        player._engine.currentTime.should.equal(player.duration - 0.1);
        done();
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
      sandbox = sinon.createSandbox();
      config = getConfigStructure();
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
      player.setSources(sourcesConfig.Mp4);
      let engineSpy = sandbox.spy(player._engine, 'destroy');
      let posterMgrSpy = sandbox.spy(player._posterManager, 'destroy');
      let eventMgrSpy = sandbox.spy(player._eventManager, 'destroy');
      let stateMgrSpy = sandbox.spy(player._stateManager, 'destroy');
      player.destroy();
      engineSpy.should.have.been.calledOnce;
      posterMgrSpy.should.have.been.calledOnce;
      eventMgrSpy.should.have.been.calledOnce;
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

    it('should dispatch a player destroyed event', function (done) {
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
      player.addEventListener(player.Event.PLAYER_DESTROY, () => {
        done();
      });
      player.destroy();
    });
  });

  describe('reset', function () {
    let sandbox, player, config;

    before(() => {
      createElement('DIV', targetId);
    });

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      config = getConfigStructure();
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
      player.setSources(sourcesConfig.Mp4);
      player._reset = false;
      let posterMgrSpy = sandbox.spy(player._posterManager, 'reset');
      let engineSpy = sandbox.spy(player._engine, 'reset');
      let eventMgrSpy = sandbox.spy(player._eventManager, 'removeAll');
      let stateMgrSpy = sandbox.spy(player._stateManager, 'reset');
      let _updateTextDisplay = sandbox.spy(player, '_updateTextDisplay');
      player.reset();
      player.paused.should.be.true;
      posterMgrSpy.should.have.been.calledOnce;
      eventMgrSpy.should.have.been.calledOnce;
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
      sandbox = sinon.createSandbox();
      config = getConfigStructure();
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
      player.setSources(sourcesConfig.Mp4);
      spy.should.have.been.calledOnce;
    });

    it('should call restore for the same engine', function () {
      let createSpy = sandbox.spy(Html5, 'createEngine');
      let restoreSpy = sandbox.spy(Html5.prototype, 'restore');
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
      createSpy.should.have.been.calledOnce;
      restoreSpy.should.have.callCount(0);
      player.setSources(sourcesConfig.Mp4);
      createSpy.should.have.been.calledOnce;
      restoreSpy.should.have.been.calledOnce;
    });
  });

  describe('_getLanguage', function () {
    let config, player, sandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      config = getConfigStructure();
      player = new Player(config);
    });

    afterEach(() => {
      sandbox.restore();
      player.destroy();
    });

    it('should return the configured language', () => {
      let configuredLanguage = 'ita';
      player._getLanguage(configuredLanguage, new TextTrack({}), 'text').should.equals(configuredLanguage);
    });

    it('should return the locale language', () => {
      let configuredLanguage = 'auto';
      let engTrackOptions = {
        active: true,
        label: 'Eng',
        language: 'eng',
        kind: 'subtitles'
      };
      let engTrack = new TextTrack(engTrackOptions);

      sandbox.stub(player, '_getTracksByType').callsFake(() => {
        return [engTrack];
      });

      let resultLang = player._getLanguage(configuredLanguage, engTrack, 'text');
      Track.langComparer(resultLang, Locale.language).should.be.true;
    });

    it('should return the default text track language', () => {
      let configuredLanguage = 'auto';
      let gerTrackOptions = {
        active: true,
        label: 'Germany',
        language: 'ger',
        kind: 'subtitles'
      };
      let gerTrack = new TextTrack(gerTrackOptions);

      sandbox.stub(player, '_getTracksByType').callsFake(() => {
        return [gerTrack];
      });

      player._getLanguage(configuredLanguage, gerTrack, 'text').should.equals(gerTrack.language);
    });

    it('should return the first track language ', () => {
      let configuredLanguage = 'auto';
      let gerTrackOptions = {
        active: true,
        label: 'Germany',
        language: 'ger',
        kind: 'subtitles'
      };
      let gerTrack = new TextTrack(gerTrackOptions);

      sandbox.stub(player, '_getTracksByType').callsFake(() => {
        return [gerTrack];
      });

      player._getLanguage(configuredLanguage, null, 'text').should.equals(gerTrack.language);
    });

    it('should return the first track language even if off track sent as default ', () => {
      let configuredLanguage = 'auto';
      let gerTrackOptions = {
        active: true,
        label: 'Germany',
        language: 'ger',
        kind: 'subtitles'
      };
      let offTrackOptions = {
        active: true,
        label: 'Off',
        language: 'off'
      };
      let gerTrack = new TextTrack(gerTrackOptions);
      let offTrack = new TextTrack(offTrackOptions);

      sandbox.stub(player, '_getTracksByType').callsFake(() => {
        return [gerTrack, offTrack];
      });

      player._getLanguage(configuredLanguage, offTrack, 'text').should.equals(gerTrack.language);
    });
  });

  describe('_resetTextCuesAndReposition', function () {
    let config, player, sandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      config = getConfigStructure();
      player = new Player(config);
    });

    afterEach(() => {
      sandbox.restore();
      player.destroy();
    });

    it('should reset the active text cues', () => {
      player._activeTextCues[0] = {};
      player._updateTextDisplay = () => {};
      player._engine = {
        resetAllCues: function () {},
        destroy: function () {}
      };
      player._resetTextCuesAndReposition();
      let cue = player._activeTextCues[0];
      cue.hasBeenReset.should.equals(true);
    });
  });

  describe('on resize event', function () {
    let config, player, sandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      config = getConfigStructure();
      player = new Player(config);
      player.setSources(sourcesConfig.Mp4);
    });

    afterEach(() => {
      sandbox.restore();
      player.destroy();
    });

    it('should call _resetTextCuesAndReposition function', done => {
      let spy = sandbox.spy(player, '_resetTextCuesAndReposition');
      player._resizeWatcher._triggerResize();
      setTimeout(() => {
        spy.should.have.been.calledOnce;
        done();
      }, 500);
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
      const player = new Player({log: {level: 'DEBUG'}});
      let currentLogLevel = player.getLogLevel();
      currentLogLevel.should.equal(player.LogLevel.DEBUG);
    });
  });

  describe('setCapabilities', () => {
    let initialOrigCapabilities;

    beforeEach(done => {
      Player.runCapabilities();
      Player.getCapabilities().then(capabilities => {
        initialOrigCapabilities = capabilities;
        done();
      });
    });

    afterEach(() => {
      Html5AutoPlayCapability._capabilities = {};
    });

    it('should not change the original capabilities by reference', done => {
      Player.getCapabilities().then(c1 => {
        c1.should.deep.equal(initialOrigCapabilities);
        c1.html5.autoplay = 'some value';
        Player.getCapabilities().then(c2 => {
          c2.html5.autoplay.should.equal(initialOrigCapabilities.html5.autoplay);
          done();
        });
      });
    });

    it('should set custom capabilities successfully', done => {
      let newCapabilities = {
        autoplay: true,
        mutedAutoPlay: false,
        isSupported: false,
        fakeAttribute: true
      };
      const existingCapabilities = (({autoplay, mutedAutoPlay}) => ({autoplay, mutedAutoPlay}))(newCapabilities);
      Player.setCapabilities('html5', newCapabilities);
      Player.getCapabilities().then(c2 => {
        try {
          c2.html5.should.deep.equal(existingCapabilities);
          done();
        } catch (err) {
          done(err);
        }
      });
    });

    it('should support only correct type', done => {
      let newCapabilities = {
        autoplay: 1,
        mutedAutoPlay: 2,
        isSupported: false,
        fakeAttribute: true
      };
      Player.setCapabilities('html5', newCapabilities);
      Player.getCapabilities().then(c2 => {
        try {
          c2.should.deep.equal(initialOrigCapabilities);
          done();
        } catch (err) {
          done(err);
        }
      });
    });

    it('should set custom capabilities successfully after getCapabilities() call', done => {
      let newCapabilities = {
        autoplay: false,
        mutedAutoPlay: false,
        isSupported: 5
      };
      const existingCapabilities = (({autoplay, mutedAutoPlay}) => ({autoplay, mutedAutoPlay}))(newCapabilities);
      Player.getCapabilities().then(c1 => {
        c1.should.deep.equal(initialOrigCapabilities);
        Player.setCapabilities('html5', newCapabilities);
        Player.getCapabilities()
          .then(c2 => {
            try {
              c2.html5.should.deep.equal(existingCapabilities);
              done();
            } catch (err) {
              done(err);
            }
          })
          .catch(err => done(err));
      });
    });

    it('should set custom capabilities after runCapabilities() successfully', done => {
      let newCapabilities = {
        autoplay: false,
        mutedAutoPlay: false
      };
      Player.runCapabilities();
      Player.getCapabilities().then(c1 => {
        try {
          c1.html5.should.deep.not.equal(newCapabilities);
        } catch (err) {
          done(err);
        }
        Player.setCapabilities('html5', newCapabilities);
        Player.getCapabilities().then(c2 => {
          try {
            c2.html5.should.deep.equal(newCapabilities);
            done();
          } catch (err) {
            done(err);
          }
        });
      });
    });

    it('should check for mutedAutoPlay possibility if autoplay set to false', done => {
      let newCapabilities = {
        autoplay: false
      };
      Player.setCapabilities('html5', newCapabilities);
      Player.getCapabilities().then(c2 => {
        try {
          c2.html5.autoplay.should.equal(newCapabilities.autoplay);
          c2.html5.mutedAutoPlay.should.not.equal(newCapabilities.mutedAutoPlay);
          done();
        } catch (err) {
          done(err);
        }
      });
    });

    it('should check for autoPlay possibility if mutedAutoPlay set', done => {
      let newCapabilities = {
        mutedAutoPlay: true
      };
      Player.setCapabilities('html5', newCapabilities);
      Player.getCapabilities().then(c2 => {
        try {
          c2.html5.autoplay.should.not.equal(newCapabilities.autoplay);
          c2.html5.mutedAutoPlay.should.equal(newCapabilities.mutedAutoPlay);
          done();
        } catch (err) {
          done(err);
        }
      });
    });
  });

  describe('_maybeSetTracksLabels', function () {
    let config, player, playerContainer;

    before(() => {
      playerContainer = createElement('DIV', targetId);
      config = getConfigStructure();
    });

    beforeEach(() => {
      player = new Player(config);
      player.setSources(sourcesConfig.MultipleSources);
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
        return 'audio_label';
      };
      const captionsLabelCallback = () => {
        return 'captions_label';
      };
      const qualitiesLabelCallback = () => {
        return 'qualities_label';
      };
      const config = getConfigStructure();
      config['customLabels'] = {
        [LabelOptions.QUALITIES]: qualitiesLabelCallback,
        [LabelOptions.AUDIO]: audioLabelCallback,
        [LabelOptions.CAPTIONS]: captionsLabelCallback
      };
      return config;
    };

    it("should load with callback label function, and change the label of video track to 'qualities_label'", () => {
      player.configure(getConfigStructureWithLabelCallback());
      player._tracks = [new VideoTrack()];
      player._maybeSetTracksLabels();
      player._tracks[0].label.should.equal('qualities_label');
    });

    it("should load with callback label function, and change the label of audio track to 'audio_label'", () => {
      player.configure(getConfigStructureWithLabelCallback());
      player._tracks = [new AudioTrack()];
      player._maybeSetTracksLabels();
      player._tracks[0].label.should.equal('audio_label');
    });

    it("should load with callback label function, and change the label of text track to 'captions_label'", () => {
      player.configure(getConfigStructureWithLabelCallback());
      player._tracks = [new TextTrack()];
      player._maybeSetTracksLabels();
      player._tracks[0].label.should.equal('captions_label');
    });

    it("should load with all callback label function, and change the label respectively to the track type'", () => {
      player.configure(getConfigStructureWithLabelCallback());
      player._tracks = [new TextTrack(), new VideoTrack(), new AudioTrack()];
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
