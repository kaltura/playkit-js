import {playkit} from '../../src/playkit';

describe('playkit:playkit', function () {

  this.timeout(10000);
  let config;

  before(() => {
      config = {
        "sources": [
          {
            "mimetype": "video/mp4",
            "src": "http://techslides.com/demos/sample-videos/small.mp4",
            "id": "1_rsrdfext_10081,url"
          },
          {
            "src": "https://cdnapisec.kaltura.com/p/1082342/sp/108234200/playManifest/entryId/1_rsrdfext/protocol/https/format/hdnetworkmanifest/falvorIds/1_ha0nqwz8,1_gw7u4nf1,1_rql6sqaa,1_sufd1yd9,1_9xvkk7a5,1_4typ4pat,1_n75294r4/ks/OGM0ZWM0Y2IwOWI5ZjM0MDcyZmQ3YmYxNzBiMGEwNGYxNWQ0ZTcyOXwxMDgyMzQyOzEwODIzNDI7MTQ5MDExNTg5MzswOzE0OTAwMjk0OTMuMTY3ODswO3ZpZXc6Kix3aWRnZXQ6MTs7/a.mp4",
            "id": "1_rsrdfext_10101,hdnetworkmanifest"
          },
          {
            "mimetype": "application/x-mpegURL",
            "src": "https://cdnapisec.kaltura.com/p/1082342/sp/108234200/playManifest/entryId/1_rsrdfext/protocol/https/format/applehttp/falvorIds/1_ha0nqwz8,1_gw7u4nf1,1_rql6sqaa,1_sufd1yd9,1_9xvkk7a5,1_4typ4pat,1_n75294r4/ks/OGM0ZWM0Y2IwOWI5ZjM0MDcyZmQ3YmYxNzBiMGEwNGYxNWQ0ZTcyOXwxMDgyMzQyOzEwODIzNDI7MTQ5MDExNTg5MzswOzE0OTAwMjk0OTMuMTY3ODswO3ZpZXc6Kix3aWRnZXQ6MTs7/a.m3u8",
            "id": "1_rsrdfext_10091,applehttp"
          },
          {
            "mimetype": "application/dash+xml",
            "src": "https://cdnapisec.kaltura.com/p/1082342/sp/108234200/playManifest/entryId/1_rsrdfext/protocol/https/format/mpegdash/falvorIds/1_ha0nqwz8,1_gw7u4nf1,1_rql6sqaa,1_sufd1yd9,1_9xvkk7a5,1_4typ4pat,1_n75294r4/ks/OGM0ZWM0Y2IwOWI5ZjM0MDcyZmQ3YmYxNzBiMGEwNGYxNWQ0ZTcyOXwxMDgyMzQyOzEwODIzNDI7MTQ5MDExNTg5MzswOzE0OTAwMjk0OTMuMTY3ODswO3ZpZXc6Kix3aWRnZXQ6MTs7/a.mpd",
            "id": "1_rsrdfext_11611,mpegdash"
          }
        ]
      };
    }
  );
  it('should play mp4 stream', (done) => {
    let player = playkit(config);
    let video = document.getElementsByTagName("video")[0];
    video.onplaying = function () {
      player.destroy();
      done();
    };
    video.addEventListener('error', function (err) {
      player.destroy();
      should.fail();
    });
    player.load();
    player.play();
  });
});
