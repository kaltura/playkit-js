import DrmData from '../../../../src/player-options/items/drm-data'

describe('DrmData', () => {
  const scheme = 'scheme';
  const licenseUrl = 'http://url';
  const certificate = 'certificate';

  it('should create drm data with only scheme and license url', () => {
    const dd = new DrmData(scheme, licenseUrl);
    dd.should.be.instanceOf(DrmData);
    dd.scheme.should.equal(scheme);
    dd.licenseUrl.should.equal(licenseUrl);
  });

  it('should throw error when creating drm data without scheme and license url', (done) => {
    try {
      new DrmData();
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should throw error when creating drm data with wrong type of scheme and license url', (done) => {
    try {
      new DrmData(0, 0);
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should create drm data with scheme and license url and set other props later', () => {
    const dd = new DrmData(scheme, licenseUrl);
    dd.should.be.instanceOf(DrmData);
    dd.scheme.should.equal(scheme);
    dd.licenseUrl.should.equal(licenseUrl);
    dd.certificate = certificate;
    dd.certificate.should.equal(certificate);
  });

  it('should create drm data by json', () => {
    const dd = new DrmData({scheme: scheme, licenseUrl: licenseUrl});
    dd.should.be.instanceOf(DrmData);
    dd.scheme.should.equal(scheme);
    dd.licenseUrl.should.equal(licenseUrl);
  });

  it('should throw error when creating drm data by json without scheme and license url', (done) => {
    try {
      new DrmData({});
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should throw error when creating drm data by json with wrong type of scheme and license url', (done) => {
    try {
      new DrmData({scheme: 0, licenseUrl: 0});
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should create drm data by json with scheme and license url and set other props later', () => {
    const dd = new DrmData({scheme: scheme, licenseUrl: licenseUrl});
    dd.should.be.instanceOf(DrmData);
    dd.scheme.should.equal(scheme);
    dd.licenseUrl.should.equal(licenseUrl);
    dd.certificate = certificate;
    dd.certificate.should.equal(certificate);
  });

  it('should create drm data by json with all params', () => {
    const json = {
      scheme: scheme,
      licenseUrl: licenseUrl,
      certificate: certificate
    };
    const dd = new DrmData(json);
    dd.should.be.instanceOf(DrmData);
    dd.scheme.should.equal(scheme);
    dd.licenseUrl.should.equal(licenseUrl);
    dd.certificate.should.equal(certificate);
  });

  it('should get json drm data', () => {
    const json = {
      scheme: scheme,
      licenseUrl: licenseUrl,
      certificate: certificate
    };
    const dd = new DrmData(json);
    dd.should.be.instanceOf(DrmData);
    dd.toJSON().should.deep.equal(json);
  });
});
