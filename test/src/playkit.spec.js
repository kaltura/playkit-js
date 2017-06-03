import {playkit} from '../../src/playkit'
import Player from '../../src/player'
import PlayerStates from '../../src/state/state-types'
import sourcesConfig from './configs/sources.json'
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

    player._stateManager.currentState.type.should.equal(PlayerStates.IDLE);

    video.onloadstart = function () {
      player._stateManager.currentState.type.should.equal(PlayerStates.LOADING);
    };

    video.onloadedmetadata = function () {
      if (player.config.autoPlay) {
        player._stateManager.currentState.type.should.equal(PlayerStates.PLAYING);
      } else {
        player._stateManager.currentState.type.should.equal(PlayerStates.PAUSED);
      }
    };

    video.onplaying = function () {
      player._stateManager.currentState.type.should.equal(PlayerStates.PLAYING);
    };

    video.onpause = function () {
      player._stateManager.currentState.type.should.equal(PlayerStates.PAUSED);
    };

    video.onended = function () {
      player._stateManager.currentState.type.should.equal(PlayerStates.IDLE);
      player._stateManager.history.should.have.lengthOf(5);
      player._stateManager.history[0].type.should.equal(PlayerStates.IDLE);
      player._stateManager.history[1].type.should.equal(PlayerStates.LOADING);
      player._stateManager.history[2].type.should.equal(PlayerStates.PAUSED);
      player._stateManager.history[3].type.should.equal(PlayerStates.PLAYING);
      player._stateManager.history[4].type.should.equal(PlayerStates.PAUSED);
      player.destroy();
      done();
    };

    setTimeout(() => {
      player.play();
      setTimeout(() => {
        player.pause();
        player.currentTime = player.duration;
      }, 500);
    }, 1000);
  });
});
