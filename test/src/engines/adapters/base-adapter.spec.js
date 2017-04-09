import BaseMediaSourceAdapter from '../../../../src/engines/adapters/base-adapter'

describe('BaseMediaSourceAdapter:isSupported', () => {
  it('should be supported', () => {
    BaseMediaSourceAdapter.isSupported().should.be.true;
  });
});

describe('BaseMediaSourceAdapter:canPlayType', () => {
  it('should return false', () => {
    BaseMediaSourceAdapter.canPlayType('mp4').should.be.false;
  });

  it('should return false for no mime type', () => {
    BaseMediaSourceAdapter.canPlayType().should.be.false;
  });
});

describe('BaseMediaSourceAdapter:get logger', () => {
  it('should return logger', () => {
    BaseMediaSourceAdapter.logger.context.name.should.equal('BaseMediaSourceAdapter');
  });
});

describe('BaseMediaSourceAdapter:load', () => {
  it('should throw exception', () => {
    let exceptionOccurred = false;
    try {
      new BaseMediaSourceAdapter().load();
    } catch (e) {
      exceptionOccurred = true;
      e.name.should.equal('NotImplementedException');
      e.message.should.equal('load method not implemented');
    }
    exceptionOccurred.should.be.true;
  });
});
