const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'template-engine': './src/template-engine.js',
    'template-layout': './src/templates/template-layout.js',
    script: './src/script.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/templates/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: './src/templates/product.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'content-blocks.html',
      template: './src/templates/content-blocks.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'collect.html',
      template: './src/templates/collect.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'content.html',
      template: './src/templates/content.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new StyleLintPlugin({
      files: 'src/**/*.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  }
};
