import PluginsConfig from '../../../../src/player-options/containers/plugins-config'

describe('PluginsConfig', () => {
  const pluginName = 'myPlugin';
  const pluginConfig = {myProp: 1};

  it('should create empty plugins config', () => {
    const pc = new PluginsConfig();
    pc.should.be.instanceOf(PluginsConfig);
    pc.map.size.should.equal(0);
  });

  it('should create empty plugins config and set plugin config later as map', () => {
    const pgm = new Map([[pluginName, pluginConfig]]);
    const pc = new PluginsConfig();
    pc.should.be.instanceOf(PluginsConfig);
    pc.map.size.should.equal(0);
    pc.map = pgm;
    pc.map.size.should.equal(1);
    pc.map.get(pluginName).should.exist;
    pc.map.get(pluginName).should.deep.equal(pluginConfig);
  });

  it('should create empty plugins config and set plugin config later as object', () => {
    const pgo = {[pluginName]: pluginConfig};
    const pc = new PluginsConfig();
    pc.should.be.instanceOf(PluginsConfig);
    pc.map.size.should.equal(0);
    pc.map = pgo;
    pc.map.size.should.equal(1);
    pc.map.get(pluginName).should.exist;
    pc.map.get(pluginName).should.deep.equal(pluginConfig);
  });

  it('should create plugins config with initial plugins as map', () => {
    const pgm = new Map([[pluginName, pluginConfig]]);
    const pc = new PluginsConfig(pgm);
    pc.should.be.instanceOf(PluginsConfig);
    pc.map.size.should.equal(1);
    pc.map.get(pluginName).should.exist;
    pc.map.get(pluginName).should.deep.equal(pluginConfig);
  });

  it('should create plugins config with initial plugins as object', () => {
    const pgo = {[pluginName]: pluginConfig};
    const pc = new PluginsConfig(pgo);
    pc.should.be.instanceOf(PluginsConfig);
    pc.map.size.should.equal(1);
    pc.map.get(pluginName).should.exist;
    pc.map.get(pluginName).should.deep.equal(pluginConfig);
  });

  it('should get json plugins config', () => {
    const json = {[pluginName]: pluginConfig};
    const pc = new PluginsConfig(json);
    pc.should.be.instanceOf(PluginsConfig);
    pc.toJSON().should.deep.equal(json);
  });
});
