import BaseMediaSourceHandler from '../../../../src/engine/mediaSourceHandlers/BaseMediaSourceHandler';

describe('BaseMediaSourceHandler:isSupported', () => {

  it('should return true', () => {
    BaseMediaSourceHandler.isSupported().should.be.true;
  });
});

describe('BaseMediaSourceHandler:load', () => {

  it('should return undefined', () => {
    (new BaseMediaSourceHandler().load() === undefined).should.be.true;
  });
});
