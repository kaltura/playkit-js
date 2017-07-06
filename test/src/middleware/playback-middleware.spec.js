import BaseMiddleware from '../../../src/middleware/base-middleware'
import PlaybackMiddleware from '../../../src/middleware/playback-middleware'
import LoggerFactory from '../../../src/utils/logger'

class PM1 extends BaseMiddleware {
  id = 'PM1';
  logger = LoggerFactory.getLogger(this.id);

  play(next) {
    this.logger.debug('play');
    this.callNext(next);
  }

  pause(next) {
    this.logger.debug('pause');
    this.callNext(next);
  }
}

class PM2 extends BaseMiddleware {
  id = 'PM2';
  logger = LoggerFactory.getLogger(this.id);

  play(next) {
    this.logger.debug('play');
    this.callNext(next);
  }
}

class PM3 extends BaseMiddleware {
  id = 'PM3';
  logger = LoggerFactory.getLogger(this.id);

  pause(next) {
    this.logger.debug('pause');
    this.callNext(next);
  }
}

describe('PlaybackMiddleware', function () {
  let pm1, pm2, pm3;
  let spyPm1, spyPm2, spyPm3;
  let playbackMiddleware;
  let sandbox;

  beforeEach(function () {
    playbackMiddleware = new PlaybackMiddleware();
    sandbox = sinon.sandbox.create();
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should register the playback middlewares', function () {
    pm1 = new PM1();
    pm2 = new PM2();
    pm3 = new PM3();
    playbackMiddleware.use(pm1);
    playbackMiddleware.use(pm2);
    playbackMiddleware.use(pm3);
    playbackMiddleware._middleware._middlewares.get('pause').should.have.lengthOf(2);
    playbackMiddleware._middleware._middlewares.get('play').should.have.lengthOf(2);
  });

  it('should run playback middleware for action pause', function (done) {
    spyPm1 = sandbox.spy(PM1.prototype, 'pause');
    spyPm3 = sandbox.spy(PM3.prototype, 'pause');
    pm1 = new PM1();
    pm3 = new PM3();
    playbackMiddleware.use(pm1);
    playbackMiddleware.use(pm3);
    playbackMiddleware.pause(() => {
      spyPm1.should.have.been.calledOnce;
      spyPm3.should.have.been.calledOnce;
      spyPm3.should.have.been.calledAfter(spyPm1);
      done();
    });
  });

  it('should run playback middleware for action play', function (done) {
    spyPm1 = sandbox.spy(PM1.prototype, 'play');
    spyPm2 = sandbox.spy(PM2.prototype, 'play');
    pm1 = new PM1();
    pm2 = new PM2();
    playbackMiddleware.use(pm1);
    playbackMiddleware.use(pm2);
    playbackMiddleware.play(() => {
      spyPm1.should.have.been.calledOnce;
      spyPm2.should.have.been.calledOnce;
      spyPm2.should.have.been.calledAfter(spyPm1);
      done();
    });
  });
});
