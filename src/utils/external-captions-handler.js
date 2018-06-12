import Error from '../error/error'
import * as Utils from './util'
import {Parser, StringDecoder} from '../track/text-track-display'

class ExternalCaptionsHandler {

  static VTT_POSTFIX: string = 'vtt';

  static SRT_POSTFIX: string = 'srt';

  _videoElement: HTMLVideoElement = null;

  constructor(videoElement: HTMLVideoElement) {
    this._videoElement = videoElement;
  }

  _getCaptionsArray(url: string): Promise<*> {
    return new Promise((resolve, reject) => {
      Utils.Http.execute(url, {}, 'GET').then(response => {
        let parser = new Parser(window, StringDecoder());
        let cues = [];
        switch (this._getFileType(url)) {
          case ExternalCaptionsHandler.VTT_POSTFIX:
            parser.oncue = cue => {
              cues.push(cue);
            };
            parser.onflush = () => {
              resolve(cues);
            };
            parser.parse(response);
            parser.flush();
            break;
          case ExternalCaptionsHandler.SRT_POSTFIX:
            // this._srtToCues(response);
            break;
        }
      }).catch(error => {
        reject(new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.HTTP_ERROR, error.payload));
      })
    });
  }

  createCaptions(captions: Array<Object>): Promise<*> {
    return new Promise((resolve) => {
      let promiseArr = [];

      captions.forEach((caption) => {
        promiseArr.push(this.createAndAddCaption(caption));
      });

      return Promise.all(promiseArr).then(tracks => {
        resolve(tracks);
      });
    });
  }

  createAndAddCaption(config: Object): Promise<*> {
    return new Promise((resolve) => {
      this._getCaptionsArray(config.url)
        .then(cues => {
          resolve({
            label: config.label,
            language: config.language,
            isDefault: config.default,
            cues: cues
          })
        });
    });
  }

  _indexOfSameLanguageTrack(caption): number {
    const trackList = this._videoElement.textTracks;
    let index = -1;
    for (let i = 0; i < trackList.length; i++) {
      if (trackList[i].language === caption.language) {
        index = i;
        break;
      }
    }
    return index;
  }

  createNativeTextTrack(captions: Array<any>): void {
    captions.forEach(caption => {
      let track;
      const sameLanguageTrackIndex = this._indexOfSameLanguageTrack(caption);
      if (sameLanguageTrackIndex > -1) {
        track = this._videoElement.textTracks[sameLanguageTrackIndex];
        track.mode = 'hidden';
        if (track.cues) {
          track.cues.forEach(cue => {
            track.removeCue(cue);
          });
        }
      } else {
        track = this._videoElement.addTextTrack("captions", caption.label, caption.language);
      }
      caption.cues.forEach(cue => {
        track.addCue(cue);
      });
    });
  }

  _getFileType(url: string): string {
    return url.split(/\#|\?/)[0].split('.').pop().trim();
  }
}

export default ExternalCaptionsHandler;
