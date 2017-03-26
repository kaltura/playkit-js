module.exports = function (config) {
  // Create custom launcher in case running with Travis
  const customLaunchers = {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  };

  let karmaConf = {
    logLevel: config.LOG_INFO,
    // Run in Chrome
    browsers: ['Chrome'],
    // Just run once by default
    singleRun: true,
    // Use the mocha test framework
    frameworks: ['mocha'],
    files: [
      'test/setup/karma.js'
    ],
    exclude: ['src/declarations/**/*.js'],
    preprocessors: {
      // Preprocess with webpack and our sourcemap loader
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/setup/karma.js': ['webpack', 'sourcemap']
    },
    // Report results in this format
    reporters: ['progress', 'coverage'],
    // Kind of a copy of your webpack config
    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [{
          test: /\.js$/,
          use: [{
            loader: "babel-loader"
          }],
          exclude: [/node_modules/]
        }]
      }
    },
    webpackServer: {
      noInfo: true // Please don't spam the console when running in karma!
    },
    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: 'html'
      }
    }
  };

  if (process.env.TRAVIS) {
    karmaConf.customLaunchers = customLaunchers;
    karmaConf.browsers = ['Chrome_travis_ci'];
  }

  config.set(karmaConf);
};
