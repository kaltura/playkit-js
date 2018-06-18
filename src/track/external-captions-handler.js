import Error from '../error/error'
import * as Utils from '../utils/util'
import {Parser, StringDecoder} from './text-track-display'
import {TrackType} from "./track-type";
import TextTrack from "./text-track";
import {CustomEventType, Html5EventType} from "../event/event-type";
import FakeEvent from "../event/fake-event";
import getLogger from "../utils/logger";
import EventManager from "../event/event-manager";

class ExternalCaptionsHandler {

  static SRT_POSTFIX: string = 'srt';
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
   * a callback of the timeupdate, for external captions handler.
   * @type {Function}
   * @private
   */
  _handleExternalCaptionsCallback: Function = null;
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
   * @type {Object} language: promise<*>
   * @private
   */
  _cuesInProcessMap: Object = {};

  /**
   * constructor
   * @param {Object} player - the player object.
   */
  constructor(player: Object) {
    this._player = player;
    this._eventManager = new EventManager();
    this._addListeners();
  }

  /**
   * adds listeners to the player, so the module will handle them on its own.
   * @returns {void}
   * @private
   */
  _addListeners(): void {
    this._eventManager.listen(this._player, this._player.Event.SEEKED, (e) => {
      this._maybeSetExternalCueIndex(e)
    });
    this._eventManager.listen(this._player, this._player.Event.TEXT_TRACK_CHANGED, (e) => {
      this._handleTextTrackChanged(e)
    });
  }

