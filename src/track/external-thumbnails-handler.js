import Player from '../player';
import EventManager from '../event/event-manager';
import FakeEventTarget from '../event/fake-event-target';
import getLogger from '../utils/logger';
import {Parser, StringDecoder} from './text-track-display';
import * as Utils from '../utils/util';
import {ThumbnailInfo} from '../thumbnail/thumbnail-info';
import {Cue} from './vtt-cue';

const DEFAULT_THUMBNAIL_SIZE: {width: number, height: number} = {
  width: 164,
  height: 92
};

const VTT_WITH_IMG_SIZE: RegExp = /#xy=/i;
const VTT_WITH_IMG_SIZE_AND_COORDS: RegExp = /#xywh=/i;

class ExternalThumbnailsHandler extends FakeEventTarget {
  /**
   * constructor
   * @param {Player} player - the player instance.
   */
  constructor(player: Player) {
    super();
    this._player = player;
    this._eventManager = new EventManager();
  }

  /**
   * The external thumbnails handler class logger.
   * @type {any}
   * @static
   * @private
   */
  static _logger: any = getLogger('ExternalThumbnailsHandler');

  /**
   * the player instance.
   * @type {Player}
   * @private
   */
  _player: Player;

  /**
   * event manager for the external thumbnails handler
   * @type {EventManager}
   * @private
   */
  _eventManager: EventManager;

  /**
   * the processed thumbnail cues
   * @type {Array<Cue>}
   * @private
   */
  _cues: Array<PKThumbnailVttCue> = [];

  /**
   * base url of the images or the sprite img
   * @type {string}
   * @private
   */
  _imgBaseUrl: string;

  /**
   * start the loading and parsing process of the vtt thumbnails file.
   * @returns {void}
   * @public
   */
  async load(): Promise<void> {
    const thumbnailsConfig: PKExternalThumbnailsConfig = this._player.sources.thumbnails;
    if (!thumbnailsConfig) {
      return [];
    }
    this._imgBaseUrl = this._player.sources.thumbnails.imgBaseUrl || null;
    await this._downloadAndParseCues(thumbnailsConfig);
  }

  /**
   * find and return the img info for the requested time.
   * @param {number} time - playback time in milliseconds.
   * @returns {ThumbnailInfo | null} - the thumbnail img info for the requested time.
   * @public
   */
  getThumbnail(time: number): ThumbnailInfo | null {
    const cue: PKThumbnailVttCue = this._findCue(time);
    if (cue) {
      let {size, coordinates, imgUrl} = cue;
      size = size ? size : DEFAULT_THUMBNAIL_SIZE;
      const thumbnailInfo = {url: imgUrl, ...size, ...coordinates};
      return new ThumbnailInfo(thumbnailInfo);
    }
    return null
  }

  /**
   * indicate whether or not this player using external vtt thumbnails.
   * @returns {boolean} whether or not this player using external vtt thumbnails.
   * @public
   */
  isUsingVttThumbnails(): boolean {
    return !!this._cues.length;
  }

  /**
   * download and parse the vtt file
   * @param {PKExternalThumbnailsConfig} thumbnailsConfig - the thumbnails user config
   * @returns {Promise<void>} - resolve when the loading and parsing process is complete
   * @private
   */
  async _downloadAndParseCues(thumbnailsConfig: PKExternalThumbnailsConfig): Promise<void> {
    const VttStr: string = await this._downloadVttFile(thumbnailsConfig);
    const cuesArray: Array<Cue> = await this._processVtt(VttStr);
    this._cues = await this._formatIntoThumbnailCues(cuesArray);
  }

  /**
   * Make a request to download the vtt file.
   * @param {PKExternalThumbnailsConfig} thumbnailsConfig - the thumbnails config object.
   * @returns {Promise<string>} - resolves with the vtt string.
   * @private
   */
  async _downloadVttFile(thumbnailsConfig: PKExternalThumbnailsConfig): Promise<string> {
    return await Utils.Http.execute(thumbnailsConfig.vttUrl, {}, 'GET');
  }

