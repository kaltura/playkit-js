// @flow
import * as Utils from './util'

class PosterManager {
  /**
   * Poster image URL
   * @type {string}
   * @private
   */
  _posterUrl: string;
  /**
   * The poster HTML Div element.
   * @type {HTMLDivElement}
   * @private
   */
  _el: HTMLDivElement;

  constructor() {
    this._createEl();
  }

  /**
   * Set the poster source URL
   * @param {string} posterUrl - the poster image URL
   * @public
   * @returns {void}
   */
  setSrc(posterUrl: ?string): void {
    if (posterUrl) {
      this._posterUrl = posterUrl;
      Utils.Dom.setStyle(this._el, "background-image", `url("${this._posterUrl}")`);
    }
  }

  /**
   * Get the poster source URL
   * @public
   * @returns {string} - the poster image URL
   */
  get src(): string {
    return this._posterUrl;
  }

  /**
   * Get the poster HTML Div element
   * @public
   * @returns {HTMLDivElement} - Poster HTML Dom element
   */
  getElement(): HTMLDivElement {
    return this._el;
  }

  /**
   * Create the HTML Div element of the poster
   * @private
   * @returns {void}
   */
  _createEl(): void {
    if (!this._el) {
      const el = this._el = Utils.Dom.createElement("div");
      Utils.Dom.setAttribute(el, "id", Utils.Generator.uniqueId(5));
      Utils.Dom.setAttribute(el, "tabindex", '-1');
    }
  }

  /**
   * Removes the poster element from the dom
   * @private
   * @returns {void}
   */
  _removeEl(): void {
    if (this._el) {
      Utils.Dom.removeChild(this._el.parentNode, this._el);
    }
  }

  /**
   * Show the poster image
   * @public
   * @private
   * @returns {void}
   */
  show(): void {
    Utils.Dom.setStyle(this._el, "display", "");
  }

  /**
   * Hide the poster image
   * @public
   * @returns {void}
   */
  hide(): void {
    Utils.Dom.setStyle(this._el, "display", "none");
  }

  /**
   * Resets the poster url and the background image
   * @public
   * @returns {void}
   */
  reset(): void {
    this._posterUrl = '';
    Utils.Dom.setStyle(this._el, "background-image", '');
  }

  /**
   * Destroys the poster element
   * @public
   * @returns {void}
   */
  destroy(): void {
    this.reset();
    this._removeEl();
  }
}

export default PosterManager;
