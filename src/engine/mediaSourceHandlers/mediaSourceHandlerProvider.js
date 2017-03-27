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
    if (handler && !MediaSourceHandlerProvider._mediaSourceHandlers.includes(handler)) {
      MediaSourceHandlerProvider._mediaSourceHandlers.push(handler);
    }
  }

  /**
   * Remove a media source handler from the registry
   * @function unregisterHandler
   * @param {BaseMediaSourceHandler} handler
   * @static
   */
  static unregisterHandler(handler: BaseMediaSourceHandler): void {
    let index = MediaSourceHandlerProvider._mediaSourceHandlers.indexOf(handler);
    if (index > -1) {
      MediaSourceHandlerProvider._mediaSourceHandlers.splice(index, 1);
    }
  }

  /**
   * Get the appropriate media source handler to the video source
   * @function getMediaSourceHandler
   * @param {HTMLVideoElement} videoElement - The video element which will bind to the media source handler
   * @param {Array<Object>} sources - The video sources
   * @param {Object} config - The player configuration
   * @returns {Object}
   * @static
   */
  static getMediaSourceHandler(videoElement: HTMLVideoElement, sources: Array<Object>, config: Object): Object {
    if (videoElement && sources && config) {
      let handlers = MediaSourceHandlerProvider._mediaSourceHandlers;
      for (let i = 0; i < handlers.length; i++) {
        for (let j = 0; j < sources.length; j++) {
          if (handlers[i].canPlayType(sources[j].mimetype)) {
            return {
              handler: handlers[i].createHandler(videoElement, config.engines),
              source: sources[j]
            };
          }
        }
      }
    }
    return {};
  }
}

const registerHandler = MediaSourceHandlerProvider.registerHandler;
export {registerHandler};

