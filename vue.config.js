const webpack = require('webpack');
// 开启 gzip 
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const path = require('path');
const proxy = require('./vue.proxy.config');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: 'dist',
    productionSourceMap: false,
    runtimeCompiler: true,

    chainWebpack: config => {
        config.plugins.delete('prefetch');
        if (process.env.NODE_ENV === 'production') {
            config.plugin('compression').use(CompressionWebpackPlugin, [{
                test: /\.js$|\.css$/,
                algorithm: 'gzip',
                threshold: 1024 * 512
            }]);
        }
    },
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        https: false,
        open: true,
        proxy: proxy
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                // '@views': path.resolve(__dirname, 'src/app/views'),
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                // _: 'lodash',
                Axios: 'axios'
            })
        ]
    },

};