import {IEngine} from '../../../src/types';

class FakeHTML5Engine implements IEngine {
  static get id() {
    return 'Html5';
  }
}

class FakeFLASHEngine implements IEngine {
  static get id() {
    return 'Flash';
  }
}

class FakeSLEngine implements IEngine {
  static get id() {
    return 'SL';
  }
}

export {FakeHTML5Engine, FakeFLASHEngine, FakeSLEngine};
