import BaseMediaSourceHandler from '../../../../src/engine/mediaSourceHandlers/BaseMediaSourceHandler';

describe('BaseMediaSourceHandler:isSupported', () => {
  it('should be supported', () => {
    BaseMediaSourceHandler.isSupported().should.be.true;
  });
});

describe('BaseMediaSourceHandler:canPlayType', () => {
  it('should return false', () => {
    BaseMediaSourceHandler.canPlayType('mp4').should.be.false;
  });

  it('should return false for no mime type', () => {
    BaseMediaSourceHandler.canPlayType().should.be.false;
  });
});

describe('BaseMediaSourceHandler:load', () => {
  it('should throw exception', () => {
    let exceptionOccurred = false;
    try {
      new BaseMediaSourceHandler().load();
    } catch (e) {
      exceptionOccurred = true;
      e.name.should.equal('NotImplementedException');
      e.message.should.equal('load method not implemented');
    }
    exceptionOccurred.should.be.true;
  });
});
