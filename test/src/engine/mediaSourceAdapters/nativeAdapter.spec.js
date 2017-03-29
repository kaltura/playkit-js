import nativeAdapter from '../../../../src/engine/mediaSourceAdapters/nativeAdapter';

let video = document.createElement("video");

describe('nativeAdapter:isSupported', () => {
  it('should be supported', () => {
    nativeAdapter.isSupported().should.be.true;
  });
});

describe('nativeAdapter:canPlayType', () => {
  it('should return true for video/mp4', () => {
    nativeAdapter.canPlayType('video/mp4').should.be.true;
  });

  it('should return true for video/ogg', () => {
    nativeAdapter.canPlayType('video/ogg').should.be.true;
  });

  it('should return false for unsupported mime type', () => {
    nativeAdapter.canPlayType('someType').should.be.false;
  });

  it('should return false for no mime type', () => {
    nativeAdapter.canPlayType().should.be.false;
  });
});
