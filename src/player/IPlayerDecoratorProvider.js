/**
 * Created by itayk on 23/02/2017.
 */
// @flow

import PlayerDecoratorBase from './PlayerDecoratorBase';

declare interface IPlayerDecoratorProvider {
  getPlayerDecorator(): PlayerDecoratorBase;
}

