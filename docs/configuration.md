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
  logLevel: string,
  playback: PKPlaybackConfigObject,
  sources: PKSourcesConfigObject,
  session: PKSessionConfigObject,
  plugins: PKPluginsConfigObject,
  customLabels: PKCustomLabelsConfigObject,
  abr: PKAbrConfigObject,
  drm: PKDrmConfigObject
}
```

#### Default Configuration Values

```js
var config = {
  logLevel: 'ERROR',
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
    allowMutedAutoPlay: true,
    loop: false,
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
    fpsDroppedFramesInterval: 5000,
    fpsDroppedMonitoringThreshold: 0.2,
    capLevelOnFPSDrop: true
  },
  drm: {
    keySystem: ''
  }
};
```

##

> ### config.logLevel
>
> ##### Type: `string`
>
> ##### Default: `"ERROR"`
>
> ##### Description: Defines the player log level.
>
> Possible values: `"DEBUG", "INFO", "TIME", "WARN", "ERROR", "OFF"`

##

> ### config.sources
>
> ##### Type: `PKSourcesConfig`
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
>  captions?: Array<PKExternalCaptionObject>
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
> > ### config.sources.hls
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
> > var config = {
> >   sources: {
> >     hls: [
> >       {
> >         mimetype: 'application/x-mpegurl',
> >         url: '//PATH/TO/MANIFEST.m3u8'
> >       }
> >     ]
> >   }
> > };
> > ```
> >
> > ##
> >
> > ### config.sources.dash
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
> > var config = {
> >   sources: {
> >     dash: [
> >       {
> >         mimetype: 'application/x-mpegurl',
> >         url: '//PATH/TO/MANIFEST.mpd'
> >       }
> >     ]
> >   }
> > };
> > ```
> >
> > ##
> >
> > ### config.sources.progressive
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
> > var config = {
> >   sources: {
> >     progressive: [
> >       {
> >         mimetype: 'video/mp4',
> >         url: '//PATH/TO/FILE.mp4'
> >       }
> >     ]
> >   }
> > };
> > ```
> >
> > ##
> >
> > ### config.sources.options
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
> > > ### config.sources.options.forceRedirectExternalStreams
> > >
> > > ##### Type: `boolean`
> > >
> > > ##### Default: `false`
> > >
> > > ##### Description: Enable workaround for some user-agents that don't allow redirects after a successful CORS-preflight request.
> > >
> > > ##
> > >
> > > ### config.sources.options.redirectExternalStreamsHandler
> > >
> > > ##### Type: `Function`
> > >
> > > ##### Default: `-`
> > >
> > > ##### Description: The handler function which redirects the stream.
> > >
> > > ##
> > >
> > > ### config.sources.options.redirectExternalStreamsTimeout
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `-`
> > >
> > > ##### Description: The timeout for the redirect operation.
> >
> > ##
> >
> > ### config.sources.type
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
> > ### config.sources.dvr
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
> > ### config.sources.metadata
> >
> > ##### Type: `PKMetadataConfigObject`
> >
> > ##### Default: `{}`
> >
> > ##### Description: Defines the metadata of the media.
> >
> > ##
> >
> > > ### config.sources.metadata.name
> > >
> > > ##### Type: `string`
> > >
> > > ##### Default: `-`
> > >
> > > ##### Description: The name of the media.
> > >
> > > ##
> > >
> > > ### config.sources.metadata.description
> > >
> > > ##### Type: `string`
> > >
> > > ##### Default: `-`
> > >
> > > ##### Description: The description of the media.
> >
> > ##
> >
> > ### config.sources.id
> >
> > ##### Type: `string`
> >
> > ##### Default: `-`
> >
> > ##### Description: The id of the media.
> >
> > ##
> >
> > ### config.sources.poster
> >
> > ##### Type: `string`
> >
> > ##### Default: `-`
> >
> > ##### Description: The poster url of the media.
> >
> > ##
> >
> > ### config.sources.duration
> >
> > ##### Type: `number`
> >
> > ##### Default: `-`
> >
> > ##### Description: The duration of the media.
> >
> > ##
> >
> > ### config.sources.captions
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
> > var config = {
> >   sources: {
> >     captions: [
> >       {
> >         url: 'www.path.to/your/captions/file',
> >         type: 'vtt',
> >         default: true,
> >         language: 'en',
> >         label: 'English'
> >       }
> >     ]
> >   }
> > };
> > ```

##

> ### config.plugins
>
> ##### Type: `PKPluginsObject`
>
> `{ [plugin: string]: Object }`
>
> ##### Default: `{}`
>
> ##### Description: Defines the active plugins.
>
> This should map the plugin to its config object.
>
> #### Example:
>
> ```js
> var config = {
>   plugins: {
>     myAwesomePlugin1: {},
>     myAwesomePlugin2: {}
>   }
> };
> ```
>
> ##
>
> > ### config.plugins.PLUGIN_NAME.disable
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ##### Description: Allow to disable a specific plugin.
> >
> > #### Expample:
> >
> > ```js
> > var config = {
> >   plugins: {
> >     myAwesomePlugin: {
> >       disable: true
> >     }
> >   }
> > };
> > ```

##

> ### config.playback
>
> ##### Type: `PKPlaybackConfig`
>
> ```js
> {
>  audioLanguage: string,
>  textLanguage: string,
>  useNativeTextTrack: boolean,
>  enableCEA708Captions: boolean,
>  captionsTextTrack1Label: string,
>  captionsTextTrack1LanguageCode: string,
>  captionsTextTrack2Label: string,
>  captionsTextTrack2LanguageCode: string,
>  volume: number,
>  startTime: number,
>  playsinline: boolean,
>  crossOrigin: string,
>  preload: string,
>  autoplay: boolean,
>  allowMutedAutoPlay: boolean,
>  loop: boolean,
>  muted: boolean,
>  pictureInPicture: boolean,
>  options: PKPlaybackOptionsObject,
>  streamPriority: Array<PKStreamPriorityObject>,
>  preferNative: PKPreferNativeConfigObject,
>  inBrowserFullscreen: boolean
> }
> ```
>
> ##### Default:
>
> ```js
> {
>  audioLanguage: "",
>  textLanguage: "",
>  useNativeTextTrack: false,
>  enableCEA708Captions: false,
>  captionsTextTrack1Label: "English",
>  captionsTextTrack1LanguageCode: "en",
>  captionsTextTrack2Label: "Spanish",
>  captionsTextTrack2LanguageCode: "es",
>  volume: 1,
>  startTime: -1,
>  playsinline: true,
>  preload: "none",
>  autoplay: false,
>  allowMutedAutoPlay: true,
>  loop: false,
>  muted: false,
>  pictureInPicture: true,
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
> > ### config.playback.useNativeTextTrack
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
> > ### config.playback.enableCEA708Captions
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ##### Description: Whether or not to enable CEA-708 captions.
>
> ##
>
> > ### config.playback.captionsTextTrack1Label
> >
> > ##### Type: `string`
> >
> > ##### Default: `English`
> >
> > ##### Description: Label for the CEA-708 captions track 1.
>
> ##
>
> > ### config.playback.captionsTextTrack1LanguageCode
> >
> > ##### Type: `string`
> >
> > ##### Default: `en`
> >
> > ##### Description: RFC 3066 language code for the CEA-708 captions track 1.
>
> ##
>
> > ### config.playback.captionsTextTrack2Label
> >
> > ##### Type: `string`
> >
> > ##### Default: `Spanish`
> >
> > ##### Description: Label for the CEA-708 captions track 2.
>
> ##
>
> > ### config.playback.captionsTextTrack2LanguageCode
> >
> > ##### Type: `string`
> >
> > ##### Default: `es`
> >
> > ##### Description: RFC 3066 language code for the CEA-708 captions track 2.
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
> > ### config.playback.startTime
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
> > ### config.playback.loop
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ##### Description: Indicates whether the video should play in loop.
> >
> > This is a Boolean attribute that indicates the default setting of the loop playback option. If set, the player will restart playback upon completion. The attribute's default value is false, which means that the video will pause when the video is finished playing.
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
> > ### config.playback.playbackRate
> >
> > ##### Type: `Array<number>`
> >
> > ##### Description: Sets the rate at which the media is being played back.
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
> > - For `hls` configuration, see the [hls.js](https://github.com/video-dev/hls.js/blob/master/doc/API.md#fine-tuning) documentation.
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
> > > ##### Description: Gives the ability to choose an in-browser fullscreen experience. Useful on iOS devices which will replace the native fullscreen of the AV player.
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
>
> ##
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
>     qualities: function(videoTrack) {
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
>  fpsDroppedMonitoringThreshold: number,
>  fpsDroppedFramesInterval: number,
>  capLevelOnFPSDrop: boolean
> }
> ```
>
> ##### Default:
>
> ```js
> {
>  fpsDroppedMonitoringThreshold: 0.2,
>  fpsDroppedFramesInterval: 5000,
>  capLevelOnFPSDrop: true
> }
> ```
>
> ##### Description: Specifies flags to control / restrict the abr mechanism.
>
> > ### config.abr.fpsDroppedFramesInterval
> >
> > ##### Type: `number`
> >
> > ##### Default: `5000`
> >
> > ##### Description: Interval time in milliseconds to check if too many frames are dropped
>
> ##
>
> > ### config.abr.fpsDroppedMonitoringThreshold
> >
> > ##### Type: `number`
> >
> > ##### Default: `0.2`
> >
> > ##### Description: The allowed frames dropped threshold.
>
> ##
>
> > ### config.abr.capLevelOnFPSDrop
> >
> > ##### Type: `boolean`
> >
> > ##### Default: true
> >
> > ##### Description: If the player should cap the level when the fps exceeds the threshold.
>
> ##

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
>
> ##

##

Now that we've learned about the different options available in the player configuration, let's see [how does the source selection logic works](./source-selection-logic.md).
