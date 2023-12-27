import {EngineProvider} from '../../../src/engines/engine-provider';
import {FakeFLASHEngine, FakeHTML5Engine, FakeSLEngine} from './test-engines';
import Html5 from '../../../src/engines/html5/html5';

describe('EngineProvider:register', () => {
  afterEach(() => {
    EngineProvider.destroy();
  });

  after(() => {
    EngineProvider.destroy();
    EngineProvider.register(Html5.id, Html5);
  });

  it('should register Engine', () => {
    Object.keys(EngineProvider.getEngines()).length.should.equal(1);
    EngineProvider.register(FakeFLASHEngine.id, FakeFLASHEngine);
    EngineProvider.getEngines().length.should.equal(2);
    EngineProvider.getEngines()[1].id.should.equal('Flash');
  });

  it('should not register Engine twice', () => {
    Object.keys(EngineProvider._engineProviders).length.should.equal(0);
    EngineProvider.register(FakeFLASHEngine.id, FakeFLASHEngine);
    EngineProvider.register(FakeFLASHEngine.id, FakeFLASHEngine);
    Object.keys(EngineProvider._engineProviders).length.should.equal(1);
    Object.keys(EngineProvider._engineProviders)[0].should.equal('Flash');
  });

  it('should register Engine and Engine2', () => {
    Object.keys(EngineProvider._engineProviders).length.should.equal(0);
    EngineProvider.register(FakeHTML5Engine.id, FakeHTML5Engine);
    EngineProvider.register(FakeFLASHEngine.id, FakeFLASHEngine);
    Object.keys(EngineProvider._engineProviders).length.should.equal(2);
    Object.keys(EngineProvider._engineProviders)[0].should.equal('Html5');
    Object.keys(EngineProvider._engineProviders)[1].should.equal('Flash');
  });

  it('should not register null', () => {
    Object.keys(EngineProvider._engineProviders).length.should.equal(0);
    EngineProvider.register(null, null);
    Object.keys(EngineProvider._engineProviders).length.should.equal(0);
  });

  it('should not register undefined', () => {
    Object.keys(EngineProvider._engineProviders).length.should.equal(0);
    EngineProvider.register();
    Object.keys(EngineProvider._engineProviders).length.should.equal(0);
  });
});

describe('EngineProvider:unRegister', () => {
  beforeEach(() => {
    EngineProvider.destroy();
    EngineProvider.register(FakeHTML5Engine.id, FakeHTML5Engine);
    EngineProvider.register(FakeFLASHEngine.id, FakeFLASHEngine);
  });
  after(() => {
    EngineProvider.unRegister(FakeFLASHEngine.id);
  });

  it('should unRegister Engine', () => {
    Object.keys(EngineProvider._engineProviders).length.should.equal(2);
    EngineProvider.unRegister(FakeFLASHEngine.id);
    Object.keys(EngineProvider._engineProviders).length.should.equal(1);
    Object.keys(EngineProvider._engineProviders)[0].should.equal('Html5');
  });

  it('should unRegister Engine and Engine2', () => {
    Object.keys(EngineProvider._engineProviders).length.should.equal(2);
    EngineProvider.unRegister(FakeHTML5Engine.id);
    EngineProvider.unRegister(FakeFLASHEngine.id);
    Object.keys(EngineProvider._engineProviders).length.should.equal(0);
  });

  it('should do nothing for Engine3', () => {
    Object.keys(EngineProvider._engineProviders).length.should.equal(2);
    EngineProvider.unRegister(FakeSLEngine.id);
    Object.keys(EngineProvider._engineProviders).length.should.equal(2);
  });

  it('should do nothing for null', () => {
    Object.keys(EngineProvider._engineProviders).length.should.equal(2);
    EngineProvider.unRegister(null);
    Object.keys(EngineProvider._engineProviders).length.should.equal(2);
  });

  it('should do nothing for undefined', () => {
    Object.keys(EngineProvider._engineProviders).length.should.equal(2);
    EngineProvider.unRegister();
    Object.keys(EngineProvider._engineProviders).length.should.equal(2);
  });
});
