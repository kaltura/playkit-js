//@flow

import VideoTrack from '../track/video-track';

/**
 * Filter the video tracks which not in the range
 * @function filterVideoTracksByRestriction
 * @param {Array<VideoTrack>} tracks - The tracks to filter
 * @param {PKABRRestrictionObject} restriction - The restriction
 * @returns {Array<VideoTrack>} - The relevant video tracks after restrictions.
 */
function _filterVideoTracksByRestriction(tracks: Array<VideoTrack>, restriction: PKABRRestrictionObject): Array<VideoTrack> {
  const MIN_DEFAULT_VALUE = 0;
  const MAX_DEFAULT_VALUE = Infinity;
  const inRange = (x, min, max) => {
    return x >= (min || MIN_DEFAULT_VALUE) && x <= (max || MAX_DEFAULT_VALUE);
  };
  const {maxHeight, minHeight, maxWidth, minWidth} = restriction;
  if (minHeight !== MIN_DEFAULT_VALUE || minWidth !== MIN_DEFAULT_VALUE || maxHeight !== MAX_DEFAULT_VALUE || maxWidth !== MAX_DEFAULT_VALUE) {
    return tracks.filter(track => inRange(track.height, minHeight, maxHeight)).filter(track => inRange(track.width, minWidth, maxWidth));
  }
  const {maxBitrate, minBitrate} = restriction;
  if (minBitrate !== MIN_DEFAULT_VALUE || maxBitrate !== MAX_DEFAULT_VALUE) {
    return tracks.filter(track => inRange(track.bandwidth, minBitrate, maxBitrate));
  }
  return tracks;
}

/**
 * Filter the video tracks which not in the range
 * @function filterVideoTracksByRestriction
 * @param {Array<VideoTrack>} videoTracks - The tracks to filter
 * @param {PKABRRestrictionObject} restriction - The restriction
 * @returns {Array<VideoTrack>} - The relevant video tracks after restrictions.
 */
function filterTracksByRestriction(videoTracks: Array<VideoTrack>, restriction: PKABRRestrictionObject): Array<VideoTrack> {
  const filterVideoTracks = _filterVideoTracksByRestriction(videoTracks, restriction);
  return filterVideoTracks.length ? filterVideoTracks : [];
}

export {filterTracksByRestriction};
