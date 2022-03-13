import Html5 from '../../../../src/engines/html5/html5';
import BaseMediaSourceAdapter from '../../../../src/engines/html5/media-source/base-media-source-adapter';
import sourcesConfig from '../../configs/sources.json';
import {DroppedFramesWatcher} from '../../../../src/engines/dropped-frames-watcher';
import {Html5EventType} from '../../../../src/event/event-type';

describe('Html5', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
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

  it('should prevent too short buffering event', done => {
    const progressiveSource = sourcesConfig.Mp4.progressive[0];
    const engine = Html5.createEngine(progressiveSource);
    engine._eventManager.listen(engine, Html5EventType.WAITING, () => {
      done();
    });
    engine._el.dispatchEvent(new window.Event(Html5EventType.WAITING));
    engine._el.dispatchEvent(new window.Event(Html5EventType.PLAYING));
    engine._el.dispatchEvent(new window.Event(Html5EventType.WAITING));
    setTimeout(() => {
      engine._el.dispatchEvent(new window.Event(Html5EventType.PLAYING));
    }, 300);
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
    const eventMgrSpy = sandbox.spy(engine._eventManager, 'removeAll');
    engine._eventManager.should.exist;
    engine._config.should.deep.equal(config);
    engine._mediaSourceAdapter.should.be.instanceof(BaseMediaSourceAdapter);
    engine._el.should.be.a('HTMLVideoElement');
    sandbox.stub(engine, '_init').callsFake(() => {});
    engine.restore({}, {});
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
    const droppedFramesWatcherSpy = sandbox.spy(engine._droppedFramesWatcher, 'destroy');
    engine._eventManager.should.exist;
    engine._config.should.deep.equal(config);
    engine._mediaSourceAdapter.should.be.instanceof(BaseMediaSourceAdapter);
    engine._el.should.be.a('HTMLVideoElement');
    engine.destroy();
    detachSpy.should.have.been.calledOnce;
    pauseSpy.should.have.been.calledOnce;
    eventMgrSpy.should.have.been.calledOnce;
    mediaSourceAdapterSpy.should.have.been.calledOnce;
    droppedFramesWatcherSpy.should.have.been.calledOnce;
    engine._el.src.should.be.empty;
  });

  it('should create, reset and init html5 engine', () => {
    const hlsSource = sourcesConfig.Mp4.progressive[0];
    const config = {
      sources: sourcesConfig.Hls,
      abr: {
        fpsDroppedFramesInterval: 5000,
        fpsDroppedMonitoringThreshold: 0.2,
        capLevelOnFPSDrop: true
      }
    };
    let engine = Html5.createEngine(hlsSource, config);
    const eventMgrSpy = sandbox.spy(engine._eventManager, 'removeAll');
    engine._eventManager.should.exist;
    engine._config.should.deep.equal(config);
    engine._mediaSourceAdapter.should.be.instanceof(BaseMediaSourceAdapter);
    const mediaSourceAdapterSpy = sandbox.spy(engine._mediaSourceAdapter, 'destroy');
    engine._droppedFramesWatcher.should.be.instanceof(DroppedFramesWatcher);
    const droppedFramesWatcherSpy = sandbox.spy(engine._droppedFramesWatcher, 'destroy');
    engine._el.should.be.a('HTMLVideoElement');
    engine.reset();
    eventMgrSpy.should.have.been.calledOnce;
    engine._el.src.should.be.empty;
    (engine._mediaSourceAdapter === null).should.be.equal(true);
    (engine._droppedFramesWatcher === null).should.be.equal(true);
    mediaSourceAdapterSpy.should.have.been.calledOnce;
    droppedFramesWatcherSpy.should.have.been.calledOnce;
    engine._init(hlsSource, config);
    engine._eventManager.should.exist;
    engine._config.should.deep.equal(config);
    engine._mediaSourceAdapter.should.be.instanceof(BaseMediaSourceAdapter);
    engine._droppedFramesWatcher.should.be.instanceof(DroppedFramesWatcher);
    engine._el.should.be.a('HTMLVideoElement');
  });
});
