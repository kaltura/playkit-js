import Html5 from '../../../../src/engines/html5/html5';
import BaseMediaSourceAdapter from '../../../../src/engines/html5/media-source/base-media-source-adapter';
import sourcesConfig from '../../configs/sources.json';

describe('Html5', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create html5 engine', () => {
    const progressiveSource = sourcesConfig.Mp4.progressive[0];
    const config = {
      sources: sourcesConfig.Mp4,
      abr: {
        fpsDroppedFramesInterval: 5000,
        fpsDroppedMonitoringThreshold: 0.2,
        capLevelOnFPSDrop: true
      }
    };
    const engine = Html5.createEngine(progressiveSource, config);
    engine._eventManager.should.exist;
    engine._config.should.deep.equal(config);
    engine._mediaSourceAdapter.should.be.instanceof(BaseMediaSourceAdapter);
    engine._el.should.be.a('HTMLVideoElement');
  });

  it('should restore html5 engine', () => {
    const progressiveSource = sourcesConfig.Mp4.progressive[0];
    const config = {
      sources: sourcesConfig.Mp4,
      abr: {
        fpsDroppedFramesInterval: 5000,
        fpsDroppedMonitoringThreshold: 0.2,
        capLevelOnFPSDrop: true
      }
    };
    const engine = Html5.createEngine(progressiveSource, config);
    const detachSpy = sandbox.spy(engine, 'detach');
    const eventMgrSpy = sandbox.spy(engine._eventManager, 'removeAll');
    engine._eventManager.should.exist;
    engine._config.should.deep.equal(config);
    engine._mediaSourceAdapter.should.be.instanceof(BaseMediaSourceAdapter);
    engine._el.should.be.a('HTMLVideoElement');
    sandbox.stub(engine, '_init', () => {});
    engine.restore({}, {});
    detachSpy.should.have.been.calledOnce;
    eventMgrSpy.should.have.been.calledOnce;
    engine._el.src.should.be.empty;
  });

  it('should destroy html5 engine', () => {
    const progressiveSource = sourcesConfig.Mp4.progressive[0];
    const config = {
      sources: sourcesConfig.Mp4,
      abr: {
        fpsDroppedFramesInterval: 5000,
        fpsDroppedMonitoringThreshold: 0.2,
        capLevelOnFPSDrop: true
      }
    };
    const engine = Html5.createEngine(progressiveSource, config);
    const detachSpy = sandbox.spy(engine, 'detach');
    const pauseSpy = sandbox.spy(engine, 'pause');
    const eventMgrSpy = sandbox.spy(engine._eventManager, 'destroy');
    const mediaSourceAdapterSpy = sandbox.spy(engine._mediaSourceAdapter, 'destroy');
    engine._eventManager.should.exist;
    engine._config.should.deep.equal(config);
    engine._mediaSourceAdapter.should.be.instanceof(BaseMediaSourceAdapter);
    engine._el.should.be.a('HTMLVideoElement');
    engine.destroy();
    detachSpy.should.have.been.calledOnce;
    pauseSpy.should.have.been.calledOnce;
    eventMgrSpy.should.have.been.calledOnce;
    mediaSourceAdapterSpy.should.have.been.calledOnce;
    engine._el.src.should.be.empty;
  });
});
