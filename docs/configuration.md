## Configuration

Configuration parameters could be provided upon instantiation of the player instance.

```js
var config = {
  // Configuration here
};
var player = playkit.core.loadPlayer(config);
```

#### Configuration Structure

```js
{
  log: PKLogConfigObject,
  playback: PKPlaybackConfigObject,
  streaming: PKStreamingConfigObject,
  session: PKSessionConfigObject,
  network: PKNetworkConfigObject,
  customLabels: PKCustomLabelsConfigObject,
  abr: PKAbrConfigObject,
  drm: PKDrmConfigObject,
  dimensions: PKDimensionsConfig
}
```

#### Default Configuration Values

```js
var config = {
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
      }
    ]
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
  }
};
```

##

> ### config.log
>
> ##### Type: `PKLogConfigObject`
>
> ```js
> {
>   level: string,
>   handler: ?LogHandlerType
> }
> ```
>
> > ### config.log.level
> >
> > ##### Default: `"ERROR"`
> >
> > ##### Description: Defines the player log level.
> >
> > Possible values: `"DEBUG", "INFO", "TIME", "WARN", "ERROR", "OFF"`
> >
> > ### config.log.handler
> >
> > ##### Type `LogHandlerType`
> >
> > ##### Description: Defines the player log handler.
> >
> > ```js
> > function(messages: any[], context: Object)
> > ```
> >
> > (messages: any[], context: Object)

##

