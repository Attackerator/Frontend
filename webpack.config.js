const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

require('dotenv').config();

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/, use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader'],
          publicPath: '/'
        })
      },
      {
        test: /\.js$/,
        exclude:  /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    stats: 'errors-only'
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      API_URL: JSON.stringify(process.env.API_URL)
    }),
    new HtmlWebpackPlugin({
      title: 'Attackerator',
      minify: {
        collapseWhitespace: false
      },
      template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    }),
    new ExtractTextPlugin({
      filename: 'style/main.css',
      disable: false,
      allChunks: true
    })
  ]
};
