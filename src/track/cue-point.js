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

CuePoint.TYPE = {
  ID3: 'id3',
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

/**
 * Create a cue point from a standard TextTrackCue.
 * @param {TextTrackCue} cue - text track cue.
 * @returns {?CuePoint} - the created cue point.
 * @private
 */
function createCuePoint(cue: TextTrackCue): ?CuePoint {
  if (cue) {
    const {startTime, endTime, id, value} = cue;
    return new CuePoint(startTime, endTime, id, _getType(cue), value);
  }
  return null;
}

/**
 * @param {TextTrackCue} cue - cue
 * @return {string} - type
 * @private
 */
function _getType(cue: TextTrackCue): string {
  const {
    type,
    track: {label},
    value: {key}
  } = cue;
  let cuePointType = Object.values(CuePoint.TYPE).find(type => type === key);
  if (!cuePointType) {
    cuePointType = type === 'org.id3' || label === 'id3' ? CuePoint.TYPE.ID3 : CuePoint.TYPE.CUSTOM;
  }
  return cuePointType;
}

export {CuePoint, createTextTrackCue, createCuePoint};
