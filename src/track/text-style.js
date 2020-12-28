// @flow
import * as Utils from '../utils/util';
/**
 * We use this number to calculate the scale of the text. so it will be : 1 + 0.25 * FontSizes.value
 * So, if the user selects 400% the scale would be: 1 + 0.25 * 4 = 2. so the font size should be multiplied by 2.
 * The calculation of the size of the font is done in text-track-display and not in this module, because
 * the calculation in text-track-display also set the location of the container of the subtitiles according to the
 * font size.
 * @type {number}
 */
const IMPLICIT_SCALE_PERCENTAGE: number = 0.25;

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
    RAISED: [
      [34, 34, 34, 1, 1, 0],
      [34, 34, 34, 2, 2, 0],
      [34, 34, 34, 3, 3, 0]
    ],
    DEPRESSED: [
      [204, 204, 204, 1, 1, 0],
      [204, 204, 204, 0, 1, 0],
      [34, 34, 34, -1, -1, 0],
      [34, 34, 34, 0, -1, 0]
    ],
    UNIFORM: [
      [34, 34, 34, 0, 0, 4],
      [34, 34, 34, 0, 0, 4],
      [34, 34, 34, 0, 0, 4],
      [34, 34, 34, 0, 0, 4]
    ],
    DROP: [
      [34, 34, 34, 2, 2, 3],
      [34, 34, 34, 2, 2, 4],
      [34, 34, 34, 2, 2, 5]
    ]
  };

  static FontSizes: Array<Object> = [
    {
      value: -2,
      label: '50%'
    },
    {
      value: -1,
      label: '75%'
    },
    {
      value: 0,
      label: '100%'
    },
    {
      value: 2,
      label: '200%'
    },
    {
      value: 3,
      label: '300%'
    },
    {
      value: 4,
      label: '400%'
    }
  ];

  /**
   * Creates a CSS RGBA sctring for a given color and opacity values
   * @param {TextStyle.StandardColors} color - color value in RGB
   * @param {TextStyle.StandardOpacities} opacity - opacity value
   * @return {string} - CSS rgba string
   * @private
   */
  static toRGBA(color: Array<number>, opacity: number): string {
    // shaka.asserts.assert(color.length == 3);
    return 'rgba(' + color.concat(opacity).join(',') + ')';
  }

  _config: PKTextStyleObject = {
    /**
     * Font size, such as 1, 2, 3...
     * @type {number}
     */
    fontSize: '100%',
    fontScale: 1,
    /**
     * @type {TextStyle.FontFamily}
     */
    fontFamily: TextStyle.FontFamily.SANS_SERIF,
    /**
     * @type {TextStyle.StandardColors}
     */
    fontColor: TextStyle.StandardColors.WHITE,

    /**
     * @type {TextStyle.StandardOpacities}
     * @expose
     */
    fontOpacity: TextStyle.StandardOpacities.OPAQUE,

    /**
     * @type {TextStyle.StandardColors}
     */
    backgroundColor: TextStyle.StandardColors.BLACK,

    /**
     * @type {TextStyle.StandardOpacities}
     */
    backgroundOpacity: TextStyle.StandardOpacities.OPAQUE,

    /**
     * @type {TextStyle.EdgeStyles}
     * @expose
     */
    fontEdge: TextStyle.EdgeStyles.NONE
  };

  constructor(settings?: PKTextStyleObject) {
    this.setTextStyle(settings);
  }

  setTextStyle(settings?: PKTextStyleObject) {
    if (settings) {
      this._config = Utils.Object.mergeDeep({}, this._config, settings);
    }
  }

  getTextShadow(): string {
    // A given edge effect may be implemented with multiple shadows.
    // Collect them all into an array, then combine into one attribute.
    let shadows: Array<string> = [];
    for (let i = 0; i < this._config.fontEdge.length; i++) {
      // shaka.asserts.assert(this.fontEdge[i].length == 6);
      const color: Array<number> = this._config.fontEdge[i].slice(0, 3);
      let shadow: Array<number> = this._config.fontEdge[i].slice(3, 6);
      shadows.push(TextStyle.toRGBA(color, this._config.fontOpacity) + ' ' + shadow.join('px ') + 'px');
    }
    return shadows.join(',');
  }

  /**
   * Compute the CSS text necessary to represent this TextStyle.
   * Output does not contain any selectors.
   *
   * @return {string} - ::CUE CSS string
   */
  toCSS(): string {
    let attributes: Array<string> = [];
    attributes.push('font-family: ' + this._config.fontFamily);
    attributes.push('color: ' + TextStyle.toRGBA(this._config.fontColor, this._config.fontOpacity));
    attributes.push('background-color: ' + TextStyle.toRGBA(this._config.backgroundColor, this._config.backgroundOpacity));
    attributes.push('text-shadow: ' + this.getTextShadow());
    return attributes.join('!important; ');
  }

  /**
   * clones the textStyle object
   * @returns {TextStyle} the cloned textStyle object
   */
  clone(): TextStyle {
    return new TextStyle(Utils.Object.copyDeep(this.config));
  }

  /**
   * comparing between 2 textStyle objects.
   * @param {TextStyle} textStyle - The textStyle to compare with.
   * @returns {boolean} - Whether the text styles are equal.
   */
  isEqual(textStyle: TextStyle): boolean {
    return JSON.stringify(textStyle.config) === JSON.stringify(this._config);
  }

  get config(): PKTextStyleObject {
    return Utils.Object.copyDeep(this._config);
  }

  get implicitFontScale(): number {
    return IMPLICIT_SCALE_PERCENTAGE * this._config.fontScale + 1;
  }

  get fontSize(): string {
    return this._config.fontSize;
  }

  set fontSize(fontSize: string) {
    this._config.fontSize = fontSize;
  }

  get fontScale(): number {
    return this._config.fontScale;
  }

  set fontScale(fontScale: number) {
    this._config.fontScale = fontScale;
  }

  get fontFamily(): string {
    return this._config.fontFamily;
  }

  set fontFamily(fontFamily: string) {
    this._config.fontFamily = fontFamily;
  }

  get fontColor(): Array<number> {
    return this._config.fontColor;
  }

  set fontColor(fontColor: Array<number>) {
    this._config.fontColor = fontColor;
  }

  get fontOpacity(): number {
    return this._config.fontOpacity;
  }

  set fontOpacity(fontOpacity: number) {
    this._config.fontOpacity = fontOpacity;
  }

  get backgroundColor(): Array<number> {
    return this._config.backgroundColor;
  }

  set backgroundColor(backgroundColor: Array<number>) {
    this._config.backgroundColor = backgroundColor;
  }

  get backgroundOpacity(): number {
    return this._config.backgroundOpacity;
  }

  set backgroundOpacity(backgroundOpacity: number) {
    this._config.backgroundOpacity = backgroundOpacity;
  }

  get fontEdge(): Array<Array<number>> {
    return this._config.fontEdge;
  }

  set fontEdge(fontEdge: Array<Array<number>>) {
    this._config.fontEdge = fontEdge;
  }
}

export default TextStyle;
