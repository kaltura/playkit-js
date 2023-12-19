import { EventManager } from '../event/event-manager';
import { FakeEventTarget } from '../event/fake-event-target';
import getLogger from '../utils/logger';
import {Parser, StringDecoder} from '../track/text-track-display';
import * as Utils from '../utils/util';
import {ThumbnailInfo} from './thumbnail-info';
import Error from '../error/error';
import { FakeEvent } from '../event/fake-event';
import {Html5EventType} from '../event/event-type';
import {PKExternalThumbnailsConfig, PKThumbnailVttCue} from '../types';

const VTT_INCLUDES_SIZE_ONLY: RegExp = /#wh=/i;
const VTT_INCLUDES_SIZE_AND_COORDS: RegExp = /#xywh=/i;

const RELATIVE_PATH_PATTERN: RegExp = new RegExp('^/[^/].+');

class ExternalThumbnailsHandler extends FakeEventTarget {
  constructor() {
    super();
    this._eventManager = new EventManager();
  }

  /**
   * The external thumbnails handler class logger.
   * @type {any}
   * @static
   * @private
   */
  private static _logger: any = getLogger('ExternalThumbnailsHandler');

  /**
   * event manager for the external thumbnails handler
   * @type {EventManager}
   * @private
   */
  private _eventManager: EventManager;

  /**
   * the processed thumbnail cues
   * @type {Array<Cue>}
   * @private
   */
  private _cues: Array<PKThumbnailVttCue> = [];

  /**
   * computed img dimensions based on its natural ratio
   * @type {Object}
   * @private
   */
  private _naturalImgSize!: {width: number, height: number} | null;

  /**
   * start the loading and parsing process of the vtt thumbnails file.
   * @param {PKExternalThumbnailsConfig} thumbnailsConfig - the external vtt thumbnails config
   * @returns {void}
   * @public
   */
  public async load(thumbnailsConfig: PKExternalThumbnailsConfig): Promise<void> {
    if (!thumbnailsConfig) {
      return;
    }
    ExternalThumbnailsHandler._logger.debug('start loading the vtt thumbnails');
    await this._downloadAndParseCues(thumbnailsConfig);
  }

  /**
   * returns the thumbnail info for the requested timing.
   * @param {number} time - timing in th playback timeline in milliseconds.
   * @returns {ThumbnailInfo | null} - the thumbnail img info.
   * @public
   */
  public getThumbnail(time: number): ThumbnailInfo | null {
    const cue: PKThumbnailVttCue | null = this._findCue(time, this._cues);
    if (cue) {
      const {imgUrl} = cue;
      let {size, coordinates} = cue;
      size = size ? size : this._naturalImgSize;
      coordinates = coordinates ? coordinates : {x: 0, y: 0};
      const thumbnailInfo = {url: imgUrl, ...size, ...coordinates};
      return new ThumbnailInfo(thumbnailInfo as ThumbnailInfo);
    }
    return null;
  }

  /**
   * indicate whether or not this player using external vtt thumbnails.
   * @returns {boolean} whether or not this player using external vtt thumbnails.
   * @public
   */
  public isUsingVttThumbnails(): boolean {
    return !!this._cues?.length;
  }

  /**
   * download and parse the vtt file
   * @param {PKExternalThumbnailsConfig} thumbnailsConfig - the thumbnails user config
   * @returns {Promise<void>} - resolve when the loading and parsing process is complete
   * @private
   */
  private async _downloadAndParseCues(thumbnailsConfig: PKExternalThumbnailsConfig): Promise<void> {
    try {
      const VttStr: string = await this._downloadVttFile(thumbnailsConfig);
      const cuesArray: Array<VTTCue> = await this._processVtt(VttStr);
      this._cues = await this._formatIntoThumbnailCues(cuesArray, thumbnailsConfig);
    } catch (error) {
      this.dispatchEvent(new FakeEvent(Html5EventType.ERROR, error));
    }
  }

