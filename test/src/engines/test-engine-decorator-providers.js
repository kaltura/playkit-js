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
  destroy() {}
}

class FakeDecoratorProvider implements IEngineDecoratorProvider {
  getEngineDecorator() {
    return new (class EngineDecorator implements IEngineDecorator {
      constructor() {}
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

      get active(): boolean {
        return true;
      }
    })();
  }
  getEngineDecorator() {
    return this._decorator;
  }
}

class FakeDecoratorProviderNotActive implements IEngineDecoratorProvider {
  getEngineDecorator() {
    return new (class EngineDecorator implements IEngineDecorator {
      constructor() {}

      load(): Promise<*> {
        return Promise.resolve(this);
      }

      get active(): boolean {
        return false;
      }
    })();
  }
}

export {FakeDecoratorProvider, FakeDecoratorProviderActive, FakeDecoratorProviderNotActive, FakeHTML5Engine};
