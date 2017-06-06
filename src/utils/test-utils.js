/* eslint-disable no-unused-vars */

/**
 * Removes all the video elements that created by the test from the document.
 * @returns {void}
 */
function removeVideoElementsFromTestPage() {
  let element = document.getElementsByTagName("video");
  for (let i = element.length - 1; i >= 0; i--) {
    element[i].parentNode.removeChild(element[i]);
  }
}

/**
 * Creates a given title.
 * @param {string} title - The title text.
 * @returns {void}
 */
function createTitle(title) {
  let header = document.createElement("header");
  let h4 = document.createElement("h4");
  h4.textContent = title;
  header.appendChild(h4);
  document.body.appendChild(header);
}

/**
 * Create a button which represents a track element.
 * @param {Track} track - The track instance.
 * @returns {Element} - The track button element.
 */
function createTrackButton(track) {
  let element = document.createElement("BUTTON");
  element.innerText = track.label;
  element.id = track.index;
  document.body.appendChild(element);
  return element;
}

/**
 * Create buttons for all video tracks.
 * @param {Player} player - The player instance.
 * @param {VideoTrack} videoTracks - The video track instances.
 * @returns {void}
 */
function createVideoTrackButtons(player, videoTracks) {
  createTitle("Video Tracks");
  for (let i = 0; i < videoTracks.length; i++) {
    let element = createTrackButton(videoTracks[i]);
    element.onclick = function () {
      player.selectTrack(videoTracks[i]);
    };
  }
}

/**
 * Create buttons for all audio tracks.
 * @param {Player} player - The player instance.
 * @param {AudioTrack} audioTracks - The audio track instances.
 * @returns {void}
 */
function createAudioTrackButtons(player, audioTracks) {
  createTitle("Audio Tracks");
  for (let i = 0; i < audioTracks.length; i++) {
    let element = createTrackButton(audioTracks[i]);
    element.onclick = function () {
      player.selectTrack(audioTracks[i]);
    };
  }
}

/**
 * Create buttons for all text tracks.
 * @param {Player} player - The player instance.
 * @param {TextTrack} textTracks - The text track instances.
 * @returns {void}
 */
function createTextTrackButtons(player, textTracks) {
  createTitle("Text Tracks");
  for (let i = 0; i < textTracks.length; i++) {
    let element = createTrackButton(textTracks[i]);
    element.onclick = function () {
      player.selectTrack(textTracks[i]);
    };
  }
}

export {
  removeVideoElementsFromTestPage,
  createTitle,
  createTrackButton,
  createTextTrackButtons,
  createAudioTrackButtons,
  createVideoTrackButtons
};
