import NativeAdapter from '../../../../src/engines/adapters/native-adapter'

describe('NativeAdapter:isSupported', () => {
  it('should be supported', () => {
    NativeAdapter.isSupported().should.be.true;
  });
});

describe('NativeAdapter:canPlayType', () => {
  it('should return true for video/mp4', () => {
    NativeAdapter.canPlayType('video/mp4').should.be.true;
  });

  it('should return true for video/ogg', () => {
    NativeAdapter.canPlayType('video/ogg').should.be.true;
  });

  it('should return false for unsupported mime type', () => {
    NativeAdapter.canPlayType('someType').should.be.false;
  });

  it('should return false for no mime type', () => {
    NativeAdapter.canPlayType().should.be.false;
  });
});
