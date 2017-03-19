//@flow
import BaseMediaSourceHandler from './BaseMediaSourceHandler'

/**
 * Media source handler provider
 * @classdesc
 */
export default class MediaSourceHandlerProvider {
  /**
   * The media source handler registry
   * @member {Array<BaseMediaSourceHandler>} _mediaSourceHandlers
   * @static
   * @private
   */
  static _mediaSourceHandlers: Array<BaseMediaSourceHandler> = [];
  /**
   * Add a media source handler to the registry
   * @function registerHandler
   * @param {BaseMediaSourceHandler} handler
   * @static
   */
  static registerHandler(handler: BaseMediaSourceHandler): void {
    if(handler){
      let index = this._mediaSourceHandlers.indexOf(handler);
      if (index === -1) {
        this._mediaSourceHandlers.push(handler);
      }
    }
  }
  /**
   * Remove a media source handler from the registry
   * @function unregisterHandler
   * @param {BaseMediaSourceHandler} handler
   * @static
   */
  static unregisterHandler(handler: BaseMediaSourceHandler): void {
    let index = this._mediaSourceHandlers.indexOf(handler);
    if (index > -1) {
      this._mediaSourceHandlers.splice(index, 1);
    }
  }
  /**
   * Get the appropriate media source handler to the video source
   * @function getMediaSourceHandler
   * @param {HTMLVideoElement} videoElement - The video element which will bind to the media source handler
   * @param {Object} config - The player configuration
   * @returns {BaseMediaSourceHandler|null}
   * @static
   */
  static getMediaSourceHandler(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler | null {
    if(videoElement && config){
      let handlers = this._mediaSourceHandlers;
      for (let i = 0; i < handlers.length; i++) {
        if (handlers[i].canPlayType(config.mimeType))
          return handlers[i].createHandler(videoElement, config);
      }
    }
    return null;
  }
}

const registerHandler = MediaSourceHandlerProvider.registerHandler;
export {registerHandler};

