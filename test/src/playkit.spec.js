import {playkit} from '../../src/playkit'
import Player from '../../src/player'
import PlayerStates from '../../src/state/state-types'
import * as PlayerEvents from '../../src/event/events'
import sourcesConfig from './configs/sources.json'
import * as TestUtils from './utils/test-utils'
import VideoTrack from '../../src/track/video-track'
import AudioTrack from '../../src/track/audio-track'
import TextTrack from '../../src/track/text-track'

describe.skip('[debugging and testing manually]', () => {
  let player, track1, track2, video, tracks, videoTracks, textTracks, audioTracks;
  let config = sourcesConfig.mp4_none_hls_dash;

  before(() => {
    track1 = document.createElement("track");
    track2 = document.createElement("track");
    track1.src = '/base/src/assets/en.vtt';
    track1.kind = 'subtitles';
    track1.label = 'English';
    track1.default = true;
    track2.src = '/base/src/assets/he.vtt';
    track2.kind = 'captions';
    track2.srclang = 'he';
  });

  beforeEach(() => {
    config = sourcesConfig.mp4_none_hls_dash;
    player = new Player();
  });

  /**
   * @function displayTracksOnScreen
   * @return {void}
   */
  function displayTracksOnScreen() {
    tracks = player.getTracks() || [];
    videoTracks = [];
    textTracks = [];
    audioTracks = [];
    tracks.filter((track) => {
      if (track instanceof AudioTrack) {
        audioTracks.push(track);
      } else if (track instanceof VideoTrack) {
        videoTracks.push(track);
      } else if (track instanceof TextTrack) {
        textTracks.push(track);
      }
    });
    TestUtils.createVideoTrackButtons(player, videoTracks);
    TestUtils.createAudioTrackButtons(player, audioTracks);
    TestUtils.createTextTrackButtons(player, textTracks);
  }

  it('should play mp4 stream', () => {
    player.ready().then(() => {
      displayTracksOnScreen();
    });
    player.configure(config);
    video = player._engine.getVideoElement();
    video.appendChild(track1);
    video.appendChild(track2);
    player.load();
    window.player = player;
  });
});

describe('playkit:playkit', function () {
  this.timeout(10000);

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should play mp4 stream', (done) => {
    let config = sourcesConfig.mp4_none_hls_dash;
    let player = playkit(config);
    player.addEventListener(PlayerEvents.HTML5_EVENTS.PLAYING, function () {
      player.destroy();
      done();
    });
    player.addEventListener(PlayerEvents.HTML5_EVENTS.ERROR, function () {
      player.destroy();
      should.fail();
    });
    player.load();
    player.play();
  });

  it('should create player without sources and set the sources later', (done) => {
    let config = sourcesConfig.mp4_none_hls_dash;
    let player = playkit();
    player.should.be.instanceOf(Player);
    player.configure(config);
    player.addEventListener(PlayerEvents.HTML5_EVENTS.PLAYING, function () {
      player.destroy();
      done();
    });
    player.addEventListener(PlayerEvents.HTML5_EVENTS.ERROR, function () {
      player.destroy();
      should.fail();
    });
    player.load();
    player.ready().then(() => {
      player.play();
    });
  });

  it('should switch player states during playback', (done) => {
    let config = sourcesConfig.mp4_none_hls_dash;
    let player = playkit(config);

    /**
     * onLoadStart handler
     * @returns {void}
     */
    function onLoadStart() {
      player.removeEventListener(PlayerEvents.HTML5_EVENTS.LOAD_START, onLoadStart);
      player._stateManager.currentState.type.should.equal(PlayerStates.LOADING);
    }

    /**
     * onLoadedMetadata handler
     * @returns {void}
     */
    function onLoadedMetadata() {
      player.removeEventListener(PlayerEvents.HTML5_EVENTS.LOADED_METADATA, onLoadedMetadata);
      if (player.config.autoPlay) {
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
      player.removeEventListener(PlayerEvents.HTML5_EVENTS.PLAYING, onPlaying);
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
      player.removeEventListener(PlayerEvents.HTML5_EVENTS.PAUSE, onPause);
      player._stateManager.currentState.type.should.equal(PlayerStates.PAUSED);
      player.currentTime = player.duration - 1;
      player.play();
    }

    /**
     * onEnded handler
     * @returns {void}
     */
    function onEnded() {
      player.removeEventListener(PlayerEvents.HTML5_EVENTS.ENDED, onEnded);
      player._stateManager.currentState.type.should.equal(PlayerStates.IDLE);
      player.destroy();
      done();
    }

    player._stateManager.currentState.type.should.equal(PlayerStates.IDLE);
    player.addEventListener(PlayerEvents.HTML5_EVENTS.LOAD_START, onLoadStart);
    player.addEventListener(PlayerEvents.HTML5_EVENTS.LOADED_METADATA, onLoadedMetadata);
    player.addEventListener(PlayerEvents.HTML5_EVENTS.PLAYING, onPlaying);
    player.addEventListener(PlayerEvents.HTML5_EVENTS.PAUSE, onPause);
    player.addEventListener(PlayerEvents.HTML5_EVENTS.ENDED, onEnded);
    player.load();
    player.play();
  });
});
