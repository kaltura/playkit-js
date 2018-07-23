import {DrmScheme} from '../../../src/drm/drm-scheme';

describe('DrmScheme', () => {
  it('should equal all possible drm schemes', () => {
    DrmScheme.should.deep.equals({
      WIDEVINE: 'com.widevine.alpha',
      PLAYREADY: 'com.microsoft.playready',
      FAIRPLAY: 'com.apple.fairplay'
    });
  });
});
