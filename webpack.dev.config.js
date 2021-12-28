const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')

module.exports = (env) => {
  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext][query]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'cheap-module-source-map',
    target: 'web',
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'build'),
      },
      historyApiFallback: true,
      port: 1000,
      open: false,
      hot: true,
      https: false,
      headers: { 'Access-Control-Allow-Origin': '*' },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico',
        historyApiFallback: 'public/index/html',
      }),
      //new webpack.HotModuleReplacementPlugin(),
      new ForkTsCheckerWebpackPlugin({
        async: false,
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
          mode: 'write-references',
        },
      }),
      new ESLintPlugin({
        extensions: ['js', 'ts', 'tsx'],
      }),
      new DotenvPlugin({
        path: './variables.env.dev',
      }),
      new webpack.EnvironmentPlugin({
        BASE_URL: env.base_url || 'http://localhost:1000',
      }),
    ],
  }
}
