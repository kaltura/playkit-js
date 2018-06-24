import Error from '../error/error'
import * as Utils from '../utils/util'
import {Parser, StringDecoder} from './text-track-display'
import {TrackType} from './track-type';
import TextTrack from './text-track';
import {CustomEventType, Html5EventType} from '../event/event-type';
import FakeEvent from '../event/fake-event';
import getLogger from '../utils/logger';
import EventManager from '../event/event-manager';
import FakeEventTarget from '../event/fake-event-target';


const cuesStatus = {
  'NOT_DOWNLOADED': 1,
  'DOWNLOADING': 2,
  'DOWNLOADED': 3
};

const SRT_POSTFIX: string = 'srt';

const VTT_POSTFIX: string = 'vtt';

class ExternalCaptionsHandler extends FakeEventTarget {
  /**
   * The player class logger.
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
   * @type {Object}
   * @private
   */
  _player: null;
  /**
   * event manager for the external caption handler
   * @type {EventManager}
   * @private
   */
  _eventManager: EventManager = null;
  /**
   * a map that holds the current cues that are in process. process may be in download or that the cues are being parsed.
   * @type {Object}
   * @private
   */
  _textTrackModel: Object = {};

  /**
   * array of the active text cues of current track
   * @type {Array<any>}
   * @private
   */
  _activeTextCues: Array<any> = [];

  /**
   * check if the listeners are attached or not.
   * @type {boolean}
   * @private
   */
  _listenersAttached: boolean = false;
  /**
   * indicates if a current external (non native) track is active or not.
   * @type {boolean}
   * @private
   */
  _textTrackActive: boolean = false;
  /**
   * indicates the last player time in the last time update event.
   * @type {number}
   * @private
   */
  _lastTimeUpdate: number = 0;

  /**
   * constructor
   * @param {Object} player - the player object.
   */
  constructor(player: Object) {
    super();
    this._player = player;
    this._eventManager = new EventManager();
  }

