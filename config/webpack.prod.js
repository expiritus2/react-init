const path = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const common = require('./webpack');

const ROOT = path.resolve(__dirname);

module.exports = merge.strategy({ entry: 'prepend' })(common, {
    mode: 'production',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(ROOT, 'public', 'telegram', 'custom-service-worker.js'), to: 'telegram/service-worker.js' },
            ],
        }),
    ],
});
