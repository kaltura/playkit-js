// globals.d.ts
declare class WebKitMediaKeys {
  constructor(keySystem: string)
  public readonly keySystem: string;
  public static createSession(type: string, optional, initData: Uint8Array);
  public static isTypeSupported(keySystem: string, type: string);
}
