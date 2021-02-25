import {FakeDecoratorProvider, FakeDecoratorProviderActive, FakeDecoratorProviderNotActive, FakeHTML5Engine} from './test-engine-decorator-providers';
import {EngineDecorator} from '../../../src/engines/engine-decorator';

describe('EngineDecorator', () => {
  let engine;
  beforeEach(() => {
    engine = new FakeHTML5Engine();
  });
  afterEach(() => {
    engine = null;
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

  it('should remove the decoratorProviders and instances on destroy', () => {
    EngineDecorator.register(new FakeDecoratorProvider());
    const engineDecorator = new EngineDecorator(engine);
    EngineDecorator._decoratorProviders.length.should.equal(1);
    engineDecorator.destroy();
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
      } finally {
        engineDecorator.destroy();
      }
    });
  });

  it('should decorator use the engine for non implemented methods on active decorator', () => {
    EngineDecorator.register(new FakeDecoratorProviderActive());
    const engineDecorator = new EngineDecorator(engine);
    engineDecorator.isAdaptiveBitrateEnabled().should.be.true;
    engineDecorator.destroy();
  });

  it.skip('should decorator use the engine when decorator not active', done => {
    EngineDecorator.register(new FakeDecoratorProviderNotActive());
    const engineDecorator = new EngineDecorator(engine);
    const loadPromise = engineDecorator.load();
    loadPromise.then(context => {
      try {
        (context === engine).should.be.true;
        done();
      } catch (e) {
        done(e);
      } finally {
        engineDecorator.destroy();
      }
    });
  });
});
