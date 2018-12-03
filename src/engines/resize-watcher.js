//@flow

import FakeEventTarget from './event/fake-event-target';

class ResizeWatcher extends FakeEventTarget {
  constructor() {
    super();
  }
}

export {ResizeWatcher};
