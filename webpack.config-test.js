var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

const coverage = process.env.NODE_ENV === 'coverage';

var config = {
  mode: "development",
  resolve: {
    modules: [path.resolve('./src'), "node_modules"],
    extensions: ['.js'],
  },
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  module: {
    rules: [
      // use babel-loader for js files
      // { test: /\.js$/, use: 'babel-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      // use vue-loader for .vue files
      { test: /\.vue$/, use: 'vue-loader' }
    ]
    // loaders: [].concat(
    //   {
    //     test: /.js$/,
    //     exclude: /(node_modules|bower_components)/,
    //     loader: 'babel-loader',
    //   },
    //   // {
    //   //   test: /.js$/,
    //   //   exclude: /(node_modules|bower_components)/,
    //   //   loader: 'eslint-loader',
    //   // },
    //   // {
    //   //   test: /.json$/,
    //   //   loader: 'json-loader',
    //   // },
    //   // normally you should replace all css loaders with null loader
    //   {
    //     test: /\.scss$/,
    //     loaders: ['fake-style-loader', 'css-loader?importLoaders=1', 'sass-loader']
    //   }
    // ),
  },
  plugins: [],
  // target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  // devtool: "#inline-cheap-module-source-map"
};

module.exports = config;
