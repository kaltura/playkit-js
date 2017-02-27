import pluginRegistry from "../../src/plugin/PluginRegistry";
import ColorsPlugin from "./testPlugins/colorsPlugin";
import NumbersPlugin from "./testPlugins/numbersPlugin";

import chai from 'chai';

chai.should();

describe('PluginRegistry', () => {

  it('should create all PluginRegistry properties', () => {
    pluginRegistry.size.should.equal(0);
    pluginRegistry.registry.should.be.instanceof(Map);
  });

  it('should register new plugins', () => {
    pluginRegistry.register("numbers", NumbersPlugin);
    pluginRegistry.register("colors", ColorsPlugin);
    pluginRegistry.size.should.equal(2);
  });

  it('should get() the correct handler', () => {
    pluginRegistry.get("colors").should.be.instanceof(Function);
    pluginRegistry.get("numbers").should.be.instanceof(Function);
  });

  it('should has() the correct plugins', () => {
    pluginRegistry.has("colors").should.be.true;
    pluginRegistry.has("numbers").should.be.true;
    pluginRegistry.has("bubbles").should.be.false;
  });

  it('should remove() the plugin from the registry', () => {
    pluginRegistry.remove("colors");
    pluginRegistry.has("colors").should.be.false;
    pluginRegistry.size.should.equal(1);
  });

  it('should clear() the left plugins from the registry', () => {
    pluginRegistry.clear();
    pluginRegistry.has("numbers").should.be.false;
    pluginRegistry.size.should.equal(0);
  });
});

