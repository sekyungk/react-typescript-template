const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: {
    main: "./src/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `Build date: ${new Date().toLocaleString()}`,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      templateParameters: {
        env: mode === "development" ? "(development)" : "",
      },
      minify:
        mode === "production"
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
      hash: mode === "production",
    }),
    new CleanWebpackPlugin(),
  ],
};
