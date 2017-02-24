/**
 * Created by itayk on 23/02/2017.
 */
// @flow

import IPlayer from './IPlayer'
export default class PlayerDecoratorBase implements IPlayer {
  player: IPlayer;

  setPlayer( player: IPlayer ) {
    this.player = player;
  }

  play() {
    return this.player.play();
  }

  pause() {
    return this.player.pause();
  }

}
