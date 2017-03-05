import chai from 'chai';
import {playkit} from '../src/playkit';
import hls from '../src/engine/mediaSourceHandlers/hls';
import fakeMSE from '../src/engine/mediaSourceHandlers/fakeMSE';
import shaka from '../src/engine/mediaSourceHandlers/shaka';

chai.should();

describe('playkit:playkit', () => {

  it('should play dash stream', (done) => {
    let player = playkit({
      mimeType: "dash",
      source: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd"
    });
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

  it('should play hls stream', (done) => {
    let player = playkit({
      mimeType: "hls",
      source:"http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8"
    });
    let video = document.getElementsByTagName("video")[1];
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

  it('should play mp4 stream', (done) => {
    let player = playkit();
    let video = document.getElementsByTagName("video")[2];
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