> ### sources
>
> ##### Type: `PKSourcesConfigObject`
>
> ```js
> {
>  dash: Array<PKMediaSourceObject>
>  hls: Array<PKMediaSourceObject>
>  progressive: Array<PKMediaSourceObject>,
>  options: PKMediaSourceOptionsObject,
>  type: string,
>  dvr: boolean,
>  metadata: PKMetadataConfigObject,
>  id?: string,
>  poster?: string,
>  duration?: number,
>  captions?: Array<PKExternalCaptionObject>,
>  thumbnails?: PKExternalThumbnailsConfig,
>  startTime?: number
> }
> ```
>
> > ##### Type `PKMediaSourceObject`
> >
> > ```js
> > {
> >  mimetype: string,
> >  url: string,
> >  id: string, // optional
> >  bandwidth: number, // optional
> >  width: number, // optional
> >  height: number, // optional
> >  drmData: Array<PKDrmDataObject> // optional
> > }
> > ```
> >
> > ##### Type `PKDrmDataObject`
> >
> > ```js
> > {
> >  licenseUrl: string,
> >  scheme: string,
> >  certificate: string // optional
> > }
> > ```
> >
> > ##### Type `PKMediaSourceOptionsObject`
> >
> > ```js
> > {
> >  forceRedirectExternalStreams: boolean,
> >  redirectExternalStreamsHandler: ?Function,
> >  redirectExternalStreamsTimeout: ?number
> > }
> > ```
> >
> > ##### Type `PKMetadataConfigObject`
> >
> > ```js
> > {
> >  name?: string,
> >  description?: string
> > }
> > ```
> >
> > ##### Type `PKExternalCaptionObject`
> >
> > ```js
> > {
> >  url: string,
> >  label: string,
> >  language: string,
> >  default?: string,
> >  type?: string
> > }
> > ```
>
> ##### Default:
>
> ```js
> {
>  options: {
>    forceRedirectExternalStreams: false
>  }.
>  metadata: {}
> }
> ```
>
> ##### Description: Defines related sources configurations.
>
> ##
>
> > ### sources.hls
> >
> > ##### Type: `Array<PKMediaSourceObject>`
> >
> > ##### Default: `[]`
> >
> > ##### Description: Defines the optional hls sources for playback.
> >
> > #### Example:
> >
> > ```js
> > var sources: {
> >   hls: [
> >     {
> >       mimetype: 'application/x-mpegurl',
> >       url: '//PATH/TO/MANIFEST.m3u8'
> >     }
> >   ]
> > };
> > ```
> >
> > ##
> >
> > ### sources.dash
> >
> > ##### Type: `Array<PKMediaSourceObject>`
> >
> > ##### Default: `[]`
> >
> > ##### Description: Defines the optional dash sources for playback.
> >
> > #### Example:
> >
> > ```js
> > var sources: {
> >   dash: [
> >     {
> >       mimetype: 'application/x-mpegurl',
> >       url: '//PATH/TO/MANIFEST.mpd'
> >     }
> >   ]
> > };
> > ```
> >
> > ##
> >
> > ### sources.progressive
> >
> > ##### Type: `Array<PKMediaSourceObject>`
> >
> > ##### Default: `[]`
> >
> > ##### Description: Defines the optional progressive sources for playback.
> >
> > #### Example:
> >
> > ```js
> > var sources: {
> >   progressive: [
> >     {
> >       mimetype: 'video/mp4',
> >       url: '//PATH/TO/FILE.mp4'
> >     }
> >   ]
> > };
> > ```
> >
> > ##
> >
> > ### sources.options
> >
> > ##### Type: `PKMediaSourceOptionsObject`
> >
> > ##### Default:
> >
> > ```js
> > {
> >   forceRedirectExternalStreams: false;
> > }
> > ```
> >
> > ##### Description: Defines the sources options.
> >
> > ##
> >
> > > ### sources.options.forceRedirectExternalStreams
> > >
> > > ##### Type: `boolean`
> > >
> > > ##### Default: `false`
> > >
> > > ##### Description: Enable workaround for some user-agents that don't allow redirects after a successful CORS-preflight request.
> > >
> > > ##
> > >
> > > ### sources.options.redirectExternalStreamsHandler
> > >
> > > ##### Type: `Function`
> > >
> > > ##### Default: `-`
> > >
> > > ##### Description: The handler function which redirects the stream.
> > >
> > > ##
> > >
> > > ### sources.options.redirectExternalStreamsTimeout
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `-`
> > >
> > > ##### Description: The timeout for the redirect operation.
> >
> > ##
> >
> > ### sources.type
> >
> > ##### Type: `string`
> >
> > ##### Default: `-`
> >
> > ##### Description: Defines the type of media being used.
> >
> > Possible values: `"Vod", "Live", "Image", "Audio", "Unknown"`.
> >
> > ##
> >
> > ### sources.dvr
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `-`
> >
> > ##### Description: Defines the dvr value.
> >
> > Relevant only if the media type=`"Live"`.
> >
> > ##
> >
> > ### sources.metadata
> >
> > ##### Type: `PKMetadataConfigObject`
> >
> > ##### Default: `{}`
> >
> > ##### Description: Defines the metadata of the media.
> >
> > ##
> >
> > > ### sources.metadata.name
> > >
> > > ##### Type: `string`
> > >
> > > ##### Default: `-`
> > >
> > > ##### Description: The name of the media.
> > >
> > > ##
> > >
> > > ### sources.metadata.description
> > >
> > > ##### Type: `string`
> > >
> > > ##### Default: `-`
> > >
> > > ##### Description: The description of the media.
> >
> > ##
> >
> > ### sources.id
> >
> > ##### Type: `string`
> >
> > ##### Default: `-`
> >
> > ##### Description: The id of the media.
> >
> > ##
> >
> > ### sources.poster
> >
> > ##### Type: `string`
> >
> > ##### Default: `-`
> >
> > ##### Description: The poster url of the media.
> >
> > ##
> >
> > ### sources.duration
> >
> > ##### Type: `number`
> >
> > ##### Default: `-`
> >
> > ##### Description: The duration of the media.
> >
> > ##
> >
> > ### sources.captions
> >
> > ##### Type: `Array<PKExternalCaptionObject>`
> >
> > ##### Default: `-`
> >
> > ##### Description: An array of captions to be added to the media.
> >
> > The following fields are mandatory: `url`, `language` and `label`.
> >
> > #### Example:
> >
> > ```js
> > var sources: {
> >   captions: [
> >     {
> >       url: 'www.path.to/your/captions/file',
> >       type: 'vtt',
> >       default: true,
> >       language: 'en',
> >       label: 'English'
> >     }
> >   ]
> > };
> > ```
> >
> > ##
> >
> > ### sources.thumbnails
> >
> > ##### Type: `PKExternalThumbnailsConfig`
> >
> > ##### Default: `-`
> >
> > ##### Description: vtt thumbnails to be added to the media.
> >
> > The imgBaseUrl field is optional, if not provided - it would be resolved to the application domain.
> >
> > #### Example:
> >
> > ```js
> > var sources: {
> >   thumbnails: [
> >     {
> >       imgBaseUrl: 'www.path.to/your/resources/images',
> >       vttUrl: 'www.path.to/your/thumbnails/file.vtt'
> >     }
> >   ]
> > };
> > ```
> >
> > ##
> >
> > ### sources.startTime
> >
> > ##### Type: `number`
> >
> > ##### Default: `-1`
> >
> > ##### Description: Optional start time, in seconds, to begin playback.
> >
> > Default -1 refer to automatic start time - 0 to VOD and live edge to live.
> >
> > > Note. `startTime` affects the ad playback, e.g. `startTime: 10` will skip ads scheduled until 10.
> > > <br>To force playing ads scheduled before `startTime`, need to configure the ads plugin.
> > > <br>For example with [IMA](https://github.com/kaltura/playkit-js-ima/blob/master/docs/api.md) plugin, set `adsRenderingSettings: {playAdsAfterTime: -1}`.
>
> ##
>
> ### config.text
>
> ##### Type: `PKTextConfigObject`
>
> ```js
> {
>  useNativeTextTrack: boolean,
>  enableCEA708Captions: boolean,
>  forceCenter: boolean,
>  textTrackDisplaySetting: PKTextTrackDisplaySettingObject,
>  textStyle: TextStyle,
>  captionsTextTrack1Label: string,
>  captionsTextTrack1LanguageCode: string,
>  captionsTextTrack2Label: string,
>  captionsTextTrack2LanguageCode: string
> }
> ```
>
> ##### Default:
>
> ```js
> {
>  useNativeTextTrack: false,
>  enableCEA708Captions: true,
>  forceCenter: false,
>  captionsTextTrack1Label: "English",
>  captionsTextTrack1LanguageCode: "en",
>  captionsTextTrack2Label: "Spanish",
>  captionsTextTrack2LanguageCode: "es"
> }
> ```
>
> ##
>
> > ### config.text.useNativeTextTrack
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ##### Description: Determines whether to use native browser text tracks or not.
> >
> > If set to True, the native browser captions will be displayed.
>
> ##
>
> > ### config.text.enableCEA708Captions
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ##### Description: Whether or not to enable CEA-708 captions.
>
> ##
>
> > ### config.text.forceCenter
> >
> > ##### Type: `Object`
> >
> > ##### Default: `false`
> >
> > ##### Description: set the forceCenter to true will override the position, align and size in textTrackDisplaySetting
>
> ##
>
> > ### config.text.textTrackDisplaySetting
> >
> > ##### Type: `PKTextTrackDisplaySettingObject`
> >
> > ##### Default: `null`
> >
> > ##### Description: set the textTrackDisplaySetting to override the cues position
>
> ##
>
> > ### config.text.textStyle
> >
> > ##### Type: `TextStyle`
> >
> > ##### Default: `null`
> >
> > ##### Description: set the styling for text tracks
>
> ##
>
> > ### config.text.captionsTextTrack1Label
> >
> > ##### Type: `string`
> >
> > ##### Default: `English`
> >
> > ##### Description: Label for the CEA-708 captions track 1.
>
> ##
>
> > ### config.text.captionsTextTrack1LanguageCode
> >
> > ##### Type: `string`
> >
> > ##### Default: `en`
> >
> > ##### Description: RFC 3066 language code for the CEA-708 captions track 1.
>
> ##
>
> > ### config.text.captionsTextTrack2Label
> >
> > ##### Type: `string`
> >
> > ##### Default: `Spanish`
> >
> > ##### Description: Label for the CEA-708 captions track 2.
>
> ##
>
> > ### config.text.captionsTextTrack2LanguageCode
> >
> > ##### Type: `string`
> >
> > ##### Default: `es`
> >
> > ##### Description: RFC 3066 language code for the CEA-708 captions track 2.
>
> ##
>
> ### config.playback
>
> ##### Type: `PKPlaybackConfigObject`
>
> ```js
> {
>  audioLanguage: string,
>  textLanguage: string,
>  volume: number,
>  playsinline: boolean,
>  crossOrigin: string,
>  preload: string,
>  autoplay: PKAutoPlayTypes,
>  autopause: boolean,
>  allowMutedAutoPlay: boolean,
>  muted: boolean,
>  pictureInPicture: boolean,
>  options: PKPlaybackOptionsObject,
>  streamPriority: Array<PKStreamPriorityObject>,
>  preferNative: PKPreferNativeConfigObject,
>  inBrowserFullscreen: boolean,
>  playAdsWithMSE: boolean,
>  screenLockOrientionMode: string
> }
> ```
>
> ##### Default:
>
> ```js
> {
>  audioLanguage: "",
>  textLanguage: "",
>  volume: 1,
>  playsinline: true,
>  preload: "none",
>  autoplay: false,
>  allowMutedAutoPlay: true,
>  muted: false,
>  pictureInPicture: true,
>  playAdsWithMSE: false,
>  screenLockOrientionMode: ScreenOrientationType.NONE,
>  options: {
>    html5: {
>      hls: {},
>      dash: {}
>    }
>  },
>  preferNative: {
>    hls: false,
>    dash: false
>  },
>  streamPriority: [
>    {
>      engine: "html5",
>      format: "hls"
>    },
>    {
>      engine: "html5",
>      format: "dash"
>    },
>    {
>      engine: "html5",
>      format: "progressive"
>    }
>  ]
> }
> ```
>
> ##### Description: Defines the playback options.
>
> > ### config.playback.audioLanguage
> >
> > ##### Type: `string`
> >
> > ##### Default: `""`
> >
> > ##### Description: Sets the default audio track language.
> >
> > If an audio track with the defined language exists, this audio track will be selected as the initial audio track.
> >
> > #### Example:
> >
> > ```js
> > var config = {
> >   playback: {
> >     audioLanguage: 'eng' // Start playback with english audio
> >   }
> > };
> > ```
>
> ##
>
> > ### config.playback.textLanguage
> >
> > ##### Type: `string || "auto"`
> >
> > ##### Default: `""`
> >
> > ##### Description: Defines the default captions language
> >
> > If captions for the defined language are available, this text track will be selected as the initial text track.
> >
> > #### Example:
> >
> > ```js
> > var config = {
> >   playback: {
> >     textLanguage: 'heb' // Start playback with hebrew captions
> >   }
> > };
> > ```
> >
> > If the value `"auto"` is set, i.e:
> >
> > ```js
> > var config = {
> >   playback: {
> >     textLanguage: 'auto'
> >   }
> > };
> > ```
> >
> > The player will choose the default captions language using the following logic:
> >
> > 1.  **Locale language** - If there are captions in the user's system language then this language will be selected.
> > 2.  **Manifest default language** - If a default language is specified in the manifest file then this language will be selected.
> > 3.  **First language in manifest** - The first language specified in the manifest file will be selected.
> > 4.  If none of the above conditions have taken place, do not display captions.
>
> ##
>
> > ### config.playback.volume
> >
> > ##### Type: `number`
> >
> > ##### Default: `1`
> >
> > ##### Description: Defines the initial volume value.
> >
> > The value must be in the range of 0-1.
> >
> > #### Example:
> >
> > ```js
> > var config = {
> >   playback: {
> >     volume: 0.5
> >   }
> > };
> > ```
>
> ##
>
> > ### config.playback.playsinline
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `true`
> >
> > ##### Description: A Boolean attribute that indicates whether the video should be played "inline", that is, within the element's playback area.
> >
> > This is especially relevant when playing videos on iPhone devices, where - if the value is set to false - the video will be played using the AV Player (iOS native video player).
>
> ##
>
> > ### config.playback.crossOrigin
> >
> > ##### Type: `string`
> >
> > ##### Default: -
> >
> > ##### Description: This enumerated attribute indicates whether to use CORS to fetch the related image. [CORS-enabled resources](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image) can be reused in the <canvas> element without being tainted.
> >
> > Possible values:
> >
> > - `"anonymous"`: Sends a cross-origin request without a credential. In other words, it sends the Origin: HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin: HTTP header), the image will be tainted, and its usage restricted.
> > - `"use-credentials"`: Sends a cross-origin request with a credential. In other words, it sends the Origin: HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through Access-Control-Allow-Credentials: HTTP header), the image will be tainted and its usage restricted.
> >
> > When not present, the resource is fetched without a CORS request (i.e. without sending the Origin: HTTP header), preventing its non-tainted used in <canvas> elements. If invalid, it is handled as if the enumerated keyword anonymous was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for additional information.
>
> ##
>
> > ### config.playback.preload
> >
> > ##### Type: `string`
> >
> > ##### Default: `"none"`
> >
> > ##### Description: Indicates whether the video should be preloaded or not.
> >
> > Possible values:
> >
> > - `"none"`: indicates that the video should not be preloaded.
> > - `"auto"`: indicates that the whole video file could be downloaded, even if the user is not expected to use it.
>
> ##
>
> > ### config.playback.autoplay/allowMutedAutoPlay
> >
> > for `autoplay` & `allowMutedAutoPlay` options read [here](autoplay.md).
>
> ##
>
> > ### config.playback.autopause
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ##### Description: Indicates whether the video should be automatically paused when not in view
>
> ##
>
> > ### config.playback.muted
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ##### Description: Indicates whether the video should be muted or not.
> >
> > This is a Boolean attribute that indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. The attribute's default value is false, which means that the audio will be played automatically when the video is played.
>
> ##
>
> > ### config.playback.playbackRates
> >
> > ##### Type: `Array<number>`
> >
> > ##### Description: Sets the available rates at which the media can be played back.
> >
> > This is an Array attribute that is used to implement user controls for fast forward, slow motion, and so forth. The normal playback rate is multiplied by this value to obtain the current rate, so a value of 1.0 indicates normal speed.
>
> ##
>
> > ### config.playback.pictureInPicture
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `true`
> >
> > ##### Description: Indiciates if the picture in picture feature is enabled.
> >
> > This is a boolean attribute that allows to disable (enabled by default) the picture in picture feature (it will be enabled only in browsers supporting this ability)
>
> ##
>
> > ### config.playback.options
> >
> > ##### Type: `PKPlaybackOptionsObject`
> >
> > ```js
> > {
> >  html5: {
> >    hls: Object,
> >    dash: Object
> >  }
> > }
> > ```
> >
> > ##### Default:
> >
> > ```js
> > {
> >  html5: {
> >    hls: {},
> >    dash: {}
> >  }
> > }
> > ```
> >
> > ##### Description: Defines the media source adapters configurations.
> >
> > - For `hls` configuration, see the [hls.js](https://github.com/video-dev/hls.js/blob/master/docs/API.md) documentation.
> > - For `dash` configuration, see the [shaka-player](https://shaka-player-demo.appspot.com/docs/api/tutorial-config.html) documentation.
>
> ##
>
> > ### config.playback.preferNative
> >
> > ##### Type: `PKPreferNativeConfig`
> >
> > ```js
> > {
> >  hls: boolean,
> >  dash: boolean
> > }
> > ```
> >
> > ##### Default:
> >
> > ```js
> > {
> >  hls: false,
> >  dash: false
> > }
> > ```
> >
> > ##### Description: Indicates whether to prefer native browser playback (if supported) with media source extensions.
> >
> > If one of the values is set to True and the player chooses to play the truthly media source extension, the player will try to play it natively if supported by the browser.
> >
> > #### Example:
> >
> > Lets assume the following configuration:
> >
> > ```js
> > var config = {
> >   playback: {
> >     preferNative: {
> >       hls: true
> >     }
> >   }
> > };
> > ```
> >
> > If the player is running on a _Safari_ browser, the player will use the native hls playback managed by the _Safari_ browser. However, if running on a browser in which hls playback is not supported natively, for example, _Chrome_, the player will play hls using the `hls.js` library.
>
> ##
>
> > ### config.playback.inBrowserFullscreen
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ```js
> > inBrowserFullscreen: boolean;
> > ```
> >
> > ##### Description: Gives the ability to choose an in-browser fullscreen experience. Useful on iOS devices which will replace the native fullscreen of the AV player.
>
> ##
>
> > ### config.playback.playAdsWithMSE
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ```js
> > playAdsWithMSE: boolean;
> > ```
> >
> > > ##### Description: Gives the ability to share same video tag to play ads and source with media source
>
> ##
>
> > ### config.playback.screenLockOrientionMode
> >
> > ##### Type: `string` - value list option in ScreenOrientationType
> >
> > ##### Default: `none` - ScreenOrientationType.NONE
> >
> > ```js
> > screenLockOrientionMode: string;
> > ```
> >
> > > ##### Description: Gives the ability to lock the screen orientation in fullscreen
>
> ##
>
> > ### config.playback.streamPriority
> >
> > ##### Type: `Array<PKStreamPriorityObject`
> >
> > > ##### Type `PKStreamPriorityObject`
> > >
> > > ```js
> > > {
> > >   engine: string,
> > >   format: string
> > > }
> > > ```
> >
> > ##### Default:
> >
> > ```js
> > [
> >   {
> >     engine: 'html5',
> >     format: 'hls'
> >   },
> >   {
> >     engine: 'html5',
> >     format: 'dash'
> >   },
> >   {
> >     engine: 'html5',
> >     format: 'progressive'
> >   },
> >   {
> >     engine: 'flash',
> >     format: 'hls'
> >   }
> > ];
> > ```
> >
> > ##### Description: Specifies the list of engine and stream format pairs of the player by ascending order.
> >
> > As soon as the player receives the sources, it will review the configuration array and try to play the source with the matched stream format according to the matched engine.
> > For example, in the priority configuration above, the player will try to play the hls stream using an html5 engine first. If an hls stream isn't received, the player will continue to play the dash stream using an html5 engine. If a dash stream isn't received, the player will then will continue to play the progressive stream using an html5 engine.

##

> ### config.streaming
>
> ##### Type: `PKStreamingConfigObject`
>
> ```js
> {
>   forceBreakStall: boolean,
>   lowLatencyMode: boolean
> }
> ```
>
> ##### Default:
>
> ```js
> {
>   forceBreakStall: false,
>   lowLatencyMode: true
> }
> ```
>
> > ##
> >
> > ### config.streaming.forceBreakStall
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ##### Description: Gives the ability to break stalls on low level devices which could get stuck on stall
>
> > ##
> >
> > ### config.streaming.lowLatencyMode
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `true`
> >
> > ##### Description: Enable low latency streaming mode

##

> ### config.session
>
> ##### Type: `PKSessionConfigObject`
>
> ```js
> {
>  id: string,
>  ks: string,
>  partnerId: number,
>  uiConfId: number
> }
> ```
>
> ##### Default: `-`
>
> ##### Description: Defines the session data (optional).
>
> > ##
> >
> > ### config.session.id
> >
> > ##### Type: `string`
> >
> > ##### Default: `-`
> >
> > ##### Description: The session id.
> >
> > ##
> >
> > ### config.session.ks
> >
> > ##### Type: `string`
> >
> > ##### Default: `-`
> >
> > ##### Description: The session secret.
> >
> > ##
> >
> > ### config.session.partnerId
> >
> > ##### Type: `number`
> >
> > ##### Default: `-`
> >
> > ##### Description: The partner id.
> >
> > ##
> >
> > ### config.session.uiConfId
> >
> > ##### Type: `number`
> >
> > ##### Default: `-`
> >
> > ##### Description: The ui configuration id.

##

> ### config.network
>
> ##### Type: `PKNetworkConfigObject`
>
> ```js
> {
>  requestFilter?: Function,
>  responseFilter?: Function
> }
> ```
>
> ##### Default: `-`
>
> ##### Description: Defines the network data (optional).
>
> > ##
> >
> > ### config.network.requestFilter
> >
> > ##### Type: `function(type: PKRequestType, request: PKRequestObject): (void | Promise<PKRequestObject>)`
> >
> > ##### Default: `-`
> >
> > ##### Description: Defines a filter for requests. This filter takes the request and modifies it before it is sent. A request filter can run asynchronously by returning a promise; in this case, the request will not be sent until the promise is resolved.
> >
> > ##
> >
> > > ##### Type: PKRequestType
> > >
> > > ```js
> > > {
> > >   MANIFEST: 0,
> > >   SEGMENT: 1,
> > >   LICENSE: 2
> > > }
> > > ```
> > >
> > > ##
> > >
> > > ##### Type: PKRequestObject
> > >
> > > ```js
> > > {
> > >   url: string,
> > >   body: ?string | ArrayBuffer,
> > >   headers: { [header: string] : string }
> > > }
> > > ```
> > >
> > > ##
> > >
> > > > ##### `PKRequestObject.url`
> > > >
> > > > ##### Type: `string`
> > > >
> > > > ##### Description: The request URL.
> > > >
> > > > ##
> > > >
> > > > ##### `PKRequestObject.body`
> > > >
> > > > ##### Type: `string || ArrayBuffer`
> > > >
> > > > ##### Description: The body of the request.
> > > >
> > > > ##
> > > >
> > > > ##### `PKRequestObject.headers`
> > > >
> > > > ##### Type: `{ [header: string] : string }`
> > > >
> > > > ##### Description: A mapping of headers for the request. e.g.: {'HEADER': 'VALUE'}.
> >
> > ##
> >
> > #### Examples:
> >
> > ```js
> > var config = {
> >   network: {
> >     requestFilter: function (type, request) {
> >       if (type === KalturaPlayer.core.RequestType.LICENSE) {
> >         request.headers['customData'] = CUSTOM_DATA;
> >       }
> >     }
> >   }
> > };
> > ```
> >
> > ```js
> > var config = {
> >   network: {
> >     requestFilter: function (type, request) {
> >       if (type === KalturaPlayer.core.RequestType.LICENSE) {
> >         return new Promise(function (resolve) {
> >           request.headers['customData'] = CUSTOM_DATA;
> >           resolve(request);
> >         });
> >       }
> >     }
> >   }
> > };
> > ```
> >
> > ##
> >
> > ### config.network.responseFilter
> >
> > ##### Type: `function(type: PKRequestType, request: PKResponseObject): (void | Promise<PKResponseObject>)`
> >
> > ##### Default: `-`
> >
> > ##### Description: Defines a filter for responses. This filter takes the response and modifies it before it is returned. A response filter can run asynchronously by returning a promise.
> >
> > ##
> >
> > > ##### Type: PKRequestType
> > >
> > > ```js
> > > {
> > >   MANIFEST: 0,
> > >   SEGMENT: 1,
> > >   LICENSE: 2
> > > }
> > > ```
> > >
> > > ##
> > >
> > > ##### Type: PKResponseObject
> > >
> > > ```js
> > > {
> > >   url: string,
> > >   originalUrl: string,
> > >   data: ArrayBuffer,
> > >   headers: { [header: string] : string }
> > > }
> > > ```
> > >
> > > ##
> > >
> > > > ##### `PKResponseObject.url`
> > > >
> > > > ##### Type: `string`
> > > >
> > > > ##### Description: The URI which was loaded. Request filters and server redirects can cause this to be different from the original request URIs.
> > > >
> > > > ##
> > > >
> > > > ##### `PKResponseObject.originalUrl`
> > > >
> > > > ##### Type: `string`
> > > >
> > > > ##### Description: The original URI passed to the browser for networking. This is before any redirects, but after request filters are executed.
> > > >
> > > > ##
> > > >
> > > > ##### `PKResponseObject.data`
> > > >
> > > > ##### Type: `ArrayBuffer`
> > > >
> > > > ##### Description: The body of the response.
> > > >
> > > > ##
> > > >
> > > > ##### `PKResponseObject.headers`
> > > >
> > > > ##### Type: `{ [header: string] : string }`
> > > >
> > > > ##### Description: A map of response headers, if supported by the underlying protocol. All keys should be lowercased. For HTTP/HTTPS, may not be available cross-origin.
> >
> > ##
> >
> > #### Examples:
> >
> > ```js
> > var config = {
> >   network: {
> >     responseFilter: function (type, response) {
> >       if (type === KalturaPlayer.core.RequestType.LICENSE) {
> >         response.data = MANIPULATED_DATA;
> >       }
> >     }
> >   }
> > };
> > ```
> >
> > ```js
> > var config = {
> >   network: {
> >     responseFilter: function (type, response) {
> >       if (type === KalturaPlayer.core.RequestType.LICENSE) {
> >         return new Promise(function (resolve) {
> >           response.data = MANIPULATED_DATA;
> >           resolve(response);
> >         });
> >       }
> >     }
> >   }
> > };
> > ```
> >
> > ##
> >
> > ### config.network.maxStaleLevelReloads
> >
> > ##### Type: `number`
> >
> > ##### Default: `20`
> >
> > ##### Description: The maximal amount of times player should request a manifest refresh, when no new segments appear in the refreshed manifest.
>
> ### config.customLabels
>
> ##### Type: `PKCustomLabelsConfigObject`
>
> ```js
> {
>  audio: Function,
>  qualities: Function,
>  captions: Function
> }
> ```
>
> ##### Default: `-`
>
> ##### Description: Specifies callback functions that modify the default label of a track. If this section or one of the keys is not present, the player will use a default label.
>
> This part of the configuration has three possible keys:
>
> - audio (for Audio tracks).
> - qualities (for Video tracks).
> - captions (for Text tracks).
>
> The value of the keys is a reference to a function.
> The function gets a track object as an input and returns a string with the custom label.
> Here is an example to a possible use of this configuration:
>
> ```js
> var config = {
>   customLabels: {
>     qualities: function (videoTrack) {
>       if (videoTrack.height > 500) {
>         return 'High';
>       }
>       return 'Low';
>     }
>   }
> };
> ```
>
> **Important**:
> A Text track has language and label properties. The label is set by the label property in the manifest.
> However, in case the manifest does not have a label property - the language property will be set as the tracks label.

##

> ### config.abr
>
> ##### Type: `PKAbrConfigObject`
>
> ```js
> {
>   enabled: boolean,
>   fpsDroppedFramesInterval: number,
>   fpsDroppedMonitoringThreshold: number,
>   capLevelOnFPSDrop: boolean,
>   capLevelToPlayerSize: boolean,
>   defaultBandwidthEstimate: number,
>   restrictions: {
>     minHeight: number,
>     maxHeight: number,
>     minWidth: number,
>     maxWidth: number,
>     minBitrate: number,
>     maxBitrate: number
>   }
> }
> ```
>
> ##### Default:
>
> ```js
> {
>   enabled: true,
>   fpsDroppedFramesInterval: 5000,
>   fpsDroppedMonitoringThreshold: 0.2,
>   capLevelOnFPSDrop: true,
>   capLevelToPlayerSize: false,
>   restrictions: {
>     minHeight: 0,
>     maxHeight: Infinity,
>     minWidth: 0,
>     maxWidth: Infinity,
>     minBitrate: 0,
>     maxBitrate: Infinity
>   }
> }
> ```
>
> ##### Description: Specifies flags to control / restrict the ABR mechanism.
>
> > ### config.abr.enabled
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `true`
> >
> > ##### Description: Whether the ABR mechanism is enabled.
> >
> > ##
> >
> > ### config.abr.fpsDroppedFramesInterval
> >
> > ##### Type: `number`
> >
> > ##### Default: `5000`
> >
> > ##### Description: Interval time in milliseconds to check if too many frames are dropped
> >
> > ##
> >
> > ### config.abr.fpsDroppedMonitoringThreshold
> >
> > ##### Type: `number`
> >
> > ##### Default: `0.2`
> >
> > ##### Description: The allowed frames dropped threshold.
> >
> > ##
> >
> > ### config.abr.capLevelOnFPSDrop
> >
> > ##### Type: `boolean`
> >
> > ##### Default: true
> >
> > ##### Description: If the player should cap the level when the fps exceeds the threshold.
> >
> > ##
> >
> > ### config.abr.capLevelToPlayerSize
> >
> > ##### Type: `boolean`
> >
> > ##### Default: false
> >
> > ##### Description: If the player should cap the level to the player dimensions (width and height).
> >
> > ##
> >
> > ### config.abr.defaultBandwidthEstimate
> >
> > ##### Type: `number`
> >
> > ##### Description: The default bandwidth estimate to use if there is not enough data, in bit/sec.
> >
> > ##
> >
> > ### config.abr.restrictions
> >
> > ##### Type: `PKABRRestrictionObject`
> >
> > ##### Default: `{}`
> >
> > ##### Description: The restrictions to apply to ABR decisions.
> >
> > ##
> >
> > > ### config.abr.restrictions.minHeight
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `0`
> > >
> > > ##### Description: The minimum height of video track.
> > >
> > > ##
> > >
> > > ### config.abr.restrictions.maxHeight
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `Infinity`
> > >
> > > ##### Description: The maximum height of video track.
> > >
> > > ##
> > >
> > > ### config.abr.restrictions.minWidth
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `0`
> > >
> > > ##### Description: The minimum width of video track.
> > >
> > > ##
> > >
> > > ### config.abr.restrictions.maxWidth
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `Infinity`
> > >
> > > ##### Description: The maximum width of video track.
> > >
> > > ##
> > >
> > > ### config.abr.restrictions.minBitrate
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `0`
> > >
> > > ##### Description: The minimum bitrate in bit/sec.
> > >
> > > ##
> > >
> > > ### config.abr.restrictions.maxBitrate
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `Infinity`
> > >
> > > ##### Description: The maximum bitrate in bit/sec.

##

> ### config.drm
>
> ##### Type: `PKDrmConfigObject`
>
> ```js
> {
>   keySystem: string;
> }
> ```
>
> ##### Description: DRM system configuration
>
> > ### config.drm.keySystem
> >
> > ##### Type: `string`
> >
> > ##### Default: ``
> >
> > ##### Description: A specific DRM key system to use.

##

> ### config.dimensions
>
> ##### Type: `PKDimensionsConfig`
>
> ```js
> {
>   width?: string | number;
>   height?: string | number;
>   ratio?: string;
> }
> ```
>
> ##### Description: Dimensions configuration
>
> > ### config.dimensions.width
> >
> > ##### Type: `string | number`
> >
> > ##### Default: `''`
> >
> > ##### Description: The width of the player.
> >
> > If number was provided, the width will be calculated in pixels (`width: 640` equivalent to `width: '640px'`).
> > If string was provided, any valid css syntax can be passed, for example: `width: '100%'`, `width: 'auto'`, etc.
> >
> > ### config.dimensions.height
> >
> > ##### Type: `string | number`
> >
> > ##### Default: `''`
> >
> > ##### Description: The height of the player.
> >
> > If number was provided, the height will be calculated in pixels (`height: 360` equivalent to `width: '360px'`).
> > If string was provided, any valid css syntax can be passed, for example: `height: '100%'`, `height: 'auto'`, etc.
> >
> > ### config.dimensions.ratio
> >
> > ##### Type: `string`
> >
> > ##### Default: `''`
> >
> > ##### Description: Defines the aspect ratio of the player.
> >
> > The aspect ratio should be written in the form of `'width:height'`, for example: `'4:3'` (classic TV ratio).
> > If one of the `height` or `width` parameters is additionally provided in the configuration, the value of the other parameter not provided will be calculated accordingly to match the aspect ratio. If both were provided, the `height` value would be overridden.

##

Now that we've learned about the different options available in the player configuration, let's see [how does the source selection logic works](./source-selection-logic.md).
