import {ResizeWatcher} from '../../../src/utils/resize-watcher';

describe('ResizeWatcher', () => {
  let rw;
  beforeEach(() => {
    rw = new ResizeWatcher();
  });

  it('create a native obeserver', () => {
    if (window.ResizeObserver) {
      rw._createNativeObserver();
      rw._observer.should.be.instanceof(window.ResizeObserver);
      rw.destroy();
    }
  });

  it('create a iframe obeserver', () => {
    rw._createIframeObserver();
    rw._observer.should.not.be.instanceof(window.ResizeObserver);
    rw._observer.should.be.an('Object');
    rw.destroy();
  });

  it('iframe obeserver _createIframe', () => {
    rw._createIframeObserver();
    let iframe = rw._observer._createIframe();
    iframe.should.be.instanceOf(HTMLElement);
    iframe.className.should.be.equal('playkit-size-iframe');
    rw.destroy();
  });

  it('iframe obeserver observe', done => {
    rw._createIframeObserver();
    let container = document.createElement('div');
    container.setAttribute('id', 'testId123456789');
    document.body.appendChild(container);
    container.style.position = 'relative';
    container.style.width = '200px';
    container.style.height = '200px';
    rw._observer.observe(container);
    rw._observer._observersStore['testId123456789'].should.be.instanceof(HTMLIFrameElement);
    rw.addEventListener('resize', () => {
      rw.destroy();
      document.body.removeChild(container);
      done();
    });
    setTimeout(() => {
      container.style.height = '300px';
    }, 100);
  });

  it('iframe obeserver disconnect', done => {
    rw._createIframeObserver();
    let container = document.createElement('div');
    container.setAttribute('id', 'testId123456789');
    document.body.appendChild(container);
    container.style.position = 'relative';
    container.style.width = '200px';
    container.style.height = '200px';
    rw._observer.observe(container);
    rw._observer.disconnect();
    rw.addEventListener('resize', () => {
      document.body.removeChild(container);
      done('failed');
    });
    setTimeout(() => {
      document.body.removeChild(container);
      done();
    }, 500);
    setTimeout(() => {
      container.style.height = '300px';
    }, 100);
  });

  it('trigger a resize event', done => {
    rw.addEventListener('resize', () => {
      done();
    });
    rw._triggerResize();
  });

  it('create an obeserver', done => {
    let el = document.createElement('div');
    el.setAttribute('id', 'coolObserver123');
    document.body.appendChild(el);
    rw.init(el);
    rw.addEventListener('resize', () => {
      document.body.removeChild(el);
      done();
    });
    el.style.width = '200px';
  });
});
