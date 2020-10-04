/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const envPath = path.resolve(fs.realpathSync(process.cwd()), '.env');
const dotenvFiles = [
  `${envPath}`,
  `${envPath}.${NODE_ENV}`,
  `${envPath}.${NODE_ENV}.local`,
];
let result;
dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    result = dotenv.config({ path: dotenvFile });
  }
});

module.exports = {
  mode: NODE_ENV,
  entry: {
    main: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    overlay: true,
    stats: 'errors-only',
    hot: true,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.BannerPlugin({
      banner: `Build date: ${new Date().toLocaleString()}`,
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(result.parsed),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      templateParameters: {
        env: NODE_ENV === 'development' ? '(development)' : '',
      },
      minify:
        NODE_ENV === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
      hash: NODE_ENV === 'production',
    }),
    new CleanWebpackPlugin(),
  ],
};
