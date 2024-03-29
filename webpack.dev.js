const path = require('path');
const webpack = require('webpack');
const HandlebarsPlugin = require('handlebars-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const port = 5656;
const host = '0.0.0.0';

let plugins = [
	new CleanWebpackPlugin(['dist'], {
		verbose: true,
	}),
	// new ErrorOverlayPlugin(),
	new webpack.NamedModulesPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new HandlebarsPlugin({
		entry: path.join(process.cwd(), 'src/app/hbs', '*.hbs'),
		output: path.join(process.cwd(), 'dist', '[name].html'),
		data: {
			publicPath: '/',
		},
	}),
	new BundleAnalyzerPlugin(),
	// new HardSourceWebpackPlugin(),
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
		index: 'index.html',
		disableHostCheck: true,
		hot: true,
		stats: true,
		historyApiFallback: {
			index: '/index.html',
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
					{
						loader: 'awesome-typescript-loader',
						options: {
							useCache: false,
						},
					},
				],
				exclude: ['node_modules'],
				include: [
					path.resolve(__dirname, 'src/app/ts'),
				]
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