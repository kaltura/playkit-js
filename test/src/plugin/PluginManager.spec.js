import PluginManager from "../../../src/plugin/PluginManager";
import ColorsPlugin from "./testPlugins/colorsPlugin";
import NumbersPlugin from "./testPlugins/numbersPlugin";

function registerAll() {
  PluginManager.register("numbers", NumbersPlugin);
  PluginManager.register("colors", ColorsPlugin);
}

function unRegisterAll() {
  PluginManager.unRegister("numbers");
  PluginManager.unRegister("colors");
}

describe('PluginManager.registry', () => {

  let isRegister = false;

  before(() => {
    unRegisterAll();
  });

  it('should register new plugins', () => {
    isRegister = PluginManager.register("numbers", NumbersPlugin);
    isRegister.should.be.true;
    isRegister = PluginManager.register("colors", ColorsPlugin);
    isRegister.should.be.true;
    PluginManager._registry.size.should.equal(2);
    PluginManager._registry.should.be.instanceof(Map);
  });

  it('should not register plugins that already registered', () => {
    isRegister = PluginManager.register("numbers", NumbersPlugin);
    isRegister.should.be.false;
    isRegister = PluginManager.register("colors", ColorsPlugin);
    isRegister.should.be.false;
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

  after(function () {
    unRegisterAll();
  });
});

describe('PluginManager.plugins', () => {

  let pluginManager = new PluginManager();
  let isLoaded = false;
  let sinonSandbox;

  before(() => {
    registerAll();
  });

  beforeEach(() => {
    sinonSandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sinonSandbox.restore();
  });

  it('should create all PluginManager properties', () => {
    pluginManager._plugins.size.should.equal(0);
    pluginManager._plugins.should.be.instanceof(Map);
  });

  it('should throw error when try to load() plugin who isn\'t registered', () => {
    let isThrowException = false;
    try {
      pluginManager.load("bubbles", {});
    } catch (e) {
      isThrowException = true;
      e.message.should.equal("Cannot load \<bubbles\> - plugin isn't registered.");
    }
    isThrowException.should.be.true;
  });

  it('shouldn\'t load() the plugin', () => {
    sinonSandbox.stub(ColorsPlugin, "isValid", function () {
      return false;
    });
    isLoaded = pluginManager.load("colors", {});
    isLoaded.should.be.false;
  });

  it('should load() the plugins', () => {
    isLoaded = pluginManager.load("colors", {});
    isLoaded.should.be.true;
    pluginManager._plugins.size.should.equal(1);
    isLoaded = pluginManager.load("numbers", {});
    isLoaded.should.be.true;
    pluginManager._plugins.size.should.equal(2);
  });

  it('should get() the correct plugin', () => {
    pluginManager.get("colors").should.be.instanceof(ColorsPlugin);
    pluginManager.get("numbers").should.be.instanceof(NumbersPlugin);
  });

  it('should remove() the specific plugin', () => {
    pluginManager.remove("numbers");
    pluginManager._plugins.size.should.equal(1);
  });

  it('should configure() the specific plugin', () => {
    let colorsPlugin = pluginManager.get("colors");
    let configureSpy = sinonSandbox.spy(colorsPlugin, "configure");
    pluginManager.configure("colors", {'test': 1});
    configureSpy.should.have.been.calledOnce;
    configureSpy.should.have.been.calledWithExactly({'test': 1});
  });

  it('should setup() the specific plugin', () => {
    let colorsPlugin = pluginManager.get("colors");
    let setupSpy = sinonSandbox.spy(colorsPlugin, "setup");
    pluginManager.setup("colors");
    setupSpy.should.have.been.calledOnce;
  });

  it('should _destroy() the specific plugin', () => {
    let colorsPlugin = pluginManager.get("colors");
    let destroySpy = sinonSandbox.spy(colorsPlugin, "destroy");
    pluginManager._destroy(colorsPlugin);
    destroySpy.should.have.been.calledOnce;
  });

  it('should destroy() all the plugins', () => {
    isLoaded = pluginManager.load("numbers", {});
    isLoaded.should.be.true;
    let colorsPlugin = pluginManager.get("colors");
    let numbersPlugin = pluginManager.get("numbers");
    let destroyColorsSpy = sinonSandbox.spy(colorsPlugin, "destroy");
    let destroyNumbersSpy = sinonSandbox.spy(numbersPlugin, "destroy");
    pluginManager.destroy();
    destroyColorsSpy.should.have.been.calledOnce;
    destroyNumbersSpy.should.have.been.calledOnce;
  });
});

