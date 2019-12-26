import {FairplayDrmHandler} from '../../../../../../src/engines/html5/media-source/adapters/fairplay-drm-handler';
import {removeVideoElementsFromTestPage, createElement} from '../../../../utils/test-utils';
import {Utils} from '../../../../../../src/playkit';
import Error from '../../../../../../src/error/error';
import {RequestType} from '../../../../../../src/request-type';

const fpsDrmData = {licenseUrl: 'LICENSE_URL', certificate: 'fpsCertificate'};

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

  describe('request filter', () => {
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

    const validateFilterError = e => {
      e.severity.should.equal(Error.Severity.CRITICAL);
      e.category.should.equal(Error.Category.NETWORK);
      e.code.should.equal(Error.Code.REQUEST_FILTER_ERROR);
      e.data.should.equal('error');
    };

    it('should apply void filter for license', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          requestFilter: function(type, request) {
            if (type === RequestType.LICENSE) {
              request.url += '&test';
            }
          }
        }
      });
      sandbox.stub(XMLHttpRequest.prototype, 'open', (request, url) => {
        try {
          url.indexOf('&test').should.be.gt(-1);
          done();
        } catch (e) {
          done(e);
        }
      });
      const fp = new FairplayDrmHandler(videoElement, fpsDrmData, () => {});
      fp._onWebkitKeyMessage({
        message: new Uint8Array(new ArrayBuffer(1))
      });
    });

    it('should apply promise filter for license', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          requestFilter: function(type, request) {
            if (type === RequestType.LICENSE) {
              return new Promise(resolve => {
                request.url += '&test';
                resolve(request);
              });
            }
          }
        }
      });
      sandbox.stub(XMLHttpRequest.prototype, 'open', (request, url) => {
        try {
          url.indexOf('&test').should.be.gt(-1);
          done();
        } catch (e) {
          done(e);
        }
      });
      const fp = new FairplayDrmHandler(videoElement, fpsDrmData, () => {});
      fp._onWebkitKeyMessage({
        message: new Uint8Array(new ArrayBuffer(1))
      });
    });

    it('should handle error thrown from void filter', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          requestFilter: function() {
            throw 'error';
          }
        }
      });
      const fp = new FairplayDrmHandler(videoElement, fpsDrmData, e => {
        try {
          validateFilterError(e);
          done();
        } catch (e) {
          done(e);
        }
      });
      fp._onWebkitKeyMessage({
        message: new Uint8Array(new ArrayBuffer(1))
      });
    });

    it('should handle error thrown from promise filter', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          requestFilter: function() {
            return new Promise(() => {
              throw 'error';
            });
          }
        }
      });
      const fp = new FairplayDrmHandler(videoElement, fpsDrmData, e => {
        try {
          validateFilterError(e);
          done();
        } catch (e) {
          done(e);
        }
      });
      fp._onWebkitKeyMessage({
        message: new Uint8Array(new ArrayBuffer(1))
      });
    });

    it('should handle error rejected from promise filter', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          requestFilter: function() {
            return new Promise((resolve, reject) => {
              reject('error');
            });
          }
        }
      });
      const fp = new FairplayDrmHandler(videoElement, fpsDrmData, e => {
        try {
          validateFilterError(e);
          done();
        } catch (e) {
          done(e);
        }
      });
      fp._onWebkitKeyMessage({
        message: new Uint8Array(new ArrayBuffer(1))
      });
    });
  });

  describe('response filter', () => {
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

    const validateFilterError = e => {
      e.severity.should.equal(Error.Severity.CRITICAL);
      e.category.should.equal(Error.Category.NETWORK);
      e.code.should.equal(Error.Code.RESPONSE_FILTER_ERROR);
      e.data.should.equal('error');
    };

    it('should apply void filter for license', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          responseFilter: function(type, response) {
            if (type === RequestType.LICENSE) {
              response.data += '&test';
            }
          }
        }
      });
      const fp = new FairplayDrmHandler(videoElement, fpsDrmData, () => {});
      fp._keySession = {
        update: data => {
          try {
            data.indexOf('&test').should.be.gt(-1);
            done();
          } catch (e) {
            done(e);
          }
        }
      };
      fp._licenseRequestLoaded({
        target: {
          response: {}
        }
      });
    });

    it('should apply promise filter for license', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          responseFilter: function(type, response) {
            if (type === RequestType.LICENSE) {
              return new Promise(resolve => {
                response.data += '&test';
                resolve(response);
              });
            }
          }
        }
      });
      const fp = new FairplayDrmHandler(videoElement, fpsDrmData, () => {});
      fp._keySession = {
        update: data => {
          try {
            data.indexOf('&test').should.be.gt(-1);
            done();
          } catch (e) {
            done(e);
          }
        }
      };
      fp._licenseRequestLoaded({
        target: {
          response: {}
        }
      });
    });

    it('should handle error thrown from void filter', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          responseFilter: function() {
            throw 'error';
          }
        }
      });
      const fp = new FairplayDrmHandler(videoElement, fpsDrmData, e => {
        try {
          validateFilterError(e);
          done();
        } catch (e) {
          done(e);
        }
      });
      fp._licenseRequestLoaded({
        target: {
          response: {}
        }
      });
    });

    it('should handle error thrown from promise filter', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          responseFilter: function() {
            return new Promise(() => {
              throw 'error';
            });
          }
        }
      });
      const fp = new FairplayDrmHandler(videoElement, fpsDrmData, e => {
        try {
          validateFilterError(e);
          done();
        } catch (e) {
          done(e);
        }
      });
      fp._licenseRequestLoaded({
        target: {
          response: {}
        }
      });
    });

    it('should handle error rejected from promise filter', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          responseFilter: function() {
            return new Promise((resolve, reject) => {
              reject('error');
            });
          }
        }
      });
      const fp = new FairplayDrmHandler(videoElement, fpsDrmData, e => {
        try {
          validateFilterError(e);
          done();
        } catch (e) {
          done(e);
        }
      });
      fp._licenseRequestLoaded({
        target: {
          response: {}
        }
      });
    });
  });
});
