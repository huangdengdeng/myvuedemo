const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : './',
    outputDir: process.env.NODE_ENV === "development" ? 'devdist' : 'dist', // 不同的环境打不同包名
    css: {  // 一次配置，全局使用，这个scss 因为每个文件都要引入
        // sourceMap: true, // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
        loaderOptions: {
            sass: {
                data: `@import "./src/assets/hotcss/px2rem.scss";`
            }
        }
    },
    lintOnSave: false,  // 关闭eslint
    productionSourceMap: false,
    devServer: {
        host: '0.0.0.0',
        port: 8085,
        open: true,
        https: false,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    configureWebpack: {  // 覆盖webpack默认配置的都在这里
        resolve: {   // 配置解析别名
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@h': path.resolve(__dirname, './src/assets/hotcss'),
                '@s': path.resolve(__dirname, './src/assets/style'),
                '@i': path.resolve(__dirname, './src/assets/images'),
            }
        },
    },
    chainWebpack(config) {
        /* 添加分析工具*/
        if (process.env.NODE_ENV === 'production') {
            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                    .end();
                config.plugins.delete('prefetch')
            }
        }
        config.plugins.delete('preload') // TODO: need test
        config.plugins.delete('prefetch') // 移除prefetch插件（(预先加载模块)）
        // set svg-sprite-loader
        // config.module
        //   .rule('svg')
        //   .exclude.add(resolve('src/icons'))
        //   .end()
        // config.module
        //   .rule('icons')
        //   .test(/\.svg$/)
        //   .include.add(resolve('src/icons'))
        //   .end()
        //   .use('svg-sprite-loader')
        //   .loader('svg-sprite-loader')
        //   .options({
        //     symbolId: 'icon-[name]'
        //   })
        //   .end()

        // set preserveWhitespace
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true
                return options
            })
            .end()

        config
            // https://webpack.js.org/configuration/devtool/#development
            .when(process.env.NODE_ENV === 'development',
                config => config.devtool('cheap-source-map')
            )

        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    //   config
                    //     .plugin('ScriptExtHtmlWebpackPlugin')
                    //     .after('html')
                    //     .use('script-ext-html-webpack-plugin', [{
                    //     // `runtime` must same as runtimeChunk name. default is `runtime`
                    //       inline: /runtime\..*\.js$/
                    //     }])
                    //     .end()
                    config
                        .optimization.splitChunks({
                            chunks: 'all',
                            // 这种拆包方式也生效
                            // maxInitialRequests: Infinity,
                            // minSize: 100000, // 依赖包超过100000bit将被单独打包
                            // automaticNameDelimiter:'-',
                            // cacheGroups: {
                            //     vendor: {
                            //     test: /[\\/]node_modules[\\/]/,
                            //     name(module) {
                            //         const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                            //         return `chunk.${packageName.replace('@', '')}`;
                            //     },
                            //     priority:10
                            //     }
                            // }
                            cacheGroups: {
                                libs: {
                                    name: 'chunk-libs',
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: 'initial' // only package third parties that are initially dependent
                                },
                                elementUI: {
                                    name: 'chunk-elementUI', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                                },
                                // vue: {
                                //     name: 'vue', // split elementUI into a single package
                                //     priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                //     test: /[\\/]node_modules[\\/]_?vue(.*)/ // in order to adapt to cnpm
                                // },
                                vueRouter: {
                                    name: 'chunk-vueRouter', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?vue-router(.*)/ // in order to adapt to cnpm
                                },
                                axios: {
                                    name: 'axios', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?axios(.*)/ // in order to adapt to cnpm
                                },
                                vueBaiduMap: {
                                    name: 'chunk-vueBaiduMap', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?vue-baidu-map(.*)/ // in order to adapt to cnpm
                                },
                                // commons: {
                                //     name: 'chunk-commons',
                                //     test: resolve('src/components'), // can customize your rules
                                //     minChunks: 2, //  minimum common number
                                //     priority: 5,
                                //     reuseExistingChunk: true
                                // },
                                common: {
                                    chunks:"all",
                                    test:/[\\/]src[\\/]components(.*)/,
                                    name: "common",
                                    minChunks: 1,
                                    maxInitialRequests: 5,
                                    minSize: 0,
                                    priority:60
                                  }
                            }
                        })
                    config.optimization.runtimeChunk('single')
                }
            )
        if (process.env.NODE_ENV === 'production') { // 生产环境配置Gzip压缩
            // 为生产环境修改配置... 
            // config.mode = 'production'
            return {
                plugins: [new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/, //匹配文件名
                    threshold: 10240, //对超过10k的数据进行压缩
                    deleteOriginalAssets: true //是否删除原文件
                })]
            }
        }
    }
}