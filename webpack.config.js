const path = require("path");

module.exports = {
    entry: './src/app/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    mode: "development",
    devServer: {
        port: 3000,
        historyApiFallback: {
          index: 'src/index.html'
        }
      }
};
