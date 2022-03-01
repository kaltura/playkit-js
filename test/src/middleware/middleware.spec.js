import BaseMiddleware from '../../../src/middleware/base-middleware';
import Middleware from '../../../src/middleware/middleware';
import getLogger from '../../../src/utils/logger';

class M1 extends BaseMiddleware {
  id = 'M1';
  logger = getLogger(this.id);

  drink(next) {
    this.logger.debug('drink');
    this.callNext(next);
  }

  eat(type1, type2, next) {
    this.logger.debug('eat', type1, type2);
    this.callNext(next);
  }
}

class M2 extends BaseMiddleware {
  id = 'M2';
  logger = getLogger(this.id);

  drink(next) {
    this.logger.debug('drink');
    this.callNext(next);
  }

  eat(type1, type2, next) {
    this.logger.debug('eat', type1, type2);
    this.callNext(() => next(type2, type1));
  }
}

class M3 extends BaseMiddleware {
  id = 'M3';
  logger = getLogger(this.id);

  drink(next) {
    this.logger.debug('drink');
    this.callNext(next);
  }

  eat(type1, type2, next) {
    this.logger.debug('eat', type1, type2);
    this.callNext(next);
  }
}

describe('Middleware', function () {
  let m1, m2, m3;
  let middleware;
  let actions = {DRINK: 'drink', EAT: 'eat'};
  let sandbox;

  beforeEach(function () {
    middleware = new Middleware(actions);
  });

  describe('use', function () {
    beforeEach(function () {
      m1 = new M1();
      m2 = new M2();
      m3 = new M3();
      middleware.use(m1);
      middleware.use(m2);
      middleware.use(m3);
    });

    it('should register the base middlewares', function () {
      middleware._middlewares.get(actions.DRINK).should.have.lengthOf(3);
      middleware._middlewares.get(actions.EAT).should.have.lengthOf(3);
    });
  });

  describe('run', function () {
    let spyM1, spyM2, spyM3;

    beforeEach(function () {
      sandbox = sinon.createSandbox();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('should run all the base middlewares for action drink', function (done) {
      spyM1 = sandbox.spy(M1.prototype, 'drink');
      spyM2 = sandbox.spy(M2.prototype, 'drink');
      spyM3 = sandbox.spy(M3.prototype, 'drink');
      m1 = new M1();
      m2 = new M2();
      m3 = new M3();
      middleware.use(m1);
      middleware.use(m2);
      middleware.use(m3);
      middleware.run(actions.DRINK, () => {
        spyM1.should.have.been.calledOnce;
        spyM2.should.have.been.calledOnce;
        spyM3.should.have.been.calledOnce;
        spyM2.should.have.been.calledAfter(spyM1);
        spyM3.should.have.been.calledAfter(spyM2);
        done();
      });
    });

    it('should run all the base middlewares for action eat', function (done) {
      spyM1 = sandbox.spy(M1.prototype, 'eat');
      spyM2 = sandbox.spy(M2.prototype, 'eat');
      spyM3 = sandbox.spy(M3.prototype, 'eat');
      m1 = new M1();
      m2 = new M2();
      m3 = new M3();
      middleware.use(m1);
      middleware.use(m2);
      middleware.use(m3);
      middleware.run(
        actions.EAT,
        (...types) => {
          spyM1.should.have.been.calledOnceWith('pizza', 'pasta');
          spyM2.should.have.been.calledOnceWith('pizza', 'pasta');
          spyM3.should.have.been.calledOnceWith('pasta', 'pizza');
          types.should.deep.equal(['pasta', 'pizza', undefined]);
          spyM2.should.have.been.calledAfter(spyM1);
          spyM3.should.have.been.calledAfter(spyM2);
          done();
        },
        'pizza',
        'pasta'
      );
    });

    it('should run only callback for un valid action', function (done) {
      m1 = new M1();
      m2 = new M2();
      m3 = new M3();
      middleware.use(m1);
      middleware.use(m2);
      middleware.use(m3);
      middleware.run('sleep', () => {
        done();
      });
    });
  });
});
