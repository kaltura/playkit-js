import BaseMediaSourceAdapter from '../../../../src/engines/adapters/base-adapter'
import MSAManager from '../../../../src/engines/adapters/adapter-manager'

class adapter1 extends BaseMediaSourceAdapter {
  static _mimeTypes = ['mimeType0', 'mimeType1'];
  static _name = 'adapter1';
}
class adapter2 extends BaseMediaSourceAdapter {
  static _mimeTypes = ['mimeType1', 'mimeType2'];
  static _name = 'adapter2';
}
class adapter3 extends BaseMediaSourceAdapter {
  static canPlayType(mimeType: string): boolean {
    return !!(document.createElement("video").canPlayType(mimeType));
  }
  static _name = 'adapter3';
}

let video = document.createElement("video");
let oldMediaSourceAdapters = MSAManager._mediaSourceAdapters;

describe('mediaSourceAdapterManager:register', () => {

  beforeEach(() => {
    MSAManager._mediaSourceAdapters = [];
  });
  after(() => {
    MSAManager._mediaSourceAdapters = oldMediaSourceAdapters;
  });

  it('should register adapter1', () => {
    MSAManager._mediaSourceAdapters.length.should.equal(0);
    MSAManager.register(adapter1);
    MSAManager._mediaSourceAdapters.length.should.equal(1);
    MSAManager._mediaSourceAdapters[0].name.should.equal("adapter1");
  });

  it('should not register adapter1 twice', () => {
    MSAManager._mediaSourceAdapters.length.should.equal(0);
    MSAManager.register(adapter1);
    MSAManager.register(adapter1);
    MSAManager._mediaSourceAdapters.length.should.equal(1);
    MSAManager._mediaSourceAdapters[0].name.should.equal("adapter1");
  });

  it('should register adapter1 and adapter2', () => {
    MSAManager._mediaSourceAdapters.length.should.equal(0);
    MSAManager.register(adapter1);
    MSAManager.register(adapter2);
    MSAManager._mediaSourceAdapters.length.should.equal(2);
    MSAManager._mediaSourceAdapters[0].name.should.equal("adapter1");
    MSAManager._mediaSourceAdapters[1].name.should.equal("adapter2");
  });

  it('should not register null', () => {
    MSAManager._mediaSourceAdapters.length.should.equal(0);
    MSAManager.register(null);
    MSAManager._mediaSourceAdapters.length.should.equal(0);
  });

  it('should not register undefined', () => {
    MSAManager._mediaSourceAdapters.length.should.equal(0);
    MSAManager.register();
    MSAManager._mediaSourceAdapters.length.should.equal(0);
  });
});

describe('mediaSourceAdapterManager:unregister', () => {

  beforeEach(() => {
    MSAManager._mediaSourceAdapters = [adapter1, adapter2];
  });
  after(() => {
    MSAManager._mediaSourceAdapters = oldMediaSourceAdapters;
  });

  it('should unregister adapter1', () => {
    MSAManager._mediaSourceAdapters.length.should.equal(2);
    MSAManager.unregister(adapter1);
    MSAManager._mediaSourceAdapters.length.should.equal(1);
    MSAManager._mediaSourceAdapters[0].name.should.equal("adapter2");
  });

  it('should unregister adapter1 and adapter2', () => {
    MSAManager._mediaSourceAdapters.length.should.equal(2);
    MSAManager.unregister(adapter1);
    MSAManager.unregister(adapter2);
    MSAManager._mediaSourceAdapters.length.should.equal(0);
  });

  it('should do nothing for adapter 3', () => {
    MSAManager._mediaSourceAdapters.length.should.equal(2);
    MSAManager.unregister(adapter3);
    MSAManager._mediaSourceAdapters.length.should.equal(2);
  });

  it('should do nothing for null', () => {
    MSAManager._mediaSourceAdapters.length.should.equal(2);
    MSAManager.unregister(null);
    MSAManager._mediaSourceAdapters.length.should.equal(2);
  });

  it('should do nothing for undefined', () => {
    MSAManager._mediaSourceAdapters.length.should.equal(2);
    MSAManager.unregister();
    MSAManager._mediaSourceAdapters.length.should.equal(2);
  });
});

describe('mediaSourceAdapterManager:canPlayType', () => {

  before(() => {
    MSAManager._mediaSourceAdapters = [adapter1, adapter2, adapter3];
  });
  after(() => {
    MSAManager._mediaSourceAdapters = oldMediaSourceAdapters;
  });

  it('should can play type mimeType1', () => {
    MSAManager.canPlayType('mimeType1').should.be.true;
  });

  it('should can play type mimeType2', () => {
    MSAManager.canPlayType('mimeType2').should.be.true;
  });

  it('should can play type video/mp4', () => {
    MSAManager.canPlayType('video/mp4').should.be.true;
  });

  it('should cannot play unknown mime type', () => {
    MSAManager.canPlayType('unknownType').should.be.false;
  });

  it('should cannot play for no source', () => {
    MSAManager.canPlayType().should.be.false;
  });
});

describe('mediaSourceAdapterManager:getMediaSourceAdapter', () => {

  before(() => {
    MSAManager._mediaSourceAdapters = [adapter1, adapter2, adapter3];
  });
  after(() => {
    MSAManager._mediaSourceAdapters = oldMediaSourceAdapters;
  });

  it('should provide adapter1', () => {
    let adapter = MSAManager.getMediaSourceAdapter(video, {mimetype: 'mimeType1', src: 'url1'}, {});
    adapter.constructor.name.should.equal("adapter1");
  });

  it('should provide adapter2', () => {
    let adapter = MSAManager.getMediaSourceAdapter(video, {mimetype: 'mimeType2', src: 'url3'}, {});
    adapter.constructor.name.should.equal("adapter2");
  });

  it('should provide adapter3', () => {
    let adapter = MSAManager.getMediaSourceAdapter(video, {mimetype: 'video/mp4', src: 'url3'}, {});
    adapter.constructor.name.should.equal("adapter3");
  });

  it('should provide null for unknown mime type', () => {
    let adapter = MSAManager.getMediaSourceAdapter(video, {mimetype: 'unknownType'}, {});
    (adapter === null).should.be.true;
  });

  it('should provide null for no params', () => {
    let adapter = MSAManager.getMediaSourceAdapter();
    (adapter === null).should.be.true;
  });

  it('should provide null for no videoElement param', () => {
    let adapter = MSAManager.getMediaSourceAdapter(undefined, {mimetype: 'mimeType1', src: 'url1'}, {});
    (adapter === null).should.be.true;
  });

  it('should provide null for no sources param', () => {
    let adapter = MSAManager.getMediaSourceAdapter(video, undefined, {});
    (adapter === null).should.be.true;
  });

  it('should provide null for no config param', () => {
    let adapter = MSAManager.getMediaSourceAdapter(video, {mimetype: 'mimeType1', src: 'url1'});
    (adapter === null).should.be.true;
  });
});

