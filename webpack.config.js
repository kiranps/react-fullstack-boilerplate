var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:9001',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.(png|jpg|svg)(\?v=\d+\.\d+\.\d+)?/,
      loader: ['url-loader?limit=100000&mimetype=image/png&name=images/[name].[ext]', 'react-hot']
    },
    {
      test: /\.(eot|svg|otf|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?/,
      loader: ['file?name=fonts/[name].[ext]', 'react-hot']
    },
    {
      test: /\.css$/,
      loaders: ['react-hot', 'style', 'css'],
    }]
  }
};
