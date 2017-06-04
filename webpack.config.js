'use strict';

const webpack = require("webpack");
const path = require("path");
const libraryName = "Playkit";
const PROD = (process.env.NODE_ENV === 'production');

let plugins = PROD ? [new webpack.optimize.UglifyJsPlugin({sourceMap: true})] : [];

module.exports = {
  context: __dirname + "/src",
  entry: {
    playkit: "playkit.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  plugins: plugins,
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: "babel-loader"
      }],
      exclude: [
        /node_modules/
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: 'pre',
      use: [{
        loader: 'eslint-loader',
        options: {
          rules: {
            semi: 0
          }
        }
      }],
    }]
  },
  devServer: {
    contentBase: __dirname + "/src"
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ]
  }
};
