const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 4200,
      hot: true,
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })],
    resolve: {
      extensions: ['.js', '.ts']
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.less$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
          {
            test: /\.m?(js|ts)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
        ],
      },
      optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
          new TerserPlugin(),
        ],
      },
}