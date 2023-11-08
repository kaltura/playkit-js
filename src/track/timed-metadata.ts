import {PKTextTrackCue} from '../types';

class TimedMetadata {
  public static TYPE: {[type: string]: string};

  public startTime: number;
  public endTime: number;
  public id: string;
  public type: string;
  public metadata: string | any;
  /**
   * @constructor
   * @param {number} startTime - start time.
   * @param {number} endTime - end time.
   * @param {string} id - id.
   * @param {string} type - type.
   * @param {any} metadata - metadata.
   */
  constructor(startTime: number, endTime: number, id: string, type: string, metadata: any) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.id = id;
    this.type = type;
    this.metadata = metadata;
  }
}

TimedMetadata.TYPE = {
  ID3: 'id3',
  EMSG: 'emsg',
  CUE_POINT: 'cuepoint',
  CUSTOM: 'custom'
};

/**
 * Create a standard TextTrackCue.
 * @param {TimedMetadata} timedMetadata - timed metadata object.
 * @returns {TextTrackCue} - the created text track cue
 * @private
 */
function createTextTrackCue(timedMetadata: TimedMetadata): PKTextTrackCue | null {
  try {
    const {startTime, endTime, id, type, metadata} = timedMetadata;
    const cue = new VTTCue(startTime, endTime, '');
    const cueValue = {key: type, data: metadata};
    cue.id = id;
    cue['value'] = cueValue;
    return cue as unknown as PKTextTrackCue;
  } catch (e) {
    return null;
  }
}

/**
 * Create a timed metadata object from a standard TextTrackCue.
 * @param {TextTrackCue} cue - text track cue.
 * @returns {?TimedMetadata} - the created timed metadata object.
 * @private
 */
function createTimedMetadata(cue: TextTrackCue): TimedMetadata | null {
  if (cue) {
    const {startTime, endTime, id} = cue;
    const typeAndMetadata = _getTypeAndMetadata(cue);
    if (typeAndMetadata) {
      // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const {type, metadata} = _getTypeAndMetadata(cue);
      return new TimedMetadata(startTime, endTime, id, type, metadata);
    }
  }
  return null;
}

/**
 * @param {TextTrackCue} cue - cue
 * @return {Object} - type and data
 * @private
 */
function _getTypeAndMetadata(cue: TextTrackCue | PKTextTrackCue): { metadata: any; type: string } | null {
  if (cue) {
    if ('value' in cue && cue.value) {
      const {type, value, track} = cue;
      const {key, data} = value;
      const isId3 = type === 'org.id3' || (track && track.label) === 'id3';
      let timedMetadataType = Object.values(TimedMetadata.TYPE).find(type => type === key);
      if (!timedMetadataType) {
        timedMetadataType = isId3 ? TimedMetadata.TYPE.ID3 : TimedMetadata.TYPE.CUSTOM;
      }
      return {
        type: timedMetadataType,
        metadata: isId3 || !data ? value : data
      };
    }
  }
  return null;
}

export {TimedMetadata, createTextTrackCue, createTimedMetadata};
