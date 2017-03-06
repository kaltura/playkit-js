import BasePlugin from "../../../src/plugin/BasePlugin";

let basePlugin;

describe('BasePlugin', () => {

  before(() => {
    basePlugin = new BasePlugin("basePlugin", {});
  });

  it('should create all BasePlugin properties', () => {
    basePlugin.getLogger().should.exist;
    basePlugin.getPlayer().should.exist;
    basePlugin.getName().should.exist;
    basePlugin.getConfig().should.exist;
    basePlugin.getDefaultConfig().should.exist;
  });

  it('should return the plugin name', () => {
    basePlugin.getName().should.equal("basePlugin");
  });

  it('should configure plugin config', () => {
    let dummyConfig = {'x': 1, 'y': 2};
    basePlugin.configure(dummyConfig);
    basePlugin.getConfig().should.deep.equal(dummyConfig);
  });

  it('should return the config attribute value', () => {
    basePlugin.getConfig('x').should.deep.equal(1);
  });

  it('should update plugin config', () => {
    let dummyUpdate = {'y': 'hello'};
    basePlugin.updateConfig(dummyUpdate);
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

  it('should throw setup() exception', () => {
    let exceptionOccurred = false;
    try {
      basePlugin.setup();
    } catch (e) {
      exceptionOccurred = true;
      e.name.should.equal('NotImplementedPluginMethodException');
      e.message.should.equal('Plugin must implement setup() method')
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

