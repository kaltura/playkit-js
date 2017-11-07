//@flow

import FakeEventTarget from '../event/fake-event-target'

export default class PlayerError extends FakeEventTarget{


  constructor(){
    super();
  }

  dispatch(error){

    this.severity = error.severity;
    this.category = error.category;
    this.code = error.code;
    this.data = JSON.stringify(error.args);

    let severityName = this.severity === 1 ? 'RECOVERABLE' : 'CRITICAL';
    let codeName = 'UNKNOWN';
    let categoryName = 'UNKNOWN';

    for (var k in PlayerError.Code){
      if (this.code === PlayerError.Code[k]){
        codeName = k;
      }
    }

    for (var i in PlayerError.Category){
      if (this.category === PlayerError.Category[i]){
        categoryName = i;
      }
    }

    let message = severityName + "." + categoryName + "."+ codeName + "." + ' ('+this.data+')';

    this.dispatchEvent(new CustomEvent('Error', {message: message}));

  }

  errorHandlerCallback(error): void {
    this._callback(error);
  }

  setCallbackFunction(callback: Function): void{
    this._callback = callback;
  }

  /**
   * @enum {number}
   * @export
   */
  static Severity = {
    /**
     * An error occurred, but the Player is attempting to recover from the error.
     *
     * If the Player cannot ultimately recover, it still may not throw a CRITICAL
     * error.  For example, retrying for a media segment will never result in
     * a CRITICAL error (the Player will just retry forever).
     */
    'RECOVERABLE': 1,
    /**
     * A critical error that the library cannot recover from.  These usually cause
     * the Player to stop loading or updating.  A new manifest must be loaded
     * to reset the library.
     */
    'CRITICAL': 2
  }



  /**
   * @enum {number}
   * @export
   */
  static Category = {
    "NETWORK": 1,
    "TEXT": 2,
    "MEDIA": 3,
    "MANIFEST": 4,
    "STREAMING": 5,
    "DRM": 6,
    "PLAYER": 7,
    "CAST": 8,
    "STORAGE": 9,
    "ADS": "A"
  }

  static Code = {
    /**
     * DRM
     */
    "BAD_FAIRPLAY_RESPONSE" : 6001,
    /**
     * DRM
     */
    "COULD_NOT_CREATE_MEDIA_KEYS" : 6002,
    /**
     * DRM
     */
    "COULD_NOT_CREATE_KEY_SESSION" : 6002,


    /**
     *  TEXT
     */
    "BAD_VALUE": 1001,

    /**
     * playkit-js-dash
     */

    /**
     * playkit-js-hls
     */

    /**
     * playkit-js-ima
     */

    /**
     * playkit-js-kanalytics
     */

    /**
     * playkit-js-providers
     */

    /**
     * playkit-js-ui
     */

    /**
     * playkit-js-youbora
     */

    /**
     * kaltura-player
     */




  }









  // static TYPE: {[name: string]: Object} = {
  //   NOT_REGISTERED_PLUGIN: {
  //     name: "PluginNotRegisteredException",
  //     message: function (name) {
  //       return `Cannot load ${name} plugin. Name not found in the registry`;
  //     }
  //   },
  //   NOT_VALID_HANDLER: {
  //     name: "PluginHandlerIsNotValidException",
  //     message: function () {
  //       return "To activate plugin you must provide a class derived from BasePlugin";
  //     }
  //   },
  //   NOT_IMPLEMENTED_METHOD: {
  //     name: "NotImplementedException",
  //     message: function (method) {
  //       return `${method} method not implemented`;
  //     }
  //   }
  // };
  //
  // name: string;
  // message: string;
  //
  // constructor(error: Object, param?: any) {
  //   this.name = error.name;
  //   this.message = error.message(param);
  // }
  //
  // getError() {
  //   return {
  //     name: this.name,
  //     message: this.message
  //   };
  // }
}
