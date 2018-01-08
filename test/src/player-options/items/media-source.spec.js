import MediaSource from '../../../../src/player-options/items/media-source'
import DrmData from '../../../../src/player-options/items/drm-data'

describe('MediaSource', () => {
  const scheme = 'scheme';
  const licenseUrl = 'http://url';
  const certificate = 'certificate';
  const mimetype = 'mimetype';
  const url = 'http://url';
  const id = 'id';
  const bandwidth = 1;
  const width = 1;
  const height = 1;
  const drmData = [{scheme: scheme, licenseUrl: licenseUrl, certificate: certificate}];

  it('should create media source with only mimetype and url', () => {
    const ms = new MediaSource(mimetype, url);
    ms.should.be.instanceOf(MediaSource);
    ms.mimetype.should.equal(mimetype);
    ms.url.should.equal(url);
  });

  it('should throw error when creating media source without mimetype and url', (done) => {
    try {
      new MediaSource();
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should throw error when creating media source with wrong type of mimetype and url', (done) => {
    try {
      new MediaSource(0, 0);
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should create media source with mimetype and url and set other props later', () => {
    const ms = new MediaSource(mimetype, url);
    ms.should.be.instanceOf(MediaSource);
    ms.mimetype.should.equal(mimetype);
    ms.url.should.equal(url);
    ms.id = id;
    ms.bandwidth = bandwidth;
    ms.height = height;
    ms.width = width;
    ms.drmData = drmData;
    ms.id.should.equal(id);
    ms.bandwidth.should.equal(bandwidth);
    ms.height.should.equal(height);
    ms.width.should.equal(width);
    ms.drmData.should.be.to.be.an('array');
    ms.drmData[0].should.be.instanceOf(DrmData);
    ms.drmData[0].toJSON().should.deep.equal(drmData[0]);
  });

  it('should create media source by json', () => {
    const ms = new MediaSource({mimetype: mimetype, url: url});
    ms.should.be.instanceOf(MediaSource);
    ms.mimetype.should.equal(mimetype);
    ms.url.should.equal(url);
  });

  it('should throw error when creating media source by json without mimetype and url', (done) => {
    try {
      new MediaSource({});
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should throw error when creating media source by json with wrong type of mimetype and url', (done) => {
    try {
      new MediaSource({mimetype: 0, url: 0});
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should create media source by json with mimetype and url and set other props later', () => {
    const ms = new MediaSource({mimetype: mimetype, url: url});
    ms.should.be.instanceOf(MediaSource);
    ms.mimetype.should.equal(mimetype);
    ms.url.should.equal(url);
    ms.bandwidth = bandwidth;
    ms.id = id;
    ms.height = height;
    ms.width = width;
    ms.drmData = drmData;
    ms.id.should.equal(id);
    ms.bandwidth.should.equal(bandwidth);
    ms.height.should.equal(height);
    ms.width.should.equal(width);
    ms.drmData.should.be.to.be.an('array');
    ms.drmData[0].should.be.instanceOf(DrmData);
    ms.drmData[0].toJSON().should.deep.equal(drmData[0]);
  });

  it('should create media source by json with all params', () => {
    const json = {
      mimetype: mimetype,
      url: url,
      id: id,
      height: height,
      width: width,
      bandwidth: bandwidth,
      drmData: drmData
    };
    const ms = new MediaSource(json);
    ms.should.be.instanceOf(MediaSource);
    ms.mimetype.should.equal(mimetype);
    ms.url.should.equal(url);
    ms.id.should.equal(id);
    ms.bandwidth.should.equal(bandwidth);
    ms.height.should.equal(height);
    ms.width.should.equal(width);
    ms.drmData.should.be.to.be.an('array');
    ms.drmData[0].should.be.instanceOf(DrmData);
    ms.drmData[0].toJSON().should.deep.equal(drmData[0]);
  });

  it('should get json media source', () => {
    const json = {
      mimetype: mimetype,
      url: url,
      id: id,
      height: height,
      width: width,
      bandwidth: bandwidth,
      drmData: drmData
    };
    const ms = new MediaSource(json);
    ms.should.be.instanceOf(MediaSource);
    ms.toJSON().should.deep.equal(json);
  });
});

