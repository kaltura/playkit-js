//@flow
export default class PlayerDecoratorBase implements IPlayer {
  player: IPlayer;

  setPlayer(player: IPlayer): void {
    this.player = player;
  }

  load(): Promise<Object> {
    return this.player.load();
  }

  play(): void {
    this.player.play();
  }

  pause(): void {
    this.player.pause();
  }

  getVideoElement(): ?HTMLVideoElement {
    return this.player.getVideoElement();
  }
}
