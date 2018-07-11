const webpack              = require('webpack');
const merge                = require('webpack-merge');
const WebpackPluginCopy    = require('webpack-plugin-copy');
const WebpackCleanPlugin   = require('webpack-clean-plugin');
const path                 = require('path');

const devserver            = require('./webpack/devserver');
const sass                 = require('./webpack/sass');
const css                  = require('./webpack/css');
const extractCSS           = require('./webpack/css.extract');
const uglifyJS             = require('./webpack/js.uglify');
const images               = require('./webpack/images');
const js                   = require('./webpack/js');
const prodPlugins          = require('./webpack/prod.plugins');
const devPlugins           = require('./webpack/dev.plugins');


const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin 	   = require('webpack-manifest-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const publicPath         = 'http://localhost:8050/public/assets';
const cssName            = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';
const jsName             = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';


const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build'),
    public: path.join(__dirname, 'public')
};

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  new webpack.optimize.UglifyJsPlugin(),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
      new CleanWebpackPlugin([ './public/assets/' ], {
          root: __dirname,
          verbose: true,
          dry: false
      })
  );
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.OccurenceOrderPlugin());
  plugins.push(new ManifestPlugin({
    fileName: "../../src/manifest.json"
  }));
}

const common = merge([
  {
        entry: {
            'index': PATHS.src + '/client.js',
        },

        output: {
          path: `${__dirname}/public/assets/`,
          filename: jsName,
          publicPath
        },

        plugins,

        resolve: {
          extensions: ['.js', '.jsx'],
        }
    },
    images(),
    js()
])

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            prodPlugins(),
            extractCSS(),
            uglifyJS()
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devPlugins(),
            devserver(),
            sass(),
            css(),
        ]);
    }
}
