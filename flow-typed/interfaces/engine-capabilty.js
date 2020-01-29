//@flow
declare type CapabilityResult = {[capabilityName: string]: any};

declare interface ICapability {
  static runCapability(playsinline:?boolean): void;
  static getCapability(playsinline:?boolean): Promise<CapabilityResult>;
  static setCapabilities(capabilities: {[name: string]: any}): void;
}
