//@flow
class PluginManager {
  registry_: Map<string,Function> = {};
  plugins_: Map<string,IPlugin> = {};

  constructor() {}

  register( name: string, handler: Function ): void {
    this.registry_[ name ] = handler;
  }

  has( name: string ): boolean {
    return !!this.registry_[ name ];
  }

  get( name: string ): any {
    return this.plugins_[ name ];
  }

  length(): number {
    return Object.keys( this.plugins_ ).length;
  }

  load( name: string, config: Object ): boolean {
    if ( this.registry_[ name ].isAvailable() ) {
      this.plugins_[ name ] = new this.registry_[ name ]();
      this.plugins_[ name ].configure( config );
      this.plugins_[ name ].setup();
      return true;
    }
    return false;
  }
}

let pm = new PluginManager();
export default pm;
