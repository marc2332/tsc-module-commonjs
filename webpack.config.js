const path = require('path')

module.exports = {
	mode: 'production',
	optimization: {
		minimize: false
	},
	entry:{
		index: path.join(__dirname, 'example_file.ts')
	},
	output:{
		path: path.join(__dirname, 'with-ts-loader'),
		filename: 'example_file.js'
	},
	module: {
		rules: [
			{
				test: /\.(ts)$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
				options:{
					"compilerOptions":{
						"sourceMap": true,
						"target": "es6",
						"lib": [
							"es6"
						],
						"module": "commonjs",
						"moduleResolution": "node",
						"esModuleInterop": true,
						"resolveJsonModule": true,
					}
				}
			},
		]
	},
	resolve:{
		extensions: ['.ts'],
	},
	target: 'node',
	watch: false
}