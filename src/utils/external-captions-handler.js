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
        switch (this._getFileType(url)) {
          case ExternalCaptionsHandler.VTT_POSTFIX:
            this._parseCues(response, resolve);
            break;
          case ExternalCaptionsHandler.SRT_POSTFIX:
            response = this._convertSrtToVtt(response);
            this._parseCues(response, resolve);
            break;
        }
      }).catch(error => {
        reject(new Error(Error.Severity.RECOVERABLE, Error.Category.TEXT, Error.Code.HTTP_ERROR, error.payload));
      })
    });
  }

  _parseCues(vttStr: string, resolve: Function): void {
    const parser = new Parser(window, StringDecoder());
    let cues = [];
    parser.oncue = cue => {
      cues.push(cue);
    };
    parser.onflush = () => {
      resolve(cues);
    };
    parser.parse(vttStr);
    parser.flush();
  }


  _convertSrtToVtt(str: string): string {
    return str.replace(/(\d\d:\d\d:\d\d).(\d\d\d) --> (\d\d:\d\d:\d\d).(\d\d\d)/g, (match, part1, part2, part3, part4) => {
      return `${part1},${part2} --> ${part3},${part4}`;
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
          Object.values(track.cues).forEach(cue => {
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
