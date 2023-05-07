// Create custom launcher in case running with Travis

const launchers = {
  Chrome_browser: {
    base: 'ChromeHeadless',
    flags: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--max-web-media-player-count=1000']
  }
};

module.exports = function (config) {
  let karmaConf = {
    logLevel: config.LOG_INFO,
    browserDisconnectTimeout: 30000,
    browserNoActivityTimeout: 60000,
    browsers: [],
    concurrency: 1,
    singleRun: true,
    colors: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/regenerator-runtime/runtime.js',
      'test/setup/karma.js',
      {
        pattern: 'test/src/assets/*',
        included: false
      }
    ],
    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/setup/karma.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha', 'coverage'],
    webpack: {
      ...require('./webpack.config.js'),
      externals: {}, //Need to remove externals otherwise they won't be included in test
      devtool: 'inline-source-map', // Need to define inline source maps when using karma
      mode: config.mode || 'development' // run in development mode by default to avoid minifying -> faster
    },
    webpackServer: {
      noInfo: true
    },
    client: {
      mocha: {
        reporter: 'html',
        timeout: 50000
      }
    }
  };

  karmaConf.customLaunchers = launchers;
  karmaConf.browsers = ['Chrome_browser'];
  config.set(karmaConf);
};
