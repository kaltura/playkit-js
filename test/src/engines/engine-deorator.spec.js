import {FakeDecoratorProvider, FakeDecoratorProviderActive, FakeHTML5Engine} from './test-engine-decorator-providers';
import {EngineDecorator} from '../../../src/engines/engine-decorator';
import Player from '../../../src/player';
import {createElement, getConfigStructure} from '../utils/test-utils';
import {EngineDecoratorManager} from '../../../src/engines/engine-decorator-manager';

describe('EngineDecorator', () => {
  let engine;
  beforeEach(() => {
    engine = new FakeHTML5Engine();
  });
  afterEach(() => {
    engine = null;
  });

  it('should decorator be able to register once for same plugin name', () => {
    const decoratorManager = new EngineDecoratorManager();
    decoratorManager.register(FakeDecoratorProviderActive);
    decoratorManager.register(FakeDecoratorProviderActive);
    decoratorManager.register(FakeDecoratorProviderActive);
    decoratorManager.createDecorators(null, null).length.should.equal(1);
  });

  it('should decorator use the engine for non implemented methods on active decorator', () => {
    const decoratorManager = new EngineDecoratorManager();
    decoratorManager.register(FakeDecoratorProviderActive);
    const engineDecorator = new EngineDecorator(engine, decoratorManager);
    engineDecorator.isAdaptiveBitrateEnabled().should.be.true;
  });

  it('should decorator use the engine for implemented methods on non active decorator', () => {
    const decoratorManager = new EngineDecoratorManager();
    decoratorManager.register(FakeDecoratorProvider);
    const engineDecorator = new EngineDecorator(engine, decoratorManager);
    engineDecorator.isLive().should.be.false;
  });

  it('should decorator use the decorator for implemented methods on active decorator', () => {
    let engineDecorator, decoratorManager;
    decoratorManager = new EngineDecoratorManager();
    decoratorManager.register(FakeDecoratorProviderActive);
    engineDecorator = new EngineDecorator(engine, decoratorManager);
    engineDecorator.isLive().should.be.true;

    decoratorManager = new EngineDecoratorManager();
    decoratorManager.register(FakeDecoratorProvider);
    engineDecorator = new EngineDecorator(engine, decoratorManager);
    engineDecorator.isLive().should.be.false;
  });

  it('should decorator providers should destroy on destroy', () => {
    const targetId = 'player-placeholder_engine-decorator.spec';
    const playerContainer = createElement('DIV', targetId);

    const player = new Player(getConfigStructure());
    player.registerEngineDecoratorProvider(FakeDecoratorProviderActive);
    player.registerEngineDecoratorProvider(FakeDecoratorProvider);
    playerContainer.appendChild(player.getView());

    player.destroy();
    player._engineDecoratorManager.createDecorators(null, null).length.should.equal(0);
  });

  it.skip('should decorator use the decorator instance as context of the function', done => {
    const decoratorManager = new EngineDecoratorManager();
    const decoratorProvider = FakeDecoratorProviderActive;
    decoratorManager.register(decoratorProvider);
    const engineDecorator = new EngineDecorator(engine, decoratorManager);
    const loadPromise = engineDecorator.load();
    loadPromise.then(context => {
      try {
        (context === decoratorProvider.getEngineDecorator()).should.be.true;
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it.skip('should decorator use the engine when decorator not active', done => {
    const decoratorManager = new EngineDecoratorManager();
    decoratorManager.register(FakeDecoratorProvider);
    const engineDecorator = new EngineDecorator(engine, decoratorManager);
    const loadPromise = engineDecorator.load();
    loadPromise.then(context => {
      try {
        (context === engine).should.be.true;
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
