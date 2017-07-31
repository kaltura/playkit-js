# Player API

### Configuration
Configuration parameters could be provided to PlaykitJS only via `loadPlayer` factory method:
`loadPlayer(..., config: Object)`

The player holds the following default configuration:
```json
{
  "playback": {
    "playsinline": false,
    "preload": "none",
    "autoplay": false,
    "muted": false,
    "streamPriority": [
      {
        "engine": "html5",
        "format": "hls"
      },
      {
        "engine": "html5",
        "format": "dash"
      },
      {
        "engine": "html5",
        "format": "progressive"
      }
    ],
    "plugins": {
    }
  }
}
```
Which in runtime will be merged with the input of the user.

## Methods
Signature  | Returns
------------- | -------------
```player.configure(config: Object)```  | ```void``` 
```player.destroy()```  | ```void``` 
```player.getView()```  | ```HTMLElement``` 
```player.getTracks(type: string?)```  | ```Array<Track>``` 
```player.getActiveTracks()```  | ```{video: VideoTrack, audio: AudioTrack, text: TextTrack}``` 
```player.selectTrack(track: Track)```  | ```void``` 
```player.hideTextTrack()```  | ```void``` 
```player.enableAdaptiveBitrate()```  | ```void``` 
```player.isAdaptiveBitrateEnabled()```  | ```boolean``` 
```player.ready()```  | ```Promise<any>``` 
```player.load()```  | ```void``` 
```player.play()```  | ```void``` 
```player.pause()```  | ```void``` 
```player.getVideoElement()```  | ```HTMLVideoElement``` 
```player.skipAd()```  | ```void``` 
```player.playAdNow(adTagUrl: string)```  | ```void``` 

## Getters
Signature  | Returns
------------- | -------------
```player.src```  | ```string``` 
```player.muted```  | ```boolean``` 
```player.playsinline```  | ```boolean``` 
```player.seeking```  | ```boolean``` 
```player.paused```  | ```boolean``` 
```player.playbackRate```  | ```number``` 
```player.volume```  | ```number``` 
```player.duration```  | ```number``` 
```player.config```  | ```Object``` 
```player.env```  | ```Object``` 

## Setters
Signature  | Parameters
------------- | -------------
```player.sessionId```  | ```sessionId (string)``` 
```player.currentTime```  | ```to (number)``` 
```player.volume```  | ```vol (number)``` 
```player.playbackRate```  | ```rate (number)``` 
```player.playsinline```  | ```playsinline (boolean)``` 
```player.muted```  | ```mute (boolean)``` 

## Events
An event enum can be access in the following way:
```js
player.Event.EVENT_NAME
```
An event payload can be access via the event object:
```js
player.addEventListener(player.Event.EVENT_NAME,(event) => {
  console.log('this is the event payload',event.payload);
});
```
The player dispatching the following events:

#### Playback Events
Enum  | Payload
------------- | -------------
```ABORT```| -
```CAN_PLAY```| -
```CAN_PLAY_THROUGH```| -
```DURATION_CHANGE```| -
```EMPTIED```| -
```ENDED```| -
```ERROR```| -
```LOADED_DATA```| -
```LOADED_METADATA```| -
```LOAD_START```| -
```PAUSE```| -
```PLAY```| -
```PLAYING```| -
```PROGRESS```| -
```RATE_CHANGE```| -
```SEEKED```| -
```SEEKING```| -
```STALLED```| -
```SUSPEND```| -
```TIME_UPDATE```| -
```VOLUME_CHANGE```| -
```WAITING```| -

#### Tracks Events
Enum  | Payload
------------- | -------------
```VIDEO_TRACK_CHANGED```|```{selectedVideoTrack: VideoTrack}```
```AUDIO_TRACK_CHANGED```|```{selectedAudioTrack: AudioTrack}```
```TEXT_TRACK_CHANGED```|```{selectedTextTrack: TextTrack}```
```TRACKS_CHANGED```|```{tracks: Array<Track>}```
```ABR_MODE_CHANGED```|```{mode: 'auto'/'manual'}```

#### Ads Events
Enum  | Payload
------------- | -------------
```AD_LOADED```|```{ad: Object, extraAdData: Object}```
```AD_STARTED```| -
```AD_RESUMED```| -
```AD_PAUSED```| -
```AD_CLICKED```| -
```AD_SKIPPED```| -
```AD_COMPLETED```| -
```AD_ERROR```| ```{error: {code: number, message: string}, fatal: boolean}```
```ALL_ADS_COMPLETED```| -
```AD_BREAK_START```| -
```AD_BREAK_END```| -
```AD_FIRST_QUARTILE```|
```AD_MIDPOINT```| -
```AD_THIRD_QUARTILE```| -
```USER_CLOSED_AD```| -
```AD_VOLUME_CHANGED```| -
```AD_MUTED```| -
```AD_PROGRESS```|```{adProgress: {currentTime: number, duration: number}}```

#### More Events
Enum  | Payload
------------- | -------------
```PLAYER_STATE_CHANGED```|```{oldState: State, newState: State}```
```FIRST_PLAY```| - 
```SOURCE_SELECTED```|```{selectedSource: Array<Source>}```

## States
During playback the state of the player changes.
A state enum can be access in the following way:
```js
player.State.STATE_NAME
```

Possible states: 

Enum  | -
------------- | -------------
```IDLE```| -
```LOADING```| -
```PLAYING```| -
```PAUSED```| -
```BUFFERING```| -

_Example of use:_
```js
player.addEventListener(player.Event.PLAYER_STATE_CHANGED, (event) => {
  if (event.payload.oldState.type === player.State.PLAYING && 
  event.payload.newState.type === player.State.BUFFERING){
    console.log('Underflow');
  }
});
``
