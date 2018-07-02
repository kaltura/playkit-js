//@flow
import Error from '../error/error'
import * as Utils from '../utils/util'
import {Parser, StringDecoder} from './text-track-display'
import {TrackType} from './track-type';
import TextTrack from './text-track';
import Track from './track';
import {CustomEventType, Html5EventType} from '../event/event-type';
import FakeEvent from '../event/fake-event';
import getLogger from '../utils/logger';
import EventManager from '../event/event-manager';
import FakeEventTarget from '../event/fake-event-target';
import {Cue} from './vtt-cue';
import Player from '../player';

type CueStatusType = { [status: string]: number };

/**
 * enum for cues statuses
 * @const
 * @type {Object}
 */
const CuesStatus: CueStatusType = {
  'NOT_DOWNLOADED': 1,
  'DOWNLOADING': 2,
  'DOWNLOADED': 3
};

const SRT_POSTFIX: string = 'srt';

const VTT_POSTFIX: string = 'vtt';

export const ExternalCaptionsEventType: { [event: string]: string } = {
  NATIVE_TEXT_TRACK_ADDED: 'nativetexttrackadded'
};

class ExternalCaptionsHandler extends FakeEventTarget {
  /**
   * The external captions handler class logger.
   * @type {any}
   * @static
   * @private
   */
  static _logger: any = getLogger('ExternalCaptionsHandler');
  /**
   * Index that specifies the last cue that is playing / played in the text track cue array.
   * @type {number}
   * @private
   */
  _externalCueIndex: number = 0;
  /**
   * the player object.
   * @type {Player}
   * @private
   */
  _player: Player;
  /**
   * event manager for the external caption handler
   * @type {EventManager}
   * @private
   */
  _eventManager: EventManager;
  /**
   * a map that holds the current cues that are in process. process may be in download or that the cues are being parsed.
   * @type {Object}
   * @private
   */
  _textTrackModel: Object = {};
  /**
   * array of the active text cues of current track
   * @type {Array<Cue>}
   * @private
   */
  _activeTextCues: Array<Cue> = [];
  /**
   * indicates if a current external (non native) track is active or not.
   * @type {boolean}
   * @private
   */
  _isTextTrackActive: boolean = false;
  /**
   * indicates the last player time in the last time update event.
   * @type {number}
   * @private
   */
  _lastTimeUpdate: number = 0;

  /**
   * constructor
   * @param {Player} player - the player object.
   */
  constructor(player: Player) {
    super();
    this._player = player;
    this._eventManager = new EventManager();
  }

