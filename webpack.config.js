const path = require('path');
const webpack = require('webpack');
const buildDirName = 'dist'
const myLibName = 'cgHtmlUtils';



module.exports = {
	mode: 'production',
	entry: `./src/${myLibName}.js`,
	output: {
		path: path.resolve(__dirname, buildDirName),
		filename: `${myLibName}.min.js`,
		libraryTarget: 'umd',
		library: `${myLibName}`
	},

	plugins: [
		new webpack.ProgressPlugin(),
	],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: true
	}
};
