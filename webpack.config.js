const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const srcPath = path.resolve(__dirname, "./src");
const distPath = path.resolve(__dirname, "./dist");
const prodUrl = "/red-pepper-pizza";

module.exports = (env) => ({
  entry: [path.resolve(srcPath, "./app.jsx")],
  output: {
    filename: "js/[name].bundle.js",
    path: distPath,
    publicPath: env.mode === "prod" ? prodUrl : "/",
  },
  devtool: env.mode === "dev" ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[folder]/[name].[ext]",
              outputPath: "assets/",
              publicPath: env.mode === "prod" ? `${prodUrl}/assets` : "/assets",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  resolve: {
    alias: {
      variables: path.resolve(srcPath, "scss/variables.scss"),
      mixins: path.resolve(srcPath, "scss/mixins.scss"),
    },
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new MiniCssExtractPlugin({ filename: "css/[name].css" }),
    new HtmlWebpackPlugin({
      template: path.resolve(srcPath, "./views/index.html"),
      filename: "index.html",
      inject: "body",
    }),
    new webpack.DefinePlugin({
      BASENAME: JSON.stringify(env.mode === "prod" ? prodUrl : "/"),
    }),
  ],

  devServer: {
    open: true,
    writeToDisk: true,
    contentBase: distPath,
    port: "8080",
    historyApiFallback: true,
  },
});
