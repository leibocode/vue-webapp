const webpack = require('webpack')
const { resolve } = require('path')


const r = path=> resolve(__dirname,path)

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
      app.get('/api/seller',function(req,res){

      })

      app.get('/api/goods',function(req,res){

      })
      app.get('/api/ratings',function(req,res){
        
      })
    }
  },
  chainWebpack(config){
    config.resolve.alias
        .set('components',r('src/components'))
        .set('common',r('src/common'))
        .set('api',r('src/api'))
  }
}
