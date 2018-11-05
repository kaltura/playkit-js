import {FairplayDrmHandler} from '../../../../../../src/engines/html5/media-source/adapters/fairplay-drm-handler';
import {removeVideoElementsFromTestPage, createElement} from '../../../../utils/test-utils';

const fpsDrmData = [{licenseUrl: 'LICENSE_URL', certificate: 'fpsCertificate'}];

describe('Fairplay Drm Handler', function() {
  describe('constructor', function() {
    let videoId = 'myVideoElement';
    let videoElement;
    let sandbox;

    beforeEach(function() {
      sandbox = sinon.sandbox.create();
      createElement('video', videoId);
      videoElement = document.getElementById(videoId);
    });

    afterEach(function() {
      sandbox = sandbox.restore();
      removeVideoElementsFromTestPage();
    });

    it('should register the webkitneedkey event on the video element', function() {
      let spy = sandbox.spy(HTMLVideoElement.prototype, 'addEventListener');
      new FairplayDrmHandler(videoElement, fpsDrmData, () => {});
      spy.should.have.been.calledOnce;
      spy.should.have.been.calledWithMatch(FairplayDrmHandler.WebkitEvents.NEED_KEY);
    });
  });

  describe('_validateResponse', function() {
    it('should return an object with valid=true', () => {
      let drmResponse = {
        ckc: '123',
        expire: '98798798791'
      };
      let validationResponse = FairplayDrmHandler._validateResponse(drmResponse);
      validationResponse.valid.should.equals(true);
    });

    it('should return an object with valid=false, error', () => {
      let drmResponse = {
        message: 'internal, error'
      };
      let validationResponse = FairplayDrmHandler._validateResponse(drmResponse);
      validationResponse.valid.should.equals(false);
    });

    it('should return an object with valid=false, ckc is empty', () => {
      let drmResponse = {
        ckc: ''
      };
      let validationResponse = FairplayDrmHandler._validateResponse(drmResponse);
      validationResponse.valid.should.equals(false);
    });

    it('should return an object with valid=false, status code is 500 ', () => {
      let drmResponse = {
        status_code: 500
      };
      let validationResponse = FairplayDrmHandler._validateResponse(drmResponse);
      validationResponse.valid.should.equals(false);
    });
  });
});
