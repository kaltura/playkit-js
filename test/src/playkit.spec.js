import {playkit} from '../../src/playkit'
import PlayerStates from '../../src/state/state-types'
import sourcesConfig from './configs/sources.json'

describe('playkit:playkit', function () {

  this.timeout(10000);

  let player;
  let config = sourcesConfig.mp4_none_hls_dash;

  beforeEach(function () {
    player = playkit(config);
  });

  afterEach(function () {
    player.destroy();
  });

  it('should play mp4 stream', (done) => {
    player._engine.getVideoElement().addEventListener('playing', () => {
      done();
    });
    player.load().then(() => {
      player.play();
    });
  });

  it('should switch player states during playback', (done) => {
    let config = sourcesConfig.mp4_none_hls_dash;
    let player = playkit(config);
    let video = player._engine.getVideoElement();

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
