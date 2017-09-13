import FakeEventTarget from '../../../src/event/fake-event-target'
import EventManager from '../../../src/event/event-manager'

class EventTarget extends FakeEventTarget {
}

describe("unlisten", function () {

  let eventTarget, eventManager;

  beforeEach(() => {
    eventTarget = new EventTarget();
    eventManager = new EventManager();
  });

  afterEach(() => {
    eventManager.removeAll();
  });

  it("should remove all listeners for no specific listener given", (done) => {
    let listener1 = () => {
      done(new Error("test fail"));
    };
    let listener2 = () => {
      done(new Error("test fail"));
    };
    eventManager.listen(eventTarget, 'event', listener1);
    eventManager.listen(eventTarget, 'event', listener2);
    eventManager.unlisten(eventTarget, 'event');
    eventManager._bindingMap.get('event').length.should.equal(0);
    setTimeout(() => {
      done();
    }, 0);
  });

  it("should remove only the given listeners", (done) => {
    let listener1 = () => {
      done(new Error("test fail"));
    };
    let listener2 = () => {
      done();
    };
    eventManager.listen(eventTarget, 'event', listener1);
    eventManager.listen(eventTarget, 'event', listener2);
    eventManager.unlisten(eventTarget, 'event', listener1);
    eventManager._bindingMap.get('event').length.should.equal(1);
    eventManager._bindingMap.get('event')[0].listener.should.equal(listener2);
    eventTarget.dispatchEvent({type: 'event'});
  });
});

describe("one", function () {

  let eventTarget, eventManager, listener1;

  beforeEach(() => {
    eventTarget = new EventTarget();
    eventManager = new EventManager();
  });

  afterEach(() => {
    eventManager.removeAll();
  });

  it("should listen only one time", (done) => {
    let counter = 0;
    listener1 = (event) => {
      counter++;
      event.type.should.equal('event');
    };
    eventManager.listenOnce(eventTarget, 'event', listener1);
    eventTarget.dispatchEvent({type: 'event'});
    eventTarget.dispatchEvent({type: 'event'});
    setTimeout(() => {
      counter.should.equal(1);
      done();
    }, 0);
  });
});
