const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const WebpackOnBuildPlugin = require('on-build-webpack');
const buildDirName = 'dist'
const myLibName = 'cgHtmlUtils';

module.exports = {
  entry: `./src/${myLibName}.js`,
  output: {
    path: path.resolve(__dirname, buildDirName),
    filename: `${myLibName}.min.js`,
    libraryTarget: 'umd',
    library: `${myLibName}`
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    // to disable minification comment next line
    new webpack.optimize.UglifyJsPlugin(),
    new WebpackOnBuildPlugin(function (stats) {
      const newlyCreatedAssets = stats.compilation.assets;
      const buidPath = path.resolve(__dirname, buildDirName) + '/';

      const unlinked = [];
      fs.readdir(path.resolve(buidPath), (err, files) => {
        files.forEach(file => {
          if (!newlyCreatedAssets[file]) {
            fs.unlink(path.resolve(buidPath + file));
            unlinked.push(file);
          }
        });
        if (unlinked.length > 0) {
          console.log('Removed old assets: ', unlinked);
        }
      });
    })

  ]
}
