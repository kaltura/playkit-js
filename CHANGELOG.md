# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.29.0"></a>
# [0.29.0](https://github.com/kaltura/playkit-js/compare/v0.28.0...v0.29.0) (2018-06-17)


### Bug Fixes

* **FEC-8233:** handle media & error recovering ([#226](https://github.com/kaltura/playkit-js/issues/226)) ([48c29fe](https://github.com/kaltura/playkit-js/commit/48c29fe))
* **FEC-8255:** video starts from beginning instead 12th sec ([#230](https://github.com/kaltura/playkit-js/issues/230)) ([0136c88](https://github.com/kaltura/playkit-js/commit/0136c88))
* **FEC-8257:** research autoplay detection handling ([#232](https://github.com/kaltura/playkit-js/issues/232)) ([605eea1](https://github.com/kaltura/playkit-js/commit/605eea1))
* **FEC-8272:** sometimes when seeking spinner display constantly in IE11 ([#234](https://github.com/kaltura/playkit-js/issues/234)) ([7a28049](https://github.com/kaltura/playkit-js/commit/7a28049))
* **FEC-8315:** two caption events triggered after first play ([#238](https://github.com/kaltura/playkit-js/issues/238)) ([a46f9bb](https://github.com/kaltura/playkit-js/commit/a46f9bb))
* **FEC-8319:** When starting to play an mp4 video, a TEXT_TRACK_CHANGED event is sent twice ([#240](https://github.com/kaltura/playkit-js/issues/240)) ([c673454](https://github.com/kaltura/playkit-js/commit/c673454))


### Features

* **FEC-8243:** allow to disable specific plugins ([#229](https://github.com/kaltura/playkit-js/issues/229)) ([e16a903](https://github.com/kaltura/playkit-js/commit/e16a903))



<a name="0.28.0"></a>
# [0.28.0](https://github.com/kaltura/playkit-js/compare/v0.27.1...v0.28.0) (2018-05-26)


### Bug Fixes
* **FEC-8180:** when video starts fallback muted and user select to change media the unmute icon is not displayed although video still muted ([#227](https://github.com/kaltura/playkit-js/issues/228)) ([bf69fd5](https://github.com/kaltura/playkit-js/commit/bf69fd5))


### Features

* **FEC-8244:** do not throw plugin load errors on main thread ([#227](https://github.com/kaltura/playkit-js/issues/227)) ([61c3cda](https://github.com/kaltura/playkit-js/commit/61c3cda))



<a name="0.27.1"></a>
## [0.27.1](https://github.com/kaltura/playkit-js/compare/v0.27.0...v0.27.1) (2018-05-10)


### Bug Fixes

* **FEC-8202:** Session ID isn't sent when reporting analytics ([#224](https://github.com/kaltura/playkit-js/issues/224)) ([9133edb](https://github.com/kaltura/playkit-js/commit/9133edb))
* **FEC-8203:** Live with DVR is not playing live edge in first play ([#225](https://github.com/kaltura/playkit-js/issues/225)) ([042baec](https://github.com/kaltura/playkit-js/commit/042baec))



<a name="0.27.0"></a>
# [0.27.0](https://github.com/kaltura/playkit-js/compare/v0.26.0...v0.27.0) (2018-05-06)


### Bug Fixes

* **FEC-8176:** restructure player config ([#223](https://github.com/kaltura/playkit-js/issues/223)) ([22c20c2](https://github.com/kaltura/playkit-js/commit/22c20c2))


### Features

* **FEC-7916:** support Fairplay DRM on Mobile safari 11 on iOS ([#219](https://github.com/kaltura/playkit-js/issues/219)) ([c7b7498](https://github.com/kaltura/playkit-js/commit/c7b7498))
* **FEC-8123:** add clone support for custom types ([#217](https://github.com/kaltura/playkit-js/issues/217)) ([482bd29](https://github.com/kaltura/playkit-js/commit/482bd29))
* **FEC-8140:** expose tracks as immutable on API ([#218](https://github.com/kaltura/playkit-js/issues/218)) ([a53587d](https://github.com/kaltura/playkit-js/commit/a53587d))



<a name="0.26.0"></a>
# [0.26.0](https://github.com/kaltura/playkit-js/compare/v0.25.1...v0.26.0) (2018-04-25)


### Features

* media loaded event ([#220](https://github.com/kaltura/playkit-js/issues/220)) ([5a9ae90](https://github.com/kaltura/playkit-js/commit/5a9ae90))
* playback started event ([#216](https://github.com/kaltura/playkit-js/issues/216)) ([cfe5f04](https://github.com/kaltura/playkit-js/commit/cfe5f04))



<a name="0.25.1"></a>
## [0.25.1](https://github.com/kaltura/playkit-js/compare/v0.25.0...v0.25.1) (2018-04-23)


### Bug Fixes

* **FEC-7937:** video first frame is displayed before pre-roll ad starts ([#215](https://github.com/kaltura/playkit-js/issues/215)) ([dd08d9c](https://github.com/kaltura/playkit-js/commit/dd08d9c))



<a name="0.25.0"></a>
# [0.25.0](https://github.com/kaltura/playkit-js/compare/v0.24.0...v0.25.0) (2018-04-16)


### Features

* data saver mode optimisation check ([#214](https://github.com/kaltura/playkit-js/issues/214)) ([5a8da5c](https://github.com/kaltura/playkit-js/commit/5a8da5c))



<a name="0.24.0"></a>
# [0.24.0](https://github.com/kaltura/playkit-js/compare/v0.23.0...v0.24.0) (2018-04-10)


### Bug Fixes

* **FEC-7330:** removed flow annotation which failed hls build ([#210](https://github.com/kaltura/playkit-js/issues/210)) ([66f25b2](https://github.com/kaltura/playkit-js/commit/66f25b2))


### Features

* clear metadata and sources on reset ([#212](https://github.com/kaltura/playkit-js/issues/212)) ([59fc888](https://github.com/kaltura/playkit-js/commit/59fc888))



<a name="0.23.0"></a>
# [0.23.0](https://github.com/kaltura/playkit-js/compare/v0.22.0...v0.23.0) (2018-04-09)


### Bug Fixes

* **FEC-8090:** after disabling captions and toggling full screen the last caption frame is displayed ([#207](https://github.com/kaltura/playkit-js/issues/207)) ([fe7079f](https://github.com/kaltura/playkit-js/commit/fe7079f))
* **FEC-8108:** no playback after preroll - android browser ([#209](https://github.com/kaltura/playkit-js/issues/209)) ([e292180](https://github.com/kaltura/playkit-js/commit/e292180))


### Features

* **FEC-7330:** enable setting custom track labels by app ([#208](https://github.com/kaltura/playkit-js/issues/208)) ([bad2b06](https://github.com/kaltura/playkit-js/commit/bad2b06))



<a name="0.22.0"></a>
# [0.22.0](https://github.com/kaltura/playkit-js/compare/v0.21.8...v0.22.0) (2018-03-27)


### Features

* **FEC-8079:** add reset API to player and use it for change media ([#205](https://github.com/kaltura/playkit-js/issues/205)) ([24838b1](https://github.com/kaltura/playkit-js/commit/24838b1))
* **FEC-8083:** add set capability API ([#206](https://github.com/kaltura/playkit-js/issues/206)) ([db3de97](https://github.com/kaltura/playkit-js/commit/db3de97))



<a name="0.21.8"></a>
## [0.21.8](https://github.com/kaltura/playkit-js/compare/v0.21.7...v0.21.8) (2018-03-14)


### Bug Fixes

* **FEC-8026:** external OTT VOD/Live media doesn't works on IE 11 ([#204](https://github.com/kaltura/playkit-js/issues/204)) ([fd8bbd6](https://github.com/kaltura/playkit-js/commit/fd8bbd6))



<a name="0.21.7"></a>
## [0.21.7](https://github.com/kaltura/playkit-js/compare/v0.21.6...v0.21.7) (2018-03-12)


### Bug Fixes

* remove default metadata object ([#203](https://github.com/kaltura/playkit-js/issues/203)) ([2dedb0c](https://github.com/kaltura/playkit-js/commit/2dedb0c))



<a name="0.21.6"></a>
## [0.21.6](https://github.com/kaltura/playkit-js/compare/v0.21.5...v0.21.6) (2018-03-08)


### Bug Fixes

* **FEC-7815:** added a jsonp utility ([#186](https://github.com/kaltura/playkit-js/issues/186)) ([5c289cc](https://github.com/kaltura/playkit-js/commit/5c289cc))



<a name="0.21.5"></a>
## [0.21.5](https://github.com/kaltura/playkit-js/compare/v0.21.4...v0.21.5) (2018-03-05)


### Bug Fixes

* **FEC-7970:** Change media from DRM to DRM is not working ([#202](https://github.com/kaltura/playkit-js/issues/202)) ([b9974ad](https://github.com/kaltura/playkit-js/commit/b9974ad))



<a name="0.21.4"></a>
## [0.21.4](https://github.com/kaltura/playkit-js/compare/v0.21.3...v0.21.4) (2018-02-28)


### Bug Fixes

* **FEC-7371:** video fails to play on old browsers or browsers with data saver mode on (cont.)  ([#201](https://github.com/kaltura/playkit-js/issues/201)) ([4b5c229](https://github.com/kaltura/playkit-js/commit/4b5c229))



<a name="0.21.3"></a>
## [0.21.3](https://github.com/kaltura/playkit-js/compare/v0.21.2...v0.21.3) (2018-02-26)


### Bug Fixes

* **FEC-7371:** video fails to play on old browsers or browsers with data saver mode on ([#200](https://github.com/kaltura/playkit-js/issues/200)) ([14d6f9a](https://github.com/kaltura/playkit-js/commit/14d6f9a))
* **FEC-7872:** Player stuck in case of multirequest is not fully loaded ([#197](https://github.com/kaltura/playkit-js/issues/197)) ([9537d42](https://github.com/kaltura/playkit-js/commit/9537d42))
* **FEC-7933:** Default language in IE11 is not the same as configured as explicit ([#198](https://github.com/kaltura/playkit-js/issues/198)) ([eb38566](https://github.com/kaltura/playkit-js/commit/eb38566))
* **FEC-7939:** 'off' option appears twice after change media ([#199](https://github.com/kaltura/playkit-js/issues/199)) ([506fe8e](https://github.com/kaltura/playkit-js/commit/506fe8e))



<a name="0.21.2"></a>
## [0.21.2](https://github.com/kaltura/playkit-js/compare/v0.21.1...v0.21.2) (2018-02-19)


### Bug Fixes

* operations order on change media ([#192](https://github.com/kaltura/playkit-js/issues/192)) ([601e0ff](https://github.com/kaltura/playkit-js/commit/601e0ff))
* **FEC-7813, FEC-7918:** the captions are OFF in the menu, despite explicit captions configured and shown on iOS ([#196](https://github.com/kaltura/playkit-js/issues/196)) ([8548a9e](https://github.com/kaltura/playkit-js/commit/8548a9e))
* **FEC-7907, FEC-7872:** No play button when preload=auto and ima plugin enabled ([#193](https://github.com/kaltura/playkit-js/issues/193)) ([2975fdc](https://github.com/kaltura/playkit-js/commit/2975fdc))



<a name="0.21.1"></a>
## [0.21.1](https://github.com/kaltura/playkit-js/compare/v0.21.0...v0.21.1) (2018-02-14)


### Bug Fixes

* **FEC-7564:** trigger timeupdate in case of live when the playback is paused ([#191](https://github.com/kaltura/playkit-js/issues/191)) ([68ba8bf](https://github.com/kaltura/playkit-js/commit/68ba8bf))
* error printing ([#194](https://github.com/kaltura/playkit-js/issues/194)) ([b62cb6d](https://github.com/kaltura/playkit-js/commit/b62cb6d))



<a name="0.21.0"></a>
# [0.21.0](https://github.com/kaltura/playkit-js/compare/v0.20.1...v0.21.0) (2018-02-11)


### Bug Fixes

* **FEC-7392 FEC-7882:** Live+DVR - unavailable time shown in the seekbar ([#187](https://github.com/kaltura/playkit-js/issues/187)) ([98a6483](https://github.com/kaltura/playkit-js/commit/98a6483))
* **FEC-7896:** endless spinner appears right after changing audio track in IE and Edge ([#189](https://github.com/kaltura/playkit-js/issues/189)) ([2da8940](https://github.com/kaltura/playkit-js/commit/2da8940))


### Features

* expose player enums ([#190](https://github.com/kaltura/playkit-js/issues/190)) ([675563a](https://github.com/kaltura/playkit-js/commit/675563a))



<a name="0.20.1"></a>
## [0.20.1](https://github.com/kaltura/playkit-js/compare/v0.20.0...v0.20.1) (2018-02-06)


### Bug Fixes

* **FEC-7564:** durationchange not triggered while live playback - safari ([#178](https://github.com/kaltura/playkit-js/issues/178)) ([d0490fc](https://github.com/kaltura/playkit-js/commit/d0490fc))
* canPreload check logic is not accurate ([#179](https://github.com/kaltura/playkit-js/issues/179)) ([3d37524](https://github.com/kaltura/playkit-js/commit/3d37524))



<a name="0.20.0"></a>
# [0.20.0](https://github.com/kaltura/playkit-js/compare/v0.19.0...v0.20.0) (2018-01-10)


### Bug Fixes

* add HLS_BUFFER_STALLED_ERROR error code ([#171](https://github.com/kaltura/playkit-js/issues/171)) ([596a295](https://github.com/kaltura/playkit-js/commit/596a295))
* catching failed ready promise ([#172](https://github.com/kaltura/playkit-js/issues/172)) ([213f339](https://github.com/kaltura/playkit-js/commit/213f339))
* prefix player types ([#177](https://github.com/kaltura/playkit-js/issues/177)) ([b9029c7](https://github.com/kaltura/playkit-js/commit/b9029c7))
* this._config.plugins.ima check fails if there are no plugins at all ([#173](https://github.com/kaltura/playkit-js/issues/173)) ([c737649](https://github.com/kaltura/playkit-js/commit/c737649))


### Features

* add player types & update namespace ([#176](https://github.com/kaltura/playkit-js/issues/176)) ([d24a83e](https://github.com/kaltura/playkit-js/commit/d24a83e))



<a name="0.19.1"></a>
## [0.19.1](https://github.com/kaltura/playkit-js/compare/v0.19.0...v0.19.1) (2017-12-12)


### Bug Fixes

* add HLS_BUFFER_STALLED_ERROR error code ([#171](https://github.com/kaltura/playkit-js/issues/171)) ([596a295](https://github.com/kaltura/playkit-js/commit/596a295))



<a name="0.19.0"></a>
# [0.19.0](https://github.com/kaltura/playkit-js/compare/v0.18.1...v0.19.0) (2017-12-06)


### Features

* add buffered api ([#169](https://github.com/kaltura/playkit-js/issues/169)) ([d761b6c](https://github.com/kaltura/playkit-js/commit/d761b6c))
* **FEC-7476:** error handling  ([#162](https://github.com/kaltura/playkit-js/issues/162)) ([fd0a65f](https://github.com/kaltura/playkit-js/commit/fd0a65f))



<a name="0.18.1"></a>
## [0.18.1](https://github.com/kaltura/playkit-js/compare/v0.18.0...v0.18.1) (2017-11-28)


### Bug Fixes

* **FEC-7554:** autoplay test fails on safari and halting playback ([#167](https://github.com/kaltura/playkit-js/issues/167)) ([59665e6](https://github.com/kaltura/playkit-js/commit/59665e6))



<a name="0.18.0"></a>
# [0.18.0](https://github.com/kaltura/playkit-js/compare/v0.17.1...v0.18.0) (2017-11-26)


### Bug Fixes

* update canPlaySource API in engine interface ([#166](https://github.com/kaltura/playkit-js/issues/166)) ([6185bd0](https://github.com/kaltura/playkit-js/commit/6185bd0))


### Features

* expose playback rates api ([#165](https://github.com/kaltura/playkit-js/issues/165)) ([c6aa6c1](https://github.com/kaltura/playkit-js/commit/c6aa6c1))



<a name="0.17.1"></a>
## [0.17.1](https://github.com/kaltura/playkit-js/compare/v0.17.0...v0.17.1) (2017-11-22)


### Bug Fixes

* **FEC-7504:** explicit language is not working on production env ([#164](https://github.com/kaltura/playkit-js/issues/164)) ([80e7f36](https://github.com/kaltura/playkit-js/commit/80e7f36))



<a name="0.17.0"></a>
# [0.17.0](https://github.com/kaltura/playkit-js/compare/v0.16.0...v0.17.0) (2017-11-16)


### Bug Fixes

* **FEC-7355:** don't show poster when autoplaying is on ([#158](https://github.com/kaltura/playkit-js/issues/158)) ([d940225](https://github.com/kaltura/playkit-js/commit/d940225))
* **FEC-7436:** preload auto: first live frame appears with entry thumbnail ([#160](https://github.com/kaltura/playkit-js/issues/160)) ([8e623d9](https://github.com/kaltura/playkit-js/commit/8e623d9))


### Features

* expose logger API ([#161](https://github.com/kaltura/playkit-js/issues/161)) ([f61dce4](https://github.com/kaltura/playkit-js/commit/f61dce4))



<a name="0.16.0"></a>
# [0.16.0](https://github.com/kaltura/playkit-js/compare/v0.15.0...v0.16.0) (2017-11-07)


### Bug Fixes

* **FEC-7380, FEC-7381:** there are captions displayed when the captions are supposed to be 'off' ([#157](https://github.com/kaltura/playkit-js/issues/157)) ([4b52b80](https://github.com/kaltura/playkit-js/commit/4b52b80))


### Features

* handle native selection of tracks ([#156](https://github.com/kaltura/playkit-js/issues/156)) ([6da107c](https://github.com/kaltura/playkit-js/commit/6da107c))



<a name="0.15.0"></a>
# [0.15.0](https://github.com/kaltura/playkit-js/compare/v0.14.2...v0.15.0) (2017-11-01)


### Bug Fixes

* **FEC-7266:** reposition & resize captions when changing to/from full screen ([#155](https://github.com/kaltura/playkit-js/issues/155)) ([d2892b8](https://github.com/kaltura/playkit-js/commit/d2892b8))


### Features

* handle fullscreen ([#154](https://github.com/kaltura/playkit-js/issues/154)) ([3373c8c](https://github.com/kaltura/playkit-js/commit/3373c8c))



<a name="0.14.2"></a>
## [0.14.2](https://github.com/kaltura/playkit-js/compare/v0.14.1...v0.14.2) (2017-10-30)


### Bug Fixes

* **FEC-7335:** reset subtitle display on player reset ([#152](https://github.com/kaltura/playkit-js/issues/152)) ([f48efa1](https://github.com/kaltura/playkit-js/commit/f48efa1))
* empty captions menu when playing native hls ([#153](https://github.com/kaltura/playkit-js/issues/153)) ([623d83a](https://github.com/kaltura/playkit-js/commit/623d83a))



<a name="0.14.1"></a>
## [0.14.1](https://github.com/kaltura/playkit-js/compare/v0.14.0...v0.14.1) (2017-10-26)


### Bug Fixes

* **FEC-7106:** captions on IE & edge ([#147](https://github.com/kaltura/playkit-js/issues/147)) ([4447c1d](https://github.com/kaltura/playkit-js/commit/4447c1d))
* **FEC-7345:** only off option appears in text track menu (safari) ([#148](https://github.com/kaltura/playkit-js/issues/148)) ([cff8e4e](https://github.com/kaltura/playkit-js/commit/cff8e4e))
* **FEC-7356:** player is loading twice for 'preload=auto' and 'autoplay=true' ([#149](https://github.com/kaltura/playkit-js/issues/149)) ([98e7919](https://github.com/kaltura/playkit-js/commit/98e7919))
* filter empty video element text tracks ([#150](https://github.com/kaltura/playkit-js/issues/150)) ([58ada7c](https://github.com/kaltura/playkit-js/commit/58ada7c))



<a name="0.14.0"></a>
# [0.14.0](https://github.com/kaltura/playkit-js/compare/v0.13.1...v0.14.0) (2017-10-25)


### Features

* **autoplay:** manage autoplay promise and allowMutedAutoPlay flag ([#144](https://github.com/kaltura/playkit-js/issues/144)) ([79a2610](https://github.com/kaltura/playkit-js/commit/79a2610))



<a name="0.13.1"></a>
## [0.13.1](https://github.com/kaltura/playkit-js/compare/v0.13.0...v0.13.1) (2017-10-25)


### Bug Fixes

* **FEC-7116:** change playinline to true by default ([aa85d07](https://github.com/kaltura/playkit-js/commit/aa85d07))
* **fec-7334:** the player state has not saved on change media ([#145](https://github.com/kaltura/playkit-js/issues/145)) ([b3c8cf2](https://github.com/kaltura/playkit-js/commit/b3c8cf2))
* **FEC-7348:** fix fairplay exception ([#146](https://github.com/kaltura/playkit-js/issues/146)) ([f4e5911](https://github.com/kaltura/playkit-js/commit/f4e5911))



<a name="0.13.0"></a>
# [0.13.0](https://github.com/kaltura/playkit-js/compare/v0.12.0...v0.13.0) (2017-10-23)


### Bug Fixes

* **FEC-7046:** seek to duration safety using offset ([#135](https://github.com/kaltura/playkit-js/issues/135)) ([85ad548](https://github.com/kaltura/playkit-js/commit/85ad548))
* **FEC-7242:** subtitles transition in safari 9.0  ([#136](https://github.com/kaltura/playkit-js/issues/136)) ([4d14ade](https://github.com/kaltura/playkit-js/commit/4d14ade))
* **FEC-7317:** check if VTTCue and TextTrackCue are not undefined ([#137](https://github.com/kaltura/playkit-js/issues/137)) ([604f7a6](https://github.com/kaltura/playkit-js/commit/604f7a6))
* **README:** typos and travis ref ([#141](https://github.com/kaltura/playkit-js/issues/141)) ([e57027e](https://github.com/kaltura/playkit-js/commit/e57027e))


### Features

* **cvaa:** add TEXT_STYLE_CHANGED event ([#138](https://github.com/kaltura/playkit-js/issues/138)) ([ee67e3c](https://github.com/kaltura/playkit-js/commit/ee67e3c))



<a name="0.12.0"></a>
# [0.12.0](https://github.com/kaltura/playkit-js/compare/v0.11.0...v0.12.0) (2017-10-16)


### Bug Fixes

* **FEC-7228:** fixing default captions flow ([#133](https://github.com/kaltura/playkit-js/issues/133)) ([56a9931](https://github.com/kaltura/playkit-js/commit/56a9931))


### Features

* change media ([#124](https://github.com/kaltura/playkit-js/issues/124)) ([d8e9af4](https://github.com/kaltura/playkit-js/commit/d8e9af4))



<a name="0.11.0"></a>
# [0.11.0](https://github.com/kaltura/playkit-js/compare/v0.10.0...v0.11.0) (2017-10-10)


### Bug Fixes

* **FEC-7071:** call pause on ended for browsers which don't do it natively ([#129](https://github.com/kaltura/playkit-js/issues/129)) ([56e51a1](https://github.com/kaltura/playkit-js/commit/56e51a1))
* initialization of textStyle object ([#127](https://github.com/kaltura/playkit-js/issues/127)) ([83bf106](https://github.com/kaltura/playkit-js/commit/83bf106))
* **FEC-7226, FEC-7243:** create comparer func to default tracks ([#128](https://github.com/kaltura/playkit-js/issues/128)) ([204cc61](https://github.com/kaltura/playkit-js/commit/204cc61))
* **FEC-7238:** fix captions on IE11 and Edge ([#131](https://github.com/kaltura/playkit-js/issues/131)) ([c79ddf7](https://github.com/kaltura/playkit-js/commit/c79ddf7))
* order media source adapters depends on preferNative value ([#132](https://github.com/kaltura/playkit-js/issues/132)) ([bb32e2e](https://github.com/kaltura/playkit-js/commit/bb32e2e))


### Features

* add default text font family and expose ENUM ([#130](https://github.com/kaltura/playkit-js/issues/130)) ([5384eb2](https://github.com/kaltura/playkit-js/commit/5384eb2))



<a name="0.10.0"></a>
# [0.10.0](https://github.com/kaltura/playkit-js/compare/v0.9.0...v0.10.0) (2017-10-02)


### Features

* caption refactor + support cvaa & default audio/text tracks ([#118](https://github.com/kaltura/playkit-js/issues/118)) ([187cf78](https://github.com/kaltura/playkit-js/commit/187cf78))



<a name="0.9.0"></a>
# [0.9.0](https://github.com/kaltura/playkit-js/compare/v0.8.0...v0.9.0) (2017-09-26)


### Bug Fixes

* **base-plugin:** getConfig api should return copy of his config ([#123](https://github.com/kaltura/playkit-js/issues/123)) ([26a74ea](https://github.com/kaltura/playkit-js/commit/26a74ea))


### Features

* **FEC-7101:** expose engine and stream type as API ([#120](https://github.com/kaltura/playkit-js/issues/120)) ([58c2e9e](https://github.com/kaltura/playkit-js/commit/58c2e9e))
* **FEC-7171:** handle preload when ads plugin enabled ([#119](https://github.com/kaltura/playkit-js/issues/119)) ([75e8139](https://github.com/kaltura/playkit-js/commit/75e8139))
* **FEC-7182:** add MUTE_CHANGE event ([#121](https://github.com/kaltura/playkit-js/issues/121)) ([1c0c4e0](https://github.com/kaltura/playkit-js/commit/1c0c4e0))
* configure refactor ([#122](https://github.com/kaltura/playkit-js/issues/122)) ([aafc22e](https://github.com/kaltura/playkit-js/commit/aafc22e))



<a name="0.8.0"></a>
# [0.8.0](https://github.com/kaltura/playkit-js/compare/v0.6.1...v0.8.0) (2017-09-18)


### Bug Fixes

* **FEC-7172:** fix DRM support test on Android devices ([#117](https://github.com/kaltura/playkit-js/issues/117)) ([a5ec887](https://github.com/kaltura/playkit-js/commit/a5ec887))


### Features

* player doesn't attach itself to parent ([#113](https://github.com/kaltura/playkit-js/issues/113)) ([336f4ab](https://github.com/kaltura/playkit-js/commit/336f4ab))



<a name="0.7.0"></a>
# [0.7.0](https://github.com/kaltura/playkit-js/compare/v0.6.1...v0.7.0) (2017-09-17)


### Bug Fixes

* **FEC-7089:** handle bitrate change in android browser ([#110](https://github.com/kaltura/playkit-js/issues/110)) ([5e5a648](https://github.com/kaltura/playkit-js/commit/5e5a648))
* **FEC-7138:** enable setting 0 and 1 values ([#112](https://github.com/kaltura/playkit-js/issues/112)) ([5d88258](https://github.com/kaltura/playkit-js/commit/5d88258))
* load plugins via the constructor ([#116](https://github.com/kaltura/playkit-js/issues/116)) ([a602336](https://github.com/kaltura/playkit-js/commit/a602336))


### Features

* **event-manager:** support listen once and unlisten a specific listener ([#111](https://github.com/kaltura/playkit-js/issues/111)) ([c7a2995](https://github.com/kaltura/playkit-js/commit/c7a2995))
* player doesn't attach itself to parent ([#113](https://github.com/kaltura/playkit-js/issues/113)) ([336f4ab](https://github.com/kaltura/playkit-js/commit/336f4ab))



<a name="0.6.1"></a>
## [0.6.1](https://github.com/kaltura/playkit-js/compare/v0.6.0...v0.6.1) (2017-09-11)


### Bug Fixes

* **FEC-7108:** native load video element for video sibling on mobile ([#109](https://github.com/kaltura/playkit-js/issues/109)) ([aec8bdd](https://github.com/kaltura/playkit-js/commit/aec8bdd))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/kaltura/playkit-js/compare/v0.4.1...v0.6.0) (2017-09-07)


### Features

* allow send initial volume in the player config ([#107](https://github.com/kaltura/playkit-js/issues/107)) ([a8baf1d](https://github.com/kaltura/playkit-js/commit/a8baf1d))
* allow setting native hls and dash playback ([#106](https://github.com/kaltura/playkit-js/issues/106)) ([b24b7ea](https://github.com/kaltura/playkit-js/commit/b24b7ea))


<a name="0.5.0"></a>
# [0.5.0](https://github.com/kaltura/playkit-js/compare/v0.4.1...v0.5.0) (2017-08-31)


### Features

* drm ([#101](https://github.com/kaltura/playkit-js/issues/101)) ([1ade0da](https://github.com/kaltura/playkit-js/commit/1ade0da))
* live playback support ([#102](https://github.com/kaltura/playkit-js/issues/102)) ([ef9d97d](https://github.com/kaltura/playkit-js/commit/ef9d97d))



<a name="0.4.1"></a>
## [0.4.1](https://github.com/kaltura/playkit-js/compare/v0.4.0...v0.4.1) (2017-08-23)


### Bug Fixes

* flow error on play ([#99](https://github.com/kaltura/playkit-js/issues/99)) ([0233c5a](https://github.com/kaltura/playkit-js/commit/0233c5a))
* **FEC-7040, FEC-7016, FEC-6946:** move from buffering to playing on seeked ([#100](https://github.com/kaltura/playkit-js/issues/100)) ([22b7c4d](https://github.com/kaltura/playkit-js/commit/22b7c4d))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/kaltura/playkit-js/compare/v0.3.0...v0.4.0) (2017-08-08)


### Features

* **poster:** add poster manager ([#94](https://github.com/kaltura/playkit-js/issues/94)) ([98952e6](https://github.com/kaltura/playkit-js/commit/98952e6))



<a name="0.3.0"></a>
# 0.3.0 (2017-07-30)


### Bug Fixes

* **compatibility:** changes to support lower versions browsers ([#83](https://github.com/kaltura/playkit-js/issues/83)) ([a227790](https://github.com/kaltura/playkit-js/commit/a227790))
* **get config:** return copy of player config ([#89](https://github.com/kaltura/playkit-js/issues/89)) ([b395082](https://github.com/kaltura/playkit-js/commit/b395082))
* **media source adapter:** fix implementation due to flow errors ([#34](https://github.com/kaltura/playkit-js/issues/34)) ([4ced315](https://github.com/kaltura/playkit-js/commit/4ced315))
* **player:** change media ([#85](https://github.com/kaltura/playkit-js/issues/85)) ([a97762b](https://github.com/kaltura/playkit-js/commit/a97762b))
* extend source type and allow nullable it ([#92](https://github.com/kaltura/playkit-js/issues/92)) ([d23e523](https://github.com/kaltura/playkit-js/commit/d23e523))
* **native-player:** handle progressive sources ([#79](https://github.com/kaltura/playkit-js/issues/79)) ([b5ace47](https://github.com/kaltura/playkit-js/commit/b5ace47))
* **player:** fire source selected as array ([#87](https://github.com/kaltura/playkit-js/issues/87)) ([073f50c](https://github.com/kaltura/playkit-js/commit/073f50c))
* **player:** fix destroy method ([#71](https://github.com/kaltura/playkit-js/issues/71)) ([95da854](https://github.com/kaltura/playkit-js/commit/95da854))
* **webpack:** change devtool module filename template to relative path ([#65](https://github.com/kaltura/playkit-js/issues/65)) ([af00b3b](https://github.com/kaltura/playkit-js/commit/af00b3b))
* remove black background and add start time to load() api of msa ([#84](https://github.com/kaltura/playkit-js/issues/84)) ([23e3991](https://github.com/kaltura/playkit-js/commit/23e3991))


### Features

* **abr:** add api for checking if abr is enabled ([#88](https://github.com/kaltura/playkit-js/issues/88)) ([8209447](https://github.com/kaltura/playkit-js/commit/8209447))
* **config:** prepare media source adapters config ([#75](https://github.com/kaltura/playkit-js/issues/75)) ([45cdfe8](https://github.com/kaltura/playkit-js/commit/45cdfe8))
* **docs:** add readme and templates ([#91](https://github.com/kaltura/playkit-js/issues/91)) ([9326026](https://github.com/kaltura/playkit-js/commit/9326026))
* **middleware:** create middleware framework ([#78](https://github.com/kaltura/playkit-js/issues/78)) ([1595c5c](https://github.com/kaltura/playkit-js/commit/1595c5c))
* **playback config:** handling of playback configuration and stream priority ([#70](https://github.com/kaltura/playkit-js/issues/70)) ([d5cc5b6](https://github.com/kaltura/playkit-js/commit/d5cc5b6))
* **player:** get active tracks api ([#77](https://github.com/kaltura/playkit-js/issues/77)) ([de057da](https://github.com/kaltura/playkit-js/commit/de057da))
* **player:** hide text track api ([#68](https://github.com/kaltura/playkit-js/issues/68)) ([2c51948](https://github.com/kaltura/playkit-js/commit/2c51948))
* **player:** player dom attach and change media ([#73](https://github.com/kaltura/playkit-js/issues/73)) ([893ee93](https://github.com/kaltura/playkit-js/commit/893ee93))
* **player:** ready promise ([#66](https://github.com/kaltura/playkit-js/issues/66)) ([fcd6079](https://github.com/kaltura/playkit-js/commit/fcd6079))
* ads api and ad progress event ([#86](https://github.com/kaltura/playkit-js/issues/86)) ([046e9cc](https://github.com/kaltura/playkit-js/commit/046e9cc))
* **player:** report first play event ([#61](https://github.com/kaltura/playkit-js/issues/61)) ([c2442b1](https://github.com/kaltura/playkit-js/commit/c2442b1))
* **playerApi:** expose playbackRate control ([15258e1](https://github.com/kaltura/playkit-js/commit/15258e1))
* **start time:** support configure optional time to start the video from ([#82](https://github.com/kaltura/playkit-js/issues/82)) ([6de233b](https://github.com/kaltura/playkit-js/commit/6de233b))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/kaltura/playkit-js/compare/v0.1.0...v0.2.0) (2017-06-18)


### Bug Fixes

* **mse adapter:** change mse adapter api from name to id due to minified issues ([#56](https://github.com/kaltura/playkit-js/issues/56)) ([8be0401](https://github.com/kaltura/playkit-js/commit/8be0401))
* **native adapter:** implement enableAdaptiveBitrate method ([#59](https://github.com/kaltura/playkit-js/issues/59)) ([90f3027](https://github.com/kaltura/playkit-js/commit/90f3027))


### Features

* **events:** tracks events and adaptive bitrate api ([#53](https://github.com/kaltura/playkit-js/issues/53)) ([0867479](https://github.com/kaltura/playkit-js/commit/0867479))
* **logger:** export logger factory ([#50](https://github.com/kaltura/playkit-js/issues/50)) ([b29b2f1](https://github.com/kaltura/playkit-js/commit/b29b2f1))
* **player:** handle creation of player without initial config ([#46](https://github.com/kaltura/playkit-js/issues/46)) ([e2204a5](https://github.com/kaltura/playkit-js/commit/e2204a5))
* **tracks:** add tracks framework ([#40](https://github.com/kaltura/playkit-js/issues/40)) ([f5152bb](https://github.com/kaltura/playkit-js/commit/f5152bb))



<a name="0.1.0"></a>
# 0.1.0 (2017-05-30)


### Bug Fixes

* export base plugin via playkit ([#18](https://github.com/kaltura/playkit-js/issues/18)) ([34d6b3a](https://github.com/kaltura/playkit-js/commit/34d6b3a))
* **engine interface:** fix typo in engine interface ([#31](https://github.com/kaltura/playkit-js/issues/31)) ([d9af61c](https://github.com/kaltura/playkit-js/commit/d9af61c))
* logger tests ([#30](https://github.com/kaltura/playkit-js/issues/30)) ([a47f734](https://github.com/kaltura/playkit-js/commit/a47f734))
* set node_env=test in npm scripts ([9f8b786](https://github.com/kaltura/playkit-js/commit/9f8b786))
* **media source adapter:** fix implementation due to flow errors ([#34](https://github.com/kaltura/playkit-js/issues/34)) ([3fff26b](https://github.com/kaltura/playkit-js/commit/3fff26b))
* **player states:** add transition for replay ([#35](https://github.com/kaltura/playkit-js/issues/35)) ([42a841e](https://github.com/kaltura/playkit-js/commit/42a841e))


### Features

* **media-source-adapters:** add media source adapters framework ([#11](https://github.com/kaltura/playkit-js/issues/11)) ([79df295](https://github.com/kaltura/playkit-js/commit/79df295))
* **player states:** add player state machine and dispatch state changed event ([#32](https://github.com/kaltura/playkit-js/issues/32)) ([e89f6d1](https://github.com/kaltura/playkit-js/commit/e89f6d1))
* **utils:** add http and string utils ([173908e](https://github.com/kaltura/playkit-js/commit/173908e))



<a name="0.0.1"></a>
## 0.0.1 (2017-03-16)


### Bug Fixes

* **karma:** add in karma conf inline source map ([#13](https://github.com/kaltura/playkit-js/issues/13)) ([d6e0ffc](https://github.com/kaltura/playkit-js/commit/d6e0ffc))


### Features

* **Playback:** initial playback support ([7ef4a7b](https://github.com/kaltura/playkit-js/commit/7ef4a7b))
* **Logger:** add a logger ([3c82ba7](https://github.com/kaltura/playkit-js/commit/3c82ba7))
* **plugin-framework:** add plugin framework ([b1f170d](https://github.com/kaltura/playkit-js/commit/b1f170d))
