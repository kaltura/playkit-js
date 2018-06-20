import EngineProvider from '../../../src/engines/engine-provider'
import {FakeHTML5Engine,FakeFLASHEngine,FakeSLEngine} from "./test-engines";

let oldEngineProviders = EngineProvider._engineProviders;

describe('EngineProvider:register', () => {

  beforeEach(() => {
    EngineProvider._engineProviders = [];
  });

  after(() => {
    EngineProvider._engineProviders  = oldEngineProviders;
  });

  it('should register Engine', () => {
    EngineProvider._engineProviders.length.should.equal(0);
    EngineProvider.register(FakeFLASHEngine);
    EngineProvider._engineProviders.length.should.equal(1);
    EngineProvider._engineProviders[0].id.should.equal("Flash");
  });

  it('should not register Engine twice', () => {
    EngineProvider._engineProviders.length.should.equal(0);
    EngineProvider.register(FakeHTML5Engine);
    EngineProvider.register(FakeHTML5Engine);
    EngineProvider._engineProviders.length.should.equal(1);
    EngineProvider._engineProviders[0].id.should.equal("Html5");
  });

  it('should register Engine and Engine2', () => {
    EngineProvider._engineProviders.length.should.equal(0);
    EngineProvider.register(FakeHTML5Engine);
    EngineProvider.register(FakeFLASHEngine);
    EngineProvider._engineProviders.length.should.equal(2);
    EngineProvider._engineProviders[0].id.should.equal("Html5");
    EngineProvider._engineProviders[1].id.should.equal("Flash");
  });

  it('should not register null', () => {
    EngineProvider._engineProviders.length.should.equal(0);
    EngineProvider.register(null);
    EngineProvider._engineProviders.length.should.equal(0);
  });

  it('should not register undefined', () => {
    EngineProvider._engineProviders.length.should.equal(0);
    EngineProvider.register();
    EngineProvider._engineProviders.length.should.equal(0);
  });
});

describe('EngineProvider:unRegister', () => {

  beforeEach(() => {
    EngineProvider._engineProviders = [FakeHTML5Engine, FakeFLASHEngine];
  });
  after(() => {
    EngineProvider._engineProviders = oldEngineProviders;
  });

  it('should unRegister Engine', () => {
    EngineProvider._engineProviders.length.should.equal(2);
    EngineProvider.unRegister(FakeHTML5Engine);
    EngineProvider._engineProviders.length.should.equal(1);
    EngineProvider._engineProviders[0].id.should.equal("Flash");
  });

  it('should unRegister Engine and Engine2', () => {
    EngineProvider._engineProviders.length.should.equal(2);
    EngineProvider.unRegister(FakeHTML5Engine);
    EngineProvider.unRegister(FakeFLASHEngine);
    EngineProvider._engineProviders.length.should.equal(0);
  });

  it('should do nothing for Engine3', () => {
    EngineProvider._engineProviders.length.should.equal(2);
    EngineProvider.unRegister(FakeSLEngine);
    EngineProvider._engineProviders.length.should.equal(2);
  });

  it('should do nothing for null', () => {
    EngineProvider._engineProviders.length.should.equal(2);
    EngineProvider.unRegister(null);
    EngineProvider._engineProviders.length.should.equal(2);
  });

  it('should do nothing for undefined', () => {
    EngineProvider._engineProviders.length.should.equal(2);
    EngineProvider.unRegister();
    EngineProvider._engineProviders.length.should.equal(2);
  });
});

