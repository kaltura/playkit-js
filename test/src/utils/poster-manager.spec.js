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
});
