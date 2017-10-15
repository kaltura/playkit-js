import PosterManager from '../../../src/utils/poster-manager'

describe("PosterManager", () => {
  it("should create poster element", () => {
    const posterManager = new PosterManager();
    let posterDomElement = posterManager.getElement();
    posterDomElement.should.be.a('htmldivelement');
  });

  it("should return the poster URL", () => {
    const posterManager = new PosterManager();
    const posterImageUrl = "http://myTestUrl.com";
    posterManager.setSrc(posterImageUrl);
    posterManager.src.should.be.equal(posterImageUrl);
  });

  it("should reset the poster manager", () => {
    const posterManager = new PosterManager();
    const posterImageUrl = "http://myTestUrl.com";
    posterManager.setSrc(posterImageUrl);
    posterManager.reset();
    posterManager._posterUrl.should.be.empty;
    posterManager._el.style.backgroundImage.should.be.empty;
  });

  it("should destroy the poster manager", () => {
    const posterManager = new PosterManager();
    const posterImageUrl = "http://myTestUrl.com";
    posterManager.setSrc(posterImageUrl);
    posterManager.destroy();
    posterManager._posterUrl.should.be.empty;
    (posterManager._el.parentNode === null).should.be.true;
  });
});
