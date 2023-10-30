export type CapabilityResult = {[capabilityName: string]: any};

export interface ICapability {
  runCapability(): void;
  getCapability(): Promise<CapabilityResult>;
  setCapabilities(capabilities: {[name: string]: any}): void;
}
