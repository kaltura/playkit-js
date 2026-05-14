/**
 * Returns the native display name for a BCP-47 / ISO 639-1 language code using
 * Intl.DisplayNames (supported on all modern browsers including iOS Safari 14+).
 * Falls back to the provided `fallback` string when the code is empty/invalid or
 * when the runtime does not support Intl.DisplayNames.
 *
 * Examples:
 *   getNativeLanguageName('es', 'Spanish') → 'español'
 *   getNativeLanguageName('ja', 'Japanese') → '日本語'
 *   getNativeLanguageName('pt', 'Portuguese') → 'português'
 *   getNativeLanguageName('en', 'English') → 'English'
 *
 * @param {string} langCode - ISO 639-1 / BCP-47 language code (e.g. 'es', 'pt', 'zh-TW').
 * @param {string} fallback - Value to use when translation is not possible.
 * @returns {string} The native language name, or `fallback` if unavailable.
 */
export function getNativeLanguageName(langCode: string | undefined | null, fallback: string): string {
  if (!langCode) {
    return fallback;
  }
  try {
    const displayNames = new Intl.DisplayNames([langCode], {type: 'language'});
    const name = displayNames.of(langCode);
    return name || fallback;
  } catch (_e) {
    return fallback;
  }
}

/**
 * Locale class
 * @class
 *
 */
export default class Locale {
  /**
   * tries to return the locale language in IOS-693-1 format(two-letter codes, one per language for)
   * @returns {string} - the IOS-693-1 language string
   * @static
   */
  public static get language(): string {
    let lang: string;

    if (navigator.languages && navigator.languages.length) {
      // latest versions of Chrome and Firefox set this correctly
      lang = navigator.languages[0];
    } else {
      // latest versions of Chrome, Firefox, and Safari set this correctly
      lang = navigator.language;
    }

    if (lang && lang.match('-')) {
      lang = lang.split('-')[0];
    }

    return lang;
  }
}
