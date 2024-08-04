const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restaurant",
            template: "./src/index.html",
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    optimization: {
        runtimeChunk: "single",
    }
};
