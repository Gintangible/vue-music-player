const path = require('path');

var express = require('express');
var axios = require('axios');
var app = express();

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
    lintOnSave: false,
    devServer: {
        open: true,
        // proxy: {
        //     '/getDiscList': {
        //         //将www.exaple.com印射为/apis
        //         target: 'https://c.y.qq.com/', // 接口域名
        //         changeOrigin: true, //是否跨域
        //         pathRewrite: {
        //             '^/api': '/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg' //需要rewrite的,
        //         }
        //     }
        // },
        before(apiRoutes) {
            apiRoutes.get('/api/getDiscList', (req, res) => {
                const url =
                    'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';
                axios
                    .get(url, {
                        headers: {
                            referer: 'https://c.y.qq.com/',
                            host: 'c.y.qq.com'
                        },
                        params: req.query //这是请求的query
                    })
                    .then(response => {
                        //response是api地址返回的，数据在data里。
                        res.json(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }),
                apiRoutes.get('/api/songList', function(req, res) {
                    var url =
                        'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg';

                    axios
                        .get(url, {
                            headers: {
                                referer: 'https://c.y.qq.com/',
                                host: 'c.y.qq.com'
                            },
                            params: req.query
                        })
                        .then(response => {
                            var ret4 = response.data;
                            if (typeof ret4 === 'string') {
                                var reg = /^\w+\(({[^()]+})\)$/;
                                var matche = ret4.match(reg);
                                if (matche) {
                                    ret4 = JSON.parse(matche[1]);
                                }
                            }
                            res.json(ret4);
                        })
                        .catch(e => {
                            console.log(e);
                        });
                });
        }
    }
};
