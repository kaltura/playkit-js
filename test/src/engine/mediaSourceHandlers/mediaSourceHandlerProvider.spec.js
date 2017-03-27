import BaseMediaSourceHandler from '../../../../src/engine/mediaSourceHandlers/BaseMediaSourceHandler';
import MSHProvider from '../../../../src/engine/mediaSourceHandlers/mediaSourceHandlerProvider';

class handler1 extends BaseMediaSourceHandler {
  static _mimeTypes = ['mimeType0', 'mimeType1'];
  static _name = 'handler1';
}
class handler2 extends BaseMediaSourceHandler {
  static _mimeTypes = ['mimeType1', 'mimeType2'];
  static _name = 'handler2';
}
class handler3 extends BaseMediaSourceHandler {
  static canPlayType(mimeType: string): boolean {
    return !!(document.createElement("video").canPlayType(mimeType));
  };

  static _name = 'handler3';
}
let video = document.createElement("video");
let oldMediaSourceHandlers = MSHProvider._mediaSourceHandlers;

describe('mediaSourceHandlerProvider:registerHandler', () => {

  beforeEach(() => {
    MSHProvider._mediaSourceHandlers = [];
  });
  after(() => {
    MSHProvider._mediaSourceHandlers = oldMediaSourceHandlers;
  });

  it('should register handler1', () => {
    MSHProvider._mediaSourceHandlers.length.should.equal(0);
    MSHProvider.registerHandler(handler1);
    MSHProvider._mediaSourceHandlers.length.should.equal(1);
    MSHProvider._mediaSourceHandlers[0].name.should.equal("handler1");
  });

  it('should not register handler1 twice', () => {
    MSHProvider._mediaSourceHandlers.length.should.equal(0);
    MSHProvider.registerHandler(handler1);
    MSHProvider.registerHandler(handler1);
    MSHProvider._mediaSourceHandlers.length.should.equal(1);
    MSHProvider._mediaSourceHandlers[0].name.should.equal("handler1");
  });

  it('should register handler1 and handler2', () => {
    MSHProvider._mediaSourceHandlers.length.should.equal(0);
    MSHProvider.registerHandler(handler1);
    MSHProvider.registerHandler(handler2);
    MSHProvider._mediaSourceHandlers.length.should.equal(2);
    MSHProvider._mediaSourceHandlers[0].name.should.equal("handler1");
    MSHProvider._mediaSourceHandlers[1].name.should.equal("handler2");
  });

  it('should not register null', () => {
    MSHProvider._mediaSourceHandlers.length.should.equal(0);
    MSHProvider.registerHandler(null);
    MSHProvider._mediaSourceHandlers.length.should.equal(0);
  });

  it('should not register undefined', () => {
    MSHProvider._mediaSourceHandlers.length.should.equal(0);
    MSHProvider.registerHandler();
    MSHProvider._mediaSourceHandlers.length.should.equal(0);
  });
});

describe('mediaSourceHandlerProvider:unregisterHandler', () => {

  beforeEach(() => {
    MSHProvider._mediaSourceHandlers = [handler1, handler2];
  });
  after(() => {
    MSHProvider._mediaSourceHandlers = oldMediaSourceHandlers;
  });

  it('should unregister handler1', () => {
    MSHProvider._mediaSourceHandlers.length.should.equal(2);
    MSHProvider.unregisterHandler(handler1);
    MSHProvider._mediaSourceHandlers.length.should.equal(1);
    MSHProvider._mediaSourceHandlers[0].name.should.equal("handler2");
  });

  it('should unregister handler1 and handler2', () => {
    MSHProvider._mediaSourceHandlers.length.should.equal(2);
    MSHProvider.unregisterHandler(handler1);
    MSHProvider.unregisterHandler(handler2);
    MSHProvider._mediaSourceHandlers.length.should.equal(0);
  });

  it('should do nothing for handler 3', () => {
    MSHProvider._mediaSourceHandlers.length.should.equal(2);
    MSHProvider.unregisterHandler(handler3);
    MSHProvider._mediaSourceHandlers.length.should.equal(2);
  });

  it('should do nothing for null', () => {
    MSHProvider._mediaSourceHandlers.length.should.equal(2);
    MSHProvider.unregisterHandler(null);
    MSHProvider._mediaSourceHandlers.length.should.equal(2);
  });

  it('should do nothing for undefined', () => {
    MSHProvider._mediaSourceHandlers.length.should.equal(2);
    MSHProvider.unregisterHandler();
    MSHProvider._mediaSourceHandlers.length.should.equal(2);
  });
});

describe('mediaSourceHandlerProvider:getMediaSourceHandler', () => {

  before(() => {
    MSHProvider._mediaSourceHandlers = [handler1, handler2, handler3];
  });
  after(() => {
    MSHProvider._mediaSourceHandlers = oldMediaSourceHandlers;
  });

  it('should provide handler1 & src1', () => {
    let object = MSHProvider.getMediaSourceHandler(video, [{mimetype: 'mimeType1', src: 'url1'},{mimetype: 'mimeType2', src: 'url2'},{mimetype: 'video/mp4', src: 'url3'}], {});
    object.handler.constructor.name.should.equal("handler1");
    object.source.src.should.equal("url1");
  });

  it('should provide handler1 & src1', () => {
    let object = MSHProvider.getMediaSourceHandler(video, [{mimetype: 'mimeType2', src: 'url2'},{mimetype: 'video/mp4', src: 'url3'},{mimetype: 'mimeType1', src: 'url1'}], {});
    object.handler.constructor.name.should.equal("handler1");
    object.source.src.should.equal("url1");
  });

  it('should provide handler2 & src2', () => {
    let object = MSHProvider.getMediaSourceHandler(video, [{mimetype: 'mimeType2', src: 'url2'},{mimetype: 'video/mp4', src: 'url3'}], {});
    object.handler.constructor.name.should.equal("handler2");
    object.source.src.should.equal("url2");
  });

  it('should provide handler3 & src3', () => {
    let object = MSHProvider.getMediaSourceHandler(video, [{mimetype: 'video/mp4', src: 'url3'}], {});
    object.handler.constructor.name.should.equal("handler3");
    object.source.src.should.equal("url3");
  });

  it('should provide empty object for unknown mime type', () => {
    let object = MSHProvider.getMediaSourceHandler(video, [{mimetype: 'unknownType'}], {});
    object.should.be.empty;
  });

  it('should provide empty object for empty sources', () => {
    let object = MSHProvider.getMediaSourceHandler(video, [], {});
    object.should.be.empty;
  });

  it('should provide empty object for no params', () => {
    let object = MSHProvider.getMediaSourceHandler();
    object.should.be.empty;
  });

  it('should provide empty object for no videoElement param', () => {
    let object = MSHProvider.getMediaSourceHandler(undefined, [{mimetype: 'mimeType1', src: 'url1'}], {});
    object.should.be.empty;
  });

  it('should provide empty object for no sources param', () => {
    let object = MSHProvider.getMediaSourceHandler(video, undefined, {});
    object.should.be.empty;
  });

  it('should provide empty object for no config param', () => {
    let object = MSHProvider.getMediaSourceHandler(video, [{mimetype: 'mimeType1', src: 'url1'}]);
    object.should.be.empty;
  });
});

