const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: path.resolve(__dirname, "src", "js", "index.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),    
    },
    plugins: [new HTMLWebpackPlugin()],
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "dist", "index.html")
        },
        port: 3000,
        open: true
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            exclude: "/node_modules",
        },
        {
            test: /\.js$/i,
            exclude: "/node_modules",
            use: {
                loader: "babel-loader",
                options: {
                    presets: [["@babel/preset-env", { targets: "defaults" }]]
                } 
            }
        }]
    }
}