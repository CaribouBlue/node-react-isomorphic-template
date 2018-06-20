const path = require('path');

module.exports = [{
	entry: './src/client/index.jsx',
	output: {
		path: path.join(__dirname, 'static/js'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [ 
					'style-loader',
					'css-loader',
					'sass-loader'
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
}];