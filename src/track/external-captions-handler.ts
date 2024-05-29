import Error from '../error/error';
import * as Utils from '../utils/util';
import {Parser, StringDecoder} from './text-track-display';
import TextTrack, {getActiveCues} from './text-track';
import TextStyle from './text-style';
import Track from './track';
import {CustomEventType, Html5EventType} from '../event/event-type';
import { FakeEvent } from '../event/fake-event';
import getLogger from '../utils/logger';
import { EventManager } from '../event/event-manager';
import { FakeEventTarget } from '../event/fake-event-target';
import Player from '../player';
import {PKExternalCaptionObject} from '../types/external-caption-object';

type CueStatusType = {[status: string]: number};

/**
 * enum for cues statuses
 * @const
 * @type {Object}
 */
const CuesStatus: CueStatusType = {
  NOT_DOWNLOADED: 1,
  DOWNLOADING: 2,
  DOWNLOADED: 3
};

const SRT_POSTFIX: string = 'srt';

const VTT_POSTFIX: string = 'vtt';

class ExternalCaptionsHandler extends FakeEventTarget {

  public static applyNativeTextTrackStyles(sheet: CSSStyleSheet, styles: TextStyle, containerId: string, engineClassName: string): void {
    sheet.insertRule(`#${containerId} video.${engineClassName}::-webkit-media-text-track-display { text-align: ${styles.textAlign}!important; }`, 0);
    sheet.insertRule(`#${containerId} video.${engineClassName}::cue { ${styles.toCSS()} }`, 0);
  }

  /**
   * The external captions handler class logger.
   * @type {any}
   * @static
   * @private
   */
  public static _logger: any = getLogger('ExternalCaptionsHandler');
  /**
   * Index that specifies the last cue that is playing / played in the text track cue array.
   * @type {number}
   * @private
   */
  private _externalCueIndex: number = 0;
  /**
   * the player object.
   * @type {Player}
   * @private
   */
  private _player: Player;
  /**
   * event manager for the external caption handler
   * @type {EventManager}
   * @private
   */
  private _eventManager: EventManager;
  /**
   * a map that holds the current cues that are in process. process may be in download or that the cues are being parsed.
   * @type {Object}
   * @private
   */
  private _textTrackModel: VTTCue = {} as VTTCue;
  /**
   * array of the active text cues of current track
   * @type {Array<Cue>}
   * @private
   */
  private _activeTextCues: Array<VTTCue> = [];
  /**
   * indicates if a current external (non native) track is active or not.
   * @type {boolean}
   * @private
   */
  private _isTextTrackActive: boolean = false;
  /**
   * indicates the last player time in the last time update event.
   * @type {number}
   * @private
   */
  private _lastTimeUpdate: number = 0;

  /**
   * constructor
   * @param {Player} player - the player object.
   */
  constructor(player: any) {
    super();
    this._player = player;
    this._eventManager = new EventManager();
  }

