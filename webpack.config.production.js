var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "static/bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: "file-loader",
        query: {
          name: "[hash:8].[ext]"
        }
      },
      {
        test: /\.css?$/,
        exclude: [path.resolve(__dirname, "dist")],
        loader: "css-loader"
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ]
};
