import {createElement, removeElement} from '../../utils/test-utils';
import Player from '../../../src/player';
import {Object as PKObject} from '../../../src/utils/util';
import SourcesConfig from '../../configs/sources.json';
import {EngineProvider} from '../../../src/engines/engine-provider';
import Html5 from '../../../src/engines/html5/html5';

const targetId = 'player-placeholder_inBrowserFullscreen.spec';
const sourcesConfig = PKObject.copyDeep(SourcesConfig);

describe('check inBrowserFullscreen config', function () {
  let config, player, playerContainer, sandbox;

  before(() => {
    EngineProvider.destroy();
    EngineProvider.register(Html5.id, Html5);
    playerContainer = createElement('DIV', targetId);
    config = {
      playback: {
        inBrowserFullscreen: true,
        playsinline: true
      }
    };
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
    removeElement(targetId);
  });

  it('should switch correctly to fullscreen in iOS between native and inBrowserFullscreen config', () => {
    sandbox.stub(player._fullscreenController, '_isIOSFullscreen').callsFake(() => {
      return false;
    });
    player.env.os.name = 'iOS';
    player.enterFullscreen();
    player.isFullscreen().should.be.true;
    player._fullscreenController._isInBrowserFullscreen.should.be.true;
    player.configure({
      playback: {
        inBrowserFullscreen: false,
        playsinline: false
      }
    });
    player.isFullscreen().should.be.true;
    player.enterFullscreen();
    player.isFullscreen().should.be.true;
    player.exitFullscreen();
    player.isFullscreen().should.be.false;
    player.enterFullscreen();
    sandbox.restore();
    sandbox.stub(player._fullscreenController, '_isIOSFullscreen').callsFake(() => {
      return true;
    });
    player.isFullscreen().should.be.true;
  });

  it('should change fullscreen mode correctly', () => {
    player.configure({
      playback: {
        inBrowserFullscreen: false,
        playsinline: false
      }
    });
    sandbox.stub(player._fullscreenController, '_isNativeDocumentFullscreen').callsFake(() => {
      return true;
    });
    // indicator for specific player if it's in fullscreen or another element in fullscreen
    player._fullscreenController._isElementInFullscreen = true;
    player.isFullscreen().should.be.true;

    // indicator for specific player if it's in fullscreen or another element in fullscreen
    player._fullscreenController._isElementInFullscreen = false;
    player.isFullscreen().should.be.false;

    sandbox.restore();
    sandbox.stub(player._fullscreenController, '_isNativeDocumentFullscreen').callsFake(() => {
      return false;
    });

    player._fullscreenController._isElementInFullscreen = false;
    player.isFullscreen().should.be.false;
  });
});
