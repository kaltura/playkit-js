// @flow

import * as Utils from './utils/util'

class PosterManager{
  /**
   * Poster image URL
   * @type {string}
   * @private
   */
  _posterUrl: string;
  /**
   * The environment(os,device,browser) object of the player.
   * @type {HTMLDivElement}
   * @private
   */
  _el: HTMLDivElement;

  constructor(){
    this._createEl();
  }

  /**
   * Set the poster source URL
   * @param {string} posterUrl - the poster image URL
   * @returns {void}
   */
  setSrc(posterUrl: string): void{
    this._posterUrl = posterUrl;
    if (posterUrl !== undefined) {
      this._el.style.backgroundImage = `url("${posterUrl}")`;
    }
  }

  /**
   * Get the poster source URL
   * @returns {string} - the poster image URL
   */
  get src(): string{
    return this._posterUrl;
  }

  /**
   * Get the poster HTML Div element
   * @returns {HTMLDivElement} - Poster HTML Dom element
   */
  getElement(): HTMLDivElement{
    return this._el;
  }

  /**
   * Create the HTML Div element of the poster
   * @private
   * @returns {void}
   */
  _createEl(): void{
    if (this._el === undefined){
      const el = this._el = Utils.Dom.createElement("div");
      Utils.Dom.setAttribute(el, "id", Utils.Generator.uniqueId(5));
      Utils.Dom.setAttribute(el, "tabindex", '-1');

    }
  }

  /**
   * Show the poster image
   * @returns {void}
   */
  show(): void{
    Utils.Dom.setStyle(this._el, "display", "");
  }

  /**
   * Hide the poster image
   * @returns {void}
   */
  hide(): void{
    Utils.Dom.setStyle(this._el, "display", "none");
  }
}

export default PosterManager;
