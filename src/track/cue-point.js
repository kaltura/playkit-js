//@flow
class CuePoint {
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
   * @param {string|Object} metadata - metadata.
   */
  constructor(startTime: number, endTime: number, id: string, type: string, metadata: string | Object) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.id = id;
    this.type = type;
    this.metadata = metadata;
  }
}

CuePoint.TYPE = {
  EMSG: 'emsg',
  CUSTOM: 'custom'
};

/**
 * Create a standard TextTrackCue.
 * @param {CuePoint} cuePoint - cue point.
 * @returns {TextTrackCue} - the created text track cue
 * @private
 */
function createTextTrackCue(cuePoint: CuePoint): TextTrackCue {
  const {startTime, endTime, id, type, metadata} = cuePoint;
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
}

export {CuePoint, createTextTrackCue};
