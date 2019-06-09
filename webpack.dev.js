/* eslint-env node, mocha */
const path = require('path');
const webpack = require('webpack');
const PATH_SRC = path.resolve(__dirname, 'src');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './',
    watchContentBase: true,
    disableHostCheck: true,
    compress: true,
    hot: true,
    port: '8079',
    // proxy: [{
    //   context: ['/users', '/messages', '/submit', '/subscribe'],
    //   target: 'http://localhost:9071',
    // }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});