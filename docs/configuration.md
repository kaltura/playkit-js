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
  type: string,
  playback: PKPlaybackConfigObject,
  sources: PKSourcesConfigObject,
  metadata: PKMetadataConfigObject,
  plugins: PKPluginsConfigObject
}
```

#### Default Configuration Values
```js
var config = {
    logLevel: "ERROR",
    type: "Unknown",
    sources: {
        hls: [],
        dash: [],
        progressive: [],
        options: {}
    },
    plugins: {},
    metadata: {
        description: "",
        poster: ""
    },
    playback: {
        audioLanguage: "",
        textLanguage: "",
        useNativeTextTrack: false,
        volume: 1,
        startTime: 0,
        playsinline: true,
        preload: "none",
        autoplay: false,
        allowMutedAutoPlay: true,
        muted: false,
        options: {
            html5: {
                hls: {},
                dash: {}
            }
        },
        preferNative: {
            hls: false,
            dash: false
        },
        streamPriority: [
            {
                engine: "html5",
                format: "hls"
            },
            {
                engine: "html5",
                format: "dash"
            },
            {
                engine: "html5",
                format: "progressive"
            }
        ]
    }
};
```
## 
>### config.logLevel
>##### Type: `string`
>##### Default: `"ERROR"`
>##### Description: Defines the player log level.
>Possible values: `"DEBUG", "INFO", "TIME", "WARN", "ERROR", "OFF"`
## 
>### config.type
>##### Type: `string`
>##### Default: `"Unknown"`
>##### Description: Defines the type of media being used.
>Possible values: `"Vod", "Live", "Image", "Audio", "Unknown"`
## 
>### config.sources
>##### Type: `PKSourcesConfig`
>```js
>{
>  dash: Array<PKMediaSourceObject>
>  hls: Array<PKMediaSourceObject>
>  progressive: Array<PKMediaSourceObject>,
>  options: PKMediaSourceOptionsObject
>}
>```
>>##### Type `PKMediaSourceObject`
>>```js
>>{
>>  mimetype: string,
>>  url: string,
>>  id: string, // optional
>>  bandwidth: number, // optional
>>  width: number, // optional
>>  height: number, // optional
>>  drmData: Array<PKDrmDataObject> // optional
>>}
>>```
>>##### Type `PKDrmDataObject`
>>```js
>>{
>>  licenseUrl: string,
>>  scheme: string,
>>  certificate: string // optional
>>}
>>```
>>##### Type `PKMediaSourceOptionsObject`
>>```js
>>{
>>  forceRedirectExternalStreams: boolean,
>>  redirectExternalStreamsHandler: ?Function
>>}
>>```
>##### Default:
>```js
>{
>  hls: [],
>  dash: [],
>  progressive: [],
>  options: {}
>}
>```
>##### Description: Defines related sources configurations.
>##
>>### config.sources.hls
>>##### Type: `Array<PKMediaSourceObject>`  
>>##### Default: `[]`  
>>##### Description: Defines the optional hls sources for playback.
>>#### Example:
>>```js
>>var config = {
>>  sources: {
>>    hls: [
>>      {
>>        mimetype: "application/x-mpegurl",
>>        url: "//PATH/TO/MANIFEST.m3u8"
>>      }
>>    ]
>>  }
>>};
>>```
>>##
>>### config.sources.dash
>>##### Type: `Array<PKMediaSourceObject>`  
>>##### Default: `[]`  
>>##### Description: Defines the optional dash sources for playback.
>>#### Example:
>>```js
>>var config = {
>>  sources: {
>>    dash: [
>>      {
>>        mimetype: "application/x-mpegurl",
>>        url: "//PATH/TO/MANIFEST.mpd"
>>      }
>>    ]
>>  }
>>};
>>```
>>##
>>### config.sources.progressive
>>##### Type: `Array<PKMediaSourceObject>`  
>>##### Default: `[]`  
>>##### Description: Defines the optional progressive sources for playback.
>>#### Example:
>>```js
>>var config = {
>>  sources: {
>>    progressive: [
>>      {
>>        mimetype: "application/x-mpegurl",
>>        url: "//PATH/TO/FILE.mp4"
>>      }
>>    ]
>>  }
>>};
>>```
>>##
>>### config.sources.options
>>##### Type: `PKMediaSourceOptionsObject`  
>>##### Default: `{}`  
>>##### Description: Defines the sources options.
>>##
>>>### config.sources.options.forceRedirectExternalStreams
>>>##### Type: `boolean`  
>>>##### Default: `-`  
>>>##### Description: Whether to force a source redirect for an external streams.
>>>##
>>>### config.sources.options.redirectExternalStreamsHandler
>>>##### Type: `Function`  
>>>##### Default: `-`  
>>>##### Description: The handler function which redirects the stream.
## 
>### config.plugins
>##### Type: `PKPluginsObject`
> `{ [plugin: string]: Object }`
>##### Default: `{}`
>##### Description: Defines the active plugins.
>This should map the plugin to its config object.
>#### Example:
>```js
>var config = {
>    plugins: {
>        myAwesomePlugin1: {},
>        myAwesomePlugin2: {}
>    }
>};
>```
## 
>### config.metadata
>##### Type: `PKMetadataConfigObject`
>```js
>{
>    poster: string,
>    description: string
>}
>```
>##### Default: 
>```js
>{
>    poster: "",
>    description: ""
>}
>```
>##### Description: Defines the media metadata.
>The poster field refers to the poster URL, which the player displays before playback begins.
>#### Example:
>```js
>var config = {
>    metadata: {
>       description: "MPEG Dash with MultiAudio New Transcoding",
>       poster: "http://cdntesting.qa.mkaltura.com/p/1091/sp/109100/thumbnail/entry_id/0_wifqaipd/version/100042"
>    }
>};
>```
>Note: This object can include additional custom fields, which you can implement depending on your player needs.
## 
>### config.playback
>##### Type: `PKPlaybackConfig`
>```js
>{
>  audioLanguage: string,
>  textLanguage: string,
>  useNativeTextTrack: boolean,
>  volume: number,
>  startTime: number,
>  playsinline: boolean,
>  preload: string,
>  autoplay: boolean,
>  allowMutedAutoPlay: boolean,
>  muted: boolean,
>  options: PKPlaybackOptionsObject,
>  streamPriority: Array<PKStreamPriorityObject>,
>  preferNative: PKPreferNativeConfigObject
>}
>```
>##### Default: 
>```js
>{
>  audioLanguage: "",
>  textLanguage: "",
>  useNativeTextTrack: false,
>  volume: 1,
>  startTime: 0,
>  playsinline: true,
>  preload: "none",
>  autoplay: false,
>  allowMutedAutoPlay: true,
>  muted: false,
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
>}
>```
>##### Description: Defines the playback options.
>>### config.playback.audioLanguage
>>##### Type: `string`
>>##### Default: `""`
>>##### Description: Sets the default audio track language. 
>>If an audio track with the defined language exists, this audio track will be selected as the initial audio track.
>> #### Example:
>>```js
>>var config = {
>>    playback: {
>>        audioLanguage: "eng" // Start playback with english audio
>>    }
>>};
>>```
>## 
>>### config.playback.textLanguage
>>##### Type: `string || "auto"`
>>##### Default: `""`
>>##### Description: Defines the default captions language
>>If captions for the defined language are available, this text track will be selected as the initial text track.
>> #### Example:
>>```js
>>var config = {
>>    playback: {
>>        textLanguage: "heb" // Start playback with hebrew captions
>>    }
>>};
>>```
>> If the value `"auto"` is set, i.e:
>>```js
>>var config = {
>>    playback: {
>>        textLanguage: "auto"
>>    }
>>};
>>```
>> The player will choose the default captions language using the following logic:
>> 1. **Locale language** - If there are captions in the user's system language then this language will be selected.
>> 2. **Manifest default language** - If a default language is specified in the manifest file then this language will be selected.
>> 3. **First language in manifest** - The first language specified in the manifest file will be selected.
>> 4. If none of the above conditions have taken place, do not display captions.
>## 
>>### config.playback.useNativeTextTrack
>>##### Type: `boolean`
>>##### Default: `false`
>>##### Description: Determines whether to use native browser text tracks or not.
>> If set to True, the native browser captions will be displayed. 
>## 
>>### config.playback.volume
>>##### Type: `number`
>>##### Default: `1`
>>##### Description: Defines the initial volume value. 
>>The value must be in the range of 0-1.
>> #### Example:
>>```js
>>var config = {
>>    playback: {
>>        volume: 0.5
>>    }
>>};
>>```
>## 
>>### config.playback.startTime
>>##### Type: `number`
>>##### Default: `0`
>>##### Description: Defines the start time of the video in seconds. 
>## 
>>### config.playback.playsinline
>>##### Type: `boolean`
>>##### Default: `true`
>>##### Description: Description: A Boolean attribute that indicates whether the video should be played "inline", that is, within the element's playback area.
>>This is especially relevant when playing videos on iPhone devices, where - if the value is set to false - the video will be played using the AV Player (iOS native video player).
>## 
>>### config.playback.preload
>>##### Type: `string`
>>##### Default: `"none"`
>>##### Description: Indicates whether the video should be preloaded or not.
>>Possible values:
>> - `"none"`: indicates that the video should not be preloaded.
>> - `"auto"`: indicates that the whole video file could be downloaded, even if the user is not expected to use it.
>##
>>### config.playback.autoplay/allowMutedAutoPlay
>>for `autoplay` & `allowMutedAutoPlay` options read [here](autoplay.md).
>## 
>>### config.playback.muted
>>##### Type: `boolean`
>>##### Default: `false`
>>##### Description: Indicates whether the video should be muted or not.
>>This is a Boolean attribute that indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. The attribute's default value is false, which means that the audio will be played automatically when the video is played.
>##
>>### config.playback.options
>>##### Type: `PKPlaybackOptionsObject`
>>```js
>>{
>>  html5: {
>>    hls: Object,
>>    dash: Object
>>  }
>>}
>>```
>>##### Default: 
>>```js
>>{
>>  html5: {
>>    hls: {},
>>    dash: {}
>>  }
>>}
>>```
>>##### Description: Defines the media source adapters configurations.
>>* For `hls` configuration, see the [hls.js](https://github.com/video-dev/hls.js/blob/master/doc/API.md#fine-tuning) documentation.
>>* For `dash` configuration, see the [shaka-player](https://shaka-player-demo.appspot.com/docs/api/tutorial-config.html) documentation.
>## 
>>### config.playback.preferNative
>>##### Type: `PKPreferNativeConfig`
>>```js
>>{
>>  hls: boolean,
>>  dash: boolean
>>}
>>```
>>##### Default: 
>>```js
>>{
>>  hls: false,
>>  dash: false
>>}
>>```
>>##### Description: Indicates whether to prefer native browser playback (if supported) with media source extensions.
>>If one of the values is set to True and the player chooses to play the truthly media source extension, the player will try to play it natively if supported by the browser. 
>> #### Example:
>>Lets assume the following configuration:
>>```js
>>var config = {
>>  playback: {
>>    preferNative:  {
>>      hls: true
>>    }
>>  }
>>};
>>```
>> If the player is running on a _Safari_ browser, the player will use the native hls playback managed by the _Safari_ browser. However, if running on a browser in which hls playback is not supported natively, for example, _Chrome_, the player will play hls using the `hls.js` library.
>## 
>>### config.playback.streamPriority
>>##### Type: `Array<PKStreamPriorityObject`
>>>##### Type `PKStreamPriorityObject`
>>>```js
>>>{
>>>   engine: string,
>>>   format: string
>>>}
>>>```
>>##### Default: 
>>```js
>>[
>>   {
>>     engine: "html5",
>>     format: "hls"
>>   },
>>   {
>>     engine: "html5",
>>     format: "dash"
>>   },
>>   {
>>     engine: "html5",
>>     format: "progressive"
>>    }
>>]
>>```
>>##### Description: Specifies the list of engine and stream format pairs of the player by ascending order.
>>As soon as the player receives the sources, it will review the configuration array and try to play the source with the matched stream format according to the matched engine. 
>>For example, in the priority configuration above, the player will try to play the hls stream using an html5 engine first. If an hls stream isn't received, the player will continue to play the dash stream using an html5 engine. If a dash stream isn't received, the player will then will continue to play the progressive stream using an html5 engine.


Now that we've learned about the different options available in the player configuration, let's see [how does the source selection logic works](./source-selection-logic.md).
