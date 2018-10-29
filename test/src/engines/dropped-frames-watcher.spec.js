import {DroppedFramesWatcher} from '../../../src/engines/dropped-frames-watcher';
import {FakeDashAdapter, FakeHlsAdapter} from './html5/media-source/adapters/test-adapters/test-adapters';
import {CustomEventType} from '../../../src/event/event-type';
import FakeEvent from '../../../src/event/fake-event';

describe('constructor', function() {
  let videoElement, sandbox;
  videoElement = document.createElement('video');

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox = sandbox.restore();
  });

  it('should create droppedFramesWatcher and listen to the adapter FPS_DROP', () => {
    const hlsAdapter = new FakeHlsAdapter();
    hlsAdapter.capabilites = {
      fpsControl: true
    };
    hlsAdapter.addEventListener = () => {};
    let spy = sandbox.spy(hlsAdapter, 'addEventListener');
    new DroppedFramesWatcher(hlsAdapter, {}, videoElement);
    spy.should.have.been.calledOnce;
    spy.should.have.been.calledWithMatch(CustomEventType.FPS_DROP);
  });

  it('should create droppedFramesWatcher and listen to the adapter VIDEO_TRACK_CHANGED', () => {
    const dashAdapter = new FakeDashAdapter();
    dashAdapter.capabilites = {
      fpsControl: false
    };
    dashAdapter.addEventListener = () => {};
    let spy = sandbox.spy(dashAdapter, 'addEventListener');
    new DroppedFramesWatcher(dashAdapter, {}, videoElement);
    spy.should.have.been.calledOnce;
    spy.should.have.been.calledWithMatch(CustomEventType.VIDEO_TRACK_CHANGED);
  });

  it('should update currentBitrate with the the one from the event', done => {
    const dashAdapter = new FakeDashAdapter();
    dashAdapter.capabilites = {
      fpsControl: false
    };
    const dfw = new DroppedFramesWatcher(dashAdapter, {}, videoElement);
    dashAdapter.dispatchEvent(new FakeEvent(CustomEventType.VIDEO_TRACK_CHANGED, {selectedVideoTrack: {bandwidth: 100}}));
    setTimeout(() => {
      dfw._currentBitrate.should.equal(100);
      done();
    }, 500);
  });

  it('should set the interval', () => {
    const dashAdapter = new FakeDashAdapter();
    dashAdapter.capabilites = {
      fpsControl: false
    };
    const dfw = new DroppedFramesWatcher(dashAdapter, {}, videoElement);
    dfw._droppedFramesInterval.should.not.equal(null);
  });

  describe('_checkBitrateQuality function ', function() {
    let videoElement, sandbox;
    videoElement = document.createElement('video');

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
      sandbox = sandbox.restore();
    });

    it('should call _checkFPS once', () => {
      const dashAdapter = new FakeDashAdapter();
      dashAdapter.capabilites = {
        fpsControl: false
      };
      const dfw = new DroppedFramesWatcher(dashAdapter, {}, videoElement);
      let spy = sandbox.spy(dfw, '_checkFPS');
      dfw._checkBitrateQuality();
      spy.should.have.been.calledOnce;
    });
  });

  describe('_checkFPS function ', function() {
    let videoElement, sandbox;
    videoElement = document.createElement('video');

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
      sandbox = sandbox.restore();
    });

    it('should set currentTime from 0 to the the currentTime', () => {
      const dashAdapter = new FakeDashAdapter();
      dashAdapter.capabilites = {
        fpsControl: false
      };
      const dfw = new DroppedFramesWatcher(dashAdapter, {}, videoElement);
      dfw._lastTime.should.equal(0);
      dfw._checkFPS(5, 10);
      dfw._lastTime.should.not.equal(0);
    });
    it('should not call setMaxBitrate', () => {
      const dashAdapter = new FakeDashAdapter();
      dashAdapter.capabilites = {
        fpsControl: false
      };
      dashAdapter.setMaxBitrate = () => {};
      let spy = sandbox.spy(dashAdapter, 'setMaxBitrate');
      const dfw = new DroppedFramesWatcher(dashAdapter, {fpsDroppedMonitoringThreshold: 1}, videoElement);
      dfw._lastTime = performance.now() - 5000;
      dfw._lastDroppedFrames = 2;
      dfw._lastDecodedFrames = 3;
      dfw._checkFPS(5, 10);
      spy.should.have.been.not.calledOnce;
    });
    it('should call setMaxBitrate', () => {
      const dashAdapter = new FakeDashAdapter();
      dashAdapter.capabilites = {
        fpsControl: false
      };
      dashAdapter.setMaxBitrate = () => {};
      let spy = sandbox.spy(dashAdapter, 'setMaxBitrate');
      const dfw = new DroppedFramesWatcher(dashAdapter, {fpsDroppedMonitoringThreshold: 1}, videoElement);
      dfw._lastTime = performance.now() - 5000;
      dfw._lastDroppedFrames = 2;
      dfw._lastDecodedFrames = 3;
      dfw._checkFPS(10, 5);
      spy.should.have.been.calledOnce;
    });
  });
});