  /**
   * selects external track start listening to cues
   * @returns {void}
   * @public
   */
  public hideTextTrack(): void {
    if (this._player.config.text.useNativeTextTrack) {
      this._removeCueChangeListeners();
      this._resetExternalNativeTextTrack();
    } else {
      // only if external text track was active we need to hide it.
      if (this._isTextTrackActive) {
        this._eventManager.unlisten(this._player, Html5EventType.TIME_UPDATE);
        this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_CUE_CHANGED, {cues: []}));
        this._resetCurrentTrack();
      }
    }
  }

  /**
   * get external tracks (native and/or player module tracks)
   * @returns {Array<TextTrack>} returns an array with the new external tracks
   * @param {Array<Track>} tracks array with the player text tracks.
   * @public
   */
  public getExternalTracks(tracks: Array<Track>): Array<TextTrack> {
    const captions = this._player.sources.captions;
    if (!captions) {
      return [];
    }
    if (this._player.config.text.useNativeTextTrack) {
      this._addNativeTextTrack();
    }
    const playerTextTracks = tracks.filter(track => track instanceof TextTrack);
    const newTextTracks = [];
    captions.forEach(caption => {
      if (!caption.language) {
        const error = new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.UNKNOWN_LANGUAGE, {caption: caption});
        this.dispatchEvent(new FakeEvent(Html5EventType.ERROR, error));
      } else {
        const track = this._createTextTrack(caption);
        this._maybeAddTrack(track, caption, playerTextTracks, newTextTracks);
      }
    });
    return newTextTracks;
  }

  /**
   * checking if there is already a track with the same language
   * @param {TextTrack} track - textTrack to be added text tracks array that will be returned to the player
   * @param {PKExternalCaptionObject} caption - caption to be added to the model
   * @param {Array<Text>} playerTextTracks - player text tracks array
   * @param {Array<TextTrack>} newTextTracks - text track array that will be returned to the player
   * @returns {void}
   * @private
   */
  public _maybeAddTrack(track: TextTrack, caption: PKExternalCaptionObject, playerTextTracks: Array<Track>, newTextTracks: Array<TextTrack>): void {
    const sameLangTrack = playerTextTracks.find(textTrack => textTrack.available && Track.langComparer(caption.language, textTrack.language));
    if (!sameLangTrack) {
      newTextTracks.push(track);
      this._updateTextTracksModel(caption);
    } else {
      ExternalCaptionsHandler._logger.warn('duplicated language, taking the inband option. Language: ', sameLangTrack.language);
    }
  }

  /**
   * creates a new text track
   * @param {PKExternalCaptionObject} caption - caption to create the text track with
   * @returns {TextTrack} - new text track
   * @private
   */
  public _createTextTrack(caption: PKExternalCaptionObject): TextTrack {
    return new TextTrack({
      active: !!caption.default,
      kind: TextTrack.KIND.SUBTITLES,
      label: caption.label,
      language: caption.language,
      external: true
    });
  }

  /**
   * adding the caption to the class texttracks model
   * @param {PKExternalCaptionObject} caption - the caption to be added
   * @returns {void}
   * @private
   */
  public _updateTextTracksModel(caption: PKExternalCaptionObject): void {
    this._textTrackModel[caption.language] = {
      cuesStatus: CuesStatus.NOT_DOWNLOADED,
      cues: [],
      url: caption.url,
      type: caption.type
    };
  }

  /**
   * selects external track start listening to cues
   * @param {TextTrack} textTrack - selected text track
   * @returns {void}
   * @public
   */
  public selectTextTrack(textTrack: TextTrack): void {
    if (this._textTrackModel[textTrack.language]) {
      if (this._textTrackModel[textTrack.language].cuesStatus === CuesStatus.DOWNLOADED) {
        this._selectTextTrack(textTrack);
      } else if (this._textTrackModel[textTrack.language].cuesStatus === CuesStatus.NOT_DOWNLOADED) {
        this._downloadAndParseCues(textTrack)
          .then(() => {
            this._textTrackModel[textTrack.language].cuesStatus = CuesStatus.DOWNLOADED;
            this._selectTextTrack(textTrack);
          })
          .catch(error => this.dispatchEvent(new FakeEvent(Html5EventType.ERROR, error)));
      }
    }
  }

  private _selectTextTrack(textTrack: TextTrack): void {
    this.hideTextTrack();
    if (this._player.config.text.useNativeTextTrack) {
      this._addCuesToNativeTextTrack(this._textTrackModel[textTrack.language].cues);
      this._addCueChangeListener();
    } else {
      this._setTextTrack(textTrack);
    }
    textTrack.active = true;
    this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_TRACK_CHANGED, {selectedTextTrack: textTrack}));
  }
  /**
   * set hasBeenReset to true for all the cues.
   * @returns {void}
   */
  public resetAllCues(): void {
    for (const textTrack in this._textTrackModel) {
      this._textTrackModel[textTrack].cues.forEach(cue => {
        cue.hasBeenReset = true;
      });
    }
  }

  /**
   * Add cuechange listener to active textTrack.
   * @returns {void}
   * @private
   */
  private _addCueChangeListener(): void {
    const videoElement: HTMLVideoElement | undefined = this._player.getVideoElement();
    if (videoElement && videoElement.textTracks) {
      // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const textTrackEl: TextTrack | undefined = Array.from(videoElement.textTracks).find(
        track => TextTrack.isNativeTextTrack(track) && track.mode === TextTrack.MODE.SHOWING
      );
      if (textTrackEl) {
        // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this._eventManager.listen(textTrackEl, 'cuechange', (e: FakeEvent) => this._onCueChange(e));
      }
    }
  }

  /**
   * Remove cuechange listeners from textTracks
   * @returns {void}
   * @private
   */
  private _removeCueChangeListeners(): void {
    const videoElement: HTMLVideoElement | undefined = this._player.getVideoElement();
    if (videoElement && videoElement.textTracks) {
      for (let i = 0; i < videoElement.textTracks.length; i++) {
        this._eventManager.unlisten(videoElement.textTracks[i], 'cuechange');
      }
    }
  }

  /**
   * oncuechange event handler.
   * @param {FakeEvent} e - The event arg.
   * @returns {void}
   * @private
   */
  private _onCueChange(e: FakeEvent): void {
    const activeCues: TextTrackCueList = e.currentTarget.activeCues;
    const normalizedActiveCues = getActiveCues(activeCues);
    this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_CUE_CHANGED, {cues: normalizedActiveCues}));
  }

  /**
   * resets the handler
   * @returns {void}
   */
  public reset(): void {
    this._resetCurrentTrack();
    this._textTrackModel = {} as VTTCue;
    this._resetExternalNativeTextTrack();
    this._eventManager.removeAll();
  }

  /**
   * destroy function
   * @public
   * @returns {void}
   */
  public destroy(): void {
    this._textTrackModel = {} as VTTCue;
    this._eventManager.destroy();
    this._activeTextCues = [];
  }

  /**
   * resets all the params of the current external text track that is playing
   * @returns {void}
   * @private
   */
  private _resetCurrentTrack(): void {
    this._activeTextCues = [];
    this._isTextTrackActive = false;
    this._maybeSetExternalCueIndex();
  }

  /**
   * Make a request to download a caption and parse it's content to cues.
   * @param {TextTrack} textTrack - download and parse the cues of the text track
   * @returns {Promise<any>} - resolves when the request returns and the caption string is parsed to cues.
   * @private
   */
  private _getCuesString(textTrack: TextTrack): Promise<any> {
    return new Promise((resolve, reject) => {
      const track = this._textTrackModel[textTrack.language];
      const captionType = track.type || this._getFileType(track.url);
      if (![SRT_POSTFIX, VTT_POSTFIX].includes(captionType)) {
        this._textTrackModel[textTrack.language].cuesStatus = CuesStatus.NOT_DOWNLOADED;
        reject(new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.UNKNOWN_FILE_TYPE, {captionType: captionType}));
      }
      Utils.Http.execute(track.url, {}, 'GET')
        .then(response => {
          resolve(captionType === SRT_POSTFIX ? this._convertSrtToVtt(response) : response);
        })
        .catch(() => {
          this._textTrackModel[textTrack.language].cuesStatus = CuesStatus.NOT_DOWNLOADED;
          reject(
            new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.HTTP_ERROR, {
              url: track.url
            })
          );
        });
    });
  }

  /**
   * this calls the VTTCue parser and parse the .vtt captions string into vttCues objects
   * @param {string} vttStr - a string in a .vtt format to parse into VTTCues
   * @returns {Promise<*>} - parsed cues array
   * @private
   */
  private _parseCues(vttStr: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const parser = new Parser(window, StringDecoder());
      const cues: VTTCue[] = [];
      parser.oncue = ((cue): void => {cues.push(cue)});
      parser.onflush = (): void => {
        ExternalCaptionsHandler._logger.debug('finished parsing external cues');
        resolve(cues);
      };
      parser.parse(vttStr);
      parser.flush();
      parser.onparsingerror(e => reject(e));
    });
  }

  /**
   * converts a .SRT string into .VTT string
   * @param {string} str - a string in a .SRT format
   * @returns {string} - a string in a .VTT format
   * @private
   */
  private _convertSrtToVtt(str: string): string {
    const vttStr = str.replace(/(\d\d:\d\d:\d\d),(\d\d\d) --> (\d\d:\d\d:\d\d),(\d\d\d)/g, (match, part1, part2, part3, part4) => {
      return `${part1}.${part2} --> ${part3}.${part4}`;
    });
    return `WEBVTT\n\n${vttStr}`;
  }

  /**
   * resolves with a caption object that contains all the caption data
   * start the parsing, creation and addition of the external captions.
   * @param {TextTrack} textTrack - create a single caption. when the process ends, this._textTrackModel is updated with
   * DOWNLOADED status
   * @returns {Promise<any>} - a promise that the action ended
   * @private
   */
  private _downloadAndParseCues(textTrack: TextTrack): Promise<void> {
    this._textTrackModel[textTrack.language].cuesStatus = CuesStatus.DOWNLOADING;
    return new Promise((resolve, reject) => {
      this._getCuesString(textTrack)
        .then(vttString => this._parseCues(vttString))
        .then(cuesArray => {
          this._textTrackModel[textTrack.language].cues = cuesArray;
          resolve();
        })
        .catch(error => reject(error));
    });
  }

  /**
   * getting the file extension
   * @param {string} url - the url of the file
   * @returns {string} type of the file
   * @private
   */
  private _getFileType(url: string): string {
    return url.split(/[#?]/)[0].split('.').pop()!.trim();
  }

  /**
   * callback for the 'timeupdate' event. on each time update this runs and checks if the active text cues array
   * was changed.
   * @param {TextTrack} track - the text track that that is currently displayed (active)
   * @returns {void}
   * @private
   */
  private _handleCaptionOnTimeUpdate(track: TextTrack): void {
    const currentTime = this._player.currentTime;
    if (currentTime) {
      let cueIndexUpdated = false;
      if (this._hadSeeked()) {
        this._activeTextCues = [];
        cueIndexUpdated = this._maybeSetExternalCueIndex();
      }
      const activeCuesRemoved = this._maybeRemoveActiveCues();
      const activeCuesAdded = this._maybeAddToActiveCues(track);

      if (cueIndexUpdated || activeCuesAdded || activeCuesRemoved) {
        this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_CUE_CHANGED, {cues: this._activeTextCues}));
      }
      // sometimes the timeupdate event is fired before the seeked event - so we need to know the user seeked.
      this._lastTimeUpdate = currentTime;
    }
  }

  /**
   * check if there was a seek. we do that because 'timeupdate' is fired before 'seeked' event.
   * @returns {boolean} if there was a seek before
   * @private
   */
  private _hadSeeked(): boolean {
    return !!this._player.currentTime && Math.abs(this._player.currentTime - this._lastTimeUpdate) > 1;
  }

  /**
   * @returns {boolean} if a cue/cues were removed from the active text cues array
   * @private
   */
  private _maybeRemoveActiveCues(): boolean {
    const currentTime = this._player.currentTime;
    if (!currentTime) {
      return false;
    }

    const updatedActiveTextCues = this._activeTextCues.filter(cue => cue.startTime < currentTime && currentTime < cue.endTime);
    const hadRemoved = this._activeTextCues.length !== updatedActiveTextCues.length;
    this._activeTextCues = updatedActiveTextCues;

    return hadRemoved;
  }

  /**
   * @param {TextTrack} track - the selected text track
   * @returns {boolean} - if cues were added to the active text track
   * @private
   */
  private _maybeAddToActiveCues(track: TextTrack): boolean {
    const currentTime = this._player.currentTime;
    if (!currentTime) {
      return false;
    }
    let hadAdded = false;
    const cues = this._textTrackModel[track.language].cues;
    while (this._externalCueIndex < cues.length && currentTime > cues[this._externalCueIndex].startTime) {
      if (currentTime < cues[this._externalCueIndex].endTime) {
        this._activeTextCues.push(cues[this._externalCueIndex]);
      }
      this._externalCueIndex++;
      hadAdded = true;
    }
    return hadAdded;
  }

  /**
   * updating the index of the text cues to the right location after a user seeked.
   * @returns {boolean} if the index was changed
   * @private
   */
  private _maybeSetExternalCueIndex(): boolean {
    const textTrack = this._player._getTextTracks().find(track => track.active && track.external);
    if (textTrack && textTrack.external) {
      const cues = this._textTrackModel[textTrack.language] ? this._textTrackModel[textTrack.language].cues : [];
      let i = 0;
      for (; i < cues.length; i++) {
        // if there is a cue that should be displayed right now, cue start time < current time < cue end time
        if (cues[i].startTime < this._player.currentTime! && this._player.currentTime! < cues[i].endTime) {
          break;
          // this is for the first cue that is after the current time
        } else if (cues[i].endTime > this._player.currentTime! && cues[i].startTime > this._player.currentTime!) {
          break;
        }
      }
      this._externalCueIndex = i;
      return true;
    }
    return false;
  }

  /**
   * delete cues on reset to avoid usage of the text track on the next media
   * @return {void}
   */
  private _resetExternalNativeTextTrack(): void {
    const videoElement = this._player.getVideoElement();
    if (videoElement && videoElement.textTracks) {
      const track = Array.from(videoElement.textTracks).find(track => (track ? TextTrack.isExternalTrack(track) : false));
      if (track) {
        // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
        // @ts-ignore
        track.cues && Object.values(track.cues).forEach(cue => track.removeCue(cue));
        // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
        // @ts-ignore
        track.mode = TextTrack.MODE.DISABLED;
      }
    }
  }

  /**
   * adding cues to an existing text element in a video tag
   * @param {Array<Cue>} cues - the cues to be added
   * @return {void}
   */
  private _addCuesToNativeTextTrack(cues: Array<VTTCue>): void {
    const videoElement = this._player.getVideoElement();
    if (videoElement && videoElement.textTracks) {
      // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const track: TextTrack = Array.from(videoElement.textTracks).find(track => (track ? TextTrack.isExternalTrack(track) : false));
      if (track) {
        track.mode = TextTrack.MODE.SHOWING;
        // For IE 11 which is not support VTTCue API
        if (VTTCue === undefined) {
          const convertedCues: Array<TextTrackCue> = this._convertCues(cues);
          // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
          // @ts-ignore
          convertedCues.forEach(cue => track.addCue(cue));
        } else {
          // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
          // @ts-ignore
          cues.forEach(cue => track.addCue(cue));
        }
      }
    }
  }

  /**
   * converting cues to be instances of TextTrackCue
   * for browser which dose not support VTTCue API
   * @param {Array<Cue>} cues - the cues to be converted
   * @returns {Array<TextTrackCue>} the converted cues
   */
  private _convertCues(cues: Array<VTTCue>): Array<TextTrackCue> {
    // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return cues.map(cue => new TextTrackCue(cue.startTime, cue.endTime, cue.text));
  }

  /**
   * adds a new text track element to the video element or set an existing one
   * (when adding a text track with existing language to the video element it will remove all its cues)
   * @returns {void}
   */
  private _addNativeTextTrack(): void {
    const videoElement = this._player.getVideoElement();
    if (videoElement && videoElement.textTracks) {
      const sameLanguageTrackIndex = Array.from(videoElement.textTracks).findIndex(track => (track ? TextTrack.isExternalTrack(track) : false));
      if (sameLanguageTrackIndex > -1) {
        this._resetExternalNativeTextTrack();
      } else {
        videoElement.addTextTrack(TextTrack.KIND.SUBTITLES, TextTrack.EXTERNAL_TRACK_ID, TextTrack.EXTERNAL_TRACK_ID);
      }
    }
  }

  /**
   * triggering the text track changed event and start listening to the time update on the player (for the the external text track).
   * @param {TextTrack} textTrack - text track to be set
   * @returns {void}
   * @private
   */
  private _setTextTrack(textTrack: TextTrack): void {
    if (!this._player.config.text.useNativeTextTrack) {
      this._isTextTrackActive = true;
      ExternalCaptionsHandler._logger.debug('External text track changed', textTrack);
      this._activeTextCues = [];
      this._externalCueIndex = 0;
      this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_CUE_CHANGED, {cues: this._activeTextCues}));
      this._eventManager.listen(this._player, Html5EventType.TIME_UPDATE, () => this._handleCaptionOnTimeUpdate(textTrack));
    }
  }
}

export {ExternalCaptionsHandler};
