import Player from '../../../src/player';
import SourcesConfig from '../../configs/sources.json';
import TextTrack from '../../../src/track/text-track';
import { createElement, getConfigStructure, removeElement, removeVideoElementsFromTestPage } from '../../utils/test-utils';
import { CustomEventType } from '../../../src/event/event-type';

const targetId = 'player-placeholder_captions-display.spec';
const OFF = 'off';

describe('Captions Display - User Preference Persistence', () => {
  let config, player, playerContainer;

  before(() => {
    playerContainer = createElement('DIV', targetId);
  });

  beforeEach(() => {
    config = getConfigStructure();
    config.playback.textLanguage = 'en';
  });

  afterEach(() => {
    player.destroy();
  });

  after(() => {
    removeVideoElementsFromTestPage();
    removeElement(targetId);
  });

  describe('_setDefaultTracks respects user preference', () => {
    it('should NOT force captions OFF when user has explicitly enabled them, even if config.captionsDisplay is false', (done) => {
      // Setup: config says captionsDisplay = false, but user has turned on captions
      config.playback.captionsDisplay = false;
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        const video = player._engine.getVideoElement();
        video.addTextTrack('subtitles', 'English', 'en');
        video.addTextTrack('captions', 'French', 'fr');

        // Simulate user preference: user has previously selected captions to be displayed
        player._playbackAttributesState.captionsDisplay = true;
        player._playbackAttributesState.textLanguage = 'en';

        // Now trigger _setDefaultTracks (simulating what happens during track changes in live events)
        player._setDefaultTracks();

        // The fix: captions should remain ON because user preference (true) takes precedence over config (false)
        const textTracks = player._getTextTracks();
        const activeTextTrack = textTracks.find(track => track.active);

        // Verify that the OFF track is NOT active - captions should still be displayed
        if (activeTextTrack) {
          activeTextTrack.language.should.not.equal(OFF);
        }

        // User's captionsDisplay state should still be true
        player._playbackAttributesState.captionsDisplay.should.be.true;
        done();
      });

      player.load();
    });

    it('should respect config.captionsDisplay=false when user has NOT explicitly set a preference', (done) => {
      // Setup: config says captionsDisplay = false, user has no preference
      config.playback.captionsDisplay = false;
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        const video = player._engine.getVideoElement();
        video.addTextTrack('subtitles', 'English', 'en');
        video.addTextTrack('captions', 'French', 'fr');

        // User preference is undefined (not explicitly set)
        player._playbackAttributesState.captionsDisplay = undefined;

        // Trigger _setDefaultTracks
        player._setDefaultTracks();

        // Captions should be OFF because config is false and no user override
        const textTracks = player._getTextTracks();
        const activeTextTrack = textTracks.find(track => track.active);

        if (activeTextTrack) {
          activeTextTrack.language.should.equal(OFF);
        }
        done();
      });

      player.load();
    });

    it('should respect config.captionsDisplay=true when user has NOT explicitly set a preference', (done) => {
      // Setup: config says captionsDisplay = true, user has no preference
      config.playback.captionsDisplay = true;
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        const video = player._engine.getVideoElement();
        video.addTextTrack('subtitles', 'English', 'en');
        video.addTextTrack('captions', 'French', 'fr');

        // User preference is undefined (not explicitly set)
        player._playbackAttributesState.captionsDisplay = undefined;

        // Trigger _setDefaultTracks
        player._setDefaultTracks();

        // Captions should be ON because config is true
        const textTracks = player._getTextTracks();
        const activeTextTrack = textTracks.find(track => track.active);

        if (activeTextTrack) {
          activeTextTrack.language.should.not.equal(OFF);
        }
        done();
      });

      player.load();
    });

    it('should force captions OFF when user has explicitly disabled them, even if config.captionsDisplay is true', (done) => {
      // Setup: config says captionsDisplay = true, but user has turned off captions
      config.playback.captionsDisplay = true;
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        const video = player._engine.getVideoElement();
        video.addTextTrack('subtitles', 'English', 'en');
        video.addTextTrack('captions', 'French', 'fr');

        // Simulate user preference: user has explicitly disabled captions
        player._playbackAttributesState.captionsDisplay = false;

        // Trigger _setDefaultTracks
        player._setDefaultTracks();

        // Captions should be OFF because user has explicitly disabled them
        const textTracks = player._getTextTracks();
        const activeTextTrack = textTracks.find(track => track.active);

        if (activeTextTrack) {
          activeTextTrack.language.should.equal(OFF);
        }

        // User's captionsDisplay state should still be false
        player._playbackAttributesState.captionsDisplay.should.be.false;
        done();
      });

      player.load();
    });
  });

  describe('selectTrack sets captionsDisplay state', () => {
    it('should set captionsDisplay to true when selecting a non-OFF text track', (done) => {
      config.playback.captionsDisplay = false;
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        const video = player._engine.getVideoElement();
        video.addTextTrack('subtitles', 'English', 'en');
        video.addTextTrack('captions', 'French', 'fr');

        // Verify initial state - captionsDisplay is undefined or false
        (player._playbackAttributesState.captionsDisplay === undefined || player._playbackAttributesState.captionsDisplay === false).should.be.true;

        // Find a non-OFF text track
        const textTracks = player._getTextTracks();
        const englishTrack = textTracks.find(track => track.language === 'en');

        if (englishTrack) {
          // Select the track
          player.selectTrack(englishTrack);

          // After the fix: captionsDisplay should be set to true
          player._playbackAttributesState.captionsDisplay.should.be.true;
        }

        done();
      });

      player.load();
    });

    it('should set captionsDisplay to false when selecting the OFF text track', (done) => {
      config.playback.captionsDisplay = true;
      config.playback.textLanguage = 'en';
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        const video = player._engine.getVideoElement();
        video.addTextTrack('subtitles', 'English', 'en');
        video.addTextTrack('captions', 'French', 'fr');

        // Set up the tracks to include the OFF track
        player._setDefaultTracks();

        const textTracks = player._getTextTracks();
        const offTrack = textTracks.find(track => track.language === OFF);

        if (offTrack) {
          // Select the OFF track (turn captions off)
          player.selectTrack(offTrack);

          // captionsDisplay should be set to false
          player._playbackAttributesState.captionsDisplay.should.be.false;
        }

        done();
      });

      player.load();
    });
  });

  describe('Simulated EP Live scenario - track changes should not reset user preference', () => {
    it('should maintain user caption preference across multiple _setDefaultTracks calls', (done) => {
      // Simulates what happens when EP live events cause multiple TRACKS_CHANGED events
      config.playback.captionsDisplay = false; // Config starts with captions OFF
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        const video = player._engine.getVideoElement();
        video.addTextTrack('subtitles', 'English', 'en');

        // First, user explicitly turns on captions
        player._playbackAttributesState.captionsDisplay = true;
        player._playbackAttributesState.textLanguage = 'en';

        // Simulate first track change (e.g., live stream starts)
        player._setDefaultTracks();

        // Verify captions are still ON
        player._playbackAttributesState.captionsDisplay.should.be.true;

        // Simulate second track change (e.g., live captions manifest update)
        player._setDefaultTracks();

        // Verify captions are STILL ON after second track change
        player._playbackAttributesState.captionsDisplay.should.be.true;

        // Simulate third track change
        player._setDefaultTracks();

        // Verify captions are STILL ON after third track change
        player._playbackAttributesState.captionsDisplay.should.be.true;

        done();
      });

      player.load();
    });

    it('should maintain captionsDisplay=true after _updateTracks is called', (done) => {
      // This test simulates _updateTracks being called, which internally calls _setDefaultTracks
      config.playback.captionsDisplay = false;
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        const video = player._engine.getVideoElement();
        video.addTextTrack('subtitles', 'English', 'en');

        // User explicitly turns on captions
        player._playbackAttributesState.captionsDisplay = true;
        player._playbackAttributesState.textLanguage = 'en';

        // Simulate _updateTracks being called with new tracks (happens during live events)
        const newTracks = player._tracks.slice();
        player._updateTracks(newTracks);

        // Verify captions are still ON after track update
        player._playbackAttributesState.captionsDisplay.should.be.true;

        done();
      });

      player.load();
    });
  });
});
