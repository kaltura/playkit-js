// @ts-nocheck
import {IEngine, IEngineDecorator} from '../../../src/types';
import { FakeEventTarget } from '../../../src/event/fake-event-target';

class FakeHTML5Engine extends FakeEventTarget implements IEngine {
  constructor() {
    super();
  }
  load(): Promise<void> {
    return Promise.resolve(this);
  }
  isAdaptiveBitrateEnabled() {
    return true;
  }

  isLive(): boolean {
    return false;
  }

  destroy() {}
}

const FakeDecoratorProvider = {
  getEngineDecorator: () => {
    return new (class EngineDecorator implements IEngineDecorator {
      constructor() {}

      get active(): boolean {
        return false;
      }
    })();
  },
  getName: () => {
    return 'fake';
  }
};

const FakeDecoratorProviderActive = {
  _decorator: new (class EngineDecorator implements IEngineDecorator {
    constructor() {}

    load(): Promise<void> {
      return Promise.resolve(this);
    }

    isLive(): boolean {
      return true;
    }

    get active(): boolean {
      return true;
    }
  })(),
  getEngineDecorator: () => {
    return FakeDecoratorProviderActive._decorator;
  },
  getName: () => {
    return 'fakeActive';
  }
};

export {FakeDecoratorProvider, FakeDecoratorProviderActive, FakeHTML5Engine};
