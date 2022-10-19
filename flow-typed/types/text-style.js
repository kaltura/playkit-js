// @flow

/**
 * @typedef {Object} PKTextStyleObject
 * @property {"50%" | "75%" | "100%" | "200%" | "3000%" | "4000%"} fontSize='100%' - Percentage unit relative to the parent element's font size.
 * @property {-2 | -1 | 0 | 2 | 3 | 4} fontScale=0 - - Integer number representing the scaling factor relative to the parent element's font size..
 * @property {string} fontFamily='sans-serif'
 * @property {Array<number>} fontColor=[255, 255, 255] - Color in RGB format.
 * @property {number} fontOpacity=1
 * @property {Array<number>} fontEdge=[]
 * @property {Array<number>} backgroundColor=[0, 0, 0] - Color in RGB format.
 * @property {number} backgroundOpacity=1
 */
declare type PKTextStyleObject = {
  fontSize?: "50%" | "75%" | "100%" | "200%" | "3000%" | "4000%",
  fontScale?: -2 | -1 | 0 | 2 | 3 | 4,
  fontFamily?: string,
  fontColor?: Array<number>,
  fontOpacity?: number,
  fontEdge?: Array<Array<number>>,
  backgroundColor?: Array<number>,
  backgroundOpacity?: number
};
