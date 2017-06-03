import {playkit} from '../../src/playkit'
import Player from '../../src/player'
import PlayerStates from '../../src/state/state-types'
import PlayerEvents from '../../src/event/events'
import sourcesConfig from './configs/sources.json'
import Env from '../../src/utils/env'
//import pluginsConfig from './configs/plugins.json'

describe('playkit:playkit', function () {
  this.timeout(10000);

  it('should play mp4 stream', (done) => {
    let config = sourcesConfig.mp4_none_hls_dash;
    let player = playkit(config);
    let video = document.getElementsByTagName("video")[0];
    video.onplaying = function () {
      player.destroy();
      done();
    };
    video.addEventListener('error', function () {
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
    let video = document.getElementsByTagName("video")[0];
    video.onplaying = function () {
      player.destroy();
      done();
    };
    video.addEventListener('error', function () {
      player.destroy();
      should.fail();
    });
    player.load();
    player.play();
  });

  it('should switch player states during playback', (done) => {
    let config = sourcesConfig.mp4_none_hls_dash;
    let player = playkit(config);
    let video = document.getElementsByTagName("video")[0];

    function onLoadStart() {
      player.removeEventListener(PlayerEvents.LOAD_START, onLoadStart);
      player._stateManager.currentState.type.should.equal(PlayerStates.LOADING);
    }

    function onLoadedMetadata() {
      player.removeEventListener(PlayerEvents.LOADED_METADATA, onLoadedMetadata);
      if (player.config.autoPlay) {
        player._stateManager.currentState.type.should.equal(PlayerStates.PLAYING);
      } else {
        player._stateManager.currentState.type.should.equal(PlayerStates.PAUSED);
      }
    }

    function onPlaying() {
      player.removeEventListener(PlayerEvents.PLAYING, onPlaying);
      player._stateManager.currentState.type.should.equal(PlayerStates.PLAYING);
      setTimeout(() => {
        player.pause();
      }, 1000);
    }

    function onPause() {
      player.removeEventListener(PlayerEvents.PAUSE, onPause);
      player._stateManager.currentState.type.should.equal(PlayerStates.PAUSED);
      player.currentTime = player.duration - 1;
      player.play();
    }

    function onEnded() {
      player.removeEventListener(PlayerEvents.ENDED, onEnded);
      player._stateManager.currentState.type.should.equal(PlayerStates.IDLE);
      player.destroy();
      done();
    }

    player._stateManager.currentState.type.should.equal(PlayerStates.IDLE);

    player.addEventListener(PlayerEvents.LOAD_START, onLoadStart);
    player.addEventListener(PlayerEvents.LOADED_METADATA, onLoadedMetadata);
    player.addEventListener(PlayerEvents.PLAYING, onPlaying);
    player.addEventListener(PlayerEvents.PAUSE, onPause);
    player.addEventListener(PlayerEvents.ENDED, onEnded);

    player.load();
    player.play();
  });
});
