import getLogger from '../utils/logger';
import Html5 from './html5/html5';
import {IEngineStatic} from '../types';

/**
 * Engine Provider
 * @classdesc
 */
class EngineProvider {
  /**
   * The logger of the Engine provider.
   * @member {any} _logger
   * @static
   * @private
   */
  private static _logger: any = getLogger('EngineProvider');

  /**
   * The Engine registry.
   * @member {Object} _engineProviders
   * @static
   * @private
   */
  private static _engineProviders: {[id: string]: IEngineStatic} = {};

  /**
   * Add an engine to the registry.
   * @function register
   * @param {string} id - The engine id.
   * @param {IEngineStatic} engine -  The engine to register.
   * @static
   * @returns {void}
   */
  public static register(id: string, engine: IEngineStatic): void {
    if (id && !EngineProvider._engineProviders[id]) {
      EngineProvider._logger.debug(`Engine <${id}> has been registered successfully`);
      EngineProvider._engineProviders[id] = engine;
    } else {
      EngineProvider._logger.debug(`Engine <${id}> is already registered, do not register again`);
    }
  }

  /**
   * Remove an engine from the registry.
   * @function unRegister
   * @param {string} id - The engine id.
   * @static
   * @returns {void}
   */
  public static unRegister(id: string): void {
    if (EngineProvider._engineProviders[id]) {
      EngineProvider._logger.debug(`Unregistered <${id}> Engine`);
      delete EngineProvider._engineProviders[id];
    }
  }

  /**
   * Get the appropriate Engines.
   * @function getEngines
   * @returns {Array<IEngineStatic>} - The Array of engines, or null if such doesn't exists.
   * @static
   */
  public static getEngines(): Array<IEngineStatic> {
    return Object.keys(EngineProvider._engineProviders).map(key => EngineProvider._engineProviders[key]);
  }

  /**
   * Destroys and clear the registered engines
   * @static
   * @returns {void}
   */
  public static destroy(): void {
    EngineProvider._engineProviders = {};
  }
}

if (Html5.isSupported()) {
  EngineProvider.register(Html5.id, Html5);
}

const registerEngine = EngineProvider.register;
const unRegisterEngine = EngineProvider.unRegister;
export {registerEngine, unRegisterEngine, EngineProvider};
