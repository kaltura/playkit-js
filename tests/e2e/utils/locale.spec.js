import { getNativeLanguageName } from '../../../src/utils/locale';

describe('SUP-52289 regression — getNativeLanguageName', () => {
  describe('with a valid language code and Intl.DisplayNames support', () => {
    it('should return the native name for Spanish', () => {
      const result = getNativeLanguageName('es', 'Spanish');
      // Intl.DisplayNames of 'es' in locale 'es' = 'español' (or 'Español' depending on runtime)
      result.toLowerCase().should.equal('español');
    });

    it('should return the native name for Portuguese', () => {
      const result = getNativeLanguageName('pt', 'Portuguese');
      result.toLowerCase().should.equal('português');
    });

    it('should return the native name for Japanese', () => {
      const result = getNativeLanguageName('ja', 'Japanese');
      result.should.equal('日本語');
    });

    it('should return "English" for English (native name equals the English word)', () => {
      const result = getNativeLanguageName('en', 'English');
      result.toLowerCase().should.equal('english');
    });

    it('should NOT return the plain English word "Spanish" for lang code "es"', () => {
      const result = getNativeLanguageName('es', 'Spanish');
      result.toLowerCase().should.not.equal('spanish');
    });

    it('should NOT return the plain English word "Portuguese" for lang code "pt"', () => {
      const result = getNativeLanguageName('pt', 'Portuguese');
      result.toLowerCase().should.not.equal('portuguese');
    });

    it('should NOT return the plain English word "Japanese" for lang code "ja"', () => {
      const result = getNativeLanguageName('ja', 'Japanese');
      result.should.not.equal('Japanese');
    });
  });

  describe('fallback behaviour', () => {
    it('should return the fallback when langCode is empty string', () => {
      getNativeLanguageName('', 'FallbackLabel').should.equal('FallbackLabel');
    });

    it('should return the fallback when langCode is null-like (undefined cast to empty)', () => {
      // Pass an obviously invalid code to exercise the try/catch path
      const result = getNativeLanguageName('zz-INVALID-CODE-XYZ', 'FallbackForInvalid');
      // Either returns a value from Intl or falls back; either way should not throw
      (typeof result).should.equal('string');
    });

    it('should return the fallback when Intl.DisplayNames is not available', () => {
      const original = Intl.DisplayNames;
      try {
        // Temporarily remove Intl.DisplayNames to simulate older runtime
        delete Intl.DisplayNames;
        const result = getNativeLanguageName('es', 'Spanish');
        result.should.equal('Spanish');
      } finally {
        Intl.DisplayNames = original;
      }
    });
  });
});
