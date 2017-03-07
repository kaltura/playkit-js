'use strict';

const webpack = require("webpack");
const path = require("path");

const libraryName = "Playkit";
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
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    // options: { presets: ["es2015"] }
                }],
                exclude: [/node_modules/]
            },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            enforce: 'pre',
            use: [{loader: 'eslint-loader', options: {rules: {semi: 0}}}],
          }
        ]
    },
    devServer: {
        contentBase: __dirname + "/src"
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
};
