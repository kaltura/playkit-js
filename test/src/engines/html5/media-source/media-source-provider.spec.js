import MediaSourceProvider from '../../../../../src/engines/html5/media-source/media-source-provider'
import {adapter1, adapter2, adapter3} from './adapters/test-adapters/test-adapters'

let video = document.createElement("video");
let fakeEngine = {
  getVideoElement: function () {
    return video;
  }
};
let oldMediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters;

describe('mediaSourceAdapterManager:register', () => {

  beforeEach(() => {
    MediaSourceProvider._mediaSourceAdapters = [];
  });

  after(() => {
    MediaSourceProvider._mediaSourceAdapters = oldMediaSourceAdapters;
  });

  it('should register adapter1', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
    MediaSourceProvider.register(adapter1);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(1);
    MediaSourceProvider._mediaSourceAdapters[0].name.should.equal("adapter1");
  });

  it('should not register adapter1 twice', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
    MediaSourceProvider.register(adapter1);
    MediaSourceProvider.register(adapter1);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(1);
    MediaSourceProvider._mediaSourceAdapters[0].name.should.equal("adapter1");
  });

  it('should register adapter1 and adapter2', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
    MediaSourceProvider.register(adapter1);
    MediaSourceProvider.register(adapter2);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
    MediaSourceProvider._mediaSourceAdapters[0].name.should.equal("adapter1");
    MediaSourceProvider._mediaSourceAdapters[1].name.should.equal("adapter2");
  });

  it('should not register null', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
    MediaSourceProvider.register(null);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
  });

  it('should not register undefined', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
    MediaSourceProvider.register();
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
  });
});

describe('mediaSourceAdapterManager:unRegister', () => {

  beforeEach(() => {
    MediaSourceProvider._mediaSourceAdapters = [adapter1, adapter2];
  });
  after(() => {
    MediaSourceProvider._mediaSourceAdapters = oldMediaSourceAdapters;
  });

  it('should unRegister adapter1', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
    MediaSourceProvider.unRegister(adapter1);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(1);
    MediaSourceProvider._mediaSourceAdapters[0].name.should.equal("adapter2");
  });

  it('should unRegister adapter1 and adapter2', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
    MediaSourceProvider.unRegister(adapter1);
    MediaSourceProvider.unRegister(adapter2);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(0);
  });

  it('should do nothing for adapter 3', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
    MediaSourceProvider.unRegister(adapter3);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
  });

  it('should do nothing for null', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
    MediaSourceProvider.unRegister(null);
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
  });

  it('should do nothing for undefined', () => {
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
    MediaSourceProvider.unRegister();
    MediaSourceProvider._mediaSourceAdapters.length.should.equal(2);
  });
});

describe('mediaSourceAdapterManager:canPlayType', () => {

  before(() => {
    MediaSourceProvider._mediaSourceAdapters = [adapter1, adapter2, adapter3];
  });

  after(() => {
    MediaSourceProvider._mediaSourceAdapters = oldMediaSourceAdapters;
  });

  it('should can play type mimeType1', () => {
    MediaSourceProvider.canPlayType('mimeType1').should.be.true;
    MediaSourceProvider._selectedAdapter.name.should.equal("adapter1");
  });

  it('should can play type mimeType2', () => {
    MediaSourceProvider.canPlayType('mimeType2').should.be.true;
    MediaSourceProvider._selectedAdapter.name.should.equal("adapter2");
  });

  it('should can play type video/mp4', () => {
    MediaSourceProvider.canPlayType('video/mp4').should.be.true;
    MediaSourceProvider._selectedAdapter.name.should.equal("adapter3");
  });

  it('should cannot play unknown mime type', () => {
    MediaSourceProvider.canPlayType('unknownType').should.be.false;
  });

  it('should cannot play for no source', () => {
    MediaSourceProvider.canPlayType().should.be.false;
  });
});

describe('mediaSourceAdapterManager:getMediaSourceAdapter', () => {

  before(() => {
    MediaSourceProvider._mediaSourceAdapters = [adapter1, adapter2, adapter3];
  });

  beforeEach(() => {
    MediaSourceProvider._selectedAdapter = null;
  });

  after(() => {
    MediaSourceProvider._mediaSourceAdapters = oldMediaSourceAdapters;
  });

  it('should provide adapter1', () => {
    let adapter = MediaSourceProvider.getMediaSourceAdapter(fakeEngine, {mimetype: 'mimeType1', url: 'url1'}, {});
    adapter.constructor.name.should.equal("adapter1");
  });

  it('should provide adapter2', () => {
    let adapter = MediaSourceProvider.getMediaSourceAdapter(fakeEngine, {mimetype: 'mimeType2', url: 'url3'}, {});
    adapter.constructor.name.should.equal("adapter2");
  });

  it('should provide adapter3', () => {
    let adapter = MediaSourceProvider.getMediaSourceAdapter(fakeEngine, {mimetype: 'video/mp4', url: 'url3'}, {});
    adapter.constructor.name.should.equal("adapter3");
  });

  it('should provide null for unknown mime type', () => {
    let adapter = MediaSourceProvider.getMediaSourceAdapter(fakeEngine, {mimetype: 'unknownType'}, {});
    (adapter === null).should.be.true;
  });

  it('should provide null for no params', () => {
    let adapter = MediaSourceProvider.getMediaSourceAdapter();
    (adapter === null).should.be.true;
  });

  it('should provide null for no videoElement param', () => {
    let adapter = MediaSourceProvider.getMediaSourceAdapter(undefined, {mimetype: 'mimeType1', src: 'url1'}, {});
    (adapter === null).should.be.true;
  });

  it('should provide null for no sources param', () => {
    let adapter = MediaSourceProvider.getMediaSourceAdapter(video, undefined, {});
    (adapter === null).should.be.true;
  });

  it('should provide null for no config param', () => {
    let adapter = MediaSourceProvider.getMediaSourceAdapter(video, {mimetype: 'mimeType1', src: 'url1'});
    (adapter === null).should.be.true;
  });
});

