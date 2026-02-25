import AudioTrack, { audioDescriptionTrackHandler, AudioTrackKind } from '../../../src/track/audio-track';

describe('AudioTrack', () => {
  describe('audioDescriptionTrackHandler', () => {
    describe('label-based matching', () => {
      it('should match audio description tracks by label', () => {
        const tracks = [
          new AudioTrack({
            language: 'en',
            label: 'English',
            kind: AudioTrackKind.MAIN
          }),
          new AudioTrack({
            language: 'es',
            label: 'Spanish',
            kind: AudioTrackKind.MAIN
          })
        ];

        const audioFlavors = [
          {
            language: 'es',
            label: 'Spanish',
            tags: ['audio_description']
          },
          {
            language: 'en',
            label: 'English',
            tags: []
          }
        ];

        audioDescriptionTrackHandler(tracks, audioFlavors);

        tracks[0].language.should.equal('en');
        tracks[0].label.should.equal('English');
        tracks[1].language.should.equal('ad-es');
        tracks[1].label.should.equal('Spanish');
      });

      it('should match tracks by label case-insensitively', () => {
        const tracks = [
          new AudioTrack({
            language: 'en',
            label: 'ENGLISH',
            kind: AudioTrackKind.MAIN
          })
        ];

        const audioFlavors = [
          {
            language: 'en',
            label: 'english',
            tags: ['audio_description']
          }
        ];

        audioDescriptionTrackHandler(tracks, audioFlavors);

        tracks[0].language.should.equal('ad-en');
      });

      it('should not match tracks with different labels', () => {
        const tracks = [
          new AudioTrack({
            language: 'en',
            label: 'English',
            kind: AudioTrackKind.MAIN
          }),
          new AudioTrack({
            language: 'en',
            label: 'English - Stereo',
            kind: AudioTrackKind.MAIN
          })
        ];

        const audioFlavors = [
          {
            language: 'en',
            label: 'English',
            tags: ['audio_description']
          }
        ];

        audioDescriptionTrackHandler(tracks, audioFlavors);

        tracks[0].language.should.equal('ad-en');
        tracks[1].language.should.equal('en');
      });

      it('should handle tracks when audioFlavors is out of order', () => {
        const tracks = [
          new AudioTrack({
            language: 'en',
            label: 'English',
            kind: AudioTrackKind.MAIN
          }),
          new AudioTrack({
            language: 'fr',
            label: 'French',
            kind: AudioTrackKind.MAIN
          }),
          new AudioTrack({
            language: 'es',
            label: 'Spanish',
            kind: AudioTrackKind.MAIN
          })
        ];

        const audioFlavors = [
          {
            language: 'es',
            label: 'Spanish',
            tags: []
          },
          {
            language: 'en',
            label: 'English',
            tags: ['audio_description']
          },
          {
            language: 'fr',
            label: 'French',
            tags: ['audio_description']
          }
        ];

        audioDescriptionTrackHandler(tracks, audioFlavors);

        tracks[0].language.should.equal('ad-en');
        tracks[1].language.should.equal('ad-fr');
        tracks[2].language.should.equal('es');
      });
    });

    describe('missing or empty flavor labels', () => {
      it('should handle tracks when flavor has no label', () => {
        const tracks = [
          new AudioTrack({
            language: 'en',
            label: 'English',
            kind: AudioTrackKind.MAIN
          })
        ];

        const audioFlavors = [
          {
            language: 'en',
            tags: ['audio_description']
          }
        ];

        audioDescriptionTrackHandler(tracks, audioFlavors);

        // Should not match because flavor has no label
        tracks[0].language.should.equal('en');
        tracks[0].label.should.equal('English');
      });

      it('should handle tracks when flavor has empty label', () => {
        const tracks = [
          new AudioTrack({
            language: 'en',
            label: '',
            kind: AudioTrackKind.MAIN
          })
        ];

        const audioFlavors = [
          {
            language: 'en',
            label: '',
            tags: ['audio_description']
          }
        ];

        audioDescriptionTrackHandler(tracks, audioFlavors);

        // Should match on empty label
        tracks[0].language.should.equal('ad-en');
      });

      it('should add "Audio Description" suffix when flavor has no label', () => {
        const tracks = [
          new AudioTrack({
            language: 'en',
            label: '',
            kind: AudioTrackKind.MAIN
          })
        ];

        const audioFlavors = [
          {
            language: 'en',
            label: '',
            tags: ['audio_description']
          }
        ];

        audioDescriptionTrackHandler(tracks, audioFlavors);

        tracks[0].label.should.equal(' - Audio Description');
      });

      it('should not add "Audio Description" suffix when flavor has a label', () => {
        const tracks = [
          new AudioTrack({
            language: 'en',
            label: 'English',
            kind: AudioTrackKind.MAIN
          })
        ];

        const audioFlavors = [
          {
            language: 'en',
            label: 'English',
            tags: ['audio_description']
          }
        ];

        audioDescriptionTrackHandler(tracks, audioFlavors);

        tracks[0].label.should.equal('English');
      });

      it('should handle tracks when track has no label', () => {
        const tracks = [
          new AudioTrack({
            language: 'en',
            kind: AudioTrackKind.MAIN
          })
        ];

        const audioFlavors = [
          {
            language: 'en',
            label: 'English',
            tags: ['audio_description']
          }
        ];

        audioDescriptionTrackHandler(tracks, audioFlavors);

        // Should not match because track has no label
        tracks[0].language.should.equal('en');
      });
    });

    describe('track kind fallback', () => {
      it('should mark track as audio description based on track kind when no flavor match', () => {
        const tracks = [
          new AudioTrack({
            language: 'en',
            label: 'English',
            kind: AudioTrackKind.DESCRIPTION
          })
        ];

        const audioFlavors = [
          {
            language: 'es',
            label: 'Spanish',
            tags: ['audio_description']
          }
        ];

        audioDescriptionTrackHandler(tracks, audioFlavors);

        tracks[0].language.should.equal('ad-en');
      });

      it('should mark track as audio description based on track kind when no flavors provided', () => {
        const tracks = [
          new AudioTrack({
            language: 'en',
            label: 'English',
            kind: AudioTrackKind.DESCRIPTION
          })
        ];

        audioDescriptionTrackHandler(tracks, []);

        tracks[0].language.should.equal('ad-en');
      });

      it('should mark track as audio description based on track kind when flavors is undefined', () => {
        const tracks = [
          new AudioTrack({
            language: 'en',
            label: 'English',
            kind: AudioTrackKind.DESCRIPTION
          })
        ];

        audioDescriptionTrackHandler(tracks);

        tracks[0].language.should.equal('ad-en');
      });
    });
  });
});
