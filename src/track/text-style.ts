/**
 * We use this number to calculate the scale of the text. so it will be : 1 + 0.25 * FontSizes.value
 * So, if the user selects 400% the scale would be: 1 + 0.25 * 4 = 2. so the font size should be multiplied by 2.
 * The calculation of the size of the font is done in text-track-display and not in this module, because
 * the calculation in text-track-display also set the location of the container of the subtitiles according to the
 * font size.
 * @type {number}
 */
import { FontScaleOptions, FontSizeOptions, PKTextStyleObject, FontAlignmentOptions } from '../types';

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
  public static FontFamily: {[font: string]: string} = {
    ARIAL: 'Arial',
    HELVETICA: 'Helvetica',
    VERDANA: 'Verdana',
    SANS_SERIF: 'sans-serif'
  };

  /**
   * Defined in {@link https://goo.gl/ZcqOOM FCC 12-9}, paragraph 111, footnote
   * 448.  Each value is an array of the three RGB values for that color.
   * @enum {Object.<string, [number, number, number]>}}
   * @export
   */
  public static StandardColors: {[coloer: string]: [number, number, number]} = {
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
  public static StandardOpacities: {[opacityLevel: string]: number} = {
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
   * @enum {!Array.<!Array.[number, number, number, number, number, number]>}
   * @export
   */
  public static EdgeStyles: {[edgeStyle:string]: Array<[number, number, number, number, number, number]>} = {
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

  /**
   * Possible font sizes are 50%, 75%, 100%, 200%, 300%, 400%
   */
  public static FontSizes: { label: FontSizeOptions; value: FontScaleOptions }[] = [
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
   * Possible font alignments are left, center, right
   */
  public static FontAlignment: { label: string; value: FontAlignmentOptions }[] = [
    {
      label: 'Left',
      value: 'left'
    },
    {
      label: 'Center',
      value: 'center'
    },
    {
      label: 'Right',
      value: 'right'
    }
  ];

  /**
   * Creates a CSS RGBA sctring for a given color and opacity values
   * @param {TextStyle.StandardColors} color - color value in RGB
   * @param {TextStyle.StandardOpacities} opacity - opacity value
   * @return {string} - CSS rgba string
   * @private
   */
  public static toRGBA(color: [number, number, number], opacity: number): string {
    // shaka.asserts.assert(color.length == 3);
    return 'rgba(' + color.concat(opacity).join(',') + ')';
  }

  public static fromJson(setting: PKTextStyleObject): TextStyle {
    const getValue = (newValue: any, defaultValue: any): any => {
      return typeof newValue !== 'undefined' && newValue !== null ? newValue : defaultValue;
    };
    const textStyle = new TextStyle();
    textStyle.fontEdge = getValue(setting.fontEdge, textStyle.fontEdge);
    textStyle.fontSize = getValue(setting.fontSize, textStyle.fontSize);
    textStyle.textAlign = getValue(setting.textAlign, textStyle.textAlign);
    textStyle.fontScale = getValue(setting.fontScale, textStyle.fontScale);
    textStyle.fontColor = getValue(setting.fontColor, textStyle.fontColor);
    textStyle.fontOpacity = getValue(setting.fontOpacity, textStyle.fontOpacity);
    textStyle.backgroundColor = getValue(setting.backgroundColor, textStyle.backgroundColor);
    textStyle.backgroundOpacity = getValue(setting.backgroundOpacity, textStyle.backgroundOpacity);
    textStyle.fontFamily = getValue(setting.fontFamily, textStyle.fontFamily);
    return textStyle;
  }

  public static toJson(text: TextStyle): PKTextStyleObject {
    return {
      fontEdge: text.fontEdge,
      fontSize: text.fontSize,
      textAlign: text.textAlign,
      fontScale: text.fontScale,
      fontColor: text.fontColor,
      fontOpacity: text.fontOpacity,
      backgroundColor: text.backgroundColor,
      backgroundOpacity: text.backgroundOpacity,
      fontFamily: text.fontFamily
    };
  }

  private _fontSizeIndex: number = 2; // 100%

  public set fontSize(fontSize: string) {
    const index = TextStyle.FontSizes.findIndex(({label}) => label === fontSize);
    if (index !== -1) {
      this._fontSizeIndex = index;
    }
  }

  public textAlign: FontAlignmentOptions = TextStyle.FontAlignment[1].value;

  /**
   * Percentage string matching a FontSizes entry
   */
  public get fontSize(): FontSizeOptions {
    return TextStyle.FontSizes[this._fontSizeIndex].label;
  }

  public set fontScale(fontScale: number) {
    const index = TextStyle.FontSizes.findIndex(({value}) => value === fontScale);
    if (index !== -1) {
      this._fontSizeIndex = index;
    }
  }

  /**
   * Numeric value matching a FontSizes entry (for backward compatibility)
   */
  public get fontScale(): FontScaleOptions {
    return TextStyle.FontSizes[this._fontSizeIndex].value;
  }

  /**
   * @type {TextStyle.FontFamily}
   */
  public fontFamily: string = TextStyle.FontFamily.SANS_SERIF;

  /**
   * @type {TextStyle.StandardColors}
   */
  public fontColor: [number, number, number] = TextStyle.StandardColors.WHITE;

  /**
   * @type {TextStyle.StandardOpacities}
   * @expose
   */
  public fontOpacity: number = TextStyle.StandardOpacities.OPAQUE;

  /**
   * @type {TextStyle.StandardColors}
   */
  public backgroundColor: [number, number, number] = TextStyle.StandardColors.BLACK;

  /**
   * @type {TextStyle.StandardOpacities}
   */
  public backgroundOpacity: number = TextStyle.StandardOpacities.OPAQUE;

  /**
   * @type {TextStyle.EdgeStyles}
   * @expose
   */
  public fontEdge: Array<[number, number, number, number, number, number]> = TextStyle.EdgeStyles.NONE;

  public getTextShadow(): string {
    // A given edge effect may be implemented with multiple shadows.
    // Collect them all into an array, then combine into one attribute.
    const shadows: Array<string> = [];
    for (let i = 0; i < this.fontEdge.length; i++) {
      // shaka.asserts.assert(this.fontEdge[i].length == 6);
      const color: [number, number, number] = (this.fontEdge[i].slice(0, 3) as any);
      const shadow: Array<number> = this.fontEdge[i].slice(3, 6);
      shadows.push(TextStyle.toRGBA(color, this.fontOpacity) + ' ' + shadow.join('px ') + 'px');
    }
    return shadows.join(',');
  }

  /**
   * Compute the CSS text necessary to represent this TextStyle.
   * Output does not contain any selectors.
   *
   * @return {string} - ::CUE CSS string
   */
  public toCSS(): string {
    const attributes: Array<string> = [];
    attributes.push('text-align: ' + this.textAlign);
    attributes.push('font-family: ' + this.fontFamily);
    attributes.push('color: ' + TextStyle.toRGBA(this.fontColor, this.fontOpacity));
    attributes.push('background-color: ' + TextStyle.toRGBA(this.backgroundColor, this.backgroundOpacity));
    attributes.push('text-shadow: ' + this.getTextShadow());
    return attributes.join('!important; ');
  }

  /**
   * clones the textStyle object
   * @returns {TextStyle} the cloned textStyle object
   */
  public clone(): TextStyle {
    return TextStyle.fromJson(TextStyle.toJson(this));
  }

  /**
   * comparing between 2 textStyle objects.
   * @param {TextStyle} textStyle - The textStyle to compare with.
   * @returns {boolean} - Whether the text styles are equal.
   */
  public isEqual(textStyle: TextStyle): boolean {
    return JSON.stringify(TextStyle.toJson(this)) === JSON.stringify(TextStyle.toJson(textStyle));
  }

  public get implicitFontScale(): number {
    const fontSizeValue = TextStyle.FontSizes[this._fontSizeIndex].value;
    return IMPLICIT_SCALE_PERCENTAGE * fontSizeValue + 1;
  }
}

export default TextStyle;
