//@flow
import PlayerDecoratorBase from '../../src/player/player-decorator-base';

declare interface IPlayerDecoratorProvider {
  getPlayerDecorator(): PlayerDecoratorBase;
}
