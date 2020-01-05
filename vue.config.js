const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

// 注入版本信息
process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
    configureWebpack: {
        resolve: {
            // 添加别名
            alias: {
                '@': resolve('src'),
                assets: resolve('src/assets'),
                components: resolve('src/components'),
                views: resolve('src/views'),
                api: resolve('src/api')
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/variable.scss";
                            @import "@/styles/mixin.scss";`
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
        proxy: {
            '/apis': {
                //axios的配置：当遇到apis时替换成为target内的内容
                target: 'http://192.168.1.108:9991', // target host
                ws: true, // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': '' // rewrite path
                }
            },
            '/api/getRecommend': {
                //axios的配置：当遇到apis时替换成为target内的内容
                target:
                    'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', // target host
                ws: true, // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    '^/api/getRecommend': '' // rewrite path
                },
                headers: {
                    referer: 'https://m.y.qq.com/',
                    origin: 'm.y.qq.com'
                }
            },
            '/api/getDiss': {
                //axios的配置：当遇到apis时替换成为target内的内容
                target:
                    'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg', // target host
                ws: true, // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    '^/api/getDiss': '' // rewrite path
                },
                headers: {
                    referer: 'https://c.y.qq.com/',
                    origin: 'c.y.qq.com'
                }
            },
            '/api/getSingerList': {
                //axios的配置：当遇到apis时替换成为target内的内容
                target: 'https://c.y.qq.com/v8/fcg-bin/v8.fcg', // target host
                ws: true, // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    '^/api/getSingerList': '' // rewrite path
                },
                headers: {
                    referer: 'https://y.qq.com/portal/singer_list.html',
                    origin: 'c.y.qq.com'
                }
            },
            '/api/getSingerDetail': {
                //axios的配置：当遇到apis时替换成为target内的内容
                target:
                    'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg', // target host
                ws: true, // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    '^/api/getSingerDetail': '' // rewrite path
                },
                headers: {
                    referer:
                        'https://y.qq.com/n/yqq/singer/003Nz2So3XXYek.html',
                    origin: 'c.y.qq.com'
                }
            },
            '/api/lyric': {
                //axios的配置：当遇到apis时替换成为target内的内容
                target:
                    'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg', // target host
                ws: true, // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    '^/api/lyric': '' // rewrite path
                },
                headers: {
                    referer: 'https://c.y.qq.com/',
                    origin: 'c.y.qq.com'
                }
            },
            '/api/getDiscSongList': {
                //axios的配置：当遇到apis时替换成为target内的内容
                target:
                    'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg', // target host
                ws: true, // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    '^/api/getDiscSongList': '' // rewrite path
                },
                headers: {
                    referer: 'https://c.y.qq.com/',
                    origin: 'c.y.qq.com'
                }
            },
            '/api/getTopList': {
                //axios的配置：当遇到apis时替换成为target内的内容
                target: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg', // target host
                ws: true, // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    '^/api/getTopList': '' // rewrite path
                },
                headers: {
                    referer: 'https://m.y.qq.com',
                    origin: 'https://m.y.qq.com'
                }
            },
            '/api/getDetailToplist': {
                //axios的配置：当遇到apis时替换成为target内的内容
                target: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg', // target host
                ws: true, // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    '^/api/getDetailToplist': '' // rewrite path
                },
                headers: {
                    referer: 'c.y.qq.com',
                    origin: 'c.y.qq.com'
                }
            },
            '/api/getHotKey': {
                //axios的配置：当遇到apis时替换成为target内的内容
                target: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg', // target host
                ws: true, // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    '^/api/getHotKey': '' // rewrite path
                },
                headers: {
                    referer: 'https://m.y.qq.com/',
                    origin: 'https://m.y.qq.com/'
                }
            },
            '/api/search': {
                //axios的配置：当遇到apis时替换成为target内的内容
                target: 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp', // target host
                ws: true, // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    '^/api/search': '' // rewrite path
                },
                headers: {
                    referer: 'https://m.y.qq.com/',
                    origin: 'https://m.y.qq.com/'
                }
            }
        }
    }
};
