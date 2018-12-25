import FairPlay from '../../../src/drm/fairplay';
import Env from '../../../src/utils/env';

const BROWSER: string = Env.browser.name;
const fpDrmData = [{licenseUrl: 'LICENSE_URL', scheme: FairPlay.DrmScheme.FAIRPLAY}];
const wwDrmData = [{licenseUrl: 'LICENSE_URL', scheme: FairPlay.DrmScheme.WIDEVINE}];

function isValidEnvForFairPlay() {
  return BROWSER === 'Safari' && FairPlay.DrmSupport._Browsers['Safari']() === FairPlay.DrmScheme.FAIRPLAY;
}

describe('FairPlay', function() {
  describe('isConfigured', function() {
    it('should return true for fairplay data if configured', function() {
      FairPlay.isConfigured(fpDrmData, {keySystem: FairPlay.DrmScheme.FAIRPLAY}).should.be.true;
    });

    it('should return false for fairplay data if not configured', function() {
      FairPlay.isConfigured(fpDrmData, {keySystem: FairPlay.DrmScheme.WIDEVINE}).should.be.false;
    });

    it('should return false for non-fairplay data even configured', function() {
      FairPlay.isConfigured(wwDrmData, {keySystem: FairPlay.DrmScheme.FAIRPLAY}).should.be.false;
    });
  });

  describe('canPlayDrm', function() {
    it('should return true for fairplay data on valid fairplay env and false otherwise', function() {
      if (isValidEnvForFairPlay()) {
        FairPlay.canPlayDrm(fpDrmData).should.be.true;
      } else {
        FairPlay.canPlayDrm(fpDrmData).should.be.false;
      }
    });

    it('should return false for non-fairplay data in any case', function() {
      FairPlay.canPlayDrm(wwDrmData).should.be.false;
    });
  });
});
