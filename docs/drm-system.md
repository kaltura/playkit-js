## DRM System Selection

Once the player gets an encrypted source to play it has to select the DRM system to run with.
<br>The following article explains the default selection, and how the user can select one by configuration.

###Default Selection
By default the player selects the DRM system according the source type and the browser capabilities, as follows:
| dash on Chrome | dash on Firefox | dash on Edge | dash on IE | hls on Safari |
| -------------- | --------------- | ------------ | ---------- | ------------- |
| WIDEVINE | WIDEVINE | PLAYREADY | PLAYREADY | FAIRPLAY |

###Configuration
Sometimes the user may want to force the player to select a specific DRM system. Usually to support DRM on browser not in the table above, or to prioritize between some of supported DRM systems.
<br>To get it need to use the DRM configuration. For example:

```ecmascript 6
var config = {
  drm: {
    keySystem: playkit.core.DrmScheme.PLAYREADY // "com.microsoft.playready"
  },
  sources: {...}
};
var player = playkit.core.loadPlayer(config);
```

**Important**:
The player selects the DRM system **after** the [source type selection](./source-selection-logic.md). therefore, the DRM settings may not be applied when the source type cannot be played with the configured DRM system. for example:
| Browser | Source Type | Default DRM System | Configured DRM System | Selected (Why?) |
| ------- | ----------- | ------------------ | --------------------- | ----------------------------------- |
| Chrome | dash | WIDEVINE | PLAYREADY | PLAYREADY (dash+PLAYREADY is valid) |
| Chrome | dash | WIDEVINE | FAIRPLAY | WIDEVINE (dash+FAIRPLAY is invalid) |
