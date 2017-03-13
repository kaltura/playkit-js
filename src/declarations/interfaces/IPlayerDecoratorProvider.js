//@flow
import PlayerDecoratorBase from '../../player/PlayerDecoratorBase';

declare interface IPlayerDecoratorProvider {
  getPlayerDecorator(): PlayerDecoratorBase;
}

