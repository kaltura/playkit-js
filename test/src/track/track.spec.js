import Track from '../../../src/track/text-track'

describe('Track', () => {
  describe('langComparer', () => {
    it('should compare 2 languages with same length', () => {
      Track.langComparer('ita', 'ita').should.be.true;
      Track.langComparer('ita', 'eng').should.be.false;
    });

    it('should compare 2 languages with different length', () => {
      Track.langComparer('ita', 'it').should.be.true;
      Track.langComparer('it', 'ita').should.be.true;
      Track.langComparer('es', 'ita').should.be.false;
      Track.langComparer('ita', 'es').should.be.false;
    });
  });
});
