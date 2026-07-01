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

  describe('Label to flavorId fallback matching', () => {
    it('should match by flavorId when label does not match', () => {
      const tracks = [
        new AudioTrack({
          label: 'Track Label A',
          language: 'en',
          index: 0,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor123'
        }),
        new AudioTrack({
          label: 'Track Label B',
          language: 'es',
          index: 1,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor456'
        })
      ];

      const audioFlavors = [
        {
          label: 'Flavor Label X',
          tags: ['audio_only'],
          id: 'flavor123'
        },
        {
          label: 'Flavor Label Y',
          tags: ['audio_only', 'audio_description'],
          id: 'flavor456'
        }
      ];

      audioDescriptionTrackHandler(tracks, audioFlavors);

      // First track: label doesn't match, but flavorId matches (no audio_description tag)
      tracks[0].language.should.equal('en');
      tracks[0].label.should.equal('Track Label A');

      // Second track: label doesn't match, but flavorId matches (has audio_description tag)
      tracks[1].language.should.equal('ad-es');
      tracks[1].label.should.equal('Track Label B - Audio Description');
    });

    it('should prioritize label matching over flavorId matching', () => {
      const tracks = [
        new AudioTrack({
          label: 'English',
          language: 'en',
          index: 0,
          kind: AudioTrackKind.MAIN,
          flavorId: 'flavor789'
        })
      ];

      const audioFlavors = [
        {
          label: 'English',
          tags: ['audio_only'],
          id: 'flavor123'
        },
        {
          label: 'Other Language',
          tags: ['audio_only', 'audio_description'],
          id: 'flavor789'
        }
      ];

      audioDescriptionTrackHandler(tracks, audioFlavors);

      // Track should match by label (flavor123) not by flavorId (flavor789)
      // Therefore, should NOT be marked as audio description
      tracks[0].language.should.equal('en');
      tracks[0].label.should.equal('English');
    });

    it('should not match when neither label nor flavorId match', () => {
      const tracks = [
        new AudioTrack({
          label: 'Unmatched Label',
          language: 'fr',
          index: 0,
          kind: AudioTrackKind.MAIN,
          flavorId: 'unmatched_flavor'
        })
      ];

      const audioFlavors = [
        {
          label: 'Different Label',
          tags: ['audio_only', 'audio_description'],
          id: 'different_flavor'
        }
      ];

      audioDescriptionTrackHandler(tracks, audioFlavors);

      // Track should remain unchanged (no match by label or flavorId)
      tracks[0].language.should.equal('fr');
      tracks[0].label.should.equal('Unmatched Label');
    });
  });
});
