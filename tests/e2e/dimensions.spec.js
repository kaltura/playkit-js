import {createElement, getConfigStructure, removeElement, removeVideoElementsFromTestPage} from '../utils/test-utils';
import Player from '../../src/player';
import {Object as PKObject} from '../../src/utils';
import SourcesConfig from '../configs/sources.json';

const targetId = 'player-placeholder_dimensions.spec';
const sourcesConfig = PKObject.copyDeep(SourcesConfig);

describe('Dimensions API ', function () {
  const origConfig = getConfigStructure(targetId);
  const playerContainer = createElement('DIV', targetId);
  let player, config;

  before(() => {
    origConfig.sources = sourcesConfig.MultipleSources;
  });

  const createPlayer = config => {
    player = new Player(config);
    player.setSources(origConfig.sources);
    playerContainer.appendChild(player.getView());
  };

  beforeEach(() => {
    config = PKObject.copyDeep(origConfig);
  });

  afterEach(() => {
    player.destroy();
  });

  after(() => {
    removeVideoElementsFromTestPage();
    removeElement(targetId);
  });

  it('should calc height to match configure ratio', () => {
    config.dimensions = {
      ratio: '4:3',
      width: 100
    };
    createPlayer(config);
    player.dimensions.should.deep.equals({width: 100, height: 75});
  });

  it('should calc width to match configure ratio', () => {
    config.dimensions = {
      ratio: '4:3',
      height: 75
    };
    createPlayer(config);
    player.dimensions.should.deep.equals({width: 100, height: 75});
  });

  it('should calc width and override height to match configure ratio', () => {
    config.dimensions = {
      ratio: '4:3',
      width: 100,
      height: 100
    };
    createPlayer(config);
    player.dimensions.should.deep.equals({width: 100, height: 75});
  });

  it('should set the configure width and height', () => {
    config.dimensions = {
      width: 100,
      height: 100
    };
    createPlayer(config);
    player.dimensions.should.deep.equals({width: 100, height: 100});
  });

  it('should dynamically change the width and height', () => {
    config.dimensions = {
      width: 100,
      height: 100
    };
    createPlayer(config);
    player.dimensions.should.deep.equals({width: 100, height: 100});
    player.dimensions = {height: 50, width: 70};
    player.dimensions.should.deep.equals({height: 50, width: 70});
    player.dimensions = {height: 60};
    player.dimensions.should.deep.equals({height: 60, width: 70});
    player.dimensions = {width: 200};
    player.dimensions.should.deep.equals({height: 60, width: 200});
  });

  it('should reset width and height', done => {
    config.dimensions = {
      width: 100,
      height: 100
    };
    createPlayer(config);
    player.play();
    player.ready().then(() => {
      player.dimensions.should.deep.equals({width: 100, height: 100});
      player.dimensions = {};
      player.dimensions.width.should.equals(window.innerWidth);
      player.dimensions = {width: 90, height: 80};
      player.dimensions.should.deep.equals({width: 90, height: 80});
      player.dimensions = null;
      player.dimensions.width.should.equals(window.innerWidth);
      done();
    });
  });

  it('should change ratio dynamically', () => {
    config.dimensions = {
      ratio: '4:3',
      width: 100
    };
    createPlayer(config);
    player.dimensions.should.deep.equals({width: 100, height: 75});
    player.dimensions = {ratio: '9:2'};
    player.dimensions.should.deep.equals({width: 100, height: 22});
    player.dimensions = {height: 100};
    player.dimensions.should.deep.equals({width: 450, height: 100});
  });

  it('should reset ratio dynamically', () => {
    config.dimensions = {
      ratio: '4:3',
      width: 100
    };
    createPlayer(config);
    player.dimensions.should.deep.equals({width: 100, height: 75});
    player.dimensions = {ratio: ''};
    player.dimensions.should.deep.equals({width: 100, height: 75});
    player.dimensions = {height: 100};
    player.dimensions.should.deep.equals({width: 100, height: 100});
    player.dimensions = {ratio: '4:3'};
    player.dimensions.should.deep.equals({width: 100, height: 75});
    player.dimensions = {ratio: null};
    player.dimensions.should.deep.equals({width: 100, height: 75});
    player.dimensions = {height: 100};
    player.dimensions.should.deep.equals({width: 100, height: 100});
  });
});
