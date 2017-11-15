import getLogger from '../../../src/utils/logger'
import {LogLevel} from '../../../src/utils/logger'

describe('LoggerFactory', () => {

  let loggerA = null;
  let loggerB = null;

  beforeEach(() => {
    loggerA = getLogger('loggerA');
    loggerB = getLogger('loggerB');
  });

  it('should create two separate loggers', () => {
    (loggerA.context.name).should.equal('loggerA');
    (loggerB.context.name).should.equal('loggerB');
  });

  it('should change loggerA\'s log level', () => {
    loggerA.setLevel(LogLevel.WARN);
    (loggerA.context.filterLevel).should.deep.equal(LogLevel.WARN);
    (loggerB.context.filterLevel).should.deep.equal(LogLevel.DEBUG);
  });
});
