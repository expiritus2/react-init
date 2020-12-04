const { merge } = require('webpack-merge');
const common = require('./webpack');

module.exports = merge(common, {
    mode: 'development',
    stats: 'minimal',
    devServer: {
        open: true,
        hot: true,
    },
});
