//@flow
declare type Session = {
  id: string
};

declare type Metadata = {
  poster: string
};

declare type Sources = {
  hls: Array<Source>,
  dash: Array<Source>,
  progressive: Array<Source>
};

declare type Source = {
  mimetype: string,
  url: string,
  id: ?string,
  bandwidth: ?number,
  width: ?number,
  height: ?number,
  drmData: ?Array<DrmData>
};

declare type PreferNative = {
  hls: boolean,
  dash: boolean
};

declare type StreamPriority = {
  engine: string,
  format: string
};

declare type PlaybackOptions = {
  html5: {
    hls: Object,
    dash: Object
  }
};

declare type PlayerConfig = {
  type: string,
  dvr: boolean,
  sources: Sources,
  plugins: Object,
  metadata: Metadata,
  session: Session,
  playback: {
    startTime: number,
    audioLanguage: string,
    textLanguage: string,
    useNativeTextTrack: boolean,
    volume: number,
    playsinline: boolean,
    preload: string,
    autoplay: boolean,
    allowMutedAutoPlay: boolean,
    muted: boolean,
    options: PlaybackOptions,
    preferNative: PreferNative,
    streamPriority: Array<StreamPriority>
  }
};

declare type EnvData = {
  ua: string,
  browser: {
    name: string,
    version: string
  },
  engine: {
    name: string,
    version: string
  },
  os: {
    name: string,
    version: string
  },
  device: {
    model: string,
    type: string,
    vendor: string
  },
  cpu: {
    architecture: string
  }
};

declare type PlayerDimensions = {
  width: number,
  height: number
};
