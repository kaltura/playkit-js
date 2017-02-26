//@flow
export default class BasePlugin implements IPlugin {
  constructor() {}

  configure( config?: Object ): void {}

  setup(): void {}

  destroy(): void {
    throw new NotImplementedException( 'Plugin must implemented destroy() method' );
  }

  static isAvailable(): boolean {
    throw new NotImplementedException( 'Plugin must implemented isAvailable() method' );
  }

  static get name(): string {
    throw new NotImplementedException( 'Plugin must implemented name() method' );
  }

  static get description(): string {
    return "";
  }
}

function NotImplementedException( message: string ) {
  return {
    message: message,
    name: 'NotImplementedPluginMethodException'
  }
}

