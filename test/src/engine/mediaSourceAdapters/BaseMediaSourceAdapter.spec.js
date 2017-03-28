import BaseMediaSourceAdapter from '../../../../src/engine/mediaSourceAdapters/BaseMediaSourceAdapter';

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

describe('BaseMediaSourceAdapter:set src', () => {
  it('should set the given source', () => {
    let b = new BaseMediaSourceAdapter();
    b.src = {src:"some src"};
    b._source.should.deep.equal({src:"some src"});
  });

  it('should set undefined for no given source', () => {
    let b = new BaseMediaSourceAdapter();
    b.src = undefined;
    (b._source === undefined).should.be.true;
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
