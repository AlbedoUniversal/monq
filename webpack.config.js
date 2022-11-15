const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  assets: 'assets/',
};
const devMode = process.env.NODE_ENV !== 'production';

const putFilesToDist = (folder) =>
  devMode ? `${folder}/[name][ext]` : `${folder}/[name].[contenthash][ext]`;

const pages = ['index', 'header', 'footer', 'monitoring', 'umbrellaMonitoring', 'result'];

const htmlPages = pages.map((page) => {
  return new HtmlWebpackPlugin({
    template: `${PATHS.src}/html/${page}.ejs`,
    filename: `${page}.html`, // dev ? `${page}.html` : html/`${page}.html`
    favicon: `${PATHS.src}/assets/icons/logo.svg`,
  });
});

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'styles/[name].[contenthash].css',
    chunkFilename: '[name].css',
  }),
  new HtmlWebpackPlugin({
    template: `${PATHS.src}/html/index.ejs`,
    filename: './index.html', // './index.html' - devServer, 'html/index.html' - build // devMode ? './index.html' : 'html/index.html',
    favicon: `${PATHS.src}/assets/icons/logo.svg`,
  }),

  ...htmlPages,
];

if (devMode) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins,
  output: {
    filename: 'js/[name].[contenthash].js',
    path: PATHS.dist,
    publicPath: '/', // devMode ? '/' : './',
    // assetModuleFilename: 'src/[name][ext][query]'
  },
  stats: { children: true },
  optimization: {
    // minimize: true,
    minimizer: [
      new TerserWebpackPlugin(),
      // new CssMinimizerPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.ejs$/i,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false },
          },
          {
            loader: 'template-ejs-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: putFilesToDist('images'),
        },
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: putFilesToDist('icons'),
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: putFilesToDist('fonts'),
        },
      },
      {
        test: /\.json$/i,
        loader: 'json-loader',
        type: 'javascript/auto',
      },

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        // use: {
        // 	loader: 'babel-loader',
        // 	options: {
        // 		presets: ['@babel/preset-env']
        // 	}
        // }
      },
    ],
  },
};
