//@flow
declare type CapabilityResult = {[capabilityName: string]: any};

declare interface ICapability {
  +type: string;
  runCapability(): void;
  getCapability(): Promise<CapabilityResult>;
  setCapabilities(capabilities: {[name: string]: any}): void;
}
