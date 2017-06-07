import {playkit} from '../../src/playkit'
import Player from '../../src/player'
import PlayerStates from '../../src/state/state-types'
import * as PlayerEvents from '../../src/event/events'
import sourcesConfig from './configs/sources.json'
import {removeVideoElementsFromTestPage} from './utils/test-utils'

describe('playkit:playkit', function () {

  this.timeout(10000);

  after(() => {
    removeVideoElementsFromTestPage();
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
    player.load().then(() => {
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
