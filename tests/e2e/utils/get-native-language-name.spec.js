import {getNativeLanguageName} from '../../../src/utils/locale';

describe('[SUP-52289] getNativeLanguageName — ISO code to native language name', () => {
  it('should return the native language name for a valid ISO language code (es)', () => {
    // "es" should resolve to the Spanish name for Spanish — "español"
    const result = getNativeLanguageName('es', 'Spanish');
    result.should.not.equal('Spanish');
    result.toLowerCase().should.equal('español');
  });

  it('should return the native language name for Japanese (ja)', () => {
    const result = getNativeLanguageName('ja', 'Japanese');
    result.should.not.equal('Japanese');
    result.should.equal('日本語');
  });

  it('should fall back to the provided fallback when langCode is null', () => {
    getNativeLanguageName(null, 'Unknown').should.equal('Unknown');
  });

  it('should fall back to the provided fallback when langCode is undefined', () => {
    getNativeLanguageName(undefined, 'Track 1').should.equal('Track 1');
  });

  it('should fall back to the provided fallback when langCode is an empty string', () => {
    getNativeLanguageName('', 'Track 1').should.equal('Track 1');
  });

  it('should not throw for an unrecognised code — returns a non-empty string', () => {
    // Intl.DisplayNames in Chrome returns a formatted result rather than throwing or returning null.
    // The important guarantee is that the call does not throw and always returns a string.
    let result;
    let threw = false;
    try {
      result = getNativeLanguageName('zzz-invalid', 'Fallback');
    } catch (_e) {
      threw = true;
    }
    threw.should.equal(false);
    result.should.be.a('string');
    result.length.should.be.above(0);
  });
});
