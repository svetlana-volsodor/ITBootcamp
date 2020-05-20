let putanja = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: putanja.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    module: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }]
};