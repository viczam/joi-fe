var webpack = require('webpack');

module.exports = {
  entry: './src/joi',
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'joi.js',
    libraryTarget: 'commonjs2'
  },
  node: {
    crypto: 'empty',
    net: 'empty',
    dns: 'empty'
  }
};
