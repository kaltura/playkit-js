import fakeMSE from '../../../../src/engine/mediaSourceHandlers/fakeMSE';

let video = document.createElement("video");

describe('fakeMSE:isSupported', () => {
  it('should be supported', () => {
    fakeMSE.isSupported().should.be.true;
  });
});

describe('fakeMSE:canPlayType', () => {
  it('should return true for video/mp4', () => {
    fakeMSE.canPlayType('video/mp4').should.be.true;
  });

  it('should return true for video/ogg', () => {
    fakeMSE.canPlayType('video/ogg').should.be.true;
  });

  it('should return false for unsupported mime type', () => {
    fakeMSE.canPlayType('someType').should.be.false;
  });

  it('should return false for no mime type', () => {
    fakeMSE.canPlayType().should.be.false;
  });
});

describe('fakeMSE:load', () => {
  it('should load source', () => {
    let f = new fakeMSE(video);
    f.load({src: "http://someurl"});
    f._msPlayer.src.should.equal("http://someurl/");
  });

  it('should do nothing for no source', () => {
    let f = new fakeMSE(video);
    let src = video.src;
    f.load();
    f._msPlayer.src.should.equal(src);
  });

});