  /**
   * selects external track start listening to cues
   * @returns {void}
   * @public
   */
  hideTextTrack(): void {
    // only if external text track was active we need to hide it.
    if (this._isTextTrackActive) {
      this._eventManager.unlisten(this._player, Html5EventType.TIME_UPDATE);
      this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_CUE_CHANGED, {cues: []}));
      this._activeTextCues = [];
    }
  }

  /**
   * get external tracks (native and/or player module tracks)
   * @returns {Array<TextTrack>} returns an array with the new external tracks
   * @param {Array<Track>} tracks array with the player text tracks.
   * @public
   */
  getExternalTracks(tracks: Array<Track>): Array<TextTrack> {
    const captions = this._player.config.sources.captions;
    if (!captions) {
      return [];
    }
    this._eventManager.listen(this._player, this._player.Event.SEEKED, (e) => this._maybeSetExternalCueIndex(e));
    const textTracks = tracks.filter(track => track instanceof TextTrack)
    let textTracksLength = textTracks.length || 0;
    const newTextTracks = [];
    captions.forEach(caption => {
      const track = new TextTrack({
        active: !!caption.default,
        index: textTracksLength++,
        kind: "subtitles",
        label: caption.label,
        language: caption.language,
        external: true,
      });
      const sameLangTrack = textTracks.find(textTrack => caption.language === textTrack.language);
      this._textTrackModel[caption.language] = {
        cuesStatus: CuesStatus.NOT_DOWNLOADED,
        cues: [],
        url: caption.url,
        type: caption.type
      };
      if (!sameLangTrack) {
        if (this._player.config.playback.useNativeTextTrack) {
          this._addNativeTextTrack(track);
        }
        newTextTracks.push(track);
      } else {
        ExternalCaptionsHandler._logger.warn('duplicated language, taking the inbend option. Language: ', sameLangTrack.language);
      }
    });
    return newTextTracks;
  }

  /**
   * selects external track start listening to cues
   * @param {TextTrack} textTrack - selected text track
   * @returns {void}
   * @public
   */
  selectTextTrack(textTrack: TextTrack): void {
    if (this._textTrackModel[textTrack.language]) {
      if (this._textTrackModel[textTrack.language].cuesStatus === CuesStatus.DOWNLOADED && !this._player.config.playback.useNativeTextTrack) {
        textTrack.active = true;
        this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_TRACK_CHANGED, {selectedTextTrack: textTrack}));
        this._setTextTrack(textTrack);
      } else if (this._textTrackModel[textTrack.language].cuesStatus === CuesStatus.NOT_DOWNLOADED) {
        textTrack.active = true;
        if (!this._player.config.playback.useNativeTextTrack) {
          this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_TRACK_CHANGED, {selectedTextTrack: textTrack}));
        }
        this._downloadAndParseCues(textTrack).then(() => {
          this._textTrackModel[textTrack.language].cuesStatus = CuesStatus.DOWNLOADED;
          if (this._player.config.playback.useNativeTextTrack) {
            this._addCuesToNativeTextTrack(textTrack, this._textTrackModel[textTrack.language].cues);
          } else {
            this._setTextTrack(textTrack);
          }
        }).catch(error => this.dispatchEvent(new FakeEvent(Html5EventType.ERROR, error)));
      }
    }
  }

  /**
   * resets the handler
   * @returns {void}
   */
  reset(): void {
    this._textTrackModel = {};
    this._activeTextCues = [];
    this._eventManager.removeAll();
  }

  /**
   * destroy function
   * @public
   * @returns {void}
   */
  destroy(): void {
    this._textTrackModel = {};
    this._eventManager.destroy();
    this._activeTextCues = [];
  }

  /**
   * Make a request to download a caption and parse it's content to cues.
   * @param {TextTrack} textTrack - download and parse the cues of the text track
   * @returns {Promise<any>} - resolves when the request returns and the caption string is parsed to cues.
   * @private
   */
  _getCuesString(textTrack: TextTrack): Promise<*> {
    return new Promise((resolve, reject) => {
      const track = this._textTrackModel[textTrack.language];
      const captionType = track.type || this._getFileType(track.url);
      if (![SRT_POSTFIX, VTT_POSTFIX].includes(captionType)) {
        this._textTrackModel[textTrack.language].cuesStatus = CuesStatus.NOT_DOWNLOADED;
        reject(new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.UNKNOWN_FILE_TYPE, {captionType: captionType}))
      }
      Utils.Http.execute(track.url, {}, 'GET').then(response => {
        resolve(captionType === SRT_POSTFIX ? this._convertSrtToVtt(response) : response);
      }).catch(error => {
        this._textTrackModel[textTrack.language].cuesStatus = CuesStatus.NOT_DOWNLOADED;
        reject(new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.HTTP_ERROR, error.payload));
      })
    });
  }

  /**
   * this calls the VTTCue parser and parse the .vtt captions string into vttCues objects
   * @param {string} vttStr - a string in a .vtt format to parse into VTTCues
   * @returns {Promise<*>} - parsed cues array
   * @private
   */
  _parseCues(vttStr: string): Promise<*> {
    return new Promise((resolve, reject) => {
      const parser = new Parser(window, StringDecoder());
      const cues = [];
      parser.oncue = cue => cues.push(cue);
      parser.onflush = () => {
        ExternalCaptionsHandler._logger.debug('finished parsing external cues');
        resolve(cues);
      };
      parser.parse(vttStr);
      parser.flush();
      parser.onparsingerror(e => reject(e))
    })
  }

  /**
   * converts a .SRT string into .VTT string
   * @param {string} str - a string in a .SRT format
   * @returns {string} - a string in a .VTT format
   * @private
   */
  _convertSrtToVtt(str: string): string {
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
  _downloadAndParseCues(textTrack: TextTrack): Promise<*> {
    this._textTrackModel[textTrack.language].cuesStatus = CuesStatus.DOWNLOADING;
    return new Promise((resolve, reject) => {
      this._getCuesString(textTrack)
        .then(vttString => this._parseCues(vttString))
        .then(cuesArray => {
          this._textTrackModel[textTrack.language].cues = cuesArray;
          resolve();
        }).catch(error => reject(error));
    });
  }

  /**
   * getting the file extension
   * @param {string} url - the url of the file
   * @returns {string} type of the file
   * @private
   */
  _getFileType(url: string): string {
    return url.split(/[#?]/)[0].split('.').pop().trim();
  }

  /**
   * callback for the 'timeupdate' event. on each time update this runs and checks if the active text cues array
   * was changed.
   * @param {TextTrack} track - the text track that that is currently displayed (active)
   * @returns {void}
   * @private
   */
  _handleCaptionOnTimeUpdate(track: TextTrack): void {
    const currentTime = this._player.currentTime;
    if (currentTime) {
      if (this._activeTextCues.length > 0 && currentTime < this._activeTextCues[this._activeTextCues.length - 1].startTime) {
        this._activeTextCues = [];
        this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_CUE_CHANGED, {cues: []}));
      } else {
        if (Math.abs(currentTime - this._lastTimeUpdate) > 1) {
          this._maybeSetExternalCueIndex();
        }
        const cues = this._textTrackModel[track.language].cues;
        let activeCuesChanged = false;
        for (let activeTextCuesIndex = 0; activeTextCuesIndex < this._activeTextCues.length; activeTextCuesIndex++) {
          const cue = this._activeTextCues[activeTextCuesIndex];
          if (currentTime < cue.startTime || cue.endTime < currentTime) {
            this._activeTextCues.splice(activeTextCuesIndex, 1);
            activeCuesChanged = true;
          }
        }
        while (this._externalCueIndex < cues.length && currentTime > cues[this._externalCueIndex].startTime) {
          this._activeTextCues.push(cues[this._externalCueIndex]);
          this._externalCueIndex++;
          activeCuesChanged = true;
        }
        if (activeCuesChanged) {
          this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_CUE_CHANGED, {cues: this._activeTextCues}));
        }
      }
      // sometimes the timeupdate event is fired before the seeked event - so we need to know the user seeked.
      this._lastTimeUpdate = currentTime;
    }
  }

  /**
   * updating the index of the text cues to the right location after a user seeked.
   * @returns {void}
   * @private
   */
  _maybeSetExternalCueIndex(): void {
    const textTrack = this._player.getTracks(TrackType.TEXT).find(track => track instanceof TextTrack && track.active && track.external);
    if (textTrack && textTrack.external) {
      const cues = this._textTrackModel[textTrack.language].cues;
      let i = 0;
      while (this._player.currentTime > cues[i].startTime && i < cues.length) {
        i++;
      }
      this._externalCueIndex = i;
    }
  }

  /**
   * adding cues to an existing text element in a video tag
   * @param {TextTrack} textTrack - adding cues to an exiting text track element
   * @param {Array<Cue>} cues - the cues to be added
   * @return {void}
   */
  _addCuesToNativeTextTrack(textTrack: TextTrack, cues: Array<Cue>): void {
    const videoElement = this._player.getVideoElement();
    if (videoElement) {
      const track = Array.from(videoElement.textTracks).find(track => track ? track.language === textTrack.language : false);
      if (track) {
        cues.forEach(cue => track.addCue(cue));
      }
    }
  }

  /**
   * adds a new text track element to the video element or set an existing one
   * (when adding a text track with existing language to the video element it will remove all its cues)
   * @param {TextTrack} textTrack - the playkit text track object to be added
   * @returns {void}
   */
  _addNativeTextTrack(textTrack: TextTrack): void {
    const videoElement = this._player.getVideoElement();
    if (videoElement) {
      const sameLanguageTrackIndex = Array.from(videoElement.textTracks).findIndex(track => track ? track.language === textTrack.language : false);
      if (sameLanguageTrackIndex > -1) {
        const domTrack = videoElement.textTracks[sameLanguageTrackIndex];
        if (domTrack.cues) {
          Object.values(domTrack.cues).forEach(cue => domTrack.removeCue(cue));
        }
      } else {
        videoElement.addTextTrack("subtitles", textTrack.label || textTrack.language, textTrack.language);
      }
      this.dispatchEvent(new FakeEvent(ExternalCaptionsEventType.NATIVE_TEXT_TRACK_ADDED));
    }
  }

  /**
   * triggering the text track changed event and start listening to the time update on the player (for the the external text track).
   * @param {TextTrack} textTrack - text track to be set
   * @returns {void}
   * @private
   */
  _setTextTrack(textTrack: TextTrack): void {
    if (!this._player.config.playback.useNativeTextTrack) {
      this._isTextTrackActive = true;
      ExternalCaptionsHandler._logger.debug('External text track changed', textTrack);
      this._activeTextCues = [];
      this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_CUE_CHANGED, {cues: this._activeTextCues}));
      this._eventManager.listen(this._player, Html5EventType.TIME_UPDATE, () => this._handleCaptionOnTimeUpdate(textTrack));
    }
  }
}

export {ExternalCaptionsHandler};
