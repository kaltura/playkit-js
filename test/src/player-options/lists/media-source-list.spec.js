import MediaSourceList from '../../../../src/player-options/lists/media-source-list'
import MediaSource from '../../../../src/player-options/items/media-source'

describe('MediaSourceList', () => {
  const mimetype = 'mimetype';
  const url = 'http://url';
  const ms = {mimetype: mimetype, url: url};

  it('should create empty media source list', () => {
    const msl = new MediaSourceList();
    msl.should.be.instanceOf(MediaSourceList);
    msl.list.should.deep.equal([]);
  });

  it('should create media source list with initial item', () => {
    const msi = new MediaSource(mimetype, url);
    const msl = new MediaSourceList([msi]);
    msl.should.be.instanceOf(MediaSourceList);
    msl.list.should.be.an('array').that.include(msi);
    msl.list[0].should.be.instanceOf(MediaSource);
    msl.list[0].mimetype.should.equal(mimetype);
    msl.list[0].url.should.equal(url);
  });

  it('should throw error when creating media source list with wrong type of items in array', (done) => {
    try {
      new MediaSource([1]);
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should throw error when creating media source list with wrong type of param', (done) => {
    try {
      new MediaSource(1);
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should create media source list and set media source later', () => {
    const msl = new MediaSourceList();
    msl.should.be.instanceOf(MediaSourceList);
    msl.list.should.deep.equal([]);
    msl.list = [new MediaSource(mimetype, url)];
    msl.list.should.be.an('array');
    msl.list[0].should.be.instanceOf(MediaSource);
    msl.list[0].mimetype.should.equal(mimetype);
    msl.list[0].url.should.equal(url);
  });

  it('should create media source list by json', () => {
    const msl = new MediaSourceList([ms]);
    msl.should.be.instanceOf(MediaSourceList);
    msl.list.should.be.an('array');
    msl.list[0].should.be.instanceOf(MediaSource);
    msl.list[0].mimetype.should.equal(mimetype);
    msl.list[0].url.should.equal(url);
  });

  it('should throw error when creating media source list by wrong type of json', (done) => {
    try {
      new MediaSourceList({});
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should create emprty media source list and set list by json with later', () => {
    const msl = new MediaSourceList();
    msl.should.be.instanceOf(MediaSourceList);
    msl.list.should.deep.equal([]);
    msl.list = [ms];
    msl.list.should.be.an('array');
    msl.list[0].should.be.instanceOf(MediaSource);
    msl.list[0].mimetype.should.equal(mimetype);
    msl.list[0].url.should.equal(url);
  });

  it('should get json media source list', () => {
    const json = [ms];
    const msl = new MediaSourceList([ms]);
    msl.should.be.instanceOf(MediaSourceList);
    msl.toJSON().should.deep.equal(json);
  });
});
