## How does the Source Selection Logic Works
Let us assume that the following player configuration is given and we would like to understand how does the source selection logic works.
```js
var config = {
    sources: {
        hls: [
            {
                mimetype: "application/x-mpegurl",
                url: "http://wowzaec2demo.streamlock.net/vod-multitrack/_definst_/smil:ElephantsDream/ElephantsDream.smil/playlist.m3u8"
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
1. The player looks at the `streamPriority` array and see that the `dash` stream has the highest priority.
2. The player will check whether it received any `dash` sources within the `sources` object.
3. Since there are no `dash` sources in it, the player will move to the next priority from the `streamPriority` list which is `hls`. 
4. After checking the `sources` object again and found `hls` sources, the player will choose to play `hls`.

However, will the player use the native hls or not? This depends on the `preferNative` value for `hls`. Because this value is set to `true`, the player knows that if the browser supports native `hls` playback, the source will be played natively.

Given the configuration information above, which source will be played in each browser?
<br>Following summarize the results for this scenario:

| Chrome | Safari | Firefox | Edge|
|----------------- | ----------------- | ------ |-----
| hls with `hls.js` | native hls |hls with `hls.js`|native hls