  /**
   * Make a request to download a caption and parse it's content to cues.
   * @param {TextTrack} textTrack - download and parse the cues of the text track
   * @returns {Promise<any>} - resolves when the request returns and the caption string is parsed to cues.
   * @private
   */
  _getCuesArray(textTrack: TextTrack): Promise<*> {
    let cuesPromise = new Promise((resolve, reject) => {
      Utils.Http.execute(textTrack.url, {}, 'GET').then(response => {
        if ((typeof textTrack.captionsType != 'undefined' && textTrack.captionsType === ExternalCaptionsHandler.SRT_POSTFIX) || this._getFileType(textTrack.url) === ExternalCaptionsHandler.SRT_POSTFIX) {
          response = this._convertSrtToVtt(response);
        }
        this._parseCues(response, resolve);
      }).catch(error => {
        reject(new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.HTTP_ERROR, error.payload));
      })
    });
    this._cuesInProcessMap[textTrack.language] = cuesPromise;
    return cuesPromise;
  }

  /**
   * this calls the VTTCue parser and parse the .vtt captions string into vttCues objects
   * @param {string} vttStr - a string in a .vtt format to parse into VTTCues
   * @param {Function} resolve - a resolve function of the calling function.
   * @returns {void}
   * @private
   */
  _parseCues(vttStr: string, resolve: Function): void {
    const parser = new Parser(window, StringDecoder());
    let cues = [];
    parser.oncue = cue => {
      cues.push(cue);
    };
    parser.onflush = () => {
      ExternalCaptionsHandler._logger.debug('finished parsing external cues');
      resolve(cues);
    };
    parser.parse(vttStr);
    parser.flush();
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
   * @param {TextTrack} textTrack - create a single caption. when the process ends, the caption is removed from the
   * _cuesInProcessMap.
   * @returns {Promise<any>} - the caption object with the parsed cues
   * @private
   */
  _createCaption(textTrack: TextTrack): Promise<*> {
    return new Promise((resolve) => {
      this._getCuesArray(textTrack)
        .then(cues => {
          textTrack.cues = cues;
          this._player.setTextTrackCues(textTrack);
          delete this._cuesInProcessMap[textTrack.language];
          resolve();
        });
    });
  }

  /**
   * this function runs on the players text tracks and checks if there is already a text track with the same language
   * as the new one.
   * @param {TextTrack} textTrack - the text track to check
   * @returns {number} - the index of the text track with the same language (if there is any). and -1 if there isn't
   * @private
   */
  _indexOfSameLanguageTrack(textTrack: TextTrack): number {
    const trackList = this._player.getVideoElement().textTracks;
    let index = -1;
    for (let i = 0; i < trackList.length; i++) {
      if (trackList[i].language === textTrack.language) {
        index = i;
        break;
      }
    }
    return index;
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
    if (this._player.activeTextCues.length > 0 && this._player.currentTime < this._player.activeTextCues[this._player.activeTextCues.length - 1].startTime) {
      this._player.activeTextCues = [];
      this._player.onCueChange({
        payload: {
          cues: []
        }
      });
    } else {
      let _activeCuesChanged = false;
      for (let _activeTextCuesIndex = 0; _activeTextCuesIndex < this._player.activeTextCues.length; _activeTextCuesIndex++) {
        let _cue = this._player.activeTextCues[_activeTextCuesIndex];
        if (this._player.currentTime < _cue.startTime || _cue.endTime < this._player.currentTime) {
          this._player.activeTextCues.splice(_activeTextCuesIndex, 1);
          _activeCuesChanged = true;
        }
      }
      while (this._player.currentTime > track.cues[this._externalCueIndex].startTime) {
        this._player.activeTextCues.push(track.cues[this._externalCueIndex]);
        this._externalCueIndex++;
        _activeCuesChanged = true;
      }
      if (_activeCuesChanged) {
        this._player.onCueChange({
          payload: {
            cues: this._player.activeTextCues
          }
        });
      }
    }
  }

  /**
   * updating the index of the text cues to the right location after a user seeked.
   * @returns {void}
   * @private
   */
  _maybeSetExternalCueIndex(): void {
    const textTrack = this._player.getTracks(TrackType.TEXT).filter(track => track.active && track.external)[0];
    if (textTrack && textTrack.external) {
      let cues = textTrack.cues;
      let i = 0;
      while (this._player.currentTime > cues[i].startTime && i < cues.length) {
        i++;
      }
      this._externalCueIndex = i;
    }
  }

  /**
   * adding external tracks (native or moduled tracks)
   * @returns {Promise<any>} returns a promise when all the tracks were parsed and added.
   * @public
   */
  addTracks(): void {
    const captions = this._player.config.sources.captions;
    if (!captions) {
      return;
    }
    let textTracks = this._player.getTracks(TrackType.TEXT);
    let textTracksLength = textTracks.length || 0;
    captions.forEach(caption => {
      let track = new TextTrack({
        active: false,
        index: textTracksLength++,
        kind: "subtitles",
        label: caption.label,
        language: caption.language,
        external: true,
        url: caption.url,
        type: caption.type,
        cues: []
      });
      let sameLangTrack = textTracks.find(textTrack => caption.language === textTrack.language);
      // replace the track with a new one, update only the cues to []
      if (sameLangTrack) {
        this._player.setTextTrackCues(track);
      } else {
        this._player.addTrack(track);
      }
      if (this._player.config.playback.useNativeTextTrack)
        this._setNativeTextTrack(track);
    });
  }

  /**
   * selects external track start listenning to cues
   * @param {TextTrack} textTrack - selected text track
   * @returns {void}
   * @public
   */
  selectTextTrack(textTrack: TextTrack): Promise<*> {
    return new Promise((resolve) => {
      if (textTrack.cues.length > 0 && !this._player.config.playback.useNativeTextTrack) {
        this._setTextTrack(textTrack);
        resolve();
      } else if (!this._cuesInProcessMap[textTrack.language]) {
        this._createCaption(textTrack).then(() => {
          if (this._player.config.playback.useNativeTextTrack) {
            this._addCuesToNativeTrack(textTrack);
          } else {
            this._setTextTrack(textTrack);
          }
          resolve();
        })
      }
    });
  }

  /**
   * when a text track is changed we might need to
   * for native tracks - selecting the text track (adding the cues if its the first time the user selected the track)
   * or - remove an event listener to a current external text track
   * @param {FakeEvent} event
   * @private
   */
  _handleTextTrackChanged(event: FakeEvent): void {
    if (event.payload && event.payload.selectedTextTrack) {
      if (this._player.config.playback.useNativeTextTrack && event.payload.selectedTextTrack.external) {
        this.selectTextTrack(event.payload.selectedTextTrack);
      } else if (!this._player.config.playback.useNativeTextTrack && !event.payload.selectedTextTrack.external) {
        this._eventManager.unlisten(this._player, Html5EventType.TIME_UPDATE);
        this._player.onCueChange({
          payload: {
            cues: []
          }
        });
      }
    }
  }

  /**
   * setting and adding a text track to the video element
   * @param {TextTrack } textTrack - the player module TextTrack that will be set
   * @returns {TextTrack} - the DOM text track that was set
   * @private
   */
  _setNativeTextTrack(textTrack: TextTrack): TextTrack {
    let _domTrack;
    const _videoElement = this._player.getVideoElement();
    const _sameLanguageTrackIndex = this._indexOfSameLanguageTrack(textTrack);
    if (_sameLanguageTrackIndex > -1) {
      _domTrack = _videoElement.textTracks[_sameLanguageTrackIndex];
      _domTrack.mode = 'showing';
      if (_domTrack.cues) {
        Object.values(_domTrack.cues).forEach(cue => {
          _domTrack.removeCue(cue);
        });
      }
    } else {
      _domTrack = _videoElement.addTextTrack("subtitles", textTrack.label, textTrack.language);
      this._player._getTracksByType(TrackType.TEXT).map(track => {
        track.index = track.index + 1;
      });
      textTrack.index = parseInt(Object.keys(_videoElement.textTracks).find(key => _videoElement.textTracks[key] === _domTrack));
    }
    return _domTrack;
  }

  /**
   * adding cues to a native text track
   * @param {TextTrack} textTrack - the text track containing the cues to add
   * @returns {void}
   * @private
   */
  _addCuesToNativeTrack(textTrack: TextTrack): void {
    const track = Object.values(this._player.getVideoElement().textTracks).filter(track => track.language === textTrack.language)[0];
    textTrack.cues.forEach(cue => {
      track.addCue(cue);
    });
  }

  /**
   * setting an external track as active, de-actvating all the rest and start listening to time updates.
   * @param {TextTrack} textTrack - text track to be set
   * @private
   */
  _setTextTrack(textTrack: textTrack): void {
    if (!this._player.config.playback.useNativeTextTrack) {
      const track = this._player._getTracksByType(TrackType.TEXT).filter(track => {
        if (track.index !== textTrack.index) {
          track.active = false;
        } else {
          return true;
        }
      })[0];
      if (!track.active) {
        this._player.disableAllTextTracks();
        ExternalCaptionsHandler._logger.debug('External text track changed', track);
        track.active = true;
        this._player.dispatchEvent(new FakeEvent(CustomEventType.TEXT_TRACK_CHANGED, {selectedTextTrack: track}));
        this._handleExternalCaptionsCallback = () => {
          this._handleCaptionOnTimeUpdate(track);
        };
        this._eventManager.listen(this._player, Html5EventType.TIME_UPDATE, this._handleExternalCaptionsCallback)
      }
    }
  }

  /**
   * destroy function
   * @public
   * @returns {void}
   */
  destroy(): void {
    this._eventManager.unlisten(this._player, this._player.Event.SEEKED);
    this._eventManager.unlisten(this._player, this._player.Event.TEXT_TRACK_CHANGED);
  }
}

export default ExternalCaptionsHandler;
