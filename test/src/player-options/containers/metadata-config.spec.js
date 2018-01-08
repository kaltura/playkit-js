import MetadataConfig from '../../../../src/player-options/containers/metadata-config'

describe('MetadataConfig', () => {
  const poster = 'poster';
  const description = 'description';

  it('should create empty metadata config', () => {
    const mdc = new MetadataConfig();
    mdc.should.be.instanceOf(MetadataConfig);
    mdc.poster.should.equal('');
    mdc.description.should.equal('');
  });

  it('should create empty metadata config and set other props later', () => {
    const mdc = new MetadataConfig();
    mdc.should.be.instanceOf(MetadataConfig);
    mdc.poster.should.equal('');
    mdc.description.should.equal('');
    mdc.poster = poster;
    mdc.description = description;
    mdc.poster.should.equal(poster);
    mdc.description.should.equal(description);
  });

  it('should create metadata config with initial poster and description', () => {
    const mdc = new MetadataConfig({poster: poster, description: description});
    mdc.should.be.instanceOf(MetadataConfig);
    mdc.poster.should.equal(poster);
    mdc.description.should.equal(description);
  });

  it('should get json metadata config', () => {
    const json = {
      poster: poster,
      description: description
    };
    const mdc = new MetadataConfig(json);
    mdc.should.be.instanceOf(MetadataConfig);
    mdc.toJSON().should.deep.equal(json);
  });
});
