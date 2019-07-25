const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'template-engine': path.resolve(__dirname, './src/template-engine.js'),
    'template-layout': path.resolve(__dirname, './src/templates/template-layout.js'),
    script: path.resolve(__dirname, './src/script.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, './res'), to: 'res' }]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/templates/index.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: path.resolve(__dirname, './src/templates/product.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'content-blocks.html',
      template: path.resolve(__dirname, './src/templates/content-blocks.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'collect.html',
      template: path.resolve(__dirname, './src/templates/collect.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'content.html',
      template: path.resolve(__dirname, './src/templates/content.html')
    }),
    new StyleLintPlugin({
      files: 'src/**/*.css'
    })
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      }
    ]
  }
};
