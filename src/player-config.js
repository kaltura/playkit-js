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
  plugins: {},
  playback: {
    audioLanguage: '',
    textLanguage: '',
    useNativeTextTrack: false,
    enableCEA708Captions: false,
    captionsTextTrack1Label: 'English',
    captionsTextTrack1LanguageCode: 'en',
    captionsTextTrack2Label: 'Spanish',
    captionsTextTrack2LanguageCode: 'es',
    volume: 1,
    startTime: -1,
    playsinline: true,
    preload: 'none',
    autoplay: false,
    loop: false,
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
