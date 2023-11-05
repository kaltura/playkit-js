import FairPlay from '../../../src/drm/fairplay';
import {DrmScheme} from '../../../src/drm/drm-scheme';

const fpDrmData = [{licenseUrl: 'LICENSE_URL', scheme: DrmScheme.FAIRPLAY}];
const wwDrmData = [{licenseUrl: 'LICENSE_URL', scheme: DrmScheme.WIDEVINE}];

describe('FairPlay', function () {
  describe('isConfigured', function () {
    it('should return true for fairplay data if configured', function () {
      FairPlay.isConfigured(fpDrmData, {keySystem: DrmScheme.FAIRPLAY}).should.be.true;
    });

    it('should return false for fairplay data if not configured', function () {
      FairPlay.isConfigured(fpDrmData, {keySystem: DrmScheme.WIDEVINE}).should.be.false;
    });

    it('should return false for non-fairplay data even configured', function () {
      FairPlay.isConfigured(wwDrmData, {keySystem: DrmScheme.FAIRPLAY}).should.be.false;
    });
  });
});
