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
  constructor(engine: string, format: string) {
    this._engine = engine;
    this._format = format;
  }

  _engine: string;

  get engine(): string {
    return this._engine;
  }

  _format: string;

  get format(): string {
    return this._format;
  }

  toJSON(): StreamPriorityObject {
    return {
      engine: this.engine,
      format: this.format
    };
  }
}
