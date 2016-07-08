var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name]-[hash].min.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
      favicon: './src/assets/images/favicon.ico?v=1'
    }),
  ],
  module: {
    loaders: [    
      {
        test: /\.(png|jpg|svg)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader?limit=100000&mimetype=image/png&name=images/[name].[ext]'
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      { 
        test: /\.js$/, 
        loader: 'babel',
        query: { presets: ['es2015', 'react', 'stage-0', 'stage-1'] },
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/, 
      }
    ]
  }
};
