var webpack = requiere("webpack");
var path = requerie("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
	entry: SRC_DIR + "/appt/index.js",
	output: {
		path: DIST_DIR+"/apt",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	modules: {
		loaders : [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-2"]
				}
			}
		]
	}
};

module.exports = config;
