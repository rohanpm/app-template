var failPlugin = require('webpack-fail-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: "/dist/",
    },
    plugins: [
        failPlugin
    ],
    devServer: { inline: true },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".scss"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loaders: ["babel-loader", "awesome-typescript-loader"] },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader?modules", "sass-loader"]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader?modules"]
            }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
};