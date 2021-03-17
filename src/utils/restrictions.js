//@flow

import Track from '../track/track';
import VideoTrack from '../track/video-track';

/**
 * Filter the video tracks which not in the range
 * @function filterVideoTracksByRestriction
 * @param {Array<VideoTrack>} tracks - The tracks to filter
 * @param {PKABRRestrictionObject} restriction - The restriction
 * @returns {Array<VideoTrack>} - The relevant video tracks after restrictions.
 */
function _filterVideoTracksByRestriction(tracks: Array<VideoTrack>, restriction: PKABRRestrictionObject): Array<VideoTrack> {
  const inRange = (x, min, max) => {
    return x >= (min || 0) && x <= (max || Infinity);
  };
  const {maxHeight, minHeight, maxWidth, minWidth} = restriction;
  if (maxHeight || minHeight || maxWidth || minWidth) {
    return tracks.filter(track => inRange(track.height, minHeight, maxHeight)).filter(track => inRange(track.width, minWidth, maxWidth));
  }
  const {maxBitrate, minBitrate} = restriction;
  if (minBitrate || maxBitrate) {
    return tracks.filter(track => inRange(track.bandwidth, minBitrate, maxBitrate));
  }
  return tracks;
}

/**
 * Filter the video tracks which not in the range
 * @function filterVideoTracksByRestriction
 * @param {Array<Track>} tracks - The tracks to filter
 * @param {PKABRRestrictionObject} restriction - The restriction
 * @returns {Array<Track>} - The relevant video tracks after restrictions.
 */
function filterTracksByRestriction(tracks: Array<Track>, restriction: PKABRRestrictionObject): Array<VideoTrack> {
  const videoTracks = tracks.filter(track => track instanceof VideoTrack);
  const filterVideoTracks = _filterVideoTracksByRestriction(videoTracks, restriction);
  return filterVideoTracks.length ? filterVideoTracks : videoTracks;
}

export {filterTracksByRestriction};
