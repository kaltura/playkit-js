// Intl.DisplayNames is supported in modern browsers (Chrome 81+, Firefox 86+, Safari 14.1+).
// Older browsers will fall back to the provided fallback value.
const _displayNamesCache = new Map<string, Intl.DisplayNames>();

/**
 * Returns the native language name for a given ISO language code using Intl.DisplayNames.
 * Falls back to the provided fallback string if the code is absent or the API throws.
 * @param {string | undefined | null} langCode - ISO 639-1/2 language code (e.g. "es", "ja")
 * @param {string} fallback - Value to return when the code cannot be resolved
 * @returns {string} - Native language name or fallback
 */
export function getNativeLanguageName(langCode: string | undefined | null, fallback: string): string {
  if (!langCode) return fallback;
  try {
    let dn = _displayNamesCache.get(langCode);
    if (!dn) {
      dn = new Intl.DisplayNames([langCode], {type: 'language'});
      _displayNamesCache.set(langCode, dn);
    }
    return dn.of(langCode) || fallback;
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
