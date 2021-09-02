module.exports = {
    mode: 'development',
    entry: {
        'index': './src/js/index.js', //'index'がoutputの[name]になる。複数jsを出力したい場合は'index'の部分の名前を変えると[name]に反映される
    },
    output: {
        path: `${__dirname}/docs/js`,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                ]
            }
        ]
    },
    target: ["web", "es5"],
};
