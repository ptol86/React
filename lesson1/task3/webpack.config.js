const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
    entry: "./src/index.js",
        output: {
            path: __dirname + '/review_build',
        },
    module: {
        
        rules: [
            {
                test:/.js$/,
                use: ["babel-loader"]
            },
            {
                test:/.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}