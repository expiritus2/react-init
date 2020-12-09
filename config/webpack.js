const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.resolve(ROOT, 'src');

require('dotenv').config({ path: path.resolve(ROOT, '.env') });

const { getClientEnvironment } = require('./env');

module.exports = {
    entry: [path.resolve(SRC, 'index.js')],
    output: {
        path: path.resolve(ROOT, 'dist'),
    },
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
                test: /\.module\.(css|sass|scss)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
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
                test: /\.(css|sass|scss)$/,
                exclude: /\.module\.(css|sass|scss)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
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
            template: path.resolve(ROOT, 'public', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'static/[name].[fullhash].css',
        }),
        new webpack.DefinePlugin(getClientEnvironment('').stringified),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(ROOT, 'public'), to: '' },
            ],
        }),
    ],
    devtool: 'source-map',
};
