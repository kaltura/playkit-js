module.exports = function (config) {
  config.set({
    // Run in Chrome
    browsers: ['Chrome'],

    // Just run once by default
    singleRun: true,

    // Use the mocha test framework
    frameworks: ['mocha'],

    files: [
      'tests.webpack.js' // Just load this file
    ],

    preprocessors: {
      // Preprocess with webpack and our sourcemap loader
      'tests.webpack.js': ['webpack', 'sourcemap']
    },


    // Report results in this format
    reporters: ['dots'],

    // Kind of a copy of your webpack config
    webpack: {
      devtool: 'inline-source-map', // Just do inline source maps instead of the default
      module: {
        loaders: [
          {test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/]}
        ]
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
  });
};
