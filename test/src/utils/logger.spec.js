import LoggerFactory from '../../../src/utils/logger'
import {LOG_LEVEL} from '../../../src/utils/logger'

let loggerA = null;
let loggerB = null;

describe('LoggerFactory', () => {
  it('should create two separate loggers', () => {
    loggerA = LoggerFactory.getLogger('loggerA');
    (loggerA.context.name).should.equal('loggerA');

    loggerB = LoggerFactory.getLogger('loggerB');
    (loggerB.context.name).should.equal('loggerB');
  });

  it('should change loggerA\'s log level', () => {
    loggerA.setLevel(LOG_LEVEL.WARN);
    (loggerA.context.filterLevel).should.deep.equal(LOG_LEVEL.WARN);
    (loggerB.context.filterLevel).should.deep.equal(LOG_LEVEL.DEBUG);
  });
});
