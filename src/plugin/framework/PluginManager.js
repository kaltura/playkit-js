//@flow
import lf from "../../util/loggerFactory";

let logger = lf.getLogger( 'PluginManager' );

class PluginManager {
  pluginRegistry_: Map<string,Function> = {};
  pluginRegistryCount_: number = 0;
  activePlugins_: Map<string,IPlugin> = {};
  activePluginsCount_: number = 0;

  constructor() {}

  register( name: string, handler: Function ): void {
    if ( !this.has( name ) ) {
      logger.info( `Plugin <${name}> is registered.` );
      this.pluginRegistry_[ name ] = handler;
      this.pluginRegistryCount_++;
    } else {
      logger.info( `Plugin <${name}> is already registered, do not register again.` );
    }
  }

  load( name: string, config: Object ): boolean {
    logger.info( `Load <${name}> plugin start.` );
    if ( this.pluginRegistry_[ name ].isAvailable() ) {
      this.activePlugins_[ name ] = new this.pluginRegistry_[ name ]();
      this.activePluginsCount_++;
      this.activePlugins_[ name ].configure( config );
      this.activePlugins_[ name ].setup();
      logger.info( `Load <${name}> plugin succeeded.` );
      return true;
    }
    logger.info( `Load <${name}> plugin failed - plugin is not available.` );
    return false;
  }

  has( name: string ): boolean {
    return !!this.pluginRegistry_[ name ];
  }

  get( name: string ): any {
    return this.activePlugins_[ name ];
  }

  registryCount(): number {
    return this.pluginRegistryCount_;
  }

  activePluginsCount(): number {
    return this.activePluginsCount_;
  }
}

let pm = new PluginManager();
export default pm;
