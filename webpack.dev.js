const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        option: {
          emitError: true
        }
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'postcss-loader']
      }
    ]
  }
});
