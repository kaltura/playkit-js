import PluginManager from "../../src/plugin/PluginManager";
import ColorsPlugin from "./testPlugins/colorsPlugin";
import NumbersPlugin from "./testPlugins/numbersPlugin";
import chai from 'chai';

chai.should();

let pluginManager;

describe.only('PluginManager', () => {

  before(() => {
    pluginManager = new PluginManager();
  });

  it('should create all PluginManager properties', () => {
    pluginManager.size.should.equal(0);
    pluginManager.plugins.should.be.instanceof(Map);
  });

  it('should load() the plugins', () => {
    let pluginLoaded = pluginManager.load("colors", ColorsPlugin, {}, {});
    pluginLoaded.should.be.true;
    pluginManager.get("colors").should.be.instanceof(ColorsPlugin);
    pluginManager.size.should.equal(1);

    pluginLoaded = pluginManager.load("numbers", NumbersPlugin, {}, {});
    pluginLoaded.should.be.true;
    pluginManager.get("numbers").should.be.instanceof(NumbersPlugin);
    pluginManager.size.should.equal(2);
  });

  it('should destroy() the specific plugin', () => {
    pluginManager.destroy("numbers");
    pluginManager.size.should.equal(1);
  });

  it('should destroy() all the plugins', () => {
    pluginManager.load("numbers", NumbersPlugin, {}, {});
    pluginManager.size.should.equal(2);
    pluginManager.destroyAll();
    pluginManager.size.should.equal(0);
  });
});

