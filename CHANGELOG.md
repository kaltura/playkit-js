# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.6.1"></a>
## [0.6.1](https://github.com/kaltura/playkit-js/compare/v0.6.0...v0.6.1) (2017-09-11)


### Bug Fixes

* **FEC-7108:** native load video element for video sibling on mobile ([#109](https://github.com/kaltura/playkit-js/issues/109)) ([aec8bdd](https://github.com/kaltura/playkit-js/commit/aec8bdd))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/kaltura/playkit-js/compare/v0.4.1...v0.6.0) (2017-09-07)


### Features

* allow send initial volume in the player config ([#107](https://github.com/kaltura/playkit-js/issues/107)) ([a8baf1d](https://github.com/kaltura/playkit-js/commit/a8baf1d))
* allow setting native hls and dash playback ([#106](https://github.com/kaltura/playkit-js/issues/106)) ([b24b7ea](https://github.com/kaltura/playkit-js/commit/b24b7ea))
* drm ([#101](https://github.com/kaltura/playkit-js/issues/101)) ([1ade0da](https://github.com/kaltura/playkit-js/commit/1ade0da))
* live playback support ([#102](https://github.com/kaltura/playkit-js/issues/102)) ([ef9d97d](https://github.com/kaltura/playkit-js/commit/ef9d97d))



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
* **engine interface:** fix typo in engine interface ([#31](https://github.com/kaltura/playkit-js/issues/31)) ([fd8360b](https://github.com/kaltura/playkit-js/commit/fd8360b))
* **get config:** return copy of player config ([#89](https://github.com/kaltura/playkit-js/issues/89)) ([b395082](https://github.com/kaltura/playkit-js/commit/b395082))
* **karma:** add in karma conf inline source map ([#13](https://github.com/kaltura/playkit-js/issues/13)) ([ca8ecc3](https://github.com/kaltura/playkit-js/commit/ca8ecc3))
* **media source adapter:** fix implementation due to flow errors ([#34](https://github.com/kaltura/playkit-js/issues/34)) ([4ced315](https://github.com/kaltura/playkit-js/commit/4ced315))
* **mse adapter:** change mse adapter api from name to id due to minified issues ([#56](https://github.com/kaltura/playkit-js/issues/56)) ([4dede78](https://github.com/kaltura/playkit-js/commit/4dede78))
* **native adapter:** implement enableAdaptiveBitrate method ([#59](https://github.com/kaltura/playkit-js/issues/59)) ([84cff2b](https://github.com/kaltura/playkit-js/commit/84cff2b))
* export base plugin via playkit ([#18](https://github.com/kaltura/playkit-js/issues/18)) ([aad7023](https://github.com/kaltura/playkit-js/commit/aad7023))
* **player:** change media ([#85](https://github.com/kaltura/playkit-js/issues/85)) ([a97762b](https://github.com/kaltura/playkit-js/commit/a97762b))
* extend source type and allow nullable it ([#92](https://github.com/kaltura/playkit-js/issues/92)) ([d23e523](https://github.com/kaltura/playkit-js/commit/d23e523))
* **native-player:** handle progressive sources ([#79](https://github.com/kaltura/playkit-js/issues/79)) ([b5ace47](https://github.com/kaltura/playkit-js/commit/b5ace47))
* **player:** fire source selected as array ([#87](https://github.com/kaltura/playkit-js/issues/87)) ([073f50c](https://github.com/kaltura/playkit-js/commit/073f50c))
* **player:** fix destroy method ([#71](https://github.com/kaltura/playkit-js/issues/71)) ([95da854](https://github.com/kaltura/playkit-js/commit/95da854))
* logger tests ([#30](https://github.com/kaltura/playkit-js/issues/30)) ([faf43a0](https://github.com/kaltura/playkit-js/commit/faf43a0))
* **player states:** add transition for replay ([#35](https://github.com/kaltura/playkit-js/issues/35)) ([6072068](https://github.com/kaltura/playkit-js/commit/6072068))
* **webpack:** change devtool module filename template to relative path ([#65](https://github.com/kaltura/playkit-js/issues/65)) ([af00b3b](https://github.com/kaltura/playkit-js/commit/af00b3b))
* remove black background and add start time to load() api of msa ([#84](https://github.com/kaltura/playkit-js/issues/84)) ([23e3991](https://github.com/kaltura/playkit-js/commit/23e3991))
* set node_env=test in npm scripts ([f7f5891](https://github.com/kaltura/playkit-js/commit/f7f5891))


### Features

* **abr:** add api for checking if abr is enabled ([#88](https://github.com/kaltura/playkit-js/issues/88)) ([8209447](https://github.com/kaltura/playkit-js/commit/8209447))
* **config:** prepare media source adapters config ([#75](https://github.com/kaltura/playkit-js/issues/75)) ([45cdfe8](https://github.com/kaltura/playkit-js/commit/45cdfe8))
* **docs:** add readme and templates ([#91](https://github.com/kaltura/playkit-js/issues/91)) ([9326026](https://github.com/kaltura/playkit-js/commit/9326026))
* **events:** tracks events and adaptive bitrate api ([#53](https://github.com/kaltura/playkit-js/issues/53)) ([5299f33](https://github.com/kaltura/playkit-js/commit/5299f33))
* **logger:** export logger factory ([#50](https://github.com/kaltura/playkit-js/issues/50)) ([ebcdbb1](https://github.com/kaltura/playkit-js/commit/ebcdbb1))
* **Logger:** add a logger ([5480a27](https://github.com/kaltura/playkit-js/commit/5480a27))
* **media-source-adapters:** add media source adapters framework ([#11](https://github.com/kaltura/playkit-js/issues/11)) ([05255c5](https://github.com/kaltura/playkit-js/commit/05255c5))
* **middleware:** create middleware framework ([#78](https://github.com/kaltura/playkit-js/issues/78)) ([1595c5c](https://github.com/kaltura/playkit-js/commit/1595c5c))
* **playback config:** handling of playback configuration and stream priority ([#70](https://github.com/kaltura/playkit-js/issues/70)) ([d5cc5b6](https://github.com/kaltura/playkit-js/commit/d5cc5b6))
* **player:** get active tracks api ([#77](https://github.com/kaltura/playkit-js/issues/77)) ([de057da](https://github.com/kaltura/playkit-js/commit/de057da))
* **player:** handle creation of player without initial config ([#46](https://github.com/kaltura/playkit-js/issues/46)) ([bd5922e](https://github.com/kaltura/playkit-js/commit/bd5922e))
* **player:** hide text track api ([#68](https://github.com/kaltura/playkit-js/issues/68)) ([2c51948](https://github.com/kaltura/playkit-js/commit/2c51948))
* **player:** player dom attach and change media ([#73](https://github.com/kaltura/playkit-js/issues/73)) ([893ee93](https://github.com/kaltura/playkit-js/commit/893ee93))
* **player:** ready promise ([#66](https://github.com/kaltura/playkit-js/issues/66)) ([fcd6079](https://github.com/kaltura/playkit-js/commit/fcd6079))
* ads api and ad progress event ([#86](https://github.com/kaltura/playkit-js/issues/86)) ([046e9cc](https://github.com/kaltura/playkit-js/commit/046e9cc))
* **player:** report first play event ([#61](https://github.com/kaltura/playkit-js/issues/61)) ([c2442b1](https://github.com/kaltura/playkit-js/commit/c2442b1))
* **player states:** add player state machine and dispatch state changed event ([#32](https://github.com/kaltura/playkit-js/issues/32)) ([406a76e](https://github.com/kaltura/playkit-js/commit/406a76e))
* **playerApi:** expose playbackRate control ([15258e1](https://github.com/kaltura/playkit-js/commit/15258e1))
* **plugin-framework:** add plugin framework ([1ce8ffd](https://github.com/kaltura/playkit-js/commit/1ce8ffd))
* **start time:** support configure optional time to start the video from ([#82](https://github.com/kaltura/playkit-js/issues/82)) ([6de233b](https://github.com/kaltura/playkit-js/commit/6de233b))
* **tracks:** add tracks framework ([#40](https://github.com/kaltura/playkit-js/issues/40)) ([80579e8](https://github.com/kaltura/playkit-js/commit/80579e8))
* **utils:** add http and string utils ([5599438](https://github.com/kaltura/playkit-js/commit/5599438))



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
* **karma:** add in karma conf inline source map ([#13](https://github.com/kaltura/playkit-js/issues/13)) ([d6e0ffc](https://github.com/kaltura/playkit-js/commit/d6e0ffc))
* logger tests ([#30](https://github.com/kaltura/playkit-js/issues/30)) ([a47f734](https://github.com/kaltura/playkit-js/commit/a47f734))
* set node_env=test in npm scripts ([9f8b786](https://github.com/kaltura/playkit-js/commit/9f8b786))
* **media source adapter:** fix implementation due to flow errors ([#34](https://github.com/kaltura/playkit-js/issues/34)) ([3fff26b](https://github.com/kaltura/playkit-js/commit/3fff26b))
* **player states:** add transition for replay ([#35](https://github.com/kaltura/playkit-js/issues/35)) ([42a841e](https://github.com/kaltura/playkit-js/commit/42a841e))


### Features

* **Logger:** add a logger ([3c82ba7](https://github.com/kaltura/playkit-js/commit/3c82ba7))
* **media-source-adapters:** add media source adapters framework ([#11](https://github.com/kaltura/playkit-js/issues/11)) ([79df295](https://github.com/kaltura/playkit-js/commit/79df295))
* **player states:** add player state machine and dispatch state changed event ([#32](https://github.com/kaltura/playkit-js/issues/32)) ([e89f6d1](https://github.com/kaltura/playkit-js/commit/e89f6d1))
* **plugin-framework:** add plugin framework ([b1f170d](https://github.com/kaltura/playkit-js/commit/b1f170d))
* **utils:** add http and string utils ([173908e](https://github.com/kaltura/playkit-js/commit/173908e))



<a name="0.0.1"></a>
## 0.0.1 (2017-03-16)


### Bug Fixes

* **karma:** add in karma conf inline source map ([#13](https://github.com/kaltura/playkit-js/issues/13)) ([d6e0ffc](https://github.com/kaltura/playkit-js/commit/d6e0ffc))


### Features

* **Playback:** initial playback support ([7ef4a7b](https://github.com/kaltura/playkit-js/commit/7ef4a7b))
* **Logger:** add a logger ([3c82ba7](https://github.com/kaltura/playkit-js/commit/3c82ba7))
* **plugin-framework:** add plugin framework ([b1f170d](https://github.com/kaltura/playkit-js/commit/b1f170d))
