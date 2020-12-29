const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        publicPath: '',
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
            ]
          },

          {
            test: /\.(png|svg|jpe?g)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
              },
            ],
          },

          {
            test: /\.(ttf)$/,
            type: 'asset/inline',
          },
        ],
  },

    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './index.html'), 
          filename: 'index.html', 
        }),

        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ] 
}