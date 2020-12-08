const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: 'inline-source-map',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
            process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
          },

          {
            test: /\.(png|svg|jpe?g|gif)$/,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },

          {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
        },
        ],
      },


    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './index.html'), 
            filename: 'index.html', 
        }),

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        
    ],

    devServer: {  
      contentBase: './src/img',  
      port: 7700, 
  } 

}