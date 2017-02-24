/**
 * Created by itayk on 23/02/2017.
 */
// @flow

/*eslint no-undef: "off"*/

declare interface IPlayer {
  /**
   * Get/Set the current time in seconds
   * @returns {Number}
   */
  currentTime():number;

  /**
   * Check if the player is playing
   */
  +isPlaying: boolean;

  /**
   * Get the player duration
   */
  +duration: number;

  play():void;
  pause():void;


}

