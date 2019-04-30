const webpack = require('webpack')
const path = require('path')

function resolve(dir){
  return path.join(__dirname,dir)
}

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
                  .set('components',resolve('src/components'))
                  .set('common',resolve('src/common'))
                  .set('api',resolve('src/api'))
  }
}
