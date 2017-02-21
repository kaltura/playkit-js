//@flow

/*eslint no-undef: "off"*/

interface IEngine {
  destroy(): void;
  attach(): void;
  deattach(): void;
  play(): void;
  pause(): void;
  currentTime: number;
  // currentTime(to: number): void;
  +duration: number;
  volume: number;
  // volume(vol: number): void;
  ready(): void;
  +paused: boolean;
  +seeking: boolean;
  played(): void;
  buffered(): void;
  muted: boolean;
  // muted(mute: boolean): void;
}

export type Engine = IEngine;
