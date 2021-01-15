const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        port: 8888
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
        extensions: ['.js','.scss']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env']]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:  /\.(jpg|png|bmp|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}