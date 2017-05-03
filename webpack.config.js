var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var BUILD_DIR = path.resolve(__dirname, 'public/scripts');
var APP_DIR = path.resolve(__dirname, 'src/');

// This config was shamelessly stolen from https://github.com/olin/register

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    // The location on the public path of your bundle file
    publicPath: '/scripts'
  },

  // Avoid an error when loading node's fs module
  node: {
    fs: 'empty'
  },

  module: {
    loaders: [
      // eslint loader
      {
        // lint before transforming code
        enforce: 'pre',
        // only test js and jsx files
        test: [/\.js$/, /\.jsx$/],
        // don't compile node modules or server-side code
        include: APP_DIR,
        loader: 'eslint-loader'
      },
      // babel javascript loader converts jsx or js files to es5 javascript
      {
        // only test js and jsx files
        test: [/\.js$/, /\.jsx$/],
        // don't compile node modules or server side code
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          // use es6 and/or jsx syntax
          presets: ['react', 'es2015'],
          // make output more concise
          plugins: ['transform-runtime']
        }
      },
    // css loader
    // this version runs postcss to add vendor prefixes and uses the CSS module pattern
    // More information about the CSS Module pattern can be found:
    // https://glenmaddern.com/articles/css-modules
    // https://github.com/css-modules/css-modules
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },

      // loader for .png and .jpg files
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192&name=./public/images/[hash].[ext]'
      }
    ]
  },

  // set where we the css bundle gets extracted to
  plugins: [
    new ExtractTextPlugin('./public/stylesheets/styles.css'),
    new webpack.LoaderOptionsPlugin({
      options: {
        // configure the postcss loader to use autoprefixer
        postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
      }
    })
  ],

  resolve: {
    // look for modules in node_modules and the client directory for imports
    modules: [
      path.join(__dirname, ''),
      'node_modules',
      'client'
    ],
    // resolve below file types
    extensions: ['.js', '.jsx', 'css']
  }
};

module.exports = config;
