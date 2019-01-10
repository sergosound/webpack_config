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
        test: /\.pug$/,
        use: ['html-loader', 'pug-html-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  plugins: [ 
    new ExtractTextPlugin(
      {filename: 'css/style.css'}
    ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './app/pug/index.pug',
      filename: 'index.html'
    })
  ]
};