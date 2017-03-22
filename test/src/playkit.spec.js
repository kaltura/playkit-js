import {playkit} from '../../src/playkit';
import fakeMSE from '../../src/engine/mediaSourceHandlers/fakeMSE';

describe('playkit:playkit', function() {

  this.timeout(4000);

  it('should play mp4 stream', (done) => {
    let player = playkit({
      mimeType: "video/mp4",
      source: "http://techslides.com/demos/sample-videos/small.mp4"
    });
    let video = document.getElementsByTagName("video")[0];
    video.onplaying = function () {
      player.destroy();
      done();
    };
    video.addEventListener('error', function (err) {
      player.destroy();
      should.fail();
    });
    player.play();
  });

});
