const webpack = require('webpack')
const path = require('path')

const AppDirectory = path.resolve(__dirname, 'app')
const BinDirectory = path.resolve(__dirname, 'public/build')

let config = {
    entry: AppDirectory + "/main.js",
    output: {
        path: BinDirectory,
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [{
            test: /.js?$/,
            include: AppDirectory,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}

module.exports = config
