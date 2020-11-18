const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Custom template',
			filename: './index.html',
			template: '../public/index.html'
		}),
		new StyleLintPlugin({
			fix: true,
			files: [
				'src/less/*.{css,sss,less,scss,sass}'
			]
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.less$/,
				exclude: [ '/node_modules/', '/src/libs/'],
				use: [ 'style-loader', 'css-loader', {
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [
								[ 'postcss-preset-env' ],
							],
						},
					} }, 'less-loader' ]
			},
			{
				test: /\.svg$/,
				use: [{
					loader: 'svg-url-loader',
					options: {
						limit: 10000,
					},
				}],
			},
		]
	}
};
