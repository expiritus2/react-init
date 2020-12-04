const { merge } = require('webpack-merge');

const common = require('./webpack');

module.exports = merge(common, {
    mode: 'production',
});
