## Managing Auto Play
If you would like to start automatically playing your content, you can easily manipulating the player configuration and set the `autoplay` value accordingly.

>### playback.autoplay
>##### type: `boolean`
>##### default: `false`
>##### description: Start playback automatically.
>If `true`, playback will start automatically when sources will be given to the player. If `false`, a user gesture will be >required to start playback.
#### Example - Basic usage:
```js
var config = {
  playback: {
    autoplay: true
  },
  sources: {...}
};
// No need to add additional code, 
// playback will start automatically!
var player = Playkit.loadPlayer(config);
```

>**_Note_**:
> Some developers may 
> simulate the autoplay behavior by calling `play()` method right after the creation of the player without manipulating the player configuration. We strongly recommend **not** doing it this way!
>```js
>var config = {
>  sources: {...}
>};
>var player = Playkit.loadPlayer(config);
>// Bad practice!
>player.play(); 
>```
> #### Why it's bad?
> When it's done as noted above, the player has no way to know whether the call to `play()` has done via user action or via API call, a fact that can cause unexpected behaviour on browsers which are not support autoplay.
### What if the browser does not allow autoplay?
Unfortunately, on some platforms, web browsers does not allow to start playback automatically.
The platforms that are blocks those attempts are mostly targeted to web browsers on mobile devices, but lately desktop browsers
 are also start to align those restrictions in order to create unified behavior between platforms (currently Safari 11 and began of Chrome 64).
 #### The Good News
These restrictions apply only to automatic playback with sound, but not to automatic playback without sound.
Our player can manage this logic by himself and to identify if the current environment does not support autoplay with sound. In that case, he will apply autoplay without sound.
To use this feature, you'll need to set the `allowMutedAutoPlay` accordingly to your desired behavior.
 >### playback.allowMutedAutoPlay
 >##### type: `boolean`
 >##### default: `true`
 >##### description: Start playback automatically without sound in case autoplay with sound is not allowed.
 >If sets to `true` and the runtime browser blocks autoplay, 
 >autoplay will start muted, until any user gesture 
 >will be executed on the player, which will then unmute it. If sets to `false` and the runtime browser blocks autoplay, playback will not start automatically.

 The following matrix summarise the results for configure `playback.allowMutedAutoPlay` when `playback.autoplay=true`:

| Browser Policy          | `allowMutedAutoPlay=true` |` allowMutedAutoPlay=false`
| ----------------- | ----------------- | ------ |
| Blocks autoplay  | muted autoplay | no autoplay (user gesture is required) |
| Allows autoplay  | autoplay with/without sound according to the player configuration | autoplay with/without sound according to the player configuration

#### Example - Basic usage:
```js
var config = {
  playback: {
    autoplay: true,
    allowMutedAutoPlay: true
  },
  sources: {...}
};
// If browser blocks auto play, playback will start muted
var player = Playkit.loadPlayer(config);
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
// If browser blocks auto play, playback will not start automatically
var player = Playkit.loadPlayer(config);
```
