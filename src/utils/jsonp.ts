import Error from '../error/error';

const JSONP_TIMEOUT: number = 5000;
const CALLBACK_PREFIX: string = 'jsonpcallback';
const JSONP_FORMAT_STRING: string = 'responseFormat=jsonp&callback=';

/**
 * JSONP utility.
 * @param {string} url - The url of the request.
 * @param {string} callback - Callback function to be called when the request returns.
 * @param {Object} options - Object contains configuration (currently only timeout).
 * @returns {Promise<*>} - A promise with the callback output.
 */
function jsonp(url: string, callback: (...args: any[]) => any, options: { timeout: number}): Promise<any> {
  options = options || {} as { timeout: number};
  const timeout = options.timeout ? options.timeout : JSONP_TIMEOUT;
  const script = document.createElement('script');
  const callbackId = CALLBACK_PREFIX + Math.round(Date.now() + Math.random() * 1000001);
  let scriptUri = url;
  let timer;

  /**
   * function to clean the DOM from the script tag and from the function
   * @returns {void}
   */
  const _cleanup = (): void => {
    if (script && script.parentNode) {
      script.parentNode.removeChild(script);
    }
    window[callbackId] = (): void => {};
    if (timer) {
      clearTimeout(timer);
    }
  };

  return new Promise((resolve, reject) => {
    if (timeout) {
      timer = setTimeout( () => {
        _cleanup();
        reject(new Error(Error.Severity.CRITICAL, Error.Category.NETWORK, Error.Code.TIMEOUT, url));
      }, timeout);
    }

    /**
     * a wrapper to the callback function, to save a closure
     * @param {Object} data - the data we get from the server, in response to the request
     * @returns {void}
     */
    window[callbackId] = (data: any): void => {
      const callbackResult = callback(data, url);
      _cleanup();
      resolve(callbackResult);
    };

    if (scriptUri.match(/\?/)) {
      scriptUri += '&' + JSONP_FORMAT_STRING + callbackId;
    } else {
      scriptUri += '?' + JSONP_FORMAT_STRING + callbackId;
    }

    script.type = 'text/javascript';
    script.src = scriptUri;
    document.getElementsByTagName('head')[0].appendChild(script);
  });
}

export {jsonp};
