## Configuration
Configuration parameters could be provided to Playkit JS upon instantiation of the player instance.
```js
var config = {
  // Configuration here
};
var player = playkit.core.loadPlayer(config);
```

#### Configuration Structure
```json
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
        progressive: []
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
>##### Description: Defined the player log level.
>Possible values: `"DEBUG", "INFO", "TIME", "WARN", "ERROR", "OFF"`
## 
>### config.type
>##### Type: `string`
>##### Default: `"Unknown"`
>##### Description: Defined the media type.
>Possible values: `"Vod", "Live", "Image", "Audio", "Unknown"`
## 
>### config.sources
>##### Type: `PKSourcesConfig`
>```json
>{
>  dash: Array<PKMediaSourceObject>
>  hls: Array<PKMediaSourceObject>
>  progressive: Array<PKMediaSourceObject>
>}
>```
>>##### Type `PKMediaSourceObject`
>>```json
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
>>```json
>>{
>>  licenseUrl: string,
>>  scheme: string,
>>  certificate: string // optional
>>}
>>```
>##### Default:
>```json
>{
>  hls: [],
>  dash: [],
>  progressive: []
>}
>```
>##### Description: Defined the optional sources for playback.
>Should map media source extension type to its array of sources.
>#### Example:
>```js
>var config = {
>    sources: {
>        hls: [
>            {
>                mimetype: "application/x-mpegurl",
>                url: "https://wowzaec2demo.streamlock.net/vod-multitrack/_definst_/smil:ElephantsDream/ElephantsDream.smil/playlist.m3u8"
>            }
>        ],
>        dash: [
>            {
>                mimetype: "application/dash+xml",
>                url: "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd"
>            }
>        ],
>        progressive: [
>            {
>                mimetype: "video/mp4",
>                url: "https://www.w3schools.com/html/mov_bbb.mp4"
>            }
>        ]
>    }
>};
>```
## 
>### config.plugins
>##### Type: `PKPluginsObject`
> `{ [plugin: string]: Object }`
>##### Default: `{}`
>##### Description: Defined the active plugins.
>Should map plugin name to its config object.
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
>```json
>{
>    poster: string,
>    description: string
>}
>```
>##### Default: 
>```json
>{
>    poster: "",
>    description: ""
>}
>```
>##### Description: Defined the media metadata.
>The poster field referring  to the poster url which the player will display before playback starts.
>#### Example:
>```js
>var config = {
>    metadata: {
>       description: "MPEG Dash with MultiAudio New Transcoding",
>       poster: "http://cdntesting.qa.mkaltura.com/p/1091/sp/109100/thumbnail/entry_id/0_wifqaipd/version/100042"
>    }
>};
>```
>***Notice**: This object can include more custom fields which you can use depending on your needs*
## 
>### config.playback
>##### Type: `PKPlaybackConfig`
>```json
>{
>  audioLanguage: string,
>  textLanguage: string,
>  useNativeTextTrack: boolean,
>  volume: number,
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
>```json
>{
>  audioLanguage: "",
>  textLanguage: "",
>  useNativeTextTrack: false,
>  volume: 1,
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
>##### Description: Defined the playback options.
>>### config.playback.audioLanguage
>>##### Type: `string`
>>##### Default: `""`
>>##### Description: Defined default audio track language.
>>If audio track with the defined language is exists, this audio track will be selected as the initial audio track.
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
>>##### Description: Defined default captions language.
>>If captions with the defined language is exists, this text track will be selected as the initial text track.
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
>> The player will choose default captions language by the following logic:
>> 1. **Locale language** - If there are captions in the user's system language then this language will be selected.
>> 2. **Manifest default language** - If a default language is specified in the manifest file then this language will be selected.
>> 3. **First language in manifest** - The first language specified in the manifest file will be selected.
>> 4. If none of the above conditions have taken place, do not display captions.
>## 
>>### config.playback.useNativeTextTrack
>>##### Type: `boolean`
>>##### Default: `false`
>>##### Description: Whether to use native browser text tracks.
>>If sets to true, native browser captions will be displayed. 
>## 
>>### config.playback.volume
>>##### Type: `number`
>>##### Default: `1`
>>##### Description: Defined the initial volume value.
>>Value must be in the range of 0-1.
>> #### Example:
>>```js
>>var config = {
>>    playback: {
>>        volume: 0.5
>>    }
>>};
>>```
>## 
>>### config.playback.playsinline
>>##### Type: `boolean`
>>##### Default: `true`
>>##### Description: A Boolean attribute which indicates that the video is to be played "inline", that is within the element's playback area.
>>Especially relevant for playing on iPhone devices, where if the value is set to false, the video will be played using the AV Player (iOS native video player).
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
>>A Boolean attribute which indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning that the audio will be played when the video is played.
>##
>>### config.playback.options
>>##### Type: `PKPlaybackOptionsObject`
>>```json
>>{
>>  html5: {
>>    hls: Object,
>>    dash: Object
>>  }
>>}
>>```
>>##### Default: 
>>```json
>>{
>>  html5: {
>>    hls: {},
>>    dash: {}
>>  }
>>}
>>```
>>##### Description: Defined the media source adapters configurations.
>>For `hls` configuration, see [hls.js](https://github.com/video-dev/hls.js/blob/master/doc/API.md#fine-tuning) documentation.
>For `dash` configuration, see [shaka-player](https://shaka-player-demo.appspot.com/docs/api/tutorial-config.html) documentation.
>## 
>>### config.playback.preferNative
>>##### Type: `PKPreferNativeConfig`
>>```json
>>{
>>  hls: boolean,
>>  dash: boolean
>>}
>>```
>>##### Default: 
>>```json
>>{
>>  hls: false,
>>  dash: false
>>}
>>```
>>##### Description: Whether to prefer native browser playback (if supported) with media source extensions.
>>If one of the values sets to true and the player chooses to play the truthly media source extension, the player will try to play it natively if supported by the browser. 
>> #### Example:
>>Lets assume the following configuration:
>>```js
>>var config = {
>>	playback: {
>>		preferNative:  {
>>			hls: true
>>		}
>>	}
>>};
>>```
>> In case we're running in _Safari_ browser, the player will play native hls playback managed by the _Safari_ browser. But in case we're running in browser which hls playback is not supported natively, _Chrome_ for instance, the player will play hls using the `hls.js` library.
>## 
>>### config.playback.streamPriority
>>##### Type: `Array<PKStreamPriorityObject`
>>>##### Type `PKStreamPriorityObject`
>>>```json
>>>{
>>>   engine: string,
>>>   format: string
>>>}
>>>```
>>##### Default: 
>>```json
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
>>##### Description: Specifies the {engine, stream format} tuple priority of the player by ascending order.
>>As soon as the player receives his sources, he will go over this array, and will try to play a source with a matched stream format from a matched engine. 
>>For example, for the above priority configuration, the player will try to play hls stream using an html5 engine first. If an hls stream isn't received, he will continue to play dash stream using an html5 engine. If a dash stream isn't received, he will continue to play progressive stream using an html5 engine.

### The connection between `sources`, `preferNative` & `streamPriority`
After we have gained knowledge of the different options available in the player configuration, let's see the results for what format will be played for the following configuration of the player:
```js
var config = {
    sources: {
        hls: [
            {
                mimetype: "application/x-mpegurl",
                url: "https://wowzaec2demo.streamlock.net/vod-multitrack/_definst_/smil:ElephantsDream/ElephantsDream.smil/playlist.m3u8"
            }
        ]
    },
    playback: {
        preferNative: {
            hls: true,
            dash: false
        },
        streamPriority: [
            {
                engine: "html5",
                format: "dash"
            },
            {
                engine: "html5",
                format: "hls"
            }
        ]
    }
};
```

First, the player looks on the `streamPriority` array and see that *dash* stream is top priority. Second, he will check if he got any *dash* sources within the `sources` config object. Because no *dash* sources found there, the player will move to the next priority from the `streamPriority` array - *hls*. After checking again the sources config object, the player will choose to play *hls*. But is he play native *hls* or not? this depends on the `preferNative` value for *hls*. Because it sets to `true`, the player knows that if the browser supports native *hls* playback, it will be played natively.

So what will be played in each browser?

| Chrome | Safari | Firefox | Edge|
|----------------- | ----------------- | ------ |-----
| _hls_ with `hls.js` | native _hls_ |_hls_ with `hls.js`|native _hls_
