import AudioTrack, { audioDescriptionTrackHandler, AudioTrackKind } from '../../../src/track/audio-track';

describe('Audio Track Description Handler', () => {
  describe('Mismatched ordering between tracks and audioFlavors', () => {
    it('should correctly match tracks with audioFlavors regardless of order differences', () => {
      // Create tracks in one order
      const tracks = [
        new AudioTrack({
          label: 'English',
          language: 'en',
          index: 0,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor1'
        }),
        new AudioTrack({
          label: 'Spanish',
          language: 'es',
          index: 1,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor2'
        }),
        new AudioTrack({
          label: 'French',
          language: 'fr',
          index: 2,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor3'
        })
      ];

      // Create audioFlavors in a different order with one marked as audio description
      const audioFlavors = [
        {
          label: 'French',
          tags: ['audio_only', 'audio_description'],
          id: 'flavor3'
        },
        {
          label: 'English',
          tags: ['audio_only'],
          id: 'flavor1'
        },
        {
          label: 'Spanish',
          tags: ['audio_only'],
          id: 'flavor2'
        }
      ];

      audioDescriptionTrackHandler(tracks, audioFlavors);

      // French track should be marked as audio description
      tracks[2].language.should.equal('ad-fr');
      tracks[2].label.should.equal('French - Audio Description');

      // English and Spanish should remain unchanged
      tracks[0].language.should.equal('en');
      tracks[0].label.should.equal('English');
      tracks[1].language.should.equal('es');
      tracks[1].label.should.equal('Spanish');
    });

    it('should handle multiple audio description tracks with mismatched ordering', () => {
      const tracks = [
        new AudioTrack({
          label: 'German',
          language: 'de',
          index: 0,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor1'
        }),
        new AudioTrack({
          label: 'Italian',
          language: 'it',
          index: 1,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor2'
        }),
        new AudioTrack({
          label: 'Portuguese',
          language: 'pt',
          index: 2,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor3'
        })
      ];

      const audioFlavors = [
        {
          label: 'Portuguese',
          tags: ['audio_only', 'audio_description'],
          id: 'flavor3'
        },
        {
          label: 'German',
          tags: ['audio_only', 'audio_description'],
          id: 'flavor1'
        },
        {
          label: 'Italian',
          tags: ['audio_only'],
          id: 'flavor2'
        }
      ];

      audioDescriptionTrackHandler(tracks, audioFlavors);

      // German and Portuguese should be marked as audio description
      tracks[0].language.should.equal('ad-de');
      tracks[0].label.should.equal('German - Audio Description');
      tracks[2].language.should.equal('ad-pt');
      tracks[2].label.should.equal('Portuguese - Audio Description');

      // Italian should remain unchanged
      tracks[1].language.should.equal('it');
      tracks[1].label.should.equal('Italian');
    });
  });

  describe('Unlabeled tracks and flavors with ad- prefix/label behavior', () => {
    it('should add ad- prefix to track with AudioTrackKind.DESCRIPTION even without audioFlavors', () => {
      const tracks = [
        new AudioTrack({
          label: 'English Main',
          language: 'en',
          index: 0,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor1'
        }),
        new AudioTrack({
          label: 'English AD',
          language: 'en',
          index: 1,
          kind: AudioTrackKind.DESCRIPTION,
          flavorId: 'flavor2'
        })
      ];

      audioDescriptionTrackHandler(tracks, []);

      // Main track should remain unchanged
      tracks[0].language.should.equal('en');
      tracks[0].label.should.equal('English Main');

      // Description track should get ad- prefix but NO label suffix (no matching flavor)
      tracks[1].language.should.equal('ad-en');
      tracks[1].label.should.equal('English AD');
    });

    it('should filter out audioFlavors without labels', () => {
      const tracks = [
        new AudioTrack({
          label: 'Japanese',
          language: 'ja',
          index: 0,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor1'
        }),
        new AudioTrack({
          label: 'Korean',
          language: 'ko',
          index: 1,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor2'
        })
      ];

      const audioFlavors = [
        {
          // No label - should be filtered out
          tags: ['audio_only', 'audio_description'],
          id: 'flavor1'
        },
        {
          label: 'Korean',
          tags: ['audio_only', 'audio_description'],
          id: 'flavor2'
        },
        {
          label: '',
          // Empty label - should be filtered out
          tags: ['audio_only', 'audio_description'],
          id: 'flavor3'
        }
      ];

      audioDescriptionTrackHandler(tracks, audioFlavors);

      // Japanese should remain unchanged (no matching flavor with label)
      tracks[0].language.should.equal('ja');
      tracks[0].label.should.equal('Japanese');

      // Korean should be marked as audio description (has matching flavor with label)
      tracks[1].language.should.equal('ad-ko');
      tracks[1].label.should.equal('Korean - Audio Description');
    });

    it('should handle tracks without matching audioFlavor labels', () => {
      const tracks = [
        new AudioTrack({
          label: 'Chinese',
          language: 'zh',
          index: 0,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor1'
        }),
        new AudioTrack({
          label: 'Russian',
          language: 'ru',
          index: 1,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor2'
        })
      ];

      const audioFlavors = [
        {
          label: 'Arabic',
          tags: ['audio_only', 'audio_description'],
          id: 'flavor3'
        },
        {
          label: 'Hindi',
          tags: ['audio_only', 'audio_description'],
          id: 'flavor4'
        }
      ];

      audioDescriptionTrackHandler(tracks, audioFlavors);

      // Both tracks should remain unchanged (no matching flavors)
      tracks[0].language.should.equal('zh');
      tracks[0].label.should.equal('Chinese');
      tracks[1].language.should.equal('ru');
      tracks[1].label.should.equal('Russian');
    });

    it('should add ad- prefix when track kind is DESCRIPTION without matching flavor', () => {
      const tracks = [
        new AudioTrack({
          label: 'Swedish Main',
          language: 'sv',
          index: 0,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor1'
        }),
        new AudioTrack({
          label: 'Swedish Description',
          language: 'sv',
          index: 1,
          kind: AudioTrackKind.DESCRIPTION,
          flavorId: 'flavor2'
        })
      ];

      // audioFlavors exist but don't match the track labels
      const audioFlavors = [
        {
          label: 'Norwegian',
          tags: ['audio_only', 'audio_description'],
          id: 'flavor3'
        }
      ];

      audioDescriptionTrackHandler(tracks, audioFlavors);

      // Main track should remain unchanged
      tracks[0].language.should.equal('sv');
      tracks[0].label.should.equal('Swedish Main');

      // Description track should get ad- prefix based on kind, but not the label suffix
      tracks[1].language.should.equal('ad-sv');
      tracks[1].label.should.equal('Swedish Description');
    });

    it('should handle empty audioFlavors array', () => {
      const tracks = [
        new AudioTrack({
          label: 'Dutch',
          language: 'nl',
          index: 0,
          kind: AudioTrackKind.MAIN
        }),
        new AudioTrack({
          label: 'Dutch AD',
          language: 'nl',
          index: 1,
          kind: AudioTrackKind.DESCRIPTION
        })
      ];

      audioDescriptionTrackHandler(tracks, []);

      // Main track should remain unchanged
      tracks[0].language.should.equal('nl');
      tracks[0].label.should.equal('Dutch');

      // Description track should get ad- prefix based on kind alone
      tracks[1].language.should.equal('ad-nl');
      tracks[1].label.should.equal('Dutch AD');
    });

    it('should handle undefined audioFlavors', () => {
      const tracks = [
        new AudioTrack({
          label: 'Polish',
          language: 'pl',
          index: 0,
          kind: AudioTrackKind.MAIN
        }),
        new AudioTrack({
          label: 'Polish AD',
          language: 'pl',
          index: 1,
          kind: AudioTrackKind.DESCRIPTION
        })
      ];

      audioDescriptionTrackHandler(tracks, undefined);

      // Main track should remain unchanged
      tracks[0].language.should.equal('pl');
      tracks[0].label.should.equal('Polish');

      // Description track should get ad- prefix based on kind alone
      tracks[1].language.should.equal('ad-pl');
      tracks[1].label.should.equal('Polish AD');
    });
  });

  describe('Combined scenarios', () => {
    it('should handle mix of labeled flavors, unlabeled flavors, and mismatched ordering', () => {
      const tracks = [
        new AudioTrack({
          label: 'Track A',
          language: 'en',
          index: 0,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor1'
        }),
        new AudioTrack({
          label: 'Track B',
          language: 'fr',
          index: 1,
          kind: AudioTrackKind.DESCRIPTION,
          flavorId: 'flavor2'
        }),
        new AudioTrack({
          label: 'Track C',
          language: 'de',
          index: 2,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor3'
        }),
        new AudioTrack({
          label: 'Track D',
          language: 'es',
          index: 3,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor4'
        })
      ];

      const audioFlavors = [
        {
          label: 'Track D',
          tags: ['audio_only', 'audio_description'],
          id: 'flavor4'
        },
        {
          // Unlabeled flavor - should be filtered
          tags: ['audio_only', 'audio_description'],
          id: 'flavor2'
        },
        {
          label: 'Track A',
          tags: ['audio_only'],
          id: 'flavor1'
        },
        {
          label: 'Track C',
          tags: ['audio_only', 'audio_description'],
          id: 'flavor3'
        }
        // Note: Track B has no matching flavor
      ];

      audioDescriptionTrackHandler(tracks, audioFlavors);

      // Track A - matched flavor without AD tag
      tracks[0].language.should.equal('en');
      tracks[0].label.should.equal('Track A');

      // Track B - DESCRIPTION kind but no matching flavor
      tracks[1].language.should.equal('ad-fr');
      tracks[1].label.should.equal('Track B');

      // Track C - matched flavor with AD tag
      tracks[2].language.should.equal('ad-de');
      tracks[2].label.should.equal('Track C - Audio Description');

      // Track D - matched flavor with AD tag
      tracks[3].language.should.equal('ad-es');
      tracks[3].label.should.equal('Track D - Audio Description');
    });
  });
});
