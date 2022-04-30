const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const loader = require("css-loader");
const { Chunk } = require("webpack");

module.exports = {
  entry: {
    main:path.resolve(__dirname, "src/assets/js/index.js"),
    form:path.resolve(__dirname, "src/assets/js/form.js")
},

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
          test: /\.scss$/i,
          use: ["style-loader","css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename:"index.html",
      template: path.resolve(__dirname, "src/index.html"),
      Chunk: ["main"]
    }),
    new HtmlWebpackPlugin({
      filename:"form.html",
      template: path.resolve(__dirname, "src/page/form.html"),
      Chunk: ["form"]
    })
  ],
  devtool: "source-map",
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    port: 4000
  }
};