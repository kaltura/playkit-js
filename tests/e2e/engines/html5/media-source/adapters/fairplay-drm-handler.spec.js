import {FairPlayDrmHandler} from '../../../../../../src/engines/html5/media-source/adapters/fairplay-drm-handler';
import {createElement, removeVideoElementsFromTestPage} from '../../../../../utils/test-utils';
import {Utils} from '../../../../../../src/playkit';
import Error from '../../../../../../src/error/error';
import {RequestType} from '../../../../../../src/enums/request-type';

const fpsDrmData = {licenseUrl: 'LICENSE_URL', certificate: 'fpsCertificate'};

describe('Fairplay Drm Handler', function () {
  describe('constructor', function () {
    let videoId = 'myVideoElement';
    let videoElement;
    let sandbox;

    beforeEach(function () {
      sandbox = sinon.createSandbox();
      createElement('video', videoId);
      videoElement = document.getElementById(videoId);
    });

    afterEach(function () {
      sandbox.restore();
      removeVideoElementsFromTestPage();
    });

    it('should register the webkitneedkey event on the video element', function () {
      let spy = sandbox.spy(HTMLVideoElement.prototype, 'addEventListener');
      new FairPlayDrmHandler(videoElement, fpsDrmData, () => {});
      spy.should.have.been.calledOnce;
      spy.should.have.been.calledWithMatch(FairPlayDrmHandler.WebkitEvents.NEED_KEY);
    });
  });

  describe('_validateResponse', function () {
    it('should return an object with valid=true', () => {
      let drmResponse = {
        ckc: '123',
        expire: '98798798791'
      };
      let validationResponse = FairPlayDrmHandler._validateResponse(drmResponse);
      validationResponse.valid.should.equals(true);
    });

    it('should return an object with valid=false, error', () => {
      let drmResponse = {
        message: 'internal, error'
      };
      let validationResponse = FairPlayDrmHandler._validateResponse(drmResponse);
      validationResponse.valid.should.equals(false);
    });

    it('should return an object with valid=false, ckc is empty', () => {
      let drmResponse = {
        ckc: ''
      };
      let validationResponse = FairPlayDrmHandler._validateResponse(drmResponse);
      validationResponse.valid.should.equals(false);
    });

    it('should return an object with valid=false, status code is 500 ', () => {
      let drmResponse = {
        status_code: 500
      };
      let validationResponse = FairPlayDrmHandler._validateResponse(drmResponse);
      validationResponse.valid.should.equals(false);
    });
  });

  describe('multiple key sessions (key rotation / catch-up)', () => {
    const KIDS = ['a16dc242-6b32-35fe-a179-e341dfdf26dc', '64a35078-70c5-361e-af9a-994a56ed8bce', '144b8618-7e66-3004-a001-6c3d20ab2846'];
    let videoElement;
    let sandbox;
    let sessions;
    let requests;
    let fp;

    const createInitData = kid => {
      const str = `skd://${kid}`;
      const array = new Uint16Array(str.length);
      for (let i = 0; i < str.length; i++) {
        array[i] = str.charCodeAt(i);
      }
      return new Uint8Array(array.buffer);
    };

    const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0));

    const needKey = kid => videoElement.dispatchEvent(Object.assign(new Event('webkitneedkey'), {initData: createInitData(kid)}));

    const keyMessage = async session => {
      session.dispatchEvent(Object.assign(new Event('webkitkeymessage'), {message: new Uint8Array(new ArrayBuffer(1))}));
      await flushPromises();
    };

    const respond = request => {
      Object.defineProperty(request, 'response', {value: `ckc-${request.kid}`});
      request.dispatchEvent(new Event('load'));
      return flushPromises();
    };

    beforeEach(function () {
      sandbox = sinon.createSandbox();
      createElement('video', 'myVideoElement');
      videoElement = document.getElementById('myVideoElement');
      sessions = [];
      requests = [];
      videoElement.webkitKeys = {
        createSession: () => {
          const session = new EventTarget();
          session.update = sandbox.spy();
          session.close = sandbox.spy();
          sessions.push(session);
          return session;
        }
      };
      sandbox.stub(XMLHttpRequest.prototype, 'open');
      sandbox.stub(XMLHttpRequest.prototype, 'setRequestHeader');
      sandbox.stub(XMLHttpRequest.prototype, 'send').callsFake(function () {
        requests.push(this);
      });
      const config = {
        licenseUrl: 'LICENSE_URL',
        certificate: 'fpsCertificate',
        useKIDHeader: true,
        network: {
          responseFilter: () => {}
        }
      };
      fp = new FairPlayDrmHandler(videoElement, config, () => {}, () => {});
    });

    afterEach(function () {
      sandbox.restore();
      removeVideoElementsFromTestPage();
    });

    const sendRequestFor = async kid => {
      needKey(kid);
      await keyMessage(sessions[sessions.length - 1]);
      requests[requests.length - 1].kid = kid;
    };

    it('should update each session with the license of its own key when responses arrive in order', async () => {
      await sendRequestFor(KIDS[0]);
      await sendRequestFor(KIDS[1]);
      sessions.length.should.equal(2);
      requests.length.should.equal(2);

      await respond(requests[0]);
      await respond(requests[1]);

      sessions[0].update.should.have.been.calledOnceWithExactly(`ckc-${KIDS[0]}`);
      sessions[1].update.should.have.been.calledOnceWithExactly(`ckc-${KIDS[1]}`);
    });

    it('should update each session with the license of its own key when responses arrive out of order', async () => {
      await sendRequestFor(KIDS[0]);
      await sendRequestFor(KIDS[1]);
      await sendRequestFor(KIDS[2]);
      sessions.length.should.equal(3);

      await respond(requests[2]);
      await respond(requests[0]);
      await respond(requests[1]);

      sessions[0].update.should.have.been.calledOnceWithExactly(`ckc-${KIDS[0]}`);
      sessions[1].update.should.have.been.calledOnceWithExactly(`ckc-${KIDS[1]}`);
      sessions[2].update.should.have.been.calledOnceWithExactly(`ckc-${KIDS[2]}`);
    });

    it('should close every key session on destroy', async () => {
      needKey(KIDS[0]);
      needKey(KIDS[1]);
      needKey(KIDS[2]);
      sessions.length.should.equal(3);

      fp.destroy();

      sessions.forEach(session => session.close.should.have.been.calledOnce);
    });
  });

  describe('request filter', () => {
    let videoId = 'myVideoElement';
    let videoElement;
    let sandbox;

    beforeEach(function () {
      sandbox = sinon.createSandbox();
      createElement('video', videoId);
      videoElement = document.getElementById(videoId);
    });

    afterEach(function () {
      sandbox.restore();
      removeVideoElementsFromTestPage();
    });

    const validateFilterError = e => {
      e.severity.should.equal(Error.Severity.CRITICAL);
      e.category.should.equal(Error.Category.NETWORK);
      e.code.should.equal(Error.Code.REQUEST_FILTER_ERROR);
      e.data.should.equal('error');
    };

    it('should pass the params to the request filter', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          requestFilter: function (type, request) {
            try {
              type.should.equal(RequestType.LICENSE);
              request.url.should.equal(fpsDrmData.licenseUrl);
              request.body.should.be.exist;
              request.headers.should.be.exist;
            } catch (e) {
              done(e);
            }
          }
        }
      });
      sandbox.stub(XMLHttpRequest.prototype, 'open').callsFake(() => {
        done();
      });
      const fp = new FairPlayDrmHandler(videoElement, fpsDrmData, () => {});
      fp._onWebkitKeyMessage({
        message: new Uint8Array(new ArrayBuffer(1))
      });
    });

    it('should apply void filter for license', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          requestFilter: function (type, request) {
            if (type === RequestType.LICENSE) {
              request.url += '&test';
            }
          }
        }
      });
      sandbox.stub(XMLHttpRequest.prototype, 'open').callsFake((request, url) => {
        try {
          url.indexOf('&test').should.be.gt(-1);
          done();
        } catch (e) {
          done(e);
        }
      });
      const fp = new FairPlayDrmHandler(videoElement, fpsDrmData, () => {});
      fp._onWebkitKeyMessage({
        message: new Uint8Array(new ArrayBuffer(1))
      });
    });

    it('should apply promise filter for license', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          requestFilter: function (type, request) {
            if (type === RequestType.LICENSE) {
              return new Promise(resolve => {
                request.url += '&test';
                resolve(request);
              });
            }
          }
        }
      });
      sandbox.stub(XMLHttpRequest.prototype, 'open').callsFake((request, url) => {
        try {
          url.indexOf('&test').should.be.gt(-1);
          done();
        } catch (e) {
          done(e);
        }
      });
      const fp = new FairPlayDrmHandler(videoElement, fpsDrmData, () => {});
      fp._onWebkitKeyMessage({
        message: new Uint8Array(new ArrayBuffer(1))
      });
    });

    it('should handle error thrown from void filter', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          requestFilter: function () {
            throw 'error';
          }
        }
      });
      const fp = new FairPlayDrmHandler(videoElement, fpsDrmData, e => {
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
          requestFilter: function () {
            return new Promise(() => {
              throw 'error';
            });
          }
        }
      });
      const fp = new FairPlayDrmHandler(videoElement, fpsDrmData, e => {
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
          requestFilter: function () {
            return new Promise((resolve, reject) => {
              reject('error');
            });
          }
        }
      });
      const fp = new FairPlayDrmHandler(videoElement, fpsDrmData, e => {
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

    beforeEach(function () {
      sandbox = sinon.createSandbox();
      createElement('video', videoId);
      videoElement = document.getElementById(videoId);
    });

    afterEach(function () {
      sandbox.restore();
      removeVideoElementsFromTestPage();
    });

    const validateFilterError = e => {
      e.severity.should.equal(Error.Severity.CRITICAL);
      e.category.should.equal(Error.Category.NETWORK);
      e.code.should.equal(Error.Code.RESPONSE_FILTER_ERROR);
      e.data.should.equal('error');
    };

    it('should pass the params to the response filter', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          responseFilter: function (type, response) {
            try {
              type.should.equal(RequestType.LICENSE);
              response.url.should.be.exist;
              response.originalUrl.should.equal(fpsDrmData.licenseUrl);
              response.data.should.be.exist;
              response.headers.should.be.exist;
              done();
            } catch (e) {
              done(e);
            }
          }
        }
      });
      const fp = new FairPlayDrmHandler(videoElement, fpsDrmData, () => {});
      fp._licenseRequestLoaded({
        target: new XMLHttpRequest()
      });
    });

    it('should apply void filter for license', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          responseFilter: function (type, response) {
            if (type === RequestType.LICENSE) {
              response.data += '&test';
            }
          }
        }
      });
      const fp = new FairPlayDrmHandler(videoElement, fpsDrmData, () => {});
      const session = {
        update: data => {
          try {
            data.indexOf('&test').should.be.gt(-1);
            done();
          } catch (e) {
            done(e);
          }
        }
      };
      fp._licenseRequestLoaded(
        {
          target: new XMLHttpRequest()
        },
        session
      );
    });

    it('should apply promise filter for license', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          responseFilter: function (type, response) {
            if (type === RequestType.LICENSE) {
              return new Promise(resolve => {
                response.data += '&test';
                resolve(response);
              });
            }
          }
        }
      });
      const fp = new FairPlayDrmHandler(videoElement, fpsDrmData, () => {});
      const session = {
        update: data => {
          try {
            data.indexOf('&test').should.be.gt(-1);
            done();
          } catch (e) {
            done(e);
          }
        }
      };
      fp._licenseRequestLoaded(
        {
          target: new XMLHttpRequest()
        },
        session
      );
    });

    it('should handle error thrown from void filter', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          responseFilter: function () {
            throw 'error';
          }
        }
      });
      const fp = new FairPlayDrmHandler(videoElement, fpsDrmData, e => {
        try {
          validateFilterError(e);
          done();
        } catch (e) {
          done(e);
        }
      });
      fp._licenseRequestLoaded({
        target: new XMLHttpRequest()
      });
    });

    it('should handle error thrown from promise filter', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          responseFilter: function () {
            return new Promise(() => {
              throw 'error';
            });
          }
        }
      });
      const fp = new FairPlayDrmHandler(videoElement, fpsDrmData, e => {
        try {
          validateFilterError(e);
          done();
        } catch (e) {
          done(e);
        }
      });
      fp._licenseRequestLoaded({
        target: new XMLHttpRequest()
      });
    });

    it('should handle error rejected from promise filter', done => {
      Utils.Object.mergeDeep(fpsDrmData, {
        network: {
          responseFilter: function () {
            return new Promise((resolve, reject) => {
              reject('error');
            });
          }
        }
      });
      const fp = new FairPlayDrmHandler(videoElement, fpsDrmData, e => {
        try {
          validateFilterError(e);
          done();
        } catch (e) {
          done(e);
        }
      });
      fp._licenseRequestLoaded({
        target: new XMLHttpRequest()
      });
    });
  });
});
