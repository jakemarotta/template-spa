const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = function (_env, argv) {
  const isProduction = argv.mode === 'production'
  const isDevelopment = !isProduction

  return {
    devtool: isDevelopment && 'cheap-module-source-map',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/js/[name].[contenthash:8].js',
      publicPath: '/',
    },
    devServer: {
      static: './',
      port: 8080,
      hot: true,
      open: true,
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
      plugins: [
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: [
            'babel-loader'
          ],
        },
        {
          test: /\.module\.s[ac]ss$/,
          use: [
            {
              loader: isDevelopment ? require.resolve('style-loader', { paths: [__dirname] }) : MiniCssExtractPlugin.loader,
            },
            {
              loader: require.resolve('css-loader', { paths: [__dirname] }),
              options: {
                modules: true,
                sourceMap: isDevelopment
              },
            },
            {
              loader: require.resolve('sass-loader', { paths: [__dirname] }),
              options: {
                sourceMap: isDevelopment
              },
            },
          ],
        },
        {
          test: /\.s?[ac]ss$/,
          exclude: /\.module.s[ac]ss$/,
          use: [
            {
              loader: isDevelopment ? require.resolve('style-loader', { paths: [__dirname] }) : MiniCssExtractPlugin.loader,
            },
            {
              loader: require.resolve('css-loader', { paths: [__dirname] }),
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              },
            },
          ],
        },
        {
          test: /\.(ico|woff|woff2|eot|ttf|svg|jpg|png)$/,
          type: 'asset',
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[fullhash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[fullhash].css',
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname,'/src/index.html'),
      }),
      new ESLintPlugin({
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        exclude: 'node_modules',
      }),
    ],
  };
}
