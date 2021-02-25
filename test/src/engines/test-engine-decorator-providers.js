import type {IEngine, IEngineDecorator, IEngineDecoratorProvider} from '../../../flow-typed/interfaces/engine';
import FakeEventTarget from '../../../src/event/fake-event-target';

class FakeHTML5Engine extends FakeEventTarget implements IEngine {
  constructor() {
    super();
  }
  load(): Promise<*> {
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

class FakeDecoratorProvider implements IEngineDecoratorProvider {
  getEngineDecorator() {
    return new (class EngineDecorator implements IEngineDecorator {
      constructor() {}
      get active(): boolean {
        return false;
      }
    })();
  }
}

class FakeDecoratorProviderActive implements IEngineDecoratorProvider {
  constructor() {
    this._decorator = new (class EngineDecorator implements IEngineDecorator {
      constructor() {}

      load(): Promise<*> {
        return Promise.resolve(this);
      }

      isLive(): boolean {
        return true;
      }

      get active(): boolean {
        return true;
      }
    })();
  }
  getEngineDecorator() {
    return this._decorator;
  }
}

export {FakeDecoratorProvider, FakeDecoratorProviderActive, FakeHTML5Engine};
