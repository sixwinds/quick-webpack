// utils
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
// plugins
const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' );
// configs
const common = require( './webpack.common.js' );

/* --------------------------- main ---------------------------- */
module.exports = merge( common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin( {
      sourceMap: true
    } ),
    new webpack.DefinePlugin( {
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    } )
  ]
} );