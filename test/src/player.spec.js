// eslint-disable-next-line no-unused-vars
import Player from '../../src/player'
import sourcesConfig from './configs/sources.json'


//TODO: Player tests
describe("play", () => {
  let config, player;
  beforeEach(function () {
    config = sourcesConfig.mp4_none_hls_dash;
    player = new Player(config);
  });
  afterEach(function () {
    player.destroy();
  });

  it("should success before load", (done) => {
    player.play().then(() => {
      done();
    });
  });

  it("should success after load", (done) => {
    player.load()
      .then(() => {
        player.play().then(() => {
          done();
        });
      });
  });
});

describe("load", () => {
  it("should success", (done) => {
    let config = sourcesConfig.mp4_none_hls_dash;
    let player = new Player(config);
    player.load()
      .then(() => {
        done();
      });
  });

  it("preload should success", (done) => {
    let config = sourcesConfig.mp4_none_hls_dash;
    config.preload = 'auto';
    let player = new Player(config);
    player.load()
      .then(() => {
        done();
      });
  });

  it("should failed", (done) => {
    let config = sourcesConfig.corrupted_url;
    let player = new Player(config);
    player.load()
      .catch((error) => {
        error.type.should.be.equal('error');
        done();
      });
  });

  it("preload should failed", (done) => {
    let config = sourcesConfig.corrupted_url;
    config.preload = 'auto';
    let player = new Player(config);
    player.load()
      .catch((error) => {
        error.type.should.be.equal('error');
        done();
      });
  });
});


describe("getTracks", () => {
  it("should return tracks", (done) => {
    let config = sourcesConfig.mp4_none_hls_dash;
    let player = new Player(config);
    let video = player._engine.getVideoElement();
    player.load()
      .then(() => {
        let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
        let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
        let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
        let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
        player.getTracks().length.should.equal(totalTracksLength);
        done();
      });
  });
});
