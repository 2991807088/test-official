const title = '测试'
const port = '1111'
const path = require("path")
module.exports = {
    publicPath: './', /* 基本路径*/
    lintOnSave: 'warning', /* 是否在保存时使用eslint-loader进行检查*/
    productionSourceMap: false, /* 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建*/
    devServer: {
        port,
        proxy: {
            '/api': {
                target: 'http://v.juhe.cn',
                // secure: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        name: title
    },
    chainWebpack: config => {
        const types = ["vue-modules", "vue", "normal-modules", "normal"];
        types.forEach(type => {
            //匹配到所有需要导入的文件
            config.module
                .rule("scss")
                .oneOf(type)
                .use("style-resource")
                .loader("style-resources-loader")
                .options({
                    patterns: [
                        path.resolve(
                            __dirname,
                            "./src/assets/scss/mixins.scss"
                        ) /*,
            path.resolve(__dirname, "src/assets/scss/utils.scss")*/
                    ]
                });
        });
    }
}
