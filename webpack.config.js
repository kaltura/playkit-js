const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const packageData = require('./package.json');
const TerserPlugin = require('terser-webpack-plugin');
const chalk = require('chalk');

module.exports = (env, { mode }) => {
  return {
    // target: 'web',
    entry: {
      [`playkit.js`]: './src/playkit.ts',
      [`playkit.mjs`]: './src/playkit.ts'
    },
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
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {
                loose: true,
                bugfixes: true,
                targets: 'defaults'
              }], '@babel/preset-typescript'],
              plugins: [['@babel/plugin-transform-runtime']]
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
      filename: '[name]',
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
