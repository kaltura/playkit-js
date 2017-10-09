import TextTrack from '../../../src/track/text-track'

describe('TextTrack', () => {
  describe('langComparer', () => {
    it('should compare 2 languages with same length', () => {
      TextTrack.langComparer('ita', 'ita').should.be.true;
      TextTrack.langComparer('ita', 'eng').should.be.false;
    });

    it('should compare 2 languages with different length', () => {
      TextTrack.langComparer('ita', 'it').should.be.true;
      TextTrack.langComparer('it', 'ita').should.be.true;
      TextTrack.langComparer('es', 'ita').should.be.false;
      TextTrack.langComparer('ita', 'es').should.be.false;
    });
  });
});
