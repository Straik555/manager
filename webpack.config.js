const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",

            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.[hash:6].js',
        chunkFilename: '[chunkhash].js',
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        compress: true,
        host: 'localhost',
        hot: true,
        progress: true,
        port: 3000,
        historyApiFallback: true,
        watchOptions: {
            ignored: /node_modules/
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        })
    ]
}