const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const packageData = require('./package.json');
const TerserPlugin = require('terser-webpack-plugin');
const chalk = require('chalk');

module.exports = (env, { mode }) => {
  return {
    // target: 'web',
    // entry:  './src/playkit.ts',
    entry:  './src/playkit.js',
    optimization: {
      minimize: mode !== 'development',
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            format: {
              comments: false
            }
          }
        })
      ]
    },
    // devtool: 'source-map',
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          // test: /\.(ts|js)$/,
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {
                loose: true,
                bugfixes: true,
                "targets": {
                  "browsers": ["chrome >= 47", "firefox >= 51", "ie >= 11", "safari >= 8", "ios >= 8", "android >= 4"]
                }
              }], '@babel/preset-typescript'],
              plugins: [['@babel/plugin-transform-runtime']]
            }
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {
                loose: true,
                bugfixes: true,
                // targets: 'defaults'
                "targets": {
                  "browsers": ["chrome >= 47", "firefox >= 51", "ie >= 11", "safari >= 8", "ios >= 8", "android >= 4"]
                }
              }], '@babel/preset-flow']
            }
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      filename: 'playkit.js',
      path: path.resolve(__dirname, 'dist'),
      library: {
        umdNamedDefine: true,
        name: ['playkit', 'core'],
        type: 'umd',
      },
      clean: true
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'demo')
      },
      client: {
        progress: true
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        __VERSION__: JSON.stringify(packageData.version),
        __NAME__: JSON.stringify(packageData.name)
      })
    ]
  }
};
