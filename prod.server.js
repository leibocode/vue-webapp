const express = require('express')

const app = express()

const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

const router = express.Router()

app.use(function(req,res,next){

})

router.get('/seller',function(req,res){
    console.log(seller)
    res.json({
        errno:0,
        data:seller
    })
})

router.get('/goods',function(req,res){
    res.json({
        errno:0,
        data:goods
    })
})

router.get('/ratings',function(req,res,next){
    res.json({
        errno:0,
        data:ratings
    })
})

app.use('/api',router)

app.use(express.static('./dist'))

const port = process.env.PORT || 8900

module.exports = app.listen(port, function (err) {
    if (err) {
      console.log(err)
      return
    }
    console.log('Listening at http://localhost:' + port + '\n')
  })
  