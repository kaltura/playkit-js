import LoggerFactory from '../../../src/utils/logger'
import {LOG_LEVEL} from '../../../src/utils/logger'

describe('LoggerFactory', () => {

  let loggerA = null;
  let loggerB = null;

  beforeEach(() => {
    loggerA = LoggerFactory.getLogger('loggerA');
    loggerB = LoggerFactory.getLogger('loggerB');
  });

  it('should create two separate loggers', () => {
    (loggerA.context.name).should.equal('loggerA');
    (loggerB.context.name).should.equal('loggerB');
  });

  it('should change loggerA\'s log level', () => {
    loggerA.setLevel(LOG_LEVEL.WARN);
    (loggerA.context.filterLevel).should.deep.equal(LOG_LEVEL.WARN);
    (loggerB.context.filterLevel).should.deep.equal(LOG_LEVEL.DEBUG);
  });
});
