'use strict';

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    }
};