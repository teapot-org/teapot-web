const path = require('path');

const PORT = 8050;

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader'],
      },
    ],
  },

  devServer: {
    port: PORT,
  },
};
