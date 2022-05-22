const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'my-loader',
                        options: {
                            flag: true,
                        },
                    },
                ],
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'md-loader',
                    },
                ],
            },
        ],
    },
    resolveLoader: {
        modules: ['node_modules', './src/myLoader'],
    },
    devServer: {
        contentBase: './dist',
        overlay: {
            warnings: true,
            errors: true,
        },
        open: true,
    },
}
