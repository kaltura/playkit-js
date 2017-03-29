import PluginManager from "../../../src/plugin/PluginManager";
import ColorsPlugin from "./test-plugins/ColorsPlugin";
import NumbersPlugin from "./test-plugins/NumbersPlugin";

function registerAll() {
  PluginManager.register("numbers", NumbersPlugin);
  PluginManager.register("colors", ColorsPlugin);
}

function unRegisterAll() {
  PluginManager.unRegister("numbers");
  PluginManager.unRegister("colors");
}

describe('PluginManager.registry', () => {

  beforeEach(() => {
    registerAll();
  });

  afterEach(() => {
    unRegisterAll();
  });

  it('shouldn\'t register the plugin because handler is not a function', () => {
    let exceptionOccurred = false;
    try {
      PluginManager.register("numbers", {});
    } catch (e) {
      exceptionOccurred = true;
      e.name.should.equal('PluginHandlerIsNotValidException');
      e.message.should.equal('To activate plugin you must provide a class derived from BasePlugin');
    }
    exceptionOccurred.should.be.true;
  });

  it('shouldn\'t register the plugin because handler isn\'t derived from BasePlugin', () => {
    let exceptionOccurred = false;
    try {
      PluginManager.register("numbers", function () {
      });
    } catch (e) {
      exceptionOccurred = true;
      e.name.should.equal('PluginHandlerIsNotValidException');
      e.message.should.equal('To activate plugin you must provide a class derived from BasePlugin');
    }
    exceptionOccurred.should.be.true;
  });

  it('should register new plugins', () => {
    PluginManager._registry.size.should.equal(2);
    PluginManager._registry.should.be.instanceof(Map);
  });

  it('should not register plugins that already registered', () => {
    PluginManager.register("numbers", NumbersPlugin).should.be.false;
    PluginManager.register("colors", ColorsPlugin).should.be.false;
    PluginManager._registry.size.should.equal(2);
  });

  it('should get() the correct handler', () => {
    PluginManager._registry.get("colors").should.be.instanceof(Function);
    PluginManager._registry.get("numbers").should.be.instanceof(Function);
  });

  it('should has() the correct plugins', () => {
    PluginManager._registry.has("colors").should.be.true;
    PluginManager._registry.has("numbers").should.be.true;
    PluginManager._registry.has("bubbles").should.be.false;
  });

  it('should remove() the plugin from the registry', () => {
    PluginManager.unRegister("colors");
    PluginManager._registry.has("colors").should.be.false;
    PluginManager._registry.size.should.equal(1);
  });
});

describe('PluginManager.plugins', () => {

  let pluginManager;
  let sandbox;

  beforeEach(() => {
    pluginManager = new PluginManager();
    sandbox = sinon.sandbox.create();
    registerAll();
  });

  afterEach(() => {
    pluginManager = null;
    sandbox.restore();
    unRegisterAll();
  });

  it('should create all PluginManager properties', () => {
    pluginManager._plugins.size.should.equal(0);
    pluginManager._plugins.should.be.instanceof(Map);
  });

  it('should throw error when try to load() plugin who isn\'t registered', () => {
    let exceptionOccurred = false;
    try {
      pluginManager.load("bubbles", {}, {});
    } catch (e) {
      exceptionOccurred = true;
      e.message.should.equal("Cannot load bubbles plugin. Name not found in the registry");
    }
    exceptionOccurred.should.be.true;
  });

  it('shouldn\'t load() the plugin', () => {
    sandbox.stub(ColorsPlugin, "isValid", function () {
      return false;
    });
    pluginManager.load("colors", {}, {}).should.be.false;
  });

  it('should load() the plugins', () => {
    pluginManager.load("colors", {}, {}).should.be.true;
    pluginManager._plugins.size.should.equal(1);
    pluginManager.load("numbers", {}, {}).should.be.true;
    pluginManager._plugins.size.should.equal(2);
  });

  it('should get() the correct plugin', () => {
    pluginManager.load("colors", {}, {}).should.be.true;
    pluginManager.load("numbers", {}, {}).should.be.true;
    pluginManager.get("colors").should.be.instanceof(ColorsPlugin);
    pluginManager.get("numbers").should.be.instanceof(NumbersPlugin);
  });

  it('should _destroy() the specific plugin', () => {
    pluginManager.load("colors", {}, {}).should.be.true;
    let colorsPlugin = pluginManager.get("colors");
    let destroySpy = sandbox.spy(colorsPlugin, "destroy");
    pluginManager._destroy(colorsPlugin, "colors");
    destroySpy.should.have.been.calledOnce;
    (pluginManager.get("colors") === undefined).should.be.true;
    pluginManager._plugins.size.should.equal(0);
  });

  it('should destroy() all the plugins', () => {
    pluginManager.load("colors", {}, {}).should.be.true;
    pluginManager.load("numbers", {}, {}).should.be.true;
    let colorsPlugin = pluginManager.get("colors");
    let numbersPlugin = pluginManager.get("numbers");
    let destroyColorsSpy = sandbox.spy(colorsPlugin, "destroy");
    let destroyNumbersSpy = sandbox.spy(numbersPlugin, "destroy");
    pluginManager.destroy();
    destroyColorsSpy.should.have.been.calledOnce;
    destroyNumbersSpy.should.have.been.calledOnce;
    (pluginManager.get("colors") === undefined).should.be.true;
    (pluginManager.get("numbers") === undefined).should.be.true;
    pluginManager._plugins.size.should.equal(0);
  });
});

