import Player from '../../../src/player';
import TextTrack from '../../../src/track/text-track';
import {createElement, getConfigStructure, removeElement, removeVideoElementsFromTestPage} from '../../utils/test-utils';

const targetId = 'player-placeholder_regression-SUP-52418';

/**
 * Regression test for SUP-52418:
 * Player Default Language Configuration for Japanese not being respected.
 *
 * Root cause: _getLanguage() resolves "auto" textLanguage by checking Locale.language
 * (browser OS language from navigator.languages[0]) BEFORE checking ui.locale (the
 * player-configured locale). On an English-locale browser, English captions are
 * selected even when ui.locale is set to "ja".
 *
 * Fix: Insert ui.locale as a fallback BEFORE Locale.language in the priority order:
 *   1. defaultTrack.language (stream default flag)
 *   2. ui.locale (player-configured locale)       <-- NEW
 *   3. Locale.language (browser OS language)
 *   4. tracks[0].language (first track)
 */
describe('SUP-52418 regression — ui.locale respected when textLanguage="auto"', () => {
  let player, playerContainer;

  before(() => {
    playerContainer = createElement('DIV', targetId);
  });

  afterEach(() => {
    if (player) {
      player.destroy();
      player = null;
    }
  });

  after(() => {
    removeVideoElementsFromTestPage();
    removeElement(targetId);
  });

  it('should return ui.locale language when textLanguage="auto" and no track has .default=true', () => {
    // Arrange: configure player with ui.locale="ja" and textLanguage="auto"
    const config = getConfigStructure(targetId);
    config.ui = {locale: 'ja'};
    config.playback.textLanguage = 'auto';

    player = new Player(config);

    // Build caption tracks: en, pt, es, ja — none marked as default
    const enTrack = new TextTrack({active: false, label: 'English', language: 'en', kind: 'subtitles'});
    const ptTrack = new TextTrack({active: false, label: 'Portuguese', language: 'pt', kind: 'subtitles'});
    const esTrack = new TextTrack({active: false, label: 'Spanish', language: 'es', kind: 'subtitles'});
    const jaTrack = new TextTrack({active: false, label: 'Japanese', language: 'ja', kind: 'subtitles'});

    const textTracks = [enTrack, ptTrack, esTrack, jaTrack];

    // Act: resolve the default language with no defaultTrack (no .default=true stream flag)
    const resolvedLanguage = player._getLanguage(textTracks, 'auto', undefined);

    // Assert: must pick "ja" from ui.locale, NOT "en" from browser locale
    resolvedLanguage.should.equal('ja');
  });

  it('should still respect stream default track over ui.locale', () => {
    // Arrange: a stream-default English track should win over ui.locale="ja"
    const config = getConfigStructure(targetId);
    config.ui = {locale: 'ja'};
    config.playback.textLanguage = 'auto';

    player = new Player(config);

    const enTrack = new TextTrack({active: false, label: 'English', language: 'en', kind: 'subtitles', default: true});
    const jaTrack = new TextTrack({active: false, label: 'Japanese', language: 'ja', kind: 'subtitles'});

    const textTracks = [enTrack, jaTrack];

    // Act: the stream-marked default track (en) is passed as defaultTrack
    const resolvedLanguage = player._getLanguage(textTracks, 'auto', enTrack);

    // Assert: stream default wins
    resolvedLanguage.should.equal('en');
  });

  it('should fall through to first track when ui.locale language is not in the track list', () => {
    // Arrange: ui.locale="ja" but no Japanese track exists
    const config = getConfigStructure(targetId);
    config.ui = {locale: 'ja'};
    config.playback.textLanguage = 'auto';

    player = new Player(config);

    const enTrack = new TextTrack({active: false, label: 'English', language: 'en', kind: 'subtitles'});
    const ptTrack = new TextTrack({active: false, label: 'Portuguese', language: 'pt', kind: 'subtitles'});

    const textTracks = [enTrack, ptTrack];

    // Act: no defaultTrack, ui.locale="ja" not present in tracks
    const resolvedLanguage = player._getLanguage(textTracks, 'auto', undefined);

    // Assert: falls through — Locale.language or first track applies (not "ja")
    // We only assert it is NOT "ja" since the exact fallback depends on browser locale
    resolvedLanguage.should.not.equal('ja');
  });
});
