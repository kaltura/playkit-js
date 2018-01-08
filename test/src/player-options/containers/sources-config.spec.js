import SourcesConfig from '../../../../src/player-options/containers/sources-config'
import MediaSourceList from '../../../../src/player-options/lists/media-source-list'

describe('SourcesConfig', () => {
  const mimetype = 'mimetype';
  const url = 'http://url';
  const msl = [{mimetype: mimetype, url: url}];

  it('should create empty sources config', () => {
    const sc = new SourcesConfig();
    sc.should.be.instanceOf(SourcesConfig);
    sc._hls.should.be.instanceOf(MediaSourceList);
    sc._dash.should.be.instanceOf(MediaSourceList);
    sc._progressive.should.be.instanceOf(MediaSourceList);
    sc.hls.length.should.equal(0);
    sc.dash.length.should.equal(0);
    sc.progressive.length.should.equal(0);
  });

  it('should create empty sources config and set sources later as media source list', () => {
    const sc = new SourcesConfig();
    sc.should.be.instanceOf(SourcesConfig);
    sc._hls.should.be.instanceOf(MediaSourceList);
    sc._dash.should.be.instanceOf(MediaSourceList);
    sc._progressive.should.be.instanceOf(MediaSourceList);
    sc.hls.length.should.equal(0);
    sc.dash.length.should.equal(0);
    sc.progressive.length.should.equal(0);
    sc.hls = msl;
    sc.dash = msl;
    sc.progressive = msl;
    sc._hls.should.be.instanceOf(MediaSourceList);
    sc.hls.length.should.equal(1);
    sc.hls[0].mimetype.should.equal(mimetype);
    sc.hls[0].url.should.equal(url);
    sc._dash.should.be.instanceOf(MediaSourceList);
    sc.dash.length.should.equal(1);
    sc.dash[0].mimetype.should.equal(mimetype);
    sc.dash[0].url.should.equal(url);
    sc._progressive.should.be.instanceOf(MediaSourceList);
    sc.progressive.length.should.equal(1);
    sc.progressive[0].mimetype.should.equal(mimetype);
    sc.progressive[0].url.should.equal(url);
  });

  it('should create empty sources config and set sources later as object', () => {
    const sc = new SourcesConfig();
    sc.should.be.instanceOf(SourcesConfig);
    sc._hls.should.be.instanceOf(MediaSourceList);
    sc._dash.should.be.instanceOf(MediaSourceList);
    sc._progressive.should.be.instanceOf(MediaSourceList);
    sc.hls.length.should.equal(0);
    sc.dash.length.should.equal(0);
    sc.progressive.length.should.equal(0);
    sc.hls = msl;
    sc.dash = msl;
    sc.progressive = msl;
    sc._hls.should.be.instanceOf(MediaSourceList);
    sc.hls.length.should.equal(1);
    sc.hls[0].mimetype.should.equal(mimetype);
    sc.hls[0].url.should.equal(url);
    sc._dash.should.be.instanceOf(MediaSourceList);
    sc.dash.length.should.equal(1);
    sc.dash[0].mimetype.should.equal(mimetype);
    sc.dash[0].url.should.equal(url);
    sc._progressive.should.be.instanceOf(MediaSourceList);
    sc.progressive.length.should.equal(1);
    sc.progressive[0].mimetype.should.equal(mimetype);
    sc.progressive[0].url.should.equal(url);
  });

  it('should create sources config with initial sources', () => {
    const isc = {hls: msl, dash: msl, progressive: msl};
    const sc = new SourcesConfig(isc);
    sc.should.be.instanceOf(SourcesConfig);
    sc._hls.should.be.instanceOf(MediaSourceList);
    sc._dash.should.be.instanceOf(MediaSourceList);
    sc._progressive.should.be.instanceOf(MediaSourceList);
    sc.hls.length.should.equal(1);
    sc.hls[0].mimetype.should.equal(mimetype);
    sc.hls[0].url.should.equal(url);
    sc.dash.length.should.equal(1);
    sc.dash[0].mimetype.should.equal(mimetype);
    sc.dash[0].url.should.equal(url);
    sc.progressive.length.should.equal(1);
    sc.progressive[0].mimetype.should.equal(mimetype);
    sc.progressive[0].url.should.equal(url);
  });

  it('should get json sources config', () => {
    const json = {hls: msl, dash: msl, progressive: msl};
    const sc = new SourcesConfig(json);
    sc.should.be.instanceOf(SourcesConfig);
    sc.toJSON().should.deep.equal(json);
  });
});
