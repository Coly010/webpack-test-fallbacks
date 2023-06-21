const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [new HtmlWebpackPlugin({template: './index.html'}), new webpack.ProvidePlugin({
        process: path.resolve(path.join(__dirname, "./process"))
    })],
}