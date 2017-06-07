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
    return this.player.play();
  }

  pause(): void {
    return this.player.pause();
  }

  getVideoElement(): ?HTMLVideoElement {
    return this.player.getVideoElement();
  }
}
