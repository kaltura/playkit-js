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
