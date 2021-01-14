## Managing Autoplay on the Player

If you would to start playing your content automatically, simply set the value of the player configuration `playback.autoplay` accordingly.

> ### playback.autoplay
>
> ##### Type: `boolean` | `string`
>
> ##### Default: `false`
>
> ##### Description: Start playback automatically.
>
> If set to `true`, playback will start automatically when the player receives the content.
>
> > If set to `'inview'`, playback will start automatically when the player is in view.
>
> If set to `false`, a user action will be required to start playback.

#### Example - Basic usage:

```js
var config = {
  playback: {
    autoplay: true
  },
  sources: {...}
};
// No additional code required - playback will begin automatically
var player = playkit.core.loadPlayer(config);
```

> **_Note_**:
> Some developers simulate the autoplay behavior by calling the play() method right after creating the player without manipulating the player configuration. However, we strongly recommend not doing this!
>
> ```js
> var config = {
>  sources: {...}
> };
> var player = playkit.core.loadPlayer(config);
> // Bad practice!
> player.play();
> ```
>
> #### Why it's bad?
>
> When you use the method described above, the player has no way of knowing whether the call to `play()` has been implemented via user action or via an API call. This can cause unexpected behavior in browsers that do not support autoplay.

### What if the browser does not allow autoplay?

On some platforms, web browsers do not allow to playback to begin automatically. The platforms that block attempts at playback are mostly targeted at web browsers on mobile devices; however, some desktop browsers have also started to align these restrictions to create a unified behavior between platforms (currently Safari11 and beginning with Chrome64).

#### The Good News

These restrictions apply only to automatic playback with sound, but not to automatic playback without sound.
The PlayKitJS core can manage this logic on its own, and identify whether the current environment does not support autoplay with sound. In this case, the player will apply the autoplay with sound.

To use this feature, you'll need to set the `playback.allowMutedAutoPlay` accordingly to the desired behavior.

> ### playback.allowMutedAutoPlay
>
> ##### Type: `boolean`
>
> ##### Default: `true`
>
> ##### Description: Start playback automatically without sound if autoplay with sound is not allowed.
>
> If set to `true` and the run-time browser blocks autoplay, autoplay will begin muted until any user action is executed on the player, which will then unmute playback. If set to `false` and the run-time browser blocks autoplay, playback will not start automatically.

The following matrix summarizes the results for configuring `playback.allowMutedAutoPlay` when `playback.autoplay=true`:

| Browser Policy  | `allowMutedAutoPlay=true`                                         | `allowMutedAutoPlay=false`                                        |
| --------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| Blocks autoplay | Muted autoplay                                                    | No autoplay (user action is required)                             |
| Allows autoplay | Autoplay with/without sound according to the player configuration | Autoplay with/without sound according to the player configuration |

#### Example - Basic usage:

```js
var config = {
  playback: {
    autoplay: true,
    allowMutedAutoPlay: true
  },
  sources: {...}
};
// If browser blocks autoplay, playback will start muted
var player = playkit.core.loadPlayer(config);
```

#### Example - Basic usage 2:

```js
var config = {
  playback: {
    autoplay: true,
    allowMutedAutoPlay: false
  },
  sources: {...}
};
// If browser blocks autoplay, playback will not start automatically
var player = playkit.core.loadPlayer(config);
```
