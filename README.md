# PlayKit JS - State of the art HTML5 player

[![Build Status](https://travis-ci.com/kaltura/playkit-js.svg?token=s2ZQw18ukx9Q6ePzDX3F&branch=master)](https://travis-ci.com/kaltura/playkit-js)

PlayKit JS is an opinionated JavaScript library to enable seamless video playback across browsers and platforms with support for advanced streaming formats.

It leverages on HTML5 video, MediaSource Extensions and Encrypted Media Extensions for playback of clear and DRM protected video.

PlayKit JS goal is to make it as easy as possible to stream adaptive bitrate video and audio using modern browser technologies (although we do support progressive :-))

PlayKit JS is the core library to facilitate the handling of different playback formats and features with one interface.
The library exposes a mechanisem to extend its capabilities via plugins and adapters.

PlayKit JS is written in [ECMAScript6], staticaly anlaysed using [Flow] and transpiled in ECMAScript5 using [Babel].

[Flow]: https://flow.org/
[ECMAScript6]: https://github.com/ericdouglas/ES6-Learning#articles--tutorials
[Babel]: https://babeljs.io

## Getting Started


### Installing

First, clone and run [yarn] to install dependencies:

[yarn]: https://yarnpkg.com/lang/en/

```
git clone https://github.com/kaltura/playkit-js.git
cd playkit-js
yarn install
```

### Building

Then, build the player

```javascript
yarn run build
```

### Embed the player in your test page

Finally, add the bundle as a script tag in your page, and initialize the player

```html
<script type="text/javascript" src="/PATH/TO/FILE/playkit.js"></script>
<div id="videoContainer" style="height:360px;width:640px">
<script type="text/javascript">
var config = {...};
var player = Playkit.loadPlayer("videoContainer", config);
player.play();
</script>
```

## Running the tests

Tests can be run localy via [Karma], which will run on Chrome, Firefox and Safari

[Karma]: https://karma-runner.github.io/1.0/index.html
```
yarn run test
```

You can test individual browsers:
```
yarn run test:chrome
yarn run test:firefox
yarn run test:safari
```

### And coding style tests

We use ESLint [recommended set](http://eslint.org/docs/rules/) with some additions for enforcing [Flow] types and other rules.

See [ESLint config](.eslintrc.json) for full configuration.

We also use [.editorconfig](.editorconfig) to maintain consistent coding styles and settings, please make sure you comply with the styling.


## Compatibility

TBD

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/kaltura/playkit-js/tags). 

## License

This project is licensed under the AGPL-3.0 License - see the [LICENSE.md](LICENSE.md) file for details
