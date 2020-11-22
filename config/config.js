const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const utils = require('../helpers/utils');
const path = require('path');

module.exports = (env, argv) => {

	// Choose the dotenv from the webpack mode
	require('dotenv').config({ path: './env/.env.' + utils.mode(argv.mode) });

	return {
		entry: path.resolve(__dirname, './../src/index.tsx'),
		output: {
		  path: path.resolve(__dirname, './../build'),
		  filename: 'index.js',
		},
		resolve: {
			extensions: [ '.tsx', '.ts', '.js' ],
			alias: {
				src: path.resolve(__dirname, './../src')
			},
		},
		plugins: [
			new FriendlyErrorsWebpackPlugin(),
			new ESLintPlugin({
				fix: true,
				files: [
					'src/*.js',
					'src/*.tsx',
					'src/*.html'
				],
				extensions: [ 'js', 'tsx', 'html' ]
			}),
			new StyleLintPlugin({
				fix: true,
				files: [
					'src/less/*.{css,sss,less,scss,sass}'
				]
			}),
			new HtmlWebpackPlugin({
				title: 'Custom template',
				filename: 'index.html',
				template: 'src/index.html'
			}),
		],
		devServer: {
			contentBase: path.resolve(__dirname, '../build'),
		},
		module: {
			rules: [
				{
					test: /\.html$/,
					loader: 'html-loader'
				},
				{
		           test: /\.(ts|tsx)$/,
		           loader: "awesome-typescript-loader",
		         },
				{
					  test: /\.m?js$/,
					  exclude: /node_modules/,
					  use: {
						loader: 'babel-loader',
						options: {
						  presets: [
							['@babel/preset-env', { targets: "defaults" }]
						  ]
						}
					  }
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
				}
			]
		}
	}
};
