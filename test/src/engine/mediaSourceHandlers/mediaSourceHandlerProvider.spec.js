import BaseMediaSourceHandler from '../../../../src/engine/mediaSourceHandlers/BaseMediaSourceHandler';
import MSHProvider from '../../../../src/engine/mediaSourceHandlers/mediaSourceHandlerProvider';
import fakeMSH from '../../../../src/engine/mediaSourceHandlers/fakeMSE';

class handler1 extends BaseMediaSourceHandler{
  static _mimeTypes = ['mimeType1'];
  static _name = 'handler1';
}
class handler2 extends BaseMediaSourceHandler{
  static _mimeTypes = ['mimeType1','mimeType2'];
  static _name = 'handler2';
}
class handler3 extends BaseMediaSourceHandler{
  static canPlayType(mimeType: string): boolean {
    return !!(document.createElement("video").canPlayType(mimeType));
  };
  static _name = 'handler3';
}
let video = document.createElement("video");

describe('mediaSourceHandlerProvider:registerHandler', () => {

  beforeEach( () => {
    MSHProvider._mediaSourceHandlers = [];
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

  beforeEach( () => {
    MSHProvider._mediaSourceHandlers = [handler1,handler2];
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

  before( () => {
    MSHProvider._mediaSourceHandlers = [handler1,handler2,handler3];
  });

  it('should provide handler1', () => {
    let handler = MSHProvider.getMediaSourceHandler(video, {mimeType:'mimeType1'});
    handler.constructor.name.should.equal("handler1");
  });

  it('should provide handler2', () => {
    let handler = MSHProvider.getMediaSourceHandler(video, {mimeType:'mimeType2'});
    handler.constructor.name.should.equal("handler2");
  });

  it('should provide handler3', () => {
    let handler = MSHProvider.getMediaSourceHandler(video, {mimeType:'video/mp4'});
    handler.constructor.name.should.equal("handler3");
  });

  it('should provide null for unknown mime type', () => {
    let handler = MSHProvider.getMediaSourceHandler(video, {mimeType:'someType'});
    (handler === null).should.be.true;
  });

  it('should provide null for no params', () => {
    let handler = MSHProvider.getMediaSourceHandler();
    (handler === null).should.be.true;
  });

  it('should provide null for no videoElement param', () => {
    let handler = MSHProvider.getMediaSourceHandler(undefined, {mimeType:'mimeType1'});
    (handler === null).should.be.true;
  });

  it('should provide null for no config param', () => {
    let handler = MSHProvider.getMediaSourceHandler(video);
    (handler === null).should.be.true;
  });
});

