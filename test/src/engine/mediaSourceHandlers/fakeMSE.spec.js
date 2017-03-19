import fakeMSE from '../../../../src/engine/mediaSourceHandlers/fakeMSE';

describe('fakeMSE:isSupported', () => {
  it('should be supported', () => {
    fakeMSE.isSupported().should.be.true;
  });
});

describe('fakeMSE:canPlayType', () => {
  it('should return true', () => {
    fakeMSE.canPlayType('mp4').should.be.true;
  });

  it('should return false for unsupported mime type', () => {
    fakeMSE.canPlayType('someTime').should.be.false;
  });

  it('should return false for no mime type' , () => {
    fakeMSE.canPlayType().should.be.false;
  });
});
