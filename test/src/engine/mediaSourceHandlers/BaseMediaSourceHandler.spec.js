import BaseMediaSourceHandler from '../../../../src/engine/mediaSourceHandlers/BaseMediaSourceHandler';

describe('BaseMediaSourceHandler:isSupported', () => {
  it('should return true', () => {
    BaseMediaSourceHandler.isSupported().should.be.true;
  });
});

describe('BaseMediaSourceHandler:canPlayType', () => {
  it('should return false', () => {
    BaseMediaSourceHandler.canPlayType('mp4').should.be.false;
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
      e.message.should.equal('load() method not implemented');
    }
    exceptionOccurred.should.be.true;
  });
});
