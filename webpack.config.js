const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: [
        './src/components/main.ts'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }, {
                test: /\.(gif|png|jpe?g|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader', options: {
                            name: '[path][name].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ]
    },
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Promises vs. Observables',
            favicon: 'src/assets/favicon.ico',
            template: './src/index.html',
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: 'index.html'
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};