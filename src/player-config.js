import {ScreenOrientationType} from './screen-orientation-type';

const DefaultConfig = {
  log: {
    level: 'ERROR'
  },
  sources: {
    options: {
      forceRedirectExternalStreams: false
    },
    metadata: {}
  },
  text: {
    enableCEA708Captions: false,
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
    startTime: -1,
    playsinline: true,
    preload: 'none',
    autoplay: false,
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
  abr: {
    enabled: true,
    fpsDroppedFramesInterval: 5000,
    fpsDroppedMonitoringThreshold: 0.2,
    capLevelOnFPSDrop: true,
    capLevelToPlayerSize: false,
    defaultBandwidthEstimate: 500e3,
    restrictions: {
      minBitrate: 0,
      maxBitrate: Infinity
    }
  },
  drm: {
    keySystem: ''
  },
  network: {}
};

export {DefaultConfig};
