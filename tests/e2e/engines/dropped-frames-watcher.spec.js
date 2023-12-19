import {DroppedFramesWatcher} from '../../../src/engines/dropped-frames-watcher';
import {FakeDashAdapter, FakeHlsAdapter} from './html5/media-source/adapters/test-adapters/test-adapters';
import {CustomEventType} from '../../../src/event/event-type';
import { FakeEvent } from '../../../src/event/fake-event';

describe('constructor', function () {
  let videoElement, sandbox, config;
  videoElement = document.createElement('video');
  config = {capLevelOnFPSDrop: true};
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create droppedFramesWatcher and listen to the adapter FPS_DROP', () => {
    const hlsAdapter = new FakeHlsAdapter();
    hlsAdapter.capabilities = {
      fpsControl: true
    };
    hlsAdapter.addEventListener = () => {};
    let spy = sandbox.spy(hlsAdapter, 'addEventListener');
    new DroppedFramesWatcher(hlsAdapter, config, videoElement);
    spy.should.have.been.calledOnce;
    spy.should.have.been.calledWithMatch(CustomEventType.FPS_DROP);
  });

  it('should create droppedFramesWatcher and listen to the adapter VIDEO_TRACK_CHANGED', () => {
    const dashAdapter = new FakeDashAdapter();
    dashAdapter.capabilities = {
      fpsControl: false
    };
    dashAdapter.addEventListener = () => {};
    let spy = sandbox.spy(dashAdapter, 'addEventListener');
    new DroppedFramesWatcher(dashAdapter, config, videoElement);
    spy.should.have.been.calledOnce;
    spy.should.have.been.calledWithMatch(CustomEventType.VIDEO_TRACK_CHANGED);
  });

  it('should update currentBitrate with the the one from the event', done => {
    const dashAdapter = new FakeDashAdapter();
    dashAdapter.capabilities = {
      fpsControl: false
    };
    const dfw = new DroppedFramesWatcher(dashAdapter, config, videoElement);
    dashAdapter.dispatchEvent(new FakeEvent(CustomEventType.VIDEO_TRACK_CHANGED, {selectedVideoTrack: {bandwidth: 100}}));
    setTimeout(() => {
      dfw._currentBitrate.should.equal(100);
      done();
    }, 500);
  });

  it('should set the interval', () => {
    const dashAdapter = new FakeDashAdapter();
    dashAdapter.capabilities = {
      fpsControl: false
    };
    const dfw = new DroppedFramesWatcher(dashAdapter, config, videoElement);
    dfw._droppedFramesInterval.should.not.equal(null);
  });
});

describe('_getDroppedAndDecodedFrames function ', function () {
  let videoElement, sandbox;
  videoElement = document.createElement('video');

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return [0,0] for the decoded and dropped frames', () => {
    const dashAdapter = new FakeDashAdapter();
    dashAdapter.capabilities = {
      fpsControl: false
    };
    const dfw = new DroppedFramesWatcher(dashAdapter, {}, videoElement);
    const [first, second] = dfw._getDroppedAndDecodedFrames();
    first.should.equal(0);
    second.should.equal(0);
  });
});

describe('_checkFPS function ', function () {
  let videoElement, sandbox;
  videoElement = document.createElement('video');

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should set currentTime from 0 to the the currentTime', () => {
    const dashAdapter = new FakeDashAdapter();
    dashAdapter.capabilities = {
      fpsControl: false
    };
    const dfw = new DroppedFramesWatcher(dashAdapter, {}, videoElement);
    dfw._lastTime.should.equal(0);
    dfw._getDroppedAndDecodedFrames = function () {
      return [5, 10];
    };
    dfw._checkFPS(5, 10);
    dfw._lastTime.should.not.equal(0);
  });
  it('should not call setMaxBitrate', () => {
    const dashAdapter = new FakeDashAdapter();
    dashAdapter.capabilities = {
      fpsControl: false
    };
    dashAdapter.setMaxBitrate = () => {};
    let spy = sandbox.spy(dashAdapter, 'setMaxBitrate');
    const dfw = new DroppedFramesWatcher(dashAdapter, {fpsDroppedMonitoringThreshold: 1}, videoElement);
    dfw._lastTime = performance.now() - 5000;
    dfw._lastDroppedFrames = 2;
    dfw._lastDecodedFrames = 3;
    dfw._getDroppedAndDecodedFrames = function () {
      return [5, 10];
    };
    dfw._checkFPS();
    spy.should.have.been.not.calledOnce;
  });
  it('should call setMaxBitrate', () => {
    const dashAdapter = new FakeDashAdapter();
    dashAdapter.capabilities = {
      fpsControl: false
    };
    dashAdapter.setMaxBitrate = () => {};
    let spy = sandbox.spy(dashAdapter, 'setMaxBitrate');
    const dfw = new DroppedFramesWatcher(dashAdapter, {fpsDroppedMonitoringThreshold: 1}, videoElement);
    dfw._lastTime = performance.now() - 5000;
    dfw._lastDroppedFrames = 2;
    dfw._lastDecodedFrames = 3;
    dfw._getDroppedAndDecodedFrames = function () {
      return [10, 5];
    };
    dfw._checkFPS();
    spy.should.have.been.calledOnce;
  });
});
