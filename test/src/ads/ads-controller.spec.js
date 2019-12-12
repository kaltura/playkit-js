import SourcesConfig from '../configs/sources';
import {getConfigStructure} from '../utils/test-utils';
import Player from '../../../src/player';
import {CustomEventType} from '../../../src/event/event-type';
import {AdEventType} from '../../../src/ads/ad-event-type';
import Error from '../../../src/error/error';

describe('AdsController', () => {
  let config, player, sandbox;

  before(() => {
    config = getConfigStructure();
  });

  beforeEach(() => {
    player = new Player(config);
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    player.destroy();
    sandbox.restore();
  });

  describe('advertising config', () => {
    it('Should fire AD_MANIFEST_LOADED with the valid breaks only', done => {
      const fakeCtrl = {
        playAdNow: () => {}
      };
      sandbox.stub(player._controllerProvider, 'getAdsControllers').callsFake(function() {
        return [fakeCtrl];
      });
      player.addEventListener(AdEventType.AD_MANIFEST_LOADED, event => {
        try {
          event.payload.adBreaksPosition.should.deep.equal([-1, 0, 1, 2, 2]);
          done(0);
        } catch (e) {
          done(e);
        }
      });
      player.configure({
        advertising: {
          adBreaks: [
            {position: 0, ads: [{}]},
            {position: '1', ads: [{}]},
            {position: 1, ads: []},
            {position: 2, ads: [{}]},
            {position: 2, ads: [{}]},
            {position: 1, ads: [{}]},
            {position: -1, ads: [{}]}
          ]
        }
      });
    });

    it('Should not fire AD_MANIFEST_LOADED for empty list', done => {
      const fakeCtrl = {
        playAdNow: () => {}
      };
      sandbox.stub(player._controllerProvider, 'getAdsControllers').callsFake(function() {
        return [fakeCtrl];
      });
      player.addEventListener(AdEventType.AD_MANIFEST_LOADED, () => {
        done(new Error('Should not fireAD_MANIFEST_LOADED'));
      });
      player.configure({
        advertising: {
          adBreaks: [{position: '1', ads: [{}]}, {position: 1, ads: []}]
        }
      });
      setTimeout(done);
    });

    it('Should play pre-roll, 2 mid-rolls and post-roll', done => {
      const adBreaks = [[{url: ['PRE_ROLL']}], [{url: ['MID_ROLL_1']}], [{url: ['MID_ROLL_2']}], [{url: ['POST_ROLL']}]];
      let adBreakIndex = 0;
      const fakeCtrl = {
        playAdNow: ads => {
          try {
            player._adsController && (player._adsController._adIsLoading = false);
            ads.should.deep.equal(adBreaks[adBreakIndex]);
            adBreakIndex++;
            if (adBreakIndex === adBreaks.length) {
              done();
            }
          } catch (e) {
            done(e);
          }
        },
        onPlaybackEnded: () => {
          return Promise.resolve();
        }
      };
      sandbox.stub(player._controllerProvider, 'getAdsControllers').callsFake(function() {
        return [fakeCtrl];
      });
      player.configure({
        advertising: {
          adBreaks: [
            {position: 0, ads: adBreaks[0]},
            {position: 1, ads: adBreaks[1]},
            {position: 2, ads: adBreaks[2]},
            {position: -1, ads: adBreaks[3]}
          ]
        }
      });
      player.configure({sources: SourcesConfig.Mp4});
      player.play();
    });

    it('Should skip the first midroll (snap-back)', done => {
      const adBreaks = [[{url: ['PRE_ROLL']}], [{url: ['MID_ROLL_1']}], [{url: ['POST_ROLL']}]];
      let adBreakIndex = 0;
      const fakeCtrl = {
        playAdNow: ads => {
          try {
            player._adsController && (player._adsController._adIsLoading = false);
            ads.should.deep.equal(adBreaks[adBreakIndex]);
            adBreakIndex++;
            if (adBreakIndex === adBreaks.length) {
              done();
            }
          } catch (e) {
            done(e);
          }
        },
        onPlaybackEnded: () => {
          return Promise.resolve();
        }
      };
      sandbox.stub(player._controllerProvider, 'getAdsControllers').callsFake(function() {
        return [fakeCtrl];
      });
      player.configure({
        advertising: {
          adBreaks: [
            {position: 0, ads: adBreaks[0]},
            {position: 1, ads: adBreaks[1]},
            {position: 2, ads: adBreaks[1]},
            {position: -1, ads: adBreaks[2]}
          ]
        }
      });
      player.configure({sources: SourcesConfig.Mp4});
      player.addEventListener(CustomEventType.FIRST_PLAY, () => {
        player.currentTime = 2;
      });
      player.play();
    });

    it('Should play the in reverse (snap-back)', done => {
      const adBreaks = [[{url: ['PRE_ROLL']}], [{url: ['MID_ROLL_3']}], [{url: ['MID_ROLL_2']}], [{url: ['MID_ROLL_1']}], [{url: ['POST_ROLL']}]];
      let adBreakIndex = 0;
      const fakeCtrl = {
        playAdNow: ads => {
          try {
            player._adsController && (player._adsController._adIsLoading = false);
            ads.should.deep.equal(adBreaks[adBreakIndex]);
            adBreakIndex++;
            if (adBreakIndex === 2) {
              player.currentTime = 2.5;
            }
            if (adBreakIndex === 3) {
              player.currentTime = 0;
            }
            if (adBreakIndex === adBreaks.length) {
              done();
            }
          } catch (e) {
            done(e);
          }
        },
        onPlaybackEnded: () => {
          return Promise.resolve();
        }
      };
      sandbox.stub(player._controllerProvider, 'getAdsControllers').callsFake(function() {
        return [fakeCtrl];
      });
      player.configure({
        advertising: {
          adBreaks: [
            {position: 0, ads: adBreaks[0]},
            {position: 1, ads: adBreaks[3]},
            {position: 2, ads: adBreaks[2]},
            {position: 3, ads: adBreaks[1]},
            {position: -1, ads: adBreaks[4]}
          ]
        }
      });
      player.configure({sources: SourcesConfig.Mp4});
      player.addEventListener(CustomEventType.FIRST_PLAY, () => {
        player.currentTime = 3;
      });
      player.play();
    });

    it('Should skip the pre-roll and first mid-roll as playback.startTime configured', done => {
      const adBreaks = [[{url: ['PRE_ROLL']}], [{url: ['MID_ROLL_1']}], [{url: ['MID_ROLL_2']}], [{url: ['POST_ROLL']}]];
      let adBreakIndex = 2;
      const fakeCtrl = {
        playAdNow: ads => {
          try {
            player._adsController && (player._adsController._adIsLoading = false);
            ads.should.deep.equal(adBreaks[adBreakIndex]);
            adBreakIndex++;
            if (adBreakIndex === adBreaks.length) {
              done();
            }
          } catch (e) {
            done(e);
          }
        },
        onPlaybackEnded: () => {
          return Promise.resolve();
        }
      };
      sandbox.stub(player._controllerProvider, 'getAdsControllers').callsFake(function() {
        return [fakeCtrl];
      });
      player.configure({
        playback: {
          startTime: 1
        },
        advertising: {
          adBreaks: [
            {position: 0, ads: adBreaks[0]},
            {position: 1, ads: adBreaks[1]},
            {position: 2, ads: adBreaks[2]},
            {position: -1, ads: adBreaks[3]}
          ]
        }
      });
      player.configure({sources: SourcesConfig.Mp4});
      player.play();
    });

    it('Should skip the pre-roll and first mid-roll as playAdsAfterTime configured', done => {
      const adBreaks = [[{url: ['PRE_ROLL']}], [{url: ['MID_ROLL_1']}], [{url: ['MID_ROLL_2']}], [{url: ['POST_ROLL']}]];
      let adBreakIndex = 2;
      const fakeCtrl = {
        playAdNow: ads => {
          try {
            player._adsController && (player._adsController._adIsLoading = false);
            ads.should.deep.equal(adBreaks[adBreakIndex]);
            adBreakIndex++;
            if (adBreakIndex === adBreaks.length) {
              done();
            }
          } catch (e) {
            done(e);
          }
        },
        onPlaybackEnded: () => {
          return Promise.resolve();
        }
      };
      sandbox.stub(player._controllerProvider, 'getAdsControllers').callsFake(function() {
        return [fakeCtrl];
      });
      player.configure({
        advertising: {
          playAdsAfterTime: 1,
          adBreaks: [
            {position: 0, ads: adBreaks[0]},
            {position: 1, ads: adBreaks[1]},
            {position: 2, ads: adBreaks[2]},
            {position: -1, ads: adBreaks[3]}
          ]
        }
      });
      player.configure({sources: SourcesConfig.Mp4});
      player.play();
    });

    it('Should not skip even playback.startTime since playAdsAfterTime configured', done => {
      const adBreaks = [[{url: ['PRE_ROLL']}], [{url: ['MID_ROLL_1']}], [{url: ['MID_ROLL_2']}], [{url: ['POST_ROLL']}]];
      let adBreakIndex = 0;
      const fakeCtrl = {
        playAdNow: ads => {
          try {
            player._adsController && (player._adsController._adIsLoading = false);
            ads.should.deep.equal(adBreaks[adBreakIndex]);
            adBreakIndex++;
            if (adBreakIndex === adBreaks.length) {
              done();
            }
          } catch (e) {
            done(e);
          }
        },
        onPlaybackEnded: () => {
          return Promise.resolve();
        }
      };
      sandbox.stub(player._controllerProvider, 'getAdsControllers').callsFake(function() {
        return [fakeCtrl];
      });
      player.configure({
        playback: {
          startTime: 1
        },
        advertising: {
          playAdsAfterTime: -1,
          adBreaks: [
            {position: 0, ads: adBreaks[0]},
            {position: 1, ads: adBreaks[1]},
            {position: 2, ads: adBreaks[2]},
            {position: -1, ads: adBreaks[3]}
          ]
        }
      });
      player.configure({sources: SourcesConfig.Mp4});
      player.play();
    });
  });

  describe('playAdNow', () => {
    it('Should play pre-roll', done => {
      const preroll = [{url: ['PRE_ROLL']}];
      const fakeCtrl = {
        playAdNow: ads => {
          try {
            ads.should.deep.equal(preroll);
            done();
          } catch (e) {
            done(e);
          }
        }
      };
      sandbox.stub(player._controllerProvider, 'getAdsControllers').callsFake(function() {
        return [fakeCtrl];
      });
      player.configure({sources: SourcesConfig.Mp4});
      player.ads.playAdNow(preroll);
    });

    it('Should play mid-roll', done => {
      const midroll = [{url: ['MID_ROLL']}];
      const fakeCtrl = {
        playAdNow: ads => {
          try {
            ads.should.deep.equal(midroll);
            done();
          } catch (e) {
            done(e);
          }
        }
      };
      sandbox.stub(player._controllerProvider, 'getAdsControllers').callsFake(function() {
        return [fakeCtrl];
      });
      player.configure({sources: SourcesConfig.Mp4});
      player.addEventListener(CustomEventType.FIRST_PLAY, () => {
        player.ads.playAdNow(midroll);
      });
      player.play();
    });

    it('Should not play mid-roll while ad break', done => {
      const midroll = [{url: ['MID_ROLL']}];
      const fakeCtrl = {
        playAdNow: () => {
          done(new Error('Should not play ad while ad break'));
        }
      };
      sandbox.stub(player._controllerProvider, 'getAdsControllers').callsFake(function() {
        return [fakeCtrl];
      });
      player.configure({sources: SourcesConfig.Mp4});
      player.addEventListener(CustomEventType.FIRST_PLAY, () => {
        player._adsController._adBreak = true;
        player.ads.playAdNow(midroll);
        setTimeout(done);
      });
      player.play();
    });
  });
});