  /**
   * this calls the VTTCue parser and parse the .vtt thumbnails string into vttCues objects
   * @param {string} vttStr - a string in a .vtt format to be parsed into VTTCues
   * @returns {Array<Cue>} - parsed cues array
   * @private
   */
  async _processVtt(vttStr: string): Promise<Array<Cue>> {
    return new Promise((resolve, reject) => {
      const parser: Parser = new Parser(window, StringDecoder());
      const cues: Cue[] = [];
      parser.oncue = cue => cues.push(cue);
      parser.onflush = () => {
        ExternalThumbnailsHandler._logger.debug('finished parsing thumbnails cues');
        resolve(cues);
      };
      parser.parse(vttStr);
      parser.flush();
      parser.onparsingerror(e => reject(e));
    });
  }

  /**
   * format vtt text track cues into thumbnails track cues.
   * @param {Array<Cue>} cues - array of VTTCues in the vtt text track format
   * @returns {Array<PKThumbnailVttCue>} - cues contains the thumbnails metadata.
   * @private
   */
  _formatIntoThumbnailCues(cues: Array<Cue>): Array<any> {
    const thumbnailCues: Array<PKThumbnailVttCue> = [];
    for (const cue of cues) {
      const processedCue: PKThumbnailVttCue = this._extractCueMetadata(cue);
      thumbnailCues.push(processedCue);
    }
    return thumbnailCues;
  }

  /**
   * format vtt cue into thumbnail cue - by extracting the img options metadata.
   * @param {Cue} cue - a parsed VTTCue in the vtt text cue format
   * @returns {PKThumbnailVttCue} - cue object contains the img metadata.
   * @private
   */
  _extractCueMetadata(cue: Cue): PKThumbnailVttCue {
    const {startTime, endTime, text} = cue;
    const isVTTIncludesImgSize: boolean = VTT_WITH_IMG_SIZE.test(text);
    const isVTTIncludesImgSizeAndCoords: boolean = VTT_WITH_IMG_SIZE_AND_COORDS.test(text);

    let imgUrl: string;
    let imgData: string;
    let coordinates: {x: number, y: number} | null = null;
    let size: {width: number, height: number} = null;

    if (isVTTIncludesImgSize) {
      // Vtt includes just url and size metadata
      [imgUrl, imgData] = text.split(VTT_WITH_IMG_SIZE);
      const [width, height] = imgData.split(',').map(Number);
      coordinates = {x: 0, y: 0};
      size = {width, height};
    } else if (isVTTIncludesImgSizeAndCoords) {
      // Vtt includes coordinates in addition to url and size metadata - sprite img
      [imgUrl, imgData] = text.split(VTT_WITH_IMG_SIZE_AND_COORDS);
      const [x, y, width, height] = imgData.split(',').map(Number);
      coordinates = {x, y};
      size = {width, height};
    } else {
      // Vtt includes just a url metadata
      coordinates = {x: 0, y: 0};
      imgUrl = text;
    }
    imgUrl = this._imgBaseUrl ? `${this._imgBaseUrl}/${imgUrl}` : imgUrl;
    return {startTime, endTime, imgUrl, size, coordinates};
  }

  /**
   * search the thumbnail cue match for the requested time int the cues array.
   * @param {number} time - playback time in milliseconds.
   * @returns {ThumbnailInfo | null} - the thumbnail cue match for the requested time.
   * @private
   */
  _findCue(time: number): ThumbnailInfo | null {
    let left = 0,
      right = this._cues.length;
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const potentialCueMatch: PKThumbnailVttCue = this._cues[middle];
      if (time >= potentialCueMatch.startTime && time < potentialCueMatch.endTime) {
        return this._cues[middle];
      } else if (time < potentialCueMatch.startTime) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return null;
  }
}

export {ExternalThumbnailsHandler};
