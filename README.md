# PlayKit JS - State of the Art HTML5 Player

[![Build Status](https://travis-ci.org/kaltura/playkit-js.svg?branch=master)](https://travis-ci.org/kaltura/playkit-js)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![](https://img.shields.io/npm/v/@playkit-js/playkit-js/latest.svg)](https://www.npmjs.com/package/@playkit-js/playkit-js)
[![](https://img.shields.io/npm/v/@playkit-js/playkit-js/canary.svg)](https://www.npmjs.com/package/@playkit-js/playkit-js/v/canary)

PlayKit JS is an opinionated JavaScript library to enable seamless video playback across browsers and platforms with support for advanced streaming formats.

It leverages on HTML5 video, MediaSource Extensions and Encrypted Media Extensions for playback of clear and DRM protected video.

PlayKit JS goal is to make it as easy as possible to stream adaptive bitrate video and audio using modern browser technologies (although we do support progressive :-))

PlayKit JS is the core library to facilitate the handling of different playback formats and features with one interface.
The library exposes a mechanism to extend its capabilities via plugins and adapters.

PlayKit JS is written in [ECMAScript6], statically analysed using [Flow] and transpiled in ECMAScript5 using [Babel].

[flow]: https://flow.org/
[ecmascript6]: https://github.com/ericdouglas/ES6-Learning#articles--tutorials
[babel]: https://babeljs.io

## Table of Contents

- [Getting Started](#getting-started)
  - [Installing](#installing)
  - [Building](#building)
  - [Embed the Player In Your Test Page](#embed-the-player-in-your-test-page)
- [Documentation](#documentation)
- [Running the Tests](#running-the-tests)
- [Compatibility](#compatibility)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [License](#license)

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

### Embed the Player In Your Test Page

Finally, add the bundle as a script tag in your page, and initialize the player

```html
<script type="text/javascript" src="/PATH/TO/FILE/playkit.js"></script>
<div id="player-placeholder" style="height:360px;width:640px">
  <script type="text/javascript">
    var playerContainer = document.querySelector("#player-placeholder");
    var config = {...};
    var player = playkit.core.loadPlayer(config);
    playerContainer.appendChild(player.getView());
    player.play();
  </script>
</div>
```

## Documentation

- **[Configuration](docs/configuration.md)**
- **API**

## Running the Tests

Tests can be run locally via [Karma], which will run on Chrome, Firefox and Safari.

[karma]: https://karma-runner.github.io/1.0/index.html

```
yarn run test
```

You can test individual browsers:

```
yarn run test:chrome
yarn run test:firefox
yarn run test:safari
```

### And Coding Style Tests

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
