import BaseMiddleware from '../../../src/middleware/base-middleware';
import PlaybackMiddleware from '../../../src/middleware/playback-middleware';
import getLogger from '../../../src/utils/logger';

class PM1 extends BaseMiddleware {
  id = 'PM1';
  logger = getLogger(this.id);
  plus = 10;

  play(next) {
    this.logger.debug('play');
    this.callNext(next);
  }

  pause(next) {
    this.logger.debug('pause');
    this.callNext(next);
  }

  load(next) {
    this.logger.debug('load');
    this.callNext(next);
  }

  setCurrentTime(to, next) {
    this.logger.debug('setCurrentTime', to);
    this.callNext(next.bind(null, to + this.plus));
  }
}

class PM2 extends BaseMiddleware {
  id = 'PM2';
  logger = getLogger(this.id);
  plus = 20;

  play(next) {
    this.logger.debug('play');
    this.callNext(next);
  }

  setCurrentTime(to, next) {
    this.logger.debug('setCurrentTime', to);
    this.callNext(() => next(to + this.plus));
  }
}

class PM3 extends BaseMiddleware {
  id = 'PM3';
  logger = getLogger(this.id);

  pause(next) {
    this.logger.debug('pause');
    this.callNext(next);
  }

  setCurrentTime(to, next) {
    this.logger.debug('setCurrentTime', to);
    this.callNext(next);
  }
}

class PM4 extends BaseMiddleware {
  id = 'PM4';
  logger = getLogger(this.id);

  load(next) {
    this.logger.debug('load');
    this.callNext(next);
  }
}

describe('PlaybackMiddleware', function () {
  let pm1, pm2, pm3, pm4;
  let spyPm1, spyPm2, spyPm3, spyPm4;
  let playbackMiddleware;
  let sandbox;

  beforeEach(function () {
    playbackMiddleware = new PlaybackMiddleware();
    sandbox = sinon.createSandbox();
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should register the playback middlewares', function () {
    pm1 = new PM1();
    pm2 = new PM2();
    pm3 = new PM3();
    pm4 = new PM4();
    playbackMiddleware.use(pm1);
    playbackMiddleware.use(pm2);
    playbackMiddleware.use(pm3);
    playbackMiddleware.use(pm4);
    playbackMiddleware._middleware._middlewares.get('pause').should.have.lengthOf(2);
    playbackMiddleware._middleware._middlewares.get('play').should.have.lengthOf(2);
    playbackMiddleware._middleware._middlewares.get('load').should.have.lengthOf(2);
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

  it('should run playback middleware for action load', function (done) {
    spyPm1 = sandbox.spy(PM1.prototype, 'load');
    spyPm4 = sandbox.spy(PM4.prototype, 'load');
    pm1 = new PM1();
    pm4 = new PM4();
    playbackMiddleware.use(pm1);
    playbackMiddleware.use(pm4);
    playbackMiddleware.load(() => {
      spyPm1.should.have.been.calledOnce;
      spyPm4.should.have.been.calledOnce;
      spyPm4.should.have.been.calledAfter(spyPm1);
      done();
    });
  });

  describe('setCurrentTime middleware', function () {
    it('should run playback middleware for action setCurrentTime and chain the params', function (done) {
      pm1 = new PM1();
      pm2 = new PM2();
      playbackMiddleware.use(pm1);
      playbackMiddleware.use(pm2);
      playbackMiddleware.setCurrentTime(100, to => {
        to.should.equal(130);
        done();
      });
    });

    it('should run playback middleware for action setCurrentTime and chain the previous params', function (done) {
      pm1 = new PM1();
      pm2 = new PM2();
      pm3 = new PM3();
      playbackMiddleware.use(pm1);
      playbackMiddleware.use(pm3);
      playbackMiddleware.use(pm2);
      playbackMiddleware.setCurrentTime(100, to => {
        to.should.equal(130);
        done();
      });
    });

    it('should run playback middleware for action setCurrentTime and chain the original for a middleware', function (done) {
      pm1 = new PM1();
      pm3 = new PM3();
      playbackMiddleware.use(pm3);
      playbackMiddleware.use(pm1);
      playbackMiddleware.setCurrentTime(100, to => {
        to.should.equal(110);
        done();
      });
    });

    it('should run playback middleware for action setCurrentTime and chain the previous for the last', function (done) {
      pm1 = new PM1();
      pm3 = new PM3();
      playbackMiddleware.use(pm1);
      playbackMiddleware.use(pm3);
      playbackMiddleware.setCurrentTime(100, to => {
        to.should.equal(110);
        done();
      });
    });

    it('should run playback middleware for action setCurrentTime and chain the original for the last', function (done) {
      pm3 = new PM3();
      playbackMiddleware.use(pm3);
      playbackMiddleware.setCurrentTime(100, to => {
        to.should.equal(100);
        done();
      });
    });
  });
});
