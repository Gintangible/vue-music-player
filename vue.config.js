const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    configureWebpack: {
        resolve: {
            // 添加别名
            alias: {
                '@': resolve('src'),
                assets: resolve('src/assets'),
                components: resolve('src/components'),
                views: resolve('src/views')
            }
        }
    },

    chainWebpack(config) {
        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end();
    },
    // 关闭eslint
    lintOnSave: false
};
