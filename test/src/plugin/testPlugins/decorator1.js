import PlayerDecoratorBase from '../../../../src/player/PlayerDecoratorBase';
import loggerFactory from '../../../../src/util/loggerFactory';

const logger = loggerFactory.getLogger("DemoPlayerDecoratorPlugin1");

export default class DemoPlayerDecoratorPlugin1 implements IPlayerDecoratorProvider {
  getPlayerDecorator(): PlayerDecoratorBase {
    class myDecorator extends PlayerDecoratorBase {
      play() {
        logger.info("play");
        this.player.play();
      }
    }
    return new myDecorator();
  }
}
