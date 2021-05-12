const path = require('path')

// const LessFunc = require('less-plugin-functions')

const vueSrc = './src'
function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  publicPath: './',
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      const { argv } = process
      const icourt = argv[argv.indexOf('--icourt-mode') + 1]

      // eslint-disable-next-line no-param-reassign
      args[0]['process.env'].MODE = `"${icourt}"`

      return args
    })
    // svg rule loader
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)

    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'))
      .set('base', resolve('src/base'))
      .set('static', resolve('src/static'))
      .set('plugins', resolve('src/plugins'))
      .set('utils', resolve('src/utils'))
  },
  configureWebpack: {
    devServer: {
      proxy: {
        '/apis': {    // 将www.example.com映射为/apis
          target: 'www.example.com',  // 接口域名
          secure: true,  // 如果是https接口，需要配置这个参数
          changeOrigin: true,  // 是否跨域
          pathRewrite: {
            '^/apis': ''   // 需要rewrite的,
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, vueSrc),
      },
      extensions: ['.js', '.vue', '.json'],
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 设计稿宽度的1/10，一般为75
          // eslint-disable-next-line global-require
          require('postcss-px2rem')({ remUnit: 100 }),
        ]
      }
    }
  },
}
