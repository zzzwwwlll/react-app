const path = require('path');


module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './src/index.js')],
    output: {
        path: __dirname + './build.js', //打包文件的输出路径
        filename: 'bundle.js' //打包文件名
    },
    module: {
        rules: [
            { test: /\.scss$/, use: 'sass-loader' },
            {
                test: /\.jsx$/, use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }]
            }
        ]
    }
}