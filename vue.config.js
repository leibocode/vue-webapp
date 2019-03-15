const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer:{
    before(app){
      
    }
  },
  chainWebpack(config){
    config.resolve.alias
        .set('components',resolve('src/components'))
        .set('common',resolve('src/common'))
        .set('api',resolve('src/api'))
  }
}
