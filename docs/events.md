# Player Events
A string representing an event within the player.

## Overview

The player events are consisted of two event types:

 1. HTML5 events - various events sent by the browser when handling media embedded using the `<video>` element.
 2. Kaltura player custom events - special events indicating changes in the state of the player that does not exist in the html5 video event list and are related to the integral behavior of the player. Such as ads, fullscreen and subtitles events.

Only DOM elements may be true EventTargets. Inside the player, we use fake events targets (fake-event-target.js), and fake events (fake-event) in order to dispatch events not from a DOM element.

## Importing the event list

 ```javascript
 import {HTML5_EVENTS as Html5Events, CUSTOM_EVENTS as CustomEvents} from 'path/to/../event/events'
```



## HTML5 events list
| Event Name | Event String | Description |
|--|--|--|
| ABORT | abort | Fires when the loading of an audio/video is aborted
| CAN_PLAY | canplay | Fires when the browser can start playing the audio/video
|CAN_PLAY_THROUGH | canplaythrough | Fires when the browser can play through the audio/video without stopping for buffering|
|DURATION_CHANGE | durationchange| Fires when the duration of the audio/video is changed|
| EMPTIED|emptied | Fires when the current playlist is empty|
|ENDED | ended| Fires when the current playlist is ended|
| ERROR| error| Fires when an error occurred during the loading of an audio/video|
| LOADED_DATA| loadeddata | Fires when the browser has loaded the current frame of the audio/video
|  LOADED_METADATA| loadedmetadata |Fires when the browser has loaded meta data for the audio/video
|  LOAD_START| loadstart|Fires when the browser starts looking for the audio/video
|  PAUSE| pause |Fires when the audio/video has been paused
|PLAY  | play |Fires when the audio/video has been started or is no longer paused
|  PLAYING| playing |Fires when the audio/video is playing after having been paused or stopped for buffering
| PROGRESS | progress|Fires when the browser is downloading the audio/video
| RATE_CHANGE | ratechange |Fires when the playing speed of the audio/video is changed
| SEEKED | seeked |Fires when the user is finished moving/skipping to a new position in the audio/video
|  SEEKING| seeking |Fires when the user starts moving/skipping to a new position in the audio/video
| STALLED | stalled |Fires when the browser is trying to get media data, but data is not available
| SUSPEND |  suspend| Fires when the browser is intentionally not getting media data
| TIME_UPDATE| timeupdate |Fires when the current playback position has changed
| VOLUME_CHANGE | volumechange |Fires when the volume has been changed
| WAITING |  waiting| Fires when the video stops because it needs to buffer the next frame

## Custom events list
|  Event Name| Event String | Description |
|--|--|--|
| ENTER_FULLSCREEN | enterfullscreen| Fires when the player enters fullscreen |
| EXIT_FULLSCREEN | exitfullscreen | Fires when the player exits fullscreen |
| REQUESTED_ENTER_FULLSCREEN | requestedenterfullscreen | Fires when the player received a request to enter fullscreen |
| REQUESTED_EXIT_FULLSCREEN |  requestedexitfullscreen|Fires when the player received a request to exit fullscreen  |
| AUTOPLAY_FAILED | autoplayfailed | Fires when browser fails to autoplay with sound |
| FALLBACK_TO_MUTED_AUTOPLAY | fallbacktomutedautoplay | Fires when browser fails to autoplay with sound but start muted autoplay instead |
| CHANGE_SOURCE_STARTED | changesourcestarted | Fires when change source flow started |
| CHANGE_SOURCE_ENDED |  changesourceended| Fires when change source flow ended |
| MUTE_CHANGE | mutechange | Fires when the volume has been muted/unmute |
| VIDEO_TRACK_CHANGED | videotrackchanged | Fires when the active video track has been changed |
| AUDIO_TRACK_CHANGED | audiotrackchanged | Fires when the active audio track has been changed |
| TEXT_TRACK_CHANGED | texttrackchanged | Fires when the active text track has been changed |
| TEXT_CUE_CHANGED | textcuechanged |Fires when the active text track cue has changed  |
| TRACKS_CHANGED | trackschanged | Fires when the player tracks have been changed |
| ABR_MODE_CHANGED | abrmodechanged | Fires when the abr mode change from 'auto' to 'manual' or vice versa|
| ABR_MODE_CHANGED | abrmodechanged | Fires when the abr mode change from 'auto' to 'manual' or vice versa |
| PLAYER_STATE_CHANGED | playerstatechanged | Fires when the player state has been changed |
|FIRST_PLAY  |  firstplay| Fires on the first play |
| SOURCE_SELECTED | sourceselected | Fires when the player has selected the source to play |
| TEXT_STYLE_CHANGED | textstylechanged | Fires when the text track style has changed |
| AD_LOADED | adloaded | Fired when ad data is available. |
| AD_STARTED | adstarted |  Fired when the ad starts playing|
|  AD_RESUMED| adresumed | Fired when the ad is resumed |
|  AD_PAUSED| adpaused | Fired when the ad is paused |
| AD_CLICKED | adclicked |  Fired when the ad is clicked|
| AD_SKIPPED | adskipped | Fired when the ad is skipped by the user |
| AD_COMPLETED | adcompleted | Fired when the ad completes playing |
| AD_ERROR | aderror | Fired when an error occurred while the ad was loading or playing |
| ALL_ADS_COMPLETED | alladscompleted | Fired when the ads manager is done playing all the ads |
| AD_BREAK_START | adbreakstart | Fired when content should be paused. This usually happens right before an ad is about to cover the content |
| AD_BREAK_END | adbreakend | Fired when content should be resumed. This usually happens when an ad finishes or collapses |
| AD_FIRST_QUARTILE | adfirstquartile | Fired when the ad playhead crosses first quartile |
| AD_MIDPOINT | admidpoint | Fired when the ad playhead crosses midpoint |
| AD_THIRD_QUARTILE | adthirdquartile | Fired when the ad playhead crosses third quartile |
| USER_CLOSED_AD | userclosedad | Fired when the ad is closed by the user |
| AD_VOLUME_CHANGED | advolumechanged | Fired when the ad volume has changed |
| AD_MUTED | admuted | Fired when the ad volume has been muted |
| AD_PROGRESS | adprogress | Fired on ad time progress |

