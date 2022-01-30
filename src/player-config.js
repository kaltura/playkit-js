import {ScreenOrientationType} from './enums/screen-orientation-type';

const DefaultConfig = {
  log: {
    level: 'ERROR'
  },
  text: {
    enableCEA708Captions: true,
    useNativeTextTrack: false,
    forceCenter: false,
    captionsTextTrack1Label: 'English',
    captionsTextTrack1LanguageCode: 'en',
    captionsTextTrack2Label: 'Spanish',
    captionsTextTrack2LanguageCode: 'es'
  },
  playback: {
    audioLanguage: '',
    textLanguage: '',
    volume: 1,
    playsinline: true,
    preload: 'none',
    autoplay: false,
    autopause: false,
    allowMutedAutoPlay: true,
    muted: false,
    pictureInPicture: true,
    options: {
      html5: {
        hls: {},
        dash: {},
        native: {}
      }
    },
    preferNative: {
      hls: false,
      dash: false
    },
    inBrowserFullscreen: false,
    screenLockOrientionMode: ScreenOrientationType.NONE,
    playAdsWithMSE: false,
    streamPriority: [
      {
        engine: 'html5',
        format: 'hls'
      },
      {
        engine: 'html5',
        format: 'dash'
      },
      {
        engine: 'html5',
        format: 'progressive'
      },
      {
        engine: 'flash',
        format: 'hls'
      }
    ]
  },
  streaming: {
    forceBreakStall: false,
    lowLatencyMode: true
  },
  abr: {
    enabled: true,
    fpsDroppedFramesInterval: 5000,
    fpsDroppedMonitoringThreshold: 0.2,
    capLevelOnFPSDrop: true,
    capLevelToPlayerSize: false,
    restrictions: {
      minHeight: 0,
      maxHeight: Infinity,
      minWidth: 0,
      maxWidth: Infinity,
      minBitrate: 0,
      maxBitrate: Infinity
    }
  },
  drm: {
    keySystem: ''
  },
  network: {
    maxStaleLevelReloads: 20
  }
};

const DefaultSources = {
  options: {},
  metadata: {}
};

export {DefaultConfig, DefaultSources};
