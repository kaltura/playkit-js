import Player from '../../../src/player';
import SourcesConfig from '../../configs/sources.json';
import AudioTrack from '../../../src/track/audio-track';
import {AudioTrackKind} from '../../../src/track/audio-track';
import {createElement, getConfigStructure, removeElement, removeVideoElementsFromTestPage} from '../../utils/test-utils';

const targetId = 'player-placeholder_default-tracks.spec';

describe('Audio Track Selection', () => {
  let config, player, playerContainer;

  before(() => {
    playerContainer = createElement('DIV', targetId);
  });

  beforeEach(() => {
    config = getConfigStructure();
  });

  afterEach(() => {
    player.destroy();
  });

  after(() => {
    removeVideoElementsFromTestPage();
    removeElement(targetId);
  });

  describe('With prioritizeAudioDescription', () => {
    it('should select audio description track when prioritizeAudioDescription is true with no user preferences', (done) => {
      config.playback.prioritizeAudioDescription = true;
      config.playback.audioLanguage = '';
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        // Create audio tracks
        const regularTrack = new AudioTrack({
          active: false,
          label: 'Regular',
          language: 'en',
          index: 0
        });

        const adTrack = new AudioTrack({
          active: false,
          label: 'Audio Description',
          language: 'ad-en',
          kind: AudioTrackKind.DESCRIPTION,
          index: 1
        });

        // Add tracks to player
        player._tracks = [regularTrack, adTrack];

        // set default tracks
        player._setDefaultTracks();

        adTrack.active.should.be.true;
        regularTrack.active.should.be.false;
        done();
      });

      player.load();
    });

    it('should select audio track in the configured language without consider prioritizeAudioDescription is true', (done) => {
      config.playback.prioritizeAudioDescription = true;
      config.playback.audioLanguage = 'en';
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        // Create audio tracks
        const regularTrackFr = new AudioTrack({
          active: false,
          label: 'Regular',
          language: 'fr',
          index: 0
        });

        const regularTrackEn = new AudioTrack({
          active: false,
          label: 'Regular',
          language: 'en',
          index: 1
        });

        const adTrackEn = new AudioTrack({
          active: false,
          label: 'Audio Description EN',
          language: 'ad-en',
          kind: AudioTrackKind.DESCRIPTION,
          index: 2
        });

        const adTrackFr = new AudioTrack({
          active: false,
          label: 'Audio Description FR',
          language: 'ad-fr',
          kind: AudioTrackKind.DESCRIPTION,
          index: 3
        });

        // Add tracks to player
        player._tracks = [regularTrackFr, regularTrackEn, adTrackEn, adTrackFr];

        // set default tracks
        player._setDefaultTracks();

        regularTrackEn.active.should.be.true;
        regularTrackFr.active.should.be.false;
        adTrackEn.active.should.be.false;
        adTrackFr.active.should.be.false;
        done();
      });

      player.load();
    });

    it('should fallback to standard selection when no audio description tracks are available', (done) => {
      config.playback.prioritizeAudioDescription = true;
      config.playback.audioLanguage = '';
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        // Create audio tracks (no audio description tracks)
        const trackFr = new AudioTrack({
          active: false,
          label: 'French',
          language: 'fr',
          index: 0
        });

        const trackEn = new AudioTrack({
          active: false,
          label: 'English',
          language: 'en',
          index: 1
        });

        // Add tracks to player
        player._tracks = [trackFr, trackEn];

        // set default tracks
        player._setDefaultTracks();

        trackFr.active.should.be.true;
        trackEn.active.should.be.false;
        done();
      });

      player.load();
    });
  });

  describe('Without prioritizeAudioDescription', () => {
    it('should select audio track based on configured language', (done) => {
      config.playback.audioLanguage = 'fr';
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        // Create audio tracks
        const trackEn = new AudioTrack({
          active: false,
          label: 'English',
          language: 'en',
          index: 0
        });

        const trackFr = new AudioTrack({
          active: false,
          label: 'French',
          language: 'fr',
          index: 1
        });

        const adTrack = new AudioTrack({
          active: false,
          label: 'Audio Description',
          language: 'ad-en',
          kind: AudioTrackKind.DESCRIPTION,
          index: 2
        });

        // Add tracks to player
        player._tracks = [trackEn, trackFr, adTrack];

        // set default tracks
        player._setDefaultTracks();

        trackFr.active.should.be.true;
        trackEn.active.should.be.false;
        adTrack.active.should.be.false;
        done();
      });

      player.load();
    });

    it('should select default audio track when available', (done) => {
      config.playback.audioLanguage = '';
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        // Create audio tracks
        const trackEn = new AudioTrack({
          active: false,
          label: 'English',
          language: 'en',
          index: 0
        });

        const trackFr = new AudioTrack({
          active: false,
          label: 'French',
          language: 'fr',
          index: 1
        });

        // Add tracks to player
        player._tracks = [trackEn, trackFr];

        // set default tracks
        player._setDefaultTracks();

        trackEn.active.should.be.true;
        trackFr.active.should.be.false;
        done();
      });

      player.load();
    });

    it('should handle case when no tracks are available', (done) => {
      player = new Player();
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        // Set empty tracks array
        player._tracks = [];

        // set default tracks
        player._setDefaultTracks();
        done();
      });

      player.load();
    });

    it('should handle case when tracks are available but none match configuration', (done) => {
      config.playback.audioLanguage = 'es';
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        // Create audio tracks
        const audioTrack1 = new AudioTrack({
          active: false,
          label: 'English',
          language: 'en',
          index: 0
        });

        const audioTrack2 = new AudioTrack({
          active: false,
          label: 'French',
          language: 'fr',
          index: 1
        });

        // Add tracks to player
        player._tracks = [audioTrack1, audioTrack2];

        // set default tracks
        player._setDefaultTracks();

        audioTrack1.active.should.be.true;
        audioTrack2.active.should.be.false;
        done();
      });

      player.load();
    });
  });
});
