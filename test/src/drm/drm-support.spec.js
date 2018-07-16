import DrmSupport from '../../../src/drm/drm-support';
import {DrmScheme} from '../../../src/drm/drm-scheme';
import Env from '../../../src/utils/env';

describe('DrmSupport', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(Env);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return true for widevine on pc/chrome with widevine data', () => {
    Env.device.type = null;
    Env.browser.name = 'Chrome';
    DrmSupport.isProtocolSupported(DrmScheme.WIDEVINE, [{scheme: DrmScheme.WIDEVINE}]).should.be.true;
  });

  it('should return false for widevine on pc/chrome without widevine data', () => {
    Env.device.type = null;
    Env.browser.name = 'Chrome';
    DrmSupport.isProtocolSupported(DrmScheme.WIDEVINE, [{scheme: DrmScheme.FAIRPLAY}]).should.be.false;
  });

  it('should return false for fairplay on pc/chrome with fairplay data', () => {
    Env.device.type = null;
    Env.browser.name = 'Chrome';
    DrmSupport.isProtocolSupported(DrmScheme.FAIRPLAY, [{scheme: DrmScheme.FAIRPLAY}]).should.be.false;
  });

  it('should return true for widevine on mobile/android/chrome with widevine data', () => {
    Env.device.type = 'mobile';
    Env.os.name = 'Android';
    Env.browser.name = 'Chrome';
    DrmSupport.isProtocolSupported(DrmScheme.WIDEVINE, [{scheme: DrmScheme.WIDEVINE}]).should.be.true;
  });

  it('should return true for fairplay on mac/safari with fairplay data', () => {
    Env.device.type = null;
    Env.os.name = 'Mac OS';
    Env.browser.name = 'Safari';
    DrmSupport.isProtocolSupported(DrmScheme.FAIRPLAY, [{scheme: DrmScheme.FAIRPLAY}]).should.be.true;
  });

  it('should return false for fairplay on mobile/safari with fairplay data', () => {
    Env.device.type = 'mobile';
    Env.os.name = 'Mac OS';
    Env.browser.name = 'Safari';
    DrmSupport.isProtocolSupported(DrmScheme.FAIRPLAY, [{scheme: DrmScheme.FAIRPLAY}]).should.be.false;
  });

  it('should return true for widevine on pc/firefox with widevine data', () => {
    Env.device.type = null;
    Env.browser.name = 'Firefox';
    DrmSupport.isProtocolSupported(DrmScheme.WIDEVINE, [{scheme: DrmScheme.WIDEVINE}]).should.be.true;
  });

  it('should return true for playready on pc/edge with playready data', () => {
    Env.device.type = null;
    Env.browser.name = 'Edge';
    DrmSupport.isProtocolSupported(DrmScheme.PLAYREADY, [{scheme: DrmScheme.PLAYREADY}]).should.be.true;
  });

  it('should return true for playready on pc/win8.1/ie with playready data', () => {
    Env.device.type = null;
    Env.os.name = 'Windows';
    Env.os.version = '8.1';
    Env.browser.name = 'IE';
    DrmSupport.isProtocolSupported(DrmScheme.PLAYREADY, [{scheme: DrmScheme.PLAYREADY}]).should.be.true;
  });

  it('should return true for playready on pc/win10/ie with playready data', () => {
    Env.device.type = null;
    Env.os.name = 'Windows';
    Env.os.version = '10';
    Env.browser.name = 'IE';
    DrmSupport.isProtocolSupported(DrmScheme.PLAYREADY, [{scheme: DrmScheme.PLAYREADY}]).should.be.true;
  });

  it('should return false for playready on pc/win7/ie with playready data', () => {
    Env.device.type = null;
    Env.os.name = 'Windows';
    Env.os.version = '7';
    Env.browser.name = 'IE';
    DrmSupport.isProtocolSupported(DrmScheme.PLAYREADY, [{scheme: DrmScheme.PLAYREADY}]).should.be.false;
  });

  it('should return false for widevine on pc/win10/ie with widevine data', () => {
    Env.device.type = null;
    Env.os.name = 'Windows';
    Env.os.version = '7';
    Env.browser.name = 'IE';
    DrmSupport.isProtocolSupported(DrmScheme.WIDEVINE, [{scheme: DrmScheme.WIDEVINE}]).should.be.false;
  });

  it('should return true for fairplay on mobile/safari mobile 11 with fairplay data', () => {
    Env.device.type = 'mobile';
    Env.browser.name = 'Mobile Safari';
    Env.browser.major = '11';
    DrmSupport.isProtocolSupported(DrmScheme.FAIRPLAY, [{scheme: DrmScheme.FAIRPLAY}]).should.be.true;
  });

  it('should return false for fairplay on mobile/safari mobile 9 with fairplay data', () => {
    Env.device.type = 'mobile';
    Env.browser.name = 'Mobile Safari';
    Env.browser.major = '9';
    DrmSupport.isProtocolSupported(DrmScheme.FAIRPLAY, [{scheme: DrmScheme.FAIRPLAY}]).should.be.false;
  });
});