  /**
   * Make a request to download the vtt file.
   * @param {PKExternalThumbnailsConfig} thumbnailsConfig - the thumbnails config object.
   * @returns {Promise<string>} - resolves with the vtt string.
   * @private
   */
  private async _downloadVttFile(thumbnailsConfig: PKExternalThumbnailsConfig): Promise<string> {
    try {
      return await Utils.Http.execute(thumbnailsConfig.vttUrl, {}, 'GET');
    } catch (error) {
      throw new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.HTTP_ERROR, error);
    }
  }

  /**
   * this calls the VTTCue parser and parse the .vtt thumbnails string into vttCues objects
   * @param {string} vttStr - a string in a .vtt format to be parsed into VTTCues
   * @returns {Array<Cue>} - parsed cues array
   * @private
   */
  private async _processVtt(vttStr: string): Promise<VTTCue[]> {
    return new Promise<VTTCue[]>((resolve, reject) => {
      const parser = new Parser(window, StringDecoder());
      const cues: VTTCue[] = [];
      parser.oncue = ((cue): void => {cues.push(cue)});
      parser.onflush = (): void => {
        ExternalThumbnailsHandler._logger.debug('finished parsing thumbnails cues');
        resolve(cues);
      };
      parser.parse(vttStr);
      parser.flush();
      parser.onparsingerror(error => reject(error));
    });
  }

  /**
   * format vtt text track cues into thumbnails track cues.
   * @param {Array<Cue>} cues - array of VTTCues in the vtt text track format
   * @param {PKExternalThumbnailsConfig} thumbnailsConfig - the external vtt thumbnails config
   * @returns {Array<PKThumbnailVttCue>} - cues contains the thumbnails metadata.
   * @private
   */
  private async _formatIntoThumbnailCues(cues: Array<VTTCue>, thumbnailsConfig: PKExternalThumbnailsConfig): Promise<PKThumbnailVttCue[]> {
    if (!this.validateThumbnailsVTTFormat(cues)) {
      throw new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.INVALID_VTT_THUMBNAILS_FILE, {
        message: 'invalid thumbnail vtt format',
        vttUrl: thumbnailsConfig.vttUrl
      });
    } else {
      const sampleProcessedCue: PKThumbnailVttCue = this._extractCueMetadata(cues[0], thumbnailsConfig);
      if (!(await this.validateImgUrl(sampleProcessedCue.imgUrl))) {
        throw new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.INVALID_VTT_THUMBNAILS_FILE, {
          message: 'failed loading the image - invalid image url',
          imgUrl: sampleProcessedCue.imgUrl
        });
      } else {
        this._naturalImgSize = await this.extractImgNaturalDimensions(sampleProcessedCue.imgUrl);
        const thumbnailCues: Array<PKThumbnailVttCue> = [];
        for (const cue of cues) {
          const processedCue: PKThumbnailVttCue = this._extractCueMetadata(cue, thumbnailsConfig);
          thumbnailCues.push(processedCue);
        }
        return thumbnailCues;
      }
    }
  }

  private validateThumbnailsVTTFormat(cues): boolean {
    return cues.length && cues[0] instanceof VTTCue;
  }

  /**
   * extracts the image dimensions based on its natural ratio and save it.
   * @param {string} imgUrl - the img url extracted from the vtt cue
   * @returns {Object} - the natural image dimensions
   * @private
   */
  private extractImgNaturalDimensions(imgUrl: string): Promise<{height: number, width: number} | null> {
    return new Promise(resolve => {
      const img = new Image();
      img.src = imgUrl;
      this._eventManager.listenOnce(img, 'load', () => {
        resolve({height: img.naturalHeight, width: img.naturalWidth});
      });
      this._eventManager.listenOnce(img, 'error', () => resolve(null));
    });
  }

  /**
   * make sure the final constructed thumbnail img url is valid.
   * @param {string} imgUrl - the img url extracted from the vtt cue
   * @returns {boolean} - indicates the url is valid or not
   * @private
   */
  private validateImgUrl(imgUrl: string): Promise<boolean> {
    return new Promise(resolve => {
      const img = new Image();
      img.src = imgUrl;
      this._eventManager.listenOnce(img, 'load', () => {
        resolve(true);
      });
      this._eventManager.listenOnce(img, 'error', () => resolve(false));
    });
  }

  /**
   * format vtt cue into thumbnail cue - by extracting the img options metadata.
   * @param {VTTCue} vttCue - a parsed VTTCue in the vtt text cue format
   * @param {PKExternalThumbnailsConfig} thumbnailsConfig - the thumbnails config
   * @returns {PKThumbnailVttCue} - cue object contains the img metadata.
   * @private
   */
  private _extractCueMetadata(vttCue: VTTCue, thumbnailsConfig: PKExternalThumbnailsConfig): PKThumbnailVttCue {
    const {startTime, endTime, text} = vttCue;
    const imgBaseUrl = thumbnailsConfig.vttUrl.substring(0, thumbnailsConfig.vttUrl.lastIndexOf('/'));
    const isVTTIncludesImgSizeOnly: boolean = VTT_INCLUDES_SIZE_ONLY.test(text);
    const isVTTIncludesImgSizeAndCoords: boolean = VTT_INCLUDES_SIZE_AND_COORDS.test(text);
    let isValidThumbnailVTTFormat: boolean = false;

    let imgUrl: string;
    let imgData: string;
    let coordinates: {x: number, y: number} | null = null;
    let size: {width: number, height: number} | null = null;

    if (isVTTIncludesImgSizeOnly) {
      [imgUrl] = text.split(VTT_INCLUDES_SIZE_ONLY);
      ExternalThumbnailsHandler._logger.warn(
        `vtt thumbnails in "${VTT_INCLUDES_SIZE_ONLY}" form - is supported but the width and height options are ignored and The images will be displayed in their natural dimensions`
      );
      isValidThumbnailVTTFormat = imgUrl !== undefined;
    } else if (isVTTIncludesImgSizeAndCoords) {
      [imgUrl, imgData] = text.split(VTT_INCLUDES_SIZE_AND_COORDS);
      const [x, y, width, height] = imgData.split(',').map(Number);
      coordinates = {x, y};
      size = {width, height};
      isValidThumbnailVTTFormat = [x, y, width, height, imgUrl].every(option => option !== undefined);
    } else {
      imgUrl = text;
      isValidThumbnailVTTFormat = !!text;
    }

    if (!(imgUrl.indexOf('http://') === 0 || imgUrl.indexOf('https://') === 0)) {
      imgUrl = RELATIVE_PATH_PATTERN.test(imgUrl) ? imgUrl.substring(1) : imgUrl;
      imgUrl = `${imgBaseUrl}/${imgUrl}`;
    }

    if (!isValidThumbnailVTTFormat) {
      throw new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.INVALID_VTT_THUMBNAILS_FILE, {
        message: 'error while parsing the vtt cues - invalid cue',
        parsedCue: {startTime, endTime, options: text}
      });
    } else {
      return {startTime, endTime, imgUrl, size, coordinates};
    }
  }

  /**
   * search the cue that matches the requested timing in the timeline - in the cues array.
   * @param {number} time - timing in th playback timeline in milliseconds.
   * @param {Array<PKThumbnailVttCue>} cues - the thumbnails cues array.
   * @returns {PKThumbnailVttCue | null} - the thumbnail cue linked to that timing.
   * @private
   */
  private _findCue(time: number, cues: Array<PKThumbnailVttCue>): PKThumbnailVttCue | null {
    let left = 0;
    let right = cues.length - 1;
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const potentialCueMatch: PKThumbnailVttCue = cues[middle];
      if (time >= potentialCueMatch.startTime && time < potentialCueMatch.endTime) {
        return cues[middle];
      } else if (time < potentialCueMatch.startTime) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return null;
  }

  /**
   * resets the handler
   * @returns {void}
   * @public
   */
  public reset(): void {
    this._cues = [];
    this._eventManager.removeAll();
    this._naturalImgSize = {} as {width: number, height: number};
  }

  /**
   * destroy the handler
   * @returns {void}
   * @public
   */
  public destroy(): void {
    this.reset();
    this._eventManager.destroy();
  }
}

export {ExternalThumbnailsHandler};
