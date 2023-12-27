import {PKMediaSourceObject} from '../types';
/**
 * Calculates the most suitable source to the container size
 * @function getSuitableSourceForResolution
 * @param {Array<Object>} tracks - The tracks
 * @param {number} width - The width to calculate with
 * @param {number} height - The height to calculate with
 * @returns {Object} - The most suitable source to the container size
 */
function getSuitableSourceForResolution(tracks: PKMediaSourceObject[], width: number, height: number): PKMediaSourceObject | null {
  let mostSuitableWidth: PKMediaSourceObject| null = null;
  if (height && tracks) {
    let mostSuitableWidthTracks: PKMediaSourceObject[] = [];
    let minWidthDiff = Infinity;
    for (const track of tracks) {
      // first filter the most width suitable
      const widthDiff = Math.abs(track.width! - width);
      if (widthDiff < minWidthDiff) {
        minWidthDiff = widthDiff;
        mostSuitableWidthTracks = [track];
      } else if (widthDiff === minWidthDiff) {
        mostSuitableWidthTracks.push(track);
      }
    }
    const videoRatio = width / height;
    let mostSuitableWidthAndRatioTracks = mostSuitableWidthTracks;
    let minRatioDiff = Infinity;
    for (const track of mostSuitableWidthTracks) {
      // filter the most ratio suitable from the width filter results
      if (track.height) {
        const ratioDiff = Math.abs(track.width / track.height - videoRatio);
        if (ratioDiff < minRatioDiff) {
          minRatioDiff = ratioDiff;
          mostSuitableWidthAndRatioTracks = [track];
        } else if (ratioDiff === minRatioDiff) {
          mostSuitableWidthAndRatioTracks.push(track);
        }
      }
    }
    let maxBandwidth = 0;
    for (const track of mostSuitableWidthAndRatioTracks) {
      // select the top bitrate from the ratio filter results
      if (track.bandwidth > maxBandwidth || !track.bandwidth) {
        maxBandwidth = track.bandwidth || maxBandwidth;
        mostSuitableWidth = track;
      }
    }
  }
  return mostSuitableWidth;
}

export {getSuitableSourceForResolution};
