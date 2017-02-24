/**
 * Created by itayk on 23/02/2017.
 */
// @flow
import PlayerDecoratorBase from '../../player/PlayerDecoratorBase';

export default class testPlugin implements IPlayerDecoratorProvider {
   getPlayerDecorator(): PlayerDecoratorBase {
    class myDecorator extends PlayerDecoratorBase {
      play() {
        var _this = this;
        setTimeout( function () {
          _this.player.play();
        } , 5000 );
      }
    }
    return new myDecorator();

  }
}
