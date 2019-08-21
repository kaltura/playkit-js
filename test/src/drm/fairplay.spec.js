import FairPlay from '../../../src/drm/fairplay';

const fpDrmData = [{licenseUrl: 'LICENSE_URL', scheme: FairPlay.DrmScheme.FAIRPLAY}];
const wwDrmData = [{licenseUrl: 'LICENSE_URL', scheme: FairPlay.DrmScheme.WIDEVINE}];

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
});
