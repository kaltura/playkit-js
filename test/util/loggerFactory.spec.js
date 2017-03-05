import loggerFactory from '../../src/util/loggerFactory';
import {LOG_LEVEL} from '../../src/util/loggerFactory';

let loggerA = null;
let loggerB = null;

describe('loggerFactory', () => {

  it('should create two separate loggers', () => {
    loggerA = loggerFactory.getLogger('loggerA');
    (loggerA.context.name).should.equal('loggerA');

    loggerB = loggerFactory.getLogger('loggerB');
    (loggerB.context.name).should.equal('loggerB');
  });

  it('should change loggerA\'s log level', () => {
    loggerA.setLevel(LOG_LEVEL.WARN);
    (loggerA.context.filterLevel).should.deep.equal(LOG_LEVEL.WARN);
    (loggerB.context.filterLevel).should.deep.equal(LOG_LEVEL.DEBUG);
  });

});
