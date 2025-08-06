import Player from '../../../src/player';
import SourcesConfig from '../../configs/sources.json';
import AudioTrack from '../../../src/track/audio-track';
import {AudioTrackKind} from '../../../src/track/audio-track';
import {createElement, getConfigStructure, removeElement, removeVideoElementsFromTestPage} from '../../utils/test-utils';

const targetId = 'player-placeholder_default-tracks.spec';

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

// track arrays to player
const arrayWithAdTracks = [regularTrackFr, regularTrackEn, adTrackEn, adTrackFr];
const arrayWithoutAdTracks = [regularTrackFr, regularTrackEn];

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

  describe('With prioritizeAudioDescription = true', () => {
    it('should select audio description track when prioritizeAudioDescription is true with no user preferences', (done) => {
      config.playback.prioritizeAudioDescription = true;
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        // Add tracks to player
        player._tracks = arrayWithAdTracks;

        // set default tracks
        player._setDefaultTracks();

        regularTrackEn.active.should.be.false;
        regularTrackFr.active.should.be.false;
        adTrackEn.active.should.be.true;
        adTrackFr.active.should.be.false;
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
        // Add tracks to player
        player._tracks = arrayWithAdTracks;

        // set default tracks
        player._setDefaultTracks();

        regularTrackFr.active.should.be.true;
        regularTrackEn.active.should.be.false;
        adTrackEn.active.should.be.false;
        adTrackFr.active.should.be.false;

        done();
      });

      player.load();
    });

    it('should activate the default audio track when no audio description tracks are configured', (done) => {
      config.playback.prioritizeAudioDescription = true;
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        // Add tracks to player
        player._tracks = arrayWithAdTracks;

        // set default tracks
        player._setDefaultTracks();
        player._setDefaultTrack(player._tracks, regularTrackEn.language, regularTrackEn);

        regularTrackEn.active.should.be.true;
        regularTrackFr.active.should.be.false;
        adTrackEn.active.should.be.false;
        adTrackFr.active.should.be.false;
        done();
      });

      player.load();
    });

    it('should activate audio track match system/code language, when no audio description tracks are available and audioLanguage config is "auto"', (done) => {
      config.playback.prioritizeAudioDescription = true;
      config.playback.audioLanguage = 'auto';
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        // Add tracks to player
        player._tracks = arrayWithAdTracks;

        // set default tracks
        player._setDefaultTracks();

        try {
          regularTrackFr.active.should.be.true;
          regularTrackEn.active.should.be.false;
          adTrackEn.active.should.be.false;
          adTrackFr.active.should.be.false;
          done();
        } catch (e) {
          done(e);
        }
      }).catch(done);

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
        // Add tracks to player
        player._tracks = arrayWithAdTracks;

        // set default tracks
        player._setDefaultTracks();

        regularTrackEn.active.should.be.false;
        regularTrackFr.active.should.be.true;
        adTrackEn.active.should.be.false;
        adTrackFr.active.should.be.false;
        done();
      });

      player.load();
    });

    it('should activate the default audio track when no audio tracks are configured', (done) => {
      config.playback.audioLanguage = '';
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        // Add tracks to player
        player._tracks = arrayWithoutAdTracks;

        // set default tracks
        player._setDefaultTracks();
        player._setDefaultTrack(player._tracks, regularTrackEn.language, regularTrackEn);

        regularTrackEn.active.should.be.true;
        regularTrackFr.active.should.be.false;
        done();
      }).catch(done);

      player.load();
    });

    it('should select audio track match system/code language track, when audioLanguage config is "auto"', (done) => {
      config.playback.audioLanguage = 'auto';
      player = new Player(config);
      player.setSources(SourcesConfig.Mp4);
      playerContainer.appendChild(player.getView());

      player.ready().then(() => {
        // Add tracks to player
        player._tracks = arrayWithoutAdTracks;

        // set default tracks
        player._setDefaultTracks();

        regularTrackFr.active.should.be.true;
        regularTrackEn.active.should.be.false;
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
  });
});
