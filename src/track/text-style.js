// @flow

/**
 * Creates a TextStyle object.
 *
 * <p><i>
 * Note that although this API is based on FCC guidelines, we cannot guarantee
 * that your application is in compliance with this or any other guideline.
 * </i></p>
 *
 * @constructor
 * @struct
 * @export
 */
class TextStyle {
  /**
   * Defined set of font families
   * @enum {Object.<string, string>}}
   * @export
   */
  static FontFamily: {[string]: string} = {
    ARIAL: 'Arial',
    HELVETICA: 'Helvetica',
    VERDANA: 'Verdana',
    SANS_SERIF: 'sans-serif'
  };

  /**
   * Defined in {@link https://goo.gl/ZcqOOM FCC 12-9}, paragraph 111, footnote
   * 448.  Each value is an array of the three RGB values for that color.
   * @enum {Object.<string, Array.<number>>}}
   * @export
   */
  static StandardColors: {[string]: Array<number>} = {
    WHITE: [255, 255, 255],
    BLACK: [0, 0, 0],
    RED: [255, 0, 0],
    GREEN: [0, 255, 0],
    BLUE: [0, 0, 255],
    YELLOW: [255, 255, 0],
    MAGENTA: [255, 0, 255],
    CYAN: [0, 255, 255]
  };

  /**
   * Defined in {@link https://goo.gl/ZcqOOM FCC 12-9}, paragraph 111.
   * @enum {Object.<string, number>}}
   * @export
   */
  static StandardOpacities: {[string]: number} = {
    OPAQUE: 1,
    SEMI_HIGH: 0.75,
    SEMI_LOW: 0.25,
    TRANSPARENT: 0
  };

  /**
   * Defined in {@link https://goo.gl/ZcqOOM FCC 12-9}, paragraph 111.
   * The styles to achieve these effects are not specified anywhere.
   *
   * Each inner array represents a shadow, and is composed of RGB values for the
   * shadow color, followed by pixel values for x-offset, y-offset, and blur.
   *
   * @enum {!Array.<!Array.<number>>}
   * @export
   */
  static EdgeStyles: {[string]: Array<Array<number>>} = {
    NONE: [],
    RAISED: [[34, 34, 34, 1, 1, 0], [34, 34, 34, 2, 2, 0], [34, 34, 34, 3, 3, 0]],
    DEPRESSED: [[204, 204, 204, 1, 1, 0], [204, 204, 204, 0, 1, 0], [34, 34, 34, -1, -1, 0], [34, 34, 34, 0, -1, 0]],
    UNIFORM: [[34, 34, 34, 0, 0, 4], [34, 34, 34, 0, 0, 4], [34, 34, 34, 0, 0, 4], [34, 34, 34, 0, 0, 4]],
    DROP: [[34, 34, 34, 2, 2, 3], [34, 34, 34, 2, 2, 4], [34, 34, 34, 2, 2, 5]]
  };

  static FontSizes: Array<string> = ['50%', '75%', '100%', '200%', '300%', '400%'];

  /**
   * Creates a CSS RGBA sctring for a given color and opacity values
   * @param {TextStyle.StandardColors} color - color value in RGB
   * @param {TextStyle.StandardOpacities} opacity - opacity value
   * @return {string} - CSS rgba string
   * @private
   */
  static _toRGBA(color: Array<number>, opacity: number): string {
    // shaka.asserts.assert(color.length == 3);
    return 'rgba(' + color.concat(opacity).join(',') + ')';
  }

  /**
   * Font size, such as 50%, 75%, 100%, 200%, or 300%.
   * @type {string}
   */
  fontSize: string = '100%';

  /**
   * @type {TextStyle.FontFamily}
   */
  fontFamily: string = TextStyle.FontFamily.SANS_SERIF;

  /**
   * @type {TextStyle.StandardColors}
   */
  fontColor: Array<number> = TextStyle.StandardColors.WHITE;

  /**
   * @type {TextStyle.StandardOpacities}
   * @expose
   */
  fontOpacity: number = TextStyle.StandardOpacities.OPAQUE;

  /**
   * @type {TextStyle.StandardColors}
   */
  backgroundColor: Array<number> = TextStyle.StandardColors.BLACK;

  /**
   * @type {TextStyle.StandardOpacities}
   */
  backgroundOpacity: number = TextStyle.StandardOpacities.OPAQUE;

  /**
   * @type {TextStyle.EdgeStyles}
   * @expose
   */
  fontEdge: Array<Array<number>> = TextStyle.EdgeStyles.NONE;

  /**
   * Compute the CSS text necessary to represent this TextStyle.
   * Output does not contain any selectors.
   *
   * @return {string} - ::CUE CSS string
   */
  toCSS(): string {
    let attributes: Array<string> = [];

    attributes.push('font-family: ' + this.fontFamily);
    attributes.push('font-size: ' + this.fontSize);
    attributes.push('color: ' + TextStyle._toRGBA(this.fontColor, this.fontOpacity));
    attributes.push('background-color: ' + TextStyle._toRGBA(this.backgroundColor, this.backgroundOpacity));

    // A given edge effect may be implemented with multiple shadows.
    // Collect them all into an array, then combine into one attribute.
    let shadows: Array<string> = [];
    for (let i = 0; i < this.fontEdge.length; i++) {
      // shaka.asserts.assert(this.fontEdge[i].length == 6);
      const color: Array<number> = this.fontEdge[i].slice(0, 3);
      let shadow: Array<number> = this.fontEdge[i].slice(3, 6);
      shadows.push(TextStyle._toRGBA(color, this.fontOpacity) + ' ' + shadow.join('px ') + 'px');
    }
    attributes.push('text-shadow: ' + shadows.join(','));

    return attributes.join('!important; ');
  }

  /**
   * clones the textStyle object
   * @returns {TextStyle} the cloned textStyle object
   */
  clone(): TextStyle {
    let clonedTextStyle = new TextStyle();
    clonedTextStyle.fontEdge = this.fontEdge;
    clonedTextStyle.fontSize = this.fontSize;
    clonedTextStyle.fontColor = this.fontColor;
    clonedTextStyle.fontOpacity = this.fontOpacity;
    clonedTextStyle.backgroundColor = this.backgroundColor;
    clonedTextStyle.backgroundOpacity = this.backgroundOpacity;
    clonedTextStyle.fontFamily = this.fontFamily;
    return clonedTextStyle;
  }
}

export default TextStyle;
