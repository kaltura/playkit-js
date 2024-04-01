import * as Utils from './util';

/**
 * The text style class name.
 * @type {string}
 * @const
 */
const SUBTITLES_STYLE_CLASS_NAME: string = 'playkit-subtitles-style';

export const getSubtitleStyleSheet = (playerId: string): CSSStyleSheet => {
  let element = Utils.Dom.getElementBySelector(`.${playerId}.${SUBTITLES_STYLE_CLASS_NAME}`);
  if (!element) {
    element = Utils.Dom.createElement('style');
    Utils.Dom.addClassName(element, playerId);
    Utils.Dom.addClassName(element, SUBTITLES_STYLE_CLASS_NAME);
    Utils.Dom.appendChild(document.head, element);
  }
  return element.sheet;
};

export const resetSubtitleStyleSheet = (playerId: string): void => {
  const element = Utils.Dom.getElementBySelector(`.${playerId}.${SUBTITLES_STYLE_CLASS_NAME}`);
  element?.remove();
};
