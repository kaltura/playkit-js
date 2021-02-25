import {FakeDecoratorProvider, FakeDecoratorProviderActive, FakeHTML5Engine} from './test-engine-decorator-providers';
import {EngineDecorator} from '../../../src/engines/engine-decorator';
import Player from '../../../src/player';
import {createElement, getConfigStructure} from '../utils/test-utils';

describe('EngineDecorator', () => {
  let engine;
  beforeEach(() => {
    engine = new FakeHTML5Engine();
  });
  afterEach(() => {
    engine = null;
    EngineDecorator._decoratorProviders = [];
  });

  describe('EngineDecorator:register', () => {
    it('should not register decorator twice and keep the last one', () => {
      const first = new FakeDecoratorProvider();
      EngineDecorator.register(first);
      EngineDecorator._decoratorProviders.length.should.equal(1);
      const second = new FakeDecoratorProvider();
      EngineDecorator.register(second);
      EngineDecorator._decoratorProviders.length.should.equal(1);
      EngineDecorator._decoratorProviders[0].should.equal(second);
    });
  });

  it('should decorator use the engine for non implemented methods on active decorator', () => {
    EngineDecorator.register(new FakeDecoratorProviderActive());
    const engineDecorator = new EngineDecorator(engine);
    engineDecorator.isAdaptiveBitrateEnabled().should.be.true;
  });

  it('should decorator use the engine for implemented methods on non active decorator', () => {
    EngineDecorator.register(new FakeDecoratorProvider());
    const engineDecorator = new EngineDecorator(engine);
    engineDecorator.isLive().should.be.false;
  });

  it('should decorator use the decorator for implemented methods on active decorator', () => {
    let engineDecorator;
    EngineDecorator.register(new FakeDecoratorProviderActive());
    engineDecorator = new EngineDecorator(engine);
    engineDecorator.isLive().should.be.true;

    EngineDecorator._decoratorProviders = [];
    EngineDecorator.register(new FakeDecoratorProvider());
    engineDecorator = new EngineDecorator(engine);
    engineDecorator.isLive().should.be.false;
  });

  it('should decorator providers should destroy on destroy', () => {
    const targetId = 'player-placeholder_engine-decorator.spec';
    const playerContainer = createElement('DIV', targetId);

    EngineDecorator.register(new FakeDecoratorProviderActive());
    EngineDecorator.register(new FakeDecoratorProvider());
    EngineDecorator._decoratorProviders.length.should.equal(2);
    const player = new Player(getConfigStructure());
    playerContainer.appendChild(player.getView());

    player.destroy();
    EngineDecorator._decoratorProviders.length.should.equal(0);
  });

  it.skip('should decorator use the decorator instance as context of the function', done => {
    const decoratorProvider = new FakeDecoratorProviderActive();
    EngineDecorator.register(decoratorProvider);
    const engineDecorator = new EngineDecorator(engine);
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
    EngineDecorator.register(new FakeDecoratorProvider());
    const engineDecorator = new EngineDecorator(engine);
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
