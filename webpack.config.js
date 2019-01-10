// Webpack v4
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: { main: './app/js/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/script.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      }
    ]
  },
  plugins: [ 
    new ExtractTextPlugin(
      {filename: 'css/style.css'}
    ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      // template: './app/index.html',
      filename: 'index.html'
    })
  ]
};