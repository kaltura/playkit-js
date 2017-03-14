import {playkit} from '../../src/playkit';
import fakeMSE from '../../src/engine/mediaSourceHandlers/fakeMSE';

describe('playkit:playkit', () => {
  it('should play mp4 stream', (done) => {
    let player = playkit();
    let video = document.getElementsByTagName("video")[0];
    video.onplaying = function () {
      true.should.be.true;
      video.pause();
      done();
    };
    video.addEventListener('error', function (err) {
      true.should.be.false;
      done();
    });
    player.play();
  });
});