  /**
   * adds listeners to the player, so the module will handle them on its own.
   * @returns {void}
   * @private
   */
  _addListenersIfNeeded(): void {
    if (!this._listenersAttached) {
      this._listenersAttached = true;
      this._eventManager.listen(this._player, this._player.Event.SEEKED, (e) => {
        this._maybeSetExternalCueIndex(e)
      });
      this._eventManager.listen(this._player, this._player.Event.TEXT_TRACK_CHANGED, (e) => {
        this._handleTextTrackChanged(e)
      });
    }
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
        reject(new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.UNKOWN_FILE_TYPE, {captionType: captionType}))
      }
      Utils.Http.execute(track.url, {}, 'GET').then(response => {
        resolve(captionType === SRT_POSTFIX ? this._convertSrtToVtt(response) : response);
      }).catch(error => {
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
      parser.oncue = cue => {
        cues.push(cue);
      };
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
    return str.replace(/(\d\d:\d\d:\d\d).(\d\d\d) --> (\d\d:\d\d:\d\d).(\d\d\d)/g, (match, part1, part2, part3, part4) => {
      return `${part1},${part2} --> ${part3},${part4}`;
    });
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
    this._textTrackModel[textTrack.language].cuesStatus = cuesStatus.DOWNLOADING;
    return new Promise((resolve) => {
      this._getCuesString(textTrack)
        .then(vttString => {
          return this._parseCues(vttString);
        }).then(cuesArray => {
        this._textTrackModel[textTrack.language].cues = cuesArray;
        resolve();
      });
    });
  }

  /**
   * getting the file extension
   * @param {string} url - the url of the file
   * @returns {string} type of the file
   * @private
   */
  _getFileType(url: string): string {
    return url.split(/\#|\?/)[0].split('.').pop().trim();
  }

  /**
   * callback for the 'timeupdate' event. on each time update this runs and checks if the active text cues array
   * was changed.
   * @param {TextTrack} track - the text track that that is currently displayed (active)
   * @returns {void}
   * @private
   */
  _handleCaptionOnTimeUpdate(track: TextTrack): void {
    if (this._activeTextCues.length > 0 && this._player.currentTime < this._activeTextCues[this._activeTextCues.length - 1].startTime) {
      this._activeTextCues = [];
      this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_CUE_CHANGED, {cues: []}));
    } else {
      if (Math.abs(this._player.currentTime - this._lastTimeUpdate) > 1) {
        this._maybeSetExternalCueIndex();
      }
      const cues = this._textTrackModel[track.language].cues;
      let activeCuesChanged = false;
      for (let activeTextCuesIndex = 0; activeTextCuesIndex < this._activeTextCues.length; activeTextCuesIndex++) {
        const cue = this._activeTextCues[activeTextCuesIndex];
        if (this._player.currentTime < cue.startTime || cue.endTime < this._player.currentTime) {
          this._activeTextCues.splice(activeTextCuesIndex, 1);
          activeCuesChanged = true;
        }
      }
      while (this._externalCueIndex < cues.length && this._player.currentTime > cues[this._externalCueIndex].startTime) {
        this._activeTextCues.push(cues[this._externalCueIndex]);
        this._externalCueIndex++;
        activeCuesChanged = true;
      }
      if (activeCuesChanged) {
        this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_CUE_CHANGED, {cues: this._activeTextCues}));
      }
    }
    // sometimes the timeupdate event is fired before the seeked event - so we need to know the user seeked.
    this._lastTimeUpdate = this._player.currentTime;
  }

  /**
   * updating the index of the text cues to the right location after a user seeked.
   * @returns {void}
   * @private
   */
  _maybeSetExternalCueIndex(): void {
    const textTrack = this._player.getTracks(TrackType.TEXT).filter(track => track.active && track.external)[0];
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
   * adding external tracks (native or moduled tracks)
   * @returns {Array<TextTrack>} returns an array with the new external tracks
   * @public
   */
  getExternalTracks(): Array<TextTrack> {
    const captions = this._player.config.sources.captions;
    if (!captions) {
      return [];
    }
    this._addListenersIfNeeded();
    const textTracks = this._player.getTracks(TrackType.TEXT);
    let textTracksLength = textTracks.length || 0;
    const newTextTracks = [];
    captions.forEach(caption => {
      const track = new TextTrack({
        active: false,
        index: textTracksLength++,
        kind: "subtitles",
        label: caption.label,
        language: caption.language,
        external: true,
      });
      const sameLangTrack = textTracks.find(textTrack => caption.language === textTrack.language);
      this._textTrackModel[caption.language] = {
        cuesStatus: cuesStatus.NOT_DOWNLOADED,
        cues: [],
        url: caption.url,
        type: caption.type
      };
      if (this._player.config.playback.useNativeTextTrack) {
        this._player.addNativeTextTrack(track);
      }
      if (!sameLangTrack) {
        newTextTracks.push(track);
      }
    });
    return newTextTracks;
  }

  /**
   * selects external track start listenning to cues
   * @param {TextTrack} textTrack - selected text track
   * @returns {void}
   * @public
   */
  selectTextTrack(textTrack: TextTrack): Promise<*> {
    return new Promise((resolve) => {
      if (this._textTrackModel[textTrack.language].cuesStatus === cuesStatus.DOWNLOADED && !this._player.config.playback.useNativeTextTrack) {
        this._setTextTrack(textTrack);
        resolve();
      } else if (this._textTrackModel[textTrack.language].cuesStatus === cuesStatus.NOT_DOWNLOADED) {
        if (!textTrack.active) {
          this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_TRACK_CHANGED, {selectedTextTrack: textTrack}));
          textTrack.active = true;
          this._downloadAndParseCues(textTrack).then(() => {
            this._textTrackModel[textTrack.language].cuesStatus = cuesStatus.DOWNLOADED;
            if (this._player.config.playback.useNativeTextTrack) {
              this._player.addCuesToNativeTextTrack(textTrack, this._textTrackModel[textTrack.language].cues);
            } else {
              this._setTextTrack(textTrack);
            }
            resolve();
          })
        }
      }
    });
  }

  /**
   * selects external track start listenning to cues
   * @param {TextTrack} textTrack - selected text track
   * @returns {void}
   * @public
   */
  hideTextTrack(): void {
    // only if external text track was active we need to hide it.
    if (this._textTrackActive) {
      this._eventManager.unlisten(this._player, Html5EventType.TIME_UPDATE);
      this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_CUE_CHANGED, {cues: []}));
      this._activeTextCues = [];
    }
  }

  /**
   * when a text track is changed we might need to
   * for native tracks - selecting the text track (adding the cues if its the first time the user selected the track)
   * or - remove an event listener to a current external text track
   * @param {FakeEvent} event - event with the selected track payload
   * @returns {void}
   * @private
   */
  _handleTextTrackChanged(event: FakeEvent): void {
    if (event.payload && event.payload.selectedTextTrack && this._player.config.playback.useNativeTextTrack && event.payload.selectedTextTrack.external) {
      this.selectTextTrack(event.payload.selectedTextTrack);
    }
  }

  /**
   * triggering the text track changed event and start listening to the time update on the player (for the the external text track).
   * @param {TextTrack} textTrack - text track to be set
   * @returns {void}
   * @private
   */
  _setTextTrack(textTrack: textTrack): void {
    if (!this._player.config.playback.useNativeTextTrack) {
      this._textTrackActive = true;
        ExternalCaptionsHandler._logger.debug('External text track changed', textTrack);
        this._activeTextCues = [];
        this.dispatchEvent(new FakeEvent(CustomEventType.TEXT_CUE_CHANGED, {cues: this._activeTextCues}));
        this._eventManager.listen(this._player, Html5EventType.TIME_UPDATE, () => this._handleCaptionOnTimeUpdate(textTrack))

    }
  }

  /**
   * resets the handler
   * @returns {void}
   */
  reset(): void {
    this._textTrackModel = {};
    this._activeTextCues = [];
    this._listenersAttached = false;
    this._eventManager.removeAll();
  }

  /**
   * destroy function
   * @public
   * @returns {void}
   */
  destroy(): void {
    this._eventManager.destroy();
    this._activeTextCues = null;
  }
}

export {ExternalCaptionsHandler};
