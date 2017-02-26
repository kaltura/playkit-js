//@flow

declare interface IPlayer {
  /**
   * Get/Set the current time in seconds
   * @returns {Number}
   */
  //currentTime():number;

  // /**
  //  * Check if the player is playing
  //  */
  // +isPlaying: boolean;
  //
  // /**
  //  * Get the player duration
  //  */
  // +duration: number;

  play():void;
  pause():void;

}

