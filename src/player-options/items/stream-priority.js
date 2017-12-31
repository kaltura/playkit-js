// @flow
export type StreamPriorityObject = {
  engine: string,
  format: string
};

export const EngineName: { [engine: string]: string } = {
  HTML5: "html5",
  FLASH: "flash",
  SILVERLIGHT: "silverlight"
};

export const FormatName: { [format: string]: string } = {
  HLS: "hls",
  DASH: "dash",
  PROGRESSIVE: "progressive"
};

export default class StreamPriority {
  _engine: string;
  _format: string;

  get engine(): string {
    return this._engine;
  }

  get format(): string {
    return this._format;
  }

  constructor(engine: string | StreamPriorityObject, format: string) {
    validate(engine, format);
    if (typeof engine === 'string') {
      this._engine = engine;
      this._format = format;
    } else if (typeof engine === 'object') {
      this.fromJSON(engine);
    }
  }

  fromJSON(json: StreamPriorityObject): void {
    this._engine = json.engine;
    this._format = json.format;
  }

  toJSON(): StreamPriorityObject {
    return {
      engine: this.engine,
      format: this.format
    };
  }
}

/**
 * Validate user input
 * @param {Array<any>} param - user input
 * @returns {void}
 */
function validate(...params: Array<any>): void {
  if (typeof params[0] === 'string' && typeof params[1] === 'string') return;
  if (typeof params[0] === 'object' && typeof params[0].engine === 'string' && typeof params[0].format === 'string') return;
  throw new TypeError('Engine and format must be provide and be type of strings');
}
