//@flow

/**
 * Calculates the most suitable source to the container size
 * @function getSuitableSourceForResolution
 * @param {Array<Object>} tracks - The tracks
 * @param {number} width - The width to calculate with
 * @param {number} height - The height to calculate with
 * @returns {Object} - The most suitable source to the container size
 */
function getSuitableSourceForResolution(tracks: Array<Object>, width: number, height: number): ?Object {
  let mostSuitableWidth = null;
  if (height && tracks) {
    let mostSuitableWidthTracks = [];
    let minWidthDiff = Infinity;
    for (let track of tracks) { // first filter the most width suitable
      let widthDiff = Math.abs(track.width - width);
      if (widthDiff < minWidthDiff) {
        minWidthDiff = widthDiff;
        mostSuitableWidthTracks = [track];
      } else if (widthDiff === minWidthDiff) {
        mostSuitableWidthTracks.push(track);
      }
    }
    let videoRatio = width / height;
    let mostSuitableWidthAndRatioTracks = mostSuitableWidthTracks;
    let minRatioDiff = Infinity;
    for (let track of mostSuitableWidthTracks) {  // filter the most ratio suitable from the width filter results
      if (track.height) {
        let ratioDiff = Math.abs(track.width / track.height - videoRatio);
        if (ratioDiff < minRatioDiff) {
          minRatioDiff = ratioDiff;
          mostSuitableWidthAndRatioTracks = [track];
        } else if (ratioDiff === minRatioDiff) {
          mostSuitableWidthAndRatioTracks.push(track);
        }
      }
    }
    let maxBandwidth = 0;
    for (let track of mostSuitableWidthAndRatioTracks) { // select the top bitrate from the ratio filter results
      if (track.bandwidth > maxBandwidth || !track.bandwidth) {
        maxBandwidth = track.bandwidth || maxBandwidth;
        mostSuitableWidth = track;
      }
    }
  }
  return mostSuitableWidth;
}

export {getSuitableSourceForResolution}
