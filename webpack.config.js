const path = require('path');

const babelLoader = {
  test: /\.js$/,
  use: {
    loader: 'babel-loader',
  },
};

const serverConfig = {
  mode: 'development',
  target: 'node',
  entry: {
    server: './src/server',
  },
  output: {
    libraryTarget: 'commonjs',
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [babelLoader],
  },
};

const clientConfig = {
  mode: 'development',
  entry: {
    client: './src/client',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [babelLoader],
  },
};

module.exports = [serverConfig, clientConfig];
