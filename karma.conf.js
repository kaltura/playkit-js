let webpackConfig = require('./webpack.config.js');
// Need to remove externals otherwise they won't be included in test
delete webpackConfig.externals;
// Need to define inline source maps when using karma
webpackConfig.devtool = 'inline-source-map';

const isWindows = /^win/.test(process.platform);
const isMacOS = /^darwin/.test(process.platform);
// Create custom launcher in case running with Travis
const customLaunchers = {
  Chrome_travis_ci: {
    base: 'Chrome',
    flags: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required']
  }
};

module.exports = function(config) {
  let karmaConf = {
    logLevel: config.LOG_INFO,
    browserDisconnectTimeout: 30000,
    browserNoActivityTimeout: 60000,
    browsers: ['Chrome', 'Firefox'],
    concurrency: 1,
    singleRun: true,
    colors: true,
    frameworks: ['mocha'],
    files: [
      'test/setup/karma.js',
      {
        pattern: 'test/src/assets/mov_bbb.mp4',
        included: false
      },
      {
        pattern: 'test/src/assets/audios.mp4',
        included: false
      },
      {
        pattern: 'test/src/assets/en.vtt',
        included: false
      },
      {
        pattern: 'test/src/assets/he.vtt',
        included: false
      }
    ],
    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/setup/karma.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha', 'coverage'],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    client: {
      mocha: {
        reporter: 'html',
        timeout: 20000
      }
    }
  };

  if (process.env.TRAVIS) {
    karmaConf.customLaunchers = customLaunchers;
    karmaConf.browsers = ['Chrome_travis_ci'];
  } else {
    if (isWindows) {
      karmaConf.browsers.push('IE');
    } else if (isMacOS) {
      karmaConf.browsers.push('Safari');
    }
  }

  config.set(karmaConf);
};
