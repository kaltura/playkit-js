//@flow
class TimedMetadata {
  static TYPE: {[type: string]: string};

  startTime: number;
  endTime: number;
  id: string;
  type: string;
  metadata: string | Object;
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
function createTextTrackCue(timedMetadata: TimedMetadata): ?TextTrackCue {
  try {
    const {startTime, endTime, id, type, metadata} = timedMetadata;
    let cue = {};
    if (window.VTTCue) {
      cue = new window.VTTCue(startTime, endTime, '');
    } else if (window.TextTrackCue) {
      // IE11 support
      cue = new window.TextTrackCue(startTime, endTime, '');
    }
    const cueValue = {key: type, data: metadata};
    cue.id = id;
    cue.value = cueValue;
    return cue;
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
function createTimedMetadata(cue: TextTrackCue): ?TimedMetadata {
  if (cue) {
    const {startTime, endTime, id} = cue;
    const typeAndMetadata = _getTypeAndMetadata(cue);
    if (typeAndMetadata) {
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
function _getTypeAndMetadata(cue: TextTrackCue): Object {
  if (cue) {
    const {type, value, track} = cue;
    if (value) {
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
