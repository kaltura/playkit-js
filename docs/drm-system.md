## DRM System Selection

Once the player gets an encrypted source to play, it will need to select a DRM system with which to run the source.  
The following article explains the default selection, and how an application may force the selection using a configuration.

### Default Selection

By default, the player selects the DRM system according the source type and the browser capabilities, as follows:

| dash on Chrome | dash on Firefox | dash on Edge | dash on IE | hls on Safari |
| -------------- | --------------- | ------------ | ---------- | ------------- |
| WIDEVINE       | WIDEVINE        | PLAYREADY    | PLAYREADY  | FAIRPLAY      |

### Configuration

Sometimes, an application may want to force the player to select a specific DRM system, usually to support DRM on browser that's not in the table above, or to prioritize between one of the supported DRM systems.

Setting the desired DRM system is done by setting the DRM configuration. For example:

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
The player selects the DRM system **after** the [source type selection](./source-selection-logic.md).  
Therefore, the DRM settings may **not be applied** when the source type cannot be played with the configured DRM system. For example:

| Browser | Source Type | Default DRM System | Configured DRM System | Selected (reason)                   |
| ------- | ----------- | ------------------ | --------------------- | ----------------------------------- |
| Chrome  | dash        | WIDEVINE           | PLAYREADY             | PLAYREADY (dash+PLAYREADY is valid) |
| Chrome  | dash        | WIDEVINE           | FAIRPLAY              | WIDEVINE (dash+FAIRPLAY is invalid) |
