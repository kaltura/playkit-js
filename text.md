# Tracks

Kaltura player supports three type of tracks
* Video tracks - enable selecting different representation of a video
* Audio tracks - enable selecting alternative audio for a video
* Text tracks - enable selecting different caption or subtitle text for a video

All track types are represented in player UI and may be selected by user.
In addition tracks can also be set via API.
```javascript
// create a player
var player = KalturaPlayer.setup("player-placeholder", config);

var textplayer.getTracks(player.Track.TEXT);
player.selectTrack(track)
``` 
