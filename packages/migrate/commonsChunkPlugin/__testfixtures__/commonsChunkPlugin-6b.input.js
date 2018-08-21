module.exports = {
	entry: {
		main: './src/index.js',
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "main",
			minChunks: ({ resource }) => {
				// some code
				return /node_modules/.test(resource);
			},
		})
	]
}
