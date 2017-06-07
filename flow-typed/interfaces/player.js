//@flow
declare interface IPlayer {
  load(): Promise<Object>;
  play(): void;
  pause(): void;
  getVideoElement(): ?HTMLVideoElement;
}
