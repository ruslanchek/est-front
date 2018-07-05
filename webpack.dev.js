const path = require('path');
const webpack = require('webpack');
const HandlebarsPlugin = require('handlebars-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const port = 5656;
const host = '0.0.0.0';
const production = process.env.NODE_ENV === 'production';

let plugins = [
	new CleanWebpackPlugin(['dist'], {
		verbose: true,
	}),
	new webpack.NamedModulesPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new HandlebarsPlugin({
		entry: path.join(process.cwd(), 'src/app/hbs', '*.hbs'),
		output: path.join(process.cwd(), 'dist', '[name].html'),
		data: {
			publicPath: '/',
		},
	}),
];

module.exports = {
	cache: true,

	entry: {
		app: [
			'webpack-dev-server/client?http://' + host + ':' + port,
			'webpack/hot/only-dev-server',
			'./src/app/ts/app.ts',
		],
	},

	output: {
		filename: '[name].js',
		publicPath: '/',
		path: __dirname + '/dist',
	},

	watch: true,

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: false,
		index: 'main.html',
		disableHostCheck: true,
		hot: true,
		stats: true,
		historyApiFallback: {
			index: '/main.html',
		},
		overlay: {
			warnings: true,
			errors: true,
		},
		host: host,
		port: port,
		watchOptions: {
			poll: true,
		},
	},

	devtool: 'source-map',

	resolve: {
		unsafeCache: true,
		extensions: [
			'.webpack.js',
			'.ts',
			'.tsx',
			'.js',
		],
		modules: [
			'node_modules',
			__dirname + '/src/chart/ts',
			__dirname + '/src/app/ts',
		],
		plugins: [
			new TsConfigPathsPlugin(),
		],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loaders: [
					'awesome-typescript-loader',
				],
				exclude: ['node_modules'],
				include: [
					path.resolve(__dirname, 'src/chart/ts'),
					path.resolve(__dirname, 'src/app/ts'),
				],
			},

			{
				test: /\.glsl$/,
				loader: 'webpack-glsl-loader',
			},

			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
				exclude: [/node_modules/, /build/, /__test__/],
			},

			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				loaders: [
					'file-loader',
				],
			},
		],
	},

	plugins: plugins,
};