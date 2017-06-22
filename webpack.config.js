const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const IS_PRODUCTION = true;
const PORT = 8081;

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: IS_PRODUCTION ? '/' : '',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,

        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'teapot-web',
      template: './src/index.ejs',
      hash: true,
      minify: { collapseWhitespace: IS_PRODUCTION },
    }),

    new ExtractTextWebpackPlugin({ filename: 'styles.css' }),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: PORT,
    compress: IS_PRODUCTION,
    stats: 'errors-only',
    historyApiFallback: true,
  },
};
