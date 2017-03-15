import BasePlugin from "../../../src/plugin/BasePlugin";

describe('BasePlugin', () => {

  let basePlugin;
  let config = {'x': 1, 'y': 2};

  beforeEach(() => {
    basePlugin = BasePlugin.createPlugin("basePlugin", {}, config);
  });

  afterEach(() => {
    basePlugin = null;
  });

  it('should create all BasePlugin properties', () => {
    basePlugin.logger.should.exist;
    basePlugin.player.should.exist;
    basePlugin.name.should.exist;
    basePlugin.eventManager.should.exist;
    basePlugin.config.should.deep.equal(config);
  });

  it('should return the plugin name', () => {
    basePlugin.getName().should.equal("basePlugin");
  });

  it('should return the plugin config', () => {
    basePlugin.getConfig().should.deep.equal(config);
  });

  it('should return the config attribute value', () => {
    basePlugin.getConfig('x').should.deep.equal(1);
  });

  it('should update the plugin config', () => {
    let update = {'y': 'hello'};
    basePlugin.updateConfig(update);
    basePlugin.getConfig().should.deep.equal({'x': 1, 'y': 'hello'});
  });

  it('should throw isValid() exception', () => {
    let exceptionOccurred = false;
    try {
      BasePlugin.isValid();
    } catch (e) {
      exceptionOccurred = true;
      e.name.should.equal('NotImplementedPluginMethodException');
      e.message.should.equal('Plugin must implement isValid() method')
    }
    exceptionOccurred.should.be.true;
  });

  it('should throw destroy() exception', () => {
    let exceptionOccurred = false;
    try {
      basePlugin.destroy();
    } catch (e) {
      exceptionOccurred = true;
      e.name.should.equal('NotImplementedPluginMethodException');
      e.message.should.equal('Plugin must implement destroy() method')
    }
    exceptionOccurred.should.be.true;
  });
});

