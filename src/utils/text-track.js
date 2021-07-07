//@flow

import {EXTERNAL_TRACK_ID} from '../track/external-captions-handler';

/**
 * Disables all the existing text tracks.
 * @public
 * @param {any} track  - if text track is subtitle
 * @returns {void}
 */
function isMetaDataTrack(track: any) {
  return track && track.kind === 'metadata';
}

/**
 * Disables all the existing text tracks.
 * @public
 * @param {any} track  - if text track is subtitle
 * @returns {void}
 */
function isNativeTextTrack(track: any) {
  return track && ['subtitles', 'captions'].includes(track.kind);
}

/**
 * Disables all the existing text tracks.
 * @public
 * @param {any} track  - if text track is subtitle
 * @returns {void}
 */
function isExternalTrack(track: any) {
  return track && [track.language, track.label].includes(EXTERNAL_TRACK_ID);
}

export {isMetaDataTrack, isNativeTextTrack, isExternalTrack};
