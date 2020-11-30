const path = require('path');

const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT = path.resolve(__dirname);
const SRC = path.resolve(ROOT, 'src');

require('dotenv').config();

module.exports = {
    entry: [path.resolve(SRC, 'index.js')],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: true,
                        extends: path.resolve(ROOT, '.babelrc'),
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(woff|woff2|otf|ttf|eot|png|jpe?g|svg|gif|glsl)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/',
                    publicPath: './assets',
                },
            },
            {
                test: /\.(css|sass|scss)$/,
                exclude: /\.notmodule\.(css|sass|scss)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: true,
                    },
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 2,
                        modules: {
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    },
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    },
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                }],
            },
            {
                test: /\.notmodule\.(css|sass|scss)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: true,
                    },
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 2,
                        modules: false,
                    },
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    },
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                }],
            },
        ],
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx'],
        alias: {
            styles: path.resolve(SRC, 'styles/'),
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: path.resolve(SRC, 'index.html'),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'static/[name].[hash].css',
        }),
        new webpack.EnvironmentPlugin([]),
    ],
    devtool: 'source-map',
};
